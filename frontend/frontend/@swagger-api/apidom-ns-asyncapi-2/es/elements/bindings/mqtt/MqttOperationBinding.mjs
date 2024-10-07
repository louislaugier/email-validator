import { ObjectElement } from '@swagger-api/apidom-core';
class MqttOperationBinding extends ObjectElement {
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
export default MqttOperationBinding;