import { useState } from "react";

const Button = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleClick = () => setIsToggleOn((prev) => !prev);

  return (
    <div className="hidden md:block">
      {/* Toggle button */}
      <button
        onClick={handleClick}
        className={`bg-accent h-16 w-16 rounded-full border-none fixed z-[99] transition-all duration-300 ease-in-out ${
          isToggleOn ? "rotate-0" : "rotate-180"
        }`}
        style={{ top: "87vh", left: "5vw" }}
      >
        <div className="logo-nav">
          <img src="./plus.svg" alt="social media button" className="h-[25px] mt-[0.3em] mx-auto" />
        </div>
      </button>

      {/* Gmail */}
      <button
        onClick={handleClick}
        className={isToggleOn ? "btn-hidden-gmail" : "btn-showed-gmail"}
      >
        <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
          <img src="./email.svg" alt="Gmail" className="h-[25px] mt-[0.3em] mx-auto" />
        </a>
      </button>

      {/* GitHub */}
      <button
        onClick={handleClick}
        className={isToggleOn ? "btn-hidden-github" : "btn-showed-github"}
      >
        <a href="https://github.com/fredericVannier" target="_blank" rel="noopener noreferrer">
          <img src="./github.svg" alt="Github" className="h-[25px] mt-[0.3em] mx-auto" />
        </a>
      </button>

      {/* Dribbble */}
      <button
        onClick={handleClick}
        className={isToggleOn ? "btn-hidden-dribbble" : "btn-showed-dribbble"}
      >
        <a href="https://dribbble.com/FVDesign" target="_blank" rel="noopener noreferrer">
          <img src="./dribbble.svg" alt="Dribbble" className="h-[25px] mt-[0.3em] mx-auto" />
        </a>
      </button>
    </div>
  );
};

export default Button;
