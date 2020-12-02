import { Checkbox, Input, TextArea, RadioList, SelectList } from "./ui/Form";

export class Model {
  constructor() {
    // Entity name displayed on the page header
    this.name = "";

    // Field used as entity slug in routes
    this.slug = "";

    // Array of entity objects
    this.data = [];

    // Keys of fields displayed on list page
    this.listFields = [];

    // Names of fields displayed on list page
    this.listFieldNames = [];

    // Field used as uniq identificator
    this.primaryKey = "id";
  }

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

const entities = [];

export const registerModel = (entityClass) => {
  entities.push(new entityClass());
};

export const getModels = () => {
  return entities;
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
