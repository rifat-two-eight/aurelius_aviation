export default function Methodology() {
  const methods = [
    {
      numeral: "I",
      title: "Standardization",
      description: "Establishing baseline metrics for aesthetic and material integrity before any intervention."
    },
    {
      numeral: "II",
      title: "Preservation",
      description: "Executing meticulous procedures to restore and protect the asset against elemental degradation."
    },
    {
      numeral: "III",
      title: "Continuity",
      description: "Maintaining strict rotational oversight to ensure the standard endures indefinitely."
    }
  ];

  return (
    <section className="relative border-t border-white/5 py-40">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-8">
        <h2 className="relative mb-32 text-center font-heading text-[clamp(2rem,4vw,3rem)] font-normal tracking-[0.15em] uppercase text-marble-white after:absolute after:-bottom-6 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-architectural-chrome">
          Methodology
        </h2>

        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {methods.map((method, idx) => (
            <div key={idx} className="flex flex-col items-center border-l border-white/10 px-8 text-center md:items-start md:text-left">
              <span className="mb-6 font-heading text-4xl font-light text-architectural-chrome opacity-50">
                {method.numeral}
              </span>
              <h3 className="mb-6 font-heading text-xl tracking-[0.1em] uppercase text-marble-white">
                {method.title}
              </h3>
              <p className="font-body text-sm leading-relaxed tracking-wide text-travertine-stone">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
