'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale the window up to a moderate level so the zoom is gentler and less intense
  const windowScale = useTransform(scrollYProgress, [0, 0.65], [1, 2.2]);

  // Slight parallax scale for the sky background
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Fade in sky background slightly after scroll starts
  const skyOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Fade out window image completely as we reach max zoom (finish by 0.65 to prevent overlap with Philosophy scroll-up)
  const windowOpacity = useTransform(scrollYProgress, [0.35, 0.65], [1, 0]);

  // Fade out gradient overlay so the sky becomes fully clear
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Scroll-linked transforms for the flying plane icon
  const planeLeft = useTransform(scrollYProgress, [0.05, 0.5], ["-10%", "110%"]);
  const planeTop = useTransform(scrollYProgress, [0.05, 0.5], ["10%", "90%"]);
  const planeScale = useTransform(scrollYProgress, [0.05, 0.5], [0.6, 1.3]);
  const planeOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.4, 0.5], [0, 0.85, 0.85, 0]);

  return (
    <main ref={containerRef} className="relative h-[350vh] w-full bg-imperial-black">
      <div className="sticky top-0 left-0 flex h-screen w-full items-center justify-center overflow-hidden">

        {/* Initial Hero Background */}
        {/* <motion.div
          className="absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')", scale: skyScale }}
        /> */}

        {/* Sky Background (fades in over the hero background after scroll starts) */}
        {/* <motion.div
          className="absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/sky.png')", scale: skyScale, opacity: skyOpacity }}
        /> */}

        {/* Scroll-Linked Flying Plane Icon */}
        <motion.div
          style={{
            position: 'absolute',
            left: planeLeft,
            top: planeTop,
            scale: planeScale,
            opacity: planeOpacity,
            rotate: 135,
            willChange: 'left, top, opacity',
          }}
          className="z-25 pointer-events-none hidden md:block"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-travertine-stone/30 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] animate-pulse"
          >
            <path
              d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        {/* Floating & Rotating 3D Perspective Wireframe Plane at Bottom Right */}
        <div className="absolute bottom-6 right-6 md:bottom-16 md:right-16 z-30 select-none pointer-events-none w-32 h-32 md:w-48 md:h-48">
          {/* Wind streaks showing movement in the sky */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <motion.div
              className="absolute h-[1px] w-12 bg-white/40 top-[25%] left-0"
              initial={{ x: "180px" }}
              animate={{ x: "-180px" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-[1px] w-20 bg-white/20 top-[55%] left-0"
              initial={{ x: "180px" }}
              animate={{ x: "-180px" }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
            />
            <motion.div
              className="absolute h-[1px] w-16 bg-white/30 top-[80%] left-0"
              initial={{ x: "180px" }}
              animate={{ x: "-180px" }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.3 }}
            />
          </div>

          <motion.div
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
              width: "100%",
              height: "100%"
            }}
            animate={{
              rotateY: [-10, 10, -10],   // Yaw (turning side-to-side)
              rotateX: [12, 22, 12],     // Pitch (nose up/down)
              rotateZ: [-6, 6, -6],      // Banking roll (flight tilt)
              y: [-8, 8, -8],            // Altitude drift
              x: [-3, 3, -3]             // Lateral drift
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(197, 185, 243, 0.25)]"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              fill="none"
              stroke="rgba(208, 200, 240, 0.31)"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-full"
            >
              {/* Main Outer Profile */}
              <motion.path
                d="M50 15 L55 35 L85 55 L85 58 L54 50 L53 78 L65 85 L65 88 L50 85 L35 88 L35 85 L47 78 L46 50 L15 58 L15 55 L45 35 Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
              {/* 3D Fuselage Longitudinal Lines (Perspective Creases) */}
              <motion.path
                d="M50 15 L50 85 M50 15 C46 30 46 65 50 85 M50 15 C54 30 54 65 50 85"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
              {/* 3D Fuselage Cross Sections (Cylinder Rings) */}
              <motion.path
                d="M47 35 A 3 1.5 0 0 0 53 35 M45 48 A 5 2.5 0 0 0 55 48 M46 62 A 4 2 0 0 0 54 62 M47 72 A 3 1.5 0 0 0 53 72"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
              {/* Left Wing 3D Structural Spars */}
              <motion.path
                d="M45 35 L15 55 M45 48 L15 58 M46 50 L15 58"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
              {/* Right Wing 3D Structural Spars */}
              <motion.path
                d="M55 35 L85 55 M55 48 L85 58 M54 50 L85 58"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
              {/* Tail Fin 3D Ribs */}
              <motion.path
                d="M50 68 L50 82 L53 78 M50 82 L35 85 M50 82 L65 85"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Window Overlay scaling up and fading out */}
        <motion.div
          className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center pointer-events-none origin-top"
          style={{ scale: windowScale, opacity: windowOpacity, willChange: "transform, opacity" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/aurelius.png"
              alt="Aurelius Aviation"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Gradient Overlay (fades out so sky becomes clear) */}
        <motion.div
          className="absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-b from-[#0a0a0c33] via-[#0a0a0c99] to-[#0a0a0cf2] pointer-events-none"
          style={{ opacity: gradientOpacity }}
        />

        {/* Content (remains visible) */}
        <div className="relative z-30 mt-[5vh] flex flex-col items-center gap-8 px-8 text-center">
          {/* <div
            className="animate-slow-fade-in font-body text-[clamp(0.75rem,1.2vw,0.9rem)] font-light tracking-[0.5em] uppercase text-architectural-chrome opacity-0"
            style={{ animationDelay: '1.5s' }}
          >
            Est. MMXXIV
          </div> */}

          <h1
            className="animate-slow-fade-in font-heading text-7xl font-medium uppercase text-marble-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            Aviation Above Ordinary
          </h1>

          <div
            className="animate-slow-fade-in max-w-[620px] font-heading text-[clamp(0.95rem,1.4vw,1.2rem)] font-normal tracking-[0.04em] leading-[1.8] text-travertine-stone opacity-0"
            style={{ animationDelay: '2s' }}
          >
            Delivering comprehensive aviation asset management solutions for airlines, investors, and aviation stakeholders worldwide.
          </div>

          <div
            className="animate-slow-fade-in flex flex-col sm:flex-row items-center gap-4 mt-4 opacity-0"
            style={{ animationDelay: '2.8s' }}
          >
            <a
              href="/assessment"
              className="px-8 py-3.5 border border-marble-white bg-marble-white text-imperial-black text-xs tracking-[0.3em] uppercase font-body font-medium hover:bg-transparent hover:text-marble-white transition-all duration-500"
            >
              Claim Stewardship Today
            </a>
            <a
              href="/services"
              className="px-8 py-3.5 border border-white/30 bg-transparent text-marble-white text-xs tracking-[0.3em] uppercase font-body hover:border-white/70 hover:bg-white/5 transition-all duration-500"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-6 animate-slow-reveal opacity-0"
          style={{ animationDelay: '4s' }}
        >
          <span className="font-body text-[0.7rem] tracking-[0.3em] uppercase text-architectural-chrome">
            Discover Legacy
          </span>
          <div className="h-[80px] w-[1px] bg-gradient-to-b from-architectural-chrome to-transparent"></div>
        </div> */}

      </div>
    </main>
  );
}
