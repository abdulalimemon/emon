import AboutContactSection from "@/components/pages/about/ContactSection";
import ContactSection from "@/components/pages/home/ContactSection";
import PortfolioSection from "@/components/pages/home/PortfolioSection";
import SkillsSection from "@/components/pages/home/SkillsSection";

const ServicesPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/project`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <>
      <PortfolioSection data={data} />
      <AboutContactSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

export default ServicesPage;
