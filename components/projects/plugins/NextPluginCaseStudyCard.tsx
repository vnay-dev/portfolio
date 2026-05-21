import Link from "next/link";
import type { PluginCaseStudyGradient } from "@/app/constants/pluginCaseStudies";

type NextPluginCaseStudyCardProps = {
  href: string;
  title: string;
  subtitle: string;
  gradient: PluginCaseStudyGradient;
};

function buildDiagonalGradient({ angleDeg = 135, from, to }: PluginCaseStudyGradient) {
  return `linear-gradient(${angleDeg}deg, ${from} 0%, ${to} 100%)`;
}

function stripTrailingFullStop(text: string) {
  return text.endsWith(".") ? text.slice(0, -1) : text;
}

export function NextPluginCaseStudyCard({
  href,
  title,
  subtitle,
  gradient,
}: NextPluginCaseStudyCardProps) {
  const displayTitle = stripTrailingFullStop(title);
  const displaySubtitle = stripTrailingFullStop(subtitle);
  const lightText = gradient.lightText ?? false;

  return (
    <Link href={href} className="block w-full overflow-hidden rounded-lg">
      <div
        className="flex w-full flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 md:p-10"
        style={{ background: buildDiagonalGradient(gradient) }}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-2 text-left">
          <p
            className={`title-large font-semibold ${lightText ? "text-white" : "text-neutral-900"}`}
          >
            {displayTitle}
          </p>
          <p className={`body-large ${lightText ? "text-white/90" : "text-neutral-700"}`}>
            {displaySubtitle}
          </p>
        </div>

        <span className="inline-flex w-fit shrink-0 origin-center scale-100 transform-gpu items-center justify-center self-start rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 backface-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:scale-[1.03] sm:self-center">
          Read More
        </span>
      </div>
    </Link>
  );
}
