export const FEATURE_FLAGS = {
  navHideAboutMe: {
    envVar: "NEXT_PUBLIC_FF_NAV_HIDE_ABOUT_ME",
    defaultValue: false,
    description: "Hide the “About Me” item in the Navbar.",
  },
  navHideHamburger: {
    envVar: "NEXT_PUBLIC_FF_NAV_HIDE_HAMBURGER",
    defaultValue: true,
    description: "Hide the mobile hamburger menu; nav links stay visible in the bar (useful with few items).",
  },
  homeHideThinkingBeyondConstraints: {
    envVar: "NEXT_PUBLIC_FF_HOME_HIDE_THINKING_BEYOND_CONSTRAINTS",
    defaultValue: false,
    description: "Hide the “Thinking beyond constraints” section on the home page.",
  },
  homeHideReflections: {
    envVar: "NEXT_PUBLIC_FF_HOME_HIDE_REFLECTIONS",
    defaultValue: false,
    description: "Hide the “Reflections” section on the home page.",
  },
  homeHideFormAndAesthetics: {
    envVar: "NEXT_PUBLIC_FF_HOME_HIDE_FORM_AND_AESTHETICS",
    defaultValue: false,
    description: "Hide the “Form & aesthetics” section on the home page.",
  },
  homeArtGallery: {
    envVar: "NEXT_PUBLIC_FF_HOME_ART_GALLERY",
    defaultValue: true,
    description: "Show the Art Gallery section on the home page.",
  },
  homeHideStatement: {
    envVar: "NEXT_PUBLIC_FF_HOME_HIDE_STATEMENT",
    defaultValue: true,
    description: "Hide the statement section on the home page.",
  },
  homeShowSecondCaseStudyThumbnail: {
    envVar: "NEXT_PUBLIC_FF_HOME_SHOW_SECOND_CASE_STUDY_THUMBNAIL",
    defaultValue: false,
    description: "Show the second case study thumbnail on the home page.",
  },
  tdbridgeImplementationFramework: {
    envVar: "NEXT_PUBLIC_FF_TDBRIDGE_IMPLEMENTATION_FRAMEWORK",
    defaultValue: true,
    description: "Show the Implementation Framework section on the TDBridge case study page.",
  },
  tdbridgeOutcomePlaceholder: {
    envVar: "NEXT_PUBLIC_FF_TDBRIDGE_OUTCOME_PLACEHOLDER",
    defaultValue: true,
    description: "Show the Outcome and impact placeholder section on the TDBridge case study page.",
  },
  tdbridgeWhatsNext: {
    envVar: "NEXT_PUBLIC_FF_TDBRIDGE_WHATS_NEXT",
    defaultValue: true,
    description: "Show the What's next section on the TDBridge case study page.",
  },
} as const;

export type FeatureFlagKey = keyof typeof FEATURE_FLAGS;

// Use explicit NEXT_PUBLIC env access so Next.js can inline values
// in both server and client bundles (dynamic env key access can cause
// hydration mismatches in client components).
const FEATURE_FLAG_ENV_VALUES: Record<FeatureFlagKey, string | undefined> = {
  navHideAboutMe: process.env.NEXT_PUBLIC_FF_NAV_HIDE_ABOUT_ME,
  navHideHamburger: process.env.NEXT_PUBLIC_FF_NAV_HIDE_HAMBURGER,
  homeHideThinkingBeyondConstraints: process.env.NEXT_PUBLIC_FF_HOME_HIDE_THINKING_BEYOND_CONSTRAINTS,
  homeHideReflections: process.env.NEXT_PUBLIC_FF_HOME_HIDE_REFLECTIONS,
  homeHideFormAndAesthetics: process.env.NEXT_PUBLIC_FF_HOME_HIDE_FORM_AND_AESTHETICS,
  homeArtGallery: process.env.NEXT_PUBLIC_FF_HOME_ART_GALLERY,
  homeHideStatement: process.env.NEXT_PUBLIC_FF_HOME_HIDE_STATEMENT,
  homeShowSecondCaseStudyThumbnail: process.env.NEXT_PUBLIC_FF_HOME_SHOW_SECOND_CASE_STUDY_THUMBNAIL,
  tdbridgeImplementationFramework: process.env.NEXT_PUBLIC_FF_TDBRIDGE_IMPLEMENTATION_FRAMEWORK,
  tdbridgeOutcomePlaceholder: process.env.NEXT_PUBLIC_FF_TDBRIDGE_OUTCOME_PLACEHOLDER,
  tdbridgeWhatsNext: process.env.NEXT_PUBLIC_FF_TDBRIDGE_WHATS_NEXT,
};

function parseBooleanEnvValue(value: string | undefined): boolean | undefined {
  if (value === undefined) return undefined;
  const normalized = value.trim().toLowerCase();
  if (normalized === "true" || normalized === "1") return true;
  if (normalized === "false" || normalized === "0") return false;
  return undefined;
}

export function isFeatureEnabled(flagKey: FeatureFlagKey): boolean {
  const flag = FEATURE_FLAGS[flagKey];
  const parsedValue = parseBooleanEnvValue(FEATURE_FLAG_ENV_VALUES[flagKey]);
  return parsedValue ?? flag.defaultValue;
}

/** Navbar UI flags — compute in a Server Component via {@link getNavbarFeatureFlags} and pass as props to avoid hydration mismatches. */
export type NavbarFeatureFlags = {
  hideHamburger: boolean;
  showAboutMe: boolean;
};

/** Call from Server Components (pages/layouts) so nav markup matches on SSR and the client. */
export function getNavbarFeatureFlags(): NavbarFeatureFlags {
  return {
    hideHamburger: isFeatureEnabled("navHideHamburger"),
    showAboutMe: !isFeatureEnabled("navHideAboutMe"),
  };
}

