"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaLaptopCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const DashboardSidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-5">
            <Link
              href="/dashboard"
              className={
                currentPath === "/dashboard"
                  ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-slate-200 dark:bg-slate-800 justify-center mt-3"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  justify-center mt-3"
              }
            >
              <Home className="size-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/skills"
              className={
                currentPath === "/dashboard/skills"
                  ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-slate-200 dark:bg-slate-800 justify-center mt-3"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  justify-center mt-3"
              }
            >
              <FaLaptopCode className="size-5" />
              Skills
            </Link>
            <Link
              href="/dashboard/project"
              className={
                currentPath === "/dashboard/project"
                  ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-slate-200 dark:bg-slate-800 justify-center mt-3"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  justify-center mt-3"
              }
            >
              <CgWebsite className="size-5" />
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
