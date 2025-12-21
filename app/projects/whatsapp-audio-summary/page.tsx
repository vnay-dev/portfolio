import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/composite";
import { Carousel, InsightCard } from "@/components/projects/whatsapp-audio-summary";

interface InterviewCarouselItem {
  question: string;
  objective: string;
}

interface InsightItem {
  icon: string;
  title: string;
  description: string;
}

const interviewCarouselData: InterviewCarouselItem[] = [
  {
    question: "Who do you typically send audio messages to?",
    objective: "To understand the personal comfort and context involved in using this feature",
  },
  {
    question: "What is your experience with the fast forward feature for voice notes?",
    objective: "To determine how often users make use of this feature",
  },
  {
    question:
      "How do you feel when someone continues to send you only audio messages in a conversation?",
    objective: "To understand user tolerance levels and when the feature becomes frustrating",
  },
  {
    question: "How do you find important conversations in chats with many voice notes?",
    objective: "To assess the difficulty of locating specific voice notes in a busy chat history",
  },
  {
    question: "When was the last time you sent or received an audio message?",
    objective: "To understand how frequently users utilize this feature",
  },
  {
    question: "How do you decide when to listen to audio messages?",
    objective: "To explore how users manage their time to listening to audio messages",
  },
];

const insightsData: InsightItem[] = [
  {
    icon: "/images/whtsp_insights_personal.gif",
    title: "Personal comfort",
    description:
      "People feel most comfortable sending voice notes to friends and family they're close to.",
  },
  {
    icon: "/images/whtsp_insights_ffwd.gif",
    title: "Fast-forward usage",
    description:
      "Users who are in a hurry often speed up audio, usually to 1.5x speed, to save time.",
  },
  {
    icon: "/images/whtsp_insights_searchlist.gif",
    title: "Difficulty locating messages",
    description:
      "Users often struggle to find specific voice notes in a busy chat history. Many mentioned how tough it is to grasp the context and how time-consuming the whole process can be.",
  },
  {
    icon: "/images/whtsp_insights_lock.gif",
    title: "Privacy concerns",
    description:
      "Users are often hesitant to listen to audio messages in public places due to privacy concerns, preferring headphones or private settings.",
  },
  {
    icon: "/images/whtsp_insights_mic.gif",
    title: "Expressive communication",
    description:
      "People use voice notes to express emotions beyond emojis, avoid typing, mix languages or communicate on the go.",
  },
];

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

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Validating my hypothesis</h2>
            <p className="body-xlarge">
              To get a clearer picture of the problem, I talked to my colleagues and friends; some
              who loved using the feature, some who barely touched it and others who only used it
              when they had to.
            </p>
            <div
              className="flex w-full flex-col gap-8 rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
              style={{ backgroundColor: "#111b21" }}
            >
              <h3 className="text-center text-xl font-medium text-white sm:text-2xl md:text-3xl">
                User interview questions and objectives
              </h3>
              <Carousel items={interviewCarouselData} />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Insights from user interviews</h2>
            <div className="flex flex-col gap-6">
              {insightsData.map((insight, index) => (
                <InsightCard
                  key={index}
                  icon={insight.icon}
                  title={insight.title}
                  description={insight.description}
                  isLast={index === insightsData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
