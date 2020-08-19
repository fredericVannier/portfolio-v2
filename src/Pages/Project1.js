import React from "react";
import SideMenu from "../components/SideMenu";
import Button from "../components/Button";
import Name from "../components/Name";

export default function Webdev2() {
  return (
    <div className="project-wrapper">
      <SideMenu />
      <Button />
      <Name />
      <div className="project-container-left">
        <h1 className="topit-title">Topit</h1>
        <div className="styled-forme-2"></div>

        <p>
            Topit is a social media app to connect people together. You can create posts to interact with people
        </p>
      </div>
      <div className="project-container-right"></div>
    </div>
  );
}
