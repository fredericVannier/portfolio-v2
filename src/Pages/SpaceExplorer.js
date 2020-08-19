import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export class SpaceExplorer extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <h1 className="big-title-2">
              Space
              <br />
              Explorer
            </h1>
            <div className="styled-forme-space-explorer"></div>
          </div>

          <div className="project-paragraph-container-space">
            <p className="firt-p project-paragraph">
              Space Explorer est un jeu d'aventure 2D reprenant les codes bien
              connus du fameux Space Invaders.
              <br />
              Vous y incarnez un pilote sur un champ de bataille spatiale
              affrontant une horde d'enemis qui vous traqueront sans répit.
            </p>
            <br />
            <br />
            <p className="project-paragraph">
              Ce projet est entièrement réaliser seul avec comme langages HTML,
              CSS et Javascript
            </p>
          </div>
        </div>
        <div className="project-container-right"></div>
      </div>
    );
  }
}

export default SpaceExplorer;
