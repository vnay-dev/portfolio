"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["dream", "design", "build"];

// Define darker colors for each gradient
const wordColors = {
  dream: "#3cd657",    // Darker green from dream gradient
  design: "#358df5",   // Darker blue from design gradient
  build: "#f8a341"     // Darker orange from build gradient
};

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 5000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="container-padding relative flex h-screen items-center justify-center overflow-hidden w-full" style={{ backgroundColor: '#ffffff' }}>
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(40px, 5vw, 80px) clamp(40px, 5vw, 80px)',
          backgroundPosition: '0 0, 0 0',
          zIndex: 1
        }}
      />
      
      {/* Giant Ellipse with Radial Gradient - Responsive */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0) 100%)',
          width: '100vw',
          height: '100vh',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          zIndex: 2
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 flex w-full items-center justify-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="display-large text-center leading-none select-none"
          style={{ color: '#000000' }}
        >
          <motion.span 
            className="inline-block"
            style={{ 
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: wordColors[words[index] as keyof typeof wordColors]
            }}
            animate={{
              color: wordColors[words[index] as keyof typeof wordColors]
            }}
            transition={{
              duration: 0.8,
              ease: "linear",
              delay: 1.0
            }}
          >
            i
          </motion.span>
          <span> </span>
          <span
            className="relative inline-block overflow-hidden text-left align-bottom"
            style={{ minWidth: "5.5ch", height: "1.1em" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                exit={{ filter: "blur(10px)", opacity: 0 }}
                transition={{
                  duration: 2.0,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className={`absolute top-0 left-0 inline-block bg-clip-text text-transparent ${
                  words[index] === "dream"
                    ? "animate-gradient-dream"
                    : words[index] === "design"
                    ? "animate-gradient-design"
                    : "animate-gradient-build"
                }`}
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              >
                {words[index]}.
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
