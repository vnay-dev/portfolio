interface CarouselItemProps {
  question: string;
  objective: string;
}

export function CarouselItem({ question, objective }: CarouselItemProps) {
  return (
    <div
      className="flex w-full flex-col gap-8 rounded-3xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 14px 0 -8px #25d366",
      }}
    >
      <p
        className="flex min-h-[4.5rem] items-center justify-center text-center text-base font-medium sm:min-h-[5rem] sm:text-lg md:min-h-[5.5rem] md:text-xl"
        style={{ color: "#1c1e21" }}
      >
        {question}
      </p>

      <div className="relative flex items-center justify-center">
        <div className="h-[0.5px] w-3/4" style={{ backgroundColor: "#1c1e21" }}></div>
        <div
          className="absolute rounded-md border px-3 py-1 text-[0.625rem] font-medium sm:text-xs"
          style={{
            backgroundColor: "#fff",
            borderColor: "#1c1e21",
            color: "#1c1e21",
          }}
        >
          Objective
        </div>
      </div>

      <p className="text-center text-xs sm:text-sm md:text-base" style={{ color: "#1c1e21" }}>
        {objective}
      </p>
    </div>
  );
}
