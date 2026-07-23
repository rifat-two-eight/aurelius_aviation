'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  const tenets = [
    { primary: "Order", secondary: "Chaos" },
    { primary: "Discipline", secondary: "Indulgence" },
    { primary: "Excellence", secondary: "Mediocrity" },
    { primary: "Legacy", secondary: "Profit" },
    { primary: "Permanence", secondary: "Trends" },
    { primary: "Stewardship", secondary: "Ownership" }
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/sky.png')" }}
    >
      {/* Dark overlay to ensure text is readable over the sky background */}
      <div className="absolute inset-0 bg-imperial-black/60 z-0"></div>

      <div className="relative z-20 mx-auto flex max-w-[1200px] flex-col items-center px-8 py-40">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-20 text-center font-heading text-[clamp(2rem,4vw,3rem)] font-normal tracking-[0.15em] uppercase text-marble-white after:absolute after:-bottom-6 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-architectural-chrome"
        >
          Our Philosophy
        </motion.h2>

        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-40 md:gap-y-20">
          {tenets.map((tenet, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-heading text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.2] tracking-[0.1em] uppercase text-marble-white">
                {tenet.primary}
              </span>
              <span className="my-4 font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome opacity-70">
                over
              </span>
              <span className="font-heading text-[clamp(1rem,1.5vw,1.5rem)] tracking-[0.05em] uppercase text-travertine-stone">
                {tenet.secondary}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
