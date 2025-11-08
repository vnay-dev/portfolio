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
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div>
          <h2
            className="text-[2.25rem] leading-[1.2] font-bold text-balance md:text-[3rem]"
            style={{ fontSize: "42px" }}
          >
            Validating my hypothesis
          </h2>
          <br />
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            To get a clearer picture of the problem, I talked to my colleagues and friends; some who
            loved using the feature, some who barely touched it and others who only used it when
            they had to.
          </p>
        </div>

        <div
          className="flex flex-col gap-[24px] rounded-[1.5rem] bg-[#004931]"
          style={{ padding: "48px" }}
        >
          <p className="text-center text-white" style={{ fontSize: "32px" }}>
            User interviews questions and objectives
          </p>

          <div className="relative" style={{ padding: "0 8px 16px 8px", overflow: "hidden" }}>
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {interviewCarouselData.map((item) => (
                <div
                  key={item.question}
                  className="flex min-w-full justify-center"
                  style={{ flexShrink: 0 }}
                >
                  <div
                    className="flex flex-col items-center gap-[48px] rounded-[1.5rem] bg-[#E6F7E6]"
                    style={{
                      padding: "36px",
                      width: "720px",
                      maxWidth: "75%",
                      justifyContent: "space-between",
                      boxShadow: "8px 8px 0px 0px #00d757",
                    }}
                  >
                    <p className="mb-16 text-center text-xl leading-relaxed font-medium text-[#00754f] md:text-2xl">
                      {item.question}
                    </p>

                    <div className="relative mb-12 w-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-1/2 border-t border-[#00d757]"
                          style={{ borderTopWidth: "0.5px" }}
                        />
                      </div>
                      <div className="relative flex justify-center">
                        <div
                          className="rounded-full border border-[#00d757] bg-[#E6F7E6]"
                          style={{ padding: "4px 12px" }}
                        >
                          <span className="text-sm tracking-wide text-[#00d757]">Objective</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-lg leading-relaxed text-[#1A4331]">
                      {item.objective}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {interviewCarouselData.map((item, index) => (
              <button
                key={item.question}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#00d757]" : "w-2 bg-white/50"
                }`}
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
