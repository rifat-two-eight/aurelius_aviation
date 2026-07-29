import PillarsSection from './PillarsSection';
import ServicesSection from './ServicesSection';

export default function AppearanceManagement() {
  return (
    <>
      {/* Part 1: Aircraft Appearance Intro + Cycle Diagram + Four Pillars */}
      <PillarsSection />

      {/* Part 2: What We Offer — Horizontal Pinned Scroll */}
      <ServicesSection />
    </>
  );
}