"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class Schema extends _apidomCore.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'schema';
  }

  /**
   * Core vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/core
   */

  get $schema() {
    return this.get('$schema');
  }
  set $schema($schema) {
    this.set('$schema', $schema);
  }
  get $vocabulary() {
    return this.get('$vocabulary');
  }
  set $vocabulary($vocabulary) {
    this.set('$vocabulary', $vocabulary);
  }
  get $id() {
    return this.get('$id');
  }
  set $id($id) {
    this.set('$id', $id);
  }
  get $anchor() {
    return this.get('$anchor');
  }
  set $anchor($anchor) {
    this.set('$anchor', $anchor);
  }
  get $dynamicAnchor() {
    return this.get('$dynamicAnchor');
  }
  set $dynamicAnchor($dynamicAnchor) {
    this.set('$dynamicAnchor', $dynamicAnchor);
  }
  get $dynamicRef() {
    return this.get('$dynamicRef');
  }
  set $dynamicRef($dynamicRef) {
    this.set('$dynamicRef', $dynamicRef);
  }
  get $ref() {
    return this.get('$ref');
  }
  set $ref($ref) {
    this.set('$ref', $ref);
  }
  get $defs() {
    return this.get('$defs');
  }
  set $defs($defs) {
    this.set('$defs', $defs);
  }
  get $comment() {
    return this.get('$comment');
  }
  set $comment($comment) {
    this.set('$comment', $comment);
  }

  /**
   * Applicator vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/applicator
   */

  get allOf() {
    return this.get('allOf');
  }
  set allOf(allOf) {
    this.set('allOf', allOf);
  }
  get anyOf() {
    return this.get('anyOf');
  }
  set anyOf(anyOf) {
    this.set('anyOf', anyOf);
  }
  get oneOf() {
    return this.get('oneOf');
  }
  set oneOf(oneOf) {
    this.set('oneOf', oneOf);
  }
  get not() {
    return this.get('not');
  }
  set not(not) {
    this.set('not', not);
  }
  get if() {
    return this.get('if');
  }
  set if(ifSchema) {
    this.set('if', ifSchema);
  }
  get then() {
    return this.get('then');
  }
  set then(thenSchema) {
    this.set('then', thenSchema);
  }
  get else() {
    return this.get('else');
  }
  set else(elseSchema) {
    this.set('else', elseSchema);
  }
  get dependentSchemas() {
    return this.get('dependentSchemas');
  }
  set dependentSchemas(dependentSchemas) {
    this.set('dependentSchemas', dependentSchemas);
  }
  get prefixItems() {
    return this.get('prefixItems');
  }
  set prefixItems(prefixItems) {
    this.set('prefixItems', prefixItems);
  }
  get items() {
    return this.get('items');
  }
  set items(items) {
    this.set('items', items);
  }
  get containsProp() {
    return this.get('contains');
  }
  set containsProp(containsProp) {
    this.set('contains', containsProp);
  }
  get properties() {
    return this.get('properties');
  }
  set properties(properties) {
    this.set('properties', properties);
  }
  get patternProperties() {
    return this.get('patternProperties');
  }
  set patternProperties(patternProperties) {
    this.set('patternProperties', patternProperties);
  }
  get additionalProperties() {
    return this.get('additionalProperties');
  }
  set additionalProperties(additionalProperties) {
    this.set('additionalProperties', additionalProperties);
  }
  get propertyNames() {
    return this.get('propertyNames');
  }
  set propertyNames(propertyNames) {
    this.set('propertyNames', propertyNames);
  }

  /**
   * Unevaluated Locations vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/unevaluated
   */

  get unevaluatedItems() {
    return this.get('unevaluatedItems');
  }
  set unevaluatedItems(unevaluatedItems) {
    this.set('unevaluatedItems', unevaluatedItems);
  }
  get unevaluatedProperties() {
    return this.get('unevaluatedProperties');
  }
  set unevaluatedProperties(unevaluatedProperties) {
    this.set('unevaluatedProperties', unevaluatedProperties);
  }

  /**
   * Validation vocabulary
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/validation
   */

  /**
   *  Validation Keywords for Any Instance Type
   *
   *  URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.1
   */

  get type() {
    return this.get('type');
  }
  set type(type) {
    this.set('type', type);
  }
  get enum() {
    return this.get('enum');
  }
  set enum(enumVal) {
    this.set('enum', enumVal);
  }
  get const() {
    return this.get('const');
  }
  set const(constVal) {
    this.set('const', constVal);
  }

  /**
   * Validation Keywords for Numeric Instances (number and integer)
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#numeric
   */

  get multipleOf() {
    return this.get('multipleOf');
  }
  set multipleOf(multipleOf) {
    this.set('multipleOf', multipleOf);
  }
  get maximum() {
    return this.get('maximum');
  }
  set maximum(maximum) {
    this.set('maximum', maximum);
  }
  get exclusiveMaximum() {
    return this.get('exclusiveMaximum');
  }
  set exclusiveMaximum(exclusiveMaximum) {
    this.set('exclusiveMaximum', exclusiveMaximum);
  }
  get minimum() {
    return this.get('minimum');
  }
  set minimum(minimum) {
    this.set('minimum', minimum);
  }
  get exclusiveMinimum() {
    return this.get('exclusiveMinimum');
  }
  set exclusiveMinimum(exclusiveMinimum) {
    this.set('exclusiveMinimum', exclusiveMinimum);
  }

  /**
   * Validation Keywords for Strings
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#string
   */

  get maxLength() {
    return this.get('maxLength');
  }
  set maxLength(maxLength) {
    this.set('maxLength', maxLength);
  }
  get minLength() {
    return this.get('minLength');
  }
  set minLength(minLength) {
    this.set('minLength', minLength);
  }
  get pattern() {
    return this.get('pattern');
  }
  set pattern(pattern) {
    this.set('pattern', pattern);
  }

  /**
   * Validation Keywords for Arrays
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.4
   */

  get maxItems() {
    return this.get('maxItems');
  }
  set maxItems(maxItems) {
    this.set('maxItems', maxItems);
  }
  get minItems() {
    return this.get('minItems');
  }
  set minItems(minItems) {
    this.set('minItems', minItems);
  }
  get uniqueItems() {
    return this.get('uniqueItems');
  }
  set uniqueItems(uniqueItems) {
    this.set('uniqueItems', uniqueItems);
  }
  get maxContains() {
    return this.get('maxContains');
  }
  set maxContains(maxContains) {
    this.set('maxContains', maxContains);
  }
  get minContains() {
    return this.get('minContains');
  }
  set minContains(minContains) {
    this.set('minContains', minContains);
  }

  /**
   * Validation Keywords for Objects
   *
   * URI: https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.5
   */

  get maxProperties() {
    return this.get('maxProperties');
  }
  set maxProperties(maxProperties) {
    this.set('maxProperties', maxProperties);
  }
  get minProperties() {
    return this.get('minProperties');
  }
  set minProperties(minProperties) {
    this.set('minProperties', minProperties);
  }
  get required() {
    return this.get('required');
  }
  set required(required) {
    this.set('required', required);
  }
  get dependentRequired() {
    return this.get('dependentRequired');
  }
  set dependentRequired(dependentRequired) {
    this.set('dependentRequired', dependentRequired);
  }

  /**
   * Vocabulary for Basic Meta-Data Annotations
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/meta-data
   */

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
  get default() {
    return this.get('default');
  }
  set default(defaultVal) {
    this.set('default', defaultVal);
  }
  get deprecated() {
    return this.get('deprecated');
  }
  set deprecated(deprecated) {
    this.set('deprecated', deprecated);
  }
  get readOnly() {
    return this.get('readOnly');
  }
  set readOnly(readOnly) {
    this.set('readOnly', readOnly);
  }
  get writeOnly() {
    return this.get('writeOnly');
  }
  set writeOnly(writeOnly) {
    this.set('writeOnly', writeOnly);
  }
  get examples() {
    return this.get('examples');
  }
  set examples(examples) {
    this.set('examples', examples);
  }

  /**
   * Vocabularies for Semantic Content With "format"
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/format-annotation
   */

  get format() {
    return this.get('format');
  }
  set format(format) {
    this.set('format', format);
  }

  /**
   * Vocabulary for the Contents of String-Encoded Data
   *
   * URI: https://json-schema.org/draft/2020-12/vocab/content
   */

  get contentEncoding() {
    return this.get('contentEncoding');
  }
  set contentEncoding(contentEncoding) {
    this.set('contentEncoding', contentEncoding);
  }
  get contentMediaType() {
    return this.get('contentMediaType');
  }
  set contentMediaType(contentMediaType) {
    this.set('contentMediaType', contentMediaType);
  }
  get contentSchema() {
    return this.get('contentSchema');
  }
  set contentSchema(contentSchema) {
    this.set('contentSchema', contentSchema);
  }

  /**
   * OAS base vocabulary
   *
   * URI: https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#baseVocabulary
   */

  get discriminator() {
    return this.get('discriminator');
  }
  set discriminator(discriminator) {
    this.set('discriminator', discriminator);
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

  /**
   * @deprecated The example property has been deprecated in favor of the JSON Schema examples keyword. Use of example is discouraged, and later versions of this specification may remove it.
   */
  get example() {
    return this.get('example');
  }

  /**
   * @deprecated The example property has been deprecated in favor of the JSON Schema examples keyword. Use of example is discouraged, and later versions of this specification may remove it.
   */
  set example(example) {
    this.set('example', example);
  }
}
var _default = exports.default = Schema;