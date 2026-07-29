'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── 10.8 Why Aurelius ───────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    number: 'I',
    title: 'Management-Level Structure',
    description: 'Every engagement is managed as a programme, not a single transaction. Scope is defined before work begins, progress is tracked and outcomes are confirmed against agreed criteria.',
  },
  {
    number: 'II',
    title: 'Defined Scope',
    description: 'We do not begin work without a documented scope. This protects the aircraft, sets accurate expectations and ensures that what is completed is precisely what was agreed.',
  },
  {
    number: 'III',
    title: 'Condition Awareness',
    description: 'We assess before we recommend. Scope is based on the actual condition of the aircraft, not a fixed menu — which means resources are directed where they create genuine value.',
  },
  {
    number: 'IV',
    title: 'Material-Conscious Methods',
    description: 'Aviation surfaces are specific and sensitive. Our methods and product selections are chosen for compatibility with aircraft materials — not transferred from automotive or generic detailing.',
  },
  {
    number: 'V',
    title: 'Quality Verification',
    description: 'Work is inspected against defined criteria before it is considered complete. Standards are not assumed — they are confirmed at each stage and documented.',
  },
  {
    number: 'VI',
    title: 'Professional Reporting',
    description: 'Every service produces a written record: condition at intake, scope completed, observations made, recommendations issued. Owners and operators receive documentation they can act on.',
  },
  {
    number: 'VII',
    title: 'Discretion',
    description: 'We operate within the environments of our clients without drawing attention to ourselves or their affairs. Confidentiality is a baseline expectation, not an option.',
  },
  {
    number: 'VIII',
    title: 'Continuity',
    description: 'Our objective is a standard held over time, not a single result. Recurring programmes, consistent teams and documented history mean each service builds on the one before it.',
  },
];

// ─── 10.9 What Working With Aurelius Looks Like ──────────────────────────────

const PROCESS_STEPS = [
  { step: 'I', title: 'Initial Consultation', description: 'We discuss the aircraft, its operational context, your standards and your objectives. No assumption is made before this conversation takes place.' },
  { step: 'II', title: 'Baseline Assessment', description: 'We conduct a structured condition review — exterior surfaces, cabin materials, high-contact areas — producing a documented record of the current state.' },
  { step: 'III', title: 'Recommended Scope', description: 'Based on assessment findings, we present a recommended scope: what should be addressed, in what sequence, and why.' },
  { step: 'IV', title: 'Corrective Phase', description: 'Where existing condition requires correction, we complete this work first — removing accumulated issues before a recurring programme begins.' },
  { step: 'V', title: 'Recurring Schedule', description: 'A scheduled programme is established around the aircraft\'s operational calendar. Services are planned, not reactive.' },
  { step: 'VI', title: 'Service Records', description: 'Each service is documented — scope completed, condition observations, photographs, and recommendations for the next visit.' },
  { step: 'VII', title: 'Programme Review', description: 'Periodically, we review the programme against the aircraft\'s current condition and operational changes, adjusting scope where needed.' },
];

export default function Institution() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* ── 10.8 Why Aurelius ──────────────────────────────────────────────── */}
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
              Why Aurelius
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              Eight Differentiators
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/6">
            {DIFFERENTIATORS.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (idx % 2) * 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
                className="bg-imperial-black px-8 py-10 md:px-12 flex gap-8 hover:bg-white/[0.025] transition-colors duration-500 group"
              >
                <span className="font-body text-[2rem] font-light tracking-widest text-white/30 leading-none shrink-0 mt-1">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-[clamp(1rem,1.6vw,1.3rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-[0.85rem] tracking-[0.02em] leading-[1.85] text-travertine-stone/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10.9 What Working With Aurelius Looks Like ────────────────────── */}
      <section ref={containerRef} className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity"
          style={{ backgroundImage: "url('/wings.jpg')", y: bgY, scale: bgScale }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-black via-imperial-black/80 to-imperial-black z-0" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-20"
          >
            <p className="font-body text-[0.72rem] tracking-[0.45em] uppercase text-architectural-chrome mb-4">
              The Engagement Model
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              What Working With Aurelius Looks Like
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          {/* Vertical process timeline */}
          <div className="relative ml-0 md:ml-8">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-white/8 hidden md:block" />

            <div className="flex flex-col gap-0">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.08 }}
                  viewport={{ once: true, margin: '-40px' }}
                  className="relative flex gap-8 md:gap-14 pb-12 group"
                >
                  {/* Dot on timeline */}
                  <div className="relative shrink-0 hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/15 bg-imperial-black flex items-center justify-center z-10 group-hover:border-white/40 transition-colors duration-400">
                      <span className="font-body text-[0.6rem] tracking-[0.2em] text-architectural-chrome">{step.step}</span>
                    </div>
                  </div>

                  <div className="pb-2">
                    <span className="md:hidden font-body text-[0.6rem] tracking-[0.35em] uppercase text-architectural-chrome block mb-2">{step.step}</span>
                    <h3 className="font-heading text-[clamp(1rem,1.8vw,1.4rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-3 group-hover:text-white transition-colors duration-400">
                      {step.title}
                    </h3>
                    <p className="font-body text-[0.85rem] tracking-[0.02em] leading-[1.85] text-travertine-stone/75 max-w-[680px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
