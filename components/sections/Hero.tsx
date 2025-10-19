"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["dream", "design", "build"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 5000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="container-padding relative flex min-h-screen items-center justify-start overflow-hidden w-full" style={{ backgroundColor: '#ffffff' }}>
      {/* Main content */}
      <div className="relative z-10 flex w-full items-center justify-start max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="display-large text-center leading-none select-none"
          style={{ color: '#000000' }}
        >
          <span className="inline-block">I</span>
          <span> </span>
          <span
            className="relative inline-block overflow-hidden text-left align-bottom"
            style={{ minWidth: "8.5ch", height: "1.1em" }}
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
