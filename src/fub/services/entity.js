export class Entity {
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

export const registerEntity = (entityClass) => {
  entities.push(new entityClass());
};

export const getEntities = () => {
  return entities;
};
