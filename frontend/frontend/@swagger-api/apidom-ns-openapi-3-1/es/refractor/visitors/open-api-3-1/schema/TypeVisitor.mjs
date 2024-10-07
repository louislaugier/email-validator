import { FallbackVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
class TypeVisitor extends FallbackVisitor {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('json-schema-type');
    return result;
  }
  ArrayElement(arrayElement) {
    const result = super.enter(arrayElement);
    this.element.classes.push('json-schema-type');
    return result;
  }
}
export default TypeVisitor;