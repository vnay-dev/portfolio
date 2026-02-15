import { Container } from "@/components/shared/composite";

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
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 pb-16 pt-0 sm:pb-24 md:gap-16 md:pb-32">
          <div className="flex flex-col gap-4">
            <h2 className="editorial-headline-small editorial-italic text-center">
              Thinking beyond constraints
            </h2>
            <p className="body-large text-center text-neutral-600">
              It’s fun to take a break from systems and explore slightly quirky ideas for the joy of building
            </p>
          </div>

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
