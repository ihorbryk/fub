import Fub from "./fub/Fub";
import { registerLayout } from "./fub/services/layout";
import PostLayout from "./layouts/PostLayout";
import AuthorLayout from "./layouts/AuthorLayout";

registerLayout(PostLayout);
registerLayout(AuthorLayout);

const App = () => <Fub />;

export default App;
