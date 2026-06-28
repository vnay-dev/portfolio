"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/composite";

// Loaded only when the section first opens, so the Three.js bundle never ships with the initial page.
const Ballpit = dynamic(() => import("@/components/animations/Ballpit/Ballpit"), { ssr: false });

/** Personal intro revealed when the hero badge is clicked. */
const INTRO_BODY =
  "I've been a frontend developer for the past five years, but from early on I was already designing in Figma, building prototypes and exploring better ways to connect design with engineering. Today, I design and build Nebula, the design system powering airindia.com.";

/** Background ball-pit tuning — edit these to change how many balls show, their colors and sizes. */
const BALLPIT_COUNT = 15;
// Violet (#7A5CFF) sits between the blue and light-cyan so it blends into the same family.
const BALLPIT_COLORS = ["#4DD4FF", "#2A52D8", "#7A5CFF", "#9FE4FF"];
// Wider range = a mix of small, medium and a few bigger balls.
const BALLPIT_MIN_SIZE = 0.6;
const BALLPIT_MAX_SIZE = 1.6;
// Flat pit (no depth) so every ball rests on the section's true bottom edge — no floating.
const BALLPIT_MAX_Z = 0;

/**
 * How long the scroll to the hero/projects junction takes (ms). Kept a little shorter than the
 * expansion so the black panel is already opening as we arrive — the bare projects section is
 * never shown on its own first.
 */
const SCROLL_DURATION_MS = 750;
/** Matches the height-expansion CSS duration; used to time scroll-anchoring restore on close. */
const EXPAND_DURATION_MS = 1200;

type IntroRevealProps = {
  /** When true the section expands (drops down) into view. */
  open: boolean;
  /** DOM id so the hero badge can reference it via aria-controls. */
  id?: string;
};

/**
 * Collapsible section that drops down between the hero and the projects sections.
 * Height is animated with the grid-template-rows 0fr→1fr technique (no JS measuring),
 * which stays smooth and responsive at any viewport width.
 */
export function IntroReveal({ open, id = "hero-intro" }: IntroRevealProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  // Drives the height expansion. Starts together with the scroll so the black panel is already
  // opening as the viewport reaches it, then keeps growing to push the projects section down.
  const [expanded, setExpanded] = useState(false);
  // Skip the (GPU-heavy) ball-pit background for users who prefer reduced motion.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handleChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Disable browser scroll anchoring while the panel is open (and during its close animation).
  // Otherwise the browser keeps the projects section visually pinned as the panel grows, adjusting
  // scroll under the hood — which hides the exact push-down effect we want to show.
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.style.overflowAnchor = "none";
      return;
    }
    const timeout = window.setTimeout(() => {
      root.style.overflowAnchor = "";
    }, EXPAND_DURATION_MS);
    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setExpanded(false);
      return;
    }
    const section = sectionRef.current;

    // Capture the junction's document position while the section is still collapsed (its top sits
    // exactly at the hero/projects boundary), then start expanding right away.
    const targetY = section ? window.scrollY + section.getBoundingClientRect().top : window.scrollY;
    setExpanded(true);

    if (!section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    // Scroll the junction up to the top of the viewport while the panel expands concurrently, so
    // the black section is what slides into view (never the bare projects section), and once we
    // arrive the still-growing panel keeps shoving the projects section down on screen.
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();
    let frameId = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / SCROLL_DURATION_MS);
      window.scrollTo(0, startY + distance * easeOut(progress));
      if (progress < 1) frameId = window.requestAnimationFrame(step);
    };
    frameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(frameId);
  }, [open]);

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-hidden={!open}
      className="w-full bg-black text-white"
    >
      <div
        className="grid transition-[grid-template-rows] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="relative flex min-h-[100svh] w-full flex-col justify-center py-16 sm:py-20 md:py-24">
            {open && !reducedMotion ? (
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <Ballpit
                  className="h-full w-full"
                  count={BALLPIT_COUNT}
                  colors={BALLPIT_COLORS}
                  minSize={BALLPIT_MIN_SIZE}
                  maxSize={BALLPIT_MAX_SIZE}
                  maxZ={BALLPIT_MAX_Z}
                  followCursor={false}
                />
              </div>
            ) : null}
            <Container className="relative z-10">
              <p
                className={`w-full max-w-[90%] text-left text-xl leading-relaxed text-white/80 transition-all duration-[1000ms] ease-out motion-reduce:transition-none sm:text-2xl sm:leading-relaxed md:text-3xl md:leading-relaxed lg:w-9/10 lg:text-4xl lg:leading-snug ${expanded
                  ? "translate-y-0 opacity-100 blur-0 delay-[800ms]"
                  : "translate-y-8 opacity-0 blur-[6px] delay-0"
                  }`}
              >
                {INTRO_BODY}
              </p>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
