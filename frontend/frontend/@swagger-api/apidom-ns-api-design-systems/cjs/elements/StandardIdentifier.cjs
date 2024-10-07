"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class StandardIdentifier extends _apidomCore.ArrayElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'standardIdentifier';
  }
}
var _default = exports.default = StandardIdentifier;