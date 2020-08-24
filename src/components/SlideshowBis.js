import React from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const proprietes = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
};

const SlideshowBis = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <Link to="/cyberpunk">
          <div className="slide-bis-1">
            <h2 className="titleSlide">Cyberpunk UI concept</h2>
          </div>
        </Link>
        <Link to="/avatar">
          <div className="slide-bis-2">
            <h2 className="titleSlide">Avatar illustrations</h2>
          </div>
        </Link>
        <Link to="/esport">
          <div className="slide-bis-3">
            <h2 className="titleSlide">esport logo</h2>
          </div>
        </Link>
        <Link to="/agora-coaching">
          <div className="slide-bis-4">
            <h2 className="titleSlide">Agora logo</h2>
          </div>
        </Link>
      </Slide>
    </div>
  );
};

export default SlideshowBis;
