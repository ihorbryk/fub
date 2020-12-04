import EditComponent from "../ui/pages/Edit";

export default class Edit {
  // Url for edit page
  path = "/:layoutSlug/:id";

  getPath() {
    return this.path;
  }

  render() {
    return <EditComponent />;
  }
}
