import { Model } from "fub";
import { CharField } from "fub";

export default class AuthorModel extends Model {
  name = new CharField("Имя");
  secondName = new CharField("Фамилия");
}
