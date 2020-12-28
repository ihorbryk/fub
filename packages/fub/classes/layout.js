import React from "react";
import { Route } from "react-router-dom";
import { ListAction } from "./ListAction";
import Add from "./Add";
import List from "./List";
import Edit from "./Edit";

export default class Layout {
  // Entity name displayed on the page header
  name = "";

  // Field used as entity slug in routes
  slug = "";

  // Array of model objects
  data = [];

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

  defaultListActions = [
    new ListAction("delete", "Delete", (items) => {
      this.handleDeleteAll(items);
    }),
  ];

  // Url for add page
  addPath = "/:layoutSlug/add";

  // Url for list page
  listPath = "/:layoutSlug";

  // Url for edit page
  editPath = "/:layoutSlug/:id";

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

  getListFields() {
    if (this.data.length === 0) {
      return [];
    }
    if (this.listFields.length > 0) {
      return this.listFields;
    }
    return Object.keys(this.data[0]);
  }

  getListFieldNames() {
    if (this.listFieldNames.length === 0) {
      return this.getListFields().reduce((acc, field) => {
        acc[field] = field;
        return acc;
      }, {});
    }
    return this.listFieldNames;
  }

  getPaginationText() {
    return "";
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
    return (
      <Route exact path={this.listPath}>
        {this.listObj.render({ paths: this.paths })}
      </Route>
    );
  }

  add() {
    return (
      <Route exact path={this.addPath}>
        {this.addObj.render({ paths: this.paths })}
      </Route>
    );
  }

  edit() {
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
