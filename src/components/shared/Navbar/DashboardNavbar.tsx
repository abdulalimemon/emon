"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardMobileNav from "./DashboardMobileNav";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardNavbar = () => {
  const { setTheme } = useTheme();
  const currentPath = usePathname();

  return (
    <>
      <section className="bg-[#010313] border-b text-slate-100">
        <div className="px-5">
          <nav className="flex items-center justify-between py-2">
            <div className="flex gap-3 justify-center items-center">
              <SidebarTrigger className="-ml-1" />
              <Link
                href={"/"}
                className="decoration-none font-semibold hover:text-color-yellow"
              >
                Emon
              </Link>
            </div>
            <ul className="font-semibold flex items-center justify-end gap-5 lg:flex">
              <li className="space-x-5 hidden md:block">
                <Link
                  href="/"
                  className={
                    currentPath === "/"
                      ? "decoration-none font-semibold text-link"
                      : "decoration-none font-semibold hover:text-color-yellow"
                  }
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className={
                    currentPath === "/dashboard"
                      ? "decoration-none font-semibold text-link"
                      : "decoration-none font-semibold hover:text-color-yellow"
                  }
                >
                  Dashboard
                </Link>
              </li>

              <li className="size-5">
                <Sun
                  className="absolute h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
                <Moon
                  className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              </li>

              <li>
                <div className="decoration-none font-semibold">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-medium hover:bg-black text-white backdrop-blur-3xl transition duration-500">
                      Log Out
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default DashboardNavbar;
