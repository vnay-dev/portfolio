import { Container } from "@/components/shared/composite";

export function Statement() {
  return (
    <section className="w-full">
      <Container>
        <div className="py-40 sm:py-48 md:py-72">
          <h2 className="statement-headline">
            I work across <span className="editorial-italic">design & code</span> to turn
            <br />
            intent into reliable, production-ready systems
          </h2>
        </div>
      </Container>
    </section>
  );
}
