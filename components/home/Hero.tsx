"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { NavbarFeatureFlags } from "@/app/constants";
import { Navbar, Container } from "@/components/shared/composite";
import ColorBends from "@/components/animations/ColorBends/ColorBends";
import { StockBorderGlowBadge } from "./StockBorderGlowBadge";

export function Hero({ navFeatureFlags }: { navFeatureFlags: NavbarFeatureFlags }) {
  const [heroMinHeight, setHeroMinHeight] = useState("100vh");
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const syncHeroMinHeight = () => {
      // Navbar is fixed; hero should be at least full viewport tall but may grow when content is taller (e.g. short window height).
      setHeroMinHeight(`${window.innerHeight}px`);
    };

    syncHeroMinHeight();
    window.addEventListener("resize", syncHeroMinHeight);

    return () => {
      window.removeEventListener("resize", syncHeroMinHeight);
    };
  }, []);

  useEffect(() => {
    // Trigger on the next frame so the initial hidden state can transition in smoothly.
    const frame = window.requestAnimationFrame(() => {
      setIsHeroVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="relative flex w-full flex-col overflow-hidden bg-black"
      style={{ minHeight: heroMinHeight }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <ColorBends
          speed={0.15}
          scale={8}
          frequency={2}
          mouseInfluence={0}
          parallax={0}
          noise={0.01}
          colors={["#156C78", "#15497A", "#151B7A"]}
          transparent={false}
        />
      </div>

      {/* Floating Navbar */}
      <div className="absolute top-0 right-0 left-0 z-50">
        <Navbar featureFlags={navFeatureFlags} />
      </div>

      {/* Content: vertically centered below fixed navbar; equal space above photo and below badge */}
      <div
        className="relative z-10 box-border flex w-full flex-col justify-center pt-[calc(4.5rem+1px)] pb-[max(1rem,env(safe-area-inset-bottom))]"
        style={{ minHeight: heroMinHeight }}
      >
        <Container>
          <div className="flex flex-col items-start gap-8 sm:gap-10 md:gap-12">
            <Image
              src="/images/profile_pic.jpg"
              alt="Hero"
              width={180}
              height={180}
              quality={100}
              sizes="(max-width: 640px) 112px, (max-width: 768px) 140px, 180px"
              className={`h-28 w-28 shrink-0 rounded-[12px] object-cover transition-all duration-1000 ease-out sm:h-[9.375rem] sm:w-[9.375rem] md:h-[11.25rem] md:w-[11.25rem] ${
                isHeroVisible ? "translate-y-0 scale-100 blur-0 opacity-100" : "translate-y-8 scale-90 blur-sm opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            />
            <div className="flex w-full flex-col gap-8 sm:gap-10 md:gap-12">
              <div
                className={`flex flex-col gap-3 transition-all duration-1000 ease-out ${
                  isHeroVisible ? "translate-y-0 scale-100 blur-0 opacity-100" : "translate-y-10 scale-95 blur-sm opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <h1 className="w-full max-w-[90%] text-white text-xl leading-snug sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:w-9/10 lg:text-[2.75rem] lg:leading-[3.25rem]">
                  I design and build software that reduces friction in workflows and helps teams
                  ship faster
                </h1>
              </div>
              <div
                className={`transition-all duration-1000 ease-out ${
                  isHeroVisible ? "translate-y-0 scale-100 blur-0 opacity-100" : "translate-y-12 scale-95 blur-sm opacity-0"
                }`}
                style={{ transitionDelay: "520ms" }}
              >
                <StockBorderGlowBadge />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
