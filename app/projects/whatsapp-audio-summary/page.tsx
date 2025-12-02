import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/composite";

export default function WhatsAppAudioSummary() {
  return (
    <main className="min-h-screen w-full">
      <Container>
        <div className="flex flex-col gap-8 py-16 sm:py-24 md:py-32">
          <h1 className="display-medium text-center">Smart voice notes to keep the chat flowing</h1>
          
          <div className="flex justify-center">
            <Image
              src="/images/whtsp_hero_sctn_motion.gif"
              alt="WhatsApp Hero Animation"
              width={1200}
              height={800}
              quality={100}
              className="h-auto w-full max-w-4xl rounded-lg object-cover"
            />
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg bg-gray-100 px-6 py-4 sm:px-8 sm:py-6">
              <p className="body-large text-left">
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
        </div>
      </Container>
    </main>
  );
}
