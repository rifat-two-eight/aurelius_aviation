import Hero from '@/components/Hero/Hero';
import Philosophy from '@/components/Philosophy/Philosophy';
import AppearanceManagement from '@/components/AppearanceManagement/AppearanceManagement';
import SpecializedServices from '@/components/SpecializedServices/SpecializedServices';
import Institution from '@/components/Institution/Institution';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="app-container bg-imperial-black">
      <Hero />
      <Philosophy />
      <AppearanceManagement />
      <SpecializedServices />
      <Institution />
      <Footer />
    </div>
  );
}
