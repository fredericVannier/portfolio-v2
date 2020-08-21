import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export class PersonalLogo extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <h1 className="big-title-2">
              Personal
              <br />
              Logo
            </h1>
            <div className="styled-forme-agora"></div>
          </div>

          <div className="project-paragraph-container-space">
            <p className="firt-p project-paragraph">
              Création de mon logo personnel représentant la première lettre de mon prénom et mon nom de famille.
              <br />
              <br />
            </p>
            <p className="project-paragraph">
              sdfssd
              <br />
            </p>
            <br />
            <p className="project-paragraph">
              Projet réalisé avec <span>Photoshop</span> et{" "}
              <span>Illustrator</span>.
            </p>
          </div>
        </div>
        <div className="project-container-right-personal-logo"></div>
      </div>
    );
  }
}

export default PersonalLogo;
