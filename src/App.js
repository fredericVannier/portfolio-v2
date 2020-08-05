import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Name from "./components/Name";
import Button from "./components/Button";
import Webdev from "./Pages/Webdev";
import Graphist from "./Pages/Graphist";
import Home from "./Pages/Home";
import SideMenu from "./components/SideMenu";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Name />
        <Button />
        <SideMenu />
        <Home />
        <Webdev />
        <Graphist />
        
      </div>
    </Router>
  );
}

export default App;
