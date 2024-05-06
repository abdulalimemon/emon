import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import errorImage from '@/assets/error.png';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-center h-[80vh] py-16">
        <Container>
          <div className="flex flex-col items-center justify-center mx-auto my-8">
            <div className="max-w-md text-center">
              <Image src={errorImage} width={100} height={100} alt="404 image" className="mx-auto w-36 h-36" />
              <p className="text-2xl font-semibold md:text-3xl">
              Apologies, it seems this page is missing or cannot be found.
              </p>
              <p className="mt-4 mb-8 text-sm md:text-base">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              
              <Link href="/">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
                    Back to homepage
                    </span>
                  </button>
                </Link>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
