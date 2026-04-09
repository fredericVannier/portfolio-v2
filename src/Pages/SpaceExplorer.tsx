import Reveal from "../components/Reveal";
import spaceImg from "../images/spaceExplorer.png";

const SpaceExplorer = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Reveal direction="up" delay={500}>
            <h1 className="big-title-project">Space</h1>
          </Reveal>
          <br />
          <Reveal direction="up" delay={500}>
            <h1 className="big-title-project-b">Explorer</h1>
          </Reveal>
          <Reveal direction="left" delay={200}>
            <div className="project-forme" style={{ width: "25rem" }} />
          </Reveal>
        </div>
        <Reveal direction="up" delay={400}>
          <div className="project-para-block-tall">
            <p className="project-para">
              Space Explorer est un jeu d'aventure 2D reprenant les codes bien
              connus du fameux Space Invaders.
              <br />
              Vous y incarnez un pilote sur un champ de bataille spatiale
              affrontant une horde d'ennemis qui vous traqueront sans répit. Le
              jeu se joue uniquement sur ordinateur.
            </p>
            <br />
            <p className="project-para">
              Ce projet est entièrement réalisé seul avec les langages{" "}
              <span className="text-accent-red font-semibold">HTML, CSS</span> et{" "}
              <span className="text-accent-red font-semibold">Javascript</span>. Le déploiement est effectué avec Github.
              <br /><br />
              <div className="project-links">
                <a href="https://fred011.github.io/Space-Explorer/" target="_blank" rel="noopener noreferrer">
                  <p className="hover:text-accent transition-colors">Jouer!</p>
                </a>
                <a href="https://github.com/Fred011/Space-Explorer" target="_blank" rel="noopener noreferrer">
                  <p>Voir le code</p>
                </a>
              </div>
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal direction="down" delay={400}>
        <div className="project-right" style={{ backgroundImage: `url(${spaceImg})` }} />
      </Reveal>
    </div>
  );
};

export default SpaceExplorer;
