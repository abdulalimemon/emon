import AllProjectsTable from "@/app/(withDashboard)/dashboard/project/AllProjectsTable";
import ProjectInfo from "@/app/(withDashboard)/dashboard/project/ProjectInfo";

const Page = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <ProjectInfo />
        <AllProjectsTable />
      </main>
    </div>
  );
};

export default Page;
