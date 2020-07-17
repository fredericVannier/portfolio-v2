import React, { Component } from "react";

export class Webdev extends Component {
  render() {
    return (
      <div className="webdev-wrapper">
        <div className="left-part">
          <p className="job-description">
            Fort d’une expérience de 7 ans dans le domaine du graphisme, je
            maîtrise parfaitement mon sujet.
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
