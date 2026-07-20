export default function Capabilities() {
  const capabilities = [
    {
      title: "Asset Preservation",
      description: "Comprehensive mitigation of environmental degradation across all exterior surfaces."
    },
    {
      title: "Surface Restoration",
      description: "Precision correction of paint systems and brightwork to factory-grade parameters."
    },
    {
      title: "Interior Stewardship",
      description: "Meticulous sanitization and material conditioning for high-touch and luxury surfaces."
    },
    {
      title: "Ceramic Shielding",
      description: "Application of molecular barriers to ensure long-term aerodynamic and visual integrity."
    }
  ];

  return (
    <section className="relative border-t border-white/5 py-40">
      <div className="mx-auto flex max-w-[1200px] flex-col px-8">
        <h2 className="relative mb-24 font-heading text-[clamp(2rem,4vw,3rem)] font-normal tracking-[0.15em] uppercase text-marble-white">
          Core Capabilities
        </h2>
        
        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="group border-b border-white/5 pb-10">
              <span className="mb-4 block font-body text-xs tracking-[0.3em] uppercase text-architectural-chrome opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                0{idx + 1}
              </span>
              <h3 className="mb-4 font-heading text-xl tracking-[0.05em] uppercase text-marble-white">
                {cap.title}
              </h3>
              <p className="font-body text-sm leading-loose tracking-wide text-travertine-stone">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
