"use strict";

exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
class SchemasVisitor extends (0, _tsMixer.Mixin)(_apidomNsOpenapi.MapVisitor, _apidomNsOpenapi.FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new _apidomNsOpenapi.ComponentsSchemasElement();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'Schema']);
  }
}
var _default = exports.default = SchemasVisitor;