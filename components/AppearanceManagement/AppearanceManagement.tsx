'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CARDS = [
  {
    id: '01',
    title: 'Exterior Care',
    description: 'Restoring and preserving the aerodynamic integrity and visual authority of your aircraft’s exterior.',
    bgImage: '/hero.jpg' // Reusing available assets as a placeholder
  },
  {
    id: '02',
    title: 'Cabin Care',
    description: 'Maintaining the pristine condition of interior materials, from exotic woods to fine leathers, ensuring a flawless sanctuary.',
    bgImage: '/sky.png'
  },
  {
    id: '03',
    title: 'Presentation Services',
    description: 'Upholding exact standards for pre-flight and post-flight readiness. Every detail curated for perfect presence.',
    bgImage: '/window.png'
  }
];

export default function AppearanceManagement() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll progress within the 400vh container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // We have 3 cards. The horizontal container needs to move left by an amount that shows all cards.
  // We'll slide it by -66.66% so the third card ends up on screen.
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-imperial-black">
      {/* Sticky container that stays in view while scrolling horizontally */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Title overlay that stays in place or fades out slightly */}
        <div className="absolute top-16 left-8 md:left-16 z-20 mix-blend-difference pointer-events-none">
          <motion.h2 
            className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-normal tracking-[0.15em] uppercase text-marble-white"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0.2]) }}
          >
            Appearance Management
          </motion.h2>
          <div className="mt-4 h-[1px] w-[60px] bg-architectural-chrome"></div>
        </div>

        {/* The horizontal sliding track */}
        <motion.div 
          className="flex h-[75vh] w-[300vw]"
          style={{ x: xTranslate }}
        >
          {CARDS.map((card, index) => (
            <div 
              key={card.id} 
              className="relative flex h-full w-screen items-center justify-center px-8 md:px-16"
            >
              <div className="relative h-full w-full max-w-[1400px] overflow-hidden group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                ></div>
                
                {/* Overlay for darkness */}
                <div className="absolute inset-0 bg-imperial-black/60 bg-gradient-to-t from-imperial-black/90 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-16 left-8 md:bottom-24 md:left-16 max-w-[600px]">
                  <div className="mb-6 font-body text-[clamp(2rem,5vw,4rem)] font-light tracking-widest text-architectural-chrome/50">
                    {card.id}
                  </div>
                  <h3 className="mb-6 font-heading text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[0.1em] uppercase text-marble-white">
                    {card.title}
                  </h3>
                  <p className="font-heading text-[clamp(1rem,1.5vw,1.25rem)] font-normal tracking-[0.05em] leading-[1.6] text-travertine-stone">
                    {card.description}
                  </p>
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
            ></motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
