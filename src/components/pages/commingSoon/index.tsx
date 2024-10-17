import Container from "@/components/layout/Container";
import "@/style/index.css";
import CountdownTimer from "./CountdownTimer";

const CommingSoon = () => {
  return (
    <section className="py-10 lg:py-20 bg-commingSoon text-center text-white h-[100vh] flex justify-between items-center">
      <Container>
        <p className="text-sm md:text-lg font-medium py-3">Hey there,</p>
        <h2 className="text-4xl md:text-8xl font-bold pb-7">
          We&apos;re Coming Soon!
        </h2>
        <div className="flex justify-between items-center flex-col">
          <CountdownTimer />
        </div>
      </Container>
    </section>
  );
};

export default CommingSoon;
