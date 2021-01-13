import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "../tool/route";
import { ListAction } from "./ListAction";
import Add from "./Add";
import List from "./List";
import Edit from "./Edit";

export default class Layout {
  // Entity name displayed on the page header
  name = "";

  // Field used as entity slug in routes
  slug = "";

  // Object discribe structure of entity
  model = null;

  // Keys of fields displayed on list page
  listFields = [];

  // Names of fields displayed on list page
  listFieldNames = [];

  // Field used as uniq identificator in data set
  primaryKey = "id";

  // Choise display pagination or not
  displayPagination = true;

  // Actions aplied for batch selected items in list
  listActions = [];

  // Functions for custom render fields in list
  listFieldCustomLayout = {};

  defaultListActions = [
    new ListAction("delete", "Delete", (items) => {
      this.handleDeleteAll(items);
    }),
  ];

  // Url for add page
  addPath = "/:layoutSlug/add";

  // Make add page accessible or not for logged users
  isAddPrivate = true;

  // Url for list page
  listPath = "/:layoutSlug";

  // Make list page accessible or not for logged users
  isListPrivate = true;

  // Url for edit page
  editPath = "/:layoutSlug/:id";

  // Make edit page accessible or not for logged users
  isEditPrivate = true;

  // Field use as link to edit page
  listLinkField = null;

  paths = {
    add: this.addPath,
    list: this.listPath,
    edit: this.editPath,
  };

  constructor() {
    this.listObj = new List();
    this.addObj = new Add();
    this.editObj = new Edit();
  }

  // #######
  // Getters
  // #######

  getListFields(data) {
    if (data && data.length === 0) {
      return [];
    }
    if (this.listFields.length > 0) {
      return this.listFields;
    }
    return Object.keys(data[0]);
  }

  getListFieldNames(data) {
    if (this.listFieldNames.length === 0) {
      return this.getListFields(data).reduce((acc, field) => {
        acc[field] = field;
        return acc;
      }, {});
    }
    return this.listFieldNames;
  }

  getPaginationText() {
    return "";
  }

  // ##########
  // Data fetch
  // ##########

  listFetch() {
    console.warn("Implement listFetch method in your layout");
  }

  editFetch() {
    console.warn("Implement editFetch method in your layout");
  }

  // ########
  // Handlers
  // ########

  handleDeleteOne(uniqFieldValue) {
    console.log(uniqFieldValue);
  }

  handleDeleteAll(items) {
    console.log("Delete: ", items);
  }

  handleClickPaginationNext() {
    console.info(
      "Define handleClickPaginationNext method in your layout for handle pagination next"
    );
  }

  handleClickPaginationPrev() {
    console.info(
      "Define handleClickPaginationPrev method in your layout for handle pagination prev"
    );
  }

  // ###########
  // CRUD routes
  // ###########

  list() {
    if (this.isListPrivate) {
      return (
        <PrivateRoute exact path={this.listPath}>
          {this.listObj.render({
            paths: this.paths,
          })}
        </PrivateRoute>
      );
    }
    return (
      <Route exact path={this.listPath}>
        {this.listObj.render({ paths: this.paths })}
      </Route>
    );
  }

  add() {
    if (this.isAddPrivate) {
      return (
        <PrivateRoute exact path={this.addPath}>
          {this.addObj.render({ paths: this.paths })}
        </PrivateRoute>
      );
    }
    return (
      <Route exact path={this.addPath}>
        {this.addObj.render({ paths: this.paths })}
      </Route>
    );
  }

  edit() {
    if (this.isEditPrivate) {
      return (
        <PrivateRoute exact path={this.editPath}>
          {this.editObj.render({ paths: this.paths })}
        </PrivateRoute>
      );
    }
    return (
      <Route exact path={this.editPath}>
        {this.editObj.render({ paths: this.paths })}
      </Route>
    );
  }

  // Get array of route components
  pages() {
    return [this.add(), this.edit(), this.list()];
  }
}
