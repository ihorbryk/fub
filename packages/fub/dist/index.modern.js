import React from 'react';
import { Link, useParams, Route, BrowserRouter, Switch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

function Header() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-white font-bold border border-white w-8 h-8 flex items-center justify-center rounded-lg"
  }, "F"))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-10 flex items-baseline space-x-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-4 flex items-center md:ml-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-3 relative"
  }))))));
}

function Layout(props) {
  const breadCrumbsBuilder = breadCrumbsArray => {
    const breadCrumbs = breadCrumbsArray.map(item => {
      if (item[0].length > 0) {
        return /*#__PURE__*/React.createElement(Link, {
          key: item[1],
          to: item[0],
          className: ""
        }, item[1]);
      }

      return /*#__PURE__*/React.createElement("div", {
        key: item[1],
        className: ""
      }, item[1]);
    });
    return breadCrumbs.reduce((prev, curr, index) => [prev, /*#__PURE__*/React.createElement(FeatherIcon, {
      key: index,
      icon: "chevron-right",
      size: "20",
      className: "mx-4"
    }), curr]);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-100 h-screen"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, props.breadCrumbs && /*#__PURE__*/React.createElement("div", {
    className: "flex pt-12 items-center text-gray-500"
  }, breadCrumbsBuilder(props.breadCrumbs)), /*#__PURE__*/React.createElement("div", {
    className: `flex justify-between items-center ${props.breadCrumbs ? "pt-2" : "pt-12"}`
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-semybold"
  }, props.title), /*#__PURE__*/React.createElement("div", null, props.headerActions)), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, props.children)));
}

const layouts = [];
const registerLayout = layoutClass => {
  layouts.push(new layoutClass());
};
const getLayouts = () => {
  return layouts;
};

function Home(props) {
  const layouts = getLayouts();
  return /*#__PURE__*/React.createElement(Layout, {
    title: "Home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "bg-white divide-y"
  }, layouts.map(layout => /*#__PURE__*/React.createElement("li", {
    key: layout.slug,
    className: "px-6 py-4"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "text-blue-500 hover:text-blue-400",
    to: `/${layout.slug}`
  }, layout.name))))));
}

class Home$1 {
  render() {
    return /*#__PURE__*/React.createElement(Home, null);
  }

}

function Form(props) {
  const [values, setValues] = React.useState(props.initValues);

  const handleFieldChange = (key, value) => {
    setValues({ ...values,
      [key]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    props.onSubmit(values);
  };

  return /*#__PURE__*/React.createElement(Fragment, null, props.children({
    values,
    handleFieldChange,
    handleFormSubmit
  }));
}
function Input(props) {
  return /*#__PURE__*/React.createElement("input", Object.assign({}, props, {
    type: "text",
    className: "p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }));
}
function TextArea(props) {
  return /*#__PURE__*/React.createElement("textarea", Object.assign({}, props, {
    className: "p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }));
}
function Checkbox(props) {
  let checked = null;

  if (typeof props.value === "string") {
    checked = props.value === "true" ? true : false;
  } else {
    checked = props.value;
  }

  return /*#__PURE__*/React.createElement("input", Object.assign({}, props, {
    onChange: e => {
      e.target.value = !checked;
      props.onChange(e);
    },
    checked: checked,
    type: "checkbox",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
  }));
}
function RadioList(props) {
  let checked = null;

  if (typeof props.value === "string") {
    checked = props.value;

    if (props.value === "true") {
      checked = true;
    }

    if (props.value === "false") {
      checked = false;
    }
  } else {
    checked = props.value;
  }

  return props.choices.map((choice, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: choice[0],
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("input", Object.assign({}, props, {
      onChange: e => {
        props.onChange(e);
      },
      checked: checked === choice[0] ? true : false,
      type: "radio",
      value: choice[0],
      id: `${props.id}-${index}`,
      className: "block focus:ring-indigo-500 h-4 w-4 text-indigo-600 border border-gray-300"
    })), /*#__PURE__*/React.createElement("label", {
      htmlFor: `${props.id}-${index}`,
      className: "inline-block ml-3 text-sm text-gray-700"
    }, choice[1]));
  });
}
function SelectList(props) {
  let selected = null;

  if (typeof props.value === "string") {
    selected = props.value;

    if (props.value === "true") {
      selected = true;
    }

    if (props.value === "false") {
      selected = false;
    }
  } else {
    selected = props.value;
  }

  return /*#__PURE__*/React.createElement("select", Object.assign({}, props, {
    onChange: e => {
      props.onChange(e);
    },
    className: "p-2 pr-3 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
  }), props.choices.map((choice, index) => {
    return /*#__PURE__*/React.createElement("option", {
      key: choice[0],
      checked: selected === choice[0] ? true : false,
      value: choice[0]
    }, choice[1]);
  }));
}

class ModelField {
  constructor(label) {
    this.label = label;
  }

}
class CharField extends ModelField {
  constructor(...args) {
    super(...args);

    this.render = props => /*#__PURE__*/React.createElement(Input, props);
  }

}
class TextField extends ModelField {
  constructor(...args) {
    super(...args);

    this.render = props => /*#__PURE__*/React.createElement(TextArea, props);
  }

}
class BooleanField extends ModelField {
  constructor(...args) {
    super(...args);

    this.render = props => /*#__PURE__*/React.createElement(Checkbox, props);
  }

}
class ChoiceField extends ModelField {
  constructor(label, choices, isSelect = false) {
    super(label);

    this.render = props => {
      return this.isSelect ? /*#__PURE__*/React.createElement(SelectList, props) : /*#__PURE__*/React.createElement(RadioList, props);
    };

    this.choices = choices;
    this.isSelect = isSelect;
  }

}

function url(path, pathParams, queryParams) {
  const urlParts = path.split("/");
  const newUrlParts = urlParts.map(element => {
    if (element.charAt(0) === ":") {
      return pathParams.shift();
    }

    return element;
  });
  const urlString = newUrlParts.join("/");

  if (!queryParams) {
    return urlString;
  }

  const queryArray = Object.keys(queryParams).map(key => {
    return `${key}=${queryParams[key]}`;
  });
  const queryString = queryArray.join("&");
  return urlString + "?" + queryString;
}

function Add(props) {
  const {
    layoutSlug
  } = useParams();
  const currentLayout = getLayouts().find(layout => layout.slug === layoutSlug);
  const fields = Object.keys(currentLayout.model).reduce((acc, key) => {
    if (currentLayout.model[key].__proto__ instanceof ModelField) {
      acc[key] = currentLayout.model[key];
    }

    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(Layout, {
    title: `Add new ${currentLayout.name}`,
    breadCrumbs: [["/", /*#__PURE__*/React.createElement(FeatherIcon, {
      icon: "home",
      size: "16"
    })], [url(props.paths.list, [currentLayout.slug]), currentLayout.name], ["", "Add new"]]
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Form, {
    initValues: Object.keys(fields).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {}),
    onSubmit: values => {
      console.log("-->", values);
    }
  }, ({
    values,
    handleFieldChange,
    handleFormSubmit
  }) => /*#__PURE__*/React.createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "divide-y"
  }, Object.keys(fields).map(key => /*#__PURE__*/React.createElement("div", {
    key: key,
    className: "flex items-center py-3 px-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-64"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: key,
    className: "block text-sm text-gray-700"
  }, fields[key].label)), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, fields[key].render({
    id: key,
    name: key,
    value: values[key],
    choices: fields[key].choices,
    onChange: e => handleFieldChange(e.target.name, e.target.value)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "py-3 px-3 text-right bg-gray-100 rounded-b-lg"
  }, /*#__PURE__*/React.createElement(Link, {
    to: url(props.paths.list, [currentLayout.slug]),
    className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Update")))))));
}

class Add$1 {
  render(props) {
    return /*#__PURE__*/React.createElement(Add, props);
  }

}

function Edit(props) {
  const {
    layoutSlug,
    id
  } = useParams();
  const currentLayout = getLayouts().find(layout => {
    return layout.slug === layoutSlug;
  });
  const currentData = currentLayout.data.find(item => item[currentLayout.primaryKey] == id);

  if (!currentData) {
    return /*#__PURE__*/React.createElement("div", null, "No data");
  }

  const fields = Object.keys(currentLayout.model).reduce((acc, key) => {
    if (currentLayout.model[key].__proto__ instanceof ModelField) {
      acc[key] = currentLayout.model[key];
    }

    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(Layout, {
    title: `Editing ${currentLayout.name}`,
    breadCrumbs: [["/", /*#__PURE__*/React.createElement(FeatherIcon, {
      icon: "home",
      size: "16"
    })], [url(props.paths.list, [currentLayout.slug]), currentLayout.name], ["", "Edit"]]
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Form, {
    initValues: Object.keys(fields).reduce((acc, key) => {
      acc[key] = currentData[key];
      return acc;
    }, {}),
    onSubmit: values => {
      console.log("-->", values);
    }
  }, ({
    values,
    handleFieldChange,
    handleFormSubmit
  }) => /*#__PURE__*/React.createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "divide-y"
  }, Object.keys(fields).map(key => /*#__PURE__*/React.createElement("div", {
    key: key,
    className: "flex items-center py-3 px-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-64"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: key,
    className: "block text-sm text-gray-700"
  }, fields[key].label)), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, fields[key].render({
    id: key,
    name: key,
    value: values[key],
    choices: fields[key].choices,
    onChange: e => handleFieldChange(e.target.name, e.target.value)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "py-3 px-3 text-right bg-gray-100 rounded-b-lg"
  }, /*#__PURE__*/React.createElement(Link, {
    to: url(props.paths.list, [currentLayout.slug]),
    className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Update")))))));
}

class Edit$1 {
  render(props) {
    return /*#__PURE__*/React.createElement(Edit, props);
  }

}

function NoDataForDisplay() {
  return /*#__PURE__*/React.createElement(Layout, {
    title: "No data for display"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-10 flex flex-col items-center border rounded-lg text-gray-500"
  }, /*#__PURE__*/React.createElement(FeatherIcon, {
    icon: "inbox",
    size: 100
  }), /*#__PURE__*/React.createElement("div", {
    className: "italic"
  }, "No Data")));
}

function List(props) {
  const layouts = getLayouts();
  const {
    layoutSlug
  } = useParams();
  const currentLayout = layouts.find(layout => layout.slug === layoutSlug);
  const listFieldNames = currentLayout.getListFieldNames();

  if (currentLayout.data.length === 0) {
    return /*#__PURE__*/React.createElement(NoDataForDisplay, null);
  }

  return /*#__PURE__*/React.createElement(Layout, {
    title: `Select ${currentLayout.name} for edit`,
    headerActions: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
      to: url(props.paths.add, [currentLayout.slug]),
      className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, "Add new")),
    breadCrumbs: [["/", /*#__PURE__*/React.createElement(FeatherIcon, {
      icon: "home",
      size: "16"
    })], ["", currentLayout.name]]
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow overflow-hidden border-gray-200 sm:rounded-lg"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table-auto min-w-full"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, Object.keys(currentLayout.data[0]).map((key, index) => {
    if (currentLayout.getListFields().includes(key)) {
      return /*#__PURE__*/React.createElement("th", {
        key: key,
        className: "px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      }, listFieldNames[key]);
    } else return null;
  }), /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "bg-white divide-y divide-gray-200"
  }, currentLayout.data.map((dataItem, rowIndex) => /*#__PURE__*/React.createElement("tr", {
    key: rowIndex
  }, Object.keys(dataItem).map((key, columnIndex) => {
    if (currentLayout.getListFields().includes(key)) {
      return /*#__PURE__*/React.createElement("td", {
        key: dataItem[key],
        className: "px-6 py-4 whitespace-nowrap"
      }, columnIndex === 0 ? /*#__PURE__*/React.createElement(Link, {
        to: `/${currentLayout.slug}/${dataItem[currentLayout.primaryKey]}`,
        className: "text-blue-500 hover:text-blue-400"
      }, dataItem[key]) : dataItem[key]);
    } else {
      return null;
    }
  }), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-4 text-right text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block text-red-400 cursor-pointer hover:underline",
    onClick: () => currentLayout.handleDeleteOne(dataItem[currentLayout.primaryKey])
  }, "Delete"))))))), currentLayout.displayPagination && /*#__PURE__*/React.createElement("div", {
    className: "py-4 text-right flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-gray-500 text-sm"
  }, currentLayout.getPaginationText()), /*#__PURE__*/React.createElement("nav", {
    className: "relative z-0 inline-flex shadow-sm -space-x-px",
    "aria-label": "Pagination"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => currentLayout.handleClickPaginationPrev(),
    className: "cursor-pointer relative inline-flex items-center px-1 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Previous"), /*#__PURE__*/React.createElement(FeatherIcon, {
    icon: "chevron-left"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => currentLayout.handleClickPaginationNext(),
    className: "cursor-pointer relative inline-flex items-center px-1 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Next"), /*#__PURE__*/React.createElement(FeatherIcon, {
    icon: "chevron-right"
  })))));
}

class List$1 {
  render(props) {
    return /*#__PURE__*/React.createElement(List, props);
  }

}

function AccessDenied() {
  return /*#__PURE__*/React.createElement(Layout, {
    title: "Access denied"
  });
}

class App {
  constructor() {
    this.appName = "Dashboard";
    this.homePath = "/";
    this.addPath = "/:layoutSlug/add";
    this.listPath = "/:layoutSlug";
    this.editPath = "/:layoutSlug/:id";
  }

  getPaths() {
    return {
      add: this.addPath,
      list: this.listPath,
      edit: this.editPath
    };
  }

  home() {
    const homeInstance = new Home$1();
    return /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: this.homePath
    }, homeInstance.render({
      paths: this.getPaths()
    }));
  }

  list() {
    const listInstance = new List$1();
    return /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: this.listPath
    }, listInstance.render({
      paths: this.getPaths()
    }));
  }

  add() {
    const addInstance = new Add$1();
    return /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: this.addPath
    }, addInstance.render({
      paths: this.getPaths()
    }));
  }

  edit() {
    const editInstance = new Edit$1();
    return /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: this.editPath
    }, editInstance.render({
      paths: this.getPaths()
    }));
  }

  accessDenied() {
    return /*#__PURE__*/React.createElement(AccessDenied, null);
  }

}

class Layout$1 {
  constructor() {
    this.name = "";
    this.slug = "";
    this.data = [];
    this.model = null;
    this.listFields = [];
    this.listFieldNames = [];
    this.primaryKey = "id";
    this.displayPagination = true;
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

  handleDeleteOne(uniqFieldValue) {
    console.log(uniqFieldValue);
  }

  handleClickPaginationNext() {
    console.info("Define handleClickPaginationNext method in your layout for handle pagination next");
  }

  handleClickPaginationPrev() {
    console.info("Define handleClickPaginationPrev method in your layout for handle pagination prev");
  }

  getPaginationText() {
    return "";
  }

}

class Model {
  constructor() {
    this.name = "";
    this.slug = "";
    this.listFields = [];
    this.listFieldNames = [];
    this.primaryKey = "id";
  }

}

const AppContext = React.createContext();
function Fub(props) {
  const getAppInstance = () => {
    if (props.customAppClass) {
      return new props.customAppClass();
    }

    return new App();
  };

  const appInstance = getAppInstance();
  const app = {};
  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: app
  }, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Switch, null, appInstance.add(), appInstance.edit(), appInstance.list(), appInstance.home())));
}

export default Fub;
export { AppContext, BooleanField, CharField, ChoiceField, Layout$1 as Layout, Model, ModelField, TextField, registerLayout };
//# sourceMappingURL=index.modern.js.map
