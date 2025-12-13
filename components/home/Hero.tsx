import Image from "next/image";
import { Container } from "@/components/shared/composite";

export function Hero() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 pt-16 sm:gap-12 sm:pt-24">
          <Image
            src="/images/profile_pic.jpg"
            alt="Hero"
            width={180}
            height={180}
            quality={100}
            className="h-[120px] w-[120px] rounded-lg object-cover sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="display-medium">Designer and engineer</h1>
              <p className="headline-small">
                Self taught product designer who can visualize & build software
              </p>
            </div>
            <div className="w-fit rounded-lg bg-gray-100 px-3 py-2 sm:px-4 sm:py-2.5 md:px-4 md:py-2.5">
              <p className="body-medium">Design Systems @ Air India, Digital & Tech</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
