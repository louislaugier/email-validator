import { specificationObj as JSONSchemaDraft4Specification } from '@swagger-api/apidom-ns-json-schema-draft-4';
import { isReferenceElement } from "../../../../predicates.mjs";
const {
  oneOf: JSONSchemaOneOfVisitor
} = JSONSchemaDraft4Specification.visitors.document.objects.JSONSchema.fixedFields;
class OneOfVisitor extends JSONSchemaOneOfVisitor {
  ArrayElement(arrayElement) {
    const result = JSONSchemaOneOfVisitor.prototype.ArrayElement.call(this, arrayElement);

    // @ts-ignore
    this.element.filter(isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
export default OneOfVisitor;