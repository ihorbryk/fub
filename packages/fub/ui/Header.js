import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/app";
import FeatherIcon from "feather-icons-react";
import { NotificationContext } from "../contexts/notification";

export const CustomUserHeaderLink = (props) => {
  return (
    <Link
      to={props.path}
      className="block cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-2 px-4"
    >
      {props.label}
    </Link>
  );
};

const UserDropDown = (props) => {
  const appContext = React.useContext(AppContext);

  const [isOpen, setIsOpen] = React.useState(false);

  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const exitHandler = () => {
    appContext.user.onExit();
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center cursor-pointer"
      >
        {props.title} <FeatherIcon icon="chevron-down" size={18} />
      </div>
      {isOpen && (
        <div className="absolute right-0 bg-white w-max min-w-full divide-y shadow-2xl rounded-md z-10 text-sm">
          {appContext.user.customUserHeaderLinks.length > 0 && (
            <div className="py-1">
              {appContext.user.customUserHeaderLinks.map((link, i) =>
                link.render(i)
              )}
            </div>
          )}
          <div className="py-1">
            <div
              className="cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-2 px-4"
              onClick={exitHandler}
            >
              Exit
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const appContext = useContext(AppContext);

  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <div className="text-white font-bold text-2xl flex items-center">
                  {appContext.appName}
                </div>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* TODO: implement menu */}
                {/* <a
                  href="#"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <Notifications />
              </div>
              <div className="ml-3 relative">
                <UserDropDown title={appContext.user.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notifications(props) {
  const notificationContext = React.useContext(NotificationContext);

  const handleToggleNotification = () => {
    notificationContext.toggle();
    notificationContext.viewAll();
  };

  let pressedClass = "";

  if (notificationContext.showAll) {
    pressedClass = "bg-gray-700";
  }

  const countNotViewed = Array.from(notificationContext.notifications).filter(
    (item) => !item.isViewed
  ).length;

  return (
    <div
      onClick={handleToggleNotification}
      className={`${pressedClass} relative text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
    >
      {notificationContext.showAll ? (
        <FeatherIcon icon="bell" className="transform rotate-45" />
      ) : (
        <FeatherIcon icon="bell" />
      )}
      {countNotViewed > 0 && (
        <React.Fragment>
          <div className="text-xs absolute bottom-2 right-2 px-1 bg-red-500 rounded-full">
            {countNotViewed}
          </div>
          <div className="text-xs animate-ping absolute bottom-2 right-2 px-1 bg-red-500 rounded-full">
            {countNotViewed}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
