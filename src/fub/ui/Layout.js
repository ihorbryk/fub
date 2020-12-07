import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

export default function Layout(props) {
  const breadCrumbsBuilder = (breadCrumbsArray) => {
    const breadCrumbs = breadCrumbsArray.map((item) => {
      if (item[0].length > 0) {
        return (
          <Link key={item[1]} to={item[0]} className="">
            {item[1]}
          </Link>
        );
      }
      return (
        <div key={item[1]} className="">
          {item[1]}
        </div>
      );
    });

    return breadCrumbs.reduce((prev, curr, index) => [
      prev,
      <FeatherIcon
        key={index}
        icon="chevron-right"
        size="20"
        className="mx-4"
      />,
      curr,
    ]);
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <div className="container mx-auto">
        {props.breadCrumbs && (
          <div className="flex pt-12 items-center text-gray-500">
            {breadCrumbsBuilder(props.breadCrumbs)}
          </div>
        )}
        <div
          className={`flex justify-between items-center ${
            props.breadCrumbs ? "pt-2" : "pt-12"
          }`}
        >
          <h1 className="text-3xl font-semybold">{props.title}</h1>
          <div>{props.headerActions}</div>
        </div>
        <div className="pt-6">{props.children}</div>
      </div>
    </div>
  );
}
