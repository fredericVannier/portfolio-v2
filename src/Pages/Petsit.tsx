import Reveal from "../components/Reveal";
import petsitImg from "../images/petsit-showcase.jpeg";

const Petsit = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Reveal direction="up" delay={500}>
            <h1 className="big-title-project">Petsit</h1>
          </Reveal>
          <Reveal direction="left" delay={500}>
            <div className="project-forme" style={{ width: "17rem" }} />
          </Reveal>
        </div>
        <Reveal direction="up" delay={400}>
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
              <br /><br />
              <div className="project-links">
                <a href="https://github.com/Falconairio/Petsit" target="_blank" rel="noopener noreferrer">
                  <p>Voir le code</p>
                </a>
              </div>
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal direction="down" delay={400}>
        <div className="project-right" style={{ backgroundImage: `url(${petsitImg})` }} />
      </Reveal>
    </div>
  );
};

export default Petsit;
