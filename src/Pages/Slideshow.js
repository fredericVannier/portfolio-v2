import React from "react";
import { Slide } from "react-slideshow-image";
import doom from "../images/doom.jpg";
import chelou from "../images/chelou.webp";
import grumpy from "../images/grumpy.jpg";
import { Link } from "react-router-dom";

const proprietes = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <Link to="/projet1">
          <div className="slide-1"></div>
        </Link>
        <div className="slide-2"></div>
        <div className="slide-3"></div>
      </Slide>
    </div>
  );
};

export default Slideshow;
