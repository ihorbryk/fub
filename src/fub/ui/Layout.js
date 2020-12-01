import React from "react";

export default function Layout(props) {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
      </div>
      {props.children}
    </div>
  );
}
