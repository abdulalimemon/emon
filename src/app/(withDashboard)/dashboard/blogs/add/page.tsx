import BlogsEditor from "@/components/pages/Dashboard/blogs/BlogsEditor";

const Page = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <BlogsEditor />
      </main>
    </div>
  );
};

export default Page;
