'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const whyRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const { scrollYProgress: whyScrollY } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  });
  const whyBgY = useTransform(whyScrollY, [0, 1], ['0%', '15%']);
  const whyBgScale = useTransform(whyScrollY, [0, 1], [1, 1.1]);

  // GSAP ScrollTrigger Scrubbed Bento Gallery Animation
  useGSAP(() => {
    const cards = gsap.utils.toArray('.why-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 95%',
        end: 'bottom 80%',
        scrub: 0.3,
      }
    });

    cards.forEach((card, index) => {
      let initialX = 0;
      let initialY = 50;
      let initialScale = 0.95;

      const colPattern = index % 3;
      if (colPattern === 0) {
        initialX = -100;
        initialY = 15;
      } else if (colPattern === 2) {
        initialX = 100;
        initialY = 15;
      } else {
        initialX = 0;
        initialY = 70;
        initialScale = 0.9;
      }

      tl.fromTo(card as any,
        {
          opacity: 0,
          x: initialX,
          y: initialY,
          scale: initialScale
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: 'power2.out',
        },
        index * 0.02
      );
    });
  }, { scope: whyRef });

  return (
    <>
      {/* ── 10.8 Why Aurelius ──────────────────────────────────────────────── */}
      <section ref={whyRef} className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden bg-imperial-black">
        {/* Background Parallax Image */}
        <motion.div
          className="absolute inset-0 z-0 origin-center opacity-40"
          style={{ y: whyBgY, scale: whyBgScale, willChange: "transform" }}
        >
          <Image
            src="/plane2.jpg"
            alt="Why Aurelius"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay to blend background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/55 to-[#0a0a0c] z-10 pointer-events-none" />

        <div className="relative z-20 container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, margin: '-80px' }}
            className="mb-20"
          >
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              Why Aurelius
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {DIFFERENTIATORS.map((item, idx) => {
              const getColSpan = (i: number) => {
                if (i === 0 || i === 3) return 'md:col-span-2';
                if (i === 7) return 'md:col-span-3';
                return 'md:col-span-1';
              };

              return (
                <motion.div
                  key={item.number}
                  whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.6)' }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    duration: 0.3
                  }}
                  className={`why-card group relative flex gap-6 md:gap-8 p-8 md:p-10 bg-black/50 hover:bg-white/[0.025] border border-white/30 rounded-none transition-all duration-500 overflow-hidden select-none opacity-0 ${getColSpan(idx)}`}
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <span className="font-heading text-xl md:text-2xl tracking-[0.1em] text-travertine-stone/30 font-medium shrink-0 mt-1">
                    {item.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-heading text-[clamp(1rem,1.6vw,1.3rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-4">
                      {item.title}
                    </h3>
                    <p className="font-body text-[0.85rem] tracking-[0.02em] leading-[1.85] text-travertine-stone/80">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10.9 What Working With Aurelius Looks Like ────────────────────── */}
      <section ref={containerRef} className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 origin-center opacity-100"
          style={{ y: bgY, scale: bgScale, willChange: "transform" }}
        >
          <Image
            src="/wings3.jpg"
            alt="Wings"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-imperial-black/95 via-imperial-black/75 to-imperial-black z-0 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, margin: '-80px' }}
            className="mb-20"
          >
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              The Engagement Model
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
                  viewport={{ once: false, margin: '-40px' }}
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
                    <h3 className="font-heading text-[clamp(1rem,1.8vw,1.4rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-3 group-hover:text-marble-white transition-colors duration-400">
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
