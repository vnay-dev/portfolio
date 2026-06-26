"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { MediaSkeleton } from "./MediaSkeleton";

type BlobImageProps = ImageProps & {
  /**
   * Extra classes for the wrapper that reserves the media box. Use this when
   * the rounding/clipping lives on the image itself (e.g. an image with no
   * rounded container) by passing `"overflow-hidden rounded-media"`, or to
   * size the box (e.g. `"sm:w-3/4"`, or `"h-full"` for `fill` images).
   */
  frameClassName?: string;
};

/**
 * Drop-in replacement for next/image for blob-hosted assets. It shows a
 * shimmering skeleton of the exact same box (reserved by the image's
 * width/height aspect ratio) until the image finishes loading, then fades
 * the image in.
 */
export function BlobImage({ className, frameClassName, onLoad, ...imageProps }: BlobImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Images served from cache can finish before React attaches onLoad.
    if (imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <span className={`media-frame ${frameClassName ?? ""}`}>
      <MediaSkeleton isLoaded={isLoaded} />
      <Image
        {...imageProps}
        ref={imageRef}
        data-loaded={isLoaded}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        className={`media-fade ${className ?? ""}`}
      />
    </span>
  );
}
