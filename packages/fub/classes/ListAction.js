export class ListAction {
  constructor(name, title, func) {
    this.name = name;
    this.title = title;
    this.func = func;
  }
  run(items) {
    this.func(items);
  }
}
