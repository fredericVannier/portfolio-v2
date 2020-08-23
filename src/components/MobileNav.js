import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="nav-wrapper mobile-visible">
        <button
          onClick={this.handleClick}
          className={
            this.state.isToggleOn ? "nav-on overlap" : "nav-off"
          }
        ></button>

        <div className="menu-container">
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
