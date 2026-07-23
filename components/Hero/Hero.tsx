'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale the window up massively so the transparent center fills the viewport
  const windowScale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  // Slight parallax scale for the sky background
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Fade in sky background slightly after scroll starts
  const skyOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Fade out window image completely as we reach max zoom
  const windowOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  // Fade out gradient overlay so the sky becomes fully clear
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main ref={containerRef} className="relative h-[350vh] w-full bg-imperial-black">
      <div className="sticky top-0 left-0 flex h-screen w-full items-center justify-center overflow-hidden">

        {/* Initial Hero Background */}
        <motion.div
          className="absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')", scale: skyScale }}
        />

        {/* Sky Background (fades in over the hero background after scroll starts) */}
        <motion.div
          className="absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/sky.png')", scale: skyScale, opacity: skyOpacity }}
        />

        {/* Window Overlay scaling up and fading out */}
        <motion.div
          className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center pointer-events-none origin-center"
          style={{ scale: windowScale, opacity: windowOpacity }}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/window.png')" }}
          />
        </motion.div>

        {/* Gradient Overlay (fades out so sky becomes clear) */}
        <motion.div
          className="absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-b from-[#0a0a0c33] via-[#0a0a0c99] to-[#0a0a0cf2] pointer-events-none"
          style={{ opacity: gradientOpacity }}
        />

        {/* Content (remains visible) */}
        <div className="relative z-30 mt-[5vh] flex flex-col items-center gap-10 px-8 text-center">
          <div
            className="animate-slow-fade-in font-body text-[clamp(0.75rem,1.2vw,0.9rem)] font-light tracking-[0.5em] uppercase text-architectural-chrome opacity-0"
            style={{ animationDelay: '1.5s' }}
          >
            Est. MMXXIV
          </div>

          <h1
            className="animate-slow-fade-in font-heading text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[1.05] tracking-[0.12em] uppercase text-marble-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            Aurelius
          </h1>

          <div
            className="animate-slow-fade-in max-w-[600px] font-heading text-[clamp(1rem,2vw,1.5rem)] font-normal tracking-[0.05em] text-travertine-stone opacity-0"
            style={{ animationDelay: '2.5s' }}
          >
            We preserve aviation assets.
          </div>
        </div>

        {/* Scroll Indicator (remains visible) */}
        <div
          className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-6 animate-slow-reveal opacity-0"
          style={{ animationDelay: '4s' }}
        >
          <span className="font-body text-[0.7rem] tracking-[0.3em] uppercase text-architectural-chrome">
            Discover Legacy
          </span>
          <div className="h-[80px] w-[1px] bg-gradient-to-b from-architectural-chrome to-transparent"></div>
        </div>

      </div>
    </main>
  );
}
