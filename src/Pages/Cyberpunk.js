import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export class Cyberpunk extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <h1 className="big-title-2">
              Cyber
              <br />
              punk
            </h1>
            <div className="styled-forme-space-explorer"></div>
          </div>

          <div className="project-paragraph-container-space">
            <p className="firt-p project-paragraph">
              Ce concept est un projet personnel basé sur le jeux vidéo Cyberpunk 2077.  imaginant la présentation d
              <br />
              Vous y incarnez un pilote sur un champ de bataille spatiale
              affrontant une horde d'enemis qui vous traqueront sans répit.
            </p>
            <br />
            <p className="project-paragraph">
              Ce projet est entièrement réaliser seul avec comme langages <span>HTML,
              CSS</span> et <span>Javascript</span>.
            </p>
          </div>
        </div>
        <div className="project-container-right-cyberpunk"></div>
      </div>
    );
  }
}

export default Cyberpunk;
