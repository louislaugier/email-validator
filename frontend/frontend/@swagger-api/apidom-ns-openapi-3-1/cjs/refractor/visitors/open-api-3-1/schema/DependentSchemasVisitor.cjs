"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _apidomCore = require("@swagger-api/apidom-core");
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
var _ParentSchemaAwareVisitor = _interopRequireDefault(require("./ParentSchemaAwareVisitor.cjs"));
class DependentSchemasVisitor extends (0, _tsMixer.Mixin)(_apidomNsOpenapi.MapVisitor, _ParentSchemaAwareVisitor.default, _apidomNsOpenapi.FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new _apidomCore.ObjectElement();
    this.element.classes.push('json-schema-dependentSchemas');
    this.specPath = (0, _ramda.always)(['document', 'objects', 'Schema']);
    this.passingOptionsNames.push('parent');
  }
}
var _default = exports.default = DependentSchemasVisitor;