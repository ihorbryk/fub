function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactRouterDom = require('react-router-dom');
var FeatherIcon = _interopDefault(require('feather-icons-react'));

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
  }, /*#__PURE__*/React.createElement(reactRouterDom.Link, {
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
  var breadCrumbsBuilder = function breadCrumbsBuilder(breadCrumbsArray) {
    var breadCrumbs = breadCrumbsArray.map(function (item) {
      if (item[0].length > 0) {
        return /*#__PURE__*/React.createElement(reactRouterDom.Link, {
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
    return breadCrumbs.reduce(function (prev, curr, index) {
      return [prev, /*#__PURE__*/React.createElement(FeatherIcon, {
        key: index,
        icon: "chevron-right",
        size: "20",
        className: "mx-4"
      }), curr];
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "bg-gray-100 h-screen"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    className: "container mx-auto"
  }, props.breadCrumbs && /*#__PURE__*/React.createElement("div", {
    className: "flex pt-12 items-center text-gray-500"
  }, breadCrumbsBuilder(props.breadCrumbs)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center " + (props.breadCrumbs ? "pt-2" : "pt-12")
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl font-semybold"
  }, props.title), /*#__PURE__*/React.createElement("div", null, props.headerActions)), /*#__PURE__*/React.createElement("div", {
    className: "pt-6"
  }, props.children)));
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var layouts = new Set();
var registerLayout = function registerLayout(layoutClass) {
  layouts.add(layoutClass);
};
var getLayouts = function getLayouts() {
  var result = [];

  for (var _iterator = _createForOfIteratorHelperLoose(layouts), _step; !(_step = _iterator()).done;) {
    var layout = _step.value;
    result.push(new layout());
  }

  return result;
};

function Home(props) {
  var layouts = getLayouts();
  return /*#__PURE__*/React.createElement(Layout, {
    title: "Home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "bg-white divide-y"
  }, layouts.map(function (layout) {
    return /*#__PURE__*/React.createElement("li", {
      key: layout.slug,
      className: "px-6 py-4"
    }, /*#__PURE__*/React.createElement(reactRouterDom.Link, {
      className: "text-blue-500 hover:text-blue-400",
      to: "/" + layout.slug
    }, layout.name));
  }))));
}

var Home$1 = /*#__PURE__*/function () {
  function Home$1() {}

  var _proto = Home$1.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(Home, null);
  };

  return Home$1;
}();

function AccessDenied() {
  return /*#__PURE__*/React.createElement(Layout, {
    title: "Access denied"
  });
}

var App = /*#__PURE__*/function () {
  function App(layouts) {
    this.appName = "Dashboard";
    this.homePath = "/";
    layouts.map(function (layout) {
      registerLayout(layout);
    });
  }

  var _proto = App.prototype;

  _proto.home = function home() {
    var homeInstance = new Home$1();
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      exact: true,
      path: this.homePath
    }, homeInstance.render());
  };

  _proto.accessDenied = function accessDenied() {
    return /*#__PURE__*/React.createElement(AccessDenied, null);
  };

  return App;
}();

function Form(props) {
  var _React$useState = React.useState(props.initValues),
      values = _React$useState[0],
      setValues = _React$useState[1];

  var handleFieldChange = function handleFieldChange(key, value) {
    var _extends2;

    setValues(_extends({}, values, (_extends2 = {}, _extends2[key] = value, _extends2)));
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    props.onSubmit(values);
  };

  return /*#__PURE__*/React.createElement(Fragment, null, props.children({
    values: values,
    handleFieldChange: handleFieldChange,
    handleFormSubmit: handleFormSubmit
  }));
}
function Input(props) {
  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    type: "text",
    className: "p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }));
}
function TextArea(props) {
  return /*#__PURE__*/React.createElement("textarea", _extends({}, props, {
    className: "p-2 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
  }));
}
function Checkbox(props) {
  var checked = null;

  if (typeof props.value === "string") {
    checked = props.value === "true" ? true : false;
  } else {
    checked = props.value;
  }

  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    onChange: function onChange(e) {
      e.target.value = !checked;
      props.onChange(e);
    },
    checked: checked,
    type: "checkbox",
    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
  }));
}
function RadioList(props) {
  var checked = null;

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

  return props.choices.map(function (choice, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: choice[0],
      className: "flex items-center"
    }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
      onChange: function onChange(e) {
        props.onChange(e);
      },
      checked: checked === choice[0] ? true : false,
      type: "radio",
      value: choice[0],
      id: props.id + "-" + index,
      className: "block focus:ring-indigo-500 h-4 w-4 text-indigo-600 border border-gray-300"
    })), /*#__PURE__*/React.createElement("label", {
      htmlFor: props.id + "-" + index,
      className: "inline-block ml-3 text-sm text-gray-700"
    }, choice[1]));
  });
}
function SelectList(props) {
  var selected = null;

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

  return /*#__PURE__*/React.createElement("select", _extends({}, props, {
    onChange: function onChange(e) {
      props.onChange(e);
    },
    className: "p-2 pr-3 border mt-1 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
  }), props.choices.map(function (choice, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: choice[0],
      checked: selected === choice[0] ? true : false,
      value: choice[0]
    }, choice[1]);
  }));
}

var ModelField = function ModelField(label) {
  this.label = label;
};
var CharField = /*#__PURE__*/function (_ModelField) {
  _inheritsLoose(CharField, _ModelField);

  function CharField() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ModelField.call.apply(_ModelField, [this].concat(args)) || this;

    _this.render = function (props) {
      return /*#__PURE__*/React.createElement(Input, props);
    };

    return _this;
  }

  return CharField;
}(ModelField);
var TextField = /*#__PURE__*/function (_ModelField2) {
  _inheritsLoose(TextField, _ModelField2);

  function TextField() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _ModelField2.call.apply(_ModelField2, [this].concat(args)) || this;

    _this2.render = function (props) {
      return /*#__PURE__*/React.createElement(TextArea, props);
    };

    return _this2;
  }

  return TextField;
}(ModelField);
var BooleanField = /*#__PURE__*/function (_ModelField3) {
  _inheritsLoose(BooleanField, _ModelField3);

  function BooleanField() {
    var _this3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _ModelField3.call.apply(_ModelField3, [this].concat(args)) || this;

    _this3.render = function (props) {
      return /*#__PURE__*/React.createElement(Checkbox, props);
    };

    return _this3;
  }

  return BooleanField;
}(ModelField);
var ChoiceField = /*#__PURE__*/function (_ModelField4) {
  _inheritsLoose(ChoiceField, _ModelField4);

  function ChoiceField(label, choices, isSelect) {
    var _this4;

    if (isSelect === void 0) {
      isSelect = false;
    }

    _this4 = _ModelField4.call(this, label) || this;

    _this4.render = function (props) {
      return _this4.isSelect ? /*#__PURE__*/React.createElement(SelectList, props) : /*#__PURE__*/React.createElement(RadioList, props);
    };

    _this4.choices = choices;
    _this4.isSelect = isSelect;
    return _this4;
  }

  return ChoiceField;
}(ModelField);

function url(path, pathParams, queryParams) {
  var urlParts = path.split("/");
  var newUrlParts = urlParts.map(function (element) {
    if (element.charAt(0) === ":") {
      return pathParams.shift();
    }

    return element;
  });
  var urlString = newUrlParts.join("/");

  if (!queryParams) {
    return urlString;
  }

  var queryArray = Object.keys(queryParams).map(function (key) {
    return key + "=" + queryParams[key];
  });
  var queryString = queryArray.join("&");
  return urlString + "?" + queryString;
}

function Add(props) {
  var _useParams = reactRouterDom.useParams(),
      layoutSlug = _useParams.layoutSlug;

  var currentLayout = getLayouts().find(function (layout) {
    return layout.slug === layoutSlug;
  });
  var fields = Object.keys(currentLayout.model).reduce(function (acc, key) {
    if (currentLayout.model[key].__proto__ instanceof ModelField) {
      acc[key] = currentLayout.model[key];
    }

    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(Layout, {
    title: "Add new " + currentLayout.name,
    breadCrumbs: [["/", /*#__PURE__*/React.createElement(FeatherIcon, {
      icon: "home",
      size: "16"
    })], [url(props.paths.list, [currentLayout.slug]), currentLayout.name], ["", "Add new"]]
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Form, {
    initValues: Object.keys(fields).reduce(function (acc, key) {
      acc[key] = "";
      return acc;
    }, {}),
    onSubmit: function onSubmit(values) {
      console.log("-->", values);
    }
  }, function (_ref) {
    var values = _ref.values,
        handleFieldChange = _ref.handleFieldChange,
        handleFormSubmit = _ref.handleFormSubmit;
    return /*#__PURE__*/React.createElement("div", {
      className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: handleFormSubmit,
      className: "divide-y"
    }, Object.keys(fields).map(function (key) {
      return /*#__PURE__*/React.createElement("div", {
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
        onChange: function onChange(e) {
          return handleFieldChange(e.target.name, e.target.value);
        }
      })));
    }), /*#__PURE__*/React.createElement("div", {
      className: "py-3 px-3 text-right bg-gray-100 rounded-b-lg"
    }, /*#__PURE__*/React.createElement(reactRouterDom.Link, {
      to: url(props.paths.list, [currentLayout.slug]),
      className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, "Update"))));
  })));
}

var Add$1 = /*#__PURE__*/function () {
  function Add$1() {}

  var _proto = Add$1.prototype;

  _proto.render = function render(props) {
    return /*#__PURE__*/React.createElement(Add, props);
  };

  return Add$1;
}();

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
  var _useParams = reactRouterDom.useParams(),
      layoutSlug = _useParams.layoutSlug;

  console.log("hello world");
  var layouts = getLayouts();
  console.log("-->", layouts);
  var currentLayout = layouts.find(function (layout) {
    return layout.slug === layoutSlug;
  });
  console.log(currentLayout);
  var listFieldNames = currentLayout.getListFieldNames();

  if (currentLayout.data.length === 0) {
    return /*#__PURE__*/React.createElement(NoDataForDisplay, null);
  }

  return /*#__PURE__*/React.createElement(Layout, {
    title: "Select " + currentLayout.name + " for edit",
    headerActions: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(reactRouterDom.Link, {
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
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, Object.keys(currentLayout.data[0]).map(function (key, index) {
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
  }, currentLayout.data.map(function (dataItem, rowIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: rowIndex
    }, Object.keys(dataItem).map(function (key, columnIndex) {
      if (currentLayout.getListFields().includes(key)) {
        return /*#__PURE__*/React.createElement("td", {
          key: dataItem[key],
          className: "px-6 py-4 whitespace-nowrap"
        }, columnIndex === 0 ? /*#__PURE__*/React.createElement(reactRouterDom.Link, {
          to: "/" + currentLayout.slug + "/" + dataItem[currentLayout.primaryKey],
          className: "text-blue-500 hover:text-blue-400"
        }, dataItem[key]) : dataItem[key]);
      } else {
        return null;
      }
    }), /*#__PURE__*/React.createElement("td", {
      className: "px-6 py-4 text-right text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-block text-red-400 cursor-pointer hover:underline",
      onClick: function onClick() {
        return currentLayout.handleDeleteOne(dataItem[currentLayout.primaryKey]);
      }
    }, "Delete")));
  })))), currentLayout.displayPagination && /*#__PURE__*/React.createElement("div", {
    className: "py-4 text-right flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-gray-500 text-sm"
  }, currentLayout.getPaginationText()), /*#__PURE__*/React.createElement("nav", {
    className: "relative z-0 inline-flex shadow-sm -space-x-px",
    "aria-label": "Pagination"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return currentLayout.handleClickPaginationPrev();
    },
    className: "cursor-pointer relative inline-flex items-center px-1 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Previous"), /*#__PURE__*/React.createElement(FeatherIcon, {
    icon: "chevron-left"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return currentLayout.handleClickPaginationNext();
    },
    className: "cursor-pointer relative inline-flex items-center px-1 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Next"), /*#__PURE__*/React.createElement(FeatherIcon, {
    icon: "chevron-right"
  })))));
}

var List$1 = /*#__PURE__*/function () {
  function List$1() {}

  var _proto = List$1.prototype;

  _proto.render = function render(props) {
    return /*#__PURE__*/React.createElement(List, props);
  };

  return List$1;
}();

function Edit(props) {
  var _useParams = reactRouterDom.useParams(),
      layoutSlug = _useParams.layoutSlug,
      id = _useParams.id;

  var currentLayout = getLayouts().find(function (layout) {
    return layout.slug === layoutSlug;
  });
  var currentData = currentLayout.data.find(function (item) {
    return item[currentLayout.primaryKey] == id;
  });

  if (!currentData) {
    return /*#__PURE__*/React.createElement("div", null, "No data");
  }

  var fields = Object.keys(currentLayout.model).reduce(function (acc, key) {
    if (currentLayout.model[key].__proto__ instanceof ModelField) {
      acc[key] = currentLayout.model[key];
    }

    return acc;
  }, {});
  return /*#__PURE__*/React.createElement(Layout, {
    title: "Editing " + currentLayout.name,
    breadCrumbs: [["/", /*#__PURE__*/React.createElement(FeatherIcon, {
      icon: "home",
      size: "16"
    })], [url(props.paths.list, [currentLayout.slug]), currentLayout.name], ["", "Edit"]]
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Form, {
    initValues: Object.keys(fields).reduce(function (acc, key) {
      acc[key] = currentData[key];
      return acc;
    }, {}),
    onSubmit: function onSubmit(values) {
      console.log("-->", values);
    }
  }, function (_ref) {
    var values = _ref.values,
        handleFieldChange = _ref.handleFieldChange,
        handleFormSubmit = _ref.handleFormSubmit;
    return /*#__PURE__*/React.createElement("div", {
      className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: handleFormSubmit,
      className: "divide-y"
    }, Object.keys(fields).map(function (key) {
      return /*#__PURE__*/React.createElement("div", {
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
        onChange: function onChange(e) {
          return handleFieldChange(e.target.name, e.target.value);
        }
      })));
    }), /*#__PURE__*/React.createElement("div", {
      className: "py-3 px-3 text-right bg-gray-100 rounded-b-lg"
    }, /*#__PURE__*/React.createElement(reactRouterDom.Link, {
      to: url(props.paths.list, [currentLayout.slug]),
      className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    }, "Update"))));
  })));
}

var Edit$1 = /*#__PURE__*/function () {
  function Edit$1() {}

  var _proto = Edit$1.prototype;

  _proto.render = function render(props) {
    return /*#__PURE__*/React.createElement(Edit, props);
  };

  return Edit$1;
}();

var Layout$1 = /*#__PURE__*/function () {
  function Layout() {
    this.name = "";
    this.slug = "";
    this.data = [];
    this.model = null;
    this.listFields = [];
    this.listFieldNames = [];
    this.primaryKey = "id";
    this.displayPagination = true;
    this.addPath = "/:layoutSlug/add";
    this.listPath = "/:layoutSlug";
    this.editPath = "/:layoutSlug/:id";
    this.listObj = new List$1();
  }

  var _proto = Layout.prototype;

  _proto.getListFields = function getListFields() {
    if (this.data.length === 0) {
      return [];
    }

    if (this.listFields.length > 0) {
      return this.listFields;
    }

    return Object.keys(this.data[0]);
  };

  _proto.getListFieldNames = function getListFieldNames() {
    if (this.listFieldNames.length === 0) {
      return this.getListFields().reduce(function (acc, field) {
        acc[field] = field;
        return acc;
      }, {});
    }

    return this.listFieldNames;
  };

  _proto.handleDeleteOne = function handleDeleteOne(uniqFieldValue) {
    console.log(uniqFieldValue);
  };

  _proto.handleClickPaginationNext = function handleClickPaginationNext() {
    console.info("Define handleClickPaginationNext method in your layout for handle pagination next");
  };

  _proto.handleClickPaginationPrev = function handleClickPaginationPrev() {
    console.info("Define handleClickPaginationPrev method in your layout for handle pagination prev");
  };

  _proto.getPaginationText = function getPaginationText() {
    return "";
  };

  _proto.list = function list() {
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      exact: true,
      path: this.listPath
    }, this.listObj.render());
  };

  _proto.add = function add() {
    var addInstance = new Add$1();
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      exact: true,
      path: this.addPath
    }, addInstance.render());
  };

  _proto.edit = function edit() {
    var editInstance = new Edit$1();
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      exact: true,
      path: this.editPath
    }, editInstance.render());
  };

  _proto.pages = function pages() {
    return [this.add(), this.list(), this.edit()];
  };

  return Layout;
}();

var Model = function Model() {
  this.name = "";
  this.slug = "";
  this.listFields = [];
  this.listFieldNames = [];
  this.primaryKey = "id";
};

var AppContext = React.createContext();
function Fub(props) {
  var getAppInstance = function getAppInstance() {
    if (props.customAppClass) {
      return new props.customAppClass(props.layouts);
    }

    return new App(props.layouts);
  };

  var appInstance = getAppInstance();
  var app = {};

  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: app
  }, /*#__PURE__*/React.createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(reactRouterDom.Switch, null, appInstance.home(), getLayouts().map(function (layout) {
    return /*#__PURE__*/React.createElement(reactRouterDom.Route, {
      exact: true,
      path: layout.addPath
    }, layout.render());
  }))));
}

exports.AppContext = AppContext;
exports.BooleanField = BooleanField;
exports.CharField = CharField;
exports.ChoiceField = ChoiceField;
exports.Layout = Layout$1;
exports.Model = Model;
exports.ModelField = ModelField;
exports.TextField = TextField;
exports.default = Fub;
exports.registerLayout = registerLayout;
//# sourceMappingURL=index.js.map
