import React, { Component } from "react";

export class Webdev extends Component {
  render() {
    return (
      <div className="work-wrapper">
        <div className="left-part">
          <p className="job-description">
            Passinonné par le graphisme et les technologies web, c'est tout
            naturellement que je me suis tournée vers le métier de développeur.
            <br />
            <br />
            J'ai donc rejoins les rangs du bootcamp Ironhack, à Barcelone, pour
            devenir Développeur Full Stack. Durant cette formation de 3 mois,
            j'ai pu réaliser ces 3 projets ainsi que mon premier site personnel.
          </p>
        </div>
        <div className="right-part">
          <div className="title-wrap">
            <h1 className="big-title">
              Déve
              <br />
              loppeur
            </h1>
            <div className="styled-forme"></div>
          </div>
          <div className="previews-container">
            <div className="previews-wrap">
              <div className="preview"></div>
              <div className="preview"></div>
              <div className="preview"></div>
              <div className="preview"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Webdev;
