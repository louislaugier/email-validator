"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _apidomCore = require("@swagger-api/apidom-core");
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
var _ParentSchemaAwareVisitor = _interopRequireDefault(require("./ParentSchemaAwareVisitor.cjs"));
class AnyOfVisitor extends (0, _tsMixer.Mixin)(_apidomNsOpenapi.SpecificationVisitor, _ParentSchemaAwareVisitor.default, _apidomNsOpenapi.FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new _apidomCore.ArrayElement();
    this.element.classes.push('json-schema-anyOf');
    this.passingOptionsNames.push('parent');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      if ((0, _apidomCore.isObjectElement)(item)) {
        const schemaElement = this.toRefractedElement(['document', 'objects', 'Schema'], item);
        this.element.push(schemaElement);
      } else {
        const element = (0, _apidomCore.cloneDeep)(item);
        this.element.push(element);
      }
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _apidomCore.BREAK;
  }
}
var _default = exports.default = AnyOfVisitor;