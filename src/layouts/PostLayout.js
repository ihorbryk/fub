import Layout from "../fub/classes/Layout";
import { posts } from "../services/post";
import PostModel from "../models/PostModel";

export default class PostLayout extends Layout {
  constructor() {
    super();
    this.name = "Post";
    this.slug = "posts";
    this.data = posts; // TODO: need dataprovider
    this.model = new PostModel();
    this.listFields = ["id", "body", "published", "animal"];
    this.primaryKey = "id";
  }
}
