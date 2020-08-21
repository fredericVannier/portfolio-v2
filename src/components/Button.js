import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="btn-wrapper">
        <button onClick={this.handleClick} className={this.state.isToggleOn ? "deactivated-button" : "activated-button"}>
         
          <div className="logo-nav">
            <img src="./plus.svg" alt="FV logo" />
          </div>
        </button>
      </div>
    );
  }
}

export default Button;
