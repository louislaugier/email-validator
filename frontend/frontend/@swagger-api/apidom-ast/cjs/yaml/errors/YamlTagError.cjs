"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _YamlSchemaError = _interopRequireDefault(require("./YamlSchemaError.cjs"));
class YamlTagError extends _YamlSchemaError.default {
  specificTagName;
  explicitTagName;
  tagKind;
  tagPosition;
  nodeCanonicalContent;
  node;
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (typeof structuredOptions !== 'undefined') {
      this.specificTagName = structuredOptions.specificTagName;
      this.explicitTagName = structuredOptions.explicitTagName;
      this.tagKind = structuredOptions.tagKind;
      this.tagPosition = structuredOptions.tagPosition;
      this.nodeCanonicalContent = structuredOptions.nodeCanonicalContent;
      this.node = structuredOptions.node;
    }
  }
}
var _default = exports.default = YamlTagError;