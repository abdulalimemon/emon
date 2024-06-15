import ProjectSection from "@/components/pages/portfolio/ProjectSection";

const PortfolioPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/project`, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <>
      <ProjectSection data={data} />
    </>
  );
};

export default PortfolioPage;
