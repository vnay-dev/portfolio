export type PluginCaseStudySlug = "plugin-1" | "plugin-2" | "plugin-3" | "plugin-4";

export type PluginCaseStudyGradient = {
  /** Diagonal angle in degrees (CSS linear-gradient). */
  angleDeg?: number;
  from: string;
  to: string;
  /** Use light title/subtitle when the gradient background is dark. */
  lightText?: boolean;
};

export type PluginCaseStudyMeta = {
  slug: PluginCaseStudySlug;
  href: `/projects/${PluginCaseStudySlug}`;
  /** Shown as the card title (plugin name). */
  name: string;
  /** Shown as the card subtitle (case study headline). */
  headline: string;
  /** Replace with final hex codes when provided. */
  gradient: PluginCaseStudyGradient;
};

/** Order of plugin case studies in the portfolio flow. */
export const PLUGIN_CASE_STUDY_ORDER: readonly PluginCaseStudySlug[] = [
  "plugin-1",
  "plugin-2",
  "plugin-3",
  "plugin-4",
] as const;

export const PLUGIN_CASE_STUDIES: Record<PluginCaseStudySlug, PluginCaseStudyMeta> = {
  "plugin-1": {
    slug: "plugin-1",
    href: "/projects/plugin-1",
    name: "Compounter",
    headline: "Making design system sanitization faster and safer",
    gradient: { angleDeg: 135, from: "#FFE0BE", to: "#FFF0BE" },
  },
  "plugin-2": {
    slug: "plugin-2",
    href: "/projects/plugin-2",
    name: "Nebula Figma Sync",
    headline: "Keeping the design token system in sync with the codebase",
    gradient: { angleDeg: 135, from: "#152DA8", to: "#27D0D4", lightText: true },
  },
  "plugin-3": {
    slug: "plugin-3",
    href: "/projects/plugin-3",
    name: "Changelogger",
    headline: "Making branch-level reviews more reliable in Figma",
    gradient: { angleDeg: 135, from: "#F6E6FF", to: "#FFE8EE" },
  },
  "plugin-4": {
    slug: "plugin-4",
    href: "/projects/plugin-4",
    name: "Daisy",
    headline: "Bringing accountability into design system workflows",
    gradient: { angleDeg: 135, from: "#D0FBCB", to: "#EFFFC5" },
  },
};

export function getNextPluginCaseStudy(
  current: PluginCaseStudySlug,
): PluginCaseStudyMeta {
  const index = PLUGIN_CASE_STUDY_ORDER.indexOf(current);
  const nextSlug =
    PLUGIN_CASE_STUDY_ORDER[(index + 1) % PLUGIN_CASE_STUDY_ORDER.length];
  return PLUGIN_CASE_STUDIES[nextSlug];
}
