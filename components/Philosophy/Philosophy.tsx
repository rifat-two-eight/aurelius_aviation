'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  const tenets = [
    {
      roman: "I",
      primary: "Order",
      secondary: "Chaos",
      bg: "/philo1.jpg",
      description: "We reject the shifting trends of chaotic markets. We establish absolute order, structure, and predictability for long-term fleet asset preservation."
    },
    {
      roman: "II",
      primary: "Discipline",
      secondary: "Indulgence",
      bg: "/philo2.jpg",
      description: "We maintain strict compliance and rigorous engineering standards, refusing the shortcut of easy cost compromises."
    },
    {
      roman: "III",
      primary: "Excellence",
      secondary: "Mediocrity",
      bg: "/philo3.jpg",
      description: "We pursue perfection in parts curation, records management, and maintenance logs. Average is unacceptable."
    },
    {
      roman: "IV",
      primary: "Legacy",
      secondary: "Profit",
      bg: "/philo4.jpg",
      description: "We look past quarterly earnings. We curate and preserve aircraft that serve our clients for generations to come."
    },
    {
      roman: "V",
      primary: "Permanence",
      secondary: "Trends",
      bg: "/philo5.jpg",
      description: "We build structures designed to outlast temporary industry changes, locking in value for decades."
    },
    {
      roman: "VI",
      primary: "Stewardship",
      secondary: "Ownership",
      bg: "/philo6.jpg",
      description: "We do not merely own assets; we act as their historical caretakers, preserving them in pristine condition."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto cycle tenets every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tenets.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tenets.length]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden border-t border-white/5 bg-imperial-black">
      {/* Background Parallax Image */}
      <motion.div
        className="absolute inset-0 opacity-80 z-0 origin-center"
        style={{ y: bgY, scale: bgScale, willChange: "transform" }}
      >
        <Image
          src="/greece.jpg"
          alt="Philosophy Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Vignette overlay for premium contrast & seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-[#0a0a0c]/70 to-[#0a0a0c] z-10 pointer-events-none"></div>

      <div className="relative z-20 mx-auto flex max-w-[1400px] flex-col items-center px-8 py-32 md:py-40 w-full">

        {/* Header Block matching Aurelius visual hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="font-body text-[0.65rem] tracking-[0.45em] uppercase text-architectural-chrome mb-4">
            Monumental Stewardship
          </span>
          <h2 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-normal tracking-[0.12em] uppercase text-marble-white">
            Our Philosophy
          </h2>
          <div className="mt-6 h-[1px] w-12 bg-architectural-chrome/45" />
        </motion.div>

        {/* Quiet Luxury Editorial Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full items-center mt-12">

          {/* Left Column: Side Navigation List (Desktop Only) */}
          <div className="hidden lg:flex flex-col gap-6 lg:col-span-3 z-20">
            {tenets.map((tenet, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="group flex items-center justify-between text-left py-3.5 border-b border-white/5 transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4">
                  <span className={`font-heading text-xs transition-colors duration-300 ${idx === activeIndex ? 'text-marble-white font-medium' : 'text-travertine-stone/30'}`}>
                    {tenet.roman}
                  </span>
                  <span className={`font-heading text-lg tracking-[0.08em] uppercase transition-colors duration-300 ${idx === activeIndex ? 'text-marble-white' : 'text-travertine-stone/50 group-hover:text-marble-white'}`}>
                    {tenet.primary}
                  </span>
                </div>
                <div className={`h-[1px] transition-all duration-500 bg-architectural-chrome ${idx === activeIndex ? 'w-12' : 'w-0 group-hover:w-6'}`} />
              </button>
            ))}
          </div>

          {/* Center Column: Portrait Image & Compass overlay */}
          <div className="lg:col-span-5 flex justify-center w-full z-20">
            <div className="relative w-full max-w-[380px] aspect-[3/4] p-3 border border-white/10 bg-black/40 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-3 z-0"
                >
                  <Image
                    src={tenets[activeIndex].bg}
                    alt={tenets[activeIndex].primary}
                    fill
                    sizes="(max-width: 440px) 100vw, 440px"
                    className="object-cover object-center opacity-85 group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent z-10" />
                </motion.div>
              </AnimatePresence>

              {/* Decorative slow-spinning gold mechanical compass vector overlay */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
                className="absolute -bottom-16 -right-16 w-48 h-48 text-white/5 pointer-events-none z-20"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <circle cx="50" cy="50" r="40" strokeDasharray="2, 2" />
                <circle cx="50" cy="50" r="30" />
                <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" />
              </motion.svg>
            </div>
          </div>

          {/* Right Column: Active tenet description & comparisons */}
          <div className="lg:col-span-4 flex flex-col justify-center min-h-[350px] z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-start text-left w-full"
              >
                <span className="font-heading text-sm tracking-[0.2em] text-architectural-chrome font-medium mb-2">
                  TENET {tenets[activeIndex].roman}
                </span>

                <h3 className="font-heading text-[clamp(2rem,3.2vw,3rem)] font-light tracking-[0.08em] uppercase text-marble-white mt-2">
                  {tenets[activeIndex].primary}
                </h3>

                <div className="flex items-center gap-3 w-full my-6">
                  <span className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-travertine-stone/40">
                    over
                  </span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <span className="font-heading text-[clamp(1.2rem,1.8vw,1.6rem)] font-light tracking-[0.08em] uppercase text-travertine-stone/30">
                  {tenets[activeIndex].secondary}
                </span>

                <p className="font-body text-sm leading-[1.85] text-travertine-stone/75 mt-8 max-w-sm">
                  {tenets[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Mobile View Pagination Dots */}
            <div className="flex lg:hidden justify-center items-center gap-3 mt-10 w-full">
              {tenets.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 transition-all duration-500 ${idx === activeIndex
                    ? 'w-8 bg-marble-white'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  aria-label={`Go to philosophy ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
