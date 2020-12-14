import Fub from "fub";
import { registerLayout } from "fub";
import PostLayout from "./layouts/PostLayout";
import AuthorLayout from "./layouts/AuthorLayout";

registerLayout(PostLayout);
registerLayout(AuthorLayout);

const App = () => <Fub />;

export default App;
