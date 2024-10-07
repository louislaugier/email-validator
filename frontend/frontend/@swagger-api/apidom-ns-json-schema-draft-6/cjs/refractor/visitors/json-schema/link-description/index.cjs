"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _apidomNsJsonSchemaDraft = require("@swagger-api/apidom-ns-json-schema-draft-4");
var _LinkDescription = _interopRequireDefault(require("../../../../elements/LinkDescription.cjs"));
class LinkDescriptionVisitor extends (0, _tsMixer.Mixin)(_apidomNsJsonSchemaDraft.FixedFieldsVisitor, _apidomNsJsonSchemaDraft.FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new _LinkDescription.default();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'LinkDescription']);
  }
}
var _default = exports.default = LinkDescriptionVisitor;