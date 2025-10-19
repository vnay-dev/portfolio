import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gabarito font-bold text-white text-center mb-8 sm:mb-12 md:mb-16">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-gabarito font-bold">
                VK
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                Hello! I'm Vinay Krishnan, a passionate designer and developer with a knack for creating engaging digital experiences. 
                My journey began five years ago, bringing other designers' visions to life through code. 
                Now, I focus on designing experiences that truly need to be brought to life, blending aesthetics with functionality.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                Outside of design and code, I enjoy hiking, photography, and playing guitar. 
                These activities fuel my creativity and provide a fresh perspective on problem-solving.
              </p>
            </div>

            {/* Professional Experience Timeline */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-gabarito font-bold text-white mb-8 sm:mb-12">
                Professional Experience
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {/* Timeline Item 1 */}
                <div className="relative pl-8 sm:pl-12 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-gabarito font-bold text-blue-400">
                      Senior UX Designer
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Company X • 2022 - Present
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Led design initiatives for key products, improving user engagement by 20% and streamlining the design process across multiple teams.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-8 sm:pl-12 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-gabarito font-bold text-blue-400">
                      Product Designer
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Company Y • 2019 - 2022
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Designed and shipped features for a SaaS platform, collaborating with cross-functional teams to deliver user-centered solutions.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-8 sm:pl-12 border-l-2 border-blue-500">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-gabarito font-bold text-blue-400">
                      Junior Developer
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Company Z • 2017 - 2019
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      Developed front-end components and assisted in back-end integration for various client projects, building a strong foundation in web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
