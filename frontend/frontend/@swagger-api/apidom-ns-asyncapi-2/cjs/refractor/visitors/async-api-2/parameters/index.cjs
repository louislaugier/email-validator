"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _PatternedFieldsVisitor = _interopRequireDefault(require("../../generics/PatternedFieldsVisitor.cjs"));
var _FallbackVisitor = _interopRequireDefault(require("../../FallbackVisitor.cjs"));
var _Parameters = _interopRequireDefault(require("../../../../elements/Parameters.cjs"));
var _predicates = require("../../../predicates.cjs");
var _predicates2 = require("../../../../predicates.cjs");
class ParametersVisitor extends (0, _tsMixer.Mixin)(_PatternedFieldsVisitor.default, _FallbackVisitor.default) {
  constructor(options) {
    super(options);
    this.element = new _Parameters.default();
    this.specPath = element => (0, _predicates.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Parameter'];
    this.canSupportSpecificationExtensions = false;
    this.fieldPatternPredicate = value => typeof value === 'string' && /^[A-Za-z0-9_-]+$/.test(value);
  }
  ObjectElement(objectElement) {
    const result = _PatternedFieldsVisitor.default.prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates2.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'parameter');
    });
    return result;
  }
}
var _default = exports.default = ParametersVisitor;