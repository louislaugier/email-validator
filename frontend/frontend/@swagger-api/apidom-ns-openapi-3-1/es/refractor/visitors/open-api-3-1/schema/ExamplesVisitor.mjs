import { FallbackVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
class ExamplesVisitor extends FallbackVisitor {
  ArrayElement(arrayElement) {
    const result = super.enter(arrayElement);
    this.element.classes.push('json-schema-examples');
    return result;
  }
}
export default ExamplesVisitor;