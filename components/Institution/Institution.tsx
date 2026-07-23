'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STANDARDS = [
  "Zero-Tolerance for Mediocrity",
  "Uncompromising Material Safety",
  "Discreet and Confidential Operations",
  "Institutional Consistency Across Hubs"
];

const TERRITORIES = [
  "London", "Dubai", "New York", "Geneva", "Singapore"
];

export default function Institution() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="bg-imperial-black py-40 text-marble-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Image (wings.jpg) */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center origin-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('/wings.jpg')", y: bgY, scale: bgScale }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-black/90 via-imperial-black/70 to-imperial-black/90 z-0 pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] px-8 relative z-10">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-[0.15em] uppercase mb-10">
              The Institution
            </h2>
            <p className="font-heading text-[clamp(1rem,1.2vw,1.25rem)] font-normal tracking-[0.05em] leading-[1.8] text-travertine-stone mb-8">
              We do not operate as mere vendors. We function as the enduring guardians of aviation legacy. Aurelius was forged to provide an institutional standard of care for the world's most valuable assets. 
            </p>
            <p className="font-heading text-[clamp(1rem,1.2vw,1.25rem)] font-normal tracking-[0.05em] leading-[1.8] text-travertine-stone">
              Our discipline is absolute. Our focus is permanence. We assume stewardship responsibilities so that you may assume command.
            </p>
          </motion.div>

          {/* Standards Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:pl-20 lg:border-l border-white/10"
          >
            <h3 className="font-body text-sm tracking-[0.3em] uppercase text-architectural-chrome mb-10">
              Our Standards
            </h3>
            <ul className="flex flex-col gap-8">
              {STANDARDS.map((std, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-2 h-[2px] w-[15px] bg-architectural-chrome"></div>
                  <span className="font-heading text-[clamp(1.2rem,1.5vw,1.5rem)] tracking-[0.05em] uppercase text-marble-white">
                    {std}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Territory Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center pt-20 border-t border-white/5"
        >
          <h3 className="font-body text-sm tracking-[0.3em] uppercase text-architectural-chrome mb-10">
            Service Territory
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {TERRITORIES.map((city, idx) => (
              <span key={idx} className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-[0.1em] uppercase text-marble-white/80 hover:text-marble-white transition-colors duration-500 cursor-default">
                {city}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
