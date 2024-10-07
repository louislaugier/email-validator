import { ArrayElement } from '@swagger-api/apidom-core';
class OperationTraits extends ArrayElement {
  static primaryClass = 'operation-traits';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationTraits.primaryClass);
  }
}
export default OperationTraits;