"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuGridO } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { MdContactPhone, MdMiscellaneousServices } from "react-icons/md";
import { FaDev } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: <IoHome className="size-6" aria-hidden="true" />,
  },
  {
    path: "/about",
    label: "About",
    icon: <FaDev className="size-6" aria-hidden="true" />,
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    icon: <AiOutlineProject className="size-6" aria-hidden="true" />,
  },
  {
    path: "/services",
    label: "Services",
    icon: <MdMiscellaneousServices className="size-6" aria-hidden="true" />,
  },
  {
    path: "/blogs",
    label: "Blogs",
    icon: <RiArticleFill className="size-6" aria-hidden="true" />,
  },
];

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <div className="lg:hidden">
      {isMenuOpen ? (
        <CgMenuGridO className="w-6 h-6 mr-2" />
      ) : (
        <CgMenuGridO
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-6 h-6 mr-2"
        />
      )}
      <div
        className={`top-0 left-0 w-11/12 nav-bg py-1 px-10 fixed h-screen min-h-screen z-50 overflow-y-auto ease-in-out duration-500 ${
          isMenuOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center py-5">
            <h2 className="font-bold text-lg">Emon</h2>
            <button
              className="rounded-full p-2 cursor-pointer fixed right-7 z-50 bg-text text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="p-1 mt-2">
            <div>
              <div className="mt-6 flex flex-1 flex-col justify-between ">
                <nav className="-mx-3 space-y-6 ">
                  <div className="space-y-5">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        className={
                          currentPath === route.path
                            ? "NavMobile bg-color-yellow text-black"
                            : "NavMobile"
                        }
                        href={route.path}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        {route.icon}
                        <span className="mx-2 text-sm font-medium">
                          {route.label}
                        </span>
                      </Link>
                    ))}
                    
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="decoration-none font-semibold w-full"
                    >
                      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 w-full mt-4">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-medium hover:bg-black text-white backdrop-blur-3xl transition duration-500">
                          <MdContactPhone
                            className="size-6"
                            aria-hidden="true"
                          />
                          <span className="mx-2 text-sm font-semibold">
                            Get in touch
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
