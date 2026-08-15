import { Container } from "@/components/shared/composite";
import { SectionHeading } from "./SectionHeading";

const EMBEDS = [
  {
    url: "https://web-synth-one.vercel.app/",
    title: "Glidr 101 — Turn your touchpad into a musical instrument",
  },
  // Add more embeds here as needed:
  // { url: "https://example.com", title: "Project Name" },
];

export function BuildingSoftware() {
  return (
    <section className="w-full bg-neutral-950">
      <Container>
        <div className="flex flex-col gap-8 pb-16 pt-0 sm:pb-24 md:gap-16 md:pb-32">
          <SectionHeading
            align="center"
            variant="dark"
            title="Thinking beyond constraints"
            subtitle="It’s fun to take a break from systems and explore slightly quirky ideas for the joy of building"
          />

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-8">
            {EMBEDS.map((embed) => (
              <a
                key={embed.url}
                href={embed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video overflow-hidden rounded-lg"
              >
                <iframe
                  src={embed.url}
                  title={embed.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
