type MediaSkeletonProps = {
  isLoaded: boolean;
};

/**
 * Shimmering placeholder that fills its nearest positioned ancestor.
 * Place it as the first child of a `position: relative` container (or a
 * `.media-frame`) so it overlays the media box while it loads.
 */
export function MediaSkeleton({ isLoaded }: MediaSkeletonProps) {
  return <span className="media-skeleton" data-loaded={isLoaded} aria-hidden="true" />;
}
