"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
var _tsMixer = require("ts-mixer");
var _Requirement = _interopRequireDefault(require("../../../../elements/Requirement.cjs"));
var _FallbackVisitor = _interopRequireDefault(require("../../FallbackVisitor.cjs"));
var _FixedFieldsVisitor = _interopRequireDefault(require("../../generics/FixedFieldsVisitor.cjs"));
class RequirementVisitor extends (0, _tsMixer.Mixin)(_FixedFieldsVisitor.default, _FallbackVisitor.default) {
  constructor(options) {
    super(options);
    this.element = new _Requirement.default();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'Requirement']);
  }
}
var _default = exports.default = RequirementVisitor;