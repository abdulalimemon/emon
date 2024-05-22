import DashboardNavbar from "@/components/shared/Navbar/DashboardNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
};

export default CommonLayout;
