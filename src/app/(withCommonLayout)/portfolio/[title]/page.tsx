import MoreProject from "@/app/(withCommonLayout)/portfolio/[title]/MoreProject";
import { Project } from "@/type";
import Link from "next/link";
import SingleProject from "./SingleProject";

interface ProjectName {
  params: {
    title: string;
  };
}

const ProjectPage = async ({ params }: ProjectName) => {
  const BACKEND_URL = process.env.BACKEND_URL;

  try {
    const res = await fetch(`${BACKEND_URL}/project/${params.title}`);
    if (!res.ok) {
      throw new Error("Failed to fetch project data");
    }
    const project = await res.json();

    const MoreProjectres = await fetch(`${BACKEND_URL}/project`, {
      cache: "no-store",
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
    return (
      <div className="h-[95vh] flex flex-col items-center justify-center">
        <p className="text-red-500 font-semibold">
          Failed to load project data. Please try again later.
        </p>
        <Link href="/">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
              Back to homepage
            </span>
          </button>
        </Link>
      </div>
    );
  }
};

export default ProjectPage;
