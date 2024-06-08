import Container from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Projects.
          </h2>
          <Skeleton />
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-[22px] bg-gray-50 dark:bg-slate-900">
            <div className="w-full lg:w-6/12 flex flex-col justify-evenly">
              <h2 className="text-xl lg:text-2xl font-bold py-3"></h2>
              <p className="text-base lg:text-2xl pb-3"></p>
              <div className="inline-block">
                <span className="inline-block">
                  <Skeleton className="py-3 flex items-center justify-start hover:text-color-yellow dark:hover:text-link">
                    <span>View details </span>{" "}
                  </Skeleton>
                </span>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <Skeleton className="w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Loading;
