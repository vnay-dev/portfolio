"use client";

import { useEffect, useState } from "react";
import { interviewCarouselData } from "@/constants/whatsappCaseStudy";

const ValidationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interviewCarouselData.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 sm:gap-10 md:gap-12">
        <div>
          <h2
            className="leading-[1.2] font-bold text-balance"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
          >
            Validating my hypothesis
          </h2>
          <br />
          <p className="max-w-3xl leading-relaxed text-gray-600" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            To get a clearer picture of the problem, I talked to my colleagues and friends; some who
            loved using the feature, some who barely touched it and others who only used it when
            they had to.
          </p>
        </div>

        <div
          className="flex flex-col gap-4 rounded-[1.5rem] bg-[#004931] sm:gap-6"
          style={{ padding: "clamp(1.5rem, 5vw, 3rem)" }}
        >
          <p className="text-center text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}>
            User interviews questions and objectives
          </p>

          <div 
            className="relative overflow-hidden" 
            style={{ 
              padding: "0 clamp(0.5rem, 2vw, 0.5rem) clamp(1rem, 3vw, 1rem) clamp(0.5rem, 2vw, 0.5rem)",
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {interviewCarouselData.map((item) => (
                <div
                  key={item.question}
                  className="flex min-w-full justify-center px-2 sm:px-4"
                  style={{ flexShrink: 0 }}
                >
                  <div
                    className="flex flex-col items-center gap-4 rounded-[1.5rem] bg-[#E6F7E6] sm:gap-6 md:gap-8 lg:gap-12"
                    style={{
                      padding: "clamp(1.25rem, 4vw, 2.25rem)",
                      width: "100%",
                      maxWidth: "min(720px, calc(100% - 1rem))",
                      justifyContent: "space-between",
                      boxShadow: "clamp(4px, 1vw, 8px) clamp(4px, 1vw, 8px) 0px 0px #00d757",
                    }}
                  >
                    <p className="mb-6 text-center leading-relaxed font-medium text-[#00754f] sm:mb-8 md:mb-12 lg:mb-16" style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
                      {item.question}
                    </p>

                    <div className="relative mb-6 w-full sm:mb-8 md:mb-10 lg:mb-12">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-1/2 border-t border-[#00d757]"
                          style={{ borderTopWidth: "0.5px" }}
                        />
                      </div>
                      <div className="relative flex justify-center">
                        <div
                          className="rounded-full border border-[#00d757] bg-[#E6F7E6]"
                          style={{ padding: "clamp(4px, 1vw, 4px) clamp(0.75rem, 2vw, 0.75rem)" }}
                        >
                          <span className="text-xs sm:text-sm tracking-wide text-[#00d757]" style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)" }}>Objective</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-center leading-relaxed text-[#1A4331]" style={{ fontSize: "clamp(0.875rem, 2vw, 1.125rem)" }}>
                      {item.objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2 sm:mt-6">
            {interviewCarouselData.map((item, index) => (
              <button
                key={item.question}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#00d757]" : "bg-white/50"
                }`}
                style={{
                  height: "clamp(0.375rem, 1vw, 0.5rem)",
                  width: index === currentIndex ? "clamp(1.5rem, 4vw, 2rem)" : "clamp(0.375rem, 1vw, 0.5rem)",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
