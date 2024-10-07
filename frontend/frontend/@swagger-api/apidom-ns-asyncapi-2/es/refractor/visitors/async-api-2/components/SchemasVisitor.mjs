import { Mixin } from 'ts-mixer';
import ComponentsSchemasElement from "../../../../elements/nces/ComponentsSchemas.mjs";
import MapVisitor from "../../generics/MapVisitor.mjs";
import FallbackVisitor from "../../FallbackVisitor.mjs";
import { isReferenceLikeElement } from "../../../predicates.mjs";
import { isReferenceElement } from "../../../../predicates.mjs";
class SchemasVisitor extends Mixin(MapVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new ComponentsSchemasElement();
    this.specPath = element => isReferenceLikeElement(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Schema'];
  }
  ObjectElement(objectElement) {
    const result = MapVisitor.prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
export default SchemasVisitor;