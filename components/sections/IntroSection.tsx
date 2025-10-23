"use client";

import { useLetterReveal } from '@/hooks/useLetterReveal';

export function IntroSection() {
  const revealRef = useLetterReveal();

  return (
    <section className="min-h-[100vh] flex items-center justify-center px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div ref={revealRef} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl display-small leading-relaxed" style={{ color: '#1c1c1c' }}>
          <div className="reveal-line">I used to be a developer</div>
          <div className="reveal-line">bringing other designers&apos; visions to life,</div>
          <div className="reveal-line">and now as a designer I craft experiences</div>
          <div className="reveal-line">that need to be brought to life.</div>
        </div>
      </div>
    </section>
  );
}
