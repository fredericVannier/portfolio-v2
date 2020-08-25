import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import avatar from "../images/double-poster-avatar.jpg";
import topit from "../images/desktop-topit.jpg";
import esport from "../images/logo-esport-2020.png";
import petsit from "../images/petsit-2.jpeg";
import agora from "../images/agora-2.jpeg";
import space from "../images/spaceExplorer.png";
import cyberpunk from "../images/cyberpunk-ui.jpeg";
import CyberpunkLogo from "../images/cyberpunk-logo.png";

const Masonry = () => {
  return (
    <div className="realisation-container">
      <div className="boxContainer">
        <Link to="/topit">
          <Fade up delay="400">
            <div className="box">
              <div className="content">
                <h2>Topit</h2>
              </div>
              <img src={topit} alt="Topit" />
            </div>
          </Fade>
        </Link>
        <Link to="/avatar">
          <Fade up delay="500">
            <div className="box">
              <div className="content">
                <h2>Avatar</h2>
              </div>
              <img src={avatar} alt="Avatar" />
            </div>
          </Fade>
        </Link>
        <Link to="/cyberpunk-logo">
          <Fade up delay="600">
            <div className="box">
              <div className="content">
                <h2>Logo Cyberpunk</h2>
              </div>
              <img src={CyberpunkLogo} alt="Cyberpunk-logo" />
            </div>
          </Fade>
        </Link>
        <Link to="/esport">
          <Fade up delay="600">
            <div className="box">
              <div className="content">
                <h2>Logo esport</h2>
              </div>
              <img src={esport} alt="E-sport Logo" />
            </div>
          </Fade>
        </Link>
        <Link to="/petsit">
          <Fade up delay="400">
            <div className="box">
              <div className="content">
                <h2>Petsit</h2>
              </div>
              <img src={petsit} alt="Petsit" />
            </div>
          </Fade>
        </Link>
        <Link to="/cyberpunk">
          <Fade up delay="500">
            <div className="box">
              <div className="content">
                <h2>Cyberpunk</h2>
              </div>
              <img src={cyberpunk} alt="Cyberpunk-UI" />
            </div>
          </Fade>
        </Link>
        <Link to="/agora-coaching">
          <Fade up delay="600">
            <div className="box">
              <div className="content">
                <h2>Logo Agora</h2>
              </div>
              <img src={agora} alt="Agora Logo" />
            </div>
          </Fade>
        </Link>
        <Link to="/space-explorer">
          <Fade up delay="400">
            <div className="box">
              <div className="content">
                <h2>Space Explorer</h2>
              </div>
              <img src={space} alt="Space Explorer" />
            </div>
          </Fade>
        </Link>
      </div>
    </div>
  );
};

export default Masonry;
