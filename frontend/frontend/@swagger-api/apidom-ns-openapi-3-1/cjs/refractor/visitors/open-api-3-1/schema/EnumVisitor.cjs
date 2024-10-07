"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
class EnumVisitor extends _apidomNsOpenapi.FallbackVisitor {
  ArrayElement(arrayElement) {
    const result = super.enter(arrayElement);
    this.element.classes.push('json-schema-enum');
    return result;
  }
}
var _default = exports.default = EnumVisitor;