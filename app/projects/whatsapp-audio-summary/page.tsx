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
            className="flex w-full flex-col gap-6 overflow-hidden rounded-lg px-6 py-5 sm:gap-8 sm:px-8 sm:py-6 md:gap-8 md:px-8 md:py-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-5"
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

          <p className="body-xlarge">
            Ever been stuck in a situation where someone important sends you a bunch of voice notes
            but you just can&apos;t listen or reply right away?
          </p>

          <Image
            src="/images/whatsapp_case_study_prototype.gif"
            alt="WhatsApp Case Study Prototype"
            width={1200}
            height={800}
            quality={100}
            className="h-auto w-full rounded-lg object-cover"
          />

          <p className="body-xlarge">
            Imagine you&apos;re in an important meeting and your parents send a bunch of voice
            notes. You can&apos;t check them and not knowing what they&apos;re about keeps you
            distracted.
          </p>

          <Image
            src="/images/whtsp_claws.gif"
            alt="WhatsApp Claws Animation"
            width={1200}
            height={800}
            quality={100}
            className="h-auto w-full rounded-lg object-cover"
          />

          <div
            className="flex flex-col items-center justify-between gap-8 rounded-lg px-6 pt-5 sm:px-8 sm:pt-6 md:items-center md:gap-8 md:px-12 md:pt-12 lg:flex-row"
            style={{ backgroundColor: "#fff5eb" }}
          >
            <div className="flex w-full flex-col gap-4">
              <h2 className="headline-small md:!text-[1.75rem]">
                Scrolling through a long list of voice notes..
              </h2>
              <p className="body-xlarge">
                ...means playing each one separately. If they&apos;re all over the place or mixed
                with other messages, it&apos;s tough to make sense of them, especially when the
                conversation&apos;s old.
              </p>
            </div>
            <div className="flex w-full items-end justify-center md:pt-16">
              <Image
                src="/images/whtsp_voice_notes_list.png"
                alt="WhatsApp Voice Notes List"
                width={1200}
                height={800}
                quality={100}
                className="h-auto w-full rounded-lg object-contain sm:w-3/4 md:w-18/25"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
