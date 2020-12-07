import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto">
        <div className="flex pt-12 justify-between items-center">
          <h1 className="text-3xl font-semybold">{props.title}</h1>
          {props.headerActions}
        </div>
        <div className="mt-6">{props.children}</div>
      </div>
    </div>
  );
}
