"use client";

import Container from "@/components/layout/Container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Project } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const ProjectSection = ({ data }: { data: Project[] }) => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Projects.
            <div className="hidden lg:block w-[40rem] h-10 mx-auto relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {data.map((item) => (
            <BackgroundGradient key={item._id} className="p-[1px]">
              <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-[22px] bg-gray-50 dark:bg-slate-900">
                <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
                  <h2 className="text-xl lg:text-2xl font-bold py-3">
                    {item.name}
                  </h2>
                  <p className="text-base lg:text-2xl pb-3">
                    {item.shortdetail}
                  </p>
                  <div className="inline-block">
                    <span className="inline-block">
                      <Link
                        href={item.link}
                        className="py-3 flex items-center justify-start hover:text-color-yellow dark:hover:text-link"
                      >
                        <span>View details </span>{" "}
                        <FaAngleRight className="size-5 ml-2" />
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-6/12">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={150}
                    className="w-full"
                  />
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
