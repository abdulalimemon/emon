import ContactSection from "@/components/pages/home/ContactSection";
import HeroSection from "@/components/pages/home/HeroSection";
import PortfolioSection from "@/components/pages/home/PortfolioSection";
import SkillsSection from "@/components/pages/home/SkillsSection";

const HomePage = async() => {
  const res = await fetch(`${process.env.BACKEND_URL}/project`, {
    cache: "no-store",
  });
  const data = await res.json();
  
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <PortfolioSection data={data} />
      <ContactSection />
    </main>
  );
}

export default HomePage;