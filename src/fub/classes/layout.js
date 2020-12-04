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
