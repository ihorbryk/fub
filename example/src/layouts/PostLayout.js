import { Layout } from "fub";
import { posts } from "../services/post";
import PostModel from "../models/PostModel";

export default class PostLayout extends Layout {
  name = "Post";
  slug = "posts";
  data = posts;
  model = new PostModel();
  listFields = ["id", "body", "published", "animal"];
}
