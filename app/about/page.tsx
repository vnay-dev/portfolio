"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about");

  const timeline = [
    {
      year: "2024",
      title: "Senior Product Designer",
      company: "Tech Company",
      description: "Leading design initiatives for core products and mentoring junior designers."
    },
    {
      year: "2022",
      title: "Product Designer",
      company: "Startup Inc",
      description: "Designed user experiences for mobile and web applications, working closely with engineering teams."
    },
    {
      year: "2020",
      title: "UI/UX Designer",
      company: "Design Agency",
      description: "Created visual designs and prototypes for various client projects across different industries."
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Web Studio",
      description: "Brought designers' visions to life through code, specializing in React and modern web technologies."
    }
  ];

  const hobbies = [
    { name: "Photography", description: "Capturing moments and exploring different perspectives" },
    { name: "Cooking", description: "Experimenting with new recipes and cuisines" },
    { name: "Hiking", description: "Exploring nature trails and finding inspiration outdoors" },
    { name: "Reading", description: "Design books, fiction, and everything in between" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <h1 className="text-5xl md:text-7xl font-gabarito font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I'm a designer who bridges the gap between beautiful ideas and functional reality. 
                With a background in both design and development, I understand the full spectrum 
                of bringing digital experiences to life.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not designing, you'll find me exploring new technologies, 
                capturing moments through photography, or experimenting in the kitchen. 
                I believe great design comes from understanding people, their needs, 
                and the technology that serves them.
              </p>
            </div>

            {/* Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-white font-gabarito font-bold text-lg">Your Photo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-8 mb-12">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "hobbies", label: "Hobbies" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-gabarito font-bold transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "about" && (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-gabarito font-bold mb-4">My Journey</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Starting as a frontend developer, I spent years bringing other designers' 
                      visions to life through code. This experience gave me a deep understanding 
                      of how design translates into functional user experiences.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Now, as a designer, I create experiences that are not only beautiful 
                      but also technically feasible and user-centered. I believe in the power 
                      of collaboration between design and development teams.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-gabarito font-bold mb-4">My Approach</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I approach every project with curiosity and empathy. Understanding the 
                      user's needs and the business goals is crucial to creating meaningful 
                      design solutions.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      I'm passionate about creating design systems that scale, prototyping 
                      interactions that feel natural, and always learning new tools and 
                      methodologies to improve my craft.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="font-gabarito font-bold text-white">{item.year}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-gabarito font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 mb-2">{item.company}</p>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "hobbies" && (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30"
                    >
                      <h4 className="text-xl font-gabarito font-bold text-white mb-3">
                        {hobby.name}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {hobby.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-gabarito font-bold mb-8"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            I'm always excited to collaborate on new projects and bring ideas to life.
          </motion.p>
          <motion.a
            href="mailto:hello@yourname.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-black font-gabarito font-bold rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}
