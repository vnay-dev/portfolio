"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar, Container } from "@/components/shared/composite";
import ColorBends from "@/components/animations/ColorBends/ColorBends";
import StarBorder from "@/components/animations/StarBorder/StarBorder";

export function Hero() {
  const [heroMinHeight, setHeroMinHeight] = useState("100vh");

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
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8 flex w-full flex-1 flex-col items-start justify-center pb-10">
        <Container>
          <div className="flex flex-col gap-10">
            <Image
              src="/images/profile_pic.jpg"
              alt="Hero"
              width={180}
              height={180}
              quality={100}
              className="h-[120px] w-[120px] rounded-lg object-cover sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
            />
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h1 className="w-full max-w-[90%] text-white text-2xl leading-snug sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:w-9/10 lg:text-[2.75rem] lg:leading-[3.25rem]">
                  I design and build software that reduces friction in workflows and helps teams ship faster
                </h1>
              </div>
              <StarBorder as="div" className="w-fit" color="#d4d4d4" speed="7.5s" thickness={1}>
                <p className="body-large px-3 py-2 text-white sm:px-4 sm:py-2.5 md:px-4 md:py-2.5">
                  Design Systems @ Air India, Digital & Tech
                </p>
              </StarBorder>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
