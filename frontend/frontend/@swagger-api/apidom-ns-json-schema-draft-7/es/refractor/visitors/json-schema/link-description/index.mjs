import { Mixin } from 'ts-mixer';
import { always } from 'ramda';
import { FixedFieldsVisitor, FallbackVisitor } from '@swagger-api/apidom-ns-json-schema-draft-6';
import LinkDescriptionElement from "../../../../elements/LinkDescription.mjs";
class LinkDescriptionVisitor extends Mixin(FixedFieldsVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new LinkDescriptionElement();
    this.specPath = always(['document', 'objects', 'LinkDescription']);
  }
}
export default LinkDescriptionVisitor;