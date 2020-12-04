import Layout from "../fub/classes/Layout";
import AuthorModel from "../models/AuthorModel";
import { authors } from "../services/author";

export default class AuthorLayout extends Layout {
  constructor() {
    super();
    this.name = "Автор";
    this.slug = "author";
    this.data = authors;
    this.model = new AuthorModel();
  }
}
