import { SchemaElement } from '@swagger-api/apidom-ns-openapi-3-1';
class JSONSchema extends SchemaElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'jSONSchemaDraft202012';
  }

  /**
   * We're redefining the getters/setters here so that the following keywords
   * are not part of the OAS base vocabulary, but rather an arbitrary custom dialect.
   */
  get discriminator() {
    return this.get('discriminator');
  }
  set discriminator(discriminator) {
    this.set('discriminator', discriminator);
  }
  get xml() {
    return this.get('xml');
  }
  set xml(xml) {
    this.set('xml', xml);
  }
  get externalDocs() {
    return this.get('externalDocs');
  }
  set externalDocs(externalDocs) {
    this.set('externalDocs', externalDocs);
  }
  get example() {
    return this.get('example');
  }
  set example(example) {
    this.set('example', example);
  }
}
export default JSONSchema;