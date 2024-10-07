import { createPredicate } from '@swagger-api/apidom-core';
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
import JSONSchemaElement from "./elements/JSONSchema.mjs"; // NCE types
import WorkflowsElement from "./elements/nces/Workflows.mjs";
import SourceDescriptionsElement from "./elements/nces/SourceDescriptions.mjs";
import WorkflowStepsElement from "./elements/nces/WorkflowSteps.mjs";
import WorkflowOutputsElement from "./elements/nces/WorkflowOutputs.mjs";
import StepParametersElement from "./elements/nces/StepParameters.mjs";
import StepDependsOnElement from "./elements/nces/StepDependsOn.mjs";
import StepSuccessCriteriaElement from "./elements/nces/StepSuccessCriteria.mjs";
import StepOnSuccessElement from "./elements/nces/StepOnSuccess.mjs";
import StepOnFailureElement from "./elements/nces/StepOnFailure.mjs";
import StepOutputsElement from "./elements/nces/StepOutputs.mjs";
import SuccessActionCriteriaElement from "./elements/nces/SuccessActionCriteria.mjs";
import FailureActionCriteriaElement from "./elements/nces/FailureActionCriteria.mjs";
export const isWorkflowsSpecElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof WorkflowsSpecElement || hasBasicElementProps(element) && isElementType('workflowsSpec', element) && primitiveEq('string', element);
});
export const isWorkflowsSpecification1Element = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof WorkflowsSpecification1Element || hasBasicElementProps(element) && isElementType('workflowsSpecification1', element) && primitiveEq('object', element) && hasClass('api', element) && hasClass('workflow', element);
});
export const isInfoElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof InfoElement || hasBasicElementProps(element) && isElementType('info', element) && primitiveEq('object', element) && hasClass('info', element);
});
export const isSourceDescriptionElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof SourceDescriptionElement || hasBasicElementProps(element) && isElementType('sourceDescription', element) && primitiveEq('object', element);
});
export const isSourceDescriptionsElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof SourceDescriptionsElement || hasBasicElementProps(element) && isElementType('sourceDescriptions', element) && primitiveEq('array', element) && hasClass('sourceDescriptions', element);
});
export const isWorkflowsElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof WorkflowsElement || hasBasicElementProps(element) && isElementType('workflows', element) && primitiveEq('array', element) && hasClass('workflows', element);
});
export const isWorkflowStepsElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof WorkflowStepsElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('workflow-steps', element);
});
export const isWorkflowOutputsElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof WorkflowOutputsElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('workflow-outputs', element);
});
export const isWorkflowElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof WorkflowElement || hasBasicElementProps(element) && isElementType('workflow', element) && primitiveEq('object', element);
});
export const isStepOnSuccessElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof StepOnSuccessElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('step-on-success', element);
});
export const isStepOnFailureElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof StepOnFailureElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('step-on-failure', element);
});
export const isStepOutputsElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof StepOutputsElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('step-outputs', element);
});
export const isStepElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof StepElement || hasBasicElementProps(element) && isElementType('step', element) && primitiveEq('object', element);
});
export const isStepParametersElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof StepParametersElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('step-parameters', element);
});
export const isStepDependsOnElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof StepDependsOnElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('step-depends-on', element);
});
export const isStepSuccessCriteriaElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof StepSuccessCriteriaElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('step-success-criteria', element) && hasClass('criteria', element);
});
export const isParameterElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof ParameterElement || hasBasicElementProps(element) && isElementType('parameter', element) && primitiveEq('object', element);
});
export const isSuccessActionElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof SuccessActionElement || hasBasicElementProps(element) && isElementType('successAction', element) && primitiveEq('object', element);
});
export const isComponentsElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof ComponentsElement || hasBasicElementProps(element) && isElementType('components', element) && primitiveEq('object', element);
});
export const isCriterionElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof CriterionElement || hasBasicElementProps(element) && isElementType('criterion', element) && primitiveEq('object', element);
});
export const isReferenceElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof ReferenceElement || hasBasicElementProps(element) && isElementType('reference', element) && primitiveEq('object', element);
});
export const isSuccessActionCriteriaElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof SuccessActionCriteriaElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('success-action-criteria', element) && hasClass('criteria', element);
});
export const isFailureActionElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof FailureActionElement || hasBasicElementProps(element) && isElementType('failureAction', element) && primitiveEq('object', element);
});
export const isFailureActionCriteriaElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof FailureActionCriteriaElement || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('failure-action-criteria', element) && hasClass('criteria', element);
});
export const isJSONSchemaElement = createPredicate(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof JSONSchemaElement || hasBasicElementProps(element) && isElementType('jSONSchemaDraft202012', element) && primitiveEq('object', element);
});