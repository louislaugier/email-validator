"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class OperationProduces extends _apidomCore.ArrayElement {
  static primaryClass = 'operation-produces';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationProduces.primaryClass);
  }
}
var _default = exports.default = OperationProduces;