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
            <img className="menu-icon" src="./plus.svg" alt="social media button" />
          </div>
        </button>
        <div
          className={
            this.state.isMenuToggleOn
              ? "menu-container"
              : "menu-container-activated"
          }
        >
          <button
            onClick={this.handleClickMenu}
            className={
              this.state.isMenuToggleOn ? "btn-hidden-home" : "btn-showed-home"
            }
          >
            <Link to="/">
              <div className="logo-nav">
                <img src="./home.svg" alt="home" />
              </div>
            </Link>
          </button>
          <button
            onClick={this.handleClickMenu}
            className={
              this.state.isMenuToggleOn
                ? "btn-hidden-projects"
                : "btn-showed-projects"
            }
          >
            <Link to="/projets">
              <div className="logo-nav">
                <img src="./rocket.svg" alt="projects" />
              </div>
            </Link>
          </button>
          <button
            onClick={this.handleClickMenu}
            className={
              this.state.isMenuToggleOn
                ? "btn-hidden-contact"
                : "btn-showed-contact"
            }
          >
            <Link to="/contact">
              <div className="logo-nav">
                <img src="./chat.svg" alt="contact" />
              </div>
            </Link>
          </button>

          <button
            onClick={this.handleClick}
            className={
              this.state.isMenuToggleOn
                ? "btn-hidden-gmail"
                : "btn-showed-gmail"
            }
          >
            <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
              <div className="logo-gmail">
                <img src="./email.svg" alt="Gmail" />
              </div>
            </a>
          </button>
          <button
            onClick={this.handleClick}
            className={
              this.state.isMenuToggleOn
                ? "btn-hidden-github"
                : "btn-showed-github"
            }
          >
            <Link
              to={{
                pathname: "https://github.com/Fred011",
              }}
              target="_blank"
            >
              <div className="logo-nav">
                <img src="./github.svg" alt="Github" />
              </div>
            </Link>
          </button>
          <button
            onClick={this.handleClick}
            className={
              this.state.isMenuToggleOn
                ? "btn-hidden-dribbble"
                : "btn-showed-dribbble"
            }
          >
            <Link
              to={{
                pathname: "https://dribbble.com/FVDesign",
              }}
              target="_blank"
            >
              <div className="logo-nav">
                <img src="./dribbble.svg" alt="Dribbble" />
              </div>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default MobileNav;
