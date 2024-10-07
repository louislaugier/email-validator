"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-6");
var _JSONSchema = _interopRequireDefault(require("../../../elements/JSONSchema.cjs"));
class JSONSchemaVisitor extends (0, _tsMixer.Mixin)(_apidomNsJsonSchemaDraft.FixedFieldsVisitor, _apidomNsJsonSchemaDraft.FallbackVisitor) {
  constructor(options) {
    super(options);
    this.specPath = (0, _ramda.always)(['document', 'objects', 'JSONSchema']);
  }
  ObjectElement(objectElement) {
    this.element = new _JSONSchema.default();
    return _apidomNsJsonSchemaDraft.FixedFieldsVisitor.prototype.ObjectElement.call(this, objectElement);
  }
  BooleanElement(booleanElement) {
    const result = this.enter(booleanElement);
    this.element.classes.push('boolean-json-schema');
    return result;
  }
}
var _default = exports.default = JSONSchemaVisitor;