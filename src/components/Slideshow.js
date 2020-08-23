import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const proprietes = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <Link to="/topit">
          <div className="slide-1">
            <h2 className="titleSlide">TOPIT</h2>
          </div>
        </Link>
        <Link to="/space-explorer">
          <div className="slide-2">
          <h2 className="titleSlide">Space Explorer</h2>
          </div>
          
        </Link>
        <Link to="/petsit">
          <div className="slide-3">
          <h2 className="titleSlide">Petsit</h2>
          </div>
          
        </Link>
      </Slide>
    </div>
  );
};

export default Slideshow;
