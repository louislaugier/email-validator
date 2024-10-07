import { FallbackVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
class RequiredVisitor extends FallbackVisitor {
  ArrayElement(arrayElement) {
    const result = super.enter(arrayElement);
    this.element.classes.push('json-schema-required');
    return result;
  }
}
export default RequiredVisitor;