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
import { ListAction } from "./classes/ListAction";

export { Layout, Model, registerLayout };
export { ModelField, CharField, TextField, BooleanField, ChoiceField };
export { ListAction };

export const AppContext = React.createContext();

export default function Fub(props) {
  const getAppInstance = () => {
    if (props.customAppClass) {
      return new props.customAppClass(props.layouts);
    }

    return new App(props.layouts);
  };

  const appInstance = getAppInstance();

  const app = {
    appName: appInstance.appName,
  };

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
