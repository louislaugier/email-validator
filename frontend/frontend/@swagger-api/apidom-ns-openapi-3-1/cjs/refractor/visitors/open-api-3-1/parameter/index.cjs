"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
var _Parameter = _interopRequireDefault(require("../../../../elements/Parameter.cjs"));
const {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: BaseParameterVisitor
        }
      }
    }
  }
} = _apidomNsOpenapi.specificationObj;
class ParameterVisitor extends BaseParameterVisitor {
  constructor(options) {
    super(options);
    this.element = new _Parameter.default();
  }
}
var _default = exports.default = ParameterVisitor;