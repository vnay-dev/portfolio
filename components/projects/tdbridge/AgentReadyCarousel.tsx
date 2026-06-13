"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdHistory,
  MdNoteAlt,
  MdPalette,
  MdTextFields,
  MdViewModule,
} from "react-icons/md";

const agentReadyCards = [
  {
    id: "figma-structure",
    icon: MdHistory,
    text: "Based on the learnings from the previous POC, the Figma file was structured properly this time",
  },
  {
    id: "token-architecture",
    icon: MdPalette,
    text: "A token architecture was created with correctly mapped collections and groups",
  },
  {
    id: "typography-styles",
    icon: MdTextFields,
    text: "Reusable typography styles were defined",
  },
  {
    id: "components-linked",
    icon: MdViewModule,
    text: "Components were built with all values linked to the right tokens and styles",
  },
  {
    id: "documented-for-agents",
    icon: MdNoteAlt,
    text: "Components were documented, labeled clearly, and organized to make the structure easier to understand for AI agents and MCP",
  },
] as const;

export default function AgentReadyCarousel() {
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
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden">
        <div ref={containerRef} className="hide-scrollbar flex gap-6 overflow-x-auto pb-2">
          {agentReadyCards.map(({ id, icon: Icon, text }) => (
            <div
              key={id}
              className="flex w-full shrink-0 snap-start flex-col items-start gap-5 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 px-4 py-5 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200/90 bg-white text-gray-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="body-large leading-relaxed text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => scrollByCards("left")}
          disabled={!canScrollLeft}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors enabled:hover:border-gray-400 enabled:hover:bg-gray-50 disabled:opacity-40"
          aria-label="Scroll agent ready cards left"
        >
          <MdChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards("right")}
          disabled={!canScrollRight}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors enabled:hover:border-gray-400 enabled:hover:bg-gray-50 disabled:opacity-40"
          aria-label="Scroll agent ready cards right"
        >
          <MdChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
