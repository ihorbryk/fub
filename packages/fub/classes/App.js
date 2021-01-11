import React from "react";

import { Redirect, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Page404 from "./Page404";
import AccessDenied from "../ui/pages/AccessDenied";
import { registerLayout } from "../services/layout";
import { PrivateRoute } from "../tool/route";

export default class App {
  // Base app name (displayed in header component)
  appName = "Dashboard";

  // Url for home page
  homePath = "/";

  // Make home page accessible only for logged user
  isHomePrivate = true;

  // Url for login page
  loginPath = "/login";

  // Custom routes for custom pages
  customRoutes = [];

  homeInstance = new Home();

  page404Instance = new Page404();

  loginInstance = new Login();

  constructor(layouts) {
    layouts.map((layout) => {
      registerLayout(layout);
    });
  }

  // ########
  // Handlers
  // ########

  onLogin(values) {
    console.log("Login handler", values);
  }

  isLogged() {
    console.warn(
      "You need implement check is user logged by add isLogged method to your App class"
    );
    return false;
  }

  // ######
  // Routes
  // ######

  // Return home router
  home() {
    if (this.isHomePrivate) {
      return (
        <PrivateRoute exact path={this.homePath}>
          {this.homeInstance.render()}
        </PrivateRoute>
      );
    }
    return (
      <Route exact path={this.homePath}>
        {this.homeInstance.render()}
      </Route>
    );
  }

  login() {
    return (
      <Route exact path={this.loginPath}>
        {this.loginInstance.render({ onLogin: this.onLogin })}
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
