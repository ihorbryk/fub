import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./ui/pages/Home";
import List from "./ui/pages/List";
import Edit from "./ui/pages/Edit";
import {
  ChoiceField,
  BooleanField,
  CharField,
  Model,
  registerLayout,
  TextField,
  Layout,
} from "./model";

const posts = [
  { id: 1, title: "title 1", body: "body 1", published: true, animal: "cat" },
  { id: 2, title: "title 2", body: "body 2", published: false, animal: "dog" },
  { id: 3, title: "title 3", body: "body 3", published: true, animal: "pig" },
];

class PostModel extends Model {
  title = new CharField("Title");
  body = new TextField("Тело");
  published = new BooleanField("Опубликовано");
  animal = new ChoiceField(
    "Животное",
    [
      ["dog", "Сабака"],
      ["cat", "Кот"],
      ["pig", "Свинья"],
    ],
    true
  );
}

class PostLayout extends Layout {
  constructor() {
    super();
    this.name = "Post";
    this.slug = "posts";
    this.data = posts; // TODO: need dataprovider
    this.model = new PostModel();
    this.listFields = ["id", "body"];
    this.primaryKey = "id";
  }
}

const authors = [
  { id: 1, name: "Anton", secondName: "Gavrilov" },
  { id: 2, name: "Petr", secondName: "Zaharov" },
  { id: 3, name: "Valera", secondName: "Fedorov" },
];

class AuthorModel extends Model {
  name = new CharField("Имя");
  secondName = new CharField("Фамилия");
}
class AuthorLayout extends Layout {
  constructor() {
    super();
    this.name = "Автор";
    this.slug = "author";
    this.data = authors;
    this.model = new AuthorModel();
  }
}

registerLayout(PostLayout);
registerLayout(AuthorLayout);

export default function Fub(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/:layoutSlug/:id">
          <Edit />
        </Route>
        <Route exact path="/:layoutSlug">
          <List />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
