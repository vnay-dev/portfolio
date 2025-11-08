import { insightsData } from "@/constants/whatsappCaseStudy";

const InsightsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-[2.25rem] leading-[1.2] font-bold md:mb-20 md:text-[3rem]"
          style={{ fontSize: "42px" }}
        >
          Insights from user interviews
        </h2>
        <br />
        <div className="flex flex-col gap-12">
          {insightsData.map((insight) => (
            <div
              key={insight.title}
              className="flex gap-6 rounded-[1.5rem] border-2 border-gray-200 bg-white"
              style={{ padding: "24px" }}
            >
              <div className="flex-shrink-0" style={{ width: "216px", height: "216px" }}>
                <img
                  src={insight.icon}
                  alt={insight.title}
                  width={216}
                  height={216}
                  className="h-full w-full rounded-[0.75rem] object-cover"
                  style={{ width: "216px", height: "216px", border: "2px solid white" }}
                />
              </div>
              <div className="flex flex-col justify-start gap-4">
                <p className="mb-4 font-bold" style={{ fontSize: "32px" }}>
                  {insight.title}
                </p>
                <p className="leading-relaxed text-gray-600" style={{ fontSize: "24px" }}>
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
