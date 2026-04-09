"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/shared/composite";

export function Statement() {
  const [sectionMinHeight, setSectionMinHeight] = useState("100vh");

  useEffect(() => {
    const syncHeight = () => {
      const vv = window.visualViewport;
      // Visual viewport matches the visible area more closely than innerHeight (esp. mobile URL bar).
      const base = vv && vv.height > 0 ? vv.height : window.innerHeight;
      // Ceil + small buffer so subpixel layout / rounding can’t expose the next section’s title.
      setSectionMinHeight(`${Math.ceil(base) + 8}px`);
    };

    syncHeight();
    window.addEventListener("resize", syncHeight);
    const vv = window.visualViewport;
    vv?.addEventListener("resize", syncHeight);
    vv?.addEventListener("scroll", syncHeight);

    return () => {
      window.removeEventListener("resize", syncHeight);
      vv?.removeEventListener("resize", syncHeight);
      vv?.removeEventListener("scroll", syncHeight);
    };
  }, []);

  return (
    <section
      className="relative flex w-full flex-col justify-center overflow-hidden bg-white"
      style={{ minHeight: sectionMinHeight }}
    >
      <Container>
        <div className="py-12 sm:py-16 md:py-20">
          <h2 className="statement-headline">
            I work across <span className="editorial-italic">design & code</span> to turn
            <br />
            intent into reliable, production-ready systems
          </h2>
        </div>
      </Container>
    </section>
  );
}
