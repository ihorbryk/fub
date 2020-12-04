import { Checkbox, Input, TextArea, RadioList, SelectList } from "../ui/Form";

export class ModelField {
  constructor(label) {
    this.label = label;
  }
}

export class CharField extends ModelField {
  render = (props) => <Input {...props} />;
}

export class TextField extends ModelField {
  render = (props) => <TextArea {...props} />;
}

export class BooleanField extends ModelField {
  render = (props) => <Checkbox {...props} />;
}

export class ChoiceField extends ModelField {
  constructor(label, choices, isSelect = false) {
    super(label);
    this.choices = choices;
    this.isSelect = isSelect;
  }
  render = (props) => {
    return this.isSelect ? <SelectList {...props} /> : <RadioList {...props} />;
  };
}
