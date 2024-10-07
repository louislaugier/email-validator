import WorkflowsSpecification1Element from "../elements/WorkflowsSpecification1.mjs";
import WorkflowsSpecElement from "../elements/WorkflowsSpec.mjs";
import InfoElement from "../elements/Info.mjs";
import SourceDescriptionElement from "../elements/SourceDescription.mjs";
import WorkflowElement from "../elements/Workflow.mjs";
import StepElement from "../elements/Step.mjs";
import ParameterElement from "../elements/Parameter.mjs";
import SuccessActionElement from "../elements/SuccessAction.mjs";
import FailureActionElement from "../elements/FailureAction.mjs";
import ComponentsElement from "../elements/Components.mjs";
import CriterionElement from "../elements/Criterion.mjs";
import ReferenceElement from "../elements/Reference.mjs";
import JSONSchemaElement from "../elements/JSONSchema.mjs";
import { createRefractor } from "./index.mjs";
InfoElement.refract = createRefractor(['visitors', 'document', 'objects', 'Info', '$visitor']);
WorkflowsSpecElement.refract = createRefractor(['visitors', 'document', 'objects', 'WorkflowsSpecification', 'fixedFields', 'workflowsSpec']);
WorkflowsSpecification1Element.refract = createRefractor(['visitors', 'document', 'objects', 'WorkflowsSpecification', '$visitor']);
SourceDescriptionElement.refract = createRefractor(['visitors', 'document', 'objects', 'SourceDescription', '$visitor']);
WorkflowElement.refract = createRefractor(['visitors', 'document', 'objects', 'Workflow', '$visitor']);
StepElement.refract = createRefractor(['visitors', 'document', 'objects', 'Step', '$visitor']);
ParameterElement.refract = createRefractor(['visitors', 'document', 'objects', 'Parameter', '$visitor']);
SuccessActionElement.refract = createRefractor(['visitors', 'document', 'objects', 'SuccessAction', '$visitor']);
FailureActionElement.refract = createRefractor(['visitors', 'document', 'objects', 'FailureAction', '$visitor']);
ComponentsElement.refract = createRefractor(['visitors', 'document', 'objects', 'Components', '$visitor']);
CriterionElement.refract = createRefractor(['visitors', 'document', 'objects', 'Criterion', '$visitor']);
ReferenceElement.refract = createRefractor(['visitors', 'document', 'objects', 'Reference', '$visitor']);
JSONSchemaElement.refract = createRefractor(['visitors', 'document', 'objects', 'JSONSchema', '$visitor']);
export { WorkflowsSpecification1Element, WorkflowsSpecElement, InfoElement, SourceDescriptionElement, WorkflowElement, StepElement, ParameterElement, SuccessActionElement, FailureActionElement, ComponentsElement, CriterionElement, ReferenceElement, JSONSchemaElement };