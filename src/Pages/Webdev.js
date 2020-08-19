import React from "react";
import { Spring } from "react-spring/renderprops";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Slideshow from './Slideshow';

export default function Webdev() {
  return (
    <div className="work-wrapper">
      <div className="left-part">
        <p className="job-description">
          Passinonné par le graphisme et les technologies web, c'est tout
          naturellement que je me suis tournée vers le métier de développeur.
          <br />
          <br />
          J'ai donc rejoins les rangs du bootcamp Ironhack, à Barcelone, pour
          devenir Développeur Full Stack. Durant cette formation de 3 mois, j'ai
          pu réaliser ces 3 projets ainsi que mon premier site personnel.
        </p>
      </div>
      <div className="right-part">
        <div className="title-wrap">
          <Spring from={{ opacity: 0, transitionDuration: 2000 }} to={{ opacity: 1 }}>
            {(props) => (
              <div style={props}>
                <h1 className="big-title">
                  Déve
                  <br />
                  loppeur
                </h1>
              </div>
            )}
          </Spring>
          <Spring from={{ width: 0 }} to={{ width: 320 }}>
            {(props) => <div style={props} className="styled-forme"></div>}
          </Spring>
        </div>
        <div className="previews-container">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
