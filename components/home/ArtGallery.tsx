import Image from "next/image";
import { Container } from "@/components/shared/composite";

const GALLERY_ITEMS = [
  {
    src: "/images/home/dies-irae.png",
    alt: "Dies Irae",
  },
  // Add more items here:
  // { src: "/images/home/item.png", alt: "Item name" },
];

export function ArtGallery() {
  const items = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section className="w-full overflow-hidden bg-neutral-950">
      <Container>
        <div className="flex flex-col gap-8 pb-16 pt-0 sm:pb-24 md:gap-16 md:pb-32">
          <div className="flex flex-col gap-4">
            <h2 className="editorial-headline-small editorial-italic text-center text-neutral-100">
              Form & aesthetics
            </h2>
            <p className="body-large text-center text-neutral-400">
              Exploring visual craft that helps systems feel more memorable
            </p>
          </div>

          <div className="relative -mx-4 sm:-mx-6 md:-mx-8">
            <div className="ticker-mask overflow-hidden">
              <div className="ticker-inner flex w-max gap-6 px-4 sm:gap-8 sm:px-6 md:gap-10 md:px-8">
                {items.map((item, i) => (
                  <div
                    key={`${item.src}-${i}`}
                    className="relative flex-shrink-0"
                    style={{ width: "min(280px, 70vw)" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={280}
                      height={280}
                      className="h-auto w-full rounded-lg object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
