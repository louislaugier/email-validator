"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
class $vocabularyVisitor extends _apidomNsOpenapi.FallbackVisitor {
  ObjectElement(objectElement) {
    const result = super.enter(objectElement);
    this.element.classes.push('json-schema-$vocabulary');
    return result;
  }
}
var _default = exports.default = $vocabularyVisitor;