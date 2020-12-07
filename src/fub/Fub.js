import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./classes/App";

export default function Fub(props) {
  const getAppInstance = () => {
    if (props.customAppClass) {
      return new props.customAppClass();
    }

    return new App();
  };

  const appInstance = getAppInstance();

  return (
    <Router>
      <Switch>
        {appInstance.add()}
        {appInstance.edit()}
        {appInstance.list()}
        {appInstance.home()}
      </Switch>
    </Router>
  );
}
