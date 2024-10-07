"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-1");
var _JSONSchema = _interopRequireDefault(require("../../../../elements/JSONSchema.cjs"));
const {
  $visitor: SchemaVisitor
} = _apidomNsOpenapi.specificationObj.visitors.document.objects.Schema;
class JSONSchemaVisitor extends SchemaVisitor {
  constructor(options) {
    super(options);
    this.element = new _JSONSchema.default();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'JSONSchema']);
    this.canSupportSpecificationExtensions = false;
    this.jsonSchemaDefaultDialect = new _apidomNsOpenapi.JsonSchemaDialectElement('https://json-schema.org/draft/2020-12/schema');
  }
}
var _default = exports.default = JSONSchemaVisitor;