import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SideMenu extends Component {
  render() {
    return (
      <div className="sideMenu-container">
        <div className="sideMenu-wrapper">
          <div className="left-bar"></div>
          <div className="side-menu">
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
