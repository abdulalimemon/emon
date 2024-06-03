import AboutSection from "@/components/pages/about/AboutSection";
import ContactSection from "@/components/pages/about/ContactSection";
import ProfileSection from "@/components/pages/about/ProfileSection";
import ContactForm from "@/components/pages/contact/ContactForm";

const AboutPage = () => {
  return (
    <>
      <ProfileSection />
      <AboutSection />
      <ContactSection />
      <ContactForm />
    </>
  );
};

export default AboutPage;
