"use client";

import { useEffect, useRef, useState } from "react";
import { MediaSkeleton } from "@/components/shared/atoms";

type Props = {
  src: string;
  className?: string;
  threshold?: number;
  /**
   * Aspect ratio used to reserve the box before the video's metadata loads,
   * e.g. "1894 / 984". The frame auto-corrects to the video's real ratio once
   * known, so this only prevents a layout shift while the skeleton shows.
   */
  aspectRatio?: string;
};

// Start fetching the video when it's within ~1.5 viewports of the screen so
// it's ready to play by the time the user scrolls to it, without competing
// with above-the-fold content during the initial page load.
const PREFETCH_ROOT_MARGIN = "150% 0px";

const DEFAULT_ASPECT_RATIO = "16 / 9";

export function VisibilityVideo({
  src,
  className,
  threshold = 0.45,
  aspectRatio = DEFAULT_ASPECT_RATIO,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisibleRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [frameRatio, setFrameRatio] = useState(aspectRatio);

  // Head start: begin downloading shortly before the video enters the viewport.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefetchObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          prefetchObserver.disconnect();
        }
      },
      { rootMargin: PREFETCH_ROOT_MARGIN },
    );

    prefetchObserver.observe(video);
    return () => prefetchObserver.disconnect();
  }, []);

  // Play only while actually visible; pause when scrolled away.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          void video.play().catch(() => {
            // Autoplay can fail in rare browser edge-cases.
          });
        } else {
          video.pause();
        }
      },
      { threshold },
    );

    playObserver.observe(video);
    return () => playObserver.disconnect();
  }, [threshold]);

  return (
    <span className={`media-frame ${className ?? ""}`} style={{ aspectRatio: frameRatio }}>
      <MediaSkeleton isLoaded={isLoaded} />
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        muted
        loop
        playsInline
        controls
        preload={shouldLoad ? "auto" : "none"}
        onLoadedMetadata={(event) => {
          // Snap the frame to the video's true ratio so the container fits the
          // asset exactly (no letterbox / white space).
          const { videoWidth, videoHeight } = event.currentTarget;
          if (videoWidth && videoHeight) {
            setFrameRatio(`${videoWidth} / ${videoHeight}`);
          }
        }}
        onLoadedData={() => setIsLoaded(true)}
        onCanPlay={() => {
          // Cover the rare case where the play observer fired before the
          // source was attached (e.g. jumping straight to the video).
          if (isVisibleRef.current) {
            void videoRef.current?.play().catch(() => {});
          }
        }}
        data-loaded={isLoaded}
        className="media-fade absolute inset-0 h-full w-full object-cover"
      />
    </span>
  );
}
