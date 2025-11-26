import { Container } from "@/components/shared/composite";

export function Hero() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col gap-8 pt-16 sm:gap-12 sm:pt-24 md:pt-32">
          <img
            src="/images/profile_pic.jpg"
            alt="Hero"
            className="h-[120px] w-[120px] rounded-lg object-cover sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
          />
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="display-medium">Designer and engineer</h1>
            <p className="headline-small">
              Self taught product designer who can visualize & build software
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
