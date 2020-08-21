import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export class Petsit extends Component {
  render() {
    return (
      <div className="project-wrapper">
        <SideMenu />
        <Button />
        <Name />
        <div className="project-container-left">
          <div className="title-wrap-2">
            <Fade up delay="500">
              <h1 className="big-title-2">Petsit</h1>
            </Fade>
            <Fade left delay="500">
              <div className="styled-forme-project-petsit"></div>
            </Fade>
          </div>

            <Fade up delay="400">
          <div className="project-paragraph-container">
            <p className="firt-p project-paragraph">
              Petsit est une application permettant de mettre en relation
              lespersonnes souhaitant faire garder leur animal et les
              petsitters. Cette application est conçut uniquement pour mobile.
              <br />
              Une fois connecté, il est possible de poster une annonce pour
              demander à garder votre animal et les petsitters peuvent y
              repondrent. Chaque utilisateur a un profil qu'il peut modifier
              comme il l'entend.
            </p>
            <br />
            <p className="project-paragraph">
              Ce projet a été réalisé en équipe et en utilisant les langages{" "}
              <span>HTML, CSS, HBS, NodeJS, Express</span> et{" "}
              <span>Javascript</span>. Le déploiement est effectué avec Heroku.
              <br />
                <br />
                <div className="spaceLinks">
                  <Link
                    to={{
                      pathname: "https://github.com/Falconairio/Petsit",
                    }}
                    target="_blank"
                  >
                    <p>Voir le code</p>
                  </Link>
                </div>
            </p>
          </div>
            </Fade>
        </div>
            <Fade down delay="400">
        <div className="project-container-right-petsit"></div>
            </Fade>
      </div>
    );
  }
}

export default Petsit;
