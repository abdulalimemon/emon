"use client";

import Container from "@/components/layout/Container";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const data = [
  {
    id: "1",
    title: "Recover Ease",
    detail:
      "Recover Ease is a helpful platform for organizing and delivering aid like food and supplies to people who need it quickly during emergencies.",
    image: "/recover-ease.png",
    link: "/portfolio/recover-ease",
  },
  {
    id: "2",
    title: "Shine Store",
    detail:
      "Shine Store is an online shop offering a wide range of cleaning supplies. Get everything you need to keep your space clean and shiny!",
    image: "/shine-store.png",
    link: "/portfolio/shine-store",
  },
  {
    id: "3",
    title: "SpacesWare",
    detail:
      "SpacesWare is a e-commerce platform allowing users to create accounts, log in, update profiles, and leave product reviews with Admin functionalities.",
    image: "/spacesware.png",
    link: "/portfolio/spacesware",
  },
  {
    id: "4",
    title: "Warehouse",
    detail:
      "Warehouse is a React app that enables users to create accounts, log in, update profiles, and track inventory changes.",
    image: "/warehouse.png",
    link: "/portfolio/warehouse",
  },
  {
    id: "5",
    title: "React Shop",
    detail: "React Shop is an online shop offering a wide range of products!",
    image: "/reactshop.png",
    link: "/portfolio/react-shop",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {data.map((item) => (
            <BackgroundGradient key={item.id} className="p-[1px]">
              <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-[22px] bg-gray-50 dark:bg-slate-900">
                <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
                  <h2 className="text-xl lg:text-2xl font-bold py-3">
                    {item.title}
                  </h2>
                  <p className="text-base lg:text-2xl pb-3">{item.detail}</p>
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
                    alt={item.title}
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
