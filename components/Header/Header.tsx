"use client";

import { useState, useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  {
    name: "About",
    href: "/about",
    sub: [
      { name: "Our Story", href: "/about/story" },
      { name: "Our Team", href: "/about/team" },
      { name: "The Aurelius Standard", href: "/standard" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    sub: [
      { name: "Appearance Management", href: "/services/appearance" },
      { name: "Asset Preservation", href: "/services/preservation" },
      { name: "Documentation", href: "/services/documentation" },
    ],
  },
  {
    name: "Industries",
    href: "/industries",
    sub: [
      { name: "Commercial Aviation", href: "/industries/commercial" },
      { name: "Private & Charter", href: "/industries/private" },
      { name: "Cargo & Freight", href: "/industries/cargo" },
    ],
  },
  {
    name: "Insights",
    href: "/insights",
    sub: [
      { name: "Articles", href: "/insights/articles" },
      { name: "Case Studies", href: "/insights/case-studies" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    sub: [
      { name: "Get in Touch", href: "/contact" },
      { name: "Experience Our Stewardship", href: "/assessment" },
    ],
  },
];

function NavItem({ link }: { link: typeof NAV_LINKS[number] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top-level link */}
      <Link href={link.href} className="text-sm tracking-widest uppercase text-marble-white/80 hover:text-marble-white transition-colors duration-200 block py-2">
        {link.name}
      </Link>

      {/* Dropdown */}
      {link.sub.length > 0 && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          style={{ minWidth: "200px" }}
        >
          <div className="bg-imperial-black/45 backdrop-blur-md border border-white/8 shadow-2xl rounded-lg overflow-hidden">
            <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-imperial-black/95 border-l border-t border-white/8" />

            <ul className="py-3">
              {link.sub.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-[0.7rem] tracking-[0.25em] uppercase text-marble-white/60 hover:text-marble-white hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);
  const [isHeroPast, setIsHeroPast] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600;
    if (latest > threshold && !isHeroPast) {
      setIsHeroPast(true);
    } else if (latest <= threshold && isHeroPast) {
      setIsHeroPast(false);
    }
  });

  // Collapse when past hero AND not hovered
  const isCollapsed = isHeroPast && !isHovered;

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 py-4 transition-all duration-[1200ms] flex justify-center pointer-events-none overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.2,1)] flex items-center border pointer-events-auto ${isCollapsed
            ? "w-[80px] h-[80px] rounded-xl justify-center bg-white/5 hover:bg-white/10 border-white/10 shadow-2xl overflow-hidden translate-x-[calc(50vw-64px)] md:translate-x-[calc(50vw-88px)]"
            : "w-[calc(100vw-1.5rem)] md:w-[calc(100vw-3rem)] h-[72px] rounded-xl justify-between px-6 md:px-8 bg-imperial-black/30 backdrop-blur-xl border-white/5 shadow-lg translate-x-0"
            }`}
        >
          {/* Logo container */}
          <div
            className={`flex items-center justify-center shrink-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.2,1)]
    ${isCollapsed ? "w-[120px] h-[80px]" : "w-[200px] h-[72px]"}
  `}
          >
            <Link
              href="/"
              className="relative w-full h-full"
            >
              <Image
                src="/logo-demo1.png"
                alt="Aurelius Aviation"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center gap-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.2,1)] ${isCollapsed ? "opacity-0 w-0 pointer-events-none overflow-hidden" : "opacity-100"
              }`}
          >
            {NAV_LINKS.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div
            className={`hidden lg:flex items-center gap-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.2,1)] ${isCollapsed ? "opacity-0 w-0 pointer-events-none overflow-hidden" : "opacity-100"
              }`}
          >
            <Link
              href="/assessment"
              className="px-6 py-2.5 border border-white/20 hover:border-white/60 text-xs tracking-widest uppercase text-marble-white transition-all hover:bg-white/5 whitespace-nowrap"
            >
              Experience Our Stewardship
            </Link>
          </div>

          {/* Mobile Menu Toggle (completely hidden when collapsed) */}
          <button
            className={`lg:hidden text-marble-white p-2 transition-all duration-500 ${isCollapsed ? "opacity-0 w-0 pointer-events-none overflow-hidden" : "opacity-100"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-imperial-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-2 items-start w-full">
          {NAV_LINKS.map((link, idx) => (
            <div key={link.name} className="w-full border-b border-white/8">
              <button
                className="w-full flex items-center justify-between py-4 text-lg tracking-widest uppercase text-marble-white/90 hover:text-marble-white transition-colors"
                onClick={() => setMobileOpenIdx(mobileOpenIdx === idx ? null : idx)}
              >
                <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </button>

              {/* Mobile sub-links */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${mobileOpenIdx === idx ? "max-h-[300px] opacity-100 mb-3" : "max-h-0 opacity-0"
                  }`}
              >
                {link.sub.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block pl-4 py-2.5 text-sm tracking-[0.2em] uppercase text-marble-white/50 hover:text-marble-white transition-colors"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileOpenIdx(null); }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/assessment"
            className="mt-8 px-8 py-3 w-full max-w-sm text-center border border-white/30 text-sm tracking-widest uppercase text-marble-white bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience Our Stewardship
          </Link>
        </div>
      </div>
    </>
  );
}
