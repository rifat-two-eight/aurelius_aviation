
import Hero from '@/components/Hero/Hero';
import SequenceBackground from '@/components/SequenceBackground';
import Methodology from '../components/Methodology';
import Philosophy from '@/components/Philosophy/Philosophy';
import Legacy from '@/components/Legacy/Legacy';
import Capabilities from '@/components/Capabilities/Capabilities';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <div className="app-container bg-imperial-black">
      <Hero />
      <SequenceBackground />
      <div className="relative z-10 w-full">
        <Philosophy />
        <Legacy />
        <Methodology />
        <Capabilities />
        <Services />
      </div>
    </div>
  );
}
