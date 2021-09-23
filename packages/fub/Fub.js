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
import { CustomUserHeaderLink } from "./classes/CustomUserHeaderLink";
import LayoutTemplate from "./ui/Layout";
import { CustomRoute } from "./classes/CustomRoute";
import { AppContext } from "./contexts/app";
import { NotificationContextProvider } from "./ui/Notification";
import { NotificationItem } from "./classes/NotificationItem";

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
  CustomUserHeaderLink,
  NotificationItem,
};

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
    user: {
      name: appInstance.baseUserName,
      isLogged: appInstance.isLogged,
      onExit: appInstance.onExit,
      customUserHeaderLinks: appInstance.customUserHeaderLinks,
    },
  };

  return (
    <AppContext.Provider value={app}>
      <NotificationContextProvider>
        <Router>
          <Switch>
            {appInstance.login()}
            {appInstance.home()}
            {appInstance.getCustomRoutes()}
            {appInstance.page404()}
            {getLayouts().map((layout) => {
              return layout.pages();
            })}
          </Switch>
        </Router>
      </NotificationContextProvider>
    </AppContext.Provider>
  );
}
