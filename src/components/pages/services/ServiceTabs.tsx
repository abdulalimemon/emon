import Container from "@/components/layout/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const ServiceTabs = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Services.
            <div className="hidden lg:block w-2/4 h-10 mx-auto relative">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </h2>
        </div>
        <div>
          <Tabs defaultValue="reactOrnext" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center bg-slate-900 dark:bg-slate-800 py-24 md:py-14 lg:py-8">
              <TabsTrigger
                value="reactOrnext"
                className="py-3 lg:py-4 text-white"
              >
                Design to React/Next.js
              </TabsTrigger>
              <TabsTrigger value="spa" className="py-3 lg:py-4 text-white">
                Single-Page Applications
              </TabsTrigger>
              <TabsTrigger
                value="fullStack"
                className="py-3 lg:py-4 text-white"
              >
                Full-Stack Development
              </TabsTrigger>
              <TabsTrigger
                value="maintenance"
                className="py-3 lg:py-4 text-white"
              >
                Maintenance & Support
              </TabsTrigger>
            </TabsList>
            <TabsContent value="reactOrnext">
              <div className="bg-white rounded-xl dark:bg-[#0F172A] p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <h6 className="font-semibold text-xl lg:text-2xl">{}</h6>
                    <p className="text-sm lg:text-base">{}</p>
                    <Link href="/contact">
                      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
                          Get In Touch
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Image
                        src=''
                        alt=''
                        width={600}
                        height={150}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTabs;
