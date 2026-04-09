import Fade from "react-reveal/Fade";
import agoraImg from "../images/AGORA_WALL.jpg";

const Agora = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Fade up delay={400}>
            <h1 className="big-title-project">Agora</h1>
          </Fade>
          <br />
          <Fade up delay={300}>
            <h1 className="big-title-project-b">Coaching</h1>
          </Fade>
          <Fade left delay={200}>
            <div className="project-forme" style={{ width: "25rem", left: "-20px" }} />
          </Fade>
        </div>
        <Fade up delay={400}>
          <div className="project-para-block-tall">
            <p className="project-para">
              Création du logo pour un coach sportif à Barcelone avec une
              typographie personnalisée.
              <br />
              <br />
            </p>
            <p className="project-para">
              Agora coaching est un centre de bien-être où vos entraînements
              personnels, de groupe, d'ostéopathie, de physio, de chiropractoe
              et de nutrition se font dans un même lieu.
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
        <div className="project-right" style={{ backgroundImage: `url(${agoraImg})` }} />
      </Fade>
    </div>
  );
};

export default Agora;
