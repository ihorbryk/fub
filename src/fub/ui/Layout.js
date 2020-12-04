import React from "react";

export default function Layout(props) {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl font-semybold pt-12">{props.title}</h1>
        </div>
        <div className="mt-6">{props.children}</div>
      </div>
    </div>
  );
}
