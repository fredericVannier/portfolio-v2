import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import doom from "../images/doom.jpg";
import chelou from "../images/chelou.webp";

const Masonry = () => {
  return (
    <div className="realisation-container">
      <div className="boxContainer">
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={chelou} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
        <div className="box">
          <img src={doom} alt="picture" />
          <h2>DOOM</h2>
        </div>
      </div>
    </div>
  );
};

export default Masonry;
