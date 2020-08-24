import React, { Component } from "react";
import Webdev from "./Webdev";
import Graphist from "./Graphist";
import Fade from "react-reveal/Fade";

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-page">
            <Fade delay={500}>
            <h3 className="welcoming">
              Bonjour, je suis Frédéric |
            </h3>
          </Fade>
            <Fade left delay={1900}>
            <h1 className="home-title">
              Développeur <br />
              <span className="first">Full Stack</span> et{" "}
              <span className="second">Graphiste</span>
            </h1>
          </Fade>
          </div>
          <div className="home-page-mobile">
          <Fade delay={500}>
            <h3 className="welcoming">
              Bonjour, je suis Frédéric |
            </h3>
            </Fade>
            <Fade left delay={1900}>
            <h1 className="home-title">
              Développeur <br />
              <span className="first">Full Stack</span> et{" "}
              <br />
              <span className="second">Graphiste</span>
            </h1>
            </Fade>
          </div>
          <Webdev />
          <Graphist />
        </div>
      </div>
    );
  }
}

export default Home;
