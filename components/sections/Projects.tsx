"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full" style={{ backgroundColor: '#ffffff', padding: '64px 0' }}>
      <div style={{ margin: '0 auto', padding: '0 32px' }}>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="editorial-italic text-center"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: 'clamp(3rem, 5vw, 5rem)', color: '#1c1c1c' }}
        >
          Few of my best works
        </motion.h2>

        {/* Project Cards - Full Width */}
        <div style={{ width: '100%', margin: '0 auto' }}>
          {/* WhatsApp Case Study - First Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start"
          >
            <div 
              className="bg-gray-100 overflow-hidden shadow-sm relative transition-shadow duration-300 w-full md:w-auto" 
              style={{ borderRadius: '24px', aspectRatio: '2048/1234', width: '800px', maxWidth: '100%' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/images/whatsapp case study poster.png"
                alt="WhatsApp Case Study Poster"
                width={2048}
                height={1234}
                className="w-full h-full object-contain"
              />
              {/* Hover Overlay - Only visible on desktop with mouse (lg: 1024px+) */}
              <div 
                className="project-hover-overlay absolute inset-0 items-center justify-center rounded-2xl pointer-events-none"
                  style={{
                  opacity: isHovered ? 0.75 : 0,
                  backgroundColor: '#000000',
                  transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'none'
                }}
              >
                <span className="text-white headline-small">
                  View case study
                </span>
              </div>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <p className="leading-relaxed text-base sm:text-lg md:text-xl" style={{ color: '#1c1c1c', marginBottom: '24px' }}>
                  Enhanced the WhatsApp voice notes experience through AI summaries and easy lookup.
                </p>
                <div className="inline-block rounded-full" style={{ padding: '8px 16px', border: '1.5px solid rgb(216, 216, 216)' }}>
                  <span className="text-sm sm:text-md font-medium" style={{ color: '#666666' }}>
                    🚀 P.S Did WhatsApp just ship my idea?!
                  </span>
           </div>
              </div>
          </motion.div>
         </div>
       </div>
    </section>
  );
}
