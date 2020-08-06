import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/Contact";

export class SideMenu extends Component {
  render() {
    return (
      <div className="sideMenu-container">
        <div className="sideMenu-wrapper">
          <div className="left-bar"></div>
          <div className="side-menu">
            <p className="up">Réalisations</p>
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
