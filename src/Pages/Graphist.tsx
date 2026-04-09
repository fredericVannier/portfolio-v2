import Fade from "react-reveal/Fade";
import SlideshowBis from "../components/SlideshowBis";
import { Link } from "react-router-dom";

const Graphist = () => {
  return (
    <div className="bg-main text-white min-h-screen w-full flex">
      {/* Right: big title + slideshow */}
      <div className="w-full md:w-1/2 bg-second">
        <div className="h-auto" style={{ marginLeft: "23rem" }}>
          <Fade up delay={400}>
            <h1
              className="font-[800] leading-[0.7] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", marginTop: "13vh", marginLeft: "5vw" }}
            >
              Gra
              <br />
            </h1>
          </Fade>
          <Fade up delay={600}>
            <h1
              className="font-[800] leading-[0.7] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", marginTop: "20vh", marginLeft: "5vw" }}
            >
              Phiste
            </h1>
          </Fade>
          <Fade right>
            <div
              className="bg-accent-red relative z-[1]"
              style={{ height: "5rem", width: "20rem", top: "17vh", marginLeft: "4vw" }}
            />
          </Fade>
        </div>

        <div className="overflow-hidden relative w-full mx-auto" style={{ top: "26vh" }}>
          <Fade left delay={500}>
            <div className="flex mx-auto w-1/2 max-md:w-full">
              <SlideshowBis />
            </div>
          </Fade>
          <Fade up delay={700}>
            <p className="w-[calc(100%-100px)] mx-auto my-20 text-justify">
              De formation bac +2 en Communication et Marketing et animé par
              la passion du design, je me suis très vite spécialisé dans le
              graphisme.
              <br />
              <br />
              Fort de 7 ans d'expérience, je souhaite toujours m'améliorer et
              apprendre de nouvelles tendances. Au cours de ces années, j'ai
              pu réaliser des projets divers et variés que vous pouvez
              consulter ici.
            </p>
          </Fade>
        </div>
      </div>

      {/* Left: text description (desktop only) */}
      <div className="hidden md:flex w-1/2 h-screen justify-center items-center">
        <Fade up delay={700}>
          <p className="w-[30rem] text-justify">
            Diplomé en <span className="text-accent-red font-semibold">Communication et Marketing</span> et animé par la
            passion du design, je me suis très vite spécialisé dans le
            graphisme.
            <br />
            <br />
            Fort de 7 ans d'expérience, je souhaite toujours m'améliorer et
            apprendre de nouvelles tendances. Au cours de ces années, j'ai pu
            réaliser des projets divers et variés que vous pouvez consulter{" "}
            <Link to="/projets"><span className="text-accent-red font-semibold">ici</span>.</Link>
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Graphist;
