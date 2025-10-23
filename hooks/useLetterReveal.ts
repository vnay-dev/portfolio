"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useLetterReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.reveal-line');
    
    // Create scroll-triggered animations for each line (similar to Hero section)
    lines.forEach((line, lineIndex) => {
      // Set initial state with blur, opacity, and scale
      gsap.set(line, { 
        opacity: 0, 
        filter: 'blur(20px)',
        y: 30,
        scale: 0.95
      });
      
      // Create scroll trigger for this line
      ScrollTrigger.create({
        trigger: line,
        start: 'top 100%',
        end: 'top 80%',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Animate opacity, blur, position, and scale with smooth easing
          gsap.to(line, {
            opacity: progress,
            filter: `blur(${20 * (1 - progress)}px)`,
            y: 30 * (1 - progress),
            scale: 0.95 + (0.05 * progress),
            duration: 0.8,
            ease: 'power3.out'
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return containerRef;
}
