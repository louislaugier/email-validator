import { Mixin } from 'ts-mixer';
import { BREAK, toValue } from '@swagger-api/apidom-core';
import FallbackVisitor from "../FallbackVisitor.mjs";
import SpecificationVisitor from "../SpecificationVisitor.mjs";
import WorkflowsSpecElement from "../../../elements/WorkflowsSpec.mjs";
class WorkflowsSpecVisitor extends Mixin(SpecificationVisitor, FallbackVisitor) {
  StringElement(stringElement) {
    const workflowsSpecElement = new WorkflowsSpecElement(toValue(stringElement));
    this.copyMetaAndAttributes(stringElement, workflowsSpecElement);
    this.element = workflowsSpecElement;
    return BREAK;
  }
}
export default WorkflowsSpecVisitor;