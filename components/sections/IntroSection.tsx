"use client";

import { useScrollReveal } from '@/hooks/useScrollReveal';

export function IntroSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div ref={revealRef} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl editorial-italic font-bold leading-relaxed" style={{ color: '#1c1c1c' }}>
          <div className="reveal-line">I spent five years as a developer</div>
          <div className="reveal-line">bringing other designers&apos; visions to life,</div>
          <div className="reveal-line">and now as a designer I craft experiences</div>
          <div className="reveal-line">that need to be brought to life.</div>
        </div>
      </div>
    </section>
  );
}
