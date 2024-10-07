import FallbackVisitor from "../../FallbackVisitor.mjs";
class VersionVisitor extends FallbackVisitor {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('api-version');
    this.element.classes.push('version');
    return result;
  }
}
export default VersionVisitor;