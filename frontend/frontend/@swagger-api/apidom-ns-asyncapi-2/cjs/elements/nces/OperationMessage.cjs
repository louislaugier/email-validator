"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class OperationMessage extends _apidomCore.ArrayElement {
  static primaryClass = 'operation-message';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationMessage.primaryClass);
  }
}
var _default = exports.default = OperationMessage;