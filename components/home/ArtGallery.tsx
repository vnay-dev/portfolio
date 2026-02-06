import { Container } from "@/components/shared/composite";

export function ArtGallery() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 pb-16 pt-0 sm:pb-24 md:gap-16 md:pb-32">
          <h2 className="editorial-headline-small editorial-italic text-center">
            My art gallery
          </h2>

          <div className="flex flex-col gap-16">
            {/* Content will be added here */}
          </div>
        </div>
      </Container>
    </section>
  );
}

