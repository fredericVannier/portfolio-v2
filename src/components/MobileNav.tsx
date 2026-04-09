import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isMenuToggleOn, setIsMenuToggleOn] = useState(true);

  const handleClickMenu = () => setIsMenuToggleOn((prev) => !prev);

  return (
    <div className="md:hidden">
      {/* Toggle button */}
      <button
        onClick={handleClickMenu}
        className={`bg-accent h-16 w-16 rounded-full border-none fixed z-[199] transition-all duration-300 ease-in-out ${
          isMenuToggleOn ? "rotate-0" : "rotate-180"
        }`}
        style={{ top: "87vh", left: "80vw" }}
      >
        <img src="./plus.svg" alt="menu" className="h-[25px] mx-auto mt-[0.2em]" />
      </button>

      {/* Home */}
      <button
        onClick={handleClickMenu}
        className={isMenuToggleOn ? "btn-hidden-home" : "btn-showed-home"}
      >
        <Link to="/">
          <img src="./home.svg" alt="home" className="h-[25px] mx-auto mt-[0.3em]" />
        </Link>
      </button>

      {/* Projects */}
      <button
        onClick={handleClickMenu}
        className={isMenuToggleOn ? "btn-hidden-projects" : "btn-showed-projects"}
      >
        <Link to="/projets">
          <img src="./rocket.svg" alt="projects" className="h-[25px] mx-auto mt-[0.3em]" />
        </Link>
      </button>

      {/* Contact */}
      <button
        onClick={handleClickMenu}
        className={isMenuToggleOn ? "btn-hidden-contact" : "btn-showed-contact"}
      >
        <Link to="/contact">
          <img src="./chat.svg" alt="contact" className="h-[25px] mx-auto mt-[0.3em]" />
        </Link>
      </button>

      {/* Gmail */}
      <button className={isMenuToggleOn ? "btn-m-hidden-gmail" : "btn-m-showed-gmail"}>
        <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
          <img src="./email.svg" alt="Gmail" className="h-[25px] mx-auto mt-[0.3em]" />
        </a>
      </button>

      {/* GitHub */}
      <button className={isMenuToggleOn ? "btn-m-hidden-github" : "btn-m-showed-github"}>
        <a href="https://github.com/Fred011" target="_blank" rel="noopener noreferrer">
          <img src="./github.svg" alt="Github" className="h-[25px] mx-auto mt-[0.3em]" />
        </a>
      </button>

      {/* Dribbble */}
      <button className={isMenuToggleOn ? "btn-m-hidden-dribbble" : "btn-m-showed-dribbble"}>
        <a href="https://dribbble.com/FVDesign" target="_blank" rel="noopener noreferrer">
          <img src="./dribbble.svg" alt="Dribbble" className="h-[25px] mx-auto mt-[0.3em]" />
        </a>
      </button>
    </div>
  );
};

export default MobileNav;
