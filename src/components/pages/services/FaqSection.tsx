"use client";

import Container from "@/components/layout/Container";
import { useState } from "react";

const dataArr = [
  {
    title: "What services do you offer?",
    description:
      "I offer top-notch web development and design services, specializing in building modern, responsive, and scalable websites using the MERN stack (MongoDB, Express, React, Node.js) and Next.js. With expertise in JavaScript, TypeScript, Tailwind CSS, and Bootstrap, I create seamless, user-friendly experiences tailored to your business needs. Let’s bring your ideas to life with cutting-edge web solutions!",
  },
  {
    title: "Will you handle my project alone, or do you have a team?",
    description:
      "I primarily handle all projects myself to ensure quality and consistency. However, for larger projects, I collaborate with a small, remote team to deliver the best possible results.",
  },
  {
    title: "How soon can you start working on my project?",
    description:
      "I can start working on your project as soon as we finalize the scope and I receive the initial payment. Timelines will be based on our discussions and project requirements.",
  },
  {
    title: "How long will it take to complete my project?",
    description:
      "The timeline depends on the complexity of the project. For a standard website with fewer than 6 pages, I typically aim to complete it within 10 days. If you're in a hurry, let me know, and I’ll do my best to accommodate your timeline.",
  },
  {
    title: "What happens if I delay in providing feedback or content?",
    description:
      "Communication is key to completing the project on time. If feedback or content is delayed, it may extend the project's timeline. I'll do my best to keep things on track, but timely responses from your side are essential.",
  },
  {
    title: "What do you need from me to get started?",
    description:
      "To begin your MERN or Next.js project, I'll need a clear idea of your project requirements, any content or design preferences, and access to any existing resources or branding materials. If you're unsure, we can work together to define the scope and structure of your project.",
  },
  {
    title: "How do I book your services?",
    description:
      "To get started, simply reach out to me through LinkedIn, email, or schedule a meeting directly on my portfolio website. We’ll discuss your project, and once everything is clear, I’ll begin working on it.",
  },
  {
    title: "Do you offer payment plans?",
    description:
      "I currently accept payments through Payoneer. Payment terms will be discussed during the project kickoff, and I generally request an upfront payment before starting work.",
  },
];

const FaqSection = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const toggle = (idx: number) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Frequently Asked Question.
            <div className="hidden lg:block w-2/4 h-10 mx-auto relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </h2>
        </div>

        <div>
          {dataArr.map((PerAccordion, idx) => (
            <div
              key={idx}
              className="my-2 rounded-lg border bg-white p-3 py-3  dark:border-[#0F172A] dark:bg-[#0F172A] text-black dark:text-white"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex h-full w-full items-center justify-between font-medium outline-none text-black dark:text-white"
              >
                <span className="text-base font-semibold lg:text-xl text-black dark:text-white text-left">{PerAccordion.title}</span>
                <span className="rounded-full">
                  <svg
                    className="ml-8 size-3 shrink-0 dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="5"
                      width="12"
                      height="2"
                      rx="1"
                      className={`origin-center transform transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="5"
                      width="12"
                      height="2"
                      rx="1"
                      className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen === idx
                    ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4 text-black dark:text-white">
                  {PerAccordion.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
