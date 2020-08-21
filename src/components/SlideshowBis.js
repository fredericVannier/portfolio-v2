import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const proprietes = {
  duration: 3000,
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
        <Link to="/avatar">
          <div className="slide-bis-2"></div>
        </Link>
        <Link to="/e-sport">
          <div className="slide-bis-3"></div>
        </Link>
        <Link to="/agora-coaching">
          <div className="slide-bis-4"></div>
        </Link>
      </Slide>
    </div>
  );
};

export default SlideshowBis;
