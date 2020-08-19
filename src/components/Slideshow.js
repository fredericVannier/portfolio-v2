import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const proprietes = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <Link to="/topit">
          <div className="slide-1"></div>
        </Link>
        <Link to="/space-explorer">
          <div className="slide-2"></div>
        </Link>
        <Link to="/petsit">
          <div className="slide-3"></div>
        </Link>
      </Slide>
    </div>
  );
};

export default Slideshow;
