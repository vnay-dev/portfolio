"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroBackground } from "./HeroBackground";

const words = ["dream", "design", "build"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-padding relative flex min-h-screen items-center justify-start overflow-hidden" style={{ backgroundColor: '#141414' }}>
      {/* Water Tank Background */}
      <HeroBackground currentWord={words[index]} />

      {/* Main content */}
      <div className="relative z-10 flex w-full items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="display-large text-center leading-none"
          style={{ color: '#ffffff' }}
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
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 1.35,
                  ease: [0.65, 0, 0.35, 1],
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
