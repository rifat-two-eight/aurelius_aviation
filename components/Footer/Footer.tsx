'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-imperial-black pt-32 pb-16 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Request Assessment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center mb-40"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-architectural-chrome mb-6">
            Initiate Contact
          </span>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[0.1em] uppercase text-marble-white mb-10">
            Request an Assessment
          </h2>
          <p className="font-heading text-[clamp(1rem,1.2vw,1.25rem)] font-normal tracking-[0.05em] leading-[1.8] text-travertine-stone max-w-[600px] mb-16">
            For ownership and operations that demand uncompromising permanence. Let us evaluate your asset and outline a protocol of monumental care.
          </p>

          <button className="group relative overflow-hidden border border-white/20 bg-transparent px-12 py-5 transition-colors duration-500 hover:border-marble-white">
            <span className="relative z-10 font-body text-xs tracking-[0.3em] uppercase text-marble-white transition-colors duration-500">
              Assume Stewardship
            </span>
            <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-white/5 transition-transform duration-500 group-hover:translate-x-0"></div>
          </button>
        </motion.div>

        {/* Footer Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 border-t border-white/10 pt-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-6 md:col-span-5 lg:col-span-4">
            <span className="font-heading text-2xl tracking-[0.2em] font-medium text-marble-white uppercase">
              Aurelius
            </span>
            <p className="font-heading text-sm tracking-[0.05em] leading-relaxed text-travertine-stone max-w-sm">
              Modern continuation of a great civilization. We preserve aviation assets for ownership and operations that demand uncompromising permanence.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a href="mailto:stewardship@aureliusaviation.com" className="font-heading text-sm tracking-[0.05em] text-marble-white hover:text-brushed-platinum transition-colors">
                stewardship@aureliusaviation.com
              </a>
              <span className="font-heading text-sm tracking-[0.05em] text-marble-white">
                +1 (800) 555-0199
              </span>
              <span className="font-heading text-xs tracking-[0.1em] text-architectural-chrome uppercase mt-2">
                Global Operations
              </span>
            </div>
          </div>

          {/* Navigate Column */}
          <div className="flex flex-col gap-4 md:col-span-4 lg:col-span-4 lg:ml-auto">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome mb-2">Navigate</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {['About', 'Services', 'Industries', 'The Aurelius Standard', 'Process', 'Insights', 'FAQs', 'Contact'].map((link) => (
                <a key={link} href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="font-heading text-sm tracking-[0.05em] text-travertine-stone hover:text-marble-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-4 lg:items-end">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome mb-2">Legal</h4>
            {['Privacy Policy', 'Terms and Conditions', 'Cookie Policy', 'Accessibility'].map((link) => (
              <a key={link} href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="font-heading text-sm tracking-[0.05em] text-travertine-stone hover:text-marble-white transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>

        </div>

        <div className="mt-24 text-center md:text-left border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-architectural-chrome/50">
            © {new Date().getFullYear()} Aurelius Aviation.
          </span>
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-architectural-chrome/50">
            Permanence Over Trends
          </span>
        </div>

      </div>
    </footer>
  );
}
