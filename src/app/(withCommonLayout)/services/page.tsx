import ContactSection from "@/components/pages/home/ContactSection";
import FaqSection from "@/app/(withCommonLayout)/services/FaqSection";
import ServiceTabs from "@/app/(withCommonLayout)/services/ServiceTabs";

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
