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
              <p className="text-2xl font-semibold md:text-4xl">
              Apologies, it seems this page is missing or cannot be found.
              </p>
              <p className="mt-4 mb-8 text-sm md:text-base">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link
                href="/"
              >
                <Button className="rounded-full bg-link hover:bg-link/90 font-semibold text-black px-8 py-7">Back to homepage</Button>
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
