"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
var _Info = _interopRequireDefault(require("../../elements/Info.cjs"));
var _visitor = require("../../traversal/visitor.cjs");
/**
 * Workflows 1.0.0 specification elements.
 */

/**
 * This plugin is specific to YAML 1.2 format, which allows defining key-value pairs
 * with empty key, empty value, or both. If the value is not provided in YAML format,
 * this plugin compensates for this missing value with the most appropriate semantic element type.
 *
 * https://yaml.org/spec/1.2.2/#72-empty-nodes
 *
 * @example
 *
 * ```yaml
 * workflowsSpec: 1.0.0
 * info:
 * ```
 * Refracting result without this plugin:
 *
 *  (WorkflowsSpecificationElement
 *    (MemberElement
 *      (StringElement)
 *      (WorkflowsSpecElement))
 *    (MemberElement
 *      (StringElement)
 *      (StringElement))
 *
 * Refracting result with this plugin:
 *
 *  (WorkflowsSpecificationElement
 *    (MemberElement
 *      (StringElement)
 *      (WorkflowsSpecElement))
 *    (MemberElement
 *      (StringElement)
 *      (InfoElement))
 */

const isEmptyElement = element => (0, _apidomCore.isStringElement)(element) && (0, _apidomCore.includesClasses)(['yaml-e-node', 'yaml-e-scalar'], element);
const schema = {
  // concrete types handling (CTs)
  WorkflowsSpecification1Element: {
    info(...args) {
      return new _Info.default(...args);
    }
  }
};
const findElementFactory = (ancestor, keyName) => {
  const elementType = (0, _visitor.getNodeType)(ancestor); // @ts-ignore
  const keyMapping = schema[elementType] || schema[(0, _apidomCore.toValue)(ancestor.classes.first)];
  return typeof keyMapping === 'undefined' ? undefined : Object.prototype.hasOwnProperty.call(keyMapping, '[key: *]') ? keyMapping['[key: *]'] : keyMapping[keyName];
};
const plugin = () => () => ({
  visitor: {
    StringElement(element, key, parent, path, ancestors) {
      if (!isEmptyElement(element)) return undefined;
      const lineage = [...ancestors, parent].filter(_apidomCore.isElement);
      const parentElement = lineage[lineage.length - 1]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
      let elementFactory;
      let context;
      if ((0, _apidomCore.isArrayElement)(parentElement)) {
        context = element;
        elementFactory = findElementFactory(parentElement, '<*>');
      } else if ((0, _apidomCore.isMemberElement)(parentElement)) {
        context = lineage[lineage.length - 2]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
        elementFactory = findElementFactory(context, (0, _apidomCore.toValue)(parentElement.key));
      }

      // no element factory found
      if (typeof elementFactory !== 'function') return undefined;
      return elementFactory.call({
        context
      }, undefined, (0, _apidomCore.cloneDeep)(element.meta), (0, _apidomCore.cloneDeep)(element.attributes));
    }
  }
});
var _default = exports.default = plugin;