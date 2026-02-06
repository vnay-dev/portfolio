import Link from "next/link";
import { Container } from "@/components/shared/composite";

export function Articles() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 pb-16 pt-0 sm:pb-24 md:gap-16 md:pb-32">
          <h2 className="editorial-headline-small editorial-italic text-center">
            Ideas that became articles
          </h2>

          <div className="flex flex-col gap-16">
            <Link
              href="https://vnaykrshn.substack.com/p/should-ai-adoption-in-the-workplace"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full cursor-pointer"
            >
              <img
                src="/images/articles/ai-adoption-workplace-thumbnail.png"
                alt="Should AI adoption in the workplace be top-down or bottom-up?"
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/75">
                <p
                  className="pointer-events-auto text-sm leading-tight font-normal text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base md:text-lg lg:text-[1.75rem]"
                  style={{ fontFamily: "var(--font-gabarito), var(--font-hanken), sans-serif" }}
                >
                  Read article
                </p>
              </div>
            </Link>
            <Link
              href="https://vnaykrshn.substack.com/p/when-movie-titles-start-talking"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full cursor-pointer"
            >
              <img
                src="/images/articles/movie-titles-thumbnail.png"
                alt="When the title card reveals more than the movie name"
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/75">
                <p
                  className="pointer-events-auto text-sm leading-tight font-normal text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base md:text-lg lg:text-[1.75rem]"
                  style={{ fontFamily: "var(--font-gabarito), var(--font-hanken), sans-serif" }}
                >
                  Read article
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

