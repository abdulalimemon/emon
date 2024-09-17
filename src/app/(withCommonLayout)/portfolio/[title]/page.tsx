import MoreProject from "@/components/pages/portfolio/MoreProject";
import SingleProject from "@/components/pages/portfolio/SingleProject";
import { Project } from "@/type";

interface ProjectName {
  params: {
    title: string;
  };
}

const ProjectPage = async ({ params }: ProjectName) => {
  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${BACKEND_URL}/project/${params.title}`);
    if (!res.ok) {
      throw new Error("Failed to fetch project data");
    }
    const project = await res.json();

    const MoreProjectres = await fetch(`${BACKEND_URL}/project`, {
      cache: "no-store", // Consider if this is really necessary
    });
    if (!MoreProjectres.ok) {
      throw new Error("Failed to fetch more projects data");
    }
    const MoreProjectdata = await MoreProjectres.json();

    const newData = MoreProjectdata.filter(
      (item: Project) => item.title !== project.title
    );

    return (
      <>
        <SingleProject project={project} />
        <MoreProject data={newData} />
      </>
    );
  } catch (error) {
    console.error(error);
    return <p>Failed to load project data. Please try again later.</p>;
  }
};

export default ProjectPage;
