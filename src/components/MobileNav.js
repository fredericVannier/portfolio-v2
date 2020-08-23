import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="nav-wrapper nav-visible">
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
        

      </div>
    );
  }
}

export default MobileNav;
