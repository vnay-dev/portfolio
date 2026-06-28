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
  /**
   * Speed multiplier for the moving border while hovered (1 = no change, 2 = twice as fast).
   * On hover the motion also switches from the idle pulse to a steadily-lit continuous circle.
   */
  hoverSpeedMultiplier?: number;
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

function easeInOutSine(x: number) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

/** Scales sweep segment durations from the original React Bits timings (>1 = slower, more legible sweep). */
const SWEEP_TIME_SCALE = 1.55;
const ms = (t: number) => Math.round(t * SWEEP_TIME_SCALE);

/** Time constant for easing the live sweep speed toward its hover target (smaller = snappier). */
const HOVER_SPEED_SMOOTHING_TAU_MS = 120;
/** Time constant for cross-fading between the idle pulse style and the continuous-circling hover style. */
const HOVER_BLEND_TAU_MS = 220;
/**
 * While hovered, how much of the border ring stays lit *outside* the bright highlight (0–1).
 * Keeping this > 0 means no point on the border ever fully goes dark, so the motion reads as a
 * highlight continuously circling a lit ring rather than a band that appears and vanishes.
 */
const HOVER_RING_BASE_REVEAL = 0;
/** Soft-edge width (%) of the hover snake — much tighter than the idle band so it reads as a short segment. */
const COMET_FEATHER_PCT = 3;
/**
 * Hover highlight shape: a comet sized in *perimeter distance* (fraction of the loop), not angle.
 * Keeping its length constant along the perimeter means the streak doesn't stretch on long edges
 * and bunch on short ones, so the whole thing glides uniformly — one object swirling like a stone
 * on a rope. `LEAD` is the short bright nose ahead of the head; `TAIL` is the long fading streak behind.
 */
const COMET_LEAD_FRACTION = 0.01;
const COMET_TAIL_FRACTION = 0.15;

/** One continuous angle sweep (same total arc time as the old two-segment sweep). */
const ANGLE_SWEEP_DURATION_MS = ms(1500) + ms(2250);
const EDGE_FADE_IN_MS = ms(500);
const EDGE_FADE_OUT_MS = ms(1500);
/**
 * Fade-out begins so it finishes exactly when the angle sweep finishes, and never before fade-in ends.
 * Replaces a fixed delay so scaled timings stay phase-locked.
 */
const EDGE_FADE_OUT_DELAY_MS = Math.max(EDGE_FADE_IN_MS, ANGLE_SWEEP_DURATION_MS - EDGE_FADE_OUT_MS);

/** Where each idle sweep starts, and how far it travels (≈ one revolution) per cycle. */
const ANGLE_SWEEP_START_DEG = 110;
const ANGLE_SWEEP_SPAN_DEG = 355;
/** Base angular velocity (deg/ms): one sweep span per sweep duration — the idle and hover motion share this base rate. */
const ANGULAR_RATE_DEG_PER_MS = ANGLE_SWEEP_SPAN_DEG / ANGLE_SWEEP_DURATION_MS;

/**
 * Default "appear → sweep → fade out" opacity pulse for one cycle (`t` = ms elapsed within the cycle).
 * This is the idle motion style; hover cross-fades away from it toward a steadily-lit circling band.
 */
function idleEdgePulse(t: number): number {
  if (t < EDGE_FADE_IN_MS) return easeInOutSine(t / EDGE_FADE_IN_MS);
  if (t < EDGE_FADE_OUT_DELAY_MS) return 1;
  if (t < EDGE_FADE_OUT_DELAY_MS + EDGE_FADE_OUT_MS) {
    return 1 - easeInOutSine((t - EDGE_FADE_OUT_DELAY_MS) / EDGE_FADE_OUT_MS);
  }
  return 0;
}

/**
 * The highlight is positioned by a conic gradient, i.e. by *angle from the element's center*.
 * On a non-square element, equal angles cover unequal perimeter distance, so a constant angular
 * speed visibly races on long edges and drags on short ones. This map lets us instead advance the
 * highlight by constant perimeter distance: it tabulates how far along the border each conic angle
 * lands, so we can invert it (distance → angle) for a uniformly-paced loop.
 */
interface PerimeterMap {
  cumulative: Float64Array;
  total: number;
  steps: number;
}

/** Conic angle (deg, 0 = up, clockwise) → outward ray hit point on the centered rectangle. */
function rectHitPoint(angleDeg: number, halfW: number, halfH: number): [number, number] {
  const a = (angleDeg * Math.PI) / 180;
  const dx = Math.sin(a);
  const dy = -Math.cos(a);
  let t = Infinity;
  if (dx !== 0) t = Math.min(t, halfW / Math.abs(dx));
  if (dy !== 0) t = Math.min(t, halfH / Math.abs(dy));
  return [dx * t, dy * t];
}

function buildPerimeterMap(width: number, height: number, steps = 720): PerimeterMap {
  const halfW = width / 2;
  const halfH = height / 2;
  const cumulative = new Float64Array(steps + 1);
  let [prevX, prevY] = rectHitPoint(0, halfW, halfH);
  let total = 0;
  for (let i = 1; i <= steps; i++) {
    const [x, y] = rectHitPoint((360 * i) / steps, halfW, halfH);
    total += Math.hypot(x - prevX, y - prevY);
    cumulative[i] = total;
    prevX = x;
    prevY = y;
  }
  return { cumulative, total, steps };
}

/** Inverse of the map: perimeter fraction (0–1) → conic angle (deg) at constant distance pacing. */
function perimeterFractionToAngle(map: PerimeterMap, fraction: number): number {
  const frac = ((fraction % 1) + 1) % 1;
  const target = frac * map.total;
  let lo = 0;
  let hi = map.steps;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (map.cumulative[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  const i0 = Math.max(0, lo - 1);
  const c0 = map.cumulative[i0];
  const c1 = map.cumulative[lo];
  const segFrac = c1 > c0 ? (target - c0) / (c1 - c0) : 0;
  return ((i0 + segFrac) / map.steps) * 360;
}

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
  hoverSpeedMultiplier = 1,
  /** Bright cyan-sky, deep cool blue, soft ice — cooler than pure sky blue. */
  colors = ['#4DD4FF', '#2A52D8', '#9FE4FF'],
  fillOpacity = 0,
  elevatedShadow = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  /** Invalidates stale `onEnd` when a new sweep starts or the component unmounts (fixes repeat stopping after one loop). */
  const sweepGenerationRef = useRef(0);
  /** Live + target sweep speed (driven by hover). Refs so the rAF loop reads current values without restarting. */
  const sweepSpeedRef = useRef(1);
  const targetSweepSpeedRef = useRef(1);
  /** Hover state mirrored into refs so the persistent driver reads live values without re-subscribing. */
  const isHoveredRef = useRef(false);
  /** True only on devices with a real hover (mouse/trackpad). Keeps touch taps from triggering hover. */
  const canHoverRef = useRef(true);
  const hoverSpeedMultiplierRef = useRef(hoverSpeedMultiplier);
  /** Arc-length map of the card's border, rebuilt on resize — used for constant-speed perimeter motion. */
  const perimeterMapRef = useRef<PerimeterMap | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorAngle, setCursorAngle] = useState(45);
  const [edgeProximity, setEdgeProximity] = useState(0);
  const [sweepActive, setSweepActive] = useState(false);
  /** Rendered hover blend (0 = idle pulse, 1 = continuous lit-ring circling). Drives the mask's ring reveal. */
  const [hoverBlend, setHoverBlend] = useState(0);
  /** Comet head/tail widths as conic-gradient percentages, recomputed each frame for constant perimeter size. */
  const [cometLeadPct, setCometLeadPct] = useState(coneSpread);
  const [cometTailPct, setCometTailPct] = useState(coneSpread);

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
    const angleStart = ANGLE_SWEEP_START_DEG;
    const angleEnd = ANGLE_SWEEP_START_DEG + ANGLE_SWEEP_SPAN_DEG;
    const gen = ++sweepGenerationRef.current;
    setSweepActive(true);
    setCursorAngle(angleStart);
    setEdgeProximity(0);

    // Single rAF loop on a "virtual clock": each frame advances virtual time by the
    // real frame delta scaled by the current sweep speed, so hover can speed the sweep
    // up mid-flight. All three phases (angle sweep, edge fade-in, fade-out) read this
    // one clock, keeping them phase-locked at any speed.
    let lastFrame: number | null = null;
    let virtualElapsed = 0;

    const tick = (now: number) => {
      if (sweepGenerationRef.current !== gen) return;
      if (lastFrame === null) lastFrame = now;
      const frameDelta = now - lastFrame;
      lastFrame = now;

      // Ease live speed toward the hover target so speed changes feel smooth, not abrupt.
      const smoothing = 1 - Math.exp(-frameDelta / HOVER_SPEED_SMOOTHING_TAU_MS);
      sweepSpeedRef.current += (targetSweepSpeedRef.current - sweepSpeedRef.current) * smoothing;
      virtualElapsed += frameDelta * sweepSpeedRef.current;

      const angleProgress = Math.min(virtualElapsed / ANGLE_SWEEP_DURATION_MS, 1);
      setCursorAngle((angleEnd - angleStart) * angleProgress + angleStart);

      let edge: number;
      if (virtualElapsed < EDGE_FADE_OUT_DELAY_MS) {
        edge = easeInOutSine(Math.min(virtualElapsed / EDGE_FADE_IN_MS, 1));
      } else {
        const fadeOut = Math.min((virtualElapsed - EDGE_FADE_OUT_DELAY_MS) / EDGE_FADE_OUT_MS, 1);
        edge = 1 - easeInOutSine(fadeOut);
      }
      setEdgeProximity(edge);

      if (virtualElapsed < ANGLE_SWEEP_DURATION_MS) {
        requestAnimationFrame(tick);
      } else {
        setEdgeProximity(0);
        setSweepActive(false);
        onCycleComplete?.();
      }
    };

    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    targetSweepSpeedRef.current = isHovered ? Math.max(hoverSpeedMultiplier, 0.01) : 1;
    isHoveredRef.current = isHovered;
  }, [isHovered, hoverSpeedMultiplier]);

  // Only treat pointer enter/leave as hover on devices that actually support hovering. On touch
  // devices a tap would otherwise fire pointerenter and leave the badge stuck in its hover motion.
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    canHoverRef.current = query.matches;
    const handleChange = (event: MediaQueryListEvent) => {
      canHoverRef.current = event.matches;
      if (!event.matches) setIsHovered(false);
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    hoverSpeedMultiplierRef.current = hoverSpeedMultiplier;
  }, [hoverSpeedMultiplier]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const rebuild = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) perimeterMapRef.current = buildPerimeterMap(width, height);
    };
    rebuild();
    const observer = new ResizeObserver(rebuild);
    observer.observe(el);
    return () => observer.disconnect();
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

    // Persistent driver: the border angle rotates continuously the entire time. A hover
    // blend (0 = idle, 1 = hover) cross-fades between two motion styles:
    //   - idle:  an "appear → sweep → fade out" pulse each cycle (the default look).
    //   - hover: the band stays fully lit and circles continuously, and faster.
    // Because the angle never resets, switching styles is seamless in either direction.
    const cycleLength = ANGLE_SWEEP_DURATION_MS + Math.max(repeatGapMs, 0);
    /** Perimeter fraction advanced per ms at base speed (one loop per revolution worth of sweep). */
    const fractionRatePerMs = ANGULAR_RATE_DEG_PER_MS / 360;
    let rafId = 0;
    let lastFrame: number | null = null;
    let loopFraction = ANGLE_SWEEP_START_DEG / 360;
    let cyclePhase = 0;
    let blend = 0;

    setSweepActive(true);

    const tick = (now: number) => {
      if (lastFrame === null) lastFrame = now;
      const frameDelta = now - lastFrame;
      lastFrame = now;

      const blendTarget = isHoveredRef.current ? 1 : 0;
      blend += (blendTarget - blend) * (1 - Math.exp(-frameDelta / HOVER_BLEND_TAU_MS));

      const speed = 1 + (Math.max(hoverSpeedMultiplierRef.current, 0.01) - 1) * blend;
      const virtualDelta = frameDelta * speed;

      loopFraction += virtualDelta * fractionRatePerMs;
      cyclePhase = (cyclePhase + virtualDelta) % cycleLength;

      // Position is ALWAYS driven by constant-perimeter pacing (in both idle and hover). Keeping a
      // single position curve means crossing into/out of hover only changes speed/shape/brightness —
      // never the position — so the snake continues from exactly where it is with no transient jump.
      const map = perimeterMapRef.current;
      const angle = map ? perimeterFractionToAngle(map, loopFraction) : (((loopFraction % 1) + 1) % 1) * 360;

      // Size the comet by constant perimeter distance: find the angles a fixed distance ahead of and
      // behind the head, and convert those angular spans into conic-gradient percentages. Blending from
      // the symmetric idle band (coneSpread) keeps the idle look intact.
      let hoverLeadPct = coneSpread;
      let hoverTailPct = coneSpread;
      if (map) {
        const leadEndAngle = perimeterFractionToAngle(map, loopFraction + COMET_LEAD_FRACTION);
        const tailEndAngle = perimeterFractionToAngle(map, loopFraction - COMET_TAIL_FRACTION);
        const spanLead = (((leadEndAngle - angle) % 360) + 360) % 360;
        const spanTail = (((angle - tailEndAngle) % 360) + 360) % 360;
        hoverLeadPct = spanLead / 3.6;
        hoverTailPct = spanTail / 3.6;
      }

      // Hover holds the highlight steadily lit (the comet shape lives in the mask); idle keeps its pulse.
      const edge = idleEdgePulse(cyclePhase) * (1 - blend) + blend;

      setCursorAngle(angle);
      setEdgeProximity(edge);
      setHoverBlend(blend);
      setCometLeadPct(coneSpread + (hoverLeadPct - coneSpread) * blend);
      setCometTailPct(coneSpread + (hoverTailPct - coneSpread) * blend);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      setSweepActive(false);
    };
  }, [repeatIntervalMs, repeatGapMs, coneSpread]);

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

  // The conic mask reveals the bright highlight (black stops). It morphs with hover:
  //  - idle (blend 0): a symmetric band centred on the sweep position, with a transparent gap.
  //  - hover (blend 1): an asymmetric comet — short bright lead ahead, long fading tail behind —
  //    over a faint base ring, so it reads as one object swirling continuously around the loop.
  // Stops run clockwise from the head (0%); higher percent = behind the direction of travel.
  const gap = `rgba(0, 0, 0, ${(hoverBlend * HOVER_RING_BASE_REVEAL).toFixed(3)})`;
  const featherPct = MASK_SWEEP_FEATHER_PCT + (COMET_FEATHER_PCT - MASK_SWEEP_FEATHER_PCT) * hoverBlend;
  const rawGapStart = cometLeadPct + featherPct;
  const rawGapEnd = 100 - cometTailPct - featherPct;
  const gapStart = Math.min(rawGapStart, rawGapEnd).toFixed(2);
  const gapEnd = Math.max(rawGapStart, rawGapEnd).toFixed(2);
  const tailStart = (100 - cometTailPct).toFixed(2);
  const sweepMask = `conic-gradient(from ${angleDeg} at center, black 0%, black ${cometLeadPct.toFixed(2)}%, ${gap} ${gapStart}%, ${gap} ${gapEnd}%, black ${tailStart}%, black 100%)`;

  const showOuterGlow = glowRadius > 0;

  // In continuous (repeat) mode the driver animates opacity every frame, so a CSS opacity
  // transition would lag and mute it (e.g. flatten the hover breathe). Drive it directly there;
  // keep the smoothing transition for the pointer-driven hover show/hide.
  const driveContinuous = repeatIntervalMs != null && repeatIntervalMs > 0;
  const opacityTransition = driveContinuous
    ? 'none'
    : isVisible
      ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      : 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1)';

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
            transition: opacityTransition,
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
        onPointerEnter={() => {
          if (canHoverRef.current) setIsHovered(true);
        }}
        onPointerLeave={() => setIsHovered(false)}
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
            maskImage: sweepMask,
            WebkitMaskImage: sweepMask,
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            transition: opacityTransition,
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
              transition: opacityTransition,
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
