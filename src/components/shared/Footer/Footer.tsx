import Container from "@/components/layout/Container";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className="footer-bg py-10">
      <Container>
        <div className="flex flex-col items-center space-y-5">
          <div className="grid grid-flow-col gap-3">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eceef1] to-[#2263c4]">
              Abdul Alim Emon
            </h2>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.linkedin.com/in/abdulalimemon/"
                className="p-2 rounded-full bg-[#112240] mr-2 hover:bg-[#1A3B69]"
                title="LinkedIn Profile"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="size-6 text-color-yellow" />
              </a>
              <a
                href="https://github.com/abdulalimemon"
                className="p-2 rounded-full bg-[#112240] mr-2 hover:bg-[#1A3B69]"
                title="Github Profile"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="size-6 text-color-yellow" />
              </a>
              <a
                href="https://www.facebook.com/abdulalimemon02"
                className="p-2 rounded-full bg-[#112240] mr-2 hover:bg-[#1A3B69]"
                title="Facebook Profile"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="size-6 text-color-yellow" />
              </a>
              <a
                className="p-2 rounded-full bg-[#112240] mr-2 hover:bg-[#1A3B69]"
                title="Send Email"
                href="mailto:abdulalimemon11@gmail.com"
              >
                <MdMarkEmailUnread className="size-6 text-color-yellow" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm lg:text-base text-center">
              Copyright © {year} - All right reserved by Abdul Alim Emon.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
