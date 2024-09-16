import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";
import ContactModal from "./ContactModal";

const SingleProject = ({ project }: { project: Project }) => {
  const {
    name,
    image,
    icons,
    url,
    urlName,
    projectOverview,
    feature,
    technology,
  } = project;

  return (
    <section className="py-10 md:py-14 bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col-reverse lg:flex-col">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div>
              <h2 className="text-base lg:text-xl">
                Name : <span className="font-semibold">{name}</span>
              </h2>
              <a href={url} className="text-base text-blue-500 dark:text-link lg:text-xl">
                {urlName}
              </a>
            </div>
            <div className="flex items-start lg:items-center gap-4 mt-5 mb-20 lg:my-0 h-[70px] flex-wrap ">
              {icons.map((item) => (
                <div key={item.title} className="flex flex-col items-center justify-between h-full flex-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                  <h2 className="mt-1 text-sm font-semibold">{item.title}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full my-8 mx-auto">
            <Image
              src={image}
              alt={name}
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
            <p className="text-sm lg:text-base w-full lg:w-2/3">
              {projectOverview}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row border-b py-10 lg:py-14">
            <h2 className="text-xl lg:text-2xl font-semibold w-full lg:w-1/3 mb-3">
              Feature
            </h2>
            <div className="text-sm lg:text-base w-full lg:w-2/3">
              <ul className="space-y-2 list-disc px-5">
                {feature.map((item) => (
                  <li
                    key={item.title}
                  >
                    <p className="text-sm lg:text-base"><span className="font-semibold">
                      {item.title} : 
                    </span> {item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row border-b py-10 lg:py-14">
            <h2 className="text-xl lg:text-2xl font-semibold w-full lg:w-1/3 mb-3">
              Technology
            </h2>
            <div className="text-sm lg:text-base w-full lg:w-2/3">
            <ul className="space-y-2 list-disc px-5">
                {technology.map((item) => (
                  <li
                    key={item.name}
                  >
                    <p className="text-sm lg:text-base"><span className="font-semibold">
                    {item.name} : 
                    </span> {item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 py-5 lg:py-10">
            <div>
              <h2 className="py-3 lg:py-0 text-sm lg:text-base">
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
