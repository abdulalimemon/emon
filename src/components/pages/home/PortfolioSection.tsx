import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

const data = [
  {
    id: "1",
    title: "Recover Ease",
    detail: "Recover Ease is a helpful platform for organizing and delivering aid like food and supplies to people who need it quickly during emergencies.",
    image: "/recover-ease.png",
    link: "/portfolio/recover-ease",
  },
  {
    id: "2",
    title: "Shine Store",
    detail: "Shine Store is an online shop offering a wide range of cleaning supplies. Get everything you need to keep your space clean and shiny!",
    image: "/shine-store.png",
    link: "/portfolio/shine-store",
  },
  {
    id: "3",
    title: "SpacesWare",
    detail: "Shine Store is an online shop offering a wide range of cleaning supplies. Get everything you need to keep your space clean and shiny!",
    image: "/spacesware.png",
    link: "/portfolio/spacesware",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-semibold py-5 lg:py-10">
            Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {data.map((item) => (
            <div className="flex flex-col-reverse lg:flex-row p-5 lg:py-10 lg:px-12 shadow-lg w-full gap-5 rounded-md bg-gray-50 dark:bg-slate-900" key={item.id}>
              <div className="w-full lg:w-6/12">
                <h2 className="text-xl lg:text-2xl font-bold py-3">{item.title}</h2>
                <p className="text-xl lg:text-2xl pb-3">{item.detail}</p>
                <p><Link href={item.link} className="py-3 flex items-center justify-start hover:text-link"><span>View details </span> <FaCaretRight className="size-5 ml-2" /></Link></p>
              </div>
              <div className="w-full lg:w-6/12">
                <Image src={item.image} alt={item.title} width={600} height={150} className="w-full" />
              </div>
            </div>
          ))}
          <p className="flex items-center justify-end"><Link href="/" className="flex items-center justify-center hover:text-link"><span>Browse more</span> <FaCaretRight className="size-5 ml-2" /></Link></p>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
