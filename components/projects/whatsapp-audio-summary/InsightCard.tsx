import Image from "next/image";

interface InsightCardProps {
  icon: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function InsightCard({ icon, title, description, isLast = false }: InsightCardProps) {
  return (
    <div className="flex w-full flex-row overflow-hidden rounded-lg max-[480px]:flex-col">
      <div className="p-4 sm:p-6" style={{ backgroundColor: "#e6ffda" }}>
        <div
          className="flex h-52 w-52 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border max-[480px]:h-40 max-[480px]:w-full"
          style={{ backgroundColor: "#e6ffda", borderColor: "#1c1e21", borderWidth: "1.32px" }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-cover"
              style={isLast ? { objectPosition: "0% center" } : {}}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-1 flex-col justify-center px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
        style={{ backgroundColor: "#e6ffda" }}
      >
        <h3
          className="mb-3 !text-2xl font-medium"
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            color: "#1c1e21",
          }}
        >
          {title}
        </h3>
        <p className="body-large" style={{ color: "#1c1e21" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
