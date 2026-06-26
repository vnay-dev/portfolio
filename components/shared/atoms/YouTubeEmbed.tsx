"use client";

import { useEffect, useRef, useState } from "react";
import { MediaSkeleton } from "./MediaSkeleton";

type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

// Mount the player when it's within ~1.5 viewports of the screen so it's ready
// by the time the user reaches it, instead of loading on initial page load.
const PREFETCH_ROOT_MARGIN = "150% 0px";

/**
 * Autoplaying, looping YouTube embed in a 16:9 frame. The player iframe is
 * only mounted once the embed nears the viewport, and a skeleton loader is
 * shown until it is ready.
 */
export function YouTubeEmbed({ videoId, title = "Prototype Video" }: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: PREFETCH_ROOT_MARGIN },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const src =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=1&mute=1&vq=hd1080&rel=0&loop=1&playlist=${videoId}&modestbranding=1`;

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-media border"
      style={{ backgroundColor: "#000", borderColor: "#1c1e21", borderWidth: "1.35px" }}
    >
      <MediaSkeleton isLoaded={isLoaded} />
      {shouldLoad ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
          onLoad={() => setIsLoaded(true)}
          data-loaded={isLoaded}
          className="media-fade absolute top-0 left-0 h-full w-full border-0"
          style={{
            outline: "none",
            border: "none",
            margin: 0,
            padding: 0,
            left: "-2px",
            top: "-1px",
            width: "calc(100% + 4px)",
            height: "calc(100% + 2px)",
            transform: "translateZ(0)",
            borderRadius: "8px",
          }}
        />
      ) : null}
    </div>
  );
}
