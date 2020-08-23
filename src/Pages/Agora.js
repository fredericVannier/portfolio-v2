import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export class Agora extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay={400}>
              <h1 className="big-title-2">Agora</h1>
            </Fade>
            <br />
            <Fade up delay={300}>
              <h1 className="big-title-3">Coaching</h1>
            </Fade>
            <Fade left delay={200}>
              <div className="styled-forme-agora"></div>
            </Fade>
          </div>
          <Fade up delay={400}>
            <div className="project-paragraph-container-space">
              <p className="firt-p project-paragraph">
                Création du logo pour une salle de coaching sportif à Barcelone
                avec une typographie personnalisée.
                <br />
                <br />
              </p>
              <p className="project-paragraph">
                Agora coaching est un centre de bien-être où vos entraînements
                personnels, de groupe, d'ostéopathie, de physio, de chiropractoe
                et de nutrition se font dans un même lieu.
                <br />
              </p>
              <br />
              <p className="project-paragraph last-p">
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
        <Fade down delay={400}>
          <div className="project-container-right-agora"></div>
        </Fade>
      </div>
    );
  }
}

export default Agora;
