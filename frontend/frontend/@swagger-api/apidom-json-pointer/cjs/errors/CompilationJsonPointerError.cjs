"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _JsonPointerError = _interopRequireDefault(require("./JsonPointerError.cjs"));
class CompilationJsonPointerError extends _JsonPointerError.default {
  tokens;
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (typeof structuredOptions !== 'undefined') {
      this.tokens = [...structuredOptions.tokens];
    }
  }
}
var _default = exports.default = CompilationJsonPointerError;