"use client";

import { useState } from "react";
import type { NavbarFeatureFlags } from "@/app/constants";
import { Hero } from "./Hero";
import { IntroReveal } from "./IntroReveal";

const INTRO_SECTION_ID = "hero-intro";

/**
 * Composes the hero with its collapsible intro section so the badge (inside the hero)
 * can toggle a section that renders right after the hero and before the projects section.
 */
export function HeroWithIntro({ navFeatureFlags }: { navFeatureFlags: NavbarFeatureFlags }) {
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  return (
    <>
      <Hero
        navFeatureFlags={navFeatureFlags}
        isIntroOpen={isIntroOpen}
        introSectionId={INTRO_SECTION_ID}
        onToggleIntro={() => setIsIntroOpen((open) => !open)}
      />
      <IntroReveal id={INTRO_SECTION_ID} open={isIntroOpen} />
    </>
  );
}
