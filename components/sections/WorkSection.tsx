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
    <section id="work" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col gap-12" style={{ padding: '136px 64px' }}>
        <span className="text-3xl w-full sm:text-4xl md:text-5xl lg:text-6xl editorial-italic font-bold text-gray-900 text-center sm:mb-12 md:mb-16">
          Curated Projects
        </span>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 flex flex-col gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer p-4 sm:p-6 md:p-8">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gray-800" style={{ height: '80vh' }}>
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
