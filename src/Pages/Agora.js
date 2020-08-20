import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export class Agora extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <h1 className="big-title-2">
              Agora
              <br />
              Coaching
            </h1>
            <div className="styled-forme-agora"></div>
          </div>

          <div className="project-paragraph-container-space">
            <p className="firt-p project-paragraph">
              Création du logo pour une salle de coaching sportif à Barcelone avec une typographie personnalisée.
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
            <p className="project-paragraph">
              Projet réalisé avec <span>Photoshop</span> et{" "}
              <span>Illustrator</span>.
            </p>
          </div>
        </div>
        <div className="floating-div-agora"></div>
        <div className="project-container-right-agora"></div>
      </div>
    );
  }
}

export default Agora;
