import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/composite";

export function Projects() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 py-24 sm:py-36 md:gap-16 md:py-64">
          <h2 className="editorial-headline-small editorial-italic text-center">
            Few of my best works
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex justify-center">
              <Link
                href="/projects/whatsapp-audio-summary"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
              >
                <Image
                  src="/images/whatsapp_project_thumbnail.png"
                  alt="WhatsApp Project"
                  width={1200}
                  height={800}
                  className="h-auto w-full max-w-4xl rounded-lg object-cover"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/0 transition-colors duration-300 group-hover:bg-black/75">
                  <p className="headline-medium pointer-events-auto text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
