import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Webdev from "./Pages/Webdev";
import Graphist from "./Pages/Graphist";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Topit from "./Pages/Topit";
import SpaceExplorer from "./Pages/SpaceExplorer";
import Petsit from "./Pages/Petsit";
import Cyberpunk from "./Pages/Cyberpunk";
import Avatar from "./Pages/Avatar";
import EsportLogo from "./Pages/EsportLogo";
import Agora from "./Pages/Agora";
import Realisations from "./Pages/Realisations";
import SideMenu from "./components/SideMenu";
import Button from "./components/Button";
import Name from "./components/Name";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <Router>
      <SideMenu />
      <Button />
      <Name />

      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/web">
            <Webdev />
          </Route>
          <Route exact path="/graphit">
            <Graphist />
          </Route>
          <Route exact path="/topit">
            <Topit />
          </Route>
          <Route exact path="/space-explorer">
            <SpaceExplorer />
          </Route>
          <Route exact path="/petsit">
            <Petsit />
          </Route>
          <Route exact path="/cyberpunk">
            <Cyberpunk />
          </Route>
          <Route exact path="/avatar">
            <Avatar />
          </Route>
          <Route exact path="/esport">
            <EsportLogo />
          </Route>
          <Route exact path="/agora-coaching">
            <Agora />
          </Route>
          <Route exact path="/realisations">
            <Realisations />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
