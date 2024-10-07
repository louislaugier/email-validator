"use strict";

exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _apidomCore = require("@swagger-api/apidom-core");
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-4");
class ItemsVisitor extends (0, _tsMixer.Mixin)(_apidomNsJsonSchemaDraft.SpecificationVisitor, _apidomNsJsonSchemaDraft.ParentSchemaAwareVisitor, _apidomNsJsonSchemaDraft.FallbackVisitor) {
  ObjectElement(objectElement) {
    const specPath = (0, _apidomNsJsonSchemaDraft.isJSONReferenceLikeElement)(objectElement) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
    this.element = this.toRefractedElement(specPath, objectElement);
    return _apidomCore.BREAK;
  }
  ArrayElement(arrayElement) {
    this.element = new _apidomCore.ArrayElement();
    this.element.classes.push('json-schema-items');
    arrayElement.forEach(item => {
      const specPath = (0, _apidomNsJsonSchemaDraft.isJSONReferenceLikeElement)(item) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _apidomCore.BREAK;
  }
  BooleanElement(booleanElement) {
    this.element = this.toRefractedElement(['document', 'objects', 'JSONSchema'], booleanElement);
    return _apidomCore.BREAK;
  }
}
var _default = exports.default = ItemsVisitor;