"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  threshold?: number;
};

export function VisibilityVideo({ src, className, threshold = 0.45 }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Autoplay can fail in rare browser edge-cases.
          });
        } else {
          video.pause();
        }
      },
      { threshold },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className={className}
    />
  );
}

