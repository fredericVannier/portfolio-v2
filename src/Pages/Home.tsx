import Webdev from "./Webdev";
import Graphist from "./Graphist";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <div className="bg-main text-white w-full">
      {/* Desktop hero */}
      <div className="hidden md:block h-screen w-full relative">
        <Reveal delay={500}>
          <h3 className="font-medium text-[1.5em] absolute mt-[40vh] pl-[15vw]">
            Bonjour, je suis Frédéric |
          </h3>
        </Reveal>
        <Reveal direction="left" delay={1900}>
          <h1 className="text-[4rem] font-bold absolute z-[1] pt-[45vh] pl-[15vw]">
            Développeur <br />
            <span className="text-accent font-bold">Full Stack</span> et{" "}
            <span className="text-accent-red font-bold">Graphiste</span>
          </h1>
        </Reveal>
      </div>

      {/* Mobile hero */}
      <div className="block md:hidden h-screen w-full relative">
        <Reveal delay={500}>
          <h3 className="font-medium text-[1.5em] absolute mt-[45vh] pl-[5.6vw]">
            Bonjour, je suis Frédéric |
          </h3>
        </Reveal>
        <Reveal direction="left" delay={1900}>
          <h1 className="text-[3.5em] font-bold absolute z-[1] pt-[50vh] pl-[5vw]">
            Développeur <br />
            <span className="text-accent font-bold">Full Stack</span> et{" "}
            <br />
            <span className="text-accent-red font-bold">Graphiste</span>
          </h1>
        </Reveal>
      </div>

      <Webdev />
      <Graphist />
    </div>
  );
};

export default Home;
