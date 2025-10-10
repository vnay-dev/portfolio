// Animation constants and variants for Framer Motion

import { Variants } from "framer-motion";

// Easing curves
export const EASE = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  easeInOut: [0.65, 0, 0.35, 1],
  easeOut: [0.22, 1, 0.36, 1],
  spring: [0.34, 1.56, 0.64, 1],
} as const;

// Duration constants (in seconds)
export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  verySlow: 1.8,
} as const;

// Common animation variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: DURATION.fast,
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.fast,
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.easeOut,
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: DURATION.fast,
    },
  },
};

export const slideInFromLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.easeOut,
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.easeOut,
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Hover/tap animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: DURATION.fast,
    ease: EASE.easeOut,
  },
};

export const tapScale = {
  scale: 0.95,
};
