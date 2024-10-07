"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
class TypeVisitor extends _apidomNsOpenapi.FallbackVisitor {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('json-schema-type');
    return result;
  }
  ArrayElement(arrayElement) {
    const result = super.enter(arrayElement);
    this.element.classes.push('json-schema-type');
    return result;
  }
}
var _default = exports.default = TypeVisitor;