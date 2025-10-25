"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Projects() {
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
          style={{ color: '#1c1c1c' }}
        >
          Few of my best works
        </motion.h2>

        {/* Project Cards - Full Width */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12" style={{ padding: '36px'}}>
          {/* WhatsApp Case Study - First Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer w-full"
          >
            <div className="w-full bg-gray-100 mb-6 overflow-hidden shadow-sm" style={{ borderRadius: '24px', aspectRatio: '2048/1234' }}>
              <Image
                src="/images/whatsapp case study poster.png"
                alt="WhatsApp Case Study Poster"
                width={2048}
                height={1234}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
