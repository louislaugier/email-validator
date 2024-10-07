"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class SourceDescriptions extends _apidomCore.ArrayElement {
  static primaryClass = 'sourceDescriptions';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(SourceDescriptions.primaryClass);
  }
}
var _default = exports.default = SourceDescriptions;