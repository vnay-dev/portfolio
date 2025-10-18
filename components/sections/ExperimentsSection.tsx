export function ExperimentsSection() {
  const experiments = [
    {
      id: 1,
      title: "Color Palette Generator",
      description: "A fun tool to generate beautiful color palettes",
      tech: "React, Canvas API",
      status: "Live"
    },
    {
      id: 2,
      title: "Particle Animation",
      description: "Interactive particle system with mouse tracking",
      tech: "Three.js, WebGL",
      status: "Live"
    },
    {
      id: 3,
      title: "Typography Playground",
      description: "Experiment with different font combinations",
      tech: "CSS, JavaScript",
      status: "Live"
    },
    {
      id: 4,
      title: "Mini Game Collection",
      description: "Small games built for fun and learning",
      tech: "HTML5, Canvas",
      status: "Live"
    },
    {
      id: 5,
      title: "CSS Art Gallery",
      description: "Pure CSS illustrations and animations",
      tech: "CSS, HTML",
      status: "Live"
    },
    {
      id: 6,
      title: "Interactive Timeline",
      description: "Smooth scrolling timeline component",
      tech: "React, Framer Motion",
      status: "Live"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gabarito font-bold text-white text-center mb-8 sm:mb-12 md:mb-16">
          Fun Experiments
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          Small weekend projects and games I designed and built for fun. Each experiment explores different aspects of design and development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {experiments.map((experiment) => (
            <div key={experiment.id} className="group cursor-pointer">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/70 h-full">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-400 text-xs sm:text-sm font-medium rounded-full">
                    {experiment.status}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-gabarito font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-200 transition-colors duration-200">
                  {experiment.title}
                </h3>
                
                <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {experiment.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {experiment.tech}
                  </span>
                  
                  <button className="text-white hover:text-gray-300 transition-colors duration-200">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
