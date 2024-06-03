import Container from "@/components/layout/Container";
import AboutModal from "./AboutModal";

const ContactSection = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="h-[200px] w-full rounded-lg dark:bg-slate-950 bg-slate-100">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-5 lg:px-10 gap-5">
          <h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-start">Let&apos;s create something amazing together!</h2>
          <AboutModal text="Reach out today!" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
