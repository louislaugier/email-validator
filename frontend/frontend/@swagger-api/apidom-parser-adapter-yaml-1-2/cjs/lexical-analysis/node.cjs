"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _treeSitter = _interopRequireDefault(require("tree-sitter"));
var _treeSitterYaml = _interopRequireDefault(require("tree-sitter-yaml"));
// @ts-ignore

const parser = new _treeSitter.default();
parser.setLanguage(_treeSitterYaml.default);

/**
 * Lexical Analysis of source string using TreeSitter.
 * This is Node.js version of TreeSitters Lexical Analysis.
 */
const analyze = async source => {
  return parser.parse(source);
};
var _default = exports.default = analyze;