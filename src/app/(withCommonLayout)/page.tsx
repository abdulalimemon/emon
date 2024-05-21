import ContactSection from "@/components/pages/home/ContactSection";
import HeroSection from "@/components/pages/home/HeroSection";
import PortfolioSection from "@/components/pages/home/PortfolioSection";
import SkillsSection from "@/components/pages/home/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
