"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-7");
var _predicates = require("../../../../predicates.cjs");
const {
  definitions: JSONSchemaDefinitionsVisitor
} = _apidomNsJsonSchemaDraft.specificationObj.visitors.document.objects.JSONSchema.fixedFields;
class DefinitionsVisitor extends JSONSchemaDefinitionsVisitor {
  ObjectElement(objectElement) {
    const result = JSONSchemaDefinitionsVisitor.prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
var _default = exports.default = DefinitionsVisitor;