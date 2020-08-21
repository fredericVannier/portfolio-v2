import React, { Component } from "react";

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
          className={
            this.state.isToggleOn ? "btn-hidden" : "btn-showed-gmail"
          }
        >
          <div className="logo-gmail">
            <img src="./plus.svg" alt="Gmail" />
          </div>
        </button>
        <button
          onClick={this.handleClick}
          className={
            this.state.isToggleOn ? "btn-hidden" : "btn-showed-github"
          }
        >
          <div className="logo-nav">
            <img src="./plus.svg" alt="Github" />
          </div>
        </button>
        <button
          onClick={this.handleClick}
          className={
            this.state.isToggleOn ? "btn-hidden" : "btn-showed-dribbble"
          }
        >
          <div className="logo-nav">
            <img src="./plus.svg" alt="Dribbble" />
          </div>
        </button>
      </div>
    );
  }
}

export default Button;
