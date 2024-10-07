import { Mixin } from 'ts-mixer';
import { always } from 'ramda';
import { FixedFieldsVisitor, FallbackVisitor } from '@swagger-api/apidom-ns-json-schema-draft-4';
import JSONSchemaElement from "../../../elements/JSONSchema.mjs";
class JSONSchemaVisitor extends Mixin(FixedFieldsVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.specPath = always(['document', 'objects', 'JSONSchema']);
  }
  ObjectElement(objectElement) {
    this.element = new JSONSchemaElement();
    return FixedFieldsVisitor.prototype.ObjectElement.call(this, objectElement);
  }
  BooleanElement(booleanElement) {
    const result = this.enter(booleanElement);
    this.element.classes.push('boolean-json-schema');
    return result;
  }
}
export default JSONSchemaVisitor;