import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SideMenu extends Component {
  render() {
    return (
      <div className="sideMenu-container  mobile-hidden">
        <div className="sideMenu-wrapper">
          <div className="left-bar"></div>
          <div className="side-menu">
            <Link to="projets">
              <p className="up">Projets</p>
            </Link>
            <Link to="/contact">
              <p className="down">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
