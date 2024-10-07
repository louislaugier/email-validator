"use strict";

exports.__esModule = true;
exports.isTagLikeElement = exports.isServerLikeElement = exports.isReferenceLikeElement = exports.isOpenApiExtension = void 0;
var _ramda = require("ramda");
var _apidomCore = require("@swagger-api/apidom-core");
const isReferenceLikeElement = element => {
  return (0, _apidomCore.isObjectElement)(element) && element.hasKey('$ref');
};
exports.isReferenceLikeElement = isReferenceLikeElement;
const isServerLikeElement = exports.isServerLikeElement = _apidomCore.isObjectElement;
const isTagLikeElement = exports.isTagLikeElement = _apidomCore.isObjectElement;
const isOpenApiExtension = element => {
  // @ts-ignore
  return (0, _apidomCore.isStringElement)(element.key) && (0, _ramda.startsWith)('x-', (0, _apidomCore.toValue)(element.key));
};
exports.isOpenApiExtension = isOpenApiExtension;