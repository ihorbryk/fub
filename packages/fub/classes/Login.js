import React from "react";
import LoginTemplate from "../ui/pages/Login";

export default class Login {
  render({ onLogin }) {
    return <LoginTemplate onLogin={onLogin} />;
  }
}
