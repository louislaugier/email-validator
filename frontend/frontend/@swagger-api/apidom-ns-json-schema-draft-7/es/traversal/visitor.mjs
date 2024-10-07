import { keyMap as keyMapBase, isElement } from '@swagger-api/apidom-core';

// getNodeType :: Node -> String
export const getNodeType = element => {
  if (!isElement(element)) {
    return undefined;
  }
  return `${element.element.charAt(0).toUpperCase() + element.element.slice(1)}Element`;
};
export const keyMap = {
  JSONSchemaDraft7Element: ['content'],
  JSONReferenceElement: ['content'],
  LinkDescriptionElement: ['content'],
  ...keyMapBase
};