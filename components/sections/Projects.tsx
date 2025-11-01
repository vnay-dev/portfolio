"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const handleCaseStudyClick = () => {
    window.open("/projects/case-study/whatsapp", "_blank");
  };

  return (
    <section
      className="relative flex w-full justify-center"
      style={{ backgroundColor: "#ffffff", padding: "64px 0" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1080px" }}>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="editorial-italic text-center"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            marginBottom: "clamp(3rem, 5vw, 5rem)",
            color: "#1c1c1c",
          }}
        >
          Few of my best works
        </motion.h2>

        {/* Project Cards - Full Width */}
        <div style={{ width: "100%", margin: "0 auto" }}>
          {/* WhatsApp Case Study - First Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="group mx-auto flex w-full cursor-pointer flex-col items-start gap-6 md:flex-row md:gap-8"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="relative w-full overflow-hidden bg-gray-100 shadow-sm transition-shadow duration-300 md:w-auto"
              style={{
                borderRadius: "24px",
                aspectRatio: "2048/1234",
                maxWidth: "100%",
                alignItems: "center",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleCaseStudyClick}
            >
              <Image
                src="/images/whatsapp_project_thumbnail.png"
                alt="WhatsApp Case Study Poster"
                width={2048}
                height={1234}
                className="h-full w-full object-contain"
              />
              {/* Hover Overlay - Only visible on desktop with mouse (lg: 1024px+) */}
              <div
                className="project-hover-overlay absolute inset-0 cursor-pointer items-center justify-center rounded-2xl"
                style={{
                  opacity: isHovered ? 0.75 : 0,
                  backgroundColor: "#000000",
                  transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "none",
                }}
              >
                <span className="headline-small text-white">View case study</span>
              </div>
            </div>
            <div className="w-full flex-1 text-left md:w-auto">
              <p
                className="text-base leading-relaxed sm:text-lg md:text-xl"
                style={{ color: "#1c1c1c", marginBottom: "24px", fontSize: "24px" }}
              >
                Enhanced the WhatsApp voice notes experience through AI summaries and easy lookup.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
