import Fade from "react-reveal/Fade";
import cyberpunkLogoImg from "../images/cyberpunk-logo.png";

const CyberpunkLogo = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Fade up delay={400}>
            <h1 className="big-title-project">Cyber</h1>
          </Fade>
          <br />
          <Fade up delay={500}>
            <h1 className="big-title-project-b">punk logo</h1>
          </Fade>
          <Fade left delay={200}>
            <div className="project-forme" style={{ width: "23rem" }} />
          </Fade>
        </div>
        <Fade up delay={400}>
          <div className="project-para-block-tall">
            <p className="project-para">
              Ce logo est un projet personnel basé sur le jeu vidéo Cyberpunk 2077.
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
        <div className="project-right" style={{ backgroundImage: `url(${cyberpunkLogoImg})` }} />
      </Fade>
    </div>
  );
};

export default CyberpunkLogo;
