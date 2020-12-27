import Fub, { App } from "fub";
import AuthorLayout from "./layouts/AuthorLayout";
import PostLayout from "./layouts/PostLayout";

const Application = () => <Fub layouts={[AuthorLayout, PostLayout]} />;

export default Application;
