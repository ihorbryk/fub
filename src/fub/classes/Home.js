import HomeComponent from "../ui/pages/Home";

export default class Home {
  // Url for home page
  homePath = "/";

  getPath() {
    return this.path;
  }

  render() {
    return <HomeComponent />;
  }
}
