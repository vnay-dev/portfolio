"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [glowPosition, setGlowPosition] = useState(0);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize glow position for active link
  useEffect(() => {
    const timer = setTimeout(() => {
      updateGlowPosition(activeLink);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeLink]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About Me", href: "/about", newTab: true },
    { name: "Resume", href: "#resume" },
  ];

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  const updateGlowPosition = (linkName: string) => {
    const index = navItems.findIndex(item => item.name === linkName);
    if (index !== -1 && navRefs.current[index]) {
      const element = navRefs.current[index];
      const rect = element.getBoundingClientRect();
      const containerRect = element.parentElement?.getBoundingClientRect();
      if (containerRect) {
        const relativeX = rect.left - containerRect.left + rect.width / 2;
        setGlowPosition(relativeX);
      }
    }
  };

  const handleMouseEnter = (linkName: string) => {
    setHoveredLink(linkName);
    updateGlowPosition(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    updateGlowPosition(activeLink);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      {/* Glow container with overflow hidden */}
      <div className="relative mx-4 mt-4 max-w-6xl overflow-hidden" style={{ paddingBottom: '30px' }}>
        {/* Glassmorphism container - curved bottom only */}
        <div
          className="relative rounded-b-2xl transition-all duration-300 overflow-hidden w-full"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(30px) saturate(200%) brightness(110%)",
          WebkitBackdropFilter: "blur(30px) saturate(200%) brightness(110%)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          minWidth: "320px",
        }}
      >
        {/* Clean inner glow effect */}
        <div
          className="absolute inset-0 rounded-b-2xl"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 255, 255, 0.05) 50%,
                rgba(255, 255, 255, 0.08) 100%
              )
            `,
          }}
        />
        

        {/* Content */}
        <div className="relative" style={{ padding: '14px 28px' }}>
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center w-full justify-between relative">
              {/* Sliding glow effect */}
              <motion.div
                className="absolute -bottom-7"
                animate={{
                  x: glowPosition - 50, // Center the glow (50px is half width)
                  opacity: 1
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30
                }}
                style={{
                  width: '100px',
                  height: '35px',
                  background: "radial-gradient(ellipse, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.15) 60%, transparent 100%)",
                  filter: "blur(15px)",
                  borderRadius: "50%",
                  transformOrigin: "top center",
                }}
              />
              
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  ref={(el) => { navRefs.current[index] = el; }}
                  href={item.href}
                  target={item.newTab ? "_blank" : undefined}
                  rel={item.newTab ? "noopener noreferrer" : undefined}
                  onClick={() => handleLinkClick(item.name)}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`relative font-hanken transition-all duration-200 group ${
                    activeLink === item.name 
                      ? "text-white opacity-100" 
                      : "text-white/60 hover:text-white/80 opacity-60 hover:opacity-80"
                  }`}
                  style={{ padding: '5px 10px' }}
                >
                  {item.name}
                  
                  {/* Hover underline effect for non-active links */}
                  {activeLink !== item.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-white/60 rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  animate={{ d: isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
                  transition={{ duration: 0.2 }}
                />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-4 pt-4 border-t border-white/20 overflow-hidden"
              >
                <div className="flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target={item.newTab ? "_blank" : undefined}
                      rel={item.newTab ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        handleLinkClick(item.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`font-hanken transition-colors duration-200 py-2 ${
                        activeLink === item.name 
                          ? "text-white" 
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
