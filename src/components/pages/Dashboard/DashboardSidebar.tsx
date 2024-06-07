"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { FaLaptopCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { RiArticleFill } from "react-icons/ri";

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
                  ? "dashboard-active"
                  : "dashboard-not-active"
              }
            >
              <Home className="size-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/skills"
              className={
                currentPath === "/dashboard/skills"
                  ? "dashboard-active"
                  : "dashboard-not-active"
              }
            >
              <FaLaptopCode className="size-5" />
              Skills
            </Link>
            <Link
              href="/dashboard/project"
              className={
                currentPath === "/dashboard/project"
                  ? "dashboard-active"
                  : "dashboard-not-active"
              }
            >
              <CgWebsite className="size-5" />
              Projects
            </Link>
            <Link
              href="/dashboard/blogs"
              className={
                currentPath === "/dashboard/blogs"
                  ? "dashboard-active"
                  : "dashboard-not-active"
              }
            >
              <RiArticleFill className="size-5" />
              Blogs
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
