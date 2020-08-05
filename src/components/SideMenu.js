import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/About";

export class SideMenu extends Component {
  render() {
    return (
      <div className="sideMenu-container">
        <div className="sideMenu-wrapper">
          <div className="left-bar"></div>
          <div className="side-menu">
            <p className="up">Réalisations</p>
            <Link to="/about">
              <p className="down">Contact</p>
            </Link>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
