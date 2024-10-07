"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class MqttOperationBinding extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'mqttOperationBinding';
    this.classes.push('operation-binding');
  }
  get qos() {
    return this.get('qos');
  }
  set qos(qos) {
    this.set('qos', qos);
  }
  get retain() {
    return this.get('retain');
  }
  set retain(retain) {
    this.set('retain', retain);
  }
  get bindingVersion() {
    return this.get('bindingVersion');
  }
  set bindingVersion(bindingVersion) {
    this.set('bindingVersion', bindingVersion);
  }
}
var _default = exports.default = MqttOperationBinding;