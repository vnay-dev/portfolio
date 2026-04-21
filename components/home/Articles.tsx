"use client";

import Link from "next/link";
import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Container } from "@/components/shared/composite";

const MIN_CARDS_FOR_ARROWS = 3;

const ARTICLES = [
  {
    href: "https://vnaykrshn.substack.com/p/should-ai-adoption-in-the-workplace",
    src: "/images/home/article1.png",
    alt: "Should AI adoption in the workplace be top-down or bottom-up?",
  },
  {
    href: "https://vnaykrshn.substack.com/p/when-movie-titles-start-talking",
    src: "/images/home/article1.png",
    alt: "When the title card reveals more than the movie name",
  },
];

export function Articles() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = Math.min(400, scrollRef.current.offsetWidth * 0.9) + 16;
    const amount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-neutral-950">
      <Container>
        <div className="flex flex-col gap-8 pb-16 pt-0 sm:pb-24 md:gap-16 md:pb-32">
          <div className="flex flex-col gap-4">
            <h2 className="editorial-headline-small editorial-italic text-center text-neutral-100">
              Reflections
            </h2>
            <p className="body-large text-center text-neutral-400">
              When different patterns intersect in a system, new ideas emerge and get&apos;s translated into words
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div
              ref={scrollRef}
              className="hide-scrollbar flex w-full gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-1 py-2"
            >
              {ARTICLES.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 cursor-pointer"
                  style={{ width: "min(400px, 90vw)" }}
                >
                  <img
                    src={article.src}
                    alt={article.alt}
                    className="aspect-video h-auto w-full rounded-lg object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/75">
                    <p
                      className="pointer-events-auto text-sm leading-tight font-normal text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base md:text-lg"
                      style={{ fontFamily: "var(--font-gabarito), var(--font-hanken), sans-serif" }}
                    >
                      Read article
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {ARTICLES.length >= MIN_CARDS_FOR_ARROWS && (
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-600 bg-neutral-800/90 transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
                >
                  <MdChevronLeft className="h-7 w-7 text-neutral-200" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-600 bg-neutral-800/90 transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
                >
                  <MdChevronRight className="h-7 w-7 text-neutral-200" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
