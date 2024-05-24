import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";

const SingleProject = ({ project }: { project: Project }) => {
  const { name, link, image } = project;
  
  return (
    <section className="py-14 lg:py-20 bg-slate-50 dark:bg-slate-950">
      <Container>
        <div className="flex flex-col-reverse lg:flex-col">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base lg:text-xl">
                Name : <span className="font-semibold">{name}</span>
              </h2>
              <a href={link} className="text-base text-link lg:text-xl">
                https://recover-ease.netlify.app/
              </a>
            </div>
            <div className="flex items-center gap-4">
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
                <Image
                  src={image}
                  alt={name}
                  width={40}
                  height={40}
                />
              <h2 className="mt-1">Name</h2>
              </div>
            </div>
          </div>
          <div className="w-full my-8 mx-auto">
            <Image
              src={project.image}
              alt="Technology logo"
              width={900}
              height={460}
              className="w-full mx-auto"
            />
          </div>
        </div>

        
      </Container>
    </section>
  );
};

export default SingleProject;
