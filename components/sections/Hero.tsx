"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const words = ["dream", "design", "build"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-padding bg-background relative flex min-h-screen items-center justify-start overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-accent/10 absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      </div>

      {/* Main content */}
      <div className="flex w-full items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="display-large text-center leading-none"
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
                className="from-accent to-accent/70 absolute top-0 left-0 inline-block bg-gradient-to-r bg-clip-text text-transparent"
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
