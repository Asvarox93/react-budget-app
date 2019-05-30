import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard";

const routing = (
  <Router>
    <Route path="/" component={Dashboard} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
