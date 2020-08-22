import React, { Component } from "react";
import Masonry from "../components/Masonry";

export class Home extends Component {
  render() {
    return (
      <div className="realisations-wrapper">
        <Masonry />
      </div>
    );
  }
}

export default Home;
