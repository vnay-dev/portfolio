"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  MdOutlineEventRepeat,
  MdOutlineGesture,
  MdOutlinePeopleAlt,
  MdOutlineSearch,
  MdOutlineSyncProblem,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

const workflowIssueCards = [
  {
    id: "discovery",
    icon: MdOutlineSearch,
    text: "No single place to discover or browse components, so teams often didn't know what already existed",
  },
  {
    id: "structure",
    icon: MdOutlinePeopleAlt,
    text: "Many developers, designers, and stakeholders didn't understand the structure of the design system — tokens, components, styles, and guidelines",
  },
  {
    id: "contribution",
    icon: MdOutlineSyncProblem,
    text: "Components created inside projects rarely made their way back into the design system, so reusable work stayed locked inside individual figma files",
  },
  {
    id: "reuse-copy",
    icon: MdOutlineEventRepeat,
    text: "Reuse across projects usually meant manually copying code and modifying it, which slowed down development and introduced inconsistencies",
  },
  {
    id: "interaction",
    icon: MdOutlineGesture,
    text: "Interaction design inside components was often ignored, which affected the overall UX consistency across the website",
  },
] as const;

export default function WorkflowIssuesCarousel() {
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
        {workflowIssueCards.map(({ id, icon: Icon, text }) => (
          <div
            key={id}
            className="flex w-full shrink-0 snap-start flex-col items-start gap-5 rounded-lg border border-[#EDE7D8] bg-gradient-to-br from-white via-[#FBFAF4] to-[#F9F6EE] px-4 py-5 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#EDE7D8] bg-white text-[#9F7624] shadow-[0_1px_2px_rgba(225,218,202,0.65)]">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <p className="body-large leading-relaxed text-gray-800">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => scrollByCards("left")}
          disabled={!canScrollLeft}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#EDE7D8] bg-white text-[#9F7624] transition-colors enabled:hover:border-[#9F7624] enabled:hover:bg-[#F9F6EE] disabled:opacity-40"
          aria-label="Scroll workflow issues left"
        >
          <MdChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards("right")}
          disabled={!canScrollRight}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#EDE7D8] bg-white text-[#9F7624] transition-colors enabled:hover:border-[#9F7624] enabled:hover:bg-[#F9F6EE] disabled:opacity-40"
          aria-label="Scroll workflow issues right"
        >
          <MdChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
