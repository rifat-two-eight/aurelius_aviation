'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SERVICES = [
  {
    title: 'Aircraft Preservation',
    description: 'Long-term storage solutions demanding the highest caliber of environmental control, surface protection, and mechanical readiness. We ensure the asset retains immaculate condition during extended periods of inactivity.',
  },
  {
    title: 'Inspection and Reporting',
    description: 'Meticulous, forensic-level documentation of surface and cabin state. We provide operators and owners with unvarnished, authoritative reports to maintain asset value and operational standard.',
  },
  {
    title: 'Operators and FBOs',
    description: 'Strategic partnerships with Fixed-Base Operators to elevate terminal experiences. We bring institutional discipline to high-volume luxury aviation environments.',
  },
  {
    title: 'Brokers and Aircraft Sales',
    description: 'Transformative detailing that prepares an aircraft for the global market. We ensure the asset projects the authority and permanence required to command premium valuations.',
  }
];

export default function SpecializedServices() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll for a subtle parallax effect on the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Zoom in smoothly alongside the scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-imperial-black overflow-hidden py-32">
      {/* Subtle textured background */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center origin-center"
        style={{ backgroundImage: "url('/sunset.jpg')", y: bgY, scale: bgScale }}
      />
      <div className="absolute inset-0 bg-imperial-black/60 z-0 pointer-events-none"></div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-[0.15em] uppercase text-marble-white">
            Specialized Services
          </h2>
          <div className="mt-4 h-[1px] w-[60px] bg-architectural-chrome"></div>
        </motion.div>

        <div className="flex flex-col gap-32">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-24 group"
            >
              <div className="md:w-1/3 border-t border-white/10 pt-8">
                <span className="font-body text-sm tracking-[0.3em] text-architectural-chrome opacity-50 block mb-4">
                  0{idx + 4}
                </span>
                <h3 className="font-heading text-[clamp(1.5rem,2vw,2rem)] leading-[1.3] tracking-[0.05em] uppercase text-marble-white group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="md:w-2/3 md:pt-14">
                <p className="font-heading text-[clamp(1rem,1.2vw,1.25rem)] font-normal tracking-[0.05em] leading-[1.8] text-travertine-stone group-hover:text-marble-white transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
