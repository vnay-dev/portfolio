"use client";

import { useState } from "react";

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryItems = [
    { id: 1, title: "UI Design 1" },
    { id: 2, title: "UI Design 2" },
    { id: 3, title: "UI Design 3" },
    { id: 4, title: "UI Design 4" },
    { id: 5, title: "UI Design 5" },
    { id: 6, title: "UI Design 6" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gabarito font-bold text-white text-center mb-8 sm:mb-12 md:mb-16">
          Visual Design Gallery
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-gabarito font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200">Visual Design Work</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-colors duration-200"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-colors duration-200"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-gabarito font-bold rounded-full hover:bg-gray-100 transition-colors duration-200 text-center text-sm sm:text-base"
          >
            View on Behance
          </a>
          
          <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-gabarito font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
