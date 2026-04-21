"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const challengeCards = [
  {
    id: "fonts",
    title: "Static fonts used instead of variable fonts",
    text: "While building the component library, I found static fonts were used as variable fonts in production, so I ran POCs, checked breaking impact across repos, and replaced them with proper variable fonts.",
  },
  {
    id: "icons",
    title: "Choosing font icons over SVG due to performance concerns",
    text: "In production, direct usage of SVG icons increased the DOM size, causing performance concerns, so I ran POCs on different icon approaches and built a pipeline to generate font icons for the system.",
  },
  {
    id: "stencil",
    title: "The internal bad reputation of Stencil.js",
    text: "While choosing the tech stack for the component library, Stencil.js faced internal pushback due to past misuse, so I validated the choice through POCs and showed the real problem was missing quality gates, business logic in components, and using the framework for the wrong use case.",
  },
  {
    id: "workflow",
    title: "Manual workflows slowing down the design system",
    text: "Several design workflows were manual and time-consuming, so I created Figma plugins to automate and reduce effort and fasten the design-dev handoff.",
  },
] as const;

export default function ChallengesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const easeOutQuart = (progress: number) => {
    return 1 - Math.pow(1 - progress, 4);
  };

  const animateToPosition = (container: HTMLDivElement, targetLeft: number) => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    const startLeft = container.scrollLeft;
    const distance = targetLeft - startLeft;
    const durationMs = 560;
    const startTime = performance.now();

    const run = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutQuart(progress);

      container.scrollLeft = startLeft + distance * easedProgress;

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(run);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = window.requestAnimationFrame(run);
  };

  const scrollByCards = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const firstCard = container.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(window.getComputedStyle(container).columnGap || "0");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? container.clientWidth * 0.85;
    const scrollStep = cardWidth + gap;
    const targetLeft =
      direction === "left" ? container.scrollLeft - scrollStep : container.scrollLeft + scrollStep;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const clampedTargetLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

    animateToPosition(container, clampedTargetLeft);
  };

  return (
    <div className="my-4 flex flex-col gap-4">
      <div ref={containerRef} className="-mx-1 hide-scrollbar flex gap-6 overflow-x-auto px-1 pb-2">
        {challengeCards.map(({ id, title, text }) => (
          <div
            key={id}
            className="flex w-full shrink-0 snap-start flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 sm:w-[calc((100%-24px)/2)] sm:px-5 sm:py-4"
          >
            <h3 className="title-medium font-semibold text-gray-900">{title}</h3>
            <p className="body-large text-gray-700">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => scrollByCards("left")}
          disabled={!canScrollLeft}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors enabled:hover:border-gray-400 enabled:hover:bg-gray-50 disabled:opacity-40"
          aria-label="Scroll challenges left"
        >
          <MdChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards("right")}
          disabled={!canScrollRight}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors enabled:hover:border-gray-400 enabled:hover:bg-gray-50 disabled:opacity-40"
          aria-label="Scroll challenges right"
        >
          <MdChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
