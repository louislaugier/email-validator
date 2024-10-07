"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class AmqpChannelBinding extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'amqpChannelBinding';
    this.classes.push('channel-binding');
  }
  get is() {
    return this.get('is');
  }
  set is(is) {
    this.set('is', is);
  }
  get exchange() {
    return this.get('exchange');
  }
  set exchange(exchange) {
    this.set('exchange', exchange);
  }
  get queue() {
    return this.get('queue');
  }
  set queue(queue) {
    this.set('queue', queue);
  }
  get bindingVersion() {
    return this.get('bindingVersion');
  }
  set bindingVersion(bindingVersion) {
    this.set('bindingVersion', bindingVersion);
  }
}
var _default = exports.default = AmqpChannelBinding;