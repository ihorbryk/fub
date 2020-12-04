import Model from "../fub/classes/model";
import { CharField } from "../fub/classes/modelField";

export default class AuthorModel extends Model {
  name = new CharField("Имя");
  secondName = new CharField("Фамилия");
}
