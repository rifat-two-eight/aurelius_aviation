'use client';

import { useRef, useState } from 'react';
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
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const { scrollYProgress: whyScrollProgress } = useScroll({
    target: whyScrollRef,
    offset: ['start end', 'center center'],
  });

  // Staggered convergent translations: cards start widely spaced out ("dure dure")
  // and pull inward to lock into the tight cohesive bento grid on scroll
  const card1X = useTransform(whyScrollProgress, [0.10, 0.50], ["-70vw", "0px"]);
  const card1Y = useTransform(whyScrollProgress, [0.10, 0.50], ["-70vh", "0px"]);

  const card2Y = useTransform(whyScrollProgress, [0.15, 0.55], ["-85vh", "0px"]);

  const card3X = useTransform(whyScrollProgress, [0.20, 0.60], ["70vw", "0px"]);
  const card3Y = useTransform(whyScrollProgress, [0.20, 0.60], ["-70vh", "0px"]);

  const card4X = useTransform(whyScrollProgress, [0.25, 0.65], ["-85vw", "0px"]);

  const card5X = useTransform(whyScrollProgress, [0.30, 0.70], ["85vw", "0px"]);

  const card6X = useTransform(whyScrollProgress, [0.35, 0.75], ["-70vw", "0px"]);
  const card6Y = useTransform(whyScrollProgress, [0.35, 0.75], ["70vh", "0px"]);

  const card7Y = useTransform(whyScrollProgress, [0.40, 0.80], ["85vh", "0px"]);

  const card8X = useTransform(whyScrollProgress, [0.45, 0.85], ["70vw", "0px"]);
  const card8Y = useTransform(whyScrollProgress, [0.45, 0.85], ["70vh", "0px"]);

  return (
    <>
      <section
        ref={whyScrollRef}
        className="relative min-h-screen bg-imperial-black overflow-hidden flex items-center justify-center py-24 md:py-32"
      >
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

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid relative z-20 w-full h-[950px] max-w-[1750px] mx-auto px-20 py-12 grid-cols-3 grid-rows-3 gap-6 items-center">

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

        {/* Mobile Viewport - clean scrolling column stack */}
        <div className="lg:hidden container mx-auto px-6 py-24 relative z-20">
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
            <span className="font-body text-[0.65rem] tracking-[0.45em] uppercase text-architectural-chrome mb-4 block">
              Operational Roadmap
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.08em] uppercase text-marble-white mb-4">
              The Engagement Model
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome" />
          </motion.div>

          {/* Chronograph Dial Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left Column: Chronograph Dial Selector (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
              <div className="relative w-[340px] h-[340px] border border-white/5 bg-black/40 rounded-full flex items-center justify-center p-8">

                {/* Decorative ticking outer circle */}
                <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_100s_linear_infinite]" />

                {/* Dial Graphic */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/5 relative z-10">
                  {/* Dial ticks */}
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="0.5, 3.5" fill="none" />
                  <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5, 5" fill="none" />

                  {/* Central compass core details */}
                  <circle cx="50" cy="50" r="8" stroke="rgba(212,175,55,0.2)" strokeWidth="1" fill="none" />
                  <circle cx="50" cy="50" r="2" fill="#d4af37" />

                  {/* Circular Roman Numbers placements at the outer edge of the dial */}
                  {PROCESS_STEPS.map((step, i) => {
                    const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
                    const x = 50 + 37.5 * Math.cos(angle);
                    const y = 50 + 37.5 * Math.sin(angle);
                    const isActive = i === activeStep;
                    return (
                      <text
                        key={step.step}
                        x={x}
                        y={y + 2.5}
                        textAnchor="middle"
                        fill={isActive ? "#d4af37" : "rgba(255, 255, 255, 0.25)"}
                        fontSize="6"
                        fontWeight={isActive ? "600" : "400"}
                        className="font-heading transition-colors duration-300 select-none cursor-pointer"
                        onClick={() => setActiveStep(i)}
                      >
                        {step.step}
                      </text>
                    );
                  })}

                  {/* Chronograph Pointer Needle: Fixed base, only top rotates */}
                  <motion.g
                    animate={{ rotate: activeStep * (360 / 7) }}
                    transition={{ type: "spring", stiffness: 95, damping: 15 }}
                    style={{ transformOrigin: "50% 50%" }}
                  >
                    {/* Invisible boundary helper to anchor the transformOrigin center to exactly 50,50 */}
                    <rect x="0" y="0" width="100" height="100" fill="none" pointerEvents="none" />

                    {/* Tapered pointer shaft starting exactly from center */}
                    <path
                      d="M49.6,50 L49.8,27 L50,24 L50.2,27 L50.4,50 Z"
                      fill="#d4af37"
                    />
                  </motion.g>

                  {/* Dial Center Pinned cap: Fixed at absolute center */}
                  <circle cx="50" cy="50" r="3.2" fill="#d4af37" />
                  <circle cx="50" cy="50" r="1.2" fill="#0d0d0f" />
                </svg>

              </div>
            </div>

            {/* Right Column: Interactive Accordion Timeline List */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={step.step}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`group relative p-6 border transition-all duration-500 cursor-pointer overflow-hidden ${isActive
                        ? 'bg-gradient-to-br from-white/[0.02] to-white/[0.005] border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
                        : 'bg-transparent border-white/5 hover:border-white/10'
                      }`}
                  >
                    {/* Active Inset Highlight */}
                    {isActive && (
                      <div className="absolute inset-1.5 border border-architectural-chrome/15 pointer-events-none" />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      {/* Left side info */}
                      <div className="flex items-center gap-6">
                        <span className={`font-heading text-xl font-light transition-colors duration-500 ${isActive ? 'text-[#d4af37]' : 'text-white/10 group-hover:text-white/20'}`}>
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <div className={`h-4 w-[1px] transition-colors duration-500 ${isActive ? 'bg-[#d4af37]/40' : 'bg-white/10'}`} />
                        <h3 className={`font-heading text-base tracking-[0.08em] uppercase transition-colors duration-500 ${isActive ? 'text-marble-white' : 'text-travertine-stone/60 group-hover:text-travertine-stone'}`}>
                          {step.title}
                        </h3>
                      </div>

                      {/* Right side phase mark */}
                      <span className={`font-heading text-[0.65rem] tracking-[0.25em] transition-colors duration-500 ${isActive ? 'text-[#d4af37]' : 'text-architectural-chrome/40'}`}>
                        PHASE {step.step}
                      </span>
                    </div>

                    {/* Accordion expand/collapse description with stable expanded height */}
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 64 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-xs md:text-sm leading-relaxed text-travertine-stone/85 pt-4 pl-[45px] max-w-2xl">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
