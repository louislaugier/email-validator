import { FallbackVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
class $refVisitor extends FallbackVisitor {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
export default $refVisitor;