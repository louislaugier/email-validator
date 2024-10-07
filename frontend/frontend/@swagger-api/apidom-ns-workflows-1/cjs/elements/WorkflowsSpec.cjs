"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class WorkflowsSpec extends _apidomCore.StringElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'workflowsSpec';
    this.classes.push('spec-version');
    this.classes.push('version');
  }
}
var _default = exports.default = WorkflowsSpec;