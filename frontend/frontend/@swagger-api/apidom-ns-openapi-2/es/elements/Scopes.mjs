import { ObjectElement } from '@swagger-api/apidom-core';
class Scopes extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'scopes';
  }
}
export default Scopes;