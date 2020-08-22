import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export class Cyberpunk extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay="400">
              <h1 className="big-title-2">Cyber</h1>
            </Fade>
            <br />
            <Fade up delay="500">
              <h1 className="big-title-3">punk UI</h1>
            </Fade>
            <Fade left delay="200">
              <div className="styled-forme-cyberpunk"></div>
            </Fade>
          </div>

          <Fade up delay="400">
            <div className="project-paragraph-container-space">
              <p className="firt-p project-paragraph">
                Ce concept est un projet personnel basé sur le jeux vidéo
                Cyberpunk 2077.
                <br />
                Inspiré par l'univers rétro futuriste, j'ai imaginé une
                partie du site internet où seraient présenté les personnages.
              </p>
              <br />
              <p className="project-paragraph">
                Projet réalisé avec <span>Photoshop</span> et{" "}
                <span>Illustrator</span>.
                <br />
                <br />
                Plus de mon travail sur mon compte{" "}
                <span className="special">
                  <Link
                    to={{
                      pathname: "https://dribbble.com/FVDesign",
                    }}
                    target="_blank"
                  >
                    Dribbble{" "}
                  </Link>
                </span>
                .
              </p>
            </div>
          </Fade>
        </div>
        <Fade down delay="400">
          <div className="project-container-right-cyberpunk"></div>
        </Fade>
      </div>
    );
  }
}

export default Cyberpunk;
