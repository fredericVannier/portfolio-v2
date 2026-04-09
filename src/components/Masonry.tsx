import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import avatar from "../images/double-poster-avatar.jpg";
import topit from "../images/desktop-topit.jpg";
import esport from "../images/logo-esport-2020.png";
import petsit from "../images/petsit-2.jpeg";
import agora from "../images/agora-2.jpeg";
import space from "../images/spaceExplorer.png";
import cyberpunk from "../images/cyberpunk-ui.jpeg";
import CyberpunkLogo from "../images/cyberpunk-logo.png";

const items = [
  { to: "/topit",          src: topit,        alt: "Topit",        label: "Topit",        delay: 400 },
  { to: "/avatar",         src: avatar,       alt: "Avatar",       label: "Avatar",       delay: 500 },
  { to: "/cyberpunk-logo", src: CyberpunkLogo,alt: "Cyberpunk Logo",label:"Logo Cyberpunk",delay: 600 },
  { to: "/esport",         src: esport,       alt: "E-sport Logo", label: "Logo esport",  delay: 600 },
  { to: "/petsit",         src: petsit,       alt: "Petsit",       label: "Petsit",       delay: 400 },
  { to: "/cyberpunk",      src: cyberpunk,    alt: "Cyberpunk-UI", label: "Cyberpunk",    delay: 500 },
  { to: "/agora-coaching", src: agora,        alt: "Agora Logo",   label: "Logo Agora",   delay: 600 },
  { to: "/space-explorer", src: space,        alt: "Space Explorer",label:"Space Explorer",delay: 400 },
];

const Masonry = () => {
  return (
    <div className="max-w-[1200px] pt-[15em] mx-auto columns-3 gap-[40px] max-md:columns-2 max-md:pt-10 max-md:w-[calc(100%-40px)] max-[480px]:columns-1">
      {items.map(({ to, src, alt, label, delay }) => (
        <Link key={to} to={to}>
          <Reveal direction="up" delay={delay}>
            <div className="masonry-box w-full mb-10 overflow-hidden break-inside-avoid">
              <div className="box-content-label">
                <h2>{label}</h2>
              </div>
              <img src={src} alt={alt} className="max-w-full" />
            </div>
          </Reveal>
        </Link>
      ))}
    </div>
  );
};

export default Masonry;
