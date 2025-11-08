const ChallengesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2
          className="mb-16 text-[2.25rem] leading-[1.2] font-bold md:text-[3rem]"
          style={{ fontSize: "42px" }}
        >
          Challenges
        </h2>
        <br />
        <ol className="flex flex-col gap-6">
          <li
            className="flex gap-4 text-lg leading-relaxed text-gray-600"
            style={{ fontSize: "20px" }}
          >
            <strong className="text-xl text-gray-900">1.</strong>
            <span>
              Making sure the feature works well for users who speak multiple languages or dialects,
              or who mix languages (even in informal or imperfect ways) in their audio recordings.
            </span>
          </li>
          <li
            className="flex gap-4 text-lg leading-relaxed text-gray-600"
            style={{ fontSize: "20px" }}
          >
            <strong className="text-xl text-gray-900">2.</strong>
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
