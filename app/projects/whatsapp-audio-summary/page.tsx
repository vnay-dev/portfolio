import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/composite";

export default function WhatsAppAudioSummary() {
  return (
    <main className="min-h-screen w-full">
      <Container>
        <div className="flex flex-col gap-12 py-16 sm:py-24 md:py-32">
          <h1 className="display-medium text-center">Smart voice notes to keep the chat flowing</h1>

          <Image
            src="/images/whtsp_hero_sctn_motion.gif"
            alt="WhatsApp Hero Animation"
            width={1200}
            height={800}
            quality={100}
            className="h-auto w-full rounded-lg object-cover"
          />

          <div
            className="flex w-full flex-col gap-4 overflow-hidden rounded-lg px-5 py-4 sm:px-6 sm:py-5 md:px-7 md:py-5 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-5"
            style={{ backgroundColor: "var(--color-light-green)" }}
          >
            <div className="flex flex-row items-center gap-4 lg:flex-shrink-0">
              <Image
                src="/images/rocket.png"
                alt="Rocket"
                width={96}
                height={96}
                className="h-auto w-10 flex-shrink-0 sm:w-12 md:w-16 lg:w-16"
              />
              <p className="title-large text-lg sm:text-xl md:text-xl lg:hidden">
                Looks like WhatsApp and I were on the same page!
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 text-left">
              <p className="title-large hidden lg:block">
                Looks like WhatsApp and I were on the same page!
              </p>
              <p className="body-large text-sm sm:text-base md:text-base">
                They just released <span className="font-semibold">&quot;Transcripts&quot;</span>,
                which is pretty similar to what I visualized in this case study. Check out their
                blog post{" "}
                <Link
                  href="https://blog.whatsapp.com/introducing-voice-message-transcripts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline transition-colors hover:text-blue-800"
                >
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
