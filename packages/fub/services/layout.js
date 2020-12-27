const layouts = new Set();

export const registerLayout = (layoutClass) => {
  layouts.add(layoutClass);
};

export const getLayouts = () => {
  const result = [];
  for (let layout of layouts) result.push(new layout());
  return result;
};
