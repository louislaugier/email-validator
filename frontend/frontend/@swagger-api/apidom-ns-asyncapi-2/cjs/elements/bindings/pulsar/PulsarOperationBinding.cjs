"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class PulsarOperationBinding extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'pulsarOperationBinding';
    this.classes.push('operation-binding');
  }
}
var _default = exports.default = PulsarOperationBinding;