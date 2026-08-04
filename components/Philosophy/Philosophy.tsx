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
    { primary: "Order", secondary: "Chaos", bg: "/philo1.jpg" },
    { primary: "Discipline", secondary: "Indulgence", bg: "/philo2.jpg" },
    { primary: "Excellence", secondary: "Mediocrity", bg: "/philo3.jpg" },
    { primary: "Legacy", secondary: "Profit", bg: "/philo4.jpg" },
    { primary: "Permanence", secondary: "Trends", bg: "/philo5.jpg" },
    { primary: "Stewardship", secondary: "Ownership", bg: "/philo6.jpg" }
  ];

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto cycle cards every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tenets.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [tenets.length]);

  // Construct stack data: we render the top 5 cards in reverse order so depth 0 (top card) sits on top in DOM paint order
  const stackCards = Array.from({ length: tenets.length - 1 }, (_, idx) => {
    const index = (activeIndex + idx) % tenets.length;
    return { index, depth: idx };
  }).reverse();

  // Framer Motion Variants for Card Stack Depth & Exit Flight
  const cardVariants = {
    enter: (depth: number) => ({
      y: -38 * depth,
      scale: 1 - (0.03 * depth),
      opacity: 1 - (0.1 * depth),
      rotate: 0,
      zIndex: 10 - depth,
      transition: { duration: 0.6, ease: "easeInOut" as any }
    }),
    exit: {
      x: 350,
      rotate: 0,
      opacity: 0,
      scale: 0.95,
      zIndex: 12,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

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

      <div className="relative z-20 mx-auto flex max-w-[1400px] flex-col items-center px-8 py-32 md:py-40">

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
          <h2 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] mb-10 font-normal tracking-[0.12em] uppercase text-marble-white">
            Our Philosophy
          </h2>
          <div className="mt-6 h-[1px] w-12 bg-architectural-chrome/45" />
        </motion.div>

        {/* Interactive Card Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-[440px] flex flex-col items-center"
        >
          {/* Cards Deck */}
          <div className="relative w-full h-[460px] md:h-[490px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {stackCards.map(({ index, depth }) => {
                const tenet = tenets[index];
                const isActive = depth === 0;
                return (
                  <motion.div
                    key={index}
                    custom={depth}
                    variants={cardVariants}
                    animate="enter"
                    exit="exit"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                    }}
                    className={`group flex flex-col justify-between p-8 md:p-10 border border-white/30 rounded-none transition-colors duration-500 overflow-hidden select-none ${isActive ? 'bg-black/60 hover:bg-white/[0.025]' : 'bg-[#0a0a0c]'
                      }`}
                  >
                    {/* Card Background Image (only visible on active card) */}
                    {isActive && (
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={tenet.bg}
                          alt={tenet.primary}
                          fill
                          sizes="(max-w-440px) 100vw, 440px"
                          className="object-cover object-center opacity-75 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-500" />
                      </div>
                    )}

                    {/* Subtle hover gradient glow (only active card) */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                    )}

                    {/* Roman numeral and bullet header (hidden on background cards) */}
                    <div
                      className="relative z-10 flex items-center justify-between mb-8 transition-opacity duration-300"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      <span className="font-heading text-sm tracking-[0.15em] text-travertine-stone/30 font-medium">
                        {romanNumerals[index]}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-travertine-stone/20 group-hover:bg-travertine-stone/50 transition-colors duration-500" />
                    </div>

                    {/* Core comparison statements (hidden on background cards) */}
                    <div
                      className="relative z-10 flex flex-col items-start w-full mb-4 transition-opacity duration-300"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      {/* Primary choice */}
                      <h3 className="font-heading text-[clamp(1.6rem,2.2vw,2.2rem)] tracking-[0.12em] uppercase text-travertine-stone font-medium group-hover:text-marble-white transition-colors duration-300">
                        {tenet.primary}
                      </h3>

                      {/* Divider Line with Connector */}
                      <div className="flex items-center gap-3 w-full my-4">
                        <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-architectural-chrome/40">
                          over
                        </span>
                        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
                      </div>

                      {/* Secondary choice */}
                      <span className="font-heading text-[clamp(1.1rem,1.5vw,1.4rem)] tracking-[0.1em] uppercase text-travertine-stone/30 group-hover:text-travertine-stone/40 transition-colors duration-300">
                        {tenet.secondary}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination Indicators / Controls */}
          <div className="flex justify-center items-center gap-2.5 mt-10 z-20">
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
        </motion.div>

      </div>
    </section>
  );
}
