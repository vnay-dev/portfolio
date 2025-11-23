const ProblemDefinitionSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 sm:gap-10 md:gap-12">
        <div>
          <h2
            className="mb-4 leading-[1.2] font-bold sm:mb-6 md:mb-8"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
          >
            Defining the problem
          </h2>
          <br />
          <p
            className="mb-8 max-w-3xl leading-relaxed text-gray-600 sm:mb-12 md:mb-16 lg:mb-20"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            After analyzing the research and understanding the key insights, I was able to validate
            my initial hypothesis and define the problem statement(s) as user jobs:
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8">
          <div
            className="flex flex-1 flex-col gap-6 rounded-[1.5rem] sm:gap-8"
            style={{
              padding: "clamp(1.5rem, 4vw, 2rem)",
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
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <p
                className="leading-relaxed text-gray-700"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
              >
                When I receive a long audio message, I want to read a gist of it so that I can
                quickly understand the context.
              </p>
            </div>
          </div>

          <div
            className="flex flex-1 flex-col gap-6 rounded-[1.5rem] sm:gap-8"
            style={{
              padding: "clamp(1.5rem, 4vw, 2rem)",
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
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <p
                className="leading-relaxed text-gray-700"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
              >
                I want to search for keywords within voice notes to quickly find what I need in a
                chat history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDefinitionSection;
