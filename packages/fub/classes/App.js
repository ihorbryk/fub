import React from "react";
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

  constructor(layouts) {
    layouts.map((layout) => {
      registerLayout(layout);
    });
    this.homeInstance = new Home();
    this.loginInstance = new Login();
  }

  // ########
  // Handlers
  // ########
  onLogin(values) {
    console.log("Handler on login", values);
  }

  // Return home router
  home() {
    return (
      <Route exact path={this.homePath}>
        {this.homeInstance.render()}
      </Route>
    );
  }

  // Return login router
  login() {
    return (
      <Route exact path={this.loginPath}>
        {this.loginInstance.render({ onLogin: this.onLogin })}
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
