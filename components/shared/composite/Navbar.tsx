"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

interface NavbarProps {
  variant?: "light" | "dark";
}

export function Navbar({ variant = "dark" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "#work" },
    { label: "About Me", href: "/about" },
    { label: "Resume", href: "/resume" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === "#work") {
      e.preventDefault();
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const textColor = variant === "light" ? "text-black" : "text-white";
  const borderColor = variant === "light" ? "border-gray-200" : "border-white/20";
  const mobileMenuBg = variant === "light" ? "bg-white" : "bg-white";
  const mobileMenuText = variant === "light" ? "text-gray-900" : "text-gray-600";

  return (
    <nav className={`w-full border-b ${borderColor} bg-transparent backdrop-blur-sm`}>
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex h-18 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className={`title-medium sm:headline-small font-semibold ${textColor}`}>
            Vinay Krishnan
          </Link>

          {/* Desktop Navigation Items */}
          <ul className="hidden gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`body-medium relative ${textColor} transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.4px] after:w-0 ${variant === "light" ? "after:bg-black" : "after:bg-white"} after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className={`${textColor} md:hidden`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <div className={`fixed top-0 left-0 z-50 h-screen w-full ${mobileMenuBg} md:hidden`}>
            {/* Close Button at Top */}
            <div
              className={`flex h-14 items-center justify-end border-b ${variant === "light" ? "border-gray-200" : "border-gray-200"} px-4`}
            >
              <button
                onClick={closeMenu}
                className={`${variant === "light" ? "text-gray-900" : "text-gray-900"}`}
                aria-label="Close menu"
              >
                <MdClose size={24} />
              </button>
            </div>
            {/* Centered Menu Items */}
            <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(item.href, e);
                        closeMenu();
                      }}
                      className={`headline-small ${mobileMenuText} transition-colors ${variant === "light" ? "hover:text-gray-900" : "hover:text-gray-900"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
