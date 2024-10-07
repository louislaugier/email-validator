import { UnsupportedOperationError } from '@swagger-api/apidom-error';
import { JSONSchemaElement } from '@swagger-api/apidom-ns-json-schema-draft-4';

/* eslint-disable class-methods-use-this */
class Header extends JSONSchemaElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'header';
    this.classes.push('json-schema-draft-4');
  }

  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */

  get idProp() {
    throw new UnsupportedOperationError('idProp getter in Header class is not not supported.');
  }
  set idProp(idProps) {
    throw new UnsupportedOperationError('idProp setter in Header class is not not supported.');
  }
  get $schema() {
    throw new UnsupportedOperationError('$schema getter in Header class is not not supported.');
  }
  set $schema($schema) {
    throw new UnsupportedOperationError('$schema setter in Header class is not not supported.');
  }

  /**
   * Validation keywords for arrays
   */

  get additionalItems() {
    throw new UnsupportedOperationError('additionalItems getter in Header class is not not supported.');
  }
  set additionalItems(additionalItems) {
    throw new UnsupportedOperationError('additionalItems setter in Header class is not not supported.');
  }
  get items() {
    return this.get('items');
  }
  set items(items) {
    this.set('items', items);
  }

  /**
   * Validation keywords for objects
   */

  get maxProperties() {
    throw new UnsupportedOperationError('maxProperties getter in Header class is not not supported.');
  }
  set maxProperties(maxProperties) {
    throw new UnsupportedOperationError('maxProperties setter in Header class is not not supported.');
  }
  get minProperties() {
    throw new UnsupportedOperationError('minProperties getter in Header class is not not supported.');
  }
  set minProperties(minProperties) {
    throw new UnsupportedOperationError('minProperties setter in Header class is not not supported.');
  }
  get required() {
    throw new UnsupportedOperationError('required getter in Header class is not not supported.');
  }
  set required(required) {
    throw new UnsupportedOperationError('required setter in Header class is not not supported.');
  }
  get properties() {
    throw new UnsupportedOperationError('properties getter in Header class is not not supported.');
  }
  set properties(properties) {
    throw new UnsupportedOperationError('properties setter in Header class is not not supported.');
  }
  get additionalProperties() {
    throw new UnsupportedOperationError('additionalProperties getter in Header class is not not supported.');
  }
  set additionalProperties(additionalProperties) {
    throw new UnsupportedOperationError('additionalProperties setter in Header class is not not supported.');
  }
  get patternProperties() {
    throw new UnsupportedOperationError('patternProperties getter in Header class is not not supported.');
  }
  set patternProperties(patternProperties) {
    throw new UnsupportedOperationError('patternProperties setter in Header class is not not supported.');
  }
  get dependencies() {
    throw new UnsupportedOperationError('dependencies getter in Header class is not not supported.');
  }
  set dependencies(dependencies) {
    throw new UnsupportedOperationError('dependencies setter in Header class is not not supported.');
  }

  /**
   *  Validation keywords for any instance type
   */

  get type() {
    return this.get('type');
  }
  set type(type) {
    this.set('type', type);
  }
  get allOf() {
    throw new UnsupportedOperationError('allOf getter in Header class is not not supported.');
  }
  set allOf(allOf) {
    throw new UnsupportedOperationError('allOf setter in Header class is not not supported.');
  }
  get anyOf() {
    throw new UnsupportedOperationError('anyOf getter in Header class is not not supported.');
  }
  set anyOf(anyOf) {
    throw new UnsupportedOperationError('anyOf setter in Header class is not not supported.');
  }
  get oneOf() {
    throw new UnsupportedOperationError('oneOf getter in Header class is not not supported.');
  }
  set oneOf(oneOf) {
    throw new UnsupportedOperationError('oneOf setter in Header class is not not supported.');
  }
  get not() {
    throw new UnsupportedOperationError('not getter in Header class is not not supported.');
  }
  set not(not) {
    throw new UnsupportedOperationError('not setter in Header class is not not supported.');
  }
  get definitions() {
    throw new UnsupportedOperationError('definitions getter in Header class is not not supported.');
  }
  set definitions(definitions) {
    throw new UnsupportedOperationError('definitions setter in Header class is not not supported.');
  }

  /**
   * Metadata keywords
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6
   */

  get title() {
    throw new UnsupportedOperationError('title getter in Header class is not not supported.');
  }
  set title(title) {
    throw new UnsupportedOperationError('title setter in Header class is not not supported.');
  }

  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */

  get base() {
    throw new UnsupportedOperationError('base getter in Header class is not not supported.');
  }
  set base(base) {
    throw new UnsupportedOperationError('base setter in Header class is not not supported.');
  }
  get links() {
    throw new UnsupportedOperationError('links getter in Header class is not not supported.');
  }
  set links(links) {
    throw new UnsupportedOperationError('links setter in Header class is not not supported.');
  }
  get media() {
    throw new UnsupportedOperationError('media getter in Header class is not not supported.');
  }
  set media(media) {
    throw new UnsupportedOperationError('media setter in Header class is not not supported.');
  }
  get readOnly() {
    throw new UnsupportedOperationError('readOnly getter in Header class is not not supported.');
  }
  set readOnly(readOnly) {
    throw new UnsupportedOperationError('readOnly setter in Header class is not not supported.');
  }
}
/* eslint-enable class-methods-use-this */

export default Header;