import { insightsData } from "@/constants/whatsappCaseStudy";

const InsightsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <h2
          className="mb-4 leading-[1.2] font-bold sm:mb-6 md:mb-8"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.625rem)" }}
        >
          Insights from user interviews
        </h2>
        <br />
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
          {insightsData.map((insight) => (
            <div
              key={insight.title}
              className="flex flex-col gap-4 rounded-[1.5rem] border-2 border-gray-200 bg-white sm:flex-row sm:gap-6"
              style={{ padding: "clamp(1rem, 3vw, 1.5rem)" }}
            >
              <div className="flex-shrink-0 mx-auto sm:mx-0" style={{ width: "clamp(120px, 20vw, 216px)", height: "clamp(120px, 20vw, 216px)" }}>
                <img
                  src={insight.icon}
                  alt={insight.title}
                  width={216}
                  height={216}
                  className="h-full w-full rounded-[0.75rem] object-cover"
                  style={{ border: "2px solid white" }}
                />
              </div>
              <div className="flex flex-col justify-start gap-3 sm:gap-4">
                <p className="mb-2 font-bold sm:mb-4" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}>
                  {insight.title}
                </p>
                <p className="leading-relaxed text-gray-600" style={{ fontSize: "clamp(0.875rem, 2vw, 1.5rem)" }}>
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
