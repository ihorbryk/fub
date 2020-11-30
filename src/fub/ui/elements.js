import React from "react";

// TODO: move this to Layout
export function PageHeader(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
    </div>
  );
}
