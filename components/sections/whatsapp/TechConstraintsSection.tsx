const TechConstraintsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28">
      <img
        src="/images/tech_constraints_poster.png"
        alt="Tech constraints"
        className="w-full rounded-[2.5rem]"
      />
      <br />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <p
            className="leading-relaxed text-gray-600"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            The summaries can be generated either locally on your device or in the cloud, depending
            on how it&apos;s set up.
          </p>
          <br />
        </div>

        <div className="mb-8 flex flex-col gap-8 sm:mb-10 sm:gap-10 md:mb-12 md:gap-12">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3
              className="mb-6 text-left font-bold sm:mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              Processing locally on device
            </h3>
            <br />
            <div className="flex flex-col gap-8 space-y-6 sm:gap-10 sm:space-y-8 md:gap-12">
              <div className="flex flex-col gap-4 sm:gap-6">
                <h4
                  className="mb-8 flex items-center gap-2 font-bold text-green-600 sm:mb-10 md:mb-12"
                  style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  Advantages
                </h4>
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Privacy
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Users might feel more secure knowing their data isn&apos;t being sent to
                        external servers.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L14 8M12 2L10 8" />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Immediate Feedback
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Faster response times since there&apos;s no need to wait for server
                        processing.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Offline Capability
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Users can access the feature even without an active Internet connection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h4
                    className="mb-8 flex items-center gap-2 font-bold text-red-600 sm:mb-10 md:mb-12"
                    style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      />
                    </svg>
                    Disadvantages
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <rect x="4" y="7" width="14" height="10" rx="1" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v6" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 10l2-4m0 4l-2-4"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Resource Intensive
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Requires significant computational power and storage, which might not be
                        available on all devices.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Updates and Maintenance
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Updating algorithms or adding new languages might be more challenging,
                        requiring app updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h3
                className="mb-6 text-left font-bold sm:mb-8"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Processing on the server side
              </h3>
            </div>
            <div className="flex flex-col gap-12 space-y-8">
              <div className="flex flex-col gap-6">
                <h4
                  className="mb-12 flex items-center gap-2 text-lg font-bold text-green-600"
                  style={{ fontSize: "24px" }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  Advantages
                </h4>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Performance
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Offloading processing to powerful servers can handle complex tasks more
                        efficiently.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Scalability
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Easier to scale and update translation and summarization models without app
                        updates.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Reusability
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        The system can be built as a plugin that can be used across many products
                        within the organization.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2v4m0 12v4M2 12h4m12 0h4m-7.07-7.07l2.83 2.83m-11.32 0l2.83-2.83m0 11.32l2.83 2.83m11.32-11.32l2.83-2.83"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Consistency
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Ensures a consistent experience across devices by removing hardware
                        processing limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h4
                    className="mb-8 flex items-center gap-2 font-bold text-red-600 sm:mb-10 md:mb-12"
                    style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      />
                    </svg>
                    Disadvantages
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Privacy Concerns
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Users might be concerned about their voice notes being sent to and processed
                        on external servers.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Latency
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Cloud processing may cause delays, especially with slow or unstable network
                        connections.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "clamp(1.5rem, 4vw, 2rem)" }}>
                    <svg
                      className="absolute top-4 right-4 h-12 w-12 text-gray-300 sm:h-16 sm:w-16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    <div className="flex flex-col gap-4 sm:gap-6" style={{ paddingRight: "clamp(3rem, 8vw, 5rem)" }}>
                      <h5
                        className="font-semibold text-gray-900"
                        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                      >
                        Data Usage
                      </h5>
                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                      >
                        Users need a stable internet connection, and it could use up data bandwidth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
          <p
            className="mb-4 leading-relaxed text-gray-900 sm:mb-6"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            After analyzing these two approaches, I decided to combine them into a{" "}
            <strong>hybrid approach:</strong>
          </p>
          <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            Performing the initial processing locally to minimize data transfer, and more complex
            tasks or updates are handled on the server. For instance:
          </p>
          <br />
          <ol className="flex flex-col gap-4 text-gray-900 sm:gap-6">
            <li className="flex gap-3 sm:gap-4">
              <span className="font-bold" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                1.
              </span>
              <div style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                <strong style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>Initial transcription locally:</strong> Convert
                voice to text on the device.
              </div>
            </li>
            <li className="flex gap-3 sm:gap-4">
              <span className="font-bold" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                2.
              </span>
              <div style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                <strong style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                  Translation and summarization on server:
                </strong>{" "}
                Send the transcribed text to the server for translation and summarization.
              </div>
            </li>
          </ol>
          <p className="mt-4 leading-relaxed text-gray-700 sm:mt-6" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
            This approach balances privacy with performance and allows for flexibility in managing
            updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechConstraintsSection;
