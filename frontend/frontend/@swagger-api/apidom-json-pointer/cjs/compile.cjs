"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _escape = _interopRequireDefault(require("./escape.cjs"));
var _CompilationJsonPointerError = _interopRequireDefault(require("./errors/CompilationJsonPointerError.cjs"));
// compile :: String[] -> String
const compile = tokens => {
  try {
    if (tokens.length === 0) {
      return '';
    }
    return `/${tokens.map(_escape.default).join('/')}`;
  } catch (error) {
    throw new _CompilationJsonPointerError.default('JSON Pointer compilation of tokens encountered an error.', {
      tokens,
      cause: error
    });
  }
};
var _default = exports.default = compile;