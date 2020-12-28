import React from "react";
import FeatherIcon from "feather-icons-react";

export default function Confirm(props) {
  const [displayPopUp, setDisplayPopUp] = React.useState(false);

  const handleClick = () => {
    setDisplayPopUp(true);
  };

  const handleClosePopUp = () => {
    setDisplayPopUp(false);
  };

  const handleOk = () => {
    props.onOk();
    setDisplayPopUp(false);
  };

  const style = {
    default: {
      textClass: "text-black",
      buttonClass:
        "block border rounded bg-indigo-600 hover:bg-indigo-700 w-full text-white py-3 px-6 mb-2",
    },
    danger: {
      textClass: "text-red-700",
      buttonClass:
        "block border rounded bg-red-600 hover:bg-red-700 w-full text-white py-3 px-6 mb-2",
    },
  };

  const getStyle = () => {
    if (props.style) {
      return style[props.style];
    }
    return style["default"];
  };

  return (
    <div>
      {displayPopUp && (
        <div>
          <div
            className="fixed top-0 left-0 bg-gray-900 opacity-30 w-full h-full z-50"
            onClick={() => handleClosePopUp()}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow z-50">
            <div className="p-2 border rounded bg-white w-60">
              <div className="flex items-center py-4 flex-col">
                <div className={getStyle().textClass}>
                  {props.icon && (
                    <div className="flex justify-center">
                      <FeatherIcon icon={props.icon} size={40} />
                    </div>
                  )}
                  <div className="font-bold">A your sure?</div>
                </div>
              </div>
              <button className={getStyle().buttonClass} onClick={handleOk}>
                Yes
              </button>
              <button
                className="block border rounded bg-gray-200 hover:bg-gray-300 w-full text-black py-3 px-6"
                onClick={() => handleClosePopUp()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div onClick={() => handleClick()}>{props.children}</div>
    </div>
  );
}
