import { Mixin } from 'ts-mixer';
import { always } from 'ramda';
import { ObjectElement } from '@swagger-api/apidom-core';
import { FallbackVisitor, MapVisitor } from '@swagger-api/apidom-ns-openapi-3-0';
import ParentSchemaAwareVisitor from "./ParentSchemaAwareVisitor.mjs";
class PropertiesVisitor extends Mixin(MapVisitor, ParentSchemaAwareVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new ObjectElement();
    this.element.classes.push('json-schema-properties');
    this.specPath = always(['document', 'objects', 'Schema']);
    this.passingOptionsNames.push('parent');
  }
}
export default PropertiesVisitor;