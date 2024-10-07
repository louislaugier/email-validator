"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class SolaceServerBinding extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'solaceServerBinding';
    this.classes.push('server-binding');
  }
  get bindingVersion() {
    return this.get('bindingVersion');
  }
  set bindingVersion(bindingVersion) {
    this.set('bindingVersion', bindingVersion);
  }
  get msgVpn() {
    return this.get('msgVpn');
  }
  set msgVpn(msgVpn) {
    this.set('msgVpn', msgVpn);
  }
}
var _default = exports.default = SolaceServerBinding;