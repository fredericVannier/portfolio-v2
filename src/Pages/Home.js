import React, { Component } from "react";
import Webdev from "./Webdev";
import Graphist from "./Graphist";
import SideMenu from "../components/SideMenu";

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-page">
            <h3 className="welcoming">
              Bonjour, je suis Frédéric |
            </h3>
            <h1 className="home-title">
              Développeur <br />
              <span className="first">Full Stack</span> et{" "}
              <span className="second">Graphiste</span>
            </h1>
          </div>
          <div className="home-page-mobile">
            <h3 className="welcoming">
              Bonjour, je suis Frédéric |
            </h3>
            <h1 className="home-title">
              Développeur <br />
              <span className="first">Full Stack</span> et{" "}
              <br />
              <span className="second">Graphiste</span>
            </h1>
          </div>
          <Webdev />
          <Graphist />
        </div>
      </div>
    );
  }
}

export default Home;
