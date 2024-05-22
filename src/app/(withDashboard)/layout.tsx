import DashboardSidebar from "@/components/pages/Dashboard/DashboardSidebar";
import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar />
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
        {children}
      </div>
    </>
  );
};

export default CommonLayout;
