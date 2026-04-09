import Fade from "react-reveal/Fade";
import icoImg from "../images/icoSystem-landing-page-2.png";

const IcoSystem = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Fade up delay={500}>
            <h1 className="big-title-project">icoSystem</h1>
          </Fade>
          <Fade left delay={500}>
            <div className="project-forme" style={{ width: "17rem" }} />
          </Fade>
        </div>
        <Fade up delay={400}>
          <div className="project-para-block">
            <p className="project-para">
              Petsit est une application permettant de mettre en relation les
              personnes souhaitant faire garder leur animal et les petsitters.
              Cette application est conçut uniquement pour mobile.
              <br />
              Une fois connecté, il est possible de poster une annonce pour
              demander à garder votre animal et les petsitters peuvent y
              repondre. Chaque utilisateur a un profil qu'il peut modifier
              comme il le souhaite.
            </p>
            <br />
            <p className="project-para">
              Ce projet a été réalisé avec un autre développeur et en
              utilisant les langages{" "}
              <span className="text-accent-red font-semibold">HTML, CSS, HBS, NodeJS, Express</span> et{" "}
              <span className="text-accent-red font-semibold">Javascript</span>. Le déploiement est effectué avec Heroku.
              <br />
              <br />
              <div className="project-links">
                <a href="https://github.com/Falconairio/Petsit" target="_blank" rel="noopener noreferrer">
                  <p>Voir le code</p>
                </a>
              </div>
            </p>
          </div>
        </Fade>
      </div>
      <Fade down delay={400}>
        <div className="project-right" style={{ backgroundImage: `url(${icoImg})` }} />
      </Fade>
    </div>
  );
};

export default IcoSystem;
