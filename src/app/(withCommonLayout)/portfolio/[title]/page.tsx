import SingleProject from "@/components/pages/portfolio/SingleProject";

interface ProjectName {
  params: {
    title: string;
  };
}

const ProjectPage = async ({ params }: ProjectName) => {
  const res = await fetch(`${process.env.BACKEND_URL}/project/${params.title}`);
  const project = await res.json();
console.log(`${process.env.BACKEND_URL}/project/${params.title}`)
  return (
    <>
      <SingleProject project={project} />
    </>
  );
};

export default ProjectPage;
