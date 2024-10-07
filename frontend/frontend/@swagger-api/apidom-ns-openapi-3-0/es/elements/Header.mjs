import { ObjectElement, BooleanElement } from '@swagger-api/apidom-core';
class Header extends ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'header';
  }
  get required() {
    if (this.hasKey('required')) {
      return this.get('required');
    }
    return new BooleanElement(false);
  }
  set required(required) {
    this.set('required', required);
  }
  get deprecated() {
    if (this.hasKey('deprecated')) {
      return this.get('deprecated');
    }
    return new BooleanElement(false);
  }
  set deprecated(deprecated) {
    this.set('deprecated', deprecated);
  }
  get allowEmptyValue() {
    return this.get('allowEmptyValue');
  }
  set allowEmptyValue(allowEmptyValue) {
    this.set('allowEmptyValue', allowEmptyValue);
  }
  get style() {
    return this.get('style');
  }
  set style(style) {
    this.set('style', style);
  }
  get explode() {
    return this.get('explode');
  }
  set explode(explode) {
    this.set('explode', explode);
  }
  get allowReserved() {
    return this.get('allowReserved');
  }
  set allowReserved(allowReserved) {
    this.set('allowReserved', allowReserved);
  }
  get schema() {
    return this.get('schema');
  }
  set schema(schema) {
    this.set('schema', schema);
  }
  get example() {
    return this.get('example');
  }
  set example(example) {
    this.set('example', example);
  }
  get examples() {
    return this.get('examples');
  }
  set examples(examples) {
    this.set('examples', examples);
  }
  get contentProp() {
    return this.get('content');
  }
  set contentProp(content) {
    this.set('content', content);
  }
}
Object.defineProperty(Header.prototype, 'description', {
  get() {
    return this.get('description');
  },
  set(description) {
    this.set('description', description);
  },
  enumerable: true
});
export default Header;