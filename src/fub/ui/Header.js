import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <div className="text-white font-bold border border-white w-8 h-8 flex items-center justify-center rounded-lg">
                  F
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
