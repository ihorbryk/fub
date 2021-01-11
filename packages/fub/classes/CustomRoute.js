import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "../tool/route";

export class CustomRoute {
  constructor(route, component, isPrivate = true) {
    this.route = route;
    this.component = component;
    this.isPrivat = isPrivate;
  }

  render(key) {
    if (this.isPrivat) {
      return (
        <PrivateRoute key={key} exact path={this.route}>
          {this.component}
        </PrivateRoute>
      );
    }
    return (
      <Route key={key} exact path={this.route}>
        {this.component}
      </Route>
    );
  }
}
