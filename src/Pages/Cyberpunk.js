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
              punk UI
            </h1>
            <div className="styled-forme-space-explorer"></div>
          </div>

          <div className="project-paragraph-container-space">
            <p className="firt-p project-paragraph">
              Ce concept est un projet personnel basé sur le jeux vidéo
              Cyberpunk 2077.
              <br />
              Inspiré par l'univers rétro futuriste, j'ai imaginé la une partie
              du site internet où seraient présenté les personnages.
            </p>
            <br />
            <p className="project-paragraph">
              Projet réalisé avec <span>Photoshop</span> et <span>Illustrator</span>.
            </p>
          </div>
        </div>
        <div className="project-container-right-cyberpunk"></div>
      </div>
    );
  }
}

export default Cyberpunk;
