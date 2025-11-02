"use client";

import React, { useState, useEffect } from "react";

const insightsData = [
  {
    icon: "https://framerusercontent.com/images/J02tSVXkqewS9ImlAoTzMw8UeDo.gif",
    title: "Personal comfort",
    description:
      "People feel most comfortable sending voice notes to friends and family they're close to.",
  },
  {
    icon: "https://framerusercontent.com/images/tY35WmOPEAyRsEsFeddY5oueys.gif",
    title: "Fast-forward usage",
    description:
      "Users who are in a hurry often speed up audio, usually to 1.5x speed, to save time.",
  },
  {
    icon: "https://framerusercontent.com/images/dmVu8jyOfSDMNOfGe7XYhEl148.gif",
    title: "Difficulty locating messages",
    description:
      "Users often struggle to find specific voice notes in a busy chat history. Many mentioned how tough it is to grasp the context and how time-consuming the whole process can be.",
  },
  {
    icon: "https://framerusercontent.com/images/DMU1BcppKnsTn5BDV4hG4NCY.gif",
    title: "Privacy concerns",
    description:
      "Users are often hesitant to listen to audio messages in public places due to privacy concerns, preferring headphones or private settings.",
  },
  {
    icon: "https://framerusercontent.com/images/20wvr0pDRsiSsYWpxQCFsIlE.gif",
    title: "Expressive communication",
    description:
      "People use voice notes to express emotions beyond emojis, avoid typing, mix languages or communicate on the go.",
  },
];

export default function WhatsAppCaseStudy() {
  // Carousel data with questions and objectives
  const carouselData = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Image carousel data for "Redesigning the search flow" section
  const searchImages = [
    {
      src: "/images/uj2_screen1.png",
      description: "User taps on the search bar",
    },
    {
      src: "/images/uj2_screen2.png",
      description: "Starts typing 'Apple'",
    },
    {
      src: "/images/uj2_screen3.png",
      description: "Coninues typing 'Apple'",
    },
    {
      src: "/images/uj2_screen4.png",
      description: "Finished typing 'Apple'",
    },
    {
      src: "/images/uj2_screen5.png",
      description: "Collapsible summary",
    },
  ];

  // Auto-slide carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <main className="flex min-h-screen justify-center bg-white text-gray-900">
      {/* Main Content Container */}
      <div className="mx-auto flex flex-col gap-[56px]" style={{ maxWidth: "1080px" }}>
        {/* Hero Section */}
        <section style={{ paddingTop: "240px" }}>
          <div className="mx-auto flex max-w-5xl flex-col gap-[56px] text-center">
            <h1 className="mx-auto max-w-4xl text-[2rem] leading-[1.1] font-bold tracking-tight md:text-[3rem] xl:text-[3.5rem]">
              Smart voice notes: Keep the chat flowing
            </h1>

            {/* Hero GIF */}
            <div className="mx-auto w-full max-w-[952px]">
              <img
                src="https://framerusercontent.com/images/a9bWVGtcSNxqsigw9QiKdhFMQ.gif"
                alt="WhatsApp voice notes feature demonstration"
                width={952}
                height={421}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>

            {/* WhatsApp Release Note Banner */}
            <div className="relative">
              {/* Container with pseudo-element border */}
              <div
                className="relative flex flex-row items-center"
                style={{
                  isolation: "isolate",
                  padding: "18px 24px",
                  gap: "24px",
                }}
              >
                {/* Green border via pseudo-element */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[0.75rem]"
                  style={{
                    zIndex: 1,
                    background: "#fff5eb",
                  }}
                />

                {/* Rocket Image */}
                <div className="relative z-10">
                  <img
                    src="https://em-content.zobj.net/source/whatsapp/116/rocket_1f680.png"
                    alt="Rocket emoji"
                    width={48}
                    height={48}
                    className="h-auto w-12"
                  />
                </div>

                {/* Text Content */}
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
        </section>

        {/* Problem Statement 1 */}
        <section>
          <div className="mx-auto flex max-w-5xl flex-col gap-[56px]">
            <p
              className="max-w-4xl leading-relaxed font-normal md:text-2xl"
              style={{ fontSize: "20px" }}
            >
              Ever been stuck in a situation where someone important sends you a bunch of voice
              notes but you just can&apos;t listen or reply right away?
            </p>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <img
                src="/images/whatsapp_case_study_prototype.gif"
                alt="WhatsApp Case Study Animation"
                width={360}
                height={640}
                className="w-full max-w-[360px] rounded-[1.5rem]"
              />
            </div>

            <p
              className="mx-auto max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ fontSize: "20px" }}
            >
              Imagine you&apos;re in an important meeting and your parents send a bunch of voice
              notes. You can&apos;t check them and not knowing what they&apos;re about keeps you
              distracted.
            </p>

            {/* Additional GIF */}
            <div className="flex justify-center">
              <img
                src="https://framerusercontent.com/images/PhWCFjNVHZ26RZa2gyAyfRt8oU.gif"
                alt="WhatsApp voice notes scenario demonstration"
                width={400}
                height={300}
                className="w-full max-w-[400px] rounded-[1.5rem]"
              />
            </div>
          </div>
        </section>

        {/* Problem Statement 2 */}
        <section>
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col gap-6">
                <h2 className="text-[2rem] leading-[1.2] font-bold text-balance md:text-[2.5rem]">
                  Scrolling through a long list of voice notes..
                </h2>
                <p
                  className="text-lg leading-relaxed text-gray-600 md:text-xl"
                  style={{ fontSize: "20px" }}
                >
                  ...means playing each one separately. If they&apos;re all over the place or mixed
                  with other messages, it&apos;s tough to make sense of them, especially when the
                  conversation&apos;s old.
                </p>
              </div>

              <div className="flex min-h-[375px] items-center justify-end bg-transparent p-16">
                <img
                  src="https://framerusercontent.com/images/w7zAWHfUipslwAkHjCYnTZHUeU.png"
                  alt="Scrolling animation"
                  width={375}
                  height={375}
                  className="w-full"
                  style={{ maxWidth: "375px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Validation Section */}
        <section>
          <div className="mx-auto flex max-w-5xl flex-col gap-20">
            <div className="flex flex-col gap-8">
              <h2 className="text-[2.25rem] leading-[1.2] font-bold text-balance md:text-[3rem]">
                Validating my hypothesis
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
                To get a clearer picture of the problem, I talked to my colleagues and friends; some
                who loved using the feature, some who barely touched it and others who only used it
                when they had to.
              </p>
            </div>

            {/* User Interview Card with Carousel */}
            <div
              className="flex flex-col gap-[24px] rounded-[1.5rem] bg-[#004931]"
              style={{ padding: "48px" }}
            >
              <p className="text-center text-white" style={{ fontSize: "32px" }}>
                User interviews questions and objectives
              </p>

              {/* Carousel Container */}
              <div className="relative" style={{ padding: "0 8px 16px 8px", overflow: "hidden" }}>
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {carouselData.map((item, index) => (
                    <div
                      key={index}
                      className="flex min-w-full justify-center"
                      style={{ flexShrink: 0 }}
                    >
                      <div
                        className="flex flex-col items-center gap-[48px] rounded-[1.5rem] bg-[#E6F7E6]"
                        style={{
                          padding: "36px",
                          width: "720px",
                          maxWidth: "75%",
                          justifyContent: "space-between",
                          boxShadow: "8px 8px 0px 0px #00d757",
                        }}
                      >
                        <p className="mb-16 text-center text-xl leading-relaxed font-medium text-[#00754f] md:text-2xl">
                          {item.question}
                        </p>

                        {/* Objective Separator */}
                        <div className="relative mb-12 w-full">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className="w-1/2 border-t border-[#00d757]"
                              style={{ borderTopWidth: "0.5px" }}
                            ></div>
                          </div>
                          <div className="relative flex justify-center">
                            <div
                              className="rounded-full border border-[#00d757] bg-[#E6F7E6]"
                              style={{ padding: "4px 12px" }}
                            >
                              <span className="text-sm tracking-wide text-[#00d757]">
                                Objective
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-center text-lg leading-relaxed text-[#1A4331]">
                          {item.objective}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-[#00d757]" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2
              className="text-[2.25rem] leading-[1.2] font-bold md:mb-20 md:text-[3rem]"
              style={{ marginBottom: "24px" }}
            >
              Insights from user interviews
            </h2>

            <div className="flex flex-col gap-6">
              {insightsData.map((insight, index) => (
                <div
                  key={index}
                  className="flex gap-6 rounded-[1.5rem] border-2 border-gray-200 bg-white"
                  style={{ padding: "24px" }}
                >
                  <div className="flex-shrink-0" style={{ width: "216px", height: "216px" }}>
                    <img
                      src={insight.icon}
                      alt={insight.title}
                      width={216}
                      height={216}
                      className="h-full w-full rounded-[0.75rem] object-cover"
                      style={{ width: "216px", height: "216px", border: "2px solid white" }}
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-4" style={{ paddingTop: "32px" }}>
                    <h3 className="mb-4 text-xl font-bold" style={{ fontSize: "24px" }}>
                      {insight.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Defining Problem Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <h2
              className="mb-8 text-[2.25rem] leading-[1.2] font-bold md:text-[3rem]"
              style={{ marginBottom: "24px" }}
            >
              Defining the problem
            </h2>
            <p
              className="mb-16 max-w-3xl text-lg leading-relaxed text-gray-600 md:mb-20 md:text-xl"
              style={{ fontSize: "20px", marginBottom: "32px" }}
            >
              After analyzing the research and understanding the key insights, I was able to
              validate my initial hypothesis and define the problem statement(s) as user jobs:
            </p>

            {/* User Jobs */}
            <div className="flex justify-between gap-8">
              {/* Job 1 */}
              <div
                className="flex flex-1 flex-col gap-8 rounded-[1.5rem]"
                style={{
                  padding: "32px",
                  backgroundColor: "rgb(250, 250, 250)",
                  border: "1px solid rgb(230, 230, 230)",
                }}
              >
                <img
                  src="/images/user_job_1.png"
                  alt="Meeting scenario"
                  width={320}
                  height={568}
                  className="h-auto max-h-full w-auto max-w-full rounded-[0.75rem]"
                />
                <div className="p-8 md:p-10">
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    When I receive a long audio message, I want to read a gist of it so that I can
                    quickly understand the context.
                  </p>
                </div>
              </div>

              {/* Job 2 */}
              <div
                className="flex flex-1 flex-col gap-8 rounded-[1.5rem]"
                style={{
                  padding: "32px",
                  backgroundColor: "rgb(250, 250, 250)",
                  border: "1px solid rgb(230, 230, 230)",
                }}
              >
                <img
                  src="/images/user_job_2.png"
                  alt="Search scenario"
                  width={320}
                  height={568}
                  className="h-auto max-h-full w-auto max-w-full rounded-[0.75rem]"
                />
                <div className="p-8 md:p-10">
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    I want to search for keywords within voice notes to quickly find what I need in
                    a chat history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - User Job 1 */}
        <section className="py-20 md:py-28">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="mb-6 text-[2rem] font-bold md:text-[2.5rem]">User job 1</h2>
              <p
                className="text-lg leading-relaxed text-gray-600 italic md:text-xl"
                style={{ fontSize: "20px" }}
              >
                &ldquo;When I receive a long audio message, I want to read a gist of it so that I
                can quickly understand the context&rdquo;
              </p>
              <p
                className="mb-8 text-lg leading-relaxed text-gray-600"
                style={{ fontSize: "20px" }}
              >
                I figured that WhatsApp could use an AI model, which I&apos;m calling Meta AI, to
                summarize voice notes. I knew the first version wouldn&apos;t be perfect, given how
                AI is still evolving.
              </p>

              <p
                className="mb-20 text-lg leading-relaxed text-gray-600"
                style={{ fontSize: "20px" }}
              >
                So, here&apos;s my final solution, designed to tackle the challenges of
                understanding voice notes in context.
              </p>
            </div>

            {/* Feature Showcase */}
            <div
              className="mb-24 flex flex-col gap-4 rounded-[1.5rem]"
              style={{ backgroundColor: "#073318", padding: "48px" }}
            >
              <div className="text-center" style={{ marginBottom: "48px" }}>
                <h3 className="body-large" style={{ fontSize: "36px" }}>
                  <span style={{ color: "#ffffff" }}>Read quick summaries</span>
                  <span
                    className="block text-[1.75rem] md:text-[2.25rem]"
                    style={{ color: "#00db4b" }}
                  >
                    of your voice notes
                  </span>
                </h3>
              </div>

              {/* Final screens placeholder */}
              <div className="overflow-hidden p-6">
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                  <div
                    className="flex items-center justify-center"
                    style={{ flex: "1 1 0", maxWidth: "100%" }}
                  >
                    <img
                      src="/images/uj1_scr_1.png"
                      alt="WhatsApp AI summary - Screen 1"
                      width={300}
                      height={650}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        transform: "scale(1)",
                      }}
                    />
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{ flex: "1 1 0", maxWidth: "100%" }}
                  >
                    <img
                      src="/images/uj2_scr_2.png"
                      alt="WhatsApp AI summary - Screen 2"
                      width={300}
                      height={650}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        transform: "scale(1)",
                      }}
                    />
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{ flex: "1 1 0", maxWidth: "100%" }}
                  >
                    <img
                      src="/images/uj3_scr_3.png"
                      alt="WhatsApp AI summary - Screen 3"
                      width={300}
                      height={650}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        transform: "scale(1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://www.youtube.com/embed/WrmuKrA2ha4?autoplay=1&mute=1&playsinline=1&vq=hd1080"
                  title="WhatsApp Voice Notes Feature Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full rounded-[1.5rem]"
                  style={{ border: "none" }}
                />
              </div>
            </div>

            {/* Iterations */}
            <div className="space-y-20">
              <p className="text-lg leading-relaxed text-gray-600" style={{ marginBottom: "48px" }}>
                Now, let me take you through the different iterations I went through before landing
                on this final version.
              </p>

              {/* Iteration 1 */}
              <div>
                <h4 className="mb-10 text-2xl font-bold" style={{ marginBottom: "48px" }}>
                  Iteration 1 - Using a bottom sheet
                </h4>
                <div className="flex flex-col items-start gap-10">
                  <div className="p-8">
                    <div className="overflow-hidden p-6">
                      <div
                        className="mb-24 flex flex-col gap-4 rounded-[1.5rem]"
                        style={{ backgroundColor: "#e2fed7", padding: "48px" }}
                      >
                        <div className="text-center">
                          <h3 className="body-large" style={{ fontSize: "36px" }}>
                            <span style={{ color: "#1c1c1c", letterSpacing: "0" }}>
                              Bottom sheet
                            </span>
                            <span
                              className="block text-[1.75rem] md:text-[2.25rem]"
                              style={{ color: "#00db4b" }}
                            >
                              to show summary of voice notes
                            </span>
                          </h3>
                        </div>

                        {/* Final screens placeholder */}
                        <div className="overflow-hidden p-6">
                          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <div
                              className="flex items-center justify-center"
                              style={{ flex: "1 1 0", maxWidth: "100%" }}
                            >
                              <img
                                src="/images/uj1_itr1_scr1.png"
                                alt="WhatsApp AI summary - Screen 1"
                                width={300}
                                height={650}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxWidth: "100%",
                                  objectFit: "contain",
                                  transform: "scale(0.8)",
                                }}
                              />
                            </div>
                            <div
                              className="flex items-center justify-center"
                              style={{ flex: "1 1 0", maxWidth: "100%" }}
                            >
                              <img
                                src="/images/uj1_itr1_scr2.png"
                                alt="WhatsApp AI summary - Screen 2"
                                width={300}
                                height={650}
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxWidth: "100%",
                                  objectFit: "contain",
                                  transform: "scale(0.8)",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="leading-relaxed text-gray-600" style={{ marginBottom: "48px" }}>
                      This iteration disrupted the chat flow. Displaying the AI summary in a bottom
                      sheet would interrupt the ongoing conversation, leading to a poor user
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Iteration 1.5 */}
              <div style={{ marginBottom: "48px" }}>
                <p className="mb-4 leading-relaxed text-gray-900">
                  <strong className="text-lg">Iteration 1.5 - transcript or summary?</strong>
                </p>
                <p className="leading-relaxed text-gray-700">
                  This iteration refines the copy. To save time, I opted for summarizing audio
                  instead of transcribing it, as full transcriptions are not practical for long
                  messages.
                </p>
              </div>

              {/* Iteration 2 */}
              <div>
                <h4 className="text-2xl font-bold" style={{ marginBottom: "48px" }}>
                  Iteration 2 - Expanding the voice notes UI element
                </h4>
                <div className="flex flex-col gap-10">
                  <div
                    className="rounded-[2.5rem]"
                    style={{ backgroundColor: "#e2fed7", padding: "48px" }}
                  >
                    <div className="text-center">
                      <h3 className="body-large" style={{ fontSize: "36px" }}>
                        <span style={{ color: "#1c1c1c", letterSpacing: "0" }}>Bottom sheet</span>
                        <span
                          className="block text-[1.75rem] md:text-[2.25rem]"
                          style={{ color: "#00db4b" }}
                        >
                          to show summary of voice notes
                        </span>
                      </h3>
                    </div>
                    <div className="overflow-hidden p-6">
                      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                        <div
                          className="flex items-center justify-center"
                          style={{ flex: "1 1 0", maxWidth: "100%" }}
                        >
                          <img
                            src="/images/uj1_itr2_scr1.png"
                            alt="WhatsApp AI summary - Screen 1"
                            width={300}
                            height={650}
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              objectFit: "contain",
                              transform: "scale(0.75)",
                            }}
                          />
                        </div>
                        <div
                          className="flex items-center justify-center"
                          style={{ flex: "1 1 0", maxWidth: "100%" }}
                        >
                          <img
                            src="/images/uj1_itr2_scr2.png"
                            alt="WhatsApp AI summary - Screen 2"
                            width={300}
                            height={650}
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "100%",
                              objectFit: "contain",
                              transform: "scale(0.75)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
                      The problem with this iteration was that users wouldn&apos;t know what the AI
                      summary button (the sparkle button) does. There&apos;s no clear indication of
                      what to expect when they tap it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Common Issues */}
              <div className="flex flex-col gap-10">
                <p
                  className="mb-6 text-lg font-semibold text-gray-900"
                  style={{ fontSize: "20px" }}
                >
                  Some common issues with the previous iterations (1 and 2):
                </p>
                <div className="flex flex-col gap-10 space-y-6 text-gray-700">
                  <div className="flex flex-col gap-10">
                    <p className="mb-3 font-semibold text-gray-900" style={{ fontSize: "20px" }}>
                      1. The AI summary button which the user taps on to see the summary:
                    </p>
                    <ul className="ml-6 flex flex-col gap-4" style={{ fontSize: "20px" }}>
                      <li>
                        • <strong>Contextual placement:</strong> The AI summary button was misplaced
                        outside the voice note UI, which felt counterintuitive since the summary
                        remains within the chat context.
                      </li>
                      <li>
                        • <strong>Confusion with forward button:</strong> The AI summary
                        button&apos;s position, typically used for forwarding in text messages,
                        could confuse users.
                      </li>
                    </ul>
                  </div>
                  <img
                    src="/images/iteration2_poster1.jpg"
                    alt="Iterations 2 poster"
                    className="rounded-[1.5rem]"
                  />
                  <p style={{ fontSize: "20px" }}>
                    <strong className="text-gray-900" style={{ fontSize: "20px" }}>
                      2. Lack of loading feedback:
                    </strong>{" "}
                    Users aren&apos;t told how long it takes to generate the summary, which could
                    lead to uncertainty and frustration.
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    <strong className="text-gray-900">3. Uncertainty about accuracy:</strong> The
                    evolving AI technology might produce imperfect results. Users may assume
                    complete accuracy due to the lack of information on its reliability and
                    limitations.
                  </p>
                  <img
                    src="/images/iteration2_poster2.jpg"
                    alt="Iterations 2 poster"
                    className="rounded-[1.5rem]"
                  />
                  <p style={{ fontSize: "20px" }}>
                    <strong className="text-gray-900">4. Unclear purpose:</strong> The lack of
                    information about the generated text&apos;s nature can confuse users, as they
                    may be unsure if it&apos;s a translation, transcript, or summary.
                  </p>
                  <img
                    src="/images/iteration2_poster3.jpg"
                    alt="Iterations 2 poster"
                    className="rounded-[1.5rem]"
                  />
                  <p style={{ fontSize: "20px" }}>
                    After taking all these issues into account, the third iteration was developed,
                    which eventually became the final solution presented in the first prototype.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Job 2 - Search */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h2
                className="mb-6 text-[2rem] font-bold md:text-[2.5rem]"
                style={{ marginBottom: "48px" }}
              >
                User job 2 :
              </h2>
              <p
                className="text-lg leading-relaxed text-gray-600 italic md:text-xl"
                style={{ marginBottom: "48px" }}
              >
                &ldquo;I want to search for keywords within voice notes to quickly find what I need
                in a chat history&rdquo;
              </p>
            </div>

            <p
              className="mb-20 text-lg leading-relaxed text-gray-600"
              style={{ marginBottom: "48px" }}
            >
              Taking all these issues into account, I developed the third iteration, which
              ultimately became the final solution showcased in the first prototype.
            </p>

            {/* Redesigning Search Flow */}
            <div className="mb-20">
              <div
                className="rounded-[2.5rem]"
                style={{ backgroundColor: "#fef5ea", padding: "48px", marginBottom: "48px" }}
              >
                <div className="text-center">
                  <h3 className="body-large" style={{ fontSize: "36px" }}>
                    <span
                      className="block text-[1.75rem] md:text-[2.25rem]"
                      style={{ color: "#00db4b" }}
                    >
                      Redesigning the search flow
                    </span>
                  </h3>
                </div>
                <div className="overflow-hidden p-6">
                  <div
                    className="relative flex w-full items-center justify-center overflow-hidden"
                    style={{ minHeight: "400px" }}
                  >
                    <div
                      className="flex"
                      style={{
                        animation: `scroll-ticker ${searchImages.length * 5}s linear infinite`,
                        width: `${searchImages.length * 200}%`,
                      }}
                    >
                      {/* Duplicate images for seamless loop */}
                      {[...searchImages, ...searchImages].map((imageData, index) => {
                        const imageIndex = index % searchImages.length;
                        const isSecondDescription = imageData.description.includes("Starts typing");
                        const isThirdDescription =
                          imageData.description.includes("Coninues typing");

                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-4"
                            style={{
                              width: "500px",
                              flexShrink: 0,
                              padding: "0 12px",
                            }}
                          >
                            <span
                              className="text-center text-sm font-medium text-gray-700"
                              style={{ fontSize: "16px" }}
                            >
                              {isSecondDescription ? (
                                <>
                                  Starts typing &apos;
                                  <span>A</span>
                                  <span style={{ opacity: 0.3 }}>pple</span>&apos;
                                </>
                              ) : isThirdDescription ? (
                                <>
                                  Coninues typing &apos;
                                  <span>App</span>
                                  <span style={{ opacity: 0.3 }}>le</span>&apos;
                                </>
                              ) : (
                                imageData.description
                              )}
                            </span>
                            <img
                              src={imageData.src}
                              alt={`WhatsApp AI summary - Screen ${imageIndex + 1}`}
                              width={300}
                              height={650}
                              style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "100%",
                                objectFit: "contain",
                                transform: "scale(0.85)",
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="w-full max-w-4xl"
                  style={{ aspectRatio: "16/9", marginBottom: "48px" }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/a_jS0rgBODA?autoplay=1&mute=1&playsinline=1&vq=hd1080"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full rounded-[1.5rem]"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-600" style={{ marginBottom: "48px" }}>
                This iteration automatically shows you the summary and highlights the part that
                matches your search. So, no more scrolling through everything!
              </p>
            </div>

            {/* Initial Iteration Issues */}
            <div>
              <h3 className="mb-10 text-2xl font-bold">Initial iteration of the search flow</h3>

              <div className="rounded-[2rem] border-2 border-gray-200 bg-white p-8 shadow-lg md:p-10">
                <p className="mb-8 font-medium text-gray-700">
                  Now, let&apos;s break down the issues with this user flow.
                </p>
                <ul className="space-y-6 text-gray-700">
                  <li>
                    • <strong className="text-gray-900">Search results prioritization:</strong> On
                    the search results screen, the audio summary takes priority over the actual
                    audio files, which means the voice notes themselves aren&apos;t showing up in
                    the results.
                  </li>
                  <li>
                    • <strong className="text-gray-900">Visual clarity:</strong> It&apos;s visually
                    difficult for users to tell that these are audio summaries linked to voice notes
                    from different chats.
                  </li>
                </ul>
                <p className="mt-8 font-medium text-gray-700">
                  The final solution was created by considering all these loopholes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Constraints Section */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 md:mb-20">
              <h2 className="mb-8 text-[2.25rem] leading-[1.2] font-bold text-balance md:text-[3rem]">
                Tech constraints that may affect the UX
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
                The summaries can be generated either locally on your device or in the cloud,
                depending on how it&apos;s set up.
              </p>
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              {/* Local Processing */}
              <div className="rounded-[2rem] border-2 border-gray-200 bg-white p-8 shadow-lg md:p-10">
                <h3 className="mb-8 text-center text-xl font-bold md:text-2xl">
                  Processing locally on device
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-green-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        />
                      </svg>
                      Advantages
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Privacy",
                          desc: "Users might feel more secure knowing their data isn&apos;t being sent to external servers.",
                        },
                        {
                          title: "Immediate Feedback",
                          desc: "Faster response times since there&apos;s no need to wait for server processing.",
                        },
                        {
                          title: "Offline Capability",
                          desc: "Users can access the feature even without an active internet connection.",
                        },
                      ].map((item, i) => (
                        <div key={i}>
                          <p className="mb-1 font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-red-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        />
                      </svg>
                      Disadvantages
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Resource Intensive",
                          desc: "Requires significant computational power and storage, which might not be available on all devices.",
                        },
                        {
                          title: "Updates and Maintenance",
                          desc: "Updating algorithms or adding new languages might be more challenging, requiring app updates.",
                        },
                      ].map((item, i) => (
                        <div key={i}>
                          <p className="mb-1 font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud Processing */}
              <div className="rounded-[2rem] border-2 border-gray-200 bg-white p-8 shadow-lg md:p-10">
                <h3 className="mb-8 text-center text-xl font-bold md:text-2xl">
                  Processing on the server side
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-green-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        />
                      </svg>
                      Advantages
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Performance",
                          desc: "Offloading processing to powerful servers can handle complex tasks more efficiently.",
                        },
                        {
                          title: "Scalability",
                          desc: "Easier to scale and update translation and summarization models without app updates.",
                        },
                        {
                          title: "Reusability",
                          desc: "The system can be built as a plugin that can be used across many products within the organization.",
                        },
                        {
                          title: "Consistency",
                          desc: "Ensures a consistent experience across devices by removing hardware processing limitations.",
                        },
                      ].map((item, i) => (
                        <div key={i}>
                          <p className="mb-1 font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-red-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        />
                      </svg>
                      Disadvantages
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Privacy Concerns",
                          desc: "Users might be concerned about their voice notes being sent to and processed on external servers.",
                        },
                        {
                          title: "Latency",
                          desc: "Cloud processing may cause delays, especially with slow or unstable network connections.",
                        },
                        {
                          title: "Data Usage",
                          desc: "Users need a stable internet connection, and it could use up data bandwidth.",
                        },
                      ].map((item, i) => (
                        <div key={i}>
                          <p className="mb-1 font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Approach */}
            <div className="rounded-[2.5rem] bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] p-10 shadow-xl md:p-12">
              <p className="mb-6 text-lg leading-relaxed text-gray-900 md:text-xl">
                After analyzing these two approaches, I decided to combine them into a{" "}
                <strong>hybrid approach:</strong>
              </p>
              <p className="mb-6 leading-relaxed text-gray-700">
                Performing the initial processing locally to minimize data transfer, and more
                complex tasks or updates are handled on the server. For instance:
              </p>
              <ol className="space-y-4 text-gray-900">
                <li className="flex gap-4">
                  <span className="text-xl font-bold">1.</span>
                  <div>
                    <strong>Initial transcription locally:</strong> Convert voice to text on the
                    device.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-xl font-bold">2.</span>
                  <div>
                    <strong>Translation and summarization on server:</strong> Send the transcribed
                    text to the server for translation and summarization.
                  </div>
                </li>
              </ol>
              <p className="mt-6 leading-relaxed text-gray-700">
                This approach balances privacy with performance and allows for flexibility in
                managing updates.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-16 text-[2.25rem] leading-[1.2] font-bold md:text-[3rem]">
              Challenges
            </h2>
            <ol className="space-y-8">
              <li className="flex gap-4 text-lg leading-relaxed text-gray-600">
                <strong className="text-xl text-gray-900">1.</strong>
                <span>
                  Making sure the feature works well for users who speak multiple languages or
                  dialects, or who mix languages (even in informal or imperfect ways) in their audio
                  recordings.
                </span>
              </li>
              <li className="flex gap-4 text-lg leading-relaxed text-gray-600">
                <strong className="text-xl text-gray-900">2.</strong>
                <span>
                  Preserving the emotional tone and urgency in voice messages during transcription,
                  especially for messages that convey excitement or urgency to make sure the
                  intended mood and context come through clearly.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Thanks Section */}
        <section className="bg-gradient-to-br from-[#dcf8c6] to-[#c5e8b0] py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-10 text-[2.75rem] font-bold md:text-[4rem]">
              Thanks for sticking around!
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-gray-700 md:text-xl">
              Thank you for taking the time to check out my case study! If you found it interesting,
              feel free to check out my article where I dive deeper into everything.
            </p>
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover: inline-block transform rounded-full bg-[#25d366] px-10 py-5 text-lg font-bold text-white shadow-xl transition-colors transition-transform hover:scale-105 hover:bg-[#128c7e]"
            >
              Read the full case study on Medium
            </a>
          </div>
        </section>
      </div>{" "}
      {/* Close main flex container */}
    </main>
  );
}
