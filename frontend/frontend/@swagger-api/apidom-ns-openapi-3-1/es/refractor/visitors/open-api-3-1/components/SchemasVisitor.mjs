import { Mixin } from 'ts-mixer';
import { always } from 'ramda';
import { ComponentsSchemasElement, MapVisitor, FallbackVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
class SchemasVisitor extends Mixin(MapVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new ComponentsSchemasElement();
    this.specPath = always(['document', 'objects', 'Schema']);
  }
}
export default SchemasVisitor;