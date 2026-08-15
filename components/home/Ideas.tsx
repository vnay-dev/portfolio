import { getPersonalAssetUrl, getVideoAssetUrl } from "@/app/constants/mediaAssets";
import { Container } from "@/components/shared/composite";
import { PrototypeCard, type PrototypeStory } from "./PrototypeCard";
import { SectionHeading } from "./SectionHeading";

type PrototypeCardData = {
  src: string;
  title: string;
  date?: string;
  dateTime?: string;
  subtitle?: string;
  storyCta?: string;
  aspectRatio: string;
  story?: PrototypeStory;
};

const PROTOTYPES: PrototypeCardData[] = [
  {
    src: getVideoAssetUrl("ente_journey_prototype.mp4"),
    title: "Ente journey",
    date: "June 2026",
    dateTime: "2026-06",
    subtitle:
      "Months after a trip, someone asks you about it, but all you have are hundreds of photos scattered across albums. So, I designed and prototyped a concept for Ente that turns those photos into a shareable travel itinerary. Then I shared this concept with Ente’s founder.",
    storyCta: "See his reply",
    aspectRatio: "1920 / 1080",
    story: {
      paragraphs: [
        "Every trip leaves you with hundreds of photos, but those photos don't always tell the whole story. I wanted to explore whether Ente could use those memories to bring the trip back together and make it easier to share with someone else.",
        "I designed and prototyped Ente Journey, a feature that looks at the photos from a trip and turns them into a simple, shareable travel itinerary. I brought Ensu, Ente’s on-device AI, into the Photos app, so you could use Ensu to edit and refine your itinerary without leaving Ente.",
        "I shared the prototype with Ente’s founder, and he wrote back:",
      ],
      quote: {
        text: "This is beautiful stuff! I shared it with the team and they loved it as well. Please keep making beautiful things :)",
        name: "Vishnu Mohandas",
        role: "Founder, Ente",
        portraitSrc: getPersonalAssetUrl("vishnu_mohandas.jpg"),
        portraitAlt: "Vishnu Mohandas",
      },
    },
  },
];

/**
 * Home section for concepts and prototypes that sit outside full case studies.
 * Placed after Projects so the work chapter reads: case studies, then explorations.
 */
export function Ideas() {
  return (
    <section id="ideas" className="w-full bg-[#1c1c1c]">
      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-24 md:gap-16 md:py-32">
          <SectionHeading
            variant="dark"
            title="Some ideas keep me up until I build them."
            subtitle="A space for concepts and prototypes that don't quite fit into a full case study."
          />

          <div className="flex w-full flex-col gap-20 sm:gap-24 md:gap-28">
            {PROTOTYPES.map((prototype) => (
              <PrototypeCard
                key={prototype.src}
                src={prototype.src}
                title={prototype.title}
                date={prototype.date}
                dateTime={prototype.dateTime}
                subtitle={prototype.subtitle}
                storyCta={prototype.storyCta}
                aspectRatio={prototype.aspectRatio}
                story={prototype.story}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
