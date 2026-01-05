import Image from "next/image";
import Link from "next/link";
import { Container, Navbar } from "@/components/shared/composite";
import { Carousel, InsightCard } from "@/components/projects/whatsapp-audio-summary";
import { Ticker } from "@/components/projects/whatsapp-audio-summary/Ticker";
import {
  IoLockClosedOutline,
  IoFlashOutline,
  IoCloudOfflineOutline,
  IoHardwareChipOutline,
  IoRefreshOutline,
  IoTrendingUpOutline,
  IoExtensionPuzzleOutline,
  IoPhonePortraitOutline,
  IoShieldCheckmarkOutline,
  IoTimerOutline,
  IoStatsChartOutline,
} from "react-icons/io5";
import {
  interviewCarouselData,
  insightsData,
  uj2Iteration1Images,
  uj2Iteration1Descriptions,
  uj2SearchFlowImages,
  uj2SearchFlowDescriptions,
} from "./constants";

export default function WhatsAppAudioSummary() {
  return (
    <main className="min-h-screen w-full">
      <Navbar variant="light" />
      <Container>
        <div className="flex flex-col gap-16 py-16 sm:py-24 md:py-32">
          <h1 className="display-medium text-center">Smart voice notes to keep the chat flowing</h1>

          <Image
            src="/images/whatsapp/whtsp_hero_sctn_motion.gif"
            alt="WhatsApp Hero Animation"
            width={1200}
            height={800}
            quality={100}
            className="h-auto w-full rounded-lg object-cover"
          />
          {/* Section 1 begins */}
          <div
            className="flex w-full flex-col gap-6 overflow-hidden rounded-lg px-6 py-5 sm:gap-8 sm:px-8 sm:py-6 md:gap-8 md:px-8 md:py-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-5"
            style={{ backgroundColor: "var(--color-light-green)" }}
          >
            <div className="flex flex-row items-center gap-4 lg:flex-shrink-0">
              <Image
                src="/images/whatsapp/rocket.png"
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
                WhatsApp just released{" "}
                <span className="font-semibold">&quot;Transcripts&quot;</span>, which is pretty
                similar to what I visualized in this case study. Check out their blog post over{" "}
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
            but you just can&apos;t listen or reply right away, and they end up distracting you the
            whole time?
          </p>

          <Image
            src="/images/whatsapp/whatsapp_case_study_prototype.gif"
            alt="WhatsApp Case Study Prototype"
            width={1200}
            height={800}
            quality={100}
            className="h-auto w-full rounded-lg object-cover"
          />

          <p className="body-xlarge">
            And when the voice note is long, you tell yourself you will listen to it later, and then
            you either forget about it or realize you do not even have your earphones with you.
          </p>

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
                src="/images/whatsapp/whtsp_voice_notes_list.png"
                alt="WhatsApp Voice Notes List"
                width={1200}
                height={800}
                quality={100}
                className="h-auto w-full rounded-lg object-contain sm:w-3/4 md:w-18/25"
              />
            </div>
          </div>

          <Image
            src="/images/whatsapp/whtsp_claws.gif"
            alt="WhatsApp Claws Animation"
            width={1200}
            height={800}
            quality={100}
            className="h-auto w-full rounded-lg object-cover"
          />
          {/* Section 1 ends */}

          {/* Section 2 begins */}
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
          {/* Section 2 ends */}

          {/* Section 3 begins */}
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
          {/* Section 3 ends */}

          {/* Section 4 begins */}
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
                    src="/images/whatsapp/user_job_1.png"
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
                    src="/images/whatsapp/user_job_2.png"
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
          {/* Section 4 ends */}

          {/* Section 5 begins */}
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
                    src="/images/whatsapp/uj1_final_scrn1.png"
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
                    src="/images/whatsapp/uj1_final_scrn2.png"
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
                    src="/images/whatsapp/uj1_final_scrn3.png"
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
                    src="/images/whatsapp/uj1_itr1_scr1.png"
                    alt="Iteration 1 Screen 1"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                    quality={100}
                  />
                </div>
                <div className="relative w-full overflow-hidden rounded-lg sm:w-auto">
                  <Image
                    src="/images/whatsapp/uj1_itr1_scr2.png"
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
                    src="/images/whatsapp/uj1_itr2_scr1.png"
                    alt="Iteration 2 Screen 1"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                    quality={100}
                  />
                </div>
                <div className="relative w-full overflow-hidden rounded-lg sm:w-auto">
                  <Image
                    src="/images/whatsapp/uj1_itr2_scr2.png"
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
              Some common issues with the previous iterations (1 and 2) can be broken down as
              follows:
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
                    <strong>Contextual placement:</strong> The AI summary button was misplaced
                    outside the voice note UI, which felt counterintuitive since the summary remains
                    within the chat context.
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
                src="/images/whatsapp/uj1_iteration2_poster1.jpg"
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
                <strong>Lack of loading feedback:</strong> Users aren&apos;t told how long it takes
                to generate the summary, which could lead to uncertainty and frustration.
              </li>
              <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                <strong>Uncertainty about accuracy:</strong> The evolving AI technology might
                produce imperfect results. Users may assume complete accuracy due to the lack of
                information on its reliability and limitations.
              </li>
            </ol>

            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/images/whatsapp/uj1_iteration2_poster2.jpg"
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
                src="/images/whatsapp/uj1_iteration2_poster3.jpg"
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
          {/* Section 5 ends */}

          {/* Section 6 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">User job 2</h2>
            <blockquote
              className="text-xl italic md:text-2xl"
              style={{ color: "#1c1e21", fontFamily: "var(--font-editorial), sans-serif" }}
            >
              &quot;I want to search for keywords within voice notes to quickly find what I need in
              a chat history&quot;
            </blockquote>
            <div className="h-[0.5px] w-3/5" style={{ backgroundColor: "#d3d3d3" }}></div>
            <p className="body-xlarge" style={{ color: "#1c1e21" }}>
              Taking all these issues into account, I developed the third iteration, which
              ultimately became the final solution showcased in the first prototype.
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
                images={uj2SearchFlowImages}
                altPrefix="Search Screen"
                descriptions={uj2SearchFlowDescriptions}
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
              This iteration automatically shows you the summary and highlights the part that
              matches your search. So, no more scrolling through everything!
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
                images={uj2Iteration1Images}
                altPrefix="Search Screen"
                descriptions={uj2Iteration1Descriptions}
              />
            </div>

            <p className="body-xlarge" style={{ color: "#1c1e21" }}>
              Now, let&apos;s break down the issues with this user flow.
            </p>

            <ul
              className="flex flex-col gap-6"
              style={{ listStyle: "disc", paddingLeft: "1.5rem" }}
            >
              <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                <strong>Search results prioritization:</strong> On the search results screen, the
                audio summary takes priority over the actual audio files, which means the voice
                notes themselves aren&apos;t showing up in the results.
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
          {/* Section 6 ends */}

          {/* Section 7 begins */}
          <div className="flex flex-col gap-16">
            <div
              className="flex flex-col gap-6 rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-12"
              style={{ backgroundColor: "#e0ffd6" }}
            >
              <div className="flex w-full flex-col gap-6 md:max-w-xl lg:max-w-2xl">
                <h2 className="headline-small md:!text-[1.75rem]">
                  Tech constraints that may affect the UX
                </h2>
                <p className="body-xlarge">
                  The summaries can be generated either locally on your device or in the cloud,
                  depending on how it&apos;s set up.
                </p>
              </div>
              <div className="flex w-full flex-shrink-0 items-center justify-center md:w-auto md:max-w-[200px] lg:max-w-[240px]">
                <Image
                  src="/images/whatsapp/tech_constraints_illustration.svg"
                  alt="Tech constraints illustration"
                  width={400}
                  height={400}
                  className="h-auto max-h-[120px] w-full object-contain sm:max-h-[150px] md:max-h-[180px]"
                  quality={100}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="headline-small md:!text-[1.75rem]">Processing locally on device</h2>

              {/* OPTION 1: Two columns side by side - Advantages left, Disadvantages right */}
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                {/* Advantages Column */}
                <div className="flex flex-1 flex-col gap-6">
                  <h3 className="title-large" style={{ color: "#00be4c" }}>
                    Advantages
                  </h3>
                  <div className="flex flex-col gap-6">
                    {/* Advantage 1 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoLockClosedOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Privacy
                          </h4>
                          <p className="body-large">
                            Users might feel more secure knowing their data isn&apos;t being sent to
                            external servers.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Advantage 2 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoFlashOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Immediate Feedback
                          </h4>
                          <p className="body-large">
                            Faster response times since there&apos;s no need to wait for server
                            processing.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Advantage 3 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoCloudOfflineOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Offline Capability
                          </h4>
                          <p className="body-large">
                            Users can access the feature even without an active internet connection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disadvantages Column */}
                <div className="flex flex-1 flex-col gap-6">
                  <h3 className="title-large" style={{ color: "#c20a43" }}>
                    Disadvantages
                  </h3>
                  <div className="flex flex-col gap-6">
                    {/* Disadvantage 1 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoHardwareChipOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Resource Intensive
                          </h4>
                          <p className="body-large">
                            Requires significant computational power and storage, which might not be
                            available on all devices.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Disadvantage 2 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoRefreshOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Updates and Maintenance
                          </h4>
                          <p className="body-large">
                            Updating algorithms or adding new languages might be more challenging,
                            requiring app updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="headline-small md:!text-[1.75rem]">Processing on the server side</h2>

              {/* Two columns side by side - Advantages left, Disadvantages right */}
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                {/* Advantages Column */}
                <div className="flex flex-1 flex-col gap-6">
                  <h3 className="title-large" style={{ color: "#00be4c" }}>
                    Advantages
                  </h3>
                  <div className="flex flex-col gap-6">
                    {/* Advantage 1 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoFlashOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Performance
                          </h4>
                          <p className="body-large">
                            Offloading processing to powerful servers can handle complex tasks more
                            efficiently.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Advantage 2 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoTrendingUpOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Scalability
                          </h4>
                          <p className="body-large">
                            Easier to scale and update translation and summarization models without
                            app updates.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Advantage 3 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoExtensionPuzzleOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Reusability
                          </h4>
                          <p className="body-large">
                            The system can be built as a plugin that can be used across many
                            products within the organization.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Advantage 4 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoPhonePortraitOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Consistency
                          </h4>
                          <p className="body-large">
                            Ensures a consistent experience across devices by removing hardware
                            processing limitations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disadvantages Column */}
                <div className="flex flex-1 flex-col gap-6">
                  <h3 className="title-large" style={{ color: "#c20a43" }}>
                    Disadvantages
                  </h3>
                  <div className="flex flex-col gap-6">
                    {/* Disadvantage 1 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoShieldCheckmarkOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Privacy Concerns
                          </h4>
                          <p className="body-large">
                            Users might be concerned about their voice notes being sent to and
                            processed on external servers.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Disadvantage 2 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoTimerOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Latency
                          </h4>
                          <p className="body-large">
                            Cloud processing may cause delays, especially with slow or unstable
                            network connections.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Disadvantage 3 */}
                    <div
                      className="flex flex-col gap-4 rounded-lg border px-4 py-4 sm:px-6 sm:py-6"
                      style={{ borderColor: "#d3d3d3", borderWidth: "1px" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex flex-shrink-0 items-center justify-center">
                          <IoStatsChartOutline
                            className="text-3xl sm:text-4xl"
                            style={{ color: "#1c1e21" }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-2">
                          <h4 className="title-medium" style={{ fontWeight: 700 }}>
                            Data Usage
                          </h4>
                          <p className="body-large">
                            Users need a stable internet connection, and it could use up data
                            bandwidth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="headline-small md:!text-[1.75rem]">The hybrid approach</h2>

              <p className="body-xlarge" style={{ color: "#1c1e21" }}>
                After analyzing these two approaches, I decided to combine them into a hybrid
                approach:
              </p>

              <div className="flex flex-col gap-2">
                <p className="body-xlarge" style={{ color: "#1c1e21" }}>
                  Performing the initial processing locally to minimize data transfer, and more
                  complex tasks or updates are handled on the server. For instance:
                </p>

                <ol
                  className="flex flex-col gap-4"
                  style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}
                >
                  <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                    <strong>Initial transcription locally:</strong> Convert voice to text on the
                    device.
                  </li>
                  <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                    <strong>Translation and summarization on server:</strong> Send the transcribed
                    text to the server for translation and summarization.
                  </li>
                </ol>
              </div>

              <p className="body-xlarge" style={{ color: "#1c1e21" }}>
                This approach balances privacy with performance and allows for flexibility in
                managing updates.
              </p>
            </div>
          </div>
          {/* Section 7 ends */}

          {/* Section 8 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small md:!text-[1.75rem]">Challenges</h2>
            <ol
              className="flex flex-col gap-6"
              style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}
            >
              <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                Making sure the feature works well for users who speak multiple languages or
                dialects, or who mix languages (even in informal or imperfect ways) in their audio
                recordings.
              </li>
              <li className="body-xlarge" style={{ color: "#1c1e21" }}>
                Preserving the emotional tone and urgency in voice messages during transcription,
                especially for messages that convey excitement or urgency to make sure the intended
                mood and context come through clearly.
              </li>
            </ol>
          </div>
          {/* Section 8 ends */}

          {/* Section 9 begins */}
          <div className="flex flex-col gap-6">
            <h2 className="headline-small editorial-italic md:!text-[1.75rem]">
              Thanks for sticking around!
            </h2>
            <p className="body-xlarge" style={{ color: "#1c1e21" }}>
              Thanks you for taking the time to check out my case study! If you found it
              interesting, feel free to check out my other articles as well.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
