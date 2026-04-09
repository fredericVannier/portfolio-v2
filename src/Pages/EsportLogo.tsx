import Fade from "react-reveal/Fade";
import esportImg from "../images/logo-esport-2020.png";

const EsportLogo = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Fade up delay={500}>
            <h1 className="big-title-project">Logo</h1>
          </Fade>
          <br />
          <Fade up delay={400}>
            <h1 className="big-title-project-b">Esport</h1>
          </Fade>
          <Fade left delay={200}>
            <div className="project-forme" style={{ width: "23rem" }} />
          </Fade>
        </div>
        <Fade up delay={400}>
          <div className="project-para-block-tall">
            <p className="project-para">
              Création de logos esport en tout genre pour équipes de joueurs
              professionnels et amateurs.
              <br />
            </p>
            <br />
            <p className="project-para">
              Projet réalisé avec <span className="text-accent-red font-semibold">Photoshop</span> et{" "}
              <span className="text-accent-red font-semibold">Illustrator</span>.
              <br />
              <br />
              Plus de mon travail sur mon compte{" "}
              <span className="special">
                <a href="https://dribbble.com/FVDesign" target="_blank" rel="noopener noreferrer">
                  Dribbble{" "}
                </a>
              </span>
              .
            </p>
          </div>
        </Fade>
      </div>
      <Fade down delay={400}>
        <div className="project-right" style={{ backgroundImage: `url(${esportImg})` }} />
      </Fade>
    </div>
  );
};

export default EsportLogo;
