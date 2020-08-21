import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export class EsportLogo extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay="500">
              <h1 className="big-title-2">Logo</h1>
            </Fade>
            <br />
            <Fade up delay="400">
              <h1 className="big-title-3">E-sport</h1>
            </Fade>
            <Fade left delay="200">
              <div className="styled-forme-esport"></div>
            </Fade>
          </div>

          <Fade up delay="400">
            <div className="project-paragraph-container-space">
              <p className="firt-p project-paragraph">
                Création de logos e-sport en tout genre pour équipes de joueurs
                professionnels et amateurs.
                <br />
              </p>
              <br />
              <p className="project-paragraph">
                Projets réalisés avec <span>Photoshop</span> et{" "}
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
        <Link
          to={{
            pathname:
              "https://dribbble.com/shots/11401706-Toph-the-best-earthbender",
          }}
          target="_blank"
        >
          <div className="floating-div-esport"></div>
        </Link>
        <Fade down delay="400">
          <div className="project-container-right-esport"></div>
        </Fade>
      </div>
    );
  }
}

export default EsportLogo;
