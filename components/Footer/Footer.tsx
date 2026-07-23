'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-imperial-black pt-32 pb-16 border-t border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-8 relative z-10">
        
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
          
          <div className="flex flex-col gap-4">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome mb-4">Contact</h4>
            <a href="mailto:stewardship@aureliusaviation.com" className="font-heading text-sm tracking-[0.05em] text-travertine-stone hover:text-marble-white transition-colors duration-300">
              stewardship@aureliusaviation.com
            </a>
            <span className="font-heading text-sm tracking-[0.05em] text-travertine-stone">
              +1 (800) 555-0199
            </span>
          </div>

          <div className="flex flex-col gap-4 md:items-center">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome mb-4">Headquarters</h4>
            <span className="font-heading text-sm tracking-[0.05em] text-travertine-stone md:text-center">
              100 Aviation Boulevard<br/>
              Geneva, Switzerland
            </span>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome mb-4">Legal</h4>
            <a href="#" className="font-heading text-sm tracking-[0.05em] text-travertine-stone hover:text-marble-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-heading text-sm tracking-[0.05em] text-travertine-stone hover:text-marble-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>

        </div>

        <div className="mt-32 text-center border-t border-white/5 pt-8">
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-architectural-chrome/50">
            © {new Date().getFullYear()} Aurelius Aviation. Permanence Over Trends.
          </span>
        </div>

      </div>
    </footer>
  );
}
