import Model from "../fub/classes/Model";
import { CharField } from "../fub/classes/ModelField";

export default class AuthorModel extends Model {
  name = new CharField("Имя");
  secondName = new CharField("Фамилия");
}
