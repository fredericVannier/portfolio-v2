import Reveal from "../components/Reveal";
import Slideshow from "../components/Slideshow";

const Webdev = () => {
  return (
    <div className="bg-main text-white min-h-screen w-full flex">
      {/* Left: description (desktop only) */}
      <div className="hidden md:flex w-1/2 h-screen justify-center items-center">
        <Reveal direction="up" delay={700}>
          <p className="w-[30rem] text-justify">
            Passionné par le graphisme et les technologies du web, c'est tout
            naturellement que je me suis tourné vers le métier de développeur.
            <br />
            <br />
            J'ai donc rejoint les rangs du bootcamp Ironhack, à Barcelone, pour
            devenir <span className="text-accent-red font-semibold">développeur Full Stack</span>. Durant cette formation,
            j'ai pu réaliser ces 3 projets ainsi que mon premier site personnel.
          </p>
        </Reveal>
      </div>

      {/* Right: big title + slideshow */}
      <div className="w-full md:w-1/2 bg-second">
        <div className="h-auto">
          <Reveal direction="up" delay={400}>
            <h1
              className="font-[800] leading-[0.7] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", marginTop: "13vh", marginLeft: "5vw" }}
            >
              Déve<br />
            </h1>
          </Reveal>
          <Reveal direction="up" delay={600}>
            <h1
              className="font-[800] leading-[0.7] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", marginTop: "20vh", marginLeft: "5vw" }}
            >
              loppeur
            </h1>
          </Reveal>
          <Reveal direction="left">
            <div
              className="bg-accent relative z-[1] max-md:w-[20em] max-md:top-[15.4vh] max-md:ml-[2.5vw]"
              style={{ height: "5rem", width: "20rem", top: "17vh", marginLeft: "4vw" }}
            />
          </Reveal>
        </div>

        <div className="overflow-x-hidden relative mx-auto" style={{ top: "26vh" }}>
          <Reveal direction="right" delay={500}>
            <Slideshow />
          </Reveal>
        </div>

        {/* Mobile description */}
        <Reveal direction="up" delay={700}>
          <p className="md:invisible w-[calc(100%-100px)] mx-auto text-justify"
             style={{ marginTop: "18em", marginBottom: "5em" }}>
            Passionné par le graphisme et les technologies du web, c'est tout
            naturellement que je me suis tourné vers le métier de développeur.
            <br />
            <br />
            J'ai donc rejoint les rangs du bootcamp Ironhack, à Barcelone, pour
            devenir <span className="text-accent-red font-semibold">développeur Full Stack</span>. Durant cette formation,
            j'ai pu réaliser ces 3 projets ainsi que mon premier site personnel.
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Webdev;
