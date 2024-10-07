import { ObjectElement } from '@swagger-api/apidom-core';
class ParametersDefinitions extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'parametersDefinitions';
  }
}
export default ParametersDefinitions;