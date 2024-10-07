"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class MqttServerBinding extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'mqttServerBinding';
    this.classes.push('server-binding');
  }
  get clientId() {
    return this.get('clientId');
  }
  set clientId(clientId) {
    this.set('clientId', clientId);
  }
  get cleanSession() {
    return this.get('cleanSession');
  }
  set cleanSession(cleanSession) {
    this.set('cleanSession', cleanSession);
  }
  get lastWill() {
    return this.get('lastWill');
  }
  set lastWill(lastWill) {
    this.set('lastWill', lastWill);
  }
  get keepAlive() {
    return this.get('keepAlive');
  }
  set keepAlive(keepAlive) {
    this.set('keepAlive', keepAlive);
  }
  get bindingVersion() {
    return this.get('bindingVersion');
  }
  set bindingVersion(bindingVersion) {
    this.set('bindingVersion', bindingVersion);
  }
}
var _default = exports.default = MqttServerBinding;