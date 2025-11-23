const ChallengesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-4xl">
        <h2
          className="mb-8 leading-[1.2] font-bold sm:mb-12 md:mb-16"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
        >
          Challenges
        </h2>
        <br />
        <ol className="flex flex-col gap-4 sm:gap-6">
          <li
            className="flex gap-3 leading-relaxed text-gray-600 sm:gap-4"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            <strong className="text-gray-900" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>1.</strong>
            <span>
              Making sure the feature works well for users who speak multiple languages or dialects,
              or who mix languages (even in informal or imperfect ways) in their audio recordings.
            </span>
          </li>
          <li
            className="flex gap-3 leading-relaxed text-gray-600 sm:gap-4"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            <strong className="text-gray-900" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>2.</strong>
            <span>
              Preserving the emotional tone and urgency in voice messages during transcription,
              especially for messages that convey excitement or urgency to make sure the intended
              mood and context come through clearly.
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ChallengesSection;
