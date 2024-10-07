"use strict";

exports.__esModule = true;
exports.isWorkflowsSpecificationExtension = exports.isReferenceLikeElement = void 0;
var _ramda = require("ramda");
var _apidomCore = require("@swagger-api/apidom-core");
const isWorkflowsSpecificationExtension = element => {
  return (0, _apidomCore.isStringElement)(element.key) && (0, _ramda.startsWith)('x-', (0, _apidomCore.toValue)(element.key));
};
exports.isWorkflowsSpecificationExtension = isWorkflowsSpecificationExtension;
const isReferenceLikeElement = element => {
  return (0, _apidomCore.isObjectElement)(element) && element.hasKey('$ref');
};
exports.isReferenceLikeElement = isReferenceLikeElement;