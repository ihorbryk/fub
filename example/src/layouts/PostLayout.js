import { Layout } from "fub";
import PostModel from "../models/PostModel";

export default class PostLayout extends Layout {
  name = "Post";

  slug = "posts";

  model = new PostModel();

  listFields = ["id", "userId", "title", "body"];

  listLinkField = "title";

  listFieldCustomLayout = {
    body: (value) => {
      return value.substring(0, 20) + "...";
    },
  };

  async listFetch({ setData, setLoading, setError, isMounted }) {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!isMounted) return null;
      if (res.status !== 200) {
        setError("Request fail with status " + res.status);
      }
      const data = await res.json();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  async editFetch({ setData, setLoading, setError, isMounted }, { id }) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!isMounted) return null;
      if (res.status !== 200) {
        setError("Request fail with status " + res.status);
      }
      const data = await res.json();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  // listActions = [
  //   new ListAction("delete", "Удалить", (items) => {
  //     console.log("delete", items);
  //   }),
  //   new ListAction("markAsReaded", "Обозначить как прочитанные", (items) => {
  //     console.log("mark as read", items);
  //   }),
  // ];
}
