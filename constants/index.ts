// Application constants

export const SITE_CONFIG = {
  name: "Portfolio",
  description: "A stunning portfolio showcasing my work and skills",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Navigation items (to be customized)
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// Social links (to be customized)
export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com" },
  { platform: "LinkedIn", url: "https://linkedin.com" },
  { platform: "Twitter", url: "https://twitter.com" },
] as const;
