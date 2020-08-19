import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";
import Webdev from "./Webdev";
import Graphist from "./Graphist";

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <SideMenu />
          <Button />
          <Name />
          <div className="home-page">
            <h1 className="home-title">
              Développeur <br />
              <span className="first">Full Stack</span> et{" "}
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
