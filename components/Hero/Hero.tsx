export default function Hero() {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-imperial-black">
      {/* Background Image */}
      <div 
        className="absolute left-0 top-0 z-10 h-full w-full animate-cinematic-zoom bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-gradient-to-b from-[#0a0a0c33] via-[#0a0a0c99] to-[#0a0a0cf2]"></div>
      
      {/* Content */}
      <div className="relative z-30 mt-[5vh] flex flex-col items-center gap-10 px-8 text-center">
        <div 
          className="animate-slow-fade-in font-body text-[clamp(0.75rem,1.2vw,0.9rem)] font-light tracking-[0.5em] uppercase text-architectural-chrome opacity-0" 
          style={{ animationDelay: '1.5s' }}
        >
          Est. MMXXIV
        </div>
        
        <h1 
          className="animate-slow-fade-in font-heading text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[1.05] tracking-[0.12em] uppercase text-marble-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0" 
          style={{ animationDelay: '0.5s' }}
        >
          Aurelius
        </h1>
        
        <div 
          className="animate-slow-fade-in max-w-[600px] font-heading text-[clamp(1rem,2vw,1.5rem)] font-normal tracking-[0.05em] text-travertine-stone opacity-0" 
          style={{ animationDelay: '2.5s' }}
        >
          We preserve aviation assets.
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-6 animate-slow-reveal opacity-0" 
        style={{ animationDelay: '4s' }}
      >
        <span className="font-body text-[0.7rem] tracking-[0.3em] uppercase text-architectural-chrome">
          Discover Legacy
        </span>
        <div className="h-[80px] w-[1px] bg-gradient-to-b from-architectural-chrome to-transparent"></div>
      </div>
    </main>
  );
}
