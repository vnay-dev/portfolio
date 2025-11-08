const ProblemDefinitionSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div>
          <h2
            className="mb-8 text-[2.25rem] leading-[1.2] font-bold md:text-[3rem]"
            style={{ fontSize: "42px" }}
          >
            Defining the problem
          </h2>
          <br />
          <p
            className="mb-16 max-w-3xl text-lg leading-relaxed text-gray-600 md:mb-20 md:text-xl"
            style={{ fontSize: "20px" }}
          >
            After analyzing the research and understanding the key insights, I was able to validate
            my initial hypothesis and define the problem statement(s) as user jobs:
          </p>
        </div>
        <div className="flex justify-between gap-8">
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
              <p
                className="text-lg leading-relaxed text-gray-700 md:text-xl"
                style={{ fontSize: "24px" }}
              >
                When I receive a long audio message, I want to read a gist of it so that I can
                quickly understand the context.
              </p>
            </div>
          </div>

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
              <p
                className="text-lg leading-relaxed text-gray-700 md:text-xl"
                style={{ fontSize: "24px" }}
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
