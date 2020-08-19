import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const proprietes = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
};

const SlideshowBis = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <Link to="/cyberpunk">
          <div className="slide-bis-1"></div>
        </Link>
        <Link to="/space-explorer">
          <div className="slide-bis-2"></div>
        </Link>
        <Link to="/petsit">
          <div className="slide-bis-3"></div>
        </Link>
      </Slide>
    </div>
  );
};

export default SlideshowBis;
