import Container from "@/components/layout/Container";
import Link from "next/link";
import "@/style/index.css";
import { IoMdCloudDownload } from "react-icons/io";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Cover } from "@/components/ui/cover";

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
              <p className="text-sm md:text-base font-medium">
                Hi there, I&apos;m{" "}
              </p>
              <h2 className="text-4xl md:text-8xl font-bold pb-5 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD38] to-[#F7CE68]">
                <span>
                <Cover>Abdul Alim Emon</Cover>
                </span>
              </h2>
              <h3 className="text-3xl md:text-6xl pb-5 font-semibold">
                Passionate Front End Web Developer
              </h3>
              <div className="w-11/12 md:w-8/12 mx-auto pb-10">
                <TextGenerateEffect words={words} className="font-medium" />
              </div>
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
                <Link href="/contact">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
                      Get In Touch
                    </span>
                  </button>
                </Link>
                <Link
                  href="/Abdul Alim Emon Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
                      <IoMdCloudDownload className="size-5 mr-3" />
                      <span>Resume</span>
                    </span>
                  </button>
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
