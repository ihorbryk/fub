import { Model } from "fub";
import { CharField, TextField, BooleanField, ChoiceField } from "fub";

export default class PostModel extends Model {
  title = new CharField("Title");
  body = new TextField("Body");
  published = new BooleanField("Published");
  animal = new ChoiceField(
    "Animal",
    [
      ["dog", "Dog"],
      ["cat", "Cat"],
      ["pig", "Pig"],
    ],
    true
  );
}
