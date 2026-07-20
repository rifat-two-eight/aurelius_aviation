export default function Services() {
  const services = [
    {
      name: "Routine Preservation Protocol",
      details: "Scheduled aesthetic maintenance to ensure the asset remains in a state of perpetual readiness."
    },
    {
      name: "Pre-Flight Presentation",
      details: "Rigorous pre-departure inspection and conditioning to guarantee a flawless boarding experience."
    },
    {
      name: "Deep Restoration Assignment",
      details: "An exhaustive, multi-day intervention to reverse material fatigue and reinstate baseline excellence."
    }
  ];

  return (
    <section className="relative border-t border-white/5 py-40">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-8 text-center">
        <h2 className="relative mb-24 font-heading text-[clamp(2rem,4vw,3rem)] font-normal tracking-[0.15em] uppercase text-marble-white after:absolute after:-bottom-6 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-architectural-chrome">
          Service Protocols
        </h2>
        
        <div className="flex w-full flex-col gap-8 md:w-3/4 lg:w-2/3">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center border border-white/5 bg-[#0a0a0c] p-12 transition-colors duration-500 hover:bg-[#0f0f12]"
            >
              <h3 className="mb-4 font-heading text-lg tracking-[0.1em] uppercase text-marble-white">
                {service.name}
              </h3>
              <p className="font-body text-sm leading-relaxed tracking-wide text-travertine-stone">
                {service.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
