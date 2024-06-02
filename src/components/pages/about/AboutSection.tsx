import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-10">
      <Container>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold">About</h2>
          <p className="text-sm lg:text-base my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            possimus maiores et sit? Pariatur voluptatibus sapiente, impedit
            modi in dolorum itaque nulla labore possimus ex expedita
            necessitatibus at aut? Iusto corporis esse recusandae quos assumenda
            cupiditate, temporibus totam, rerum quisquam, architecto minima unde
            accusamus beatae qui possimus fugit incidunt sit perferendis
            molestias optio? Illum, cum aliquam. Quas sequi rerum illo in
            voluptatem culpa repellat consectetur iure amet ex odit, debitis
            animi voluptatum cupiditate temporibus, dignissimos neque quod
            laborum maxime impedit eos ullam? Magnam consequatur aliquid quam
            autem error? Natus, voluptates consequuntur. Delectus, corrupti
            facilis! Commodi quos esse officia dolor ea?
          </p>
          <div className="flex items-center justify-start gap-2">
            <a
              href="https://www.facebook.com/abdulalimemon02"
              title="Facebook Profile"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={100}
                height={30}
                src="https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white"
                alt="facebook"
              />
            </a>
            <a
              href="https://github.com/abdulalimemon"
              title="Github"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={100}
                height={30}
                src="https://camo.githubusercontent.com/2cbe5bd2692ed16ec7d0079d13f4c524967f28d3e95d333ccf0e4f69a1b680db/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333234323932652e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"
                alt="github"
              />
            </a>
            <a
              href="https://linkedin.com/in/abdulalimemon"
              title="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={100}
                height={30}
                src="https://camo.githubusercontent.com/940cec181d9617509ad8a6cfac607b4ddf5fcc02dd3bf17590d1888f2bb070c7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333145373742352e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"
                alt="linkedin"
              />
            </a>
            <a
              href="https://instagram.com/emon.web_developer"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={100}
                height={30}
                src="https://camo.githubusercontent.com/2cf968f0f7b261ca1b4338113f54a149f63c4c55cfe9e3dc517c1f1168fb15b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f696e7374616772616d2d2532333030303030302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d696e7374616772616d266c6f676f436f6c6f723d7768697465"
                alt="instagram"
              />
            </a>
            <a
              href="https://x.com/abdulalimemon"
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={100}
                height={30}
                src="https://camo.githubusercontent.com/d31f8f214d3b6695a172ef98e23c1b02fd26063ac085cf22b90e9a943c3724ef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747769747465722d2532333030616365652e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d74776974746572266c6f676f436f6c6f723d7768697465"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-base lg:text-lg font-medium">My speciality</h2>
          <div>
            <span>Web Developer</span>
            <span>React Developer</span>
            <span>MERN Stack Developer</span>
            <span>Open to collaborate</span>
            <span>Web Developer</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
