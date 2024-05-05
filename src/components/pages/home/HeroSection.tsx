import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/style/index.css";
import { IoMdCloudDownload } from "react-icons/io";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const words = `I'm on a mission to create seamless and remarkable web
experiences. With a strong foundation in MERN (MongoDB, Express,
React, Node.js) stack development, I bring your concepts to life
and turn them into user-friendly, cutting-edge web applications.`;

const HeroSection = () => {
  return (
    <HeroHighlight>
      <section className="h-[100vh]">
        <Container className="h-full">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-sm md:text-base font-medium">Hi there, I&apos;m </p>
              <h2 className="text-4xl md:text-8xl font-bold pb-5 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD38] to-[#F7CE68]">
                Abdul Alim Emon
              </h2>
              <h3 className="text-3xl md:text-6xl pb-5 font-semibold">
                Passionate MERN Stack Developer
              </h3>
              <div className="w-11/12 md:w-8/12 mx-auto pb-10">
                <TextGenerateEffect words={words} className="font-medium" />
              </div>
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
                <Link href="/contact">
                  <Button className="text-sm px-20 rounded-full bg-link hover:bg-link/90 font-semibold text-black py-7">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="text-sm px-20 rounded-full border-link hover:bg-link/90 font-semibold text-black py-7 flex items-center">
                    <IoMdCloudDownload className="size-5 mr-3" />
                    <span>Resume</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </HeroHighlight>
  );
};

export default HeroSection;
