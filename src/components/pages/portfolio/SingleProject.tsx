import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";
import ContactModal from "./ContactModal";

const SingleProject = ({ project }: { project: Project }) => {
  const { name, link, image } = project;

  return (
    <section className="py-10 md:py-14 bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col-reverse lg:flex-col">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div>
              <h2 className="text-base lg:text-xl">
                Name : <span className="font-semibold">{name}</span>
              </h2>
              <a href={link} className="text-base text-link lg:text-xl">
                https://recover-ease.netlify.app/
              </a>
            </div>
            <div className="flex items-start lg:items-center gap-4 mt-5 lg:mt-0">
              <div>
                <Image
                  src={image}
                  alt="Technology logo"
                  width={40}
                  height={40}
                />
                <h2 className="mt-1">Name</h2>
              </div>
              <div>
                <Image
                  src={image}
                  alt="Technology logo"
                  width={40}
                  height={40}
                />
                <h2 className="mt-1">Name</h2>
              </div>
              <div>
                <Image src={image} alt={name} width={40} height={40} />
                <h2 className="mt-1">Name</h2>
              </div>
            </div>
          </div>
          <div className="w-full my-8 mx-auto">
            <Image
              src={project.image}
              alt="Technology logo"
              width={1000}
              height={600}
              className="lg:w-[1000px] lg:h-[600px] mx-auto"
            />
          </div>
        </div>
        <div className="py-5">
          <div className="flex flex-col lg:flex-row border-b py-10 lg:py-14">
            <h2 className="text-xl lg:text-2xl font-semibold w-full lg:w-1/3 mb-3">
              Project Overview
            </h2>
            <p className="text-base lg:text-xl w-full lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut a
              ipsam corporis voluptate veritatis doloribus beatae, quae incidunt
              quis unde asperiores dolores consectetur. Molestias aut minus quod
              rem consequatur.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row border-b py-10 lg:py-14">
            <h2 className="text-xl lg:text-2xl font-semibold w-full lg:w-1/3 mb-3">
              Feature
            </h2>
            <p className="text-base lg:text-xl w-full lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut a
              ipsam corporis voluptate veritatis doloribus beatae, quae incidunt
              quis unde asperiores dolores consectetur. Molestias aut minus quod
              rem consequatur.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row border-b py-10 lg:py-14">
            <h2 className="text-xl lg:text-2xl font-semibold w-full lg:w-1/3 mb-3">
              Technology
            </h2>
            <p className="text-base lg:text-xl w-full lg:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut a
              ipsam corporis voluptate veritatis doloribus beatae, quae incidunt
              quis unde asperiores dolores consectetur. Molestias aut minus quod
              rem consequatur.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 py-5 lg:py-10">
            <div>
              <h2 className="py-3 lg:py-0 text-base lg:text-xl">
                If you&apos;d like to learn more about this project, have any
                questions, or feel inspired to create a similar one, please
                don&apos;t hesitate to reach out. I&apos;m here to help and
                would love to share insights and guidance with you.
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-start md:items-center gap-3 md:justify-end">
              <ContactModal text="I need the same" />
              <ContactModal text="Ask A Question" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProject;
