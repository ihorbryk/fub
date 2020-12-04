import Home from "./Home";
import Edit from "./Edit";
import List from "./List";

import { Route } from "react-router-dom";
import AccessDenied from "../ui/pages/AccessDenied";

export default class App {
  // Base app name (displayed in header component)
  appName = "Dashboard";

  // Return home router with Home component
  home() {
    const homeInstance = new Home();
    return (
      <Route exact path={homeInstance.path}>
        {homeInstance.render()}
      </Route>
    );
  }

  // Return list router with List component
  list() {
    const listInstance = new List();
    return (
      <Route exact path={listInstance.path}>
        {listInstance.render()}
      </Route>
    );
  }

  // Return list router with Edit component
  edit() {
    const editInstance = new Edit();
    return (
      <Route exact path={editInstance.path}>
        {editInstance.render()}
      </Route>
    );
  }

  // return access denied page component
  accessDenied() {
    return <AccessDenied />;
  }
}
