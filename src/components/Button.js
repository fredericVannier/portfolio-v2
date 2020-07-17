import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <div className="btn-wrapper">
        <button className="deactivated-button">
          <div className="logo-nav">
            <img src="./plus.svg" alt="FV logo" />
          </div>
        </button>
      </div>
    );
  }
}

export default Button;
