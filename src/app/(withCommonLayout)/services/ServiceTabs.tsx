import Container from "@/components/layout/Container";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const servicesArr = [
  {
    title: "Design to React or Next.js",
    description:
      "I take your design files from Figma, Adobe XD, or PSD and transform them into fully responsive, high-quality React or Next.js applications. Whether it's a static page or a complex interactive design, I ensure pixel-perfect accuracy while maintaining performance and scalability. By focusing on seamless design implementation, I bring your vision to life with fast-loading, dynamic websites that are ready for any device.",
    value: "reactOrnext",
    image: "https://abdulalimemon.vercel.app/reactOrnext.png",
  },
  {
    title: "Single-Page Applications",
    description:
      "Specializing in the development of dynamic and fast-loading single-page applications (SPAs), I use React and Next.js to create highly interactive web apps that offer a smooth and uninterrupted user experience. With minimal page reloads and faster response times, these SPAs are perfect for businesses that require real-time functionality, from dashboards and tools to e-commerce platforms and content-heavy applications.",
    value: "spa",
    image: "https://abdulalimemon.vercel.app/spa.png",
  },
  {
    title: "Full-Stack Development",
    description:
      "I provide complete full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js), building robust, scalable web applications from the ground up. Whether you need complex back-end architecture, API integrations, or powerful front-end interfaces, I handle both the server-side and client-side to deliver a seamless experience. From data management to user interactivity, I ensure every part of your application works in harmony.",
    value: "fullStack",
    image: "https://abdulalimemon.vercel.app/fullStack.png",
  },
  {
    title: "Maintenance & Support",
    description:
      "Once your website or application is live, I offer continuous maintenance and support to ensure everything runs smoothly. This includes regular updates, security patches, performance optimization, and troubleshooting. My goal is to keep your site secure, up-to-date, and fully functional so that you can focus on growing your business without worrying about technical issues.",
    value: "maintenance",
    image: "https://abdulalimemon.vercel.app/support.png",
  },
];

const ServiceTabs = () => {
  return (
    <section className="py-10 md:py-14 bg-slate-100 dark:bg-black">
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
                Design to React or Next.js
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
            {servicesArr.map((item) => (
              <TabsContent value={item.value} key={item.title}>
                  <BackgroundBeamsWithCollision >
                  <div className="bg-white rounded-xl dark:bg-[#0F172A] p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                      <div className="flex flex-col justify-center space-y-6">
                        <h6 className="font-semibold text-xl lg:text-3xl">
                          {item.title}
                        </h6>
                        <p className="text-sm lg:text-base">
                          {item.description}
                        </p>
                        <Link href="/contact">
                          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 px-20 py-5 text-sm font-medium text-black hover:bg-slate-200 hover:dark:bg-black dark:text-white backdrop-blur-3xl transition duration-500">
                              Get a Quote
                            </span>
                          </button>
                        </Link>
                      </div>
                      <div>
                        <div className="w-full lg:w-3/4 mx-auto">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={100}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              </BackgroundBeamsWithCollision>
                </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTabs;
