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
            className="relative w-full overflow-hidden rounded-lg px-6 py-4 sm:px-8 sm:py-6"
            style={{ backgroundColor: "var(--color-light-green)" }}
          >
            <Image
              src="/images/rocket.png"
              alt="Rocket"
              width={96}
              height={96}
              className="absolute top-1/2 left-3 h-auto w-16 -translate-y-2/5 sm:left-4 sm:w-20 md:left-6 md:w-24 lg:left-2 lg:w-32"
            />
            <p className="body-large pl-20 text-left sm:pl-24 md:pl-28 lg:pl-32">
              Looks like WhatsApp and I were on the same page! They just released{" "}
              <span className="font-semibold">&quot;Transcripts&quot;</span>, which is pretty
              similar to what I visualized in this case study. Check out their blog post{" "}
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
      </Container>
    </main>
  );
}
