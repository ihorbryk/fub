import { Checkbox, Input, TextArea, RadioList, SelectList } from "./ui/Form";

export class Layout {
  // Entity name displayed on the page header
  name = "";

  // Field used as entity slug in routes
  slug = "";

  // Array of model objects
  data = [];

  // Object discribe structure of entity
  model = null;

  // Keys of fields displayed on list page
  listFields = [];

  // Names of fields displayed on list page
  listFieldNames = [];

  // Field used as uniq identificator in data set
  primaryKey = "id";

  getListFields() {
    if (this.data.length === 0) {
      return [];
    }
    if (this.listFields.length > 0) {
      return this.listFields;
    }
    return Object.keys(this.data[0]);
  }

  getListFieldNames() {
    if (this.listFieldNames.length === 0) {
      return this.getListFields().reduce((acc, field) => {
        acc[field] = field;
        return acc;
      }, {});
    }
    return this.listFieldNames;
  }
}

export class Model {
  // Entity name displayed on the page header
  name = "";

  // Field used as entity slug in routes
  slug = "";

  // Keys of fields displayed on list page
  listFields = [];

  // Names of fields displayed on list page
  listFieldNames = [];

  // Field used as uniq identificator
  primaryKey = "id";
}

const layouts = [];

export const registerLayout = (layoutClass) => {
  layouts.push(new layoutClass());
};

export const getLayouts = () => {
  return layouts;
};

export class Field {
  constructor(label) {
    this.label = label;
  }
}
export class CharField extends Field {
  render = (props) => <Input {...props} />;
}

export class TextField extends Field {
  render = (props) => <TextArea {...props} />;
}

export class BooleanField extends Field {
  render = (props) => <Checkbox {...props} />;
}

export class ChoiceField extends Field {
  constructor(label, choices, isSelect = false) {
    super(label);
    this.choices = choices;
    this.isSelect = isSelect;
  }
  render = (props) => {
    return this.isSelect ? <SelectList {...props} /> : <RadioList {...props} />;
  };
}
