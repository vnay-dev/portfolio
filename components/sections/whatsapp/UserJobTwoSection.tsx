import { initialIterationSearchImages, searchFlowImages } from "@/constants/whatsappCaseStudy";

const renderTicker = (images: typeof searchFlowImages) => (
  <div className="overflow-hidden p-6">
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ minHeight: "400px" }}
    >
      <div
        className="flex"
        style={{
          animation: `scroll-ticker ${images.length * 5}s linear infinite`,
          width: `${images.length * 200}%`,
        }}
      >
        {[...images, ...images].map((imageData, index) => {
          const imageIndex = index % images.length;
          const isSecondDescription = imageData.description.includes("Starts typing");
          const isThirdDescription = imageData.description.includes("Coninues typing");

          return (
            <div
              key={`${imageData.src}-${index}`}
              className="flex flex-col items-center justify-center gap-4"
              style={{
                width: "500px",
                flexShrink: 0,
                padding: "0 12px",
              }}
            >
              <span
                className="text-center text-sm font-medium text-gray-700"
                style={{ fontSize: "24px" }}
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
);

const UserJobTwoSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="mb-12">
          <h2 className="mb-6 text-[2rem] font-bold md:text-[2.5rem]" style={{ fontSize: "42px" }}>
            User job 2 :
          </h2>
          <br />
          <p
            className="editorial-headline text-lg leading-relaxed italic md:text-xl"
            style={{ fontSize: "22px" }}
          >
            &ldquo;I want to search for keywords within voice notes to quickly find what I need in a
            chat history&rdquo;
          </p>
        </div>

        <p className="mb-20 text-lg leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
          Taking all these issues into account, I developed the third iteration, which ultimately
          became the final solution showcased in the first prototype.
        </p>

        <div className="mb-20 flex flex-col gap-12">
          <div className="rounded-[2.5rem]" style={{ backgroundColor: "#fef5ea", padding: "48px" }}>
            <div className="text-center">
              <h3 className="body-large" style={{ fontSize: "32px" }}>
                <span
                  className="mt-2 block text-[1.75rem] md:text-[2.25rem]"
                  style={{ color: "#00db4b", fontSize: "32px" }}
                >
                  Redesigning the search flow
                </span>
              </h3>
            </div>
            {renderTicker(searchFlowImages)}
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl" style={{ aspectRatio: "16/9" }}>
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
          <div>
            <p className="text-lg leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
              This iteration automatically shows you the summary and highlights the part that
              matches your search. So, no more scrolling through everything!
            </p>
            <br />
            <p className="text-lg leading-relaxed text-gray-600" style={{ fontSize: "20px" }}>
              Let me walk you through my thought process and how it all came together to lead to the
              final solution.
            </p>
          </div>
          <div className="rounded-[2.5rem]" style={{ backgroundColor: "#fef5ea", padding: "48px" }}>
            <div className="text-center">
              <h3 className="body-large" style={{ fontSize: "32px" }}>
                <span
                  className="block text-[1.75rem] md:text-[2.25rem]"
                  style={{ color: "#00db4b", fontSize: "32px" }}
                >
                  Initial iteration of the search flow
                </span>
              </h3>
            </div>
            {renderTicker(initialIterationSearchImages)}
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6">
            <p className="mb-8 font-medium text-gray-700" style={{ fontSize: "20px" }}>
              Now, let&apos;s break down the issues with this user flow.
            </p>
            <ul className="flex flex-col gap-6 text-gray-700" style={{ fontSize: "20px" }}>
              <li>
                •{" "}
                <strong className="text-gray-900" style={{ fontSize: "20px" }}>
                  Search results prioritization:
                </strong>{" "}
                On the search results screen, the audio summary takes priority over the actual audio
                files, which means the voice notes themselves aren&apos;t showing up in the results.
              </li>
              <li>
                •{" "}
                <strong className="text-gray-900" style={{ fontSize: "20px" }}>
                  Visual clarity:
                </strong>{" "}
                It&apos;s visually difficult for users to tell that these are audio summaries linked
                to voice notes from different chats.
              </li>
            </ul>
            <p className="mt-8 font-medium text-gray-700" style={{ fontSize: "20px" }}>
              The final solution was created by considering all these loopholes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJobTwoSection;
