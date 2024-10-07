import { StringElement } from '@swagger-api/apidom-core';
class WorkflowsSpec extends StringElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'workflowsSpec';
    this.classes.push('spec-version');
    this.classes.push('version');
  }
}
export default WorkflowsSpec;