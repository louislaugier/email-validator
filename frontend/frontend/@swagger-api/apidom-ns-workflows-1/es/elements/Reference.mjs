import { ObjectElement } from '@swagger-api/apidom-core';
class Reference extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'reference';
    this.classes.push('workflows-spec-reference');
  }
  get $ref() {
    return this.get('$ref');
  }
  set $ref($ref) {
    this.set('$ref', $ref);
  }
  get value() {
    return this.get('value');
  }
  set value(value) {
    this.set('value', value);
  }
}
export default Reference;