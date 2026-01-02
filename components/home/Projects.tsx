import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/composite";

export function Projects() {
  return (
    <section id="work" className="w-full">
      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-24 md:gap-16 md:py-32">
          <h2 className="editorial-headline-small editorial-italic text-center">
            Few of my best works
          </h2>

          <div className="flex flex-col gap-16">
            <div className="flex justify-center">
              <Link
                href="/projects/tdbridge"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
              >
                <Image
                  src="/images/tdbridge/tech_design_research_thumbnail.png"
                  alt="Tech Design Research Project"
                  width={1072}
                  height={715}
                  className="h-auto w-full rounded-lg object-cover"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/75">
                  <p
                    className="pointer-events-auto text-sm leading-tight font-normal text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base md:text-lg lg:text-[1.75rem]"
                    style={{ fontFamily: "var(--font-gabarito), var(--font-hanken), sans-serif" }}
                  >
                    View case study
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/projects/whatsapp-audio-summary"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
              >
                <Image
                  src="/images/whatsapp/whatsapp_project_thumbnail.png"
                  alt="WhatsApp Project"
                  width={1072}
                  height={715}
                  className="h-auto w-full rounded-lg object-cover"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/75">
                  <p
                    className="pointer-events-auto text-sm leading-tight font-normal text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-base md:text-lg lg:text-[1.75rem]"
                    style={{ fontFamily: "var(--font-gabarito), var(--font-hanken), sans-serif" }}
                  >
                    View case study
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
