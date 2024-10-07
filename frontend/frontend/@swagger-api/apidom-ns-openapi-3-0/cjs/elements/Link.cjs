"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class Link extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'link';
  }
  get operationRef() {
    return this.get('operationRef');
  }
  set operationRef(operationRef) {
    this.set('operationRef', operationRef);
  }
  get operationId() {
    return this.get('operationId');
  }
  set operationId(operationId) {
    this.set('operationId', operationId);
  }
  get operation() {
    if ((0, _apidomCore.isStringElement)(this.operationRef)) {
      var _this$operationRef;
      return (_this$operationRef = this.operationRef) == null ? void 0 : _this$operationRef.meta.get('operation');
    }
    if ((0, _apidomCore.isStringElement)(this.operationId)) {
      var _this$operationId;
      return (_this$operationId = this.operationId) == null ? void 0 : _this$operationId.meta.get('operation');
    }
    return undefined;
  }
  set operation(operation) {
    this.set('operation', operation);
  }
  get parameters() {
    return this.get('parameters');
  }
  set parameters(parameters) {
    this.set('parameters', parameters);
  }
  get requestBody() {
    return this.get('requestBody');
  }
  set requestBody(requestBody) {
    this.set('requestBody', requestBody);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get server() {
    return this.get('server');
  }
  set server(server) {
    this.set('server', server);
  }
}
var _default = exports.default = Link;