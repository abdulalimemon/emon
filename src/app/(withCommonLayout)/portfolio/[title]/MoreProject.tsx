"use client";

import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const MoreProject = ({ data }: { data: Project[] }) => {
  return (
    <section className="pt-10 pb-14 lg:pb-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            More Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.slice(0, 3).map((item) => (
            <div key={item._id} className="p-[1px]">
              <div className="flex flex-col p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-xl bg-gray-50 dark:bg-slate-900">
                <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
                  <h2 className="text-xl lg:text-2xl font-bold py-3">
                    {item.name}
                  </h2>
                  <div className="inline-block">
                    <span className="inline-block">
                      <Link
                        href={item.link}
                        className="pb-3 flex items-center justify-start hover:text-color-yellow dark:hover:text-link"
                      >
                        <span>View details </span>{" "}
                        <FaAngleRight className="size-5 ml-2" />
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={150}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MoreProject;
