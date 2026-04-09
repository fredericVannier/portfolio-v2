import Fade from "react-reveal/Fade";
import topitImg from "../images/desktop-topit.jpg";

const Topit = () => {
  return (
    <div className="project-wrapper">
      <div className="project-left">
        <div className="project-title-area">
          <Fade up delay={400}>
            <h1 className="big-title-project">Topit</h1>
          </Fade>
          <Fade left delay={200}>
            <div className="project-forme" style={{ width: "17rem" }} />
          </Fade>
        </div>
        <Fade up delay={400}>
          <div className="project-para-block">
            <p className="project-para">
              Topit est un réseau social où les utilisateurs doivent s'inscrire
              afin de pouvoir profiter de toutes les fonctionnalités.
              <br />
              Une fois connecté, il est possible de poster des messages, les
              modifier ou les supprimer. Un système de commentaire et de votes
              est mis en place pour tous les posts.
            </p>
            <br />
            <br />
            <p className="project-para">
              Pour créer cette application, j'ai utilisé pour la partie
              front-end le framework <span className="text-accent-red font-semibold">React JS</span> et pour la partie
              back-end <span className="text-accent-red font-semibold">NodeJS</span> et <span className="text-accent-red font-semibold">Express</span>. Le
              déploiement est effectué avec Heroku.
            </p>
            <br />
            <p className="project-para">
              Ce projet à été réalisé seul pour valider ma certification du
              bootcamp Ironhack.
              <br />
              <br />
              <div className="project-links">
                <a href="https://topit.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                  <p className="hover:text-accent transition-colors">Visiter Topit!</p>
                </a>
                <a href="https://github.com/Fred011/Forum-FE" target="_blank" rel="noopener noreferrer">
                  <p>Voir le code</p>
                </a>
              </div>
            </p>
          </div>
        </Fade>
      </div>
      <Fade down delay={400}>
        <div
          className="project-right"
          style={{ backgroundImage: `url(${topitImg})` }}
        />
      </Fade>
    </div>
  );
};

export default Topit;
