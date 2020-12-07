import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

import { Route } from "react-router-dom";
import AccessDenied from "../ui/pages/AccessDenied";

export default class App {
  // Base app name (displayed in header component)
  appName = "Dashboard";

  // Url for home page
  homePath = "/";

  // Url for add page
  addPath = "/:layoutSlug/add";

  // Url for list page
  listPath = "/:layoutSlug";

  // Url for edit page
  editPath = "/:layoutSlug/:id";

  getPaths() {
    return {
      add: this.addPath,
      list: this.listPath,
      edit: this.editPath,
    };
  }

  // Return home router with Home component
  home() {
    const homeInstance = new Home();
    return (
      <Route exact path={this.homePath}>
        {homeInstance.render({ paths: this.getPaths() })}
      </Route>
    );
  }

  // Return list router with List component
  list() {
    const listInstance = new List();
    return (
      <Route exact path={this.listPath}>
        {listInstance.render({ paths: this.getPaths() })}
      </Route>
    );
  }

  // Return add router with Add component
  add() {
    const addInstance = new Add();
    return (
      <Route exact path={this.addPath}>
        {addInstance.render({ paths: this.getPaths() })}
      </Route>
    );
  }

  // Return edit router with Edit component
  edit() {
    const editInstance = new Edit();
    return (
      <Route exact path={this.editPath}>
        {editInstance.render({ paths: this.getPaths() })}
      </Route>
    );
  }

  // return access denied page component
  accessDenied() {
    return <AccessDenied />;
  }
}
