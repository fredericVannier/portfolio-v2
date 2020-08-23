import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import doom from "../images/doom.jpg";
import avatar from "../images/double-poster-avatar.jpg";
import topit from "../images/desktop-topit.jpg";
import esport from "../images/logo-esport-2020.png";
import petsit from "../images/petsit-2.jpeg";
import agora from "../images/agora-2.jpeg";
import cyberpunk from "../images/cyberpunk-ui.jpeg";

const Masonry = () => {
  return (
    <div className="realisation-container">
      <div className="boxContainer">
        <Fade up delay="400">
          <div className="box">
            <div className="content">
              <h2>Topit</h2>
            </div>
            <img src={topit} alt="Topit" />
          </div>
        </Fade>
        <Fade up delay="500">
          <div className="box">
            <div className="content">
              <h2>Avatar</h2>
            </div>
            <img src={avatar} alt="Avatar" />
          </div>
        </Fade>
        <Fade up delay="600">
          <div className="box">
            <div className="content">
              <h2>Esport logo</h2>
            </div>
            <img src={esport} alt="E-sport Logo" />
          </div>
        </Fade>
        <Fade up delay="400">
          <div className="box">
            <div className="content">
              <h2>Petsit</h2>
            </div>
            <img src={petsit} alt="Petsit" />
          </div>
        </Fade>
        <Fade up delay="500">
          <div className="box">
            <div className="content">
              <h2>Cyberpunk</h2>
            </div>
            <img src={cyberpunk} alt="Cyberpunk-UI" />
          </div>
        </Fade>
        <Fade up delay="600">
          <div className="box">
            <div className="content">
              <h2>Logo</h2>
            </div>
            <img src={agora} alt="Agora Logo" />
          </div>
        </Fade>
       

       
      </div>
    </div>
  );
};

export default Masonry;
