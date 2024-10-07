import { Mixin } from 'ts-mixer';
import { ArrayElement, isObjectElement, BREAK, cloneDeep } from '@swagger-api/apidom-core';
import { FallbackVisitor, SpecificationVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
import ParentSchemaAwareVisitor from "./ParentSchemaAwareVisitor.mjs";
class AllOfVisitor extends Mixin(SpecificationVisitor, ParentSchemaAwareVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new ArrayElement();
    this.element.classes.push('json-schema-allOf');
    this.passingOptionsNames.push('parent');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      if (isObjectElement(item)) {
        const schemaElement = this.toRefractedElement(['document', 'objects', 'Schema'], item);
        this.element.push(schemaElement);
      } else {
        const element = cloneDeep(item);
        this.element.push(element);
      }
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return BREAK;
  }
}
export default AllOfVisitor;