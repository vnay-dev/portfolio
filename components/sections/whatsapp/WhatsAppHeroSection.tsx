import { ReactNode } from "react";
import ProblemStatementsSection from "./ProblemStatementsSection";

type WhatsAppHeroSectionProps = {
  children: ReactNode;
};

const WhatsAppHeroSection = ({ children }: WhatsAppHeroSectionProps) => {
  return (
    <div style={{ maxWidth: "1080px" }} className="flex flex-col gap-16">
      <section style={{ paddingTop: "240px" }}>
        <div className="flex flex-col gap-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-12 text-center">
            <h1
              className="mx-auto max-w-4xl text-[2rem] leading-[1.1] font-bold tracking-tight md:text-[3rem] xl:text-[3.5rem]"
              style={{ fontSize: "56px" }}
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
                className="relative flex flex-row items-center"
                style={{
                  isolation: "isolate",
                  padding: "18px 24px",
                  gap: "24px",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[0.75rem]"
                  style={{
                    zIndex: 1,
                    background: "#fff5eb",
                  }}
                />

                <div className="relative z-10">
                  <img
                    src="https://em-content.zobj.net/source/whatsapp/116/rocket_1f680.png"
                    alt="Rocket emoji"
                    width={48}
                    height={48}
                    className="h-auto w-12"
                  />
                </div>

                <div
                  className="relative z-10 flex-1 text-left text-sm leading-relaxed text-black md:text-base"
                  style={{ fontSize: "20px" }}
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
