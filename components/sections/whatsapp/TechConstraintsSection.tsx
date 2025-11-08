const TechConstraintsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <img
        src="/images/tech_constraints_poster.png"
        alt="Tech constraints"
        className="rounded-[2.5rem]"
      />
      <br />
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="mb-16 md:mb-20">
          <p
            className="text-lg leading-relaxed text-gray-600 md:text-xl"
            style={{ fontSize: "20px" }}
          >
            The summaries can be generated either locally on your device or in the cloud, depending
            on how it&apos;s set up.
          </p>
          <br />
        </div>

        <div className="mb-12 flex flex-col gap-12">
          <div className="mb-12">
            <h3
              className="mb-8 text-left text-xl font-bold md:text-2xl"
              style={{ fontSize: "36px" }}
            >
              Processing locally on device
            </h3>
            <br />
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
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Privacy
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Users might feel more secure knowing their data isn&apos;t being sent to
                        external servers.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L14 8M12 2L10 8" />
                    </svg>
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Immediate Feedback
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Faster response times since there&apos;s no need to wait for server
                        processing.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Offline Capability
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
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
                    className="mb-12 flex items-center gap-2 text-lg font-bold text-red-600"
                    style={{ fontSize: "24px" }}
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
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Resource Intensive
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Requires significant computational power and storage, which might not be
                        available on all devices.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Updates and Maintenance
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
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
                className="mb-8 text-left text-xl font-bold md:text-2xl"
                style={{ fontSize: "36px" }}
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
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Performance
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Offloading processing to powerful servers can handle complex tasks more
                        efficiently.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Scalability
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Easier to scale and update translation and summarization models without app
                        updates.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Reusability
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        The system can be built as a plugin that can be used across many products
                        within the organization.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Consistency
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
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
                    className="mb-12 flex items-center gap-2 text-lg font-bold text-red-600"
                    style={{ fontSize: "24px" }}
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
                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Privacy Concerns
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Users might be concerned about their voice notes being sent to and processed
                        on external servers.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Latency
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
                      >
                        Cloud processing may cause delays, especially with slow or unstable network
                        connections.
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[1.5rem] bg-gray-50" style={{ padding: "32px" }}>
                    <svg
                      className="absolute top-4 right-4 h-16 w-16 text-gray-300"
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
                    <div className="flex flex-col gap-6" style={{ paddingRight: "80px" }}>
                      <h5
                        className="text-xl font-semibold text-gray-900"
                        style={{ fontSize: "24px" }}
                      >
                        Data Usage
                      </h5>
                      <p
                        className="text-base leading-relaxed text-gray-600"
                        style={{ fontSize: "20px" }}
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

        <div className="p-10 md:p-12">
          <p
            className="mb-6 text-lg leading-relaxed text-gray-900 md:text-xl"
            style={{ fontSize: "20px" }}
          >
            After analyzing these two approaches, I decided to combine them into a{" "}
            <strong>hybrid approach:</strong>
          </p>
          <p className="mb-6 leading-relaxed text-gray-700" style={{ fontSize: "20px" }}>
            Performing the initial processing locally to minimize data transfer, and more complex
            tasks or updates are handled on the server. For instance:
          </p>
          <br />
          <ol className="flex flex-col gap-6 text-gray-900">
            <li className="flex gap-4">
              <span className="text-xl font-bold" style={{ fontSize: "20px" }}>
                1.
              </span>
              <div style={{ fontSize: "20px" }}>
                <strong style={{ fontSize: "20px" }}>Initial transcription locally:</strong> Convert
                voice to text on the device.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-xl font-bold" style={{ fontSize: "20px" }}>
                2.
              </span>
              <div style={{ fontSize: "20px" }}>
                <strong style={{ fontSize: "20px" }}>
                  Translation and summarization on server:
                </strong>{" "}
                Send the transcribed text to the server for translation and summarization.
              </div>
            </li>
          </ol>
          <p className="mt-6 leading-relaxed text-gray-700" style={{ fontSize: "20px" }}>
            This approach balances privacy with performance and allows for flexibility in managing
            updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechConstraintsSection;
