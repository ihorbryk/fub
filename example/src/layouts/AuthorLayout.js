import { Layout } from "fub";
import AuthorModel from "../models/AuthorModel";
import { authors } from "../services/author";

export default class AuthorLayout extends Layout {
  name = "Author";
  slug = "author";
  model = new AuthorModel();

  listFetch({ setData, setLoading, isMounted }) {
    setLoading(true);
    setInterval(() => {
      if (!isMounted) return null;
      setData(authors);
      setLoading(false);
    }, 5000);
  }
}
