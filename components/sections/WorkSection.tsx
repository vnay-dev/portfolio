export function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A revolutionary design system"
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Mobile-first user experience"
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Brand identity and strategy"
    },
    {
      id: 4,
      title: "Project Delta",
      description: "E-commerce platform redesign"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gabarito font-bold text-white text-center mb-8 sm:mb-12 md:mb-16">
          Curated Projects
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800 aspect-[16/9]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-4">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-gabarito font-bold text-white mb-2 sm:mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
