// Typography System Constants
// Based on Material Design Type Scale
// https://m2.material.io/design/typography/the-type-system.html#type-scale

export const TYPE_SCALE = {
  // Display - Largest text on screen, reserved for short, important text
  DISPLAY_LARGE: "display-large",
  DISPLAY_MEDIUM: "display-medium",
  DISPLAY_SMALL: "display-small",

  // Headline - High-emphasis text that's shorter than body
  HEADLINE_LARGE: "headline-large",
  HEADLINE_MEDIUM: "headline-medium",
  HEADLINE_SMALL: "headline-small",

  // Title - Medium-emphasis text that's shorter than body
  TITLE_LARGE: "title-large",
  TITLE_MEDIUM: "title-medium",
  TITLE_SMALL: "title-small",

  // Body - Used for long-form writing
  BODY_LARGE: "body-large",
  BODY_MEDIUM: "body-medium",
  BODY_SMALL: "body-small",

  // Label - Used for text in components like buttons
  LABEL_LARGE: "label-large",
  LABEL_MEDIUM: "label-medium",
  LABEL_SMALL: "label-small",

  // Utility
  OVERLINE: "text-overline",
  CAPTION: "text-caption",
} as const;

export type TypeScale = (typeof TYPE_SCALE)[keyof typeof TYPE_SCALE];

// Usage guide for each type style
export const TYPE_USAGE = {
  DISPLAY_LARGE: "Hero headlines, main page titles",
  DISPLAY_MEDIUM: "Section headlines, key emphasis",
  DISPLAY_SMALL: "Subsection headlines",
  HEADLINE_LARGE: "Page titles, card headers",
  HEADLINE_MEDIUM: "Section titles",
  HEADLINE_SMALL: "Component headers",
  TITLE_LARGE: "Card titles, list headers",
  TITLE_MEDIUM: "Subheadings, emphasized content",
  TITLE_SMALL: "List items, small headings",
  BODY_LARGE: "Important paragraphs, lead text",
  BODY_MEDIUM: "Standard body text, descriptions",
  BODY_SMALL: "Supporting text, captions",
  LABEL_LARGE: "Primary buttons, prominent CTAs",
  LABEL_MEDIUM: "Secondary buttons, chips",
  LABEL_SMALL: "Small buttons, tags",
  OVERLINE: "Eyebrows, categories, metadata",
  CAPTION: "Helper text, timestamps, footnotes",
} as const;

// Default HTML element mappings
export const DEFAULT_ELEMENT_STYLES = {
  h1: TYPE_SCALE.HEADLINE_LARGE,
  h2: TYPE_SCALE.HEADLINE_MEDIUM,
  h3: TYPE_SCALE.HEADLINE_SMALL,
  h4: TYPE_SCALE.TITLE_LARGE,
  h5: TYPE_SCALE.TITLE_MEDIUM,
  h6: TYPE_SCALE.TITLE_SMALL,
  p: TYPE_SCALE.BODY_MEDIUM,
  button: TYPE_SCALE.LABEL_MEDIUM,
  caption: TYPE_SCALE.CAPTION,
} as const;
