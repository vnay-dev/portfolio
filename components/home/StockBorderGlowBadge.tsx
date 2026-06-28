"use client";

import type { ReactNode } from "react";
import BorderGlow from "@/components/BorderGlow";

const DEFAULT_LABEL = "Design Systems @ Air India, Digital & Tech";

/** Enables `BorderGlow` auto-repeat (value must be > 0; timing uses sweep duration + gap). */
const AUTO_REPEAT_ENABLED = 1;

type StockBorderGlowBadgeProps = {
  children?: ReactNode;
  className?: string;
  /** Pause after each glow sweep ends before the next starts (milliseconds). */
  repeatGapMs?: number;
  /** How much faster the border travels while hovered (1 = no change, 2 = twice as fast). */
  hoverSpeedMultiplier?: number;
  /** When provided, the badge becomes a toggle button that fires this on click. */
  onClick?: () => void;
  /** Reflects the expanded state of the content the badge controls (for aria-expanded). */
  expanded?: boolean;
  /** Id of the element this badge expands/collapses (for aria-controls). */
  controlsId?: string;
};

/**
 * Border Glow from
 * [React Bits Border Glow](https://reactbits.dev/components/border-glow) (`BorderGlow-TS-TW`),
 * with a cyan-ice mesh: `#4DD4FF` / `#2A52D8` / `#9FE4FF`, `glowColor` aligned to that hue,
 * dark fill `#050d18`.
 * **Automated:** idle plays a looping appear/sweep/fade pulse; on hover the motion morphs
 * into a steadily-lit border circling continuously (and faster).
 * When `onClick` is supplied the badge renders as an accessible toggle button.
 */
export function StockBorderGlowBadge({
  children,
  className = "",
  repeatGapMs = 0,
  hoverSpeedMultiplier = 4.2,
  onClick,
  expanded,
  controlsId,
}: StockBorderGlowBadgeProps) {
  const badge = (
    <BorderGlow
      className={`w-fit max-w-full cursor-pointer ${className}`.trim()}
      borderRadius={16}
      coneSpread={22}
      glowRadius={0}
      repeatIntervalMs={AUTO_REPEAT_ENABLED}
      repeatGapMs={repeatGapMs}
      hoverSpeedMultiplier={hoverSpeedMultiplier}
      elevatedShadow={false}
    >
      <p className="font-hanken p-4 text-sm leading-snug text-white sm:text-base md:text-lg">
        {children ?? DEFAULT_LABEL}
      </p>
    </BorderGlow>
  );

  if (!onClick) return badge;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      aria-controls={controlsId}
      className="w-fit max-w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left"
    >
      {badge}
    </button>
  );
}
