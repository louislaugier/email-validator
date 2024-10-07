"use strict";

exports.__esModule = true;
exports.default = void 0;
class TreeCursorSyntaxNode {
  type;
  startPosition;
  endPosition;
  startIndex;
  endIndex;
  text;
  isNamed;
  isMissing;
  fieldName;
  hasError = false;
  children = [];
  previousSibling;
  constructor(cursor) {
    this.type = cursor.nodeType;
    this.startPosition = cursor.startPosition;
    this.endPosition = cursor.endPosition;
    this.startIndex = cursor.startIndex;
    this.endIndex = cursor.endIndex;
    this.text = cursor.nodeText;
    this.isNamed = cursor.nodeIsNamed;
    this.isMissing = cursor.nodeIsMissing;
  }
  get keyNode() {
    if (this.type === 'flow_pair' || this.type === 'block_mapping_pair') {
      return this.children.find(node => node.fieldName === 'key');
    }
    return undefined;
  }
  get valueNode() {
    if (this.type === 'flow_pair' || this.type === 'block_mapping_pair') {
      return this.children.find(node => node.fieldName === 'value');
    }
    return undefined;
  }
  get tag() {
    let {
      previousSibling
    } = this;
    while (typeof previousSibling !== 'undefined' && previousSibling.type !== 'tag') {
      ({
        previousSibling
      } = previousSibling);
    }
    return previousSibling;
  }
  get anchor() {
    let {
      previousSibling
    } = this;
    while (typeof previousSibling !== 'undefined' && previousSibling.type !== 'anchor') {
      ({
        previousSibling
      } = previousSibling);
    }
    return previousSibling;
  }
  get firstNamedChild() {
    return this.children.find(node => node.isNamed);
  }
  setFieldName(cursor) {
    if (typeof cursor.currentFieldName === 'function') {
      this.fieldName = cursor.currentFieldName();
    } else {
      this.fieldName = cursor.currentFieldName;
    }
    return this;
  }
  setHasError(cursor) {
    if (typeof cursor.currentNode === 'function') {
      this.hasError = cursor.currentNode().hasError();
    } else {
      this.hasError = cursor.currentNode.hasError();
    }
    return this;
  }
  setPreviousSibling(previousSibling) {
    this.previousSibling = previousSibling;
  }
  pushChildren(...children) {
    this.children.push(...children);
  }
}
var _default = exports.default = TreeCursorSyntaxNode;