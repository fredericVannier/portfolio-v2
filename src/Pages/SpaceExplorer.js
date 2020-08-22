import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export class SpaceExplorer extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay="500">
              <h1 className="big-title-2">Space</h1>
            </Fade>
            <br />
            <Fade up delay="500">
              <h1 className="big-title-3">Explorer</h1>
            </Fade>
            <Fade left delay="200">
              <div className="styled-forme-space-explorer"></div>
            </Fade>
          </div>

          <Fade up delay="400">
            <div className="project-paragraph-container-space">
              <p className="firt-p project-paragraph">
                Space Explorer est un jeu d'aventure 2D reprenant les codes bien
                connus du fameux Space Invaders.
                <br />
                Vous y incarnez un pilote sur un champ de bataille spatiale
                affrontant une horde d'enemis qui vous traqueront sans répit.
              </p>
              <br />
              <p className="project-paragraph">
                Ce projet est entièrement réaliser seul avec comme langages{" "}
                <span>HTML, CSS</span> et <span>Javascript</span>. Le déploiement est effectué avec Github.
                <br />
                <br />
                <div className="spaceLinks">
                  <Link
                    to={{
                      pathname: "https://fred011.github.io/Space-Explorer/",
                    }}
                    target="_blank"
                  >
                    <p className="play">Jouer!</p>
                  </Link>
                  <Link
                    to={{
                      pathname: "https://github.com/Fred011/Space-Explorer",
                    }}
                    target="_blank"
                  >
                    <p>Voir le code</p>
                  </Link>
                </div>
              </p>
            </div>
          </Fade>
        </div>
        <Fade down delay="400">
          <div className="project-container-right-space-explorer"></div>
        </Fade>
      </div>
    );
  }
}

export default SpaceExplorer;
