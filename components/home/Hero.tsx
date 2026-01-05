"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar, Container } from "@/components/shared/composite";
import ColorBends from "@/components/animations/ColorBends/ColorBends";
import StarBorder from "@/components/animations/StarBorder/StarBorder";

export function Hero() {
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeroHeight = () => {
      // Since navbar is fixed positioned, hero should fill full viewport height
      const viewportHeight = window.innerHeight;
      setHeroHeight(`${viewportHeight}px`);
    };

    // Calculate on mount
    calculateHeroHeight();

    // Recalculate on resize to maintain full viewport height
    window.addEventListener("resize", calculateHeroHeight);

    return () => {
      window.removeEventListener("resize", calculateHeroHeight);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black" style={{ height: heroHeight }}>
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
      <div className="relative z-10 mt-8 flex h-full flex-col items-start justify-center">
        <Container>
          <div className="flex flex-col gap-8">
            <Image
              src="/images/profile_pic.jpg"
              alt="Hero"
              width={180}
              height={180}
              quality={100}
              className="h-[120px] w-[120px] rounded-lg object-cover sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
            />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="display-medium text-white">Designer and engineer</h1>
                <p className="headline-small text-white">
                  Self taught product designer who can visualize & build software
                </p>
              </div>
              <StarBorder as="div" className="w-fit" color="#d4d4d4" speed="7.5s" thickness={1}>
                <p className="body-medium px-3 py-2 text-white sm:px-4 sm:py-2.5 md:px-4 md:py-2.5">
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
