import { ObjectElement } from '@swagger-api/apidom-core';
class Parameter extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'parameter';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get in() {
    return this.get('in');
  }
  set in(val) {
    this.set('in', val);
  }
  get style() {
    return this.get('style');
  }
  set style(style) {
    this.set('style', style);
  }
  get target() {
    return this.get('target');
  }
  set target(target) {
    this.set('target', target);
  }
  get value() {
    return this.get('value');
  }
  set value(value) {
    this.set('value', value);
  }
}
export default Parameter;