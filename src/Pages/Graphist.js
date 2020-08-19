import React, { Component } from "react";
import Fade from "react-reveal/Fade"
import Slideshow from "./Slideshow";

export class Webdev extends Component {
  render() {
    return (
      <div className="work-wrapper">
        <div className="right-part">
          <div className="title-wrap-2">
            <h1 className="big-title">
              Gra
              <br />
              Phiste
            </h1>
            <Fade right>
              <div className="styled-forme-2"></div>
            </Fade>
          </div>
          <div className="previews-container-2">
            <div className="previews-wrap-2">
            <Slideshow />
            </div>
          </div>
        </div>
        <div className="left-part">
          <p className="job-description">
            De formation bac +2 en Communication et Marketing et animé par la
            passion du design, je me suis très vite spécialisé dans le
            graphisme.
            <br />
            <br />
            Fort de 7 ans d'expérience, je souhaite toujours m'améliorer et
            apprendre de nouvelles tendances. Au cours de ces années, j'ai pu
            réaliser des projets divers et variés que vous pouvez consulter ici.
          </p>
        </div>
      </div>
    );
  }
}

export default Webdev;
