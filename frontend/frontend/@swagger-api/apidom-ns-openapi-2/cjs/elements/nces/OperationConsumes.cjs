"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class OperationConsumes extends _apidomCore.ArrayElement {
  static primaryClass = 'operation-consumes';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationConsumes.primaryClass);
  }
}
var _default = exports.default = OperationConsumes;