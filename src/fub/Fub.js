import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./ui/pages/Home";
import List from "./ui/pages/List";
import Edit from "./ui/pages/Edit";

export default function Fub() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:layoutSlug/:id">
          <Edit />
        </Route>
        <Route exact path="/:layoutSlug">
          <List />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
