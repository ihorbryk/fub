import { Layout } from "fub";
import AuthorModel from "../models/AuthorModel";
import { authors } from "../services/author";

export default class AuthorLayout extends Layout {
  name = "Автор";
  slug = "author";
  data = authors;
  model = new AuthorModel();
}
