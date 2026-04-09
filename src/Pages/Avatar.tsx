import Fade from "react-reveal/Fade";
import avatarImg from "../images/avatar-portrait.jpg";

const Avatar = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Fade up delay={400}>
            {/* Avatar has unique large titles with special positioning */}
            <h1
              className="font-[800] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", lineHeight: 1.9, marginTop: "1.3em", left: "150px" }}
            >
              Avatar,
            </h1>
            <h1
              className="font-[800] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", lineHeight: 1.9, marginTop: "2em", left: "150px" }}
            >
              le dernier
            </h1>
          </Fade>
          <br />
          <Fade up delay={500}>
            <h1
              className="font-[800] [font-variant-caps:all-small-caps] absolute z-[2]"
              style={{ fontSize: "6rem", lineHeight: 1.9, marginTop: "2.5em", left: "150px" }}
            >
              maître de l'air
            </h1>
          </Fade>
          <Fade left delay={200}>
            <div
              className="bg-accent-red relative z-[1]"
              style={{ height: "8em", width: "35rem", top: "13rem", left: "-8.5em", marginBottom: "5rem" }}
            />
          </Fade>
        </div>
        <Fade up delay={400}>
          <div className="project-para-block-tall">
            <p className="project-para">
              Série d'illustrations en cours de développement sur le thème
              d'Avatar, le dernier maître de l'air.
              <br />
              <br />
              Chaque illustration représente un personnage de la série en y
              retrouvant les détails marquants qui les caractérisent.
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
        <div className="project-right" style={{ backgroundImage: `url(${avatarImg})` }} />
      </Fade>
    </div>
  );
};

export default Avatar;
