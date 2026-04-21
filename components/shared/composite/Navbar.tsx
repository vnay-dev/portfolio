"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import { RESUME_URL, type NavbarFeatureFlags } from "@/app/constants";

interface NavbarProps {
  variant?: "light" | "dark";
  /** From {@link getNavbarFeatureFlags} in a Server Component — required so SSR and hydration agree. */
  featureFlags: NavbarFeatureFlags;
}

export function Navbar({ variant = "dark", featureFlags }: NavbarProps) {
  const { hideHamburger, showAboutMe } = featureFlags;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (!hideHamburger && isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, hideHamburger]);

  type NavItem = { label: string; href: string; external?: boolean };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "About Me", href: "/about" },
    { label: "Resume", href: RESUME_URL, external: true },
  ].filter((item) => {
    if (item.label === "About Me") return showAboutMe;
    return true;
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    const isWorkAnchor = href === "#work" || href.endsWith("/#work");

    if (isWorkAnchor && pathname === "/") {
      e.preventDefault();
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const textColor = variant === "light" ? "text-black" : "text-white";
  const borderColor = variant === "light" ? "border-gray-200" : "border-white/20";
  const mobileMenuBg = variant === "light" ? "bg-white" : "bg-white";
  const mobileMenuText = variant === "light" ? "text-gray-900" : "text-gray-600";

  const desktopNavLinkClass = `body-medium relative ${textColor} transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.4px] after:w-0 ${variant === "light" ? "after:bg-black" : "after:bg-white"} after:transition-all after:duration-300 hover:after:w-full`;

  const renderNavLink = (item: NavItem) => {
    if (item.external) {
      return (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={desktopNavLinkClass}>
          {item.label}
        </a>
      );
    }
    return (
      <Link href={item.href} onClick={(e) => handleNavClick(item.href, e)} className={desktopNavLinkClass}>
        {item.label}
      </Link>
    );
  };

  return (
    <nav className={`w-full border-b ${borderColor} bg-transparent backdrop-blur-sm`}>
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex h-18 items-center justify-between">
          <Link href="/" className={`title-medium sm:headline-small font-semibold ${textColor}`}>
            Vinay Krishnan
          </Link>

          <ul
            className={`gap-4 sm:gap-6 lg:gap-8 ${hideHamburger ? "flex flex-wrap items-center justify-end" : "hidden md:flex"}`}
          >
            {navItems.map((item) => (
              <li key={item.href}>{renderNavLink(item)}</li>
            ))}
          </ul>

          {!hideHamburger && (
            <button
              onClick={toggleMenu}
              className={`${textColor} md:hidden`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          )}
        </div>

        {!hideHamburger && isMenuOpen && (
          <div className={`fixed top-0 left-0 z-50 h-screen w-full ${mobileMenuBg} md:hidden`}>
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
            <div className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`headline-small ${mobileMenuText} transition-colors hover:text-gray-900`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(item.href, e);
                          closeMenu();
                        }}
                        className={`headline-small ${mobileMenuText} transition-colors hover:text-gray-900`}
                      >
                        {item.label}
                      </Link>
                    )}
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
