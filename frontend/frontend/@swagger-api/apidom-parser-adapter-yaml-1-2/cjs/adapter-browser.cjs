"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.parse = exports.namespace = exports.mediaTypes = exports.detect = void 0;
var _browser = _interopRequireDefault(require("./lexical-analysis/browser.cjs"));
exports.lexicalAnalysis = _browser.default;
var _index = _interopRequireDefault(require("./syntactic-analysis/indirect/index.cjs"));
exports.syntacticAnalysis = _index.default;
var _adapter = require("./adapter.cjs");
exports.mediaTypes = _adapter.mediaTypes;
exports.namespace = _adapter.namespace;
const detect = async source => {
  try {
    const cst = await (0, _browser.default)(source);
    return cst.rootNode.type !== 'ERROR';
  } catch {
    return false;
  }
};
exports.detect = detect;
const parse = async (source, {
  sourceMap = false
} = {}) => {
  const cst = await (0, _browser.default)(source);
  return (0, _index.default)(cst, {
    sourceMap
  });
};
exports.parse = parse;