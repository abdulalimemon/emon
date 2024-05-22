"use client";

import Container from "@/components/layout/Container";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "JavaScript",
    image:
      "https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png",
  },
  {
    title: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    title: "Tailwind CSS",
    image:
      "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
  },
  {
    title: "React",
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
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
  },
  {
    title: "Next JS",
    image:
      "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
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
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-10">
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
                      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
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
                <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-100 border-slate-100 dark:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
                  <div className="relative z-50 flex justify-center items-center">
                    <h2>{item.title}</h2>
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="Skill Image"
                      className="mt-8"
                    />
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
