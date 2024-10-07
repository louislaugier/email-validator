import { isNodeType } from "../../predicates.mjs";
export const isDocument = node => isNodeType('document', node);
export const isString = node => isNodeType('string', node);
export const isFalse = node => isNodeType('false', node);
export const isTrue = node => isNodeType('true', node);
export const isNull = node => isNodeType('null', node);
export const isNumber = node => isNodeType('number', node);
export const isArray = node => isNodeType('array', node);
export const isObject = node => isNodeType('object', node);
export const isStringContent = node => isNodeType('stringContent', node);
export const isEscapeSequence = node => isNodeType('escapeSequence', node);
export const isProperty = node => isNodeType('property', node);
export const isKey = node => isNodeType('key', node);