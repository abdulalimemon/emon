"use client"

import Container from "@/components/layout/Container";
import AboutModal from "./AboutModal";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const AboutContactSection = () => {
  return (
    <section className="py-5 bg-slate-100 dark:bg-black">
      <Container>
        <div className="h-[12rem] rounded-md bg-slate-900 relative w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-5 lg:px-10 gap-5">
            <h2 className="text-2xl lg:text-4xl font-bold text-center lg:text-start text-white">
              Let&apos;s create something amazing together!
            </h2>
            <AboutModal text="Reach out today!" />
          </div>
          <ShootingStars />
      <StarsBackground />
        </div>
        
      </Container>
    </section>
  );
};

export default AboutContactSection;
