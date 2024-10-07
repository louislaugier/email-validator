"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _WorkflowsSpecification = _interopRequireDefault(require("./elements/WorkflowsSpecification1.cjs"));
var _WorkflowsSpec = _interopRequireDefault(require("./elements/WorkflowsSpec.cjs"));
var _Info = _interopRequireDefault(require("./elements/Info.cjs"));
var _SourceDescription = _interopRequireDefault(require("./elements/SourceDescription.cjs"));
var _Workflow = _interopRequireDefault(require("./elements/Workflow.cjs"));
var _Step = _interopRequireDefault(require("./elements/Step.cjs"));
var _Parameter = _interopRequireDefault(require("./elements/Parameter.cjs"));
var _SuccessAction = _interopRequireDefault(require("./elements/SuccessAction.cjs"));
var _FailureAction = _interopRequireDefault(require("./elements/FailureAction.cjs"));
var _Components = _interopRequireDefault(require("./elements/Components.cjs"));
var _Criterion = _interopRequireDefault(require("./elements/Criterion.cjs"));
var _Reference = _interopRequireDefault(require("./elements/Reference.cjs"));
var _JSONSchema = _interopRequireDefault(require("./elements/JSONSchema.cjs"));
const workflows1 = {
  namespace: options => {
    const {
      base
    } = options;
    base.register('workflowsSpecification1', _WorkflowsSpecification.default);
    base.register('workflowsSpec', _WorkflowsSpec.default);
    base.register('info', _Info.default);
    base.register('sourceDescription', _SourceDescription.default);
    base.register('workflow', _Workflow.default);
    base.register('step', _Step.default);
    base.register('parameter', _Parameter.default);
    base.register('successAction', _SuccessAction.default);
    base.register('failureAction', _FailureAction.default);
    base.register('components', _Components.default);
    base.register('criterion', _Criterion.default);
    base.register('reference', _Reference.default);
    base.register('jSONSchemaDraft202012', _JSONSchema.default);
    return base;
  }
};
var _default = exports.default = workflows1;