import { ReactNode } from "react";
import ProblemStatementsSection from "./ProblemStatementsSection";

type WhatsAppHeroSectionProps = {
  children: ReactNode;
};

const WhatsAppHeroSection = ({ children }: WhatsAppHeroSectionProps) => {
  return (
    <div 
      style={{ 
        maxWidth: "1080px",
        paddingLeft: "clamp(1rem, 3vw, 2rem)",
        paddingRight: "clamp(1rem, 3vw, 2rem)"
      }} 
      className="flex w-full flex-col gap-8 sm:gap-12 md:gap-16"
    >
      <section style={{ paddingTop: "clamp(4rem, 12vw, 15rem)" }}>
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 text-center sm:gap-10 md:gap-12">
            <h1
              className="mx-auto max-w-4xl leading-[1.1] font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
            >
              Smart voice notes: Keep the chat flowing
            </h1>

            <div className="mx-auto w-full max-w-[952px]">
              <img
                src="https://framerusercontent.com/images/a9bWVGtcSNxqsigw9QiKdhFMQ.gif"
                alt="WhatsApp voice notes feature demonstration"
                width={952}
                height={421}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>

            <div className="relative">
              <div
                className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6"
                style={{
                  isolation: "isolate",
                  padding: "clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 1.5rem)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[0.75rem]"
                  style={{
                    zIndex: 1,
                    background: "#fff5eb",
                  }}
                />

                <div className="relative z-10 flex-shrink-0">
                  <img
                    src="https://em-content.zobj.net/source/whatsapp/116/rocket_1f680.png"
                    alt="Rocket emoji"
                    width={48}
                    height={48}
                    className="h-8 w-8 sm:h-12 sm:w-12"
                  />
                </div>

                <div
                  className="relative z-10 flex-1 text-left leading-relaxed text-black"
                  style={{ fontSize: "clamp(0.875rem, 2vw, 1.25rem)" }}
                >
                  Looks like WhatsApp and I were on the same page! They just released
                  &ldquo;Transcripts&rdquo;, which is pretty similar to what I visualized in this
                  case study. Check out their blog post{" "}
                  <a
                    href="https://blog.whatsapp.com/introducing-voice-message-transcripts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b82f6] underline transition-colors hover:text-[#60a5fa]"
                  >
                    here
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>

          <ProblemStatementsSection />
        </div>
      </section>
      {children}
    </div>
  );
};

export default WhatsAppHeroSection;
