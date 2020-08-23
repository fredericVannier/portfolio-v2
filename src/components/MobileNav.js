import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuToggleOn: true,
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  handleClickMenu() {
    this.setState((state) => ({
      isMenuToggleOn: !state.isMenuToggleOn,
    }));
  }

  render() {
    return (
      <div className="nav-wrapper mobile-visible">
        <button
          onClick={this.handleClickMenu}
          className={
            this.state.isMenuToggleOn
              ? "deactivated-button-menu"
              : "activated-button-menu"
          }
        >
          <div className="menu-btn">
            <img src="./plus.svg" alt="social media button" />
          </div>
        </button>
        <div
          className={
            this.state.isMenuToggleOn
              ? "menu-container"
              : "menu-container-activated"
          }
        >
          <div className="nav-content">
            <h3>Accueil</h3>
          </div>
          <div className="nav-content">
            <h3>Réalisations</h3>
          </div>
          <div className="nav-content">
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNav;
