import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";
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
            <h1 className="big-title-2">
              Logo
              <br />
              E-sport
            </h1>
            <div className="styled-forme-space-explorer"></div>
          </div>

          <div className="project-paragraph-container-space">
            <p className="firt-p project-paragraph">
              Création de logos e-sport en tout genre pour équipes de joueurs
              professionnels et amateurs.
              <br />
              <br />
            </p>
            <br />
            <p className="project-paragraph">
              Projets réalisés avec <span>Photoshop</span> et{" "}
              <span>Illustrator</span>.
            </p>
          </div>
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
        <div className="project-container-right-esport"></div>
      </div>
    );
  }
}

export default EsportLogo;
