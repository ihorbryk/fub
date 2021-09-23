import { Model } from "fub";
import { CharField } from "fub";

export default class AuthorModel extends Model {
  name = new CharField("Name");
  secondName = new CharField("Second name");
}
