import { ObjectElement } from '@swagger-api/apidom-core';
class Standard extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'standard';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get iri() {
    return this.get('iri');
  }
  set iri(iri) {
    this.set('iri', iri);
  }
  get level() {
    return this.get('level');
  }
  set level(level) {
    this.set('level', level);
  }
}
export default Standard;