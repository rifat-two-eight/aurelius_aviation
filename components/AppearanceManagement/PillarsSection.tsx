'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const PILLARS = [
  {
    number: 'I',
    title: 'Presentation',
    description:
      'Upholding owner expectations, passenger experience, charter readiness, corporate standards, photography and showing readiness, and delivery condition. Every visible element reflects the standard you have set.',
    href: '/services/appearance',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-architectural-chrome" stroke="currentColor" strokeWidth={1.2}>
        <rect x="6" y="10" width="28" height="20" rx="1" />
        <path d="M6 16h28M14 10v4M26 10v4" />
      </svg>
    ),
  },
  {
    number: 'II',
    title: 'Preservation',
    description:
      'Protecting paint finishes, brightwork, glazing, cabin materials and high-contact areas through preventive attention, correct product selection and documented process execution before deterioration requires correction.',
    href: '/services/preservation',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-architectural-chrome" stroke="currentColor" strokeWidth={1.2}>
        <path d="M20 6 L34 13 V22 C34 29 27 35 20 37 C13 35 6 29 6 22 V13 L20 6Z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
  },
  {
    number: 'III',
    title: 'Documentation',
    description:
      `Before-service photography, condition observations, scope records, completion confirmation, recommendations, service history and issue escalation — a complete, accessible record of your aircraft's condition over time.`,
    href: '/services/documentation',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-architectural-chrome" stroke="currentColor" strokeWidth={1.2}>
        <rect x="9" y="5" width="22" height="30" rx="1" />
        <path d="M14 13h12M14 19h12M14 25h8" />
      </svg>
    ),
  },
  {
    number: 'IV',
    title: 'Continuity',
    description:
      'Scheduled care, defined standards, consistent procedures, planned corrective work, seasonal considerations and reduced reactive servicing — converting irregular maintenance into a reliable, managed programme.',
    href: '/services/continuity',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-architectural-chrome" stroke="currentColor" strokeWidth={1.2}>
        <circle cx="20" cy="20" r="14" />
        <path d="M20 10v10l6 4" />
      </svg>
    ),
  },
];

const CYCLE_STAGES = ['Assess', 'Plan', 'Execute', 'Verify', 'Document', 'Review', 'Continue'];

function CycleDiagram() {
  const shouldReduceMotion = useReducedMotion();
  const cx = 120, cy = 120, r = 80;
  const total = CYCLE_STAGES.length;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <svg viewBox="0 0 240 240" className="w-[440px] h-[440px] sm:w-[580px] sm:h-[480px] max-w-full h-auto">
        <g
          className={shouldReduceMotion ? undefined : 'cycle-spin'}
          style={{ transformOrigin: '50% 50%' }}
        >
          <circle cx={cx} cy={cy} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={1} fill="none" />
          <circle cx={cx} cy={cy} r={r - 22} stroke="rgba(255,255,255,0.04)" strokeWidth={1} fill="none" />

          {CYCLE_STAGES.map((stage, i) => {
            const angle = (2 * Math.PI * i) / total - Math.PI / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            const nextAngle = (2 * Math.PI * ((i + 1) % total)) / total - Math.PI / 2;
            const nx = cx + r * Math.cos(nextAngle);
            const ny = cy + r * Math.sin(nextAngle);
            const lx = cx + (r + 20) * Math.cos(angle);
            const ly = cy + (r + 20) * Math.sin(angle);

            return (
              <g key={stage}>
                <line
                  x1={x} y1={y} x2={nx} y2={ny}
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth={0.8}
                  strokeDasharray="3 3"
                />
                <circle cx={x} cy={y} r={4} fill="#b0a99a" opacity={0.7} />
                <g className={shouldReduceMotion ? undefined : 'cycle-counter'}>
                  <text
                    x={lx} y={ly}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={8}
                    fill="rgba(255,255,255,0.45)"
                    fontFamily="sans-serif"
                    letterSpacing={1.5}
                  >
                    {stage.toUpperCase()}
                  </text>
                </g>
              </g>
            );
          })}
        </g>

        <text x={cx} y={cy - 7} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.3)" fontFamily="sans-serif" letterSpacing={2}>
          AURELIUS
        </text>
        <text x={cx} y={cy + 8} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.2)" fontFamily="sans-serif" letterSpacing={1.5}>
          7-STAGE CYCLE
        </text>
      </svg>
    </div>
  );
}

export default function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const headingY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-24 md:py-32 overflow-hidden border-b border-white/10">

      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-center opacity-100"
        style={{ y: bgY, scale: bgScale, willChange: "transform" }}
      >
        <Image
          src="/offer2.jpg"
          alt="Appearance Management"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-black/95 via-imperial-black/75 to-imperial-black z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">

          {/* Left Side: Category Intro */}
          <motion.div style={{ y: headingY, opacity: headingOpacity }}>
            <p className="mb-6 font-body text-[0.72rem] tracking-[0.45em] uppercase text-architectural-chrome">
              Appearance Management
            </p>
            <h2 className="mb-8 font-heading text-[clamp(2.2rem,4.5vw,4rem)] font-normal tracking-[0.06em] uppercase text-marble-white leading-[1.1]">
              Aircraft Appearance,<br />Managed.
            </h2>
            <div className="h-[1px] w-12 bg-architectural-chrome mb-8" />
            <p className="font-body text-[clamp(0.9rem,1.3vw,1.05rem)] tracking-[0.02em] leading-[1.85] text-travertine-stone mb-6">
              Aircraft appearance changes continuously through use, storage, environment, passenger traffic and
              inconsistent care. One-time services resolve immediate issues but do not create consistency.
            </p>
            <p className="font-body text-[clamp(0.9rem,1.3vw,1.05rem)] tracking-[0.02em] leading-[1.85] text-travertine-stone/70">
              Aurelius adds assessment, planning, execution, verification and documentation — converting isolated
              services into a defined standard held consistently over time.
            </p>
          </motion.div>

          {/* Right Side: Cycle Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: false, margin: '-80px' }}
            className="flex justify-center items-center"
          >
            <CycleDiagram />
          </motion.div>
        </div>

        {/* ── What Aurelius Manages ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: '-80px' }}
          className="mb-8"
        >
          <h3 className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-[0.1em] uppercase text-marble-white mb-2">
            What Aurelius Manages
          </h3>
          <div className="h-[1px] w-12 bg-architectural-chrome" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: 'easeOut' }}
              viewport={{ once: false, margin: '-60px' }}
              className="group relative bg-black/50 border border-white/30 p-8 md:p-10 hover:bg-white/[0.025] transition-colors duration-500"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="font-body text-[2.5rem] font-light tracking-widest text-white/20 leading-none">
                  {pillar.number}
                </span>
                <div className="opacity-40 group-hover:opacity-70 transition-opacity duration-400">
                  {pillar.icon}
                </div>
              </div>
              <h4 className="mb-4 font-heading text-[clamp(1.1rem,2vw,1.5rem)] font-normal tracking-[0.1em] uppercase text-marble-white">
                {pillar.title}
              </h4>
              <p className="font-body text-[0.85rem] tracking-[0.02em] leading-[1.8] text-travertine-stone/75 mb-6">
                {pillar.description}
              </p>
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-marble-white/40 hover:text-marble-white transition-colors duration-300"
              >
                Learn More
                <span className="h-[1px] w-5 bg-current inline-block transition-all duration-300 group-hover:w-8" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
