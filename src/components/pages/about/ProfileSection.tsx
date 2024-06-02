import Container from "@/components/layout/Container";
// import picture from "/Abdul Alim Emon Cover Picture.png";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <section>
      <div className="w-full lg:hidden">
        <Image width={1200} height={400} src="/Abdul Alim Emon Cover Picture.png" className="w-full" alt="Cover Picture" />
      </div>
      <Container>
      <div className="hidden lg:block">
        <Image width={1200} height={200} src="/Abdul Alim Emon Cover Picture.png" className="rounded-b-lg h-[280px]" alt="Cover Picture" />
      </div>
      <div className="mt-[-40px] lg:mt-[-60px]">
        <Image width={320} height={320} src="/Abdul Alim Emon.png" className="w-[80px] lg:w-[120px] mx-auto rounded-full" alt="Profile Picture" />
      </div>
      div
      </Container>
    </section>
  );
};

export default ProfileSection;
