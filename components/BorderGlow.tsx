/**
 * @see https://reactbits.dev/components/border-glow — BorderGlow (Tailwind + TS) from the React Bits registry.
 * Upstream: mesh-gradient border + cursor proximity; optional one-shot `animated` sweep.
 *
 * Local extensions (not on the docs page):
 * - `repeatIntervalMs` — when > 0, loops the sweep; pointer/hover does not drive the glow.
 * - `repeatGapMs` — extra pause after each sweep ends before the next starts (default 0).
 *   Repeat scheduling is chained from the sweep’s `onEnd` (not a fixed timer) so loops don’t race stale `onEnd` handlers.
 * - `elevatedShadow` — set false to drop the default layered card shadow (hero badge on dark bg).
 */
import { useRef, useCallback, useState, useEffect, type ReactNode } from 'react';

interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  /** When > 0, repeats the sweep on a timer and disables pointer/hover-driven glow. */
  repeatIntervalMs?: number;
  /** Pause after each sweep finishes before the next begins (ms). Ignored if `repeatIntervalMs` is not > 0. */
  repeatGapMs?: number;
  colors?: string[];
  fillOpacity?: number;
  /** When false, skips the default layered card box-shadow (e.g. on dark backgrounds). */
  elevatedShadow?: boolean;
}

function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildBoxShadow(glowColor: string, intensity: number): string {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const layers: [number, number, number, number, number, boolean][] = [
    [0, 0, 0, 1, 100, true], [0, 0, 1, 0, 60, true], [0, 0, 3, 0, 50, true],
    [0, 0, 6, 0, 40, true], [0, 0, 15, 0, 30, true], [0, 0, 25, 2, 20, true],
    [0, 0, 50, 2, 10, true],
    [0, 0, 1, 0, 60, false], [0, 0, 3, 0, 50, false], [0, 0, 6, 0, 40, false],
    [0, 0, 15, 0, 30, false], [0, 0, 25, 2, 20, false], [0, 0, 50, 2, 10, false],
  ];
  return layers.map(([x, y, blur, spread, alpha, inset]) => {
    const a = Math.min(alpha * intensity, 100);
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
  }).join(', ');
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
function easeInOutSine(x: number) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}
/** Constant angular velocity — avoids eased mid-arc acceleration that reads as “slipping”. */
function easeLinear(x: number) {
  return x;
}

interface AnimateOpts {
  start?: number; end?: number; duration?: number; delay?: number;
  ease?: (t: number) => number; onUpdate: (v: number) => void; onEnd?: () => void;
}

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: AnimateOpts) {
  const t0 = performance.now() + delay;
  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));
    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }
  setTimeout(() => requestAnimationFrame(tick), delay);
}

/** Scales sweep segment durations from the original React Bits timings (>1 = slower, more legible sweep). */
const SWEEP_TIME_SCALE = 1.55;
const ms = (t: number) => Math.round(t * SWEEP_TIME_SCALE);

/** One continuous angle sweep (same total arc time as the old two-segment sweep). */
const ANGLE_SWEEP_DURATION_MS = ms(1500) + ms(2250);
const EDGE_FADE_IN_MS = ms(500);
const EDGE_FADE_OUT_MS = ms(1500);
/**
 * Fade-out begins so it finishes exactly when the angle sweep finishes, and never before fade-in ends.
 * Replaces a fixed delay so scaled timings stay phase-locked.
 */
const EDGE_FADE_OUT_DELAY_MS = Math.max(EDGE_FADE_IN_MS, ANGLE_SWEEP_DURATION_MS - EDGE_FADE_OUT_MS);

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

/** Matches `BORDER_RING_PX` — inset hairline at inner edge of the gradient ring (no separate CSS border). */
const BORDER_RING_PX = 2;
const CARD_INSET_HAIRLINE = `inset 0 0 0 ${BORDER_RING_PX}px rgba(255, 255, 255, 0.13)`;
/** Conic mask soft edge (%) — enough to look smooth without shrinking the visible band too much. */
const MASK_SWEEP_FEATHER_PCT = 11;

function buildMeshGradients(colors: string[]): string[] {
  const gradients: string[] = [];
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    gradients.push(`radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
  }
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
  return gradients;
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  edgeSensitivity = 30,
  /** HSL (space-separated) — cyan-ice mesh, aligned with `colors` highlights. */
  glowColor = '198 92 68',
  backgroundColor = '#050d18',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = false,
  repeatIntervalMs,
  repeatGapMs = 0,
  /** Bright cyan-sky, deep cool blue, soft ice — cooler than pure sky blue. */
  colors = ['#4DD4FF', '#2A52D8', '#9FE4FF'],
  fillOpacity = 0,
  elevatedShadow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  /** Invalidates stale `onEnd` when a new sweep starts or the component unmounts (fixes repeat stopping after one loop). */
  const sweepGenerationRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorAngle, setCursorAngle] = useState(45);
  const [edgeProximity, setEdgeProximity] = useState(0);
  const [sweepActive, setSweepActive] = useState(false);

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, [getCenterOfElement]);

  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    const radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, [getCenterOfElement]);

  const pointerDriven = repeatIntervalMs == null;

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDriven) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setEdgeProximity(getEdgeProximity(card, x, y));
    setCursorAngle(getCursorAngle(card, x, y));
  }, [pointerDriven, getEdgeProximity, getCursorAngle]);

  const runSweepCycle = useCallback((onCycleComplete?: () => void) => {
    const angleStart = 110;
    const angleEnd = 465;
    const gen = ++sweepGenerationRef.current;
    setSweepActive(true);
    setCursorAngle(angleStart);

    animateValue({ ease: easeInOutSine, duration: EDGE_FADE_IN_MS, onUpdate: v => setEdgeProximity(v / 100) });
    animateValue({
      ease: easeLinear,
      duration: ANGLE_SWEEP_DURATION_MS,
      onUpdate: v => setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart),
    });
    animateValue({
      ease: easeInOutSine,
      delay: EDGE_FADE_OUT_DELAY_MS,
      duration: EDGE_FADE_OUT_MS,
      start: 100,
      end: 0,
      onUpdate: v => setEdgeProximity(v / 100),
      onEnd: () => {
        if (sweepGenerationRef.current !== gen) return;
        setSweepActive(false);
        onCycleComplete?.();
      },
    });
  }, []);

  useEffect(() => {
    if (!animated) return;
    runSweepCycle();
    return () => {
      sweepGenerationRef.current += 1;
    };
  }, [animated, runSweepCycle]);

  useEffect(() => {
    if (repeatIntervalMs == null || repeatIntervalMs <= 0) return;
    let cancelled = false;
    let gapTimeoutId: number | undefined;

    const scheduleNext = () => {
      if (cancelled) return;
      runSweepCycle(() => {
        if (cancelled) return;
        if (repeatGapMs > 0) {
          gapTimeoutId = window.setTimeout(() => {
            if (!cancelled) scheduleNext();
          }, repeatGapMs);
        } else {
          requestAnimationFrame(() => {
            if (!cancelled) scheduleNext();
          });
        }
      });
    };

    scheduleNext();
    return () => {
      cancelled = true;
      sweepGenerationRef.current += 1;
      if (gapTimeoutId !== undefined) window.clearTimeout(gapTimeoutId);
    };
  }, [repeatIntervalMs, repeatGapMs, runSweepCycle]);

  const colorSensitivity = edgeSensitivity + 20;
  const isVisible = (pointerDriven && isHovered) || sweepActive;
  const borderOpacity = isVisible
    ? Math.max(0, (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity))
    : 0;
  const glowOpacity = isVisible
    ? Math.max(0, (edgeProximity * 100 - edgeSensitivity) / (100 - edgeSensitivity))
    : 0;

  const meshGradients = buildMeshGradients(colors);
  const borderBg = meshGradients.map(g => `${g} border-box`);
  const showFillLayer = fillOpacity > 0;
  const fillBg = showFillLayer ? meshGradients.map(g => `${g} padding-box`) : [];
  const angleDeg = `${cursorAngle.toFixed(3)}deg`;

  const showOuterGlow = glowRadius > 0;

  return (
    <div
      className={`relative overflow-visible ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {showOuterGlow && (
        <span
          className="pointer-events-none absolute z-0 rounded-[inherit]"
          style={{
            inset: `${-glowRadius}px`,
            maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
            WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
            opacity: glowOpacity,
            mixBlendMode: 'plus-lighter',
            transition: isVisible ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
          } as React.CSSProperties}
        >
          <span
            className="absolute rounded-[inherit]"
            style={{
              inset: `${glowRadius}px`,
              boxShadow: buildBoxShadow(glowColor, glowIntensity),
            }}
          />
        </span>
      )}

      <div
        ref={cardRef}
        onPointerMove={pointerDriven ? handlePointerMove : undefined}
        onPointerEnter={pointerDriven ? () => setIsHovered(true) : undefined}
        onPointerLeave={pointerDriven ? () => setIsHovered(false) : undefined}
        className="relative isolate z-[1] grid overflow-hidden rounded-[inherit] border-0"
        style={{
          background: backgroundColor,
          borderRadius: `${borderRadius}px`,
          transform: 'translate3d(0, 0, 0.01px)',
          boxShadow: elevatedShadow
            ? `${CARD_INSET_HAIRLINE}, rgba(0,0,0,0.1) 0 1px 2px, rgba(0,0,0,0.1) 0 2px 4px, rgba(0,0,0,0.1) 0 4px 8px, rgba(0,0,0,0.1) 0 8px 16px, rgba(0,0,0,0.1) 0 16px 32px, rgba(0,0,0,0.1) 0 32px 64px`
            : CARD_INSET_HAIRLINE,
        }}
      >
        {/* mesh gradient border — ring width matches CARD_INSET hairline (single shared curve). */}
        <div
        className="absolute inset-0 -z-[1]"
        style={{
          boxSizing: 'border-box',
          borderRadius: `${borderRadius}px`,
          border: `${BORDER_RING_PX}px solid transparent`,
          background: [
            `linear-gradient(${backgroundColor} 0 100%) padding-box`,
            'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
            ...borderBg,
          ].join(', '),
          opacity: borderOpacity,
          maskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + MASK_SWEEP_FEATHER_PCT}%, transparent ${100 - coneSpread - MASK_SWEEP_FEATHER_PCT}%, black ${100 - coneSpread}%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + MASK_SWEEP_FEATHER_PCT}%, transparent ${100 - coneSpread - MASK_SWEEP_FEATHER_PCT}%, black ${100 - coneSpread}%)`,
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          transition: isVisible ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        />

        {showFillLayer && (
          <div
            className="absolute inset-0 -z-[1]"
            style={{
              boxSizing: 'border-box',
              borderRadius: `${borderRadius}px`,
              border: `${BORDER_RING_PX}px solid transparent`,
              background: fillBg.join(', '),
              maskImage: [
                'linear-gradient(to bottom, black, black)',
                'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
                'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
                'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
                'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
                'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
                `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
              ].join(', '),
              WebkitMaskImage: [
                'linear-gradient(to bottom, black, black)',
                'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
                'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
                'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
                'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
                'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
                `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
              ].join(', '),
              maskComposite: 'subtract, add, add, add, add, add',
              WebkitMaskComposite: 'source-out, source-over, source-over, source-over, source-over, source-over',
              opacity: borderOpacity * fillOpacity,
              mixBlendMode: 'soft-light',
              transition: isVisible ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
            } as React.CSSProperties}
          />
        )}

        <div className="relative z-[1] flex min-h-0 min-w-0 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BorderGlow;
