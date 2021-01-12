import React from "react";
import FeatherIcon from "feather-icons-react";
import { NotificationContext } from "../contexts/notification";
import { NotificationItem as NIClass } from "../classes/NotificationItem";

export default function Notification(props) {
  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return {
          ...state,
          notifications: state.notifications.add(action.newItem),
        };
      case "delete":
        return {
          ...state,
          notifications: new Set(
            Array.from(state.notifications).filter(
              (item) => item.id !== action.id
            )
          ),
        };
      case "clearAll":
        return {
          ...state,
          notifications: new Set(),
          showAll: false,
        };
      case "hide":
        return {
          ...state,
          notifications: new Set(
            Array.from(state.notifications).map((item) => {
              if (item.id === action.id) {
                item.isHidden = true;
              }
              return item;
            })
          ),
        };
      case "view":
        return {
          ...state,
          notifications: new Set(
            Array.from(state.notifications).map((item) => {
              if (item.id === action.id) {
                item.isViewed = true;
              }
              return item;
            })
          ),
        };
      case "viewAll":
        return {
          ...state,
          notifications: new Set(
            Array.from(state.notifications).map((item) => {
              item.isViewed = true;
              return item;
            })
          ),
        };
      case "toggle":
        return {
          ...state,
          showAll: !state.showAll,
        };
      default:
        throw new Error();
    }
  }

  const initialState = {
    notifications: new Set(),
    showAll: false,
    toggle: () => {
      dispatch({ type: "toggle" });
    },
    viewAll: () => {
      dispatch({ type: "viewAll" });
    },
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleDelete = (id) => {
    setTimeout(() => {
      dispatch({ type: "delete", id });
    }, 300);
  };

  const handleHide = (id) => {
    dispatch({ type: "hide", id });
  };

  const handleView = (id) => {
    dispatch({ type: "view", id });
  };

  const handleClearAll = () => {
    dispatch({ type: "clearAll" });
  };

  return (
    <React.Fragment>
      <div
        className="absolute px-3 py-3 top-20 right-4 z-50 overflow-y-auto"
        style={{ maxHeight: "calc(100% - 6rem)" }}
      >
        {state.showAll && state.notifications.size > 0 && (
          <div className="w-full flex justify-center mb-2">
            <div
              className="text-xs rounded-full px-3 py-1 bg-gray-300 border-1 border-gray-500 cursor-pointer shadow"
              onClick={handleClearAll}
            >
              Clear all
            </div>
          </div>
        )}
        {state.notifications.size > 0 &&
          Array.from(state.notifications)
            .sort((a, b) => b.date - a.date)
            .map((item) => {
              return (
                <NotificationItem
                  key={item.id}
                  type={item.type}
                  title={item.title}
                  message={item.message}
                  displayedDate={item.displayedDate}
                  isHidden={item.isHidden}
                  onDelete={() => handleDelete(item.id)}
                  onHide={() => handleHide(item.id)}
                  onView={() => handleView(item.id)}
                  showAll={state.showAll}
                />
              );
            })}
      </div>
      <NotificationContext.Provider value={state}>
        {props.children}
      </NotificationContext.Provider>
    </React.Fragment>
  );
}

export function NotificationItem(props) {
  const getBGColor = () => {
    switch (props.type) {
      case "error":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-white";
    }
  };

  const getIcon = () => {
    switch (props.type) {
      case "error":
        return "alert-circle";
      case "success":
        return "check-circle";
      case "warning":
        return "alert-triangle";
      default:
        return "info";
    }
  };

  const getLabel = () => {
    switch (props.type) {
      case "error":
        return "Error";
      case "success":
        return "Success";
      case "warning":
        return "Warning";
      default:
        return "Message";
    }
  };

  const [isDisplay, setIsDisplay] = React.useState(false);
  const [deleteAnimation, setDeleteAnimation] = React.useState("");
  const [hideAnimation, setHideAnimation] = React.useState("");

  const handleDelete = (e) => {
    e.stopPropagation();

    setDeleteAnimation("scale-0");

    setTimeout(() => {
      setDeleteAnimation("");
    }, 300);

    props.onDelete();
  };

  const handleHide = (e) => {
    if (props.showAll) {
      return;
    }

    if (e) {
      e.stopPropagation();
    }

    props.onHide();
  };

  const handleView = () => {
    props.onView();
  };

  React.useEffect(() => {
    // Show
    if (!props.showAll && !props.isHidden) {
      setHideAnimation("translate-x-full");
      setIsDisplay(true);
      setTimeout(() => {
        setHideAnimation("translate-x-0");
      }, 0);
      setTimeout(() => {
        handleHide();
      }, 5000);
    }

    // Hide
    if (!props.showAll && props.isHidden) {
      setHideAnimation("translate-x-full");
      setTimeout(() => {
        setIsDisplay(false);
      }, 300);
    }

    // Show all
    if (props.showAll) {
      setIsDisplay(true);
      setTimeout(() => {
        setHideAnimation("translate-x-0");
      });
    }
  }, [props.showAll, props.isHidden]);

  if (!isDisplay) return null;

  return (
    <div
      className={`transform ${hideAnimation} ${deleteAnimation} transition duration-300 group relative border border-white p-2 ${getBGColor()} text-white shadow-xl rounded-md text-sm w-80 mb-4 cursor-pointer`}
      onClick={() => {
        handleHide();
        handleView();
      }}
    >
      <div
        className={`opacity-0 group-hover:opacity-100 duration-300 transition-opacity absolute border border-white rounded-full top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ${getBGColor()} p-1`}
        onClick={handleDelete}
      >
        <FeatherIcon icon="x" size={12} />
      </div>
      <div className="flex mb-2 justify-between items-center">
        <div className="flex text-xs">
          <FeatherIcon icon={getIcon()} size={16} className="mr-1" />
          {getLabel()}
        </div>
        <div className="text-xs ">{props.displayedDate}</div>
      </div>
      <div className="font-semibold">{props.title}</div>
      <div className="">{props.message}</div>
    </div>
  );
}
