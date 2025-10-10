"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseScrollProgressReturn {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
}

/**
 * Hook to track scroll progress
 * Returns scroll position and progress (0-1)
 */
export function useScrollProgress(): UseScrollProgressReturn {
  const { scrollY, scrollYProgress } = useScroll();

  return { scrollY, scrollYProgress };
}

/**
 * Hook to create parallax effect based on scroll
 */
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
