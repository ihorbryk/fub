import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./classes/App";
import {
  ModelField,
  CharField,
  TextField,
  BooleanField,
  ChoiceField,
} from "./classes/ModelField";
import Layout from "./classes/layout";
import Model from "./classes/Model";
import { registerLayout } from "./services/layout";

export { Layout, Model, registerLayout };
export { ModelField, CharField, TextField, BooleanField, ChoiceField };

export const AppContext = React.createContext();

export default function Fub(props) {
  const getAppInstance = () => {
    if (props.customAppClass) {
      return new props.customAppClass();
    }

    return new App();
  };

  const appInstance = getAppInstance();

  const app = {};

  return (
    <AppContext.Provider value={app}>
      <Router>
        <Switch>
          {appInstance.add()}
          {appInstance.edit()}
          {appInstance.list()}
          {appInstance.home()}
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
