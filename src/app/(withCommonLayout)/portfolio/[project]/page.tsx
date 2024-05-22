import Container from "@/components/layout/Container";
import { Project } from "@/type";
import Image from "next/image";

interface ProjectName {
  params: {
    title: string;
  };
}

const ProjectPage = async ({ params }: ProjectName) => {
  const res = await fetch(`${process.env.BACKEND_URL}/product/${params.title}`);
  const data = await res.json();
  return (
    <>
      <section>
        <Container>
          <div className="flex flex-row-reverse lg:flex-col">
            <div>
              <div>
                <h2>Name :{data.name}</h2>
                <a
                  href={data.link}
                  className="text-base"
                >
                  https://recover-ease.netlify.app/
                </a>
              </div>
              <div>
                <div>
                  <Image
                    src={data.image}
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
                src={data.image}
                alt="Technology logo"
                width={240}
                height={240}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectPage;
