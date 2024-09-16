import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center bg-slate-900 py-24 md:py-14 lg:py-8">
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
                <div className="flex flex-col items-center justify-center space-y-6">
                  <svg
                    width={75}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    {" "}
                    <g strokeWidth="0"></g>{" "}
                    <g
                      id="navgateui"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>{" "}
                    <g id="navgateui">
                      <path
                        fill="#16BAC5"
                        d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                      ></path>
                    </g>
                  </svg>
                  <h6 className="text-center font-medium text-slate-700 dark:text-white/80">
                    You have enough points to redeem Keep going.!
                  </h6>
                  <button className="rounded-full bg-[#16BAC5] px-6 py-2 text-white ">
                    Redeem now
                  </button>
                  <button className="text-slate-500 hover:underline dark:text-white/60">
                    Redeem later
                  </button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="spa">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="fullStack">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="maintenance">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default ServiceTabs;
