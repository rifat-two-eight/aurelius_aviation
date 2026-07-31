'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
  return (
    <>
      {/* ── 10.6 The Aurelius Standard ─────────────────────────────────────── */}
      <section className="bg-imperial-black py-24 md:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: '-80px' }}
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
                viewport={{ once: true, margin: '-60px' }}
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
            viewport={{ once: true }}
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
      <section className="bg-imperial-black py-24 md:py-32 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-20"
          >
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              Who We Work With
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
            {CLIENT_TYPES.map((client, idx) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
                className="bg-imperial-black p-8 md:p-10 flex flex-col gap-6 hover:bg-white/[0.025] transition-colors duration-500 group"
              >
                <div>
                  <span className="font-body text-[0.6rem] tracking-[0.35em] uppercase text-architectural-chrome/50 block mb-3">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-[clamp(1.1rem,1.8vw,1.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white">
                    {client.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-4 text-[0.82rem] leading-[1.75] font-body">
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-architectural-chrome mb-1">Their Standard</span>
                    <p className="text-travertine-stone/80">{client.standard}</p>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-architectural-chrome mb-1">The Challenge</span>
                    <p className="text-travertine-stone/80">{client.problem}</p>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-architectural-chrome mb-1">How Aurelius Helps</span>
                    <p className="text-travertine-stone/80">{client.support}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/6">
                  <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-architectural-chrome mb-1">Relevant Services</span>
                  <p className="font-body text-[0.75rem] text-marble-white/50">{client.services}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
