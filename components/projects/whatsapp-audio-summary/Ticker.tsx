"use client";

import { useState, useEffect, useRef } from "react";
import { BlobImage } from "@/components/shared/atoms";

interface TickerDescription {
  text: string;
  highlightText?: string;
  highlightLength?: number;
}

interface TickerProps {
  images: string[];
  altPrefix: string;
  descriptions?: TickerDescription[];
  /**
   * Tailwind width classes for each ticker item. Defaults to the standard
   * mockup sizes. Override to scale items up/down for a specific section.
   */
  itemWidthClassName?: string;
  /**
   * Tailwind classes for the image frame. Defaults to a rounded, clipped box.
   * Override to add a border (e.g. for the final-solution mockups).
   */
  imageFrameClassName?: string;
}

function renderTextWithOpacity(text: string, highlightText?: string, highlightLength?: number) {
  if (!highlightText || highlightLength === undefined) {
    return <span>{text}</span>;
  }

  // Find the highlightText in the description text
  const highlightIndex = text.indexOf(highlightText);
  if (highlightIndex === -1) {
    return <span>{text}</span>;
  }

  const beforeText = text.substring(0, highlightIndex);
  const afterText = text.substring(highlightIndex + highlightText.length);

  const highlightedParts = [];
  for (let i = 0; i < highlightText.length; i++) {
    const char = highlightText[i];
    const opacity = i < highlightLength ? 1 : 0.5;
    highlightedParts.push(
      <span key={i} style={{ opacity }}>
        {char}
      </span>
    );
  }

  return (
    <span>
      {beforeText}
      {highlightedParts}
      {afterText}
    </span>
  );
}

export function Ticker({
  images,
  altPrefix,
  descriptions,
  itemWidthClassName = "w-[160px] sm:w-[200px] md:w-[240px]",
  imageFrameClassName = "overflow-hidden rounded-media",
}: TickerProps) {
  // Paused while a mouse hovers (desktop) or a finger/pointer is held down (mobile)
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const isPaused = isHovered || isPressed;
  const tickerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const positionRef = useRef(0);

  // Duplicate content for seamless loop
  // When we reach 50%, we reset to 0% - but since content is duplicated, it's invisible
  const duplicatedImages = [...images, ...images];
  const safeDescriptions = descriptions ?? [];
  const duplicatedDescriptions = [...safeDescriptions, ...safeDescriptions];

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    // Calculate the width of one set of items dynamically
    const calculateItemSetWidth = () => {
      const firstItem = ticker.children[0] as HTMLElement;
      if (!firstItem) return 0;

      const itemWidth = firstItem.offsetWidth;
      const computedStyle = window.getComputedStyle(ticker);
      const gap = parseFloat(computedStyle.gap) || 24; // Default to 24px if gap not found

      return images.length * (itemWidth + gap);
    };

    let itemSetWidth = calculateItemSetWidth();

    // Recalculate on resize
    const handleResize = () => {
      itemSetWidth = calculateItemSetWidth();
    };
    window.addEventListener("resize", handleResize);

    let lastTime = performance.now();
    const speed = itemSetWidth / 30; // pixels per second (30s to scroll one set)

    const animate = (currentTime: number) => {
      if (!ticker) return;

      if (!isPaused) {
        const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
        positionRef.current += speed * deltaTime;

        // When we've scrolled one full set, reset seamlessly
        // This is invisible because the second set is identical to the first
        if (positionRef.current >= itemSetWidth) {
          positionRef.current = positionRef.current - itemSetWidth;
        }

        ticker.style.transform = `translateX(-${positionRef.current}px)`;
      }

      lastTime = currentTime;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Wait for layout to calculate initial width
    setTimeout(() => {
      itemSetWidth = calculateItemSetWidth();
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, images.length]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerCancel={() => setIsPressed(false)}
    >
      <div ref={tickerRef} className="flex gap-6 sm:gap-8" style={{ willChange: "transform" }}>
        {duplicatedImages.map((image, index) => {
          const description = duplicatedDescriptions[index];
          const imageIndex = index % images.length;

          return (
            <div
              key={`${image}-${index}`}
              className={`flex flex-shrink-0 flex-col gap-3 ${itemWidthClassName}`}
            >
              {description?.text && (
                <p className="body-large text-center" style={{ color: "#1c1e21" }}>
                  {description.highlightText && description.highlightLength !== undefined
                    ? renderTextWithOpacity(
                        description.text,
                        description.highlightText,
                        description.highlightLength
                      )
                    : description.text}
                </p>
              )}
              <BlobImage
                src={image}
                alt={`${altPrefix} ${imageIndex + 1}`}
                width={720}
                height={1600}
                frameClassName={imageFrameClassName}
                className="h-auto w-full object-contain"
                quality={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
