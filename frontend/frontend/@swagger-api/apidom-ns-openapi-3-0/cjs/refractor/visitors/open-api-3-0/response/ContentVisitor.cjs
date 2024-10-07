"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ResponseContent = _interopRequireDefault(require("../../../../elements/nces/ResponseContent.cjs"));
var _ContentVisitor = _interopRequireDefault(require("../ContentVisitor.cjs"));
class ContentVisitor extends _ContentVisitor.default {
  constructor(options) {
    super(options);
    this.element = new _ResponseContent.default();
  }
}
var _default = exports.default = ContentVisitor;