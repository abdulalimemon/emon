import ContactSection from '@/components/pages/home/ContactSection';
import HeroSection from '@/components/pages/home/HeroSection';
import PortfolioSection from '@/components/pages/home/PortfolioSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
