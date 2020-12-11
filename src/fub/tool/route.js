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
