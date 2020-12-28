import React from "react";
import { Route } from "react-router-dom";

export class CustomRoute {
  constructor(route, component) {
    this.route = route;
    this.component = component;
  }

  render(key) {
    return (
      <Route key={key} exact path={this.route}>
        {this.component}
      </Route>
    );
  }
}
