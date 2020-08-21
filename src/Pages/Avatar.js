import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export class Avatar extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay={400}>
              <h1 className="big-title-2-avatar">Avatar, le dernier</h1>
            </Fade>
            <br />
            <Fade up delay={500}>
              <h1 className="big-title-3-avatar">maître de l'air</h1>
            </Fade>
            <Fade left delay={200}>
              <div className="styled-forme-avatar"></div>
            </Fade>
          </div>
          <Fade up delay={400}>
            <div className="project-paragraph-container-space">
              <p className="firt-p project-paragraph">
                Série d'illustrations en cours de développement sur le thème
                d'Avatar, le dernier maître de l'air.
                <br />
                <br />
                Chaque illustration représente un personnage de la série en y
                retrouvant les détails marquants qui les caractérisent.
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
        <Link
          to={{
            pathname:
              "https://dribbble.com/shots/11401706-Toph-the-best-earthbender",
          }}
          target="_blank"
        >
          <div className="floating-div"></div>
        </Link>
        <Fade down delay={400}>
          <div className="project-container-right-avatar"></div>
        </Fade>
      </div>
    );
  }
}

export default Avatar;
