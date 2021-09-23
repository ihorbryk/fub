import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-end">
          <h1 className="text-6xl">404</h1>
          <div className="mx-4">Page not found</div>
        </div>
        <div className="mt-4">
          <Link
            to="/"
            className="border rounded hover:shadow bg-indigo-500 hover:bg-indigo-600 px-3 py-2 text-white focus:ouline-none"
          >
            Go to home page
          </Link>
        </div>
      </div>
    </div>
  );
}
