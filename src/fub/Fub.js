import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./ui/pages/Home";
import List from "./ui/pages/List";
import Edit from "./ui/pages/Edit";
import { CharField, Model, registerModel, TextField } from "./model";

const posts = [
  { id: 1, title: "title 1", body: "body 1" },
  { id: 2, title: "title 2", body: "body 2" },
  { id: 3, title: "title 3", body: "body 3" },
];

class PostModel extends Model {
  constructor() {
    super();
    this.name = "Post";
    this.slug = "posts";
    this.data = posts; // TODO: need dataprovider
    this.listFields = ["id", "body"];
    this.primaryKey = "id";
  }

  title = new CharField("Title");
  body = new TextField("Тело");
}

const authors = [
  { id: 1, name: "Anton", secondName: "Gavrilov" },
  { id: 2, name: "Petr", secondName: "Zaharov" },
  { id: 3, name: "Valera", secondName: "Fedorov" },
];

class AuthorModel extends Model {
  constructor() {
    super();
    this.name = "Автор";
    this.slug = "author";
    this.data = authors;
  }

  // TODO: this field override this.name declared in constructor
  name = new CharField("Имя");
  secondName = new CharField("Фамилия");
}

registerModel(PostModel);
registerModel(AuthorModel);

export default function Fub(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/:modelSlug/:id">
          <Edit />
        </Route>
        <Route exact path="/:modelSlug">
          <List />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
