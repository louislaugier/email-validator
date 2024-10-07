import { isArrayElement, deepmerge } from '@swagger-api/apidom-core';
import { isSchemaElement } from '@swagger-api/apidom-ns-openapi-3-1';
import toPath from '../utils/to-path.js';
class AllOfVisitor {
  options;
  SchemaElement = {
    leave(schemaElement, key, parent, path, ancestors) {
      // do nothing
      if (typeof schemaElement.allOf === 'undefined') return undefined;

      // collect error and return if allOf keyword is not an array
      if (!isArrayElement(schemaElement.allOf)) {
        var _this$options$derefer, _this$options$derefer2;
        const error = new TypeError('allOf must be an array');
        error.fullPath = [...toPath([...ancestors, parent, schemaElement]), 'allOf'];
        (_this$options$derefer = this.options.dereference.dereferenceOpts) === null || _this$options$derefer === void 0 || (_this$options$derefer = _this$options$derefer.errors) === null || _this$options$derefer === void 0 || (_this$options$derefer2 = _this$options$derefer.push) === null || _this$options$derefer2 === void 0 || _this$options$derefer2.call(_this$options$derefer, error);
        return undefined;
      }

      // remove allOf keyword if empty
      if (schemaElement.allOf.isEmpty) {
        schemaElement.remove('allOf');
        return undefined;
      }

      // collect errors if allOf keyword contains anything else than Schema Object
      const includesSchemaElementOnly = schemaElement.allOf.content.every(isSchemaElement);
      if (!includesSchemaElementOnly) {
        var _this$options$derefer3, _this$options$derefer4;
        const error = new TypeError('Elements in allOf must be objects');
        error.fullPath = [...toPath([...ancestors, parent, schemaElement]), 'allOf'];
        (_this$options$derefer3 = this.options.dereference.dereferenceOpts) === null || _this$options$derefer3 === void 0 || (_this$options$derefer3 = _this$options$derefer3.errors) === null || _this$options$derefer3 === void 0 || (_this$options$derefer4 = _this$options$derefer3.push) === null || _this$options$derefer4 === void 0 || _this$options$derefer4.call(_this$options$derefer3, error);
        return undefined;
      }
      while (schemaElement.hasKey('allOf')) {
        const {
          allOf
        } = schemaElement;
        schemaElement.remove('allOf');
        const allOfMerged = deepmerge.all([...allOf.content, schemaElement]);

        /**
         * If there was not an original $$ref value, make sure to remove
         * any $$ref value that may exist from the result of `allOf` merges.
         */
        if (!schemaElement.hasKey('$$ref')) {
          allOfMerged.remove('$$ref');
        }

        /**
         * If there was an example keyword in the original schema,
         * keep it instead of merging with example from other schema.
         */
        if (schemaElement.hasKey('example')) {
          const member = allOfMerged.getMember('example');
          if (member) {
            member.value = schemaElement.get('example');
          }
        }

        /**
         * If there was an examples keyword in the original schema,
         * keep it instead of merging with examples from other schema.
         */
        if (schemaElement.hasKey('examples')) {
          const member = allOfMerged.getMember('examples');
          if (member) {
            member.value = schemaElement.get('examples');
          }
        }
        schemaElement.content = allOfMerged.content;
      }
      return undefined;
    }
  };
  constructor({
    options
  }) {
    this.options = options;
  }
}
export default AllOfVisitor;