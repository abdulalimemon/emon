import AboutSection from "@/components/pages/about/AboutSection";
import ContactSection from "@/components/pages/about/ContactSection";
import ProfileSection from "@/components/pages/about/ProfileSection";
import Techstack from "@/components/pages/about/Techstack";
import ContactForm from "@/components/pages/contact/ContactForm";

const AboutPage = () => {
  return (
    <>
      <ProfileSection />
      <AboutSection />
      <ContactSection />
      <Techstack />
      <ContactForm />
    </>
  );
};

export default AboutPage;
