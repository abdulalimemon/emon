"use client";

import Container from "@/components/layout/Container";
import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CgMenuGridO } from "react-icons/cg";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { setTheme } = useTheme();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full border-b border-[#1e242d] h-14 flex justify-center items-center nav-bg">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="inline-flex items-center">
            <Link href={'/'} className="decoration-none font-semibold hover:text-color-yellow">
              Emon
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="inline-flex justify-center items-center space-x-8">
              <li>
                <Link href="/about" className={currentPath === "/about" ? "decoration-none font-semibold text-link" : "decoration-none font-semibold hover:text-color-yellow"}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={currentPath === "/portfolio" ? "decoration-none font-semibold text-link" : "decoration-none font-semibold hover:text-color-yellow"}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={currentPath === "/services" ? "decoration-none font-semibold text-link" : "decoration-none font-semibold hover:text-color-yellow"}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={currentPath === "/pricing" ? "decoration-none font-semibold text-link" : "decoration-none font-semibold hover:text-color-yellow"}>
                  Pricing
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
                <Link href="/contact" className="decoration-none font-semibold">
                  <Button className="rounded-full bg-link hover:bg-link/90 font-semibold text-black">Get in touch</Button>
                </Link>
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
            <CgMenuGridO  onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <>
              <MobileNavbar />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
