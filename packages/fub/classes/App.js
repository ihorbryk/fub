import React from "react";
import Home from "./Home";

import { Route } from "react-router-dom";
import AccessDenied from "../ui/pages/AccessDenied";
import { registerLayout } from "../services/layout";

export default class App {
  // Base app name (displayed in header component)
  appName = "Dashboard";

  // Url for home page
  homePath = "/";

  // Custom routes for custom pages
  customRoutes = [];

  constructor(layouts) {
    layouts.map((layout) => {
      registerLayout(layout);
    });
    this.homeInstance = new Home();
  }

  // Return home router with Home component
  home() {
    return (
      <Route exact path={this.homePath}>
        {this.homeInstance.render()}
      </Route>
    );
  }

  getCustomRoutes() {
    return this.customRoutes.map((item, key) => item.render(key));
  }

  // return access denied page component
  // TODO: move it
  accessDenied() {
    return <AccessDenied />;
  }
}
