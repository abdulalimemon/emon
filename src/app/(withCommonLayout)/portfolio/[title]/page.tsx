import MoreProject from "@/components/pages/portfolio/MoreProject";
import SingleProject from "@/components/pages/portfolio/SingleProject";
import { Project } from "@/type";

interface ProjectName {
  params: {
    title: string;
  };
}

const ProjectPage = async ({ params }: ProjectName) => {
  const res = await fetch(`${process.env.BACKEND_URL}/project/${params.title}`);
  const project = await res.json();

  const MoreProjectres = await fetch(`${process.env.BACKEND_URL}/project`, {
    cache: "no-store",
  });
  const MoreProjectdata = await MoreProjectres.json();

  const newData = MoreProjectdata.filter(
    (item: Project) => !project?.title?.includes(item?.title)
  );

  return (
    <>
      <SingleProject project={project} />
      <MoreProject data={newData} />
    </>
  );
};

export default ProjectPage;
