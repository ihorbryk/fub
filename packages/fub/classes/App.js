import React from "react";
import Home from "./Home";
import Page404 from "./Page404";

import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import AccessDenied from "../ui/pages/AccessDenied";
import { registerLayout } from "../services/layout";

export default class App {
  // Base app name (displayed in header component)
  appName = "Dashboard";

  // Url for home page
  homePath = "/";

  // Url for login page
  loginPath = "/login";

  // Custom routes for custom pages
  customRoutes = [];

  homeInstance = new Home();
  page404Instance = new Page404();

  constructor(layouts) {
    layouts.map((layout) => {
      registerLayout(layout);
    });
  }

  // Return home router
  home() {
    return (
      <Route exact path={this.homePath}>
        {this.homeInstance.render()}
      </Route>
    );
  }

  page404() {
    return <Route path="/404">{this.page404Instance.render()}</Route>;
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
