"use client";

import Container from "@/components/layout/Container";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "React JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    title: "Redux",
    image:
      "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png",
  },
  {
    title: "Node JS",
    image:
      "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  },
  {
    title: "Express JS",
    image:
      "https://www.rapidbrains.com/assets/img/services/rapidbrains-expressjs.webp",
  },
  {
    title: "Next JS",
    image:
      "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
  {
    title: "MongoDB",
    image:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
  },
];

const SkillsSection = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            My Tech Stack.
            <div className="hidden lg:block w-2/4 mx-auto relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-5">
            {projects.map((item, idx) => (
              <div
                key={item.title}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-300 dark:bg-slate-800/[0.8] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="rounded-2xl h-full w-full p-6 py-10 overflow-hidden bg-white border-slate-100 dark:bg-black border border-transparent dark:border-white/[0.2]  dark:group-hover:border-slate-700 relative z-20">
                  <div className="relative z-50 flex justify-center items-center">
                    <div className="size-10 lg:size-14">
                      <Image
                        src={item.image}
                        width={56}
                        height={56}
                        alt="Skill Image"
                      />
                    </div>
                    <h2 className="ml-5 text-xl lg:text-2xl font-semibold">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
