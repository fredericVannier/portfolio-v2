import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Name from "./components/Name";
import Button from "./components/Button";
import Webdev from "./Pages/Webdev";
import Graphist from "./Pages/Graphist";
import Home from "./Pages/Home";
import SideMenu from "./components/SideMenu";
import Contact from "./Pages/Contact";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
