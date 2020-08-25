import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export class Petsit extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay="500">
              <h1 className="big-title-2">Petsit</h1>
            </Fade>
            <Fade left delay="500">
              <div className="styled-forme-project-petsit"></div>
            </Fade>
          </div>

          <Fade up delay="400">
            <div className="project-paragraph-container">
              <p className="first-p project-paragraph">
                Petsit est une application permettant de mettre en relation les
                personnes souhaitant faire garder leur animal et les petsitters.
                Cette application est conçut uniquement pour mobile.
                <br />
                Une fois connecté, il est possible de poster une annonce pour
                demander à garder votre animal et les petsitters peuvent y
                repondrent. Chaque utilisateur a un profil qu'il peut modifier
                comme il l'entend.
              </p>
              <br />
              <p className="project-paragraph">
                Ce projet a été réalisé avec un autre développeur et en
                utilisant les langages{" "}
                <span>HTML, CSS, HBS, NodeJS, Express</span> et{" "}
                <span>Javascript</span>. Le déploiement est effectué avec
                Heroku.
                <br />
                <br />
                <div className="spaceLinks">
                  <Link
                    to={{
                      pathname: "https://github.com/Falconairio/Petsit",
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
        <Fade down delay="400">
          <div className="project-container-right-petsit"></div>
        </Fade>
      </div>
    );
  }
}

export default Petsit;
