import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes
 * Combines clsx and tailwind-merge for optimal class management
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
