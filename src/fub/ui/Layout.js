import React from "react";

export default function Layout(props) {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-semybold mt-12">{props.title}</h1>
      </div>
      <div className="mt-6">{props.children}</div>
    </div>
  );
}
