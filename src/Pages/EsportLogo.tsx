import Reveal from "../components/Reveal";
import esportImg from "../images/logo-esport-2020.png";

const EsportLogo = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Reveal direction="up" delay={500}>
            <h1 className="big-title-project">Logo</h1>
          </Reveal>
          <br />
          <Reveal direction="up" delay={400}>
            <h1 className="big-title-project-b">Esport</h1>
          </Reveal>
          <Reveal direction="left" delay={200}>
            <div className="project-forme" style={{ width: "23rem" }} />
          </Reveal>
        </div>
        <Reveal direction="up" delay={400}>
          <div className="project-para-block-tall">
            <p className="project-para">
              Création de logos esport en tout genre pour équipes de joueurs
              professionnels et amateurs.
            </p>
            <br />
            <p className="project-para">
              Projet réalisé avec <span className="text-accent-red font-semibold">Photoshop</span> et{" "}
              <span className="text-accent-red font-semibold">Illustrator</span>.
              <br /><br />
              Plus de mon travail sur mon compte{" "}
              <span className="special">
                <a href="https://dribbble.com/FVDesign" target="_blank" rel="noopener noreferrer">Dribbble </a>
              </span>.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal direction="down" delay={400}>
        <div className="project-right" style={{ backgroundImage: `url(${esportImg})` }} />
      </Reveal>
    </div>
  );
};

export default EsportLogo;
