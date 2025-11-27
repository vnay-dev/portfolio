import Image from "next/image";
import { Container } from "@/components/shared/composite";

export function Projects() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 py-24 sm:py-36 md:py-42">
          <h2 className="editorial-headline-small editorial-italic text-center">
            Few of my best works
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex justify-center">
              <Image
                src="/images/whatsapp_project_thumbnail.png"
                alt="WhatsApp Project"
                width={1200}
                height={800}
                className="h-auto w-full max-w-3xl rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
