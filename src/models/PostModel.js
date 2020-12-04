import Model from "../fub/classes/Model";
import {
  CharField,
  TextField,
  BooleanField,
  ChoiceField,
} from "../fub/classes/ModelField";

export default class PostModel extends Model {
  title = new CharField("Title");
  body = new TextField("Тело");
  published = new BooleanField("Опубликовано");
  animal = new ChoiceField(
    "Животное",
    [
      ["dog", "Сабака"],
      ["cat", "Кот"],
      ["pig", "Свинья"],
    ],
    true
  );
}
