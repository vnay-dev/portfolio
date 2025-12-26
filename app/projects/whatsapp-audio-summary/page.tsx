import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/composite";
import { Carousel, InsightCard } from "@/components/projects/whatsapp-audio-summary";
import { Ticker } from "@/components/projects/whatsapp-audio-summary/Ticker";

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

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Defining the problem</h2>
            <p className="body-xlarge">
              After analyzing the research and understanding the key insights, I was able to
              validate my initial hypothesis and define the problem statement(s) as user jobs:
            </p>
            <div className="flex flex-col gap-16 sm:flex-row sm:gap-8">
              <div className="flex flex-1 flex-col gap-6 overflow-hidden rounded-lg">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/user_job_1.png"
                    alt="User Job 1"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                    quality={100}
                  />
                </div>
                <div className="flex flex-row gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center border !text-xl font-light sm:h-12 sm:w-12 sm:!text-3xl"
                    style={{
                      color: "#1c1e21",
                      borderColor: "#1c1e21",
                      borderWidth: "1.35px",
                      borderRadius: "8px",
                    }}
                  >
                    1
                  </span>
                  <p className="body-large" style={{ color: "#1c1e21" }}>
                    When I receive a long audio message, I want to read a gist of it so that I can
                    quickly understand the context.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 overflow-hidden rounded-lg">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/user_job_2.png"
                    alt="User Job 2"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                    quality={100}
                  />
                </div>
                <div className="flex flex-row gap-4">
                  <span
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center border !text-xl font-light sm:h-12 sm:w-12 sm:!text-3xl"
                    style={{
                      color: "#1c1e21",
                      borderColor: "#1c1e21",
                      borderWidth: "1.35px",
                      borderRadius: "8px",
                    }}
                  >
                    2
                  </span>
                  <p className="body-large" style={{ color: "#1c1e21" }}>
                    I want to search for keywords within voice notes to quickly find what I need in
                    a chat history.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">User job 1</h2>
            <blockquote
              className="text-xl italic md:text-2xl"
              style={{ color: "#1c1e21", fontFamily: "var(--font-editorial), sans-serif" }}
            >
              &quot;When I receive a long audio message, I want to read a gist of it so that I can
              quickly understand the context&quot;
            </blockquote>
            <div className="h-[0.5px] w-3/5" style={{ backgroundColor: "#d3d3d3" }}></div>
            <p className="body-xlarge" style={{ color: "#1c1e21" }}>
              I figured that WhatsApp could use an AI model, which I&apos;m calling Meta AI, to
              summarize voice notes. I knew the first version wouldn&apos;t be perfect, given how AI
              is still evolving.
            </p>
            <p className="body-xlarge" style={{ color: "#1c1e21" }}>
              So, here&apos;s my final solution, designed to tackle the challenges of understanding
              voice notes in context.
            </p>
          </div>

          <div
            className="flex flex-col gap-8 rounded-lg px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 md:px-10 md:py-12"
            style={{ backgroundColor: "#d0ffcf" }}
          >
            <h3
              className="text-center !text-xl sm:!text-2xl md:!text-[1.75rem]"
              style={{ color: "#073318" }}
            >
              Read quick summaries of your voice notes
            </h3>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
              <div
                className="relative w-full overflow-hidden rounded-lg border sm:w-auto"
                style={{ borderColor: "#1c1e21", borderWidth: "2px" }}
              >
                <Image
                  src="/images/uj1_final_scrn1.png"
                  alt="Final Screen 1"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
              <div
                className="relative w-full overflow-hidden rounded-lg border sm:w-auto"
                style={{ borderColor: "#1c1e21", borderWidth: "2px" }}
              >
                <Image
                  src="/images/uj1_final_scrn2.png"
                  alt="Final Screen 2"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
              <div
                className="relative w-full overflow-hidden rounded-lg border sm:w-auto"
                style={{ borderColor: "#1c1e21", borderWidth: "2px" }}
              >
                <Image
                  src="/images/uj1_final_scrn3.png"
                  alt="Final Screen 3"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6">
            <div
              className="relative aspect-video w-full overflow-hidden rounded-lg border"
              style={{ backgroundColor: "#000", borderColor: "#1c1e21", borderWidth: "1.35px" }}
            >
              <iframe
                src="https://www.youtube.com/embed/WrmuKrA2ha4?autoplay=1&mute=1&vq=hd1080&rel=0&loop=1&playlist=WrmuKrA2ha4&modestbranding=1"
                title="Prototype Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
                className="absolute top-0 left-0 h-full w-full border-0"
                style={{
                  outline: "none",
                  border: "none",
                  margin: 0,
                  padding: 0,
                  left: "-2px",
                  top: "-1px",
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 2px)",
                  transform: "translateZ(0)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            Now, let me take you through the different iterations I went through before landing on
            this final version.
          </p>

          <div
            className="flex flex-col gap-8 rounded-lg px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 md:px-10 md:py-12"
            style={{ backgroundColor: "#d0ffcf" }}
          >
            <h3
              className="text-center !text-xl sm:!text-2xl md:!text-[1.75rem]"
              style={{ color: "#00be4c" }}
            >
              <span
                className="!text-lg sm:!text-xl"
                style={{
                  color: "#073318",
                }}
              >
                Iteration 1
              </span>
              <br />
              <span style={{ display: "block", marginTop: "0.5rem" }}>
                Using a bottom sheet to show summary of voice notes
              </span>
            </h3>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
              <div className="relative w-full overflow-hidden rounded-lg sm:w-auto">
                <Image
                  src="/images/uj1_itr1_scr1.png"
                  alt="Iteration 1 Screen 1"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
              <div className="relative w-full overflow-hidden rounded-lg sm:w-auto">
                <Image
                  src="/images/uj1_itr1_scr2.png"
                  alt="Iteration 1 Screen 2"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            This iteration disrupted the chat flow. Displaying the AI summary in a bottom sheet
            would interrupt the ongoing conversation, leading to a poor user experience.
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="!text-xl sm:!text-2xl md:!text-[1.75rem]" style={{ color: "#1c1e21" }}>
              Iteration 1.5 - transcript or summary?
            </h3>
            <p className="body-xlarge" style={{ color: "#1c1e21" }}>
              This iteration refines the copy. To save time, I opted for summarizing audio instead
              of transcribing it, as full transcriptions are not practical for long messages.
            </p>
          </div>

          <div
            className="flex flex-col gap-8 rounded-lg px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 md:px-10 md:py-12"
            style={{ backgroundColor: "#d0ffcf" }}
          >
            <h3
              className="text-center !text-xl sm:!text-2xl md:!text-[1.75rem]"
              style={{ color: "#00be4c" }}
            >
              <span
                className="!text-lg sm:!text-xl"
                style={{
                  color: "#073318",
                }}
              >
                Iteration 2
              </span>
              <br />
              <span style={{ display: "block", marginTop: "0.5rem" }}>
                Vertical expansion of the voice note
              </span>
            </h3>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
              <div className="relative w-full overflow-hidden rounded-lg sm:w-auto">
                <Image
                  src="/images/uj1_itr2_scr1.png"
                  alt="Iteration 2 Screen 1"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
              <div className="relative w-full overflow-hidden rounded-lg sm:w-auto">
                <Image
                  src="/images/uj1_itr2_scr2.png"
                  alt="Iteration 2 Screen 2"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            The problem with this iteration was that users wouldn&apos;t know what the AI summary
            button (the sparkle button) does. There&apos;s no clear indication of what to expect
            when they tap it.
          </p>
          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            Some common issues with the previous iterations (1 and 2) can be broken down as follows:
          </p>

          <ol
            className="flex flex-col gap-6"
            style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}
          >
            <li className="body-xlarge" style={{ color: "#1c1e21" }}>
              The AI summary button which the user taps on to see the summary.
              <ul
                className="mt-3 flex flex-col gap-3"
                style={{ listStyle: "disc", paddingLeft: "1.5rem" }}
              >
                <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                  <strong>Contextual placement:</strong> The AI summary button was misplaced outside
                  the voice note UI, which felt counterintuitive since the summary remains within
                  the chat context.
                </li>
                <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                  <strong>Confusion with forward button:</strong> The AI summary button&apos;s
                  position, typically used for forwarding in text messages, could confuse users.
                </li>
              </ul>
            </li>
          </ol>

          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="/images/uj1_iteration2_poster1.jpg"
              alt="Iteration 2 Poster 1"
              width={1200}
              height={800}
              className="h-auto w-full"
              quality={100}
            />
          </div>

          <ol
            className="flex flex-col gap-6"
            style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}
            start={2}
          >
            <li className="body-xlarge" style={{ color: "#1c1e21" }}>
              <strong>Lack of loading feedback:</strong> Users aren&apos;t told how long it takes to
              generate the summary, which could lead to uncertainty and frustration.
            </li>
            <li className="body-xlarge" style={{ color: "#1c1e21" }}>
              <strong>Uncertainty about accuracy:</strong> The evolving AI technology might produce
              imperfect results. Users may assume complete accuracy due to the lack of information
              on its reliability and limitations.
            </li>
          </ol>

          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="/images/uj1_iteration2_poster2.jpg"
              alt="Iteration 2 Poster 2"
              width={1200}
              height={800}
              className="h-auto w-full"
              quality={100}
            />
          </div>

          <ol
            className="flex flex-col gap-6"
            style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}
            start={4}
          >
            <li className="body-xlarge" style={{ color: "#1c1e21" }}>
              <strong>Unclear purpose:</strong> The lack of information about the generated
              text&apos;s nature can confuse users, as they may be unsure if it&apos;s a
              translation, transcript, or summary.
            </li>
          </ol>

          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src="/images/uj1_iteration2_poster3.jpg"
              alt="Iteration 2 Poster 3"
              width={1200}
              height={800}
              className="h-auto w-full"
              quality={100}
            />
          </div>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            After taking all these issues into account, the third iteration was developed, which
            eventually became the final solution presented in the first prototype.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="headline-small md:!text-[1.75rem]">User job 2</h2>
          <blockquote
            className="text-xl italic md:text-2xl"
            style={{ color: "#1c1e21", fontFamily: "var(--font-editorial), sans-serif" }}
          >
            &quot;I want to search for keywords within voice notes to quickly find what I need in a
            chat history&quot;
          </blockquote>
          <div className="h-[0.5px] w-3/5" style={{ backgroundColor: "#d3d3d3" }}></div>
          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            Taking all these issues into account, I developed the third iteration, which ultimately
            became the final solution showcased in the first prototype.
          </p>

          <div
            className="flex flex-col gap-8 rounded-lg px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 md:px-10 md:py-12"
            style={{ backgroundColor: "#fef5ea" }}
          >
            <h3
              className="text-center !text-xl sm:!text-2xl md:!text-[1.75rem]"
              style={{ color: "#00bc4c" }}
            >
              Redesigning the search flow
            </h3>
            <Ticker
              images={[
                "/images/uj2_screen1.png",
                "/images/uj2_screen2.png",
                "/images/uj2_screen3.png",
                "/images/uj2_screen4.png",
                "/images/uj2_screen5.png",
              ]}
              altPrefix="Search Screen"
              descriptions={[
                {
                  text: "User taps on the search bar",
                },
                {
                  text: "Starts typing 'Apple'",
                  highlightText: "Apple",
                  highlightLength: 1,
                },
                {
                  text: "Starts typing 'Apple'",
                  highlightText: "Apple",
                  highlightLength: 3,
                },
                {
                  text: "Finished typing 'Apple'",
                },
                {
                  text: "Collapsible summary",
                },
              ]}
            />
          </div>

          <div className="flex w-full flex-col gap-6">
            <div
              className="relative aspect-video w-full overflow-hidden rounded-lg border"
              style={{ backgroundColor: "#000", borderColor: "#1c1e21", borderWidth: "1.35px" }}
            >
              <iframe
                src="https://www.youtube.com/embed/a_jS0rgBODA?autoplay=1&mute=1&vq=hd1080&rel=0&loop=1&playlist=a_jS0rgBODA&modestbranding=1"
                title="Prototype Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
                className="absolute top-0 left-0 h-full w-full border-0"
                style={{
                  outline: "none",
                  border: "none",
                  margin: 0,
                  padding: 0,
                  left: "-2px",
                  top: "-1px",
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 2px)",
                  transform: "translateZ(0)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            This iteration automatically shows you the summary and highlights the part that matches
            your search. So, no more scrolling through everything!
          </p>
          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            Let me walk you through my thought process and how it all came together to lead to the
            final solution.
          </p>

          <div
            className="flex flex-col gap-8 rounded-lg px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 md:gap-12 md:px-10 md:py-12"
            style={{ backgroundColor: "#fef5ea" }}
          >
            <h3
              className="text-center !text-xl sm:!text-2xl md:!text-[1.75rem]"
              style={{ color: "#00bc4c" }}
            >
              Initial iteration of the search flow
            </h3>
            <Ticker
              images={[
                "/images/uj2_itr1_screen1.png",
                "/images/uj2_itr1_screen2.png",
                "/images/uj2_itr1_screen3.png",
                "/images/uj2_itr1_screen4.png",
              ]}
              altPrefix="Search Screen"
              descriptions={[
                {
                  text: "User taps on the search bar",
                },
                {
                  text: "Starts typing 'Apple'",
                  highlightText: "Apple",
                  highlightLength: 1,
                },
                {
                  text: "Starts typing 'Apple'",
                  highlightText: "Apple",
                  highlightLength: 3,
                },
                {
                  text: "Finished typing 'Apple'",
                },
              ]}
            />
          </div>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            Now, let&apos;s break down the issues with this user flow.
          </p>

          <ul className="flex flex-col gap-6" style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
            <li className="body-xlarge" style={{ color: "#1c1e21" }}>
              <strong>Search results prioritization:</strong> On the search results screen, the
              audio summary takes priority over the actual audio files, which means the voice notes
              themselves aren&apos;t showing up in the results.
            </li>
            <li className="body-xlarge" style={{ color: "#1c1e21" }}>
              <strong>Visual clarity:</strong> It&apos;s visually difficult for users to tell that
              these are audio summaries linked to voice notes from different chats.
            </li>
          </ul>

          <p className="body-xlarge" style={{ color: "#1c1e21" }}>
            The final solution was created by considering all these loopholes.
          </p>
        </div>
      </Container>
    </main>
  );
}
