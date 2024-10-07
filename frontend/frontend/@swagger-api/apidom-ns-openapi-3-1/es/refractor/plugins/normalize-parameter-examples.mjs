import { cloneDeep } from '@swagger-api/apidom-core';
import NormalizeStorage from "./normalize-header-examples/NormalizeStorage.mjs";
/**
 * Override of Schema.example and Schema.examples field inside the Parameter Objects.
 *
 * Parameter Object has two fixed fields:
 *  - `example` of type `Any`
 *  - `examples` of type `Map[string, Example Object | Reference Object]`
 *
 * OpenAPI 3.1 specification excerpt that defines the override behavior:
 *
 * The example value SHALL override the example provided by the schema.
 * Furthermore, if referencing a schema that contains an example, the examples value SHALL override the example provided by the schema.
 *
 * NOTE: this plugin is idempotent
 */
const plugin = ({
  storageField = 'x-normalized'
} = {}) => toolbox => {
  const {
    predicates,
    ancestorLineageToJSONPointer
  } = toolbox;
  let storage;
  return {
    visitor: {
      OpenApi3_1Element: {
        enter(element) {
          storage = new NormalizeStorage(element, storageField, 'parameter-examples');
        },
        leave() {
          storage = undefined;
        }
      },
      ParameterElement: {
        leave(parameterElement, key, parent, path, ancestors) {
          var _parameterElement$sch, _parameterElement$sch2;
          // skip visiting this Parameter Object
          if (ancestors.some(predicates.isComponentsElement)) {
            return;
          }

          // no Parameter.schema field present
          if (typeof parameterElement.schema === 'undefined' || !predicates.isSchemaElement(parameterElement.schema)) {
            return;
          }
          // Schema contains no example
          if (typeof ((_parameterElement$sch = parameterElement.schema) === null || _parameterElement$sch === void 0 ? void 0 : _parameterElement$sch.example) === 'undefined' && typeof ((_parameterElement$sch2 = parameterElement.schema) === null || _parameterElement$sch2 === void 0 ? void 0 : _parameterElement$sch2.examples) === 'undefined') {
            return;
          }
          const parameterJSONPointer = ancestorLineageToJSONPointer([...ancestors, parent, parameterElement]);

          // skip visiting this Parameter Object if it's already normalized
          if (storage.includes(parameterJSONPointer)) {
            return;
          }

          /**
           * Parameter.examples and Schema.examples have preferences over the older
           * and deprected `example` field.
           */
          if (typeof parameterElement.examples !== 'undefined' && predicates.isObjectElement(parameterElement.examples)) {
            // @ts-ignore
            const examples = parameterElement.examples.map(example => {
              return cloneDeep.safe(example.value);
            });
            if (typeof parameterElement.schema.examples !== 'undefined') {
              parameterElement.schema.set('examples', examples);
              storage.append(parameterJSONPointer);
            }
            if (typeof parameterElement.schema.example !== 'undefined') {
              parameterElement.schema.set('example', examples[0]);
              storage.append(parameterJSONPointer);
            }
            return;
          }

          /**
           * Handle deprecated `example` field.
           */
          if (typeof parameterElement.example !== 'undefined') {
            if (typeof parameterElement.schema.examples !== 'undefined') {
              parameterElement.schema.set('examples', [cloneDeep(parameterElement.example)]);
              storage.append(parameterJSONPointer);
            }
            if (typeof parameterElement.schema.example !== 'undefined') {
              parameterElement.schema.set('example', cloneDeep(parameterElement.example));
              storage.append(parameterJSONPointer);
            }
          }
        }
      }
    }
  };
};
export default plugin;