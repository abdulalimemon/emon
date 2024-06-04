import AllProjectsTable from "@/components/pages/Dashboard/projects/AllProjectsTable";

const Page = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <AllProjectsTable />
        <div className="flex py-10 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Hey! Abdul Alim Emon, welcome to your Dashboard Skills Page.
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
