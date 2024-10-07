"use strict";

exports.__esModule = true;
exports.default = void 0;
class Node {
  static type = 'node';
  type = 'node';
  isMissing;
  children;
  position;
  constructor({
    children = [],
    position,
    isMissing = false
  } = {}) {
    this.type = this.constructor.type;
    this.isMissing = isMissing;
    this.children = children;
    this.position = position;
  }

  // creates shallow clone of node
  clone() {
    // 1. copy has same prototype as orig
    const copy = Object.create(Object.getPrototypeOf(this));

    // 2. copy has all of orig’s properties
    Object.getOwnPropertyNames(this) // (1)
    .forEach(propKey => {
      // (2)
      const descriptor = Object.getOwnPropertyDescriptor(this, propKey); // (3)
      // @ts-ignore
      Object.defineProperty(copy, propKey, descriptor); // (4)
    });
    return copy;
  }
}
var _default = exports.default = Node;