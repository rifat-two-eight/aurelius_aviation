

export default function Legacy() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-20 mx-auto flex max-w-[1200px] flex-col items-center px-8 py-40">
        <h2 className="relative mb-20 text-center font-heading text-[clamp(2rem,4vw,3rem)] font-normal tracking-[0.15em] uppercase text-marble-white after:absolute after:-bottom-6 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-architectural-chrome">
          The Legacy
        </h2>
        
        <div className="flex max-w-[800px] flex-col gap-12 text-center">
          <p className="m-0 font-heading text-[clamp(1.4rem,2.5vw,2rem)] font-normal leading-[1.6] tracking-[0.02em] text-warm-ivory">
            We do not merely provide services; we assume stewardship responsibilities. 
            Our commitment is to continuity—ensuring that greatness endures across generations.
          </p>
          <p className="font-body text-[clamp(0.9rem,1.2vw,1rem)] font-light leading-loose tracking-[0.05em] text-travertine-stone">
            We uphold presentation standards with uncompromising precision, acting as guardians of your most valuable assets. 
            This is not a trend. This is permanence.
          </p>
        </div>
      </div>
    </section>
  );
}
