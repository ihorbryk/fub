import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./classes/App";
import {
  ModelField,
  CharField,
  TextField,
  BooleanField,
  ChoiceField,
} from "./classes/ModelField";
import Layout from "./classes/Layout";
import Model from "./classes/Model";
import { registerLayout, getLayouts } from "./services/layout";
import List from "./ui/pages/List";

export { Layout, Model, registerLayout };
export { ModelField, CharField, TextField, BooleanField, ChoiceField };

export const AppContext = React.createContext();

export default function Fub(props) {
  const getAppInstance = () => {
    if (props.customAppClass) {
      return new props.customAppClass(props.layouts);
    }

    return new App(props.layouts);
  };

  const appInstance = getAppInstance();

  const app = {};

  return (
    <AppContext.Provider value={app}>
      <Router>
        <Switch>
          {appInstance.home()}
          {getLayouts().map((layout) => {
            return layout.pages();
          })}
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
