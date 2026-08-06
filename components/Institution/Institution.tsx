'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── 10.8 Why Aurelius ───────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    number: 'I',
    title: 'Management-Level Structure',
    description: 'Every engagement is managed as a programme, not a single transaction. Scope is defined before work begins, progress is tracked and outcomes are confirmed against agreed criteria.',
    image: '/why1.jpg',
  },
  {
    number: 'II',
    title: 'Defined Scope',
    description: 'We do not begin work without a documented scope. This protects the aircraft, sets accurate expectations and ensures that what is completed is precisely what was agreed.',
    image: '/why2.jpg',
  },
  {
    number: 'III',
    title: 'Condition Awareness',
    description: 'We assess before we recommend. Scope is based on the actual condition of the aircraft, not a fixed menu — which means resources are directed where they create genuine value.',
    image: '/why3.jpg',
  },
  {
    number: 'IV',
    title: 'Material-Conscious Methods',
    description: 'Aviation surfaces are specific and sensitive. Our methods and product selections are chosen for compatibility with aircraft materials — not transferred from automotive or generic detailing.',
    image: '/why4.jpg',
  },
  {
    number: 'V',
    title: 'Quality Verification',
    description: 'Work is inspected against defined criteria before it is considered complete. Standards are not assumed — they are confirmed at each stage and documented.',
    image: '/why5.jpg',
  },
  {
    number: 'VI',
    title: 'Professional Reporting',
    description: 'Every service produces a written record: condition at intake, scope completed, observations made, recommendations issued. Owners and operators receive documentation they can act on.',
    image: '/why6.jpg',
  },
  {
    number: 'VII',
    title: 'Discretion',
    description: 'We operate within the environments of our clients without drawing attention to ourselves or their affairs. Confidentiality is a baseline expectation, not an option.',
    image: '/why7.jpg',
  },
  {
    number: 'VIII',
    title: 'Continuity',
    description: 'Our objective is a standard held over time, not a single result. Recurring programmes, consistent teams and documented history mean each service builds on the one before it.',
    image: '/why8.jpg',
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
  const whyScrollRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const { scrollYProgress: whyScrollProgress } = useScroll({
    target: whyScrollRef,
    offset: ['start start', 'end end'],
  });

  // Staggered convergent translations: cards start widely spaced out ("dure dure")
  // and pull inward to lock into the tight cohesive bento grid on scroll
  const card1X = useTransform(whyScrollProgress, [0.02, 0.16], ["-35vw", "0px"]);
  const card1Y = useTransform(whyScrollProgress, [0.02, 0.16], ["-35vh", "0px"]);

  const card2Y = useTransform(whyScrollProgress, [0.04, 0.18], ["-45vh", "0px"]);

  const card3X = useTransform(whyScrollProgress, [0.06, 0.20], ["35vw", "0px"]);
  const card3Y = useTransform(whyScrollProgress, [0.06, 0.20], ["-35vh", "0px"]);

  const card4X = useTransform(whyScrollProgress, [0.08, 0.22], ["-45vw", "0px"]);

  const card5X = useTransform(whyScrollProgress, [0.10, 0.24], ["45vw", "0px"]);

  const card6X = useTransform(whyScrollProgress, [0.12, 0.26], ["-35vw", "0px"]);
  const card6Y = useTransform(whyScrollProgress, [0.12, 0.26], ["35vh", "0px"]);

  const card7Y = useTransform(whyScrollProgress, [0.14, 0.28], ["45vh", "0px"]);

  const card8X = useTransform(whyScrollProgress, [0.16, 0.30], ["35vw", "0px"]);
  const card8Y = useTransform(whyScrollProgress, [0.16, 0.30], ["35vh", "0px"]);

  return (
    <>
      {/* ── 10.8 Why Aurelius ──────────────────────────────────────────────── */}
      <section
        ref={whyScrollRef}
        className="relative lg:h-[200vh] bg-imperial-black overflow-visible"
      >
        {/* Desktop Sticky Viewport */}
        <div className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden items-center justify-center bg-imperial-black z-20">
          {/* Background Image (Static - no parallax to prevent scroll gaps) */}
          <div className="absolute inset-0 z-0 origin-center opacity-30">
            <Image
              src="/plane2.jpg"
              alt="Why Aurelius"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Overlay to blend background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c] z-10 pointer-events-none" />

          {/* 3x3 Responsive Bento Grid */}
          <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-16 py-12 grid grid-cols-3 grid-rows-3 gap-8 items-center">

            {/* Card I (Top Left) */}
            <motion.div
              style={{ x: card1X, y: card1Y }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[0].image}
                  alt={DIFFERENTIATORS[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[0].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[0].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[0].description}
                </p>
              </div>
            </motion.div>

            {/* Card II (Top Center) */}
            <motion.div
              style={{ y: card2Y }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[1].image}
                  alt={DIFFERENTIATORS[1].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[1].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[1].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[1].description}
                </p>
              </div>
            </motion.div>

            {/* Card III (Top Right) */}
            <motion.div
              style={{ x: card3X, y: card3Y }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[2].image}
                  alt={DIFFERENTIATORS[2].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[2].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[2].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[2].description}
                </p>
              </div>
            </motion.div>

            {/* Card IV (Middle Left) */}
            <motion.div
              style={{ x: card4X }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[3].image}
                  alt={DIFFERENTIATORS[3].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[3].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[3].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[3].description}
                </p>
              </div>
            </motion.div>

            {/* Centered Title Content Cell */}
            <div className="flex flex-col items-center justify-center text-center p-4 self-center z-30 select-none">
              <h2 className="font-heading text-[clamp(2.5rem,4.5vw,4.2rem)] font-normal tracking-[0.1em] uppercase text-marble-white mb-4">
                Why Aurelius
              </h2>
              <div className="h-[1px] w-20 bg-architectural-chrome" />
            </div>

            {/* Card V (Middle Right) */}
            <motion.div
              style={{ x: card5X }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[4].image}
                  alt={DIFFERENTIATORS[4].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[4].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[4].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[4].description}
                </p>
              </div>
            </motion.div>

            {/* Card VI (Bottom Left) */}
            <motion.div
              style={{ x: card6X, y: card6Y }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[5].image}
                  alt={DIFFERENTIATORS[5].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[5].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[5].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[5].description}
                </p>
              </div>
            </motion.div>

            {/* Card VII (Bottom Center) */}
            <motion.div
              style={{ y: card7Y }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[6].image}
                  alt={DIFFERENTIATORS[6].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[6].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[6].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[6].description}
                </p>
              </div>
            </motion.div>

            {/* Card VIII (Bottom Right) */}
            <motion.div
              style={{ x: card8X, y: card8Y }}
              className="group relative flex flex-col justify-between p-6 bg-black/60 border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 select-none overflow-hidden h-full"
            >
              <div className="absolute inset-0 z-0 opacity-60 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={DIFFERENTIATORS[7].image}
                  alt={DIFFERENTIATORS[7].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

              <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium mb-2">{DIFFERENTIATORS[7].number}</span>
              <div className="relative z-20">
                <h3 className="font-heading text-[clamp(0.9rem,1.2vw,1.1rem)] font-normal tracking-[0.08em] uppercase text-travertine-stone group-hover:text-marble-white transition-colors duration-300 mb-2">
                  {DIFFERENTIATORS[7].title}
                </h3>
                <p className="font-body text-[clamp(0.72rem,0.85vw,0.8rem)] leading-[1.6] text-travertine-stone/70">
                  {DIFFERENTIATORS[7].description}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Mobile Viewport - clean scrolling column stack */}
        <div className="lg:hidden container mx-auto px-6 py-24">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              Why Aurelius
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </div>

          <div className="flex flex-col gap-6">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.number}
                className="group relative flex gap-4 p-6 bg-black/50 border border-white/20 overflow-hidden"
              >
                <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/60 to-[#0a0a0c]/30 z-10 pointer-events-none" />

                <span className="relative z-20 font-heading text-lg tracking-[0.1em] text-travertine-stone/30 font-medium shrink-0 mt-1">
                  {item.number}
                </span>
                <div className="relative z-20">
                  <h3 className="font-heading text-base font-normal tracking-[0.08em] uppercase text-travertine-stone mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs leading-[1.8] text-travertine-stone/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10.9 What Working With Aurelius Looks Like ────────────────────── */}
      <section ref={containerRef} className="relative z-30 bg-imperial-black py-24 md:py-32 border-t border-white/5 overflow-hidden">
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
