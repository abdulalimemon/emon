import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@/app/(withDashboard)/dashboard/blogs/BlogsEditor"),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Editor />
      </main>
    </div>
  );
};

export default Page;
