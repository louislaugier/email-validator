import { Mixin } from 'ts-mixer';
import { always } from 'ramda';
import FixedFieldsVisitor from "../generics/FixedFieldsVisitor.mjs";
import FallbackVisitor from "../FallbackVisitor.mjs";
import WorkflowsSpecification1Element from "../../../elements/WorkflowsSpecification1.mjs";
class WorkflowsSpecificationVisitor extends Mixin(FixedFieldsVisitor, FallbackVisitor) {
  element;
  specPath;
  canSupportSpecificationExtensions;
  constructor(options) {
    super(options);
    this.element = new WorkflowsSpecification1Element();
    this.specPath = always(['document', 'objects', 'WorkflowsSpecification']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    return FixedFieldsVisitor.prototype.ObjectElement.call(this, objectElement);
  }
}
export default WorkflowsSpecificationVisitor;