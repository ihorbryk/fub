import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./ui/pages/Home";
import List from "./ui/pages/List";
import Edit from "./ui/pages/Edit";
import { Entity, registerEntity } from "./services/entity";

const posts = [
  { id: 1, title: "title 1", body: "body 1" },
  { id: 2, title: "title 2", body: "body 2" },
  { id: 3, title: "title 3", body: "body 3" },
];

class Post extends Entity {
  constructor() {
    super();
    this.name = "Записи нашего блога";
    this.slug = "posts";
    this.data = posts; // TODO: need dataprovider
    this.listFields = ["id", "body"];
    this.listFieldNames = { id: "ID", body: "Тело" };
    this.primaryKey = "id";
  }
}

const authors = [
  { id: 1, name: "Anton", secondName: "Gavrilov" },
  { id: 2, name: "Petr", secondName: "Zaharov" },
  { id: 3, name: "Valera", secondName: "Fedorov" },
];

class Author extends Entity {
  constructor() {
    super();
    this.name = "Автор";
    this.slug = "author";
    this.data = authors;
  }
}

registerEntity(Post);
registerEntity(Author);

export default function Fub(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/:entitySlug/:id">
          <Edit />
        </Route>
        <Route exact path="/:entitySlug">
          <List />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
