import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Button extends Component {
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
      <div className="btn-wrapper">
        <button
          onClick={this.handleClick}
          className={
            this.state.isToggleOn ? "deactivated-button" : "activated-button"
          }
        >
          <div className="logo-nav">
            <img src="./plus.svg" alt="social media button" />
          </div>
        </button>
        <button
          onClick={this.handleClick}
          className={this.state.isToggleOn ? "btn-hidden-gmail" : "btn-showed-gmail"}
        >
          <a href="mailto:frederic.vannier01@gmail.com?subject=Je viens de voir votre portfolio!">
            <div className="logo-gmail">
              <img src="./plus.svg" alt="Gmail" />
            </div>
          </a>
        </button>
        <button
          onClick={this.handleClick}
          className={this.state.isToggleOn ? "btn-hidden-github" : "btn-showed-github"}
        >
          <Link
            to={{
              pathname: "https://github.com/Fred011",
            }}
            target="_blank"
          >
            <div className="logo-nav">
              <img src="./plus.svg" alt="Github" />
            </div>
          </Link>
        </button>
        <button
          onClick={this.handleClick}
          className={
            this.state.isToggleOn ? "btn-hidden-dribbble" : "btn-showed-dribbble"
          }
        >
          <Link
            to={{
              pathname: "https://dribbble.com/FVDesign",
            }}
            target="_blank"
          >
            <div className="logo-nav">
              <img src="./plus.svg" alt="Dribbble" />
            </div>
          </Link>
        </button>
      </div>
    );
  }
}

export default Button;
