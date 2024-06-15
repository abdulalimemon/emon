import Container from "@/components/layout/Container";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-10 bg-slate-100 dark:bg-black">
      <Container>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold">About</h2>
          <p className="text-sm lg:text-base my-5">
            Hi, I&apos;m Abdul Alim Emon, a front-end web developer specializing
            in the MERN stack, based in Rangpur, Bangladesh. I recently
            graduated with honors and currently seeking opportunities to join a
            reputable company as a front-end developer. <br /> <br />
            I have a deep passion for coding and a strong desire to learn new
            technologies. My primary goal is to create user-friendly and
            engaging websites that leave a lasting impression on users. I enjoy
            the challenge of turning complex problems into simple, beautiful,
            and intuitive designs. <br /> <br />
            I am proficient in the MERN stack (MongoDB, Express.js, React.js,
            Node.js) and have extensive experience with various other
            technologies including JavaScript, TypeScript, Tailwind CSS,
            Bootstrap, Redux, and Next.js. This diverse skill set allows me to
            build robust and scalable web applications.
            <br /> <br />
            Continuous learning is a core part of my professional journey. I
            regularly update my skills to stay ahead of the curve and adapt
            quickly to new technologies. This adaptability makes me a valuable
            and versatile asset to any team.
            <br /> <br />
            In addition to my technical skills, I am a strong communicator and a
            collaborative team player. I believe that the best solutions come
            from working closely with others, sharing ideas, and continually
            refining our work. I am excited about the opportunity to contribute
            to a dynamic team and help create exceptional digital experiences.
          </p>
          <div className="flex items-center justify-start gap-2 flex-wrap">
            <a
              href="https://www.facebook.com/abdulalimemon02"
              title="Facebook Profile"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={100}
                height={30}
                src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                alt="facebook"
                className="h-[30px]"
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
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="github"
                className="h-[30px]"
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
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="linkedin"
                className="h-[30px]"
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
                src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                alt="instagram"
                className="h-[30px]"
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
                src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
                alt="Twitter"
                className="h-[30px]"
              />
            </a>
          </div>
        </div>
        <div className="my-6">
          <h2 className="text-base lg:text-lg font-medium">My speciality</h2>
          <div className="flex items-center gap-2 my-4 flex-wrap">
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>Web Developer</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>React Developer</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>MERN Stack Developer</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>Open to collaborate</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>Software Developer</span>
            </p>
            <p className="px-3 text-sm font-semibold flex items-center py-1 border rounded-full">
              <span>Looking for new opportunities</span>
            </p>
          </div>
        </div>
        <div className="my-6">
          <h2 className="text-base lg:text-lg font-medium">
            Languages I&apos;m fluent in
          </h2>
          <div className="flex items-center gap-2 my-4 flex-wrap">
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              Bengali
            </p>
            <p className="px-3 text-sm font-semibold py-1 border rounded-full">
              English
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
