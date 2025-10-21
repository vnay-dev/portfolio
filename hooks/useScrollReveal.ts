"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const lines = element.querySelectorAll('.reveal-line');
    
    // Set initial state
    gsap.set(lines, {
      opacity: 0,
      y: 50,
      filter: 'blur(8px)'
    });

    // Create scroll triggers for each line with staggered delay
    lines.forEach((line, index) => {
      gsap.to(line, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        delay: index * 0.2, // Staggered delay between lines
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          scrub: false
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element || lines.includes(trigger.trigger as Element)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return elementRef;
};
