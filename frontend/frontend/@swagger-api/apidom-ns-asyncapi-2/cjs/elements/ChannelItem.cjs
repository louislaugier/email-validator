"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class ChannelItem extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'channelItem';
  }
  get $ref() {
    return this.get('$ref');
  }
  set $ref($ref) {
    this.set('$ref', $ref);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get servers() {
    return this.get('servers');
  }
  set servers(servers) {
    this.set('servers', servers);
  }
  get subscribe() {
    return this.get('subscribe');
  }
  set subscribe(subscribe) {
    this.set('subscribe', subscribe);
  }
  get publish() {
    return this.get('publish');
  }
  set publish(publish) {
    this.set('publish', publish);
  }
  get parameters() {
    return this.get('parameters');
  }
  set parameters(parameters) {
    this.set('parameters', parameters);
  }
  get bindings() {
    return this.get('bindings');
  }
  set bindings(bindings) {
    this.set('bindings', bindings);
  }
}
var _default = exports.default = ChannelItem;