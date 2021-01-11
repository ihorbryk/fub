import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/app";

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
                {/* TODO: implement right part of menu */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
