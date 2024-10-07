import { UnsupportedOperationError } from '@swagger-api/apidom-error';
import { JSONSchemaElement } from '@swagger-api/apidom-ns-json-schema-draft-4';
/* eslint-disable class-methods-use-this */
class Schema extends JSONSchemaElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'schema';
    this.classes.push('json-schema-draft-4');
  }

  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */
  get idProp() {
    throw new UnsupportedOperationError('idProp getter in Schema class is not not supported.');
  }
  set idProp(idProps) {
    throw new UnsupportedOperationError('idProp setter in Schema class is not not supported.');
  }
  get $schema() {
    throw new UnsupportedOperationError('$schema getter in Schema class is not not supported.');
  }
  set $schema($schema) {
    throw new UnsupportedOperationError('$schema setter in Schema class is not not supported.');
  }

  /**
   * Validation keywords for arrays
   */

  get additionalItems() {
    return this.get('additionalItems');
  }
  set additionalItems(additionalItems) {
    this.set('additionalItems', additionalItems);
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

  get additionalProperties() {
    return this.get('additionalProperties');
  }
  set additionalProperties(additionalProperties) {
    this.set('additionalProperties', additionalProperties);
  }
  get patternProperties() {
    throw new UnsupportedOperationError('patternProperties getter in Schema class is not not supported.');
  }
  set patternProperties(patternProperties) {
    throw new UnsupportedOperationError('patternProperties setter in Schema class is not not supported.');
  }
  get dependencies() {
    throw new UnsupportedOperationError('dependencies getter in Schema class is not not supported.');
  }
  set dependencies(dependencies) {
    throw new UnsupportedOperationError('dependencies setter in Schema class is not not supported.');
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
  get not() {
    return this.get('not');
  }
  set not(not) {
    this.set('not', not);
  }
  get definitions() {
    throw new UnsupportedOperationError('definitions getter in Schema class is not not supported.');
  }
  set definitions(definitions) {
    throw new UnsupportedOperationError('definitions setter in Schema class is not not supported.');
  }

  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */

  get base() {
    throw new UnsupportedOperationError('base getter in Schema class is not not supported.');
  }
  set base(base) {
    throw new UnsupportedOperationError('base setter in Schema class is not not supported.');
  }
  get links() {
    throw new UnsupportedOperationError('links getter in Schema class is not not supported.');
  }
  set links(links) {
    throw new UnsupportedOperationError('links setter in Schema class is not not supported.');
  }
  get media() {
    throw new UnsupportedOperationError('media getter in Schema class is not not supported.');
  }
  set media(media) {
    throw new UnsupportedOperationError('media setter in Schema class is not not supported.');
  }

  /**
   * OpenAPI vocabulary
   */

  get nullable() {
    return this.get('nullable');
  }
  set nullable(nullable) {
    this.set('nullable', nullable);
  }
  get discriminator() {
    return this.get('discriminator');
  }
  set discriminator(discriminator) {
    this.set('discriminator', discriminator);
  }
  get writeOnly() {
    return this.get('writeOnly');
  }
  set writeOnly(writeOnly) {
    this.set('writeOnly', writeOnly);
  }
  get xml() {
    return this.get('xml');
  }
  set xml(xml) {
    this.set('xml', xml);
  }
  get externalDocs() {
    return this.get('externalDocs');
  }
  set externalDocs(externalDocs) {
    this.set('externalDocs', externalDocs);
  }
  get example() {
    return this.get('example');
  }
  set example(example) {
    this.set('example', example);
  }
  get deprecated() {
    return this.get('deprecated');
  }
  set deprecated(deprecated) {
    this.set('deprecated', deprecated);
  }
}
/* eslint-disable class-methods-use-this */

export default Schema;