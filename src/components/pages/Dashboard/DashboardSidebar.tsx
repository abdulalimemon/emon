"use client"

import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

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
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/skill"
              className={
                currentPath === "/dashboard/skill"
                  ? "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-slate-200 dark:bg-slate-800 justify-center mt-3"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary  justify-center mt-3"
              }
            >
              <Home className="h-4 w-4" />
              Skills
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
