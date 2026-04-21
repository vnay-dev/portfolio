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
};

/**
 * Border Glow from
 * [React Bits Border Glow](https://reactbits.dev/components/border-glow) (`BorderGlow-TS-TW`),
 * with a cyan-ice mesh: `#4DD4FF` / `#2A52D8` / `#9FE4FF`, `glowColor` aligned to that hue,
 * dark fill `#050d18`.
 * **Automated:** timed sweep only (no hover) — border shine travels on a loop.
 */
export function StockBorderGlowBadge({
  children,
  className = "",
  repeatGapMs = 0,
}: StockBorderGlowBadgeProps) {
  return (
    <BorderGlow
      className={`w-fit max-w-full ${className}`.trim()}
      borderRadius={12}
      coneSpread={22}
      glowRadius={0}
      repeatIntervalMs={AUTO_REPEAT_ENABLED}
      repeatGapMs={repeatGapMs}
      elevatedShadow={false}
    >
      <p className="font-hanken px-5 py-3 text-sm leading-snug text-white sm:px-5 sm:py-3 sm:text-base md:px-5 md:py-3 md:text-lg">
        {children ?? DEFAULT_LABEL}
      </p>
    </BorderGlow>
  );
}
