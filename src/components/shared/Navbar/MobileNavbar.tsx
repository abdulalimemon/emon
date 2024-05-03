"use client";

import { useState } from "react";
import { BarChart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuGridO } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { IoHome } from "react-icons/io5";
import { MdContactPhone, MdMiscellaneousServices } from "react-icons/md";
import { FaDev } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";

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
              className="rounded-full p-2 cursor-pointer fixed right-7 z-50 bg-link hover:bg-link/90 text-black"
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
                    <Link
                      className={
                        currentPath === "/"
                          ? "NavMobile bg-color-yellow text-black"
                          : "NavMobile"
                      }
                      href="/"
                    >
                      <IoHome className="size-6" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">Home</span>
                    </Link>
                    <Link
                      className={
                        currentPath === "/about"
                          ? "NavMobile bg-color-yellow text-black"
                          : "NavMobile "
                      }
                      href="/about"
                    >
                      <FaDev className="size-6" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">About</span>
                    </Link>
                    <Link
                      className={
                        currentPath === "/about"
                          ? "NavMobile bg-color-yellow text-black"
                          : "NavMobile "
                      }
                      href="/portfolio"
                    >
                      <AiOutlineProject className="size-6" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Portfolio
                      </span>
                    </Link>
                    <Link
                      className={
                        currentPath === "/services"
                          ? "NavMobile bg-color-yellow text-black"
                          : "NavMobile "
                      }
                      href="/about"
                    >
                      <MdMiscellaneousServices
                        className="size-6"
                        aria-hidden="true"
                      />
                      <span className="mx-2 text-sm font-medium">Services</span>
                    </Link>
                    <Link
                      className={
                        currentPath === "/about"
                          ? "NavMobile bg-color-yellow text-black"
                          : "NavMobile "
                      }
                      href="/pricing"
                    >
                      <ImPriceTags className="size-6" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">Pricing</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="decoration-none font-semibold w-full"
                    >
                      <Button className="rounded-full bg-link hover:bg-link/90 font-semibold my-4 text-black w-full py-5">
                        <MdContactPhone className="size-6" aria-hidden="true" />
                        <span className="mx-2 text-sm font-semibold">
                          Get in touch
                        </span>
                      </Button>
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
