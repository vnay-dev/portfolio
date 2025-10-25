"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{ padding: '64px 0px' }}>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl editorial-italic text-center mb-12 sm:mb-16 md:mb-20"
          style={{ color: '#1c1c1c', paddingBottom: '36px' }}
        >
          Few of my best works
        </motion.h2>

        {/* Project Cards - Full Width */}
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{ padding: '36px'}}>
          {/* WhatsApp Case Study - First Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer w-full max-w-4xl mx-auto flex gap-8 items-start"
          >
            <div 
              className="bg-gray-100 overflow-hidden shadow-sm relative transition-shadow duration-300" 
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
              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl pointer-events-none"
                style={{
                  opacity: isHovered ? 0.75 : 0,
                  backgroundColor: '#000000',
                  transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <span className="text-white headline-small">
                  View case study
                </span>
              </div>
              </div>
              <div className="flex-1 px-2">
                <p className="leading-relaxed" style={{ color: '#1c1c1c', fontSize: '20px', marginBottom: '32px' }}>
                  Enhanced the WhatsApp voice notes experience through AI summaries and easy lookup.
                </p>
                <div className="inline-block rounded-full" style={{ padding: '8px 16px', border: '1.5px solid rgb(216, 216, 216)' }}>
                  <span className="text-md font-medium" style={{ color: '#666666' }}>
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
