import { FallbackVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
class EnumVisitor extends FallbackVisitor {
  ArrayElement(arrayElement) {
    const result = super.enter(arrayElement);
    this.element.classes.push('json-schema-enum');
    return result;
  }
}
export default EnumVisitor;