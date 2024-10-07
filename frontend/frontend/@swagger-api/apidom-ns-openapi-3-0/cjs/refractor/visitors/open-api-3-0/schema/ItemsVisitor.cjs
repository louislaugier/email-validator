"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-4");
var _predicates = require("../../../../predicates.cjs");
const {
  items: JSONSchemaItemsVisitor
} = _apidomNsJsonSchemaDraft.specificationObj.visitors.document.objects.JSONSchema.fixedFields;
class ItemsVisitor extends JSONSchemaItemsVisitor {
  ObjectElement(objectElement) {
    const result = JSONSchemaItemsVisitor.prototype.ObjectElement.call(this, objectElement);
    if ((0, _predicates.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
  ArrayElement(arrayElement) {
    const result = this.enter(arrayElement);
    return result;
  }
}
var _default = exports.default = ItemsVisitor;