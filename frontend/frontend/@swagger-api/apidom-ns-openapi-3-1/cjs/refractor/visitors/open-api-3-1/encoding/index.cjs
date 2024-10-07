"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
var _Encoding = _interopRequireDefault(require("../../../../elements/Encoding.cjs"));
const {
  visitors: {
    document: {
      objects: {
        Encoding: {
          $visitor: BaseEncodingVisitor
        }
      }
    }
  }
} = _apidomNsOpenapi.specificationObj;
class EncodingVisitor extends BaseEncodingVisitor {
  constructor(options) {
    super(options);
    this.element = new _Encoding.default();
  }
}
var _default = exports.default = EncodingVisitor;