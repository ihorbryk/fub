import React from "react";
import LoginTemplate from "../ui/pages/Login";

export default class Login {
  // Text displayed above login form
  pageTitle = "Sign in to your account";

  // Url where redirect users who logged in system
  loginRedirectPath = "/";

  // TODO: Make fields saparate from display template.
  fields = [];

  render({ onLogin }) {
    return (
      <LoginTemplate
        onLogin={onLogin}
        pageTitle={this.pageTitle}
        loginRedirectPath={this.loginRedirectPath}
      />
    );
  }
}
