"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "The Aurelius Standard", href: "/standard" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent ${
        isScrolled
          ? "bg-imperial-black/95 backdrop-blur-md shadow-lg border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading text-xl tracking-[0.2em] font-medium text-marble-white uppercase group-hover:text-brushed-platinum transition-colors">
            Aurelius
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest uppercase text-marble-white/80 hover:text-marble-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/assessment"
            className="px-6 py-2 border border-white/20 hover:border-white/60 text-sm tracking-widest uppercase text-marble-white transition-all hover:bg-white/5"
          >
            Request an Assessment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-marble-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-imperial-black z-40 transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 items-center w-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl tracking-widest uppercase text-marble-white/90 hover:text-marble-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/assessment"
            className="mt-8 px-8 py-3 w-full max-w-sm text-center border border-white/30 text-sm tracking-widest uppercase text-marble-white bg-white/5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request an Assessment
          </Link>
        </div>
      </div>
    </header>
  );
}
