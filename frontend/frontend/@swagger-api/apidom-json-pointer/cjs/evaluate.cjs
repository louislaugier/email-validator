"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramdaAdjunct = require("ramda-adjunct");
var _apidomCore = require("@swagger-api/apidom-core");
var _parse = _interopRequireDefault(require("./parse.cjs"));
var _EvaluationJsonPointerError = _interopRequireDefault(require("./errors/EvaluationJsonPointerError.cjs"));
// evaluates JSON Pointer against ApiDOM fragment
const evaluate = (pointer, element) => {
  let tokens;
  try {
    tokens = (0, _parse.default)(pointer);
  } catch (error) {
    throw new _EvaluationJsonPointerError.default(`JSON Pointer evaluation failed while parsing the pointer "${pointer}".`, {
      pointer,
      element: (0, _apidomCore.cloneDeep)(element),
      cause: error
    });
  }
  return tokens.reduce((acc, token, tokenPosition) => {
    if ((0, _apidomCore.isObjectElement)(acc)) {
      // @ts-ignore
      if (!acc.hasKey(token)) {
        throw new _EvaluationJsonPointerError.default(`JSON Pointer evaluation failed while evaluating token "${token}" against an ObjectElement`, {
          pointer,
          tokens,
          failedToken: token,
          failedTokenPosition: tokenPosition,
          element: (0, _apidomCore.cloneDeep)(acc)
        });
      }
      // @ts-ignore
      return acc.get(token);
    }
    if ((0, _apidomCore.isArrayElement)(acc)) {
      if (!(token in acc.content) || !(0, _ramdaAdjunct.isInteger)(Number(token))) {
        throw new _EvaluationJsonPointerError.default(`JSON Pointer evaluation failed while evaluating token "${token}" against an ArrayElement`, {
          pointer,
          tokens,
          failedToken: token,
          failedTokenPosition: tokenPosition,
          element: (0, _apidomCore.cloneDeep)(acc)
        });
      }
      // @ts-ignore
      return acc.get(Number(token));
    }
    throw new _EvaluationJsonPointerError.default(`JSON Pointer evaluation failed while evaluating token "${token}" against an unexpected Element`, {
      pointer,
      tokens,
      failedToken: token,
      failedTokenPosition: tokenPosition,
      element: (0, _apidomCore.cloneDeep)(acc)
    });
  }, element);
};
var _default = exports.default = evaluate;