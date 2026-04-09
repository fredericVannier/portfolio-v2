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
    <div className="max-w-[1200px] pt-[15em] mx-auto columns-3 gap-[40px] max-md:columns-2 max-md:pt-10 max-md:w-[calc(100%-40px)] max-[480px]:columns-1">
      <Link to="/topit">
        <Fade up delay="400">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Topit</h2>
            </div>
            <img src={topit} alt="Topit" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/avatar">
        <Fade up delay="500">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Avatar</h2>
            </div>
            <img src={avatar} alt="Avatar" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/cyberpunk-logo">
        <Fade up delay="600">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Logo Cyberpunk</h2>
            </div>
            <img src={CyberpunkLogo} alt="Cyberpunk-logo" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/esport">
        <Fade up delay="600">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Logo esport</h2>
            </div>
            <img src={esport} alt="E-sport Logo" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/petsit">
        <Fade up delay="400">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Petsit</h2>
            </div>
            <img src={petsit} alt="Petsit" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/cyberpunk">
        <Fade up delay="500">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Cyberpunk</h2>
            </div>
            <img src={cyberpunk} alt="Cyberpunk-UI" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/agora-coaching">
        <Fade up delay="600">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Logo Agora</h2>
            </div>
            <img src={agora} alt="Agora Logo" className="max-w-full" />
          </div>
        </Fade>
      </Link>
      <Link to="/space-explorer">
        <Fade up delay="400">
          <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
            <div className="box-content-label">
              <h2>Space Explorer</h2>
            </div>
            <img src={space} alt="Space Explorer" className="max-w-full" />
          </div>
        </Fade>
      </Link>
    </div>
  );
};

export default Masonry;
