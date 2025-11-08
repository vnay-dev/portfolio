const ThanksSection = () => {
  return (
    <section className="py-24 md:py-32" style={{ paddingBottom: "120px" }}>
      <div className="mx-auto max-w-3xl text-left">
        <h2
          className="editorial-headline mb-10 text-[2.75rem] font-bold italic md:text-[4rem]"
          style={{ fontSize: "48px" }}
        >
          Thanks for sticking around!
        </h2>
        <br />
        <p
          className="mb-12 text-lg leading-relaxed text-gray-700 md:text-xl"
          style={{ fontSize: "20px" }}
        >
          Thank you for taking the time to check out my case study! If you found it interesting,
          feel free to check out my article where I dive deeper into everything.
        </p>
        <br />
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transform px-10 py-5 text-lg font-bold"
          style={{ fontSize: "20px" }}
        >
          Read the full case study on Medium
        </a>
      </div>
    </section>
  );
};

export default ThanksSection;
