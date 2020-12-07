// TODO: implement queryParams
export function url(path, pathParams, queryParams) {
  const urlParts = path.split("/");

  const newUrlParts = urlParts.map((element) => {
    if (element.charAt(0) === ":") {
      return pathParams.shift();
    }
    return element;
  });

  return newUrlParts.join("/");
}
