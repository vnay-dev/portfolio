const UserJobOneSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="mb-12 flex flex-col gap-12">
          <div>
            <h2
              className="mb-6 text-[2rem] font-bold md:text-[2.5rem]"
              style={{ fontSize: "42px" }}
            >
              User job 1
            </h2>
            <br />
            <h4
              className="editorial-headline text-lg leading-relaxed italic md:text-xl"
              style={{ fontSize: "22px" }}
            >
              &ldquo;When I receive a long audio message, I want to read a gist of it so that I can
              quickly understand the context&rdquo;
            </h4>
          </div>
          <div>
            <p className="mb-8 text-lg leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
              I figured that WhatsApp could use an AI model, which I&apos;m calling Meta AI, to
              summarize voice notes. I knew the first version wouldn&apos;t be perfect, given how AI
              is still evolving.
            </p>
            <br />
            <p className="mb-20 text-lg leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
              So, here&apos;s my final solution, designed to tackle the challenges of understanding
              voice notes in context.
            </p>
          </div>
        </div>

        <div
          className="mb-24 flex flex-col gap-4 rounded-[1.5rem]"
          style={{ backgroundColor: "#073318", padding: "48px" }}
        >
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <h3 className="body-large" style={{ fontSize: "32px" }}>
              <span style={{ color: "#ffffff" }}>Read quick summaries</span>
              <span
                className="mt-2 block text-[1.75rem] md:text-[2.25rem]"
                style={{ color: "#00db4b", fontSize: "32px" }}
              >
                of your voice notes
              </span>
            </h3>
          </div>

          <div className="overflow-hidden p-6">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              {[
                {
                  src: "/images/uj1_scr_1.png",
                  alt: "WhatsApp AI summary - Screen 1",
                },
                {
                  src: "/images/uj2_scr_2.png",
                  alt: "WhatsApp AI summary - Screen 2",
                },
                {
                  src: "/images/uj3_scr_3.png",
                  alt: "WhatsApp AI summary - Screen 3",
                },
              ].map((image) => (
                <div
                  key={image.src}
                  className="flex items-center justify-center"
                  style={{ flex: "1 1 0", maxWidth: "100%" }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
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
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
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
        <p className="text-lg leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
          Now, let me take you through the different iterations I went through before landing on
          this final version.
        </p>

        <div className="flex flex-col gap-12">
          <div>
            <h4 className="mb-10 text-2xl font-bold" style={{ fontSize: "36px" }}>
              Iteration 1 - Using a bottom sheet
            </h4>
            <br />
            <div className="flex flex-col items-start gap-12">
              <div className="p-8">
                <div className="overflow-hidden p-6">
                  <div
                    className="mb-24 flex flex-col gap-4 rounded-[1.5rem]"
                    style={{ backgroundColor: "#e2fed7", padding: "48px" }}
                  >
                    <div className="text-center">
                      <h3 className="body-large" style={{ fontSize: "32px" }}>
                        <span style={{ color: "#1c1c1c", letterSpacing: "0" }}>Bottom sheet</span>
                        <span
                          className="mt-2 block text-[1.75rem] md:text-[2.25rem]"
                          style={{ color: "#00db4b" }}
                        >
                          to show summary of voice notes
                        </span>
                      </h3>
                    </div>

                    <div className="overflow-hidden p-6">
                      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                        {[
                          {
                            src: "/images/uj1_itr1_scr1.png",
                            alt: "WhatsApp AI summary - Screen 1",
                          },
                          {
                            src: "/images/uj1_itr1_scr2.png",
                            alt: "WhatsApp AI summary - Screen 2",
                          },
                        ].map((image) => (
                          <div
                            key={image.src}
                            className="flex items-center justify-center"
                            style={{ flex: "1 1 0", maxWidth: "100%" }}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
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
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
                  This iteration disrupted the chat flow. Displaying the AI summary in a bottom
                  sheet would interrupt the ongoing conversation, leading to a poor user experience.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 leading-relaxed text-gray-900" style={{ fontSize: "36px" }}>
              Iteration 1.5 - transcript or summary?
            </h4>
            <br />
            <p className="leading-relaxed text-gray-700" style={{ fontSize: "20px" }}>
              This iteration refines the copy. To save time, I opted for summarizing audio instead
              of transcribing it, as full transcriptions are not practical for long messages.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <h4 className="text-2xl font-bold" style={{ fontSize: "36px" }}>
              Iteration 2 - Expanding the voice notes UI element
            </h4>
            <div className="flex flex-col gap-12">
              <div
                className="rounded-[2.5rem]"
                style={{ backgroundColor: "#e2fed7", padding: "48px" }}
              >
                <div className="text-center">
                  <h3 className="body-large" style={{ fontSize: "32px" }}>
                    <span style={{ color: "#1c1c1c", letterSpacing: "0" }}>Bottom sheet</span>
                    <span
                      className="mt-2 block text-[1.75rem] md:text-[2.25rem]"
                      style={{ color: "#00db4b" }}
                    >
                      to show summary of voice notes
                    </span>
                  </h3>
                </div>
                <div className="overflow-hidden p-6">
                  <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    {[
                      {
                        src: "/images/uj1_itr2_scr1.png",
                        alt: "WhatsApp AI summary - Screen 1",
                      },
                      {
                        src: "/images/uj1_itr2_scr2.png",
                        alt: "WhatsApp AI summary - Screen 2",
                      },
                    ].map((image) => (
                      <div
                        key={image.src}
                        className="flex items-center justify-center"
                        style={{ flex: "1 1 0", maxWidth: "100%" }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
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
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <p className="leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
                  The problem with this iteration was that users wouldn&apos;t know what the AI
                  summary button (the sparkle button) does. There&apos;s no clear indication of what
                  to expect when they tap it.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="mb-6 text-lg font-semibold text-gray-900" style={{ fontSize: "24px" }}>
              Some common issues with the previous iterations (1 and 2):
            </p>
            <br />
            <div className="flex flex-col space-y-6 text-gray-700">
              <div className="flex flex-col">
                <strong className="mb-3 text-gray-900" style={{ fontSize: "20px" }}>
                  1. The AI summary button which the user taps on to see the summary:
                </strong>
                <br />
                <ul className="ml-6 flex flex-col gap-4" style={{ fontSize: "20px" }}>
                  <li>
                    • <strong>Contextual placement:</strong> The AI summary button was misplaced
                    outside the voice note UI, which felt counterintuitive since the summary remains
                    within the chat context.
                  </li>
                  <li>
                    • <strong>Confusion with forward button:</strong> The AI summary button&apos;s
                    position, typically used for forwarding in text messages, could confuse users.
                  </li>
                </ul>
              </div>
              <br />
              <img
                src="/images/iteration2_poster1.jpg"
                alt="Iterations 2 poster"
                className="rounded-[1.5rem]"
              />
              <br />
              <p style={{ fontSize: "20px" }}>
                <strong className="text-gray-900" style={{ fontSize: "20px" }}>
                  2. Lack of loading feedback:
                </strong>{" "}
                Users aren&apos;t told how long it takes to generate the summary, which could lead
                to uncertainty and frustration.
              </p>
              <br />
              <p style={{ fontSize: "20px" }}>
                <strong className="text-gray-900">3. Uncertainty about accuracy:</strong> The
                evolving AI technology might produce imperfect results. Users may assume complete
                accuracy due to the lack of information on its reliability and limitations.
              </p>
              <br />
              <img
                src="/images/iteration2_poster2.jpg"
                alt="Iterations 2 poster"
                className="rounded-[1.5rem]"
              />
              <br />
              <p style={{ fontSize: "20px" }}>
                <strong className="text-gray-900">4. Unclear purpose:</strong> The lack of
                information about the generated text&apos;s nature can confuse users, as they may be
                unsure if it&apos;s a translation, transcript, or summary.
              </p>
              <br />
              <img
                src="/images/iteration2_poster3.jpg"
                alt="Iterations 2 poster"
                className="rounded-[1.5rem]"
              />
              <br />
              <p style={{ fontSize: "20px" }}>
                After taking all these issues into account, the third iteration was developed, which
                eventually became the final solution presented in the first prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJobOneSection;
