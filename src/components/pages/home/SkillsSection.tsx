"use client";

import Container from "@/components/layout/Container";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Google",
    image:
      "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Meta",
    image:
      "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Amazon",
    image:
      "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Microsoft",
    image:
      "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SkillsSection = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Skills.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10">
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
                <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
                  <div className="relative z-50">
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
