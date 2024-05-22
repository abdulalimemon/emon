import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";

const SingleProject = ({ project }: { project: Project }) => {
  const { name, link, image } = project;
  return (
    <section>
      <Container>
        <div className="flex flex-row-reverse lg:flex-col">
          <div>
            <div>
              <h2>Name :{name}</h2>
              <a href={link} className="text-base">
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
