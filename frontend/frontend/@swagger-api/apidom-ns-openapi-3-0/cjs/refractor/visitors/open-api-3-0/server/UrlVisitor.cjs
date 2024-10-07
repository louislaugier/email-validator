"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _FallbackVisitor = _interopRequireDefault(require("../../FallbackVisitor.cjs"));
class UrlVisitor extends _FallbackVisitor.default {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('server-url');
    return result;
  }
}
var _default = exports.default = UrlVisitor;