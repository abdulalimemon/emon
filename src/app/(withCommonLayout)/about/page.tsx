import ContactForm from "@/components/pages/contact/ContactForm";
import AboutSection from "./AboutSection";
import AboutContactSection from "./ContactSection";
import ProfileSection from "./ProfileSection";
import Techstack from "./Techstack";

const AboutPage = () => {
  return (
    <>
      <ProfileSection />
      <AboutSection />
      <AboutContactSection />
      <Techstack />
      <ContactForm />
    </>
  );
};

export default AboutPage;
