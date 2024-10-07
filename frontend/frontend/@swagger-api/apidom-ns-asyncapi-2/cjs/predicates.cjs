"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.isServersElement = exports.isServerVariableElement = exports.isServerElement = exports.isServerBindingsElement = exports.isSecurityRequirementElement = exports.isSchemaElement = exports.isReferenceElement = exports.isParametersElement = exports.isParameterElement = exports.isOperationElement = exports.isLicenseElement = exports.isInfoElement = exports.isIdentifierElement = exports.isContactElement = exports.isComponentsElement = exports.isChannelsElement = exports.isChannelItemElement = exports.isChannelBindingsElement = exports.isBooleanJsonSchemaElement = exports.isAsyncApiVersionElement = exports.isAsyncApi2Element = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
var _AsyncApi = _interopRequireDefault(require("./elements/AsyncApi2.cjs"));
var _AsyncApiVersion = _interopRequireDefault(require("./elements/AsyncApiVersion.cjs"));
var _ChannelBindings = _interopRequireDefault(require("./elements/ChannelBindings.cjs"));
var _ChannelItem = _interopRequireDefault(require("./elements/ChannelItem.cjs"));
var _Channels = _interopRequireDefault(require("./elements/Channels.cjs"));
var _Components = _interopRequireDefault(require("./elements/Components.cjs"));
var _Contact = _interopRequireDefault(require("./elements/Contact.cjs"));
var _Identifier = _interopRequireDefault(require("./elements/Identifier.cjs"));
var _Info = _interopRequireDefault(require("./elements/Info.cjs"));
var _License = _interopRequireDefault(require("./elements/License.cjs"));
var _Operation = _interopRequireDefault(require("./elements/Operation.cjs"));
var _Parameter = _interopRequireDefault(require("./elements/Parameter.cjs"));
var _Parameters = _interopRequireDefault(require("./elements/Parameters.cjs"));
var _Reference = _interopRequireDefault(require("./elements/Reference.cjs"));
var _Schema = _interopRequireDefault(require("./elements/Schema.cjs"));
var _SecurityRequirement = _interopRequireDefault(require("./elements/SecurityRequirement.cjs"));
var _Server = _interopRequireDefault(require("./elements/Server.cjs"));
var _ServerBindings = _interopRequireDefault(require("./elements/ServerBindings.cjs"));
var _Servers = _interopRequireDefault(require("./elements/Servers.cjs"));
var _ServerVariable = _interopRequireDefault(require("./elements/ServerVariable.cjs"));
const isAsyncApi2Element = exports.isAsyncApi2Element = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof _AsyncApi.default || hasBasicElementProps(element) && isElementType('asyncApi2', element) && primitiveEq('object', element) && hasClass('api', element);
});
const isAsyncApiVersionElement = exports.isAsyncApiVersionElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _AsyncApiVersion.default || hasBasicElementProps(element) && isElementType('asyncApiVersion', element) && primitiveEq('string', element);
});
const isChannelBindingsElement = exports.isChannelBindingsElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _ChannelBindings.default || hasBasicElementProps(element) && isElementType('channelBindings', element) && primitiveEq('object', element);
});
const isChannelItemElement = exports.isChannelItemElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _ChannelItem.default || hasBasicElementProps(element) && isElementType('channelItem', element) && primitiveEq('object', element);
});
const isChannelsElement = exports.isChannelsElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Channels.default || hasBasicElementProps(element) && isElementType('channels', element) && primitiveEq('object', element);
});
const isComponentsElement = exports.isComponentsElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Components.default || hasBasicElementProps(element) && isElementType('components', element) && primitiveEq('object', element);
});
const isContactElement = exports.isContactElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Contact.default || hasBasicElementProps(element) && isElementType('contact', element) && primitiveEq('object', element);
});
const isIdentifierElement = exports.isIdentifierElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Identifier.default || hasBasicElementProps(element) && isElementType('identifier', element) && primitiveEq('string', element);
});
const isInfoElement = exports.isInfoElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Info.default || hasBasicElementProps(element) && isElementType('info', element) && primitiveEq('object', element);
});
const isLicenseElement = exports.isLicenseElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _License.default || hasBasicElementProps(element) && isElementType('license', element) && primitiveEq('object', element);
});
const isOperationElement = exports.isOperationElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Operation.default || hasBasicElementProps(element) && isElementType('operation', element) && primitiveEq('object', element);
});
const isParameterElement = exports.isParameterElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Parameter.default || hasBasicElementProps(element) && isElementType('parameter', element) && primitiveEq('object', element);
});
const isParametersElement = exports.isParametersElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Parameters.default || hasBasicElementProps(element) && isElementType('parameters', element) && primitiveEq('object', element);
});
const isReferenceElement = exports.isReferenceElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Reference.default || hasBasicElementProps(element) && isElementType('reference', element) && primitiveEq('object', element);
});
const isSchemaElement = exports.isSchemaElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Schema.default || hasBasicElementProps(element) && isElementType('schema', element) && primitiveEq('object', element);
});
const isBooleanJsonSchemaElement = element => {
  return (0, _apidomCore.isBooleanElement)(element) && element.classes.includes('boolean-json-schema');
};
exports.isBooleanJsonSchemaElement = isBooleanJsonSchemaElement;
const isSecurityRequirementElement = exports.isSecurityRequirementElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _SecurityRequirement.default || hasBasicElementProps(element) && isElementType('securityRequirement', element) && primitiveEq('object', element);
});
const isServerElement = exports.isServerElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Server.default || hasBasicElementProps(element) && isElementType('server', element) && primitiveEq('object', element);
});
const isServerBindingsElement = exports.isServerBindingsElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _ServerBindings.default || hasBasicElementProps(element) && isElementType('serverBindings', element) && primitiveEq('object', element);
});
const isServersElement = exports.isServersElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _Servers.default || hasBasicElementProps(element) && isElementType('servers', element) && primitiveEq('object', element);
});
const isServerVariableElement = exports.isServerVariableElement = (0, _apidomCore.createPredicate)(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _ServerVariable.default || hasBasicElementProps(element) && isElementType('serverVariable', element) && primitiveEq('object', element);
});