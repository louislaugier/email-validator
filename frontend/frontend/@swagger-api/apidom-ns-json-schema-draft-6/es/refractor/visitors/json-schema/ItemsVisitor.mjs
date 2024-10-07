import { Mixin } from 'ts-mixer';
import { ArrayElement, BREAK } from '@swagger-api/apidom-core';
import { SpecificationVisitor, FallbackVisitor, ParentSchemaAwareVisitor, isJSONReferenceLikeElement } from '@swagger-api/apidom-ns-json-schema-draft-4';
class ItemsVisitor extends Mixin(SpecificationVisitor, ParentSchemaAwareVisitor, FallbackVisitor) {
  ObjectElement(objectElement) {
    const specPath = isJSONReferenceLikeElement(objectElement) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
    this.element = this.toRefractedElement(specPath, objectElement);
    return BREAK;
  }
  ArrayElement(arrayElement) {
    this.element = new ArrayElement();
    this.element.classes.push('json-schema-items');
    arrayElement.forEach(item => {
      const specPath = isJSONReferenceLikeElement(item) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return BREAK;
  }
  BooleanElement(booleanElement) {
    this.element = this.toRefractedElement(['document', 'objects', 'JSONSchema'], booleanElement);
    return BREAK;
  }
}
export default ItemsVisitor;