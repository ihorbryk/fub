import React from "react";
import { AppContext } from "../contexts/app";
import { Route, Redirect } from "react-router-dom";

export function url(path, pathParams, queryParams) {
  const urlParts = path.split("/");

  const newUrlParts = urlParts.map((element) => {
    if (element.charAt(0) === ":") {
      return pathParams.shift();
    }
    return element;
  });

  const urlString = newUrlParts.join("/");

  if (!queryParams) {
    return urlString;
  }

  const queryArray = Object.keys(queryParams).map((key) => {
    return `${key}=${queryParams[key]}`;
  });

  const queryString = queryArray.join("&");

  return urlString + "?" + queryString;
}

export function PrivateRoute({ children, ...rest }) {
  const app = React.useContext(AppContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        app.user.isLogged() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
