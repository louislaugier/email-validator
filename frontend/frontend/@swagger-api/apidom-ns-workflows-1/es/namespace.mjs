import WorkflowsSpecification1Element from "./elements/WorkflowsSpecification1.mjs";
import WorkflowsSpecElement from "./elements/WorkflowsSpec.mjs";
import InfoElement from "./elements/Info.mjs";
import SourceDescriptionElement from "./elements/SourceDescription.mjs";
import WorkflowElement from "./elements/Workflow.mjs";
import StepElement from "./elements/Step.mjs";
import ParameterElement from "./elements/Parameter.mjs";
import SuccessActionElement from "./elements/SuccessAction.mjs";
import FailureActionElement from "./elements/FailureAction.mjs";
import ComponentsElement from "./elements/Components.mjs";
import CriterionElement from "./elements/Criterion.mjs";
import ReferenceElement from "./elements/Reference.mjs";
import JSONSchemaElement from "./elements/JSONSchema.mjs";
const workflows1 = {
  namespace: options => {
    const {
      base
    } = options;
    base.register('workflowsSpecification1', WorkflowsSpecification1Element);
    base.register('workflowsSpec', WorkflowsSpecElement);
    base.register('info', InfoElement);
    base.register('sourceDescription', SourceDescriptionElement);
    base.register('workflow', WorkflowElement);
    base.register('step', StepElement);
    base.register('parameter', ParameterElement);
    base.register('successAction', SuccessActionElement);
    base.register('failureAction', FailureActionElement);
    base.register('components', ComponentsElement);
    base.register('criterion', CriterionElement);
    base.register('reference', ReferenceElement);
    base.register('jSONSchemaDraft202012', JSONSchemaElement);
    return base;
  }
};
export default workflows1;