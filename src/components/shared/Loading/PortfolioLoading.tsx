import Container from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

const PortfolioLoading = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <Skeleton className="h-14 w-1/2 mx-auto mb-10 bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-[22px] bg-gray-50 dark:bg-slate-900">
            <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
              <Skeleton className="h-10 w-1/2 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 bg-slate-800 " />
              <div className="inline-block">
                <Skeleton className="h-10 w-1/2 my-10 bg-slate-800" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 h-full flex items-center">
              <Skeleton className="h-60 w-full bg-slate-800" />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-[22px] bg-gray-50 dark:bg-slate-900">
            <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
              <Skeleton className="h-10 w-1/2 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 bg-slate-800 " />
              <div className="inline-block">
                <Skeleton className="h-10 w-1/2 my-10 bg-slate-800" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 h-full flex items-center">
              <Skeleton className="h-60 w-full bg-slate-800" />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-[22px] bg-gray-50 dark:bg-slate-900">
            <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
              <Skeleton className="h-10 w-1/2 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 bg-slate-800 " />
              <div className="inline-block">
                <Skeleton className="h-10 w-1/2 my-10 bg-slate-800" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 h-full flex items-center">
              <Skeleton className="h-60 w-full bg-slate-800" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioLoading;
