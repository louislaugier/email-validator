"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class WorkflowsSpecification1 extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'workflowsSpecification1';
    this.classes.push('api');
    this.classes.push('workflow');
  }
  get workflowsSpec() {
    return this.get('workflowsSpec');
  }
  set workflowsSpec(workflowsSpec) {
    this.set('workflowsSpec', workflowsSpec);
  }
  get info() {
    return this.get('info');
  }
  set info(info) {
    this.set('info', info);
  }
  get sourceDescriptions() {
    return this.get('sourceDescriptions');
  }
  set sourceDescriptions(sourceDescriptions) {
    this.set('sourceDescriptions', sourceDescriptions);
  }
  get workflows() {
    return this.get('workflows');
  }
  set workflows(workflows) {
    this.set('workflows', workflows);
  }
  get components() {
    return this.get('components');
  }
  set components(components) {
    this.set('components', components);
  }
}
var _default = exports.default = WorkflowsSpecification1;