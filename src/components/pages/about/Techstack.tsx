import Container from "@/components/layout/Container";

const Techstack = () => {
  return (
    <section className="py-10 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold">Tech Stack</h2>
        </div>
        <div className="my-5">
          <h2 className="text-base lg:text-lg font-medium">
            Front End Technologies
          </h2>
          <div className="flex items-center gap-2 my-4 flex-wrap">
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>HTML 5</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>CSS 3</span>
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Tailwind CSS
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Bootstrap
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>JavaScript</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>TypeScript</span>
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              React JS
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Firebase
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Redux
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Next JS
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              WordPress
            </p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-base lg:text-lg font-medium">Back End Technologies</h2>
          <div className="flex items-center gap-2 my-4 flex-wrap">
          <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Node JS
            </p>
          <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Express JS
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              MongoDB
            </p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-base lg:text-lg font-medium">Tools</h2>
          <div className="flex items-center gap-2 my-4 flex-wrap">
          <p className="px-3 text-sm font-semibold py-1 border rounded-full">
          Postman
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            Figma
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            Trello
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            Git
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            npm
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            Yarn
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            GitHub
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            Vercel
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
            Netlify
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Techstack;
