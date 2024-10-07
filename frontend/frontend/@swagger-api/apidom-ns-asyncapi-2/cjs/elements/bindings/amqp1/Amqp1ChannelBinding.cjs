"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class Amqp1ChannelBinding extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'amqp1ChannelBinding';
    this.classes.push('channel-binding');
  }
}
var _default = exports.default = Amqp1ChannelBinding;