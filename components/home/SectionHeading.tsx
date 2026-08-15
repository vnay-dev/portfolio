import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

/**
 * Shared home section title + optional subtitle.
 * Keeps type size and title–subtitle gap the same across every section.
 */
export function SectionHeading({
  title,
  subtitle,
  align = "left",
  variant = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = variant === "dark" ? "text-neutral-100" : "text-neutral-900";
  const subtitleColor = variant === "dark" ? "text-neutral-400" : "text-neutral-500";

  return (
    <div
      className={`section-heading flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <h2 className={`section-title ${titleColor} ${isCenter ? "text-center" : "text-left"}`}>{title}</h2>
      {subtitle ? (
        <p className={`section-subtitle w-full ${subtitleColor} ${isCenter ? "text-center" : "text-left"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
