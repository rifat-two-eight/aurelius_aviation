'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const SERVICES = [
  {
    id: 'I',
    title: 'Aircraft Appearance Management',
    description: 'A coordinated system for assessing, planning, servicing, documenting and maintaining aircraft presentation.',
    outcome: 'Defined standard held consistently over time.',
    href: '/services/appearance',
    image: '/offer1.jpg',
  },
  {
    id: 'II',
    title: 'Exterior Appearance Care',
    description: 'Controlled exterior cleaning and surface care designed around aircraft materials, condition and operating environment.',
    outcome: 'Protected surfaces and maintained visual authority.',
    href: '/services/exterior',
    image: '/offer2.jpg',
  },
  {
    id: 'III',
    title: 'Executive Cabin Care',
    description: 'Detailed cabin presentation and material-sensitive care for premium passenger environments.',
    outcome: 'A passenger environment that reflects ownership standards.',
    href: '/services/cabin',
    image: '/offer3.jpg',
  },
  {
    id: 'IV',
    title: 'Paint Enhancement & Correction',
    description: 'Measured improvement of eligible painted surfaces following a cosmetic-condition assessment.',
    outcome: 'Improved surface clarity where condition and scope permit.',
    href: '/services/paint',
    image: '/offer4.jpg',
  },
  {
    id: 'V',
    title: 'Protective Coatings',
    description: 'Surface-protection options applied only after compatibility, condition and scope are established.',
    outcome: 'Verified protection applied with documented process.',
    href: '/services/coatings',
    image: '/offer5.jpg',
  },
  {
    id: 'VI',
    title: 'Brightwork Care',
    description: 'Evaluation and restoration-oriented care for eligible polished-metal surfaces.',
    outcome: 'Polished finishes maintained to a consistent standard.',
    href: '/services/brightwork',
    image: '/offer6.jpg',
  },
  {
    id: 'VII',
    title: 'Delivery & Pre-Sale Presentation',
    description: 'Appearance preparation for handover, photography, marketing, showing or ownership transition.',
    outcome: 'Presentation-ready condition at point of transaction.',
    href: '/services/delivery',
    image: '/offer7.jpg',
  },
  {
    id: 'VIII',
    title: 'Recurring Appearance Programmes',
    description: 'Scheduled service plans that maintain a defined standard throughout the year.',
    outcome: 'Consistent presentation without reactive servicing.',
    href: '/services/programmes',
    image: '/offer8.jpg',
  },
];

export default function ServicesSection() {
  const trackRef = useRef<HTMLElement>(null);
  const total = SERVICES.length;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${((total - 1) / total) * 100}%`]
  );

  const titleOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0.25]);

  return (
    <section
      ref={trackRef}
      className="relative bg-imperial-black"
      style={{ height: `${total * 120}vh` }}
    >
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Section title — fades out as cards scroll */}
        <div className="absolute top-16 left-8 md:left-16 z-20 pointer-events-none">
          <motion.p
            className="mb-4 font-body text-[0.72rem] tracking-[0.45em] uppercase text-architectural-chrome"
            style={{ opacity: titleOpacity }}
          >
            Services Overview
          </motion.p>
          <motion.h3
            className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-[0.1em] uppercase text-marble-white"
            style={{ opacity: titleOpacity }}
          >
            What We Offer
          </motion.h3>
        </div>

        {/* Horizontal sliding track */}
        <motion.div
          className="flex flex-row w-max gap-32 px-6 md:px-12"
          style={{ x: xTranslate, willChange: "transform" }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="w-[85vw] md:w-[70vw] lg:w-[50vw] max-w-[950px] flex-shrink-0"
            >
              <div className="w-full group relative flex flex-col md:flex-row overflow-hidden border border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 h-[50vh]">

                {/* Left: Image */}
                <div className="relative w-full md:w-1/2 h-44 md:h-full overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="absolute inset-0 bg-imperial-black/40" />
                  <span className="absolute top-6 left-6 font-body text-[clamp(2.5rem,5vw,4.5rem)] font-light tracking-widest text-white/40 leading-none">
                    {service.id}
                  </span>
                </div>

                {/* Right: Text */}
                <div className="flex flex-col justify-between w-full md:w-1/2 p-6 md:p-8 gap-4 h-full">
                  <div>
                    <h4 className="font-heading text-[clamp(1.2rem,1.8vw,1.8rem)] font-normal tracking-[0.08em] uppercase text-marble-white leading-snug mb-2">
                      {service.title}
                    </h4>
                    <p className="font-body text-[clamp(0.8rem,1vw,0.92rem)] tracking-[0.02em] leading-[1.7] text-travertine-stone/85">
                      {service.description}
                    </p>
                  </div>
                  <div className="border-t border-white/8 pt-4">
                    <p className="font-body text-[0.68rem] tracking-[0.1em] uppercase text-architectural-chrome mb-3">
                      Outcome — {service.outcome}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.2em] uppercase text-marble-white/50 hover:text-marble-white transition-colors duration-300 group/link"
                    >
                      Learn More
                      <span className="h-[1px] w-8 bg-current inline-block transition-all duration-300 group-hover/link:w-12" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-8 left-8 md:left-16 z-20 flex items-center gap-4">
          <span className="font-body text-xs tracking-[0.3em] text-architectural-chrome uppercase">Explore</span>
          <div className="h-[1px] w-[150px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-marble-white origin-left"
              style={{ scaleX: scrollYProgress, width: '100%' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
