"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [glowPosition, setGlowPosition] = useState(0);
  const [tabWidth, setTabWidth] = useState(100);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement | null>(null);


  // Initialize glow position for active link
  useEffect(() => {
    const timer = setTimeout(() => {
      updateGlowPosition(activeLink);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeLink]);

  // Initialize position on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      updateGlowPosition("Home");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About Me", href: "#about" },
    { name: "Resume", href: "#resume" },
  ];

  const handleLinkClick = (linkName: string, href: string) => {
    setActiveLink(linkName);
    updateGlowPosition(linkName);
    
    // Handle smooth scrolling for internal links
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const updateGlowPosition = (linkName: string) => {
    const index = navItems.findIndex(item => item.name === linkName);
    if (index !== -1 && navRefs.current[index] && navContainerRef.current) {
      const element = navRefs.current[index];
      const rect = element.getBoundingClientRect();
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const relativeX = rect.left - containerRect.left + rect.width / 2;
      setGlowPosition(relativeX);
      // Set tab width to match the text width plus padding
      setTabWidth(rect.width + 40); // 40px total padding (20px each side)
    }
  };

  const handleMouseEnter = (linkName: string) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };



  return (
    <motion.nav
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 2.0, ease: [0.4, 0.0, 0.2, 1] }}
      className="fixed left-0 right-0 z-50 flex justify-center"
      style={{ 
        top: '0px'
      }}
    >
      {/* Mobile Hamburger - compact, top-left (always available on mobile) */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 2.0, ease: [0.4, 0.0, 0.2, 1] }}
        className="md:hidden fixed top-4 left-4 z-[1001]"
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="transition-all duration-200"
          style={{
            padding: '8px',
            borderRadius: '14px',
            backgroundColor: isMobileMenuOpen ? '#e2e2e2' : '#fcfcfc',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            boxShadow: isMobileMenuOpen ? 'inset 0 2px 4px rgba(0,0,0,0.15)' : 'inset 0 1px 2px rgba(0,0,0,0.06)'
          }}
        >
          <motion.svg
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-700"
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </motion.div>

        {/* Mobile overlay menu - full screen with noise texture */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.45, ease: [0.4, 0.0, 0.2, 1] }}
            className="md:hidden fixed inset-0 z-[999]"
              style={{
                backgroundColor: "rgba(252,252,252,0.98)",
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.6'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
              height: '100vh'
              }}
            >
              <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 2.0, ease: [0.4, 0.0, 0.2, 1], delay: index * 0.1 + 0.2 }}
                    onClick={() => { handleLinkClick(item.name, item.href); setIsMobileMenuOpen(false); }}
                    className={`font-hanken text-xl transition-all duration-300 ${activeLink === item.name ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Mobile overlay menu - full screen drop from top */}
      {/* Overlay moved outside nav to avoid any clipping from nav styles */}

      {/* Glow container with overflow hidden (desktop only) */}
      {/* Desktop navbar container - hide on mobile to avoid stray block */}
      <div className="hidden md:block relative overflow-hidden" style={{ paddingBottom: '30px', width: '60%', margin: '0 auto', paddingTop: '12px', zIndex: 2 }}>
        {/* Simple container - fully rounded */}
        <div
          className="relative transition-all duration-300 overflow-hidden w-full"
        style={{
          backgroundColor: "#fcfcfc",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          borderRadius: "14px", // Outer radius - reduced further
          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.06)",
        }}
      >
        

        {/* Content */}
        <div className="relative" style={{ padding: '8px 28px', zIndex: 5 }}>
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <div ref={navContainerRef} className="hidden md:flex items-center w-full justify-between relative">
              {/* Sliding tab background */}
              <motion.div
                className="absolute border border-gray-200"
                style={{
                  width: `${tabWidth}px`,
                  height: '44px', // Match text padding (10px top + 10px bottom + text height)
                  borderRadius: "10px", // Inner radius = Outer radius (14px) - Gap (4px) = 10px
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.98) 0%, 
                      rgba(248, 250, 252, 0.92) 100%
                    )
                  `,
                  boxShadow: `
                    0 2px 4px rgba(0, 0, 0, 0.1),
                    0 1px 2px rgba(0, 0, 0, 0.06),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                  `,
                  zIndex: 1,
                  top: '0px',
                }}
                animate={{
                  x: glowPosition - (tabWidth / 2), // Center the tab dynamically
                  y: 0, // Align with text
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30
                }}
              />
              
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  ref={(el) => { navRefs.current[index] = el; }}
                  href={item.href}
                  onClick={() => handleLinkClick(item.name, item.href)}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  initial={{ filter: "blur(8px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: [0.4, 0.0, 0.2, 1] }}
                  className={`relative font-hanken transition-all duration-200 group z-10 ${
                    activeLink === item.name 
                      ? "text-gray-800 opacity-100" 
                      : hoveredLink === item.name
                        ? "text-gray-800 opacity-100"
                        : "text-gray-600 opacity-50"
                  }`}
                  style={{ padding: '10px 20px' }}
                >
                  <motion.span
                    animate={hoveredLink === item.name && activeLink !== item.name ? {
                      scale: 1.04,
                      textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(255,255,255,0.3)'
                    } : {
                      scale: 1,
                      textShadow: 'none'
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0.0, 0.2, 1]
                    }}
                    style={{
                      display: 'inline-block'
                    }}
                  >
                    {item.name}
                  </motion.span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Hamburger - compact, top-left */}
            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 2.0, ease: [0.4, 0.0, 0.2, 1] }}
              className="md:hidden fixed top-4 left-4 z-50"
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="transition-all duration-200"
                style={{
                  padding: '8px',
                  borderRadius: '14px',
                  backgroundColor: isMobileMenuOpen ? '#e2e2e2' : '#fcfcfc',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                  boxShadow: isMobileMenuOpen ? 'inset 0 2px 4px rgba(0,0,0,0.15)' : 'inset 0 1px 2px rgba(0,0,0,0.06)'
                }}
              >
                <motion.svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-700"
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </motion.svg>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu - rendered once at top-level above */}
        </div>
      </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
