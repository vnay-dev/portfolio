"use client";

import { useState, useEffect, useRef } from "react";
import { CarouselItem } from "./CarouselItem";

interface CarouselData {
  question: string;
  objective: string;
}

interface CarouselProps {
  items: CarouselData[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const duplicatedItems = [items[items.length - 1], ...items, items[0]];

  const goToPrevious = () => {
    if (currentIndex === 1) {
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(items.length);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === items.length) {
      setCurrentIndex(items.length + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const transitionStyle = isTransitioning
      ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
      : "none";
    if (desktopCarouselRef.current) {
      desktopCarouselRef.current.style.transition = transitionStyle;
    }
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.style.transition = transitionStyle;
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-full">
      <div className="hidden items-center gap-4 md:flex md:gap-6">
        <button
          onClick={goToPrevious}
          className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-white bg-transparent text-white transition-all duration-300 active:scale-95 hover:border-transparent hover:!bg-[#25d366]"
          style={{ borderWidth: "1.5px" }}
          aria-label="Previous slide"
        >
          <svg width="6.75" height="12" fill="none" className="scale-125 transition-colors duration-300" style={{ transform: "scaleX(-1)" }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
              className="fill-white transition-colors duration-300 group-hover:fill-[#111b21]"
            />
          </svg>
        </button>

        <div className="flex-1 overflow-hidden pb-8">
          <div
            ref={desktopCarouselRef}
            className="flex will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`${item.question}-${index}`} className="w-full flex-shrink-0 pr-6 md:pr-8">
                <CarouselItem question={item.question} objective={item.objective} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-white bg-transparent text-white transition-all duration-300 active:scale-95 hover:border-transparent hover:!bg-[#25d366]"
          style={{ borderWidth: "1.5px" }}
          aria-label="Next slide"
        >
          <svg width="6.75" height="12" fill="none" className="scale-125 transition-colors duration-300">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
              className="fill-white transition-colors duration-300 group-hover:fill-[#111b21]"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 md:hidden">
        <div className="w-full overflow-hidden pb-8">
          <div
            ref={mobileCarouselRef}
            className="flex will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`${item.question}-${index}`} className="w-full flex-shrink-0 px-2">
                <CarouselItem question={item.question} objective={item.objective} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-white bg-transparent text-white transition-all duration-300 active:scale-95 hover:border-transparent hover:!bg-[#25d366]"
            style={{ borderWidth: "1.5px" }}
            aria-label="Previous slide"
          >
            <svg width="6.75" height="12" fill="none" className="transition-colors duration-300" style={{ transform: "scaleX(-1)" }}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                className="fill-white transition-colors duration-300 group-hover:fill-[#111b21]"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-white bg-transparent text-white transition-all duration-300 active:scale-95 hover:border-transparent hover:!bg-[#25d366]"
            style={{ borderWidth: "1.5px" }}
            aria-label="Next slide"
          >
            <svg width="6.75" height="12" fill="none" className="transition-colors duration-300">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                className="fill-white transition-colors duration-300 group-hover:fill-[#111b21]"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

