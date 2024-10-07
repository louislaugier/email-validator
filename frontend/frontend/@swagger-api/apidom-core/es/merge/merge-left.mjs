import mergeRight from "./merge-right.mjs";
const mergeLeft = (...[sourceElement, targetElement, options]) => {
  return mergeRight(targetElement, sourceElement, options);
};
mergeLeft.all = (...[list, options]) => {
  return mergeRight.all([...list].reverse(), options);
};
export default mergeLeft;