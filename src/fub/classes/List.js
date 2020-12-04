import ListComponent from "../ui/pages/List";

export default class Edit {
  // Url for list page
  path = "/:layoutSlug";

  getPath() {
    return this.path;
  }

  render() {
    return <ListComponent />;
  }
}
