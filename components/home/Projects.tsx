"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getPluginsAssetUrl, getTDBridgeAssetUrl, getWhatsAppAssetUrl } from "@/app/constants/mediaAssets";
import { Container } from "@/components/shared/composite";

type ProjectCardData = {
  href: string;
  imageSrc: string;
  imageSrcMobile?: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  hidden: boolean;
};

type ProjectCardProps = Omit<ProjectCardData, "hidden">;

function ProjectCard({ href, imageSrc, imageSrcMobile, imageAlt, title, subtitle }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setReveal(1);
      return;
    }

    const thresholds = Array.from({ length: 21 }, (_, step) => step / 20);
    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = Math.min(1, entry.intersectionRatio * 2.25);
        setReveal((previous) => Math.max(previous, progress));
        if (progress >= 0.98) {
          observer.disconnect();
        }
      },
      {
        threshold: thresholds,
        rootMargin: "0px 0px -2% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const blurPx = (1 - reveal) * 10;
  const translateY = (1 - reveal) * 20;
  const scale = 0.97 + reveal * 0.03;

  return (
    <Link
      ref={cardRef}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group block w-full cursor-pointer overflow-hidden rounded-2xl ease-out will-change-[transform,opacity,filter]"
      style={{
        opacity: reveal,
        transform: `translateY(${translateY}px) scale(${scale})`,
        filter: blurPx > 0.25 ? `blur(${blurPx}px)` : "none",
        transition: "opacity 0.26s ease-out, transform 0.26s ease-out, filter 0.26s ease-out",
      }}
    >
      <picture>
        {imageSrcMobile ? (
          <source media="(min-width: 768px)" srcSet={imageSrc} />
        ) : null}
        <img
          src={imageSrcMobile ?? imageSrc}
          alt={imageAlt}
          className={`h-auto w-full origin-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[0.97] ${imageSrcMobile ? "object-contain md:object-cover" : "object-cover"}`}
        />
      </picture>
      <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:gap-3">
        <h3 className="headline-medium text-neutral-900 md:headline-large">{title}</h3>
        <p className="body-xlarge text-neutral-500 md:text-xl md:leading-8">{subtitle}</p>
      </div>
    </Link>
  );
}

export function Projects() {
  const projectCards: ProjectCardData[] = [
    {
      href: "/projects/tdbridge",
      imageSrc: getTDBridgeAssetUrl("tech_design_research_thumbnail.png"),
      imageSrcMobile: getTDBridgeAssetUrl("mobile/project-thumb-tdb_mob.png"),
      imageAlt: "Tech Design Research Project",
      title: "Building the foundation for AI-Native web design system",
      subtitle:
        "Scaled the design system through standards, architecture, and a reusable component library, laying the foundation for design-to-code agentic workflows.",
      hidden: false,
    },
    {
      href: "/projects/plugin-1",
      imageSrc: getPluginsAssetUrl("project-thumb-plugin.png"),
      imageSrcMobile: getPluginsAssetUrl("project-thumb-plugins_mob.png"),
      imageAlt: "Figma plugins case study",
      title: "Reducing the design system maintenance from months to weeks",
      subtitle: "Built custom Figma plugins to automate repetitive workflows at scale.",
      hidden: false,
    },
    {
      href: "/projects/whatsapp-audio-summary",
      imageSrc: getWhatsAppAssetUrl("whatsapp_project_thumbnail.jpg"),
      imageSrcMobile: getWhatsAppAssetUrl("mobile/project-thumb-whatsapp_mob.png"),
      imageAlt: "WhatsApp Project",
      title: "Turning voice notes into instant summaries",
      subtitle:
        "Designed a smart voice note experience that helped users quickly catch up on long voice messages.",
      hidden: false,
    },
  ];

  return (
    <section id="work" className="w-full bg-white">
      <Container>
        <div className="flex flex-col items-start gap-8 pt-16 pb-16 sm:pt-24 sm:pb-24 md:gap-16 md:pt-32 md:pb-32">
          <h2 className="display-small w-full max-w-[90%] text-left text-neutral-900 lg:w-9/10">
            Few of my best works
          </h2>

          <div className="flex flex-col gap-20 sm:gap-24 md:gap-28">
            {projectCards
              .filter((card) => !card.hidden)
              .map((card) => (
                <ProjectCard
                  key={card.href}
                  href={card.href}
                  imageSrc={card.imageSrc}
                  imageSrcMobile={card.imageSrcMobile}
                  imageAlt={card.imageAlt}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
