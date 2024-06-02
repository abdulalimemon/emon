import Container from "@/components/layout/Container";
import AboutModal from "./AboutModal";

const ContactSection = () => {
  return (
    <section>
      <Container>
        <div className="h-[200px] w-full rounded-lg dark:bg-slate-800 bg-slate-100">
          <h2>Let&apos;s create something amazing together!</h2>
          <AboutModal text="Reach out today!" />
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
