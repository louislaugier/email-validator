import { Mixin } from 'ts-mixer';
import { T as stubTrue } from 'ramda';
import { isReferenceLikeElement } from "../../../predicates.mjs";
import { isReferenceElement, isResponseElement } from "../../../../predicates.mjs";
import AlternatingVisitor from "../../generics/AlternatingVisitor.mjs";
import FallbackVisitor from "../../FallbackVisitor.mjs";
class DefaultVisitor extends Mixin(AlternatingVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: isReferenceLikeElement,
      specPath: ['document', 'objects', 'Reference']
    }, {
      predicate: stubTrue,
      specPath: ['document', 'objects', 'Response']
    }];
  }
  ObjectElement(objectElement) {
    const result = AlternatingVisitor.prototype.enter.call(this, objectElement);

    // decorate ReferenceElement with type of referencing element
    if (isReferenceElement(this.element)) {
      this.element.setMetaProperty('referenced-element', 'response');
    } else if (isResponseElement(this.element)) {
      this.element.setMetaProperty('http-status-code', 'default');
    }
    return result;
  }
}
export default DefaultVisitor;