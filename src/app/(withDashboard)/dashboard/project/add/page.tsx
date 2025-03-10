import AddProjectForm from "@/app/(withDashboard)/dashboard/project/add/AddProjectForm";

const Page = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <AddProjectForm />
      </main>
    </div>
  );
};

export default Page;
