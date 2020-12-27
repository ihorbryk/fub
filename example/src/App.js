import Fub from "fub";
import AuthorLayout from "./layouts/AuthorLayout";
import PostLayout from "./layouts/PostLayout";

const App = () => <Fub layouts={[AuthorLayout, PostLayout]} />;

export default App;
