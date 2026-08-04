'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function IntroOverlay() {
  const { scrollY } = useScroll();
  const maxScroll = useMotionValue(0);

  const [isClient, setIsClient] = useState(false);

  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const text = 'Aviation Asset Management';
  const letters = text.split('');

  // Handle client-side state, scroll reset, and scroll restoration manual settings
  useEffect(() => {
    setIsClient(true);

    // Disable automatic browser scroll restoration on refresh/load
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll position to the top immediately on mount
    window.scrollTo(0, 0);
    maxScroll.set(0);

    document.documentElement.classList.add('intro-active');
    document.documentElement.classList.remove('intro-dismissed');
  }, [maxScroll]);

  // Track maximum scroll reached to freeze the shutter on scroll-up
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > maxScroll.get()) {
        maxScroll.set(latest);
      }
    });
    return () => unsubscribe();
  }, [scrollY, maxScroll]);

  // Coordinate header/hero animation triggers based on maximum scroll reached
  useEffect(() => {
    const unsubscribe = maxScroll.on('change', (latest) => {
      if (latest > 30) {
        document.documentElement.classList.remove('intro-active');
        document.documentElement.classList.add('intro-dismissed');
      }
    });
    return () => unsubscribe();
  }, [maxScroll]);

  // GSAP Entrance Timeline (runs once on load)
  useGSAP(() => {
    // If page loaded already scrolled, skip entrance animations
    if (maxScroll.get() > 30) return;

    const tl = gsap.timeline();

    // 1. Logo fades & scales in softly
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.6, ease: 'power3.out' }
    );

    // 2. Elegant vertical divider line scales up
    tl.fromTo(
      lineRef.current,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 1.0, ease: 'power3.out' },
      '-=1.0'
    );

    // 3. Staggered character reveal of the subtitle text
    tl.fromTo(
      '.intro-char',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1.0, stagger: 0.025, ease: 'power3.out' },
      '-=0.8'
    );

    // 4. Scroll indicator fades in at the bottom
    tl.fromTo(
      indicatorRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.2'
    );
  }, { scope: containerRef });

  // SCROLL-SCRUB MAPPINGS (linked to maxScroll so it acts like a shutter that locks when lifted)
  // 1. Curtain slides Y offset: maps from 0% (closed) to -100% (fully open) over 0px to 250px of scroll
  const overlayY = useTransform(maxScroll, [0, 250], ['0%', '-100%']);

  // 2. Parallax depth: content translates Y inside the curtain
  const contentY = useTransform(maxScroll, [0, 250], [0, 80]);

  // 3. Scroll indicator fades out immediately
  const scrollIndicatorOpacity = useTransform(maxScroll, [0, 45], [1, 0]);

  // 4. Transform visibility constraints to prevent background click blockage
  const pointerEvents = useTransform(maxScroll, (v) => v > 240 ? 'none' : 'auto');
  const display = useTransform(maxScroll, (v) => v > 250 ? 'none' : 'flex');



  return (
    <motion.div
      ref={containerRef}
      style={{ y: overlayY, pointerEvents, display }}
      className="fixed inset-0 bg-[#0a0a0c] z-[100] flex flex-col items-center justify-center overflow-hidden border-b border-white/5 shadow-2xl"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wings.jpg"
          alt="Aurelius Aviation Background"
          fill
          className="object-cover object-center opacity-55 select-none pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/60 via-[#0a0a0c]/85 to-[#0a0a0c] pointer-events-none" />
      </div>

      {/* Animated Brand Lockup with Parallax Translation */}
      <motion.div
        style={{ y: contentY, willChange: 'transform' }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-6 text-center select-none"
      >
        {/* Logo container - Enlarged */}
        <div
          ref={logoRef}
          className="relative w-[340px] h-[110px] sm:w-[440px] sm:h-[142px] opacity-0"
        >
          <Image
            src="/logo-demo1.png"
            alt="Aurelius Aviation"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Vertical divider (visible only on md/larger screens) - Enlarged */}
        <div
          ref={lineRef}
          className="hidden md:block h-16 md:h-20 w-[1px] bg-white/20 origin-center opacity-0"
        />

        {/* Elegant Subtitle with Staggered Character Reveal - Enlarged */}
        <h2 className="font-heading text-marble-white text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-medium text-white/95 overflow-hidden py-1 max-w-sm sm:max-w-none flex flex-wrap justify-center">
          {letters.map((char, index) => (
            <span
              key={index}
              className="intro-char inline-block opacity-0"
              style={{ willChange: 'opacity, transform' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
      </motion.div>

      {/* Scroll indicator at the bottom */}
      <motion.div
        ref={indicatorRef}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none pointer-events-none opacity-0"
      >
        <span className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-marble-white/40">
          Scroll to Begin
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-marble-white/30 mt-1"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
