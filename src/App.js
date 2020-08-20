import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Webdev from "./Pages/Webdev";
import Graphist from "./Pages/Graphist";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Topit from "./Pages/Topit";
import SpaceExplorer from "./Pages/SpaceExplorer";
import Petsit from "./Pages/Petsit";
import Cyberpunk from "./Pages/Cyberpunk";
import Avatar from "./Pages/Avatar";

function App() {
  return (
    <Router>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
