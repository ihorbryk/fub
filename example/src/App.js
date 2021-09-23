import Fub, { App } from "fub";
import { CustomRoute, CustomUserHeaderLink } from "fub";
import AuthorLayout from "./layouts/AuthorLayout";
import PostLayout from "./layouts/PostLayout";
import LoremIpsum from "./pages/LoremIpsum";

class Dashboar extends App {
  customRoutes = [
    new CustomRoute("/lorem", <LoremIpsum />),
    new CustomRoute("/open-lorem", <LoremIpsum />, false),
  ];

  customUserHeaderLinks = [
    new CustomUserHeaderLink("/lorem", "Lorem"),
    new CustomUserHeaderLink("/open-lorem", "Open lorem"),
  ];

  isLogged() {
    return true;
  }
}

const Application = () => (
  <Fub customAppClass={Dashboar} layouts={[AuthorLayout, PostLayout]} />
);

export default Application;
