import ContactSection from "@/components/pages/home/ContactSection";
import FaqSection from "@/components/pages/services/FaqSection";
import ServicesSection from "@/components/pages/services/ServicesSection";

const ServicesPage = async () => {
  return (
    <>
      <ServicesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default ServicesPage;
