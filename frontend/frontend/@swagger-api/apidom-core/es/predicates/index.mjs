import { Element, StringElement, NumberElement, NullElement, BooleanElement, ArrayElement, ObjectElement, MemberElement, LinkElement, RefElement } from 'minim';
import { all } from 'ramda';
import { included } from 'ramda-adjunct';
import AnnotationElement from "../elements/Annotation.mjs";
import CommentElement from "../elements/Comment.mjs";
import ParserResultElement from "../elements/ParseResult.mjs";
import SourceMapElement from "../elements/SourceMap.mjs";
import createPredicate, { isElementType as isElementTypeHelper } from "./helpers.mjs";
export const isElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof Element || hasBasicElementProps(element) && primitiveEq(undefined, element);
});
export const isStringElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof StringElement || hasBasicElementProps(element) && primitiveEq('string', element);
});
export const isNumberElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof NumberElement || hasBasicElementProps(element) && primitiveEq('number', element);
});
export const isNullElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof NullElement || hasBasicElementProps(element) && primitiveEq('null', element);
});
export const isBooleanElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof BooleanElement || hasBasicElementProps(element) && primitiveEq('boolean', element);
});
export const isObjectElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq,
  hasMethod
}) => {
  return element => element instanceof ObjectElement || hasBasicElementProps(element) && primitiveEq('object', element) && hasMethod('keys', element) && hasMethod('values', element) && hasMethod('items', element);
});
export const isArrayElement = createPredicate(({
  hasBasicElementProps,
  primitiveEq,
  hasMethod
}) => {
  return element => element instanceof ArrayElement && !(element instanceof ObjectElement) || hasBasicElementProps(element) && primitiveEq('array', element) && hasMethod('push', element) && hasMethod('unshift', element) && hasMethod('map', element) && hasMethod('reduce', element);
});
export const isMemberElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof MemberElement || hasBasicElementProps(element) && isElementType('member', element) && primitiveEq(undefined, element);
});
export const isLinkElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof LinkElement || hasBasicElementProps(element) && isElementType('link', element) && primitiveEq(undefined, element);
});
export const isRefElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof RefElement || hasBasicElementProps(element) && isElementType('ref', element) && primitiveEq(undefined, element);
});
export const isAnnotationElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof AnnotationElement || hasBasicElementProps(element) && isElementType('annotation', element) && primitiveEq('array', element);
});
export const isCommentElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof CommentElement || hasBasicElementProps(element) && isElementType('comment', element) && primitiveEq('string', element);
});
export const isParseResultElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof ParserResultElement || hasBasicElementProps(element) && isElementType('parseResult', element) && primitiveEq('array', element);
});
export const isSourceMapElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof SourceMapElement || hasBasicElementProps(element) && isElementType('sourceMap', element) && primitiveEq('array', element);
});
export const isPrimitiveElement = element => {
  return isElementTypeHelper('object', element) || isElementTypeHelper('array', element) || isElementTypeHelper('boolean', element) || isElementTypeHelper('number', element) || isElementTypeHelper('string', element) || isElementTypeHelper('null', element) || isElementTypeHelper('member', element);
};
export const hasElementSourceMap = element => {
  return isSourceMapElement(element.meta.get('sourceMap'));
};
export const includesSymbols = (symbols, element) => {
  if (symbols.length === 0) {
    return true;
  }
  const elementSymbols = element.attributes.get('symbols');
  if (!isArrayElement(elementSymbols)) {
    return false;
  }
  return all(included(elementSymbols.toValue()), symbols);
};
export const includesClasses = (classes, element) => {
  if (classes.length === 0) {
    return true;
  }
  return all(included(element.classes.toValue()), classes);
};