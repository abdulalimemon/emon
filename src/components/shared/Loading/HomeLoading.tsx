import Container from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

const HomeLoading = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container className="h-full">
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-center w-full">
            <Skeleton className="h-5 w-1/2 lg:w-1/4 mx-auto my-10 bg-slate-800" />
            <Skeleton className="h-20 lg:w-1/2 mx-auto my-10 bg-slate-800" />
            <Skeleton className="h-14 lg:w-1/2 mx-auto my-10 bg-slate-800" />
            <div className="w-11/12 md:w-8/12 mx-auto pb-10">
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 mb-5 bg-slate-800 " />
              <Skeleton className="h-5 bg-slate-800 " />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-11/12 md:w-8/12 mx-auto">
              <Skeleton className="h-10 w-1/2 bg-slate-800" />
              <Skeleton className="h-10 w-1/2 bg-slate-800" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeLoading;
