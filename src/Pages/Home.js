import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h1 className="home-title">
          Développeur <br />
          <span className="first">Full Stack</span> et{" "}
          <span className="second">Graphiste</span>
        </h1>
      </div>
    );
  }
}

export default Home;
