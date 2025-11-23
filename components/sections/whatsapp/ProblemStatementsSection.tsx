const ProblemStatementsSection = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 sm:gap-10 md:gap-12">
        <p
          className="max-w-4xl leading-relaxed font-normal"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
        >
          Ever been stuck in a situation where someone important sends you a bunch of voice notes
          but you just can&apos;t listen or reply right away?
        </p>

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
          className="mx-auto max-w-3xl leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          Imagine you&apos;re in an important meeting and your parents send a bunch of voice notes.
          You can&apos;t check them and not knowing what they&apos;re about keeps you distracted.
        </p>

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

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2
              className="leading-[1.2] font-bold text-balance"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
            >
              Scrolling through a long list of voice notes..
            </h2>
            <p
              className="leading-relaxed text-gray-600"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              ...means playing each one separately. If they&apos;re all over the place or mixed with
              other messages, it&apos;s tough to make sense of them, especially when the
              conversation&apos;s old.
            </p>
          </div>

          <div className="flex min-h-[200px] items-center justify-center bg-transparent p-4 sm:min-h-[300px] sm:p-8 md:min-h-[375px] md:justify-end md:p-16">
            <img
              src="https://framerusercontent.com/images/w7zAWHfUipslwAkHjCYnTZHUeU.png"
              alt="Scrolling animation"
              width={375}
              height={375}
              className="w-full"
              style={{ maxWidth: "min(375px, 100%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementsSection;
