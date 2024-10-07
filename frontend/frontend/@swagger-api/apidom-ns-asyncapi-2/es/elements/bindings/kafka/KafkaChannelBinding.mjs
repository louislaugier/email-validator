import { ObjectElement } from '@swagger-api/apidom-core';
class KafkaChannelBinding extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'kafkaChannelBinding';
    this.classes.push('channel-binding');
  }
  get topic() {
    return this.get('topic');
  }
  set topic(topic) {
    this.set('topic', topic);
  }
  get partitions() {
    return this.get('partitions');
  }
  set partitions(partitions) {
    this.set('partitions', partitions);
  }
  get replicas() {
    return this.get('replicas');
  }
  set replicas(replicas) {
    this.set('replicas', replicas);
  }
  get bindingVersion() {
    return this.get('bindingVersion');
  }
  set bindingVersion(bindingVersion) {
    this.set('bindingVersion', bindingVersion);
  }
}
export default KafkaChannelBinding;