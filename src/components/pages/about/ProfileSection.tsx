import Container from "@/components/layout/Container";
import picture from "/public/Abdul Alim Emon Cover Picture.png";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <section>
      <Container>
        <div className="rounded-xl">
          <Image width={1200} height={400} src={picture} alt="Cover Picture" />
        </div>
      </Container>
    </section>
  );
};

export default ProfileSection;
