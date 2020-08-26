import React from "react";
import Fade from "react-reveal/Fade";
import Slideshow from "../components/Slideshow";

export default function Webdev() {
  return (
    <div className="webdev-wrapper">
      <div className="left-part">
        <Fade up delay={700}>
          <p className="job-description">
            Passionné par le graphisme et les technologies du web, c'est tout
            naturellement que je me suis tourné vers le métier de développeur.
            <br />
            <br />
            J'ai donc rejoint les rangs du bootcamp Ironhack, à Barcelone, pour
            devenir Développeur Full Stack. Durant cette formation de 3 mois,
            j'ai pu réaliser ces 3 projets ainsi que mon premier site personnel.
          </p>
        </Fade>
      </div>
      <div className="right-part">
        <div className="title-wrap">
          <Fade up delay={400}>
            <h1 className="big-title">
              Déve
              <br />
            </h1>
          </Fade>
          <Fade up delay={600}>
            <h1 className="big-title-bottom">loppeur</h1>
          </Fade>
          <Fade left>
            <div className="styled-forme"></div>
          </Fade>
        </div>
        <div className="previews-container">
          <Fade right delay={500}>
            <Slideshow />
          </Fade>
        </div>

        <Fade up delay={700}>
          <p className="job-description-mobile">
            Passionné par le graphisme et les technologies du web, c'est tout
            naturellement que je me suis tourné vers le métier de développeur.
            <br />
            <br />
            J'ai donc rejoint les rangs du bootcamp Ironhack, à Barcelone, pour
            devenir Développeur Full Stack. Durant cette formation de 3 mois,
            j'ai pu réaliser ces 3 projets ainsi que mon premier site personnel.
          </p>
        </Fade>
      </div>
    </div>
  );
}
