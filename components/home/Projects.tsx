 "use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { isFeatureEnabled } from "@/app/constants";
import { getTDBridgeAssetUrl, getWhatsAppAssetUrl } from "@/app/constants/mediaAssets";
import { Container } from "@/components/shared/composite";

type ProjectCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
};

function ProjectCard({ href, imageSrc, imageAlt, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ease-out will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-auto w-full origin-center rounded-lg object-cover transition-transform duration-500 ease-out group-hover:scale-[0.97]"
      />
    </Link>
  );
}

export function Projects() {
  const showSecondCaseStudyThumbnail = isFeatureEnabled("homeShowSecondCaseStudyThumbnail");

  const projectCards = [
    {
      href: "/projects/tdbridge",
      imageSrc: getTDBridgeAssetUrl("tech_design_research_thumbnail.png"),
      imageAlt: "Tech Design Research Project",
      hidden: false,
    },
    {
      href: "/projects/plugin-1",
      imageSrc: getTDBridgeAssetUrl("tech_design_research_thumbnail.png"),
      imageAlt: "Figma Plugins Project",
      hidden: !showSecondCaseStudyThumbnail,
    },
    {
      href: "/projects/whatsapp-audio-summary",
      imageSrc: getWhatsAppAssetUrl("whatsapp_project_thumbnail.jpg"),
      imageAlt: "WhatsApp Project",
      hidden: false,
    },
  ];

  return (
    <section id="work" className="w-full bg-white">
      <Container>
        <div className="flex flex-col items-start gap-8 pt-16 pb-16 sm:pt-24 sm:pb-24 md:gap-16 md:pt-32 md:pb-32">
          <h2 className="editorial-headline-small editorial-italic w-full max-w-[90%] text-left text-neutral-900 lg:w-9/10">
            Few of my best works
          </h2>

          <div className="flex flex-col gap-16">
            {projectCards
              .filter((card) => !card.hidden)
              .map((card, index) => (
                <ProjectCard
                  key={card.href}
                  index={index}
                  href={card.href}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
