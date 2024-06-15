import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const ProfileSection = () => {
  return (
    <section className="bg-slate-100 dark:bg-black">
      <div className="w-full lg:hidden">
        <Image
          width={1200}
          height={400}
          src="/Abdul Alim Emon Cover Picture.png"
          className="w-full"
          alt="Cover Picture"
        />
      </div>
      <Container>
        <div className="hidden lg:block">
          <Image
            width={1200}
            height={200}
            src="/Abdul Alim Emon Cover Picture.png"
            className="rounded-b-lg h-[280px]"
            alt="Cover Picture"
          />
        </div>
        <div className="mt-[-40px] lg:mt-[-60px]">
          <Image
            width={320}
            height={320}
            src="/Abdul Alim Emon.png"
            className="w-[80px] lg:w-[120px] mx-auto rounded-full"
            alt="Profile Picture"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl lg:text-2xl font-bold mt-2">
            Abdul Alim Emon
          </h2>
          <h3 className="text-base lg:text-xl font-semibold">
            Passionate Front End Developer
          </h3>
          <p className="text-sm lg:text-base font-medium">
            Rangpur, Bangladesh
          </p>
          <div className="flex items-center justify-center gap-3 lg:gap-5 my-3">
            <Link href="/contact">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm lg:text-base font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
                  <span className="capitalize text-sm lg:text-base">
                    Contact
                  </span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
            <Link
              href="/Abdul Alim Emon Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm lg:text-base font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
                  <span className="capitalize text-sm lg:text-base">
                    Resume
                  </span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfileSection;
