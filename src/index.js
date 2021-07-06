import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets//CSS/main.css";
import Home from "./homepage/Home";
import Texturing from "./texturing/Texturing";
import Engraving from "./engraving/Engraving";
import Machining from "./machining/Machining";
import Specialty from "./specialty/Specialty";
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/texturing" component={Texturing} />
        <Route exact path="/engraving" component={Engraving} />
        <Route exact path="/machining" component={Machining} />
        <Route exact path="/specialty" component={Specialty} />
      </Switch>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
