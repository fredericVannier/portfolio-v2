import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export class Project1 extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <h1 className="big-title-2">Topit</h1>
            <div className="styled-forme-project"></div>
          </div>

          <div className="project-paragraph-container">
            <p className="firt-p project-paragraph">
              Topit est un réseau social où les utilisateurs doivent s'inscrire
              afin de pouvoir profiter de toutes les fonctionnalités.
              <br />
              Une fois connecté, il est possible de poster des messages, les
              modifier ou les supprimer. Un système de commentaire et de votes
              est mis en place pour tous les posts.
            </p>
            <br />
            <br />
            <p className="project-paragraph">
              Pour créer cette application, j'ai utilisé pour la partie
              front-end le framework React JS et pour la partie back-end NodeJS
              et Express.
            </p>
            <br />
            <p className="project-paragraph">
              Ce projet à été réaliser seul pour valider ma certification du
              bootcamp Ironhack.
            </p>
          </div>
        </div>
        <div className="project-container-right"></div>
      </div>
    );
  }
}

export default Project1;
