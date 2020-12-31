import Fub, { App } from "fub";
import { CustomRoute } from "fub";
import AuthorLayout from "./layouts/AuthorLayout";
import PostLayout from "./layouts/PostLayout";
import LoremIpsum from "./pages/LoremIpsum";

class Dashboar extends App {
  customRoutes = [new CustomRoute("/lorem", <LoremIpsum />)];

  isLogged() {
    return false;
  }
}

const Application = () => (
  <Fub customAppClass={Dashboar} layouts={[AuthorLayout, PostLayout]} />
);

export default Application;
