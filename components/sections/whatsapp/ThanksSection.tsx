const ThanksSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32" style={{ paddingBottom: "clamp(3rem, 10vw, 7.5rem)" }}>
      <div className="mx-auto w-full max-w-3xl text-left">
        <h2
          className="editorial-headline mb-6 font-bold italic sm:mb-8 md:mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Thanks for sticking around!
        </h2>
        <br />
        <p
          className="mb-8 leading-relaxed text-gray-700 sm:mb-10 md:mb-12"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          Thank you for taking the time to check out my case study! If you found it interesting,
          feel free to check out my article where I dive deeper into everything.
        </p>
        <br />
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform px-6 py-3 font-bold sm:px-8 sm:py-4 md:px-10 md:py-5"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          Read the full case study on Medium
        </a>
      </div>
    </section>
  );
};

export default ThanksSection;
