import SkillsInfo from "@/app/(withDashboard)/dashboard/skills/SkillsInfo";
import SkillsTable from "@/app/(withDashboard)/dashboard/skills/SkillsTable";

const SkillsPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <SkillsInfo />
        <SkillsTable />
      </main>
    </div>
  );
};

export default SkillsPage;
