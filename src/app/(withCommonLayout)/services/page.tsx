import ContactSection from "@/components/pages/home/ContactSection";
import FaqSection from "@/components/pages/services/FaqSection";
import ServiceTabs from "@/components/pages/services/ServiceTabs";

const ServicesPage = async () => {
  return (
    <>
      <ServiceTabs />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default ServicesPage;
