import { Layout } from "fub";
import AuthorModel from "../models/AuthorModel";
import { authors } from "../services/author";

export default class AuthorLayout extends Layout {
  name = "Author";
  slug = "author";
  model = new AuthorModel();

  listFetch({ setData, setLoading, isMounted }) {
    setLoading(true);
    setTimeout(() => {
      if (!isMounted) return null;
      setData(authors);
      setLoading(false);
    }, 2000);
  }

  editFetch({ setData, setLoading, isMounted }, { id }) {
    setLoading(true);
    setTimeout(() => {
      if (!isMounted) return null;
      const author = authors.find((author) => author.id === Number(id));
      setData(author);
      setLoading(false);
    }, 1000);
  }
}
