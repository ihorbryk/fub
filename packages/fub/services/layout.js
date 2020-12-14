const layouts = [];

export const registerLayout = (layoutClass) => {
  layouts.push(new layoutClass());
};

export const getLayouts = () => {
  return layouts;
};
