import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export class Topit extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay={400}>
              <h1 className="big-title-2">Topit</h1>
            </Fade>
            <Fade left delay={200}>
              <div className="styled-forme-project-topit"></div>
            </Fade>
          </div>
          <Fade up delay={400}>
            <div className="project-paragraph-container">
              <p className="first-p project-paragraph">
                Topit est un réseau social où les utilisateurs doivent
                s'inscrire afin de pouvoir profiter de toutes les
                fonctionnalités.
                <br />
                Une fois connecté, il est possible de poster des messages, les
                modifier ou les supprimer. Un système de commentaire et de votes
                est mis en place pour tous les posts.
              </p>
              <br />
              <br />
              <p className="project-paragraph">
                Pour créer cette application, j'ai utilisé pour la partie
                front-end le framework <span>React JS</span> et pour la partie
                back-end <span>NodeJS</span> et <span>Express</span>. Le
                déploiement est effectué avec Heroku.
              </p>
              <br />
              <p className="project-paragraph">
                Ce projet à été réalisé seul pour valider ma certification du
                bootcamp Ironhack.
                <br />
                <br />
                <div className="spaceLinks">
                  <Link
                    to={{
                      pathname: "https://topit.herokuapp.com/login",
                    }}
                    target="_blank"
                  >
                    <p className="play">Visiter Topit!</p>
                  </Link>
                  <Link
                    to={{
                      pathname: "https://github.com/Fred011/Forum-FE",
                    }}
                    target="_blank"
                  >
                    <p className="last-p">Voir le code</p>
                  </Link>
                </div>
              </p>
            </div>
          </Fade>
        </div>
        <Fade down delay={400}>
          <div className="project-container-right-topit"></div>
        </Fade>
      </div>
    );
  }
}

export default Topit;
