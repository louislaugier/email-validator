"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _apidomCore = require("@swagger-api/apidom-core");
var _Encoding = _interopRequireDefault(require("../../../../elements/Encoding.cjs"));
var _FixedFieldsVisitor = _interopRequireDefault(require("../../generics/FixedFieldsVisitor.cjs"));
var _FallbackVisitor = _interopRequireDefault(require("../../FallbackVisitor.cjs"));
var _predicates = require("../../../../predicates.cjs");
class EncodingVisitor extends (0, _tsMixer.Mixin)(_FixedFieldsVisitor.default, _FallbackVisitor.default) {
  constructor(options) {
    super(options);
    this.element = new _Encoding.default();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'Encoding']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    const result = _FixedFieldsVisitor.default.prototype.ObjectElement.call(this, objectElement);

    // decorate every Header with media type metadata
    if ((0, _apidomCore.isObjectElement)(this.element.headers)) {
      this.element.headers.filter(_predicates.isHeaderElement)
      // @ts-ignore
      .forEach((headerElement, key) => {
        headerElement.setMetaProperty('header-name', (0, _apidomCore.toValue)(key));
      });
    }
    return result;
  }
}
var _default = exports.default = EncodingVisitor;