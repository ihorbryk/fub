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
import Layout from "./classes/Layout";
import Model from "./classes/Model";
import { registerLayout, getLayouts } from "./services/layout";
import { ListAction } from "./classes/ListAction";
import LayoutTemplate from "./ui/Layout";
import { CustomRoute } from "./classes/CustomRoute";

export {
  App,
  Layout,
  Model,
  registerLayout,
  ModelField,
  CharField,
  TextField,
  BooleanField,
  ChoiceField,
  ListAction,
  CustomRoute,
  LayoutTemplate,
};

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
          {appInstance.getCustomRoutes()}
          {appInstance.page404()}
          {getLayouts().map((layout) => {
            return layout.pages();
          })}
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
