"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _tsMixer = require("ts-mixer");
var _ramda = require("ramda");
var _ramdaAdjunct = require("ramda-adjunct");
var _apidomCore = require("@swagger-api/apidom-core");
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-3-0");
var _predicates = require("../../../../predicates.cjs");
var _Schema = _interopRequireDefault(require("../../../../elements/Schema.cjs"));
var _JsonSchemaDialect = _interopRequireDefault(require("../../../../elements/JsonSchemaDialect.cjs"));
var _ParentSchemaAwareVisitor = _interopRequireDefault(require("./ParentSchemaAwareVisitor.cjs"));
class SchemaVisitor extends (0, _tsMixer.Mixin)(_apidomNsOpenapi.FixedFieldsVisitor, _ParentSchemaAwareVisitor.default, _apidomNsOpenapi.FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new _Schema.default();
    this.specPath = (0, _ramda.always)(['document', 'objects', 'Schema']);
    this.canSupportSpecificationExtensions = true;
    this.jsonSchemaDefaultDialect = _JsonSchemaDialect.default.default;
    this.passingOptionsNames.push('parent');
  }
  ObjectElement(objectElement) {
    this.handle$schema(objectElement);
    this.handle$id(objectElement);

    // for further processing consider this Schema Element as parent for all embedded Schema Elements
    this.parent = this.element;
    const result = _apidomNsOpenapi.FixedFieldsVisitor.prototype.ObjectElement.call(this, objectElement);

    // mark this SchemaElement with reference metadata
    if ((0, _apidomCore.isStringElement)(this.element.$ref)) {
      this.element.classes.push('reference-element');
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
  BooleanElement(booleanElement) {
    const result = super.enter(booleanElement);
    this.element.classes.push('boolean-json-schema');
    return result;
  }

  /**
   * This function depends on some external context, so we need to make sure this function
   * works even when no context is provided like when directly refracting generic Object Element
   * into Schema Element: SchemaElement.refract(new ObjectElement({ type: 'object' });
   */
  getJsonSchemaDialect() {
    let jsonSchemaDialect;
    if (this.openApiSemanticElement !== undefined &&
    // @ts-ignore
    (0, _predicates.isJsonSchemaDialectElement)(this.openApiSemanticElement.jsonSchemaDialect)) {
      // @ts-ignore
      jsonSchemaDialect = (0, _apidomCore.toValue)(this.openApiSemanticElement.jsonSchemaDialect);
    } else if (this.openApiGenericElement !== undefined && (0, _apidomCore.isStringElement)(this.openApiGenericElement.get('jsonSchemaDialect'))) {
      jsonSchemaDialect = (0, _apidomCore.toValue)(this.openApiGenericElement.get('jsonSchemaDialect'));
    } else {
      jsonSchemaDialect = (0, _apidomCore.toValue)(this.jsonSchemaDefaultDialect);
    }
    return jsonSchemaDialect;
  }
  handle$schema(objectElement) {
    // handle $schema keyword in embedded resources
    if ((0, _ramdaAdjunct.isUndefined)(this.parent) && !(0, _apidomCore.isStringElement)(objectElement.get('$schema'))) {
      // no parent available and no $schema is defined, set default jsonSchemaDialect
      this.element.setMetaProperty('inherited$schema', this.getJsonSchemaDialect());
    } else if ((0, _predicates.isSchemaElement)(this.parent) && !(0, _apidomCore.isStringElement)(objectElement.get('$schema'))) {
      // parent is available and no $schema is defined, set parent $schema
      const inherited$schema = (0, _ramda.defaultTo)((0, _apidomCore.toValue)(this.parent.meta.get('inherited$schema')), (0, _apidomCore.toValue)(this.parent.$schema));
      this.element.setMetaProperty('inherited$schema', inherited$schema);
    }
  }
  handle$id(objectElement) {
    // handle $id keyword in embedded resources
    // fetch parent's inherited$id
    const inherited$id = this.parent !== undefined ? (0, _apidomCore.cloneDeep)(this.parent.getMetaProperty('inherited$id', [])) : new _apidomCore.ArrayElement();
    // get current $id keyword
    const $id = (0, _apidomCore.toValue)(objectElement.get('$id'));

    // remember $id keyword if it's a non-empty strings
    if ((0, _ramdaAdjunct.isNonEmptyString)($id)) {
      inherited$id.push($id);
    }
    this.element.setMetaProperty('inherited$id', inherited$id);
  }
}
var _default = exports.default = SchemaVisitor;