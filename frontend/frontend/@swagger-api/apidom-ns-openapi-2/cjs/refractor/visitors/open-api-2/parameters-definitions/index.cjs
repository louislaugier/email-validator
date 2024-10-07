"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _ParametersDefinitions = _interopRequireDefault(require("../../../../elements/ParametersDefinitions.cjs"));
var _MapVisitor = _interopRequireDefault(require("../../generics/MapVisitor.cjs"));
var _FallbackVisitor = _interopRequireDefault(require("../../FallbackVisitor.cjs"));
class ParametersDefinitionsVisitor extends (0, _tsMixer.Mixin)(_MapVisitor.default, _FallbackVisitor.default) {
  constructor(options) {
    super(options);
    this.element = new _ParametersDefinitions.default();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'Parameter']);
  }
}
var _default = exports.default = ParametersDefinitionsVisitor;