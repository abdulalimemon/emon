import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
      id: "1",
      title: "Recover Ease",
      detail: "",
      image: "",
      link: ""
  },
  {
      id: "",
      title: "",
      detail: "",
      image: "",
      link: ""
  },
  {
      id: "",
      title: "",
      detail: "",
      image: "",
      link: ""
  },
  {
      id: "",
      title: "",
      detail: "",
      image: "",
      link: ""
  },
  {
      id: "",
      title: "",
      detail: "",
      image: "",
      link: ""
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div>
          <h2 className="text-center text-2xl font-semibold text-text">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1">
          <div className="flex">
            <div>
              <h2>name</h2>
              <p>details</p>
              <Link href="/">View details</Link>
            </div>
            <div>
              <Image src={} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
