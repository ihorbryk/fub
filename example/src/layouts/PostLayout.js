import { Layout, ListAction } from "fub";
import { posts } from "../services/post";
import PostModel from "../models/PostModel";

export default class PostLayout extends Layout {
  name = "Post";
  slug = "posts";
  data = posts;
  model = new PostModel();
  listFields = ["id", "body", "published", "animal"];
  listFieldCustomLayout = {
    animal: (value) => {
      return <div>!!!! {value} !!!!</div>;
    },
  };
  // listActions = [
  //   new ListAction("delete", "Удалить", (items) => {
  //     console.log("delete", items);
  //   }),
  //   new ListAction("markAsReaded", "Обозначить как прочитанные", (items) => {
  //     console.log("mark as read", items);
  //   }),
  // ];
}
