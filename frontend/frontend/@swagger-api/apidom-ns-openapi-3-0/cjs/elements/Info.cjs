"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class Info extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'info';
    this.classes.push('info');
  }
  get title() {
    return this.get('title');
  }
  set title(title) {
    this.set('title', title);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get termsOfService() {
    return this.get('termsOfService');
  }
  set termsOfService(tos) {
    this.set('termsOfService', tos);
  }
  get contact() {
    return this.get('contact');
  }
  set contact(contactElement) {
    this.set('contact', contactElement);
  }
  get license() {
    return this.get('license');
  }
  set license(licenseElement) {
    this.set('license', licenseElement);
  }
  get version() {
    return this.get('version');
  }
  set version(version) {
    this.set('version', version);
  }
}
var _default = exports.default = Info;