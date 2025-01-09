import AllBlogTable from "@/app/(withDashboard)/dashboard/blogs/AllBlogTable";
import BlogsInfo from "@/app/(withDashboard)/dashboard/blogs/BlogsInfo";

const SkillsPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6">
        <BlogsInfo />
        <AllBlogTable />
      </main>
    </div>
  );
};

export default SkillsPage;
