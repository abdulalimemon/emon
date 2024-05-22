import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";

const SingleProject = ({ project }: { project: Project }) => {
  const { name, link, image } = project;
  console.log(project);
  console.log("hello");
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-row-reverse lg:flex-col">
          <div>
            <div>
              <h2 className="text-base lg:text-xl">
                Name : <span className="font-semibold">{name}</span>
              </h2>
              <a href={link} className="text-base text-link lg:text-xl">
                https://recover-ease.netlify.app/
              </a>
            </div>
            <div>
              <div>
                <Image
                  src={image}
                  alt="Technology logo"
                  width={40}
                  height={40}
                />
              </div>
              <h2>Name</h2>
            </div>
          </div>
          <div>
            <Image
              src={project.image}
              alt="Technology logo"
              width={240}
              height={240}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProject;
