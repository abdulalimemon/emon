"use client";

import Container from "@/components/layout/Container";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardMobileNav from "./DashboardMobileNav";

const DashboardNavbar = () => {
  const { setTheme } = useTheme();
  const currentPath = usePathname();

  return (
    <header className="relative w-full border-b border-[#1e242d] h-14 flex justify-center items-center nav-bg">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="inline-flex items-center">
            <Link
              href={"/"}
              className="decoration-none font-semibold hover:text-color-yellow"
            >
              Emon
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="inline-flex justify-center items-center space-x-8">
              <li>
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
          </div>

          <div className="lg:hidden flex justify-center items-center">
            <div className="size-5 mr-4">
              <Sun
                className="absolute h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
                onClick={() => setTheme("dark")}
              />
              <Moon
                className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
                onClick={() => setTheme("light")}
              />
            </div>
            <DashboardMobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default DashboardNavbar;
