import { Mixin } from 'ts-mixer';
import { always } from 'ramda';
import FixedFieldsVisitor from "../generics/FixedFieldsVisitor.mjs";
import FallbackVisitor from "../FallbackVisitor.mjs";
import JSONSchemaElement from "../../../elements/JSONSchema.mjs";
class JSONSchemaVisitor extends Mixin(FixedFieldsVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new JSONSchemaElement();
    this.specPath = always(['document', 'objects', 'JSONSchema']);
  }
}
export default JSONSchemaVisitor;