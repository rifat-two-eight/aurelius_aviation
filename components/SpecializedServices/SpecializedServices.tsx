'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── 10.6 The Aurelius Standard Preview ──────────────────────────────────────

const STAGES = [
  'Understand',
  'Assess',
  'Plan',
  'Execute',
  'Verify',
  'Report',
  'Maintain',
];

// ─── 10.7 Client Types ────────────────────────────────────────────────────────

const CLIENT_TYPES = [
  {
    title: 'Private Owners',
    standard: 'Aircraft presented to personal ownership standards at all times.',
    problem: 'Inconsistent care across locations, crews and service providers creates cumulative decline.',
    support: 'Aurelius establishes a documented standard, coordinates all appearance services and provides a continuous condition record.',
    services: 'Aircraft Appearance Management, Recurring Programmes, Documentation',
  },
  {
    title: 'Corporate Flight Departments',
    standard: 'Aircraft representing the organisation at the highest corporate level.',
    problem: 'High utilisation cycles, multiple crew members and compressed schedules make consistent presentation difficult to maintain.',
    support: 'We integrate with operational schedules, define a repeatable standard and handle all appearance coordination.',
    services: 'Exterior Care, Executive Cabin Care, Recurring Programmes',
  },
  {
    title: 'Aircraft Management Companies',
    standard: 'A defined presentation standard applied consistently across the managed fleet.',
    problem: 'Multiple owners, varying instructions and distributed operations make it difficult to hold a single quality level.',
    support: 'Aurelius provides a fleet-wide framework — consistent scope, documentation and reporting across every aircraft.',
    services: 'Aircraft Appearance Management, Documentation, Continuity Programmes',
  },
  {
    title: 'Charter Operators',
    standard: 'Passenger-ready presentation before every departure.',
    problem: 'High turnaround frequency leaves limited time for appearance care while passenger expectations remain high.',
    support: 'Scheduled cabin and exterior care is built around your rotation, ensuring readiness without disrupting operations.',
    services: 'Exterior Care, Executive Cabin Care, Responsive Support',
  },
  {
    title: 'Brokers & Dealers',
    standard: 'Aircraft presented to command attention and support asking price.',
    problem: 'Condition gaps, surface wear and presentation inconsistency reduce perceived value at point of sale.',
    support: 'Aurelius provides pre-sale preparation, condition assessment and photography-ready presentation.',
    services: 'Delivery & Pre-Sale Presentation, Paint Enhancement, Documentation',
  },
  {
    title: 'Aviation Facilities & Partners',
    standard: 'Appearance services that reflect the facility\'s own standard of quality.',
    problem: 'In-house capability gaps or capacity limits prevent consistent delivery across all aircraft on site.',
    support: 'Aurelius operates as a specialist partner — integrating with your team, processes and client expectations.',
    services: 'All services available — scope agreed per facility',
  },
];

export default function SpecializedServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useGSAP(() => {
    gsap.fromTo(
      '.client-card',
      {
        opacity: 0,
        x: (index: number) => {
          if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
            const col = index % 3;
            return col === 0 ? -70 : col === 2 ? 70 : 0;
          } else if (typeof window !== 'undefined' && window.innerWidth >= 768) {
            const col = index % 2;
            return col === 0 ? -70 : 70;
          }
          return 0; // Mobile
        },
        y: (index: number) => {
          if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
            const col = index % 3;
            return col === 1 ? 40 : 20;
          }
          return 30;
        }
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play reset play reset'
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <>
      {/* ── 10.6 The Aurelius Standard ─────────────────────────────────────── */}
      <section className="bg-imperial-black py-24 md:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, margin: '-80px' }}
            className="mb-20"
          >
            <p className="font-body text-[0.72rem] tracking-[0.45em] uppercase text-architectural-chrome mb-4">
              The Aurelius Standard
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              A Standard Built on Process
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          {/* Seven stages inline */}
          <div className="flex flex-wrap items-center gap-0 mb-16">
            {STAGES.map((stage, idx) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                viewport={{ once: false, margin: '-60px' }}
                className="flex items-center"
              >
                <div className="flex flex-col items-center px-6 py-6 group">
                  <span className="font-body text-[0.6rem] tracking-[0.35em] uppercase text-architectural-chrome mb-3">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-[clamp(1.1rem,2vw,1.8rem)] tracking-[0.08em] uppercase text-marble-white group-hover:text-architectural-chrome transition-colors duration-400">
                    {stage}
                  </span>
                </div>
                {idx < STAGES.length - 1 && (
                  <span className="font-body text-architectural-chrome/30 text-xl px-1 select-none">·</span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Link
              href="/standard"
              className="inline-flex items-center gap-3 font-body text-[0.75rem] tracking-[0.3em] uppercase text-marble-white/50 hover:text-marble-white transition-colors duration-300"
            >
              View The Full Standard
              <span className="h-[1px] w-8 bg-current inline-block transition-all duration-300 hover:w-14" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 10.7 Client Types ─────────────────────────────────────────────── */}
      <section ref={sectionRef} className="relative bg-imperial-black py-24 md:py-32 border-t border-white/5 overflow-hidden">
        {/* Background Parallax Image */}
        <motion.div
          className="absolute inset-0 opacity-40 z-0 origin-center"
          style={{ y: bgY, scale: bgScale, willChange: "transform" }}
        >
          <Image
            src="/plane.jpg"
            alt="Plane Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay to blend background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/50 to-[#0a0a0c] z-10 pointer-events-none" />

        <div className="relative z-20 container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, margin: '-80px' }}
            className="mb-20"
          >
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              Who We Work With
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CLIENT_TYPES.map((client, idx) => (
              <motion.div
                key={client.title}
                whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.6)' }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 15,
                  duration: 0.3
                }}
                className="client-card group relative flex flex-col justify-between p-8 md:p-10 bg-black/50 hover:bg-white/[0.025] border border-white/30 rounded-none transition-all duration-500 overflow-hidden select-none opacity-0"
              >
                {/* Subtle hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Roman numeral and bullet header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading text-sm tracking-[0.15em] text-travertine-stone/30 font-medium">
                    {romanNumerals[idx]}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-travertine-stone/20 group-hover:bg-travertine-stone/50 transition-colors duration-500" />
                </div>

                <div className="mb-6">
                  <h3 className="font-heading text-[clamp(1.2rem,1.8vw,1.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white">
                    {client.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-5 text-[0.82rem] leading-[1.75] font-body mb-8">
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-architectural-chrome/60 mb-1">Their Standard</span>
                    <p className="text-travertine-stone/85">{client.standard}</p>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-architectural-chrome/60 mb-1">The Challenge</span>
                    <p className="text-travertine-stone/85">{client.problem}</p>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-architectural-chrome/60 mb-1">How Aurelius Helps</span>
                    <p className="text-travertine-stone/85">{client.support}</p>
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-white/10">
                  <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-architectural-chrome/60 mb-1">Relevant Services</span>
                  <p className="font-body text-[0.75rem] text-travertine-stone/70 group-hover:text-marble-white/80 transition-colors duration-300">{client.services}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
