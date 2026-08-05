'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#0a0a0c] text-marble-white px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/wings.jpg"
          alt="Aurelius Aviation Background"
          fill
          priority
          className="object-cover object-center select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/60 via-[#0a0a0c]/90 to-[#0a0a0c] pointer-events-none" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-architectural-chrome/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-lg text-center select-none mt-12">
        {/* Roman-style error subhead */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="font-body text-[0.72rem] tracking-[0.45em] uppercase text-architectural-chrome mb-6 block"
        >
          Anomaly Detected
        </motion.span>

        {/* Cinematic Large Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-[0.1em] uppercase leading-none text-marble-white mb-8"
        >
          Unexpected Turbulence
        </motion.h1>

        {/* Gold Divider Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="h-[1px] w-16 bg-architectural-chrome/45 mb-8"
        />

        {/* Luxury Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
          className="font-body text-[0.88rem] tracking-[0.03em] leading-[1.85] text-travertine-stone/80 mb-12 max-w-[420px]"
        >
          An operational anomaly has occurred. Our ground crew has been notified. You may attempt to re-establish the connection.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => reset()}
            className="group relative inline-flex items-center justify-center px-10 py-4 border border-marble-white bg-marble-white text-imperial-black text-xs tracking-[0.3em] uppercase font-body font-medium transition-all duration-500 hover:bg-transparent hover:text-marble-white shadow-lg hover:shadow-marble-white/5"
          >
            Retry Connection
          </button>
          
          <a
            href="/"
            className="group relative inline-flex items-center justify-center px-10 py-4 border border-white/20 bg-transparent text-marble-white text-xs tracking-[0.3em] uppercase font-body font-medium transition-all duration-500 hover:border-white/50 hover:bg-white/[0.02]"
          >
            Return Home
          </a>
        </motion.div>
      </div>
    </main>
  );
}
