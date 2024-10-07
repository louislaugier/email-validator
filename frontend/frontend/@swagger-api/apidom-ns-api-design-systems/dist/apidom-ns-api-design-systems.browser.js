(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["apidomNsApiDesignSystems"] = factory();
	else
		root["apidomNsApiDesignSystems"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class Info extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'info';
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

/***/ }),

/***/ 1712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class Main extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'main';
    this.classes.push('api');
  }
  get version() {
    return this.get('version');
  }
  set version(version) {
    this.set('version', version);
  }
  get info() {
    return this.get('info');
  }
  set info(info) {
    this.set('info', info);
  }
  get principles() {
    return this.get('principles');
  }
  set principles(principles) {
    this.set('principles', principles);
  }
  get standards() {
    return this.get('standards');
  }
  set standards(standards) {
    this.set('standards', standards);
  }
  get scenarios() {
    return this.get('scenarios');
  }
  set scenarios(scenarios) {
    this.set('scenarios', scenarios);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 9441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class Principle extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'principle';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get iri() {
    return this.get('iri');
  }
  set iri(iri) {
    this.set('iri', iri);
  }
  get level() {
    return this.get('level');
  }
  set level(level) {
    this.set('level', level);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Principle);

/***/ }),

/***/ 9166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class Requirement extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'requirement';
  }
  get subject() {
    return this.get('subject');
  }
  set subject(subject) {
    this.set('subject', subject);
  }
  get level() {
    return this.get('level');
  }
  set level(level) {
    this.set('level', level);
  }
  get values() {
    return this.get('values');
  }
  set values(values) {
    this.set('values', values);
  }
  get follows() {
    return this.get('follows');
  }
  set follows(follows) {
    this.set('follows', follows);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Requirement);

/***/ }),

/***/ 1230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class RequirementLevel extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.StringElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'requirementLevel';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequirementLevel);

/***/ }),

/***/ 9735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class Scenario extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'scenario';
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get when() {
    return this.get('when');
  }
  set when(when) {
    this.set('when', when);
  }
  get then() {
    return this.get('then');
  }
  set then(then) {
    this.set('then', then);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scenario);

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class Standard extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'standard';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get iri() {
    return this.get('iri');
  }
  set iri(iri) {
    this.set('iri', iri);
  }
  get level() {
    return this.get('level');
  }
  set level(level) {
    this.set('level', level);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Standard);

/***/ }),

/***/ 7683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1865);

class StandardIdentifier extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'standardIdentifier';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardIdentifier);

/***/ }),

/***/ 8267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiDesignSystemsMediaTypes: () => (/* binding */ ApiDesignSystemsMediaTypes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9451);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7901);


class ApiDesignSystemsMediaTypes extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"] {
  filterByFormat(format = 'generic') {
    const effectiveFormat = format === 'generic' ? 'apidesignsystems;version' : format;
    return this.filter(mediaType => mediaType.includes(effectiveFormat));
  }
  findBy(version = '2021-05-07', format = 'generic') {
    const search = format === 'generic' ? `apidesignsystems;version=${version}` : `apidesignsystems+${format};version=${version}`;
    const found = this.find(mediaType => mediaType.includes(search));
    return found || this.unknownMediaType;
  }
  latest(format = 'generic') {
    return (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(this.filterByFormat(format));
  }
}
const mediaTypes = new ApiDesignSystemsMediaTypes('application/vnd.aai.apidesignsystems;version=2021-05-07', 'application/vnd.aai.apidesignsystems+json;version=2021-05-07', 'application/vnd.aai.apidesignsystems+yaml;version=2021-05-07');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaTypes);

/***/ }),

/***/ 9936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7425);
/* harmony import */ var _elements_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var _elements_Principle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);
/* harmony import */ var _elements_Requirement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9166);
/* harmony import */ var _elements_RequirementLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1230);
/* harmony import */ var _elements_Scenario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9735);
/* harmony import */ var _elements_Standard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(168);
/* harmony import */ var _elements_StandardIdentifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7683);
/**
 * API Design Systems 2021-05-07 specification elements.
 */








const apiDesignSystems = {
  namespace: options => {
    const {
      base
    } = options;

    /**
     * API Design Systems 2021-05-07 specification elements.
     */
    base.register('info', _elements_Info__WEBPACK_IMPORTED_MODULE_0__["default"]);
    base.register('main', _elements_Main__WEBPACK_IMPORTED_MODULE_1__["default"]);
    base.register('principle', _elements_Principle__WEBPACK_IMPORTED_MODULE_2__["default"]);
    base.register('requirement', _elements_Requirement__WEBPACK_IMPORTED_MODULE_3__["default"]);
    base.register('requirementLevel', _elements_RequirementLevel__WEBPACK_IMPORTED_MODULE_4__["default"]);
    base.register('scenario', _elements_Scenario__WEBPACK_IMPORTED_MODULE_5__["default"]);
    base.register('standard', _elements_Standard__WEBPACK_IMPORTED_MODULE_6__["default"]);
    base.register('standardIdentifier', _elements_StandardIdentifier__WEBPACK_IMPORTED_MODULE_7__["default"]);
    return base;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiDesignSystems);

/***/ }),

/***/ 7269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInfoElement: () => (/* binding */ isInfoElement),
/* harmony export */   isMainElement: () => (/* binding */ isMainElement),
/* harmony export */   isPrincipleElement: () => (/* binding */ isPrincipleElement),
/* harmony export */   isRequirementElement: () => (/* binding */ isRequirementElement),
/* harmony export */   isRequirementLevelElement: () => (/* binding */ isRequirementLevelElement),
/* harmony export */   isScenarioElement: () => (/* binding */ isScenarioElement),
/* harmony export */   isStandardElement: () => (/* binding */ isStandardElement),
/* harmony export */   isStandardIdentifierElement: () => (/* binding */ isStandardIdentifierElement)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1787);
/* harmony import */ var _elements_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1712);
/* harmony import */ var _elements_Info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7425);
/* harmony import */ var _elements_Principle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9441);
/* harmony import */ var _elements_Requirement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9166);
/* harmony import */ var _elements_RequirementLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1230);
/* harmony import */ var _elements_Scenario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9735);
/* harmony import */ var _elements_Standard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(168);
/* harmony import */ var _elements_StandardIdentifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7683);









const isMainElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Main__WEBPACK_IMPORTED_MODULE_1__["default"] || hasBasicElementProps(element) && isElementType('main', element) && primitiveEq('object', element);
});
const isInfoElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Info__WEBPACK_IMPORTED_MODULE_2__["default"] || hasBasicElementProps(element) && isElementType('info', element) && primitiveEq('object', element);
});
const isPrincipleElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Principle__WEBPACK_IMPORTED_MODULE_3__["default"] || hasBasicElementProps(element) && isElementType('principle', element) && primitiveEq('object', element);
});
const isRequirementElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Requirement__WEBPACK_IMPORTED_MODULE_4__["default"] || hasBasicElementProps(element) && isElementType('requirement', element) && primitiveEq('object', element);
});
const isRequirementLevelElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_RequirementLevel__WEBPACK_IMPORTED_MODULE_5__["default"] || hasBasicElementProps(element) && isElementType('requirementLevel', element) && primitiveEq('string', element);
});
const isScenarioElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Scenario__WEBPACK_IMPORTED_MODULE_6__["default"] || hasBasicElementProps(element) && isElementType('scenario', element) && primitiveEq('object', element);
});
const isStandardElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Standard__WEBPACK_IMPORTED_MODULE_7__["default"] || hasBasicElementProps(element) && isElementType('standard', element) && primitiveEq('object', element);
});
const isStandardIdentifierElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_StandardIdentifier__WEBPACK_IMPORTED_MODULE_8__["default"] || hasBasicElementProps(element) && isElementType('standardIdentifier', element) && primitiveEq('array', element);
});

/***/ }),

/***/ 4754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1865);
/* harmony import */ var _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);


const plugin = () => () => {
  return {
    visitor: {
      OperationElement(element, ...rest) {
        const [,,, ancestors] = rest;
        const parentPathItem = ancestors[ancestors.length - 2];
        const httpMethod = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(element.meta.get('http-method'));
        httpMethod.content = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(httpMethod).toLowerCase();
        const standardIdentifiers = [{
          subject: ['http', 'request', 'url'],
          value: parentPathItem.meta.get('path')
        }, {
          subject: ['http', 'request', 'method'],
          value: httpMethod
        }];
        if (typeof parentPathItem.parameters !== 'undefined' && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__.isArrayElement)(parentPathItem.parameters)) {
          // @ts-ignore
          parentPathItem.parameters.forEach(parameter => {
            if ((0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(parameter.in) && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(parameter.name) && (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(parameter.in) === 'header') {
              standardIdentifiers.push({
                subject: ['http', 'request', 'header'],
                value: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep.safe(parameter.name)
              });
              standardIdentifiers.push({
                subject: ['http', 'message', 'header'],
                value: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep.safe(parameter.name)
              });
            }
          });
        }
        element.setMetaProperty('ads-a-standard-identifier', standardIdentifiers);
      },
      ParameterElement(element) {
        if ((0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(element.in) && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(element.name) && (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(element.in) === 'header') {
          element.setMetaProperty('ads-a-standard-identifier', [{
            subject: ['http', 'request', 'header'],
            value: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep.safe(element.name)
          }, {
            subject: ['http', 'message', 'header'],
            value: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep.safe(element.name)
          }]);
        }
      },
      RequestBodyElement(element) {
        if (typeof element.contentProp === 'undefined' || !(0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_2__.isObjectElement)(element.contentProp)) {
          return;
        }
        const standardIdentifiers = [];
        element.contentProp.forEach((mediaType, key) => {
          standardIdentifiers.push({
            subject: ['http', 'request', 'header'],
            value: new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.StringElement('Content-Type', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(key.meta))
          }, {
            subject: ['http', 'message', 'header'],
            value: new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.StringElement('Content-Type', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(key.meta))
          }, {
            subject: ['http', 'request', 'header', 'Content-Type'],
            value: (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(key)
          }, {
            subject: ['http', 'message', 'header', 'Content-Type'],
            value: (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(key)
          });
        });
        element.setMetaProperty('ads-a-standard-identifier', standardIdentifiers);
      },
      ResponseElement(element) {
        if (!element.meta.hasKey('http-status-code')) return;
        const standardIdentifiers = [{
          subject: ['http', 'response', 'status_code'],
          value: (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(element.meta.get('http-status-code'))
        }];
        element.setMetaProperty('ads-a-standard-identifier', standardIdentifiers);
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1514);
/* harmony import */ var _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);


const plugin = () => () => {
  let operationIdentifiers = [];
  let responseIdentifiers = [];
  return {
    visitor: {
      OperationElement: {
        enter(element, ...rest) {
          const [,,, ancestors] = rest;
          const parentPathItem = ancestors[ancestors.length - 2];
          operationIdentifiers.push(['http', 'transaction'], ['http', 'request'], ['http', 'request', 'url'], ['http', 'request', 'url', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(parentPathItem.meta.get('path'))], ['http', 'request', 'method'], ['http', 'request', 'method', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element.meta.get('http-method')).toLowerCase()]);

          // fold PathItem.parameters to Operation.parameters
          // @ts-ignore
          parentPathItem?.parameters?.forEach(parameter => {
            if ((0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(parameter.in) && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(parameter.name) && (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(parameter.in) === 'header') {
              operationIdentifiers.push(['http', 'request', 'header'], ['http', 'request', 'header', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(parameter.name)], ['http', 'message', 'header'], ['http', 'message', 'header', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(parameter.name)]);
            }
          });
        },
        leave(element) {
          element.setMetaProperty('ads-s-standard-identifier', operationIdentifiers);
          operationIdentifiers = [];
        }
      },
      ParameterElement(element) {
        if ((0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(element.in) && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(element.name) && (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element.in) === 'header') {
          operationIdentifiers.push(['http', 'request', 'header'], ['http', 'request', 'header', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element.name)], ['http', 'message', 'header'], ['http', 'message', 'header', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element.name)]);
        }
      },
      RequestBodyElement(element) {
        if (!(0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isObjectElement)(element.contentProp)) return;
        operationIdentifiers.push(['http', 'request', 'body'], ['http', 'message', 'body']);
        if (typeof element.contentProp !== 'undefined' && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isObjectElement)(element.contentProp)) {
          element.contentProp.forEach(() => {
            operationIdentifiers.push(['http', 'request', 'header'], ['http', 'request', 'header', 'Content-Type'], ['http', 'message', 'header'], ['http', 'message', 'header', 'Content-Type']);
          });
        }
      },
      ResponseElement: {
        enter(element) {
          responseIdentifiers.push(['http', 'response']);
          if (element.meta.hasKey('http-status-code')) {
            const statusCode = String((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element.meta.get('http-status-code')));
            const statusCodeAlias = statusCode.startsWith('2') ? 'success' : statusCode.startsWith('3') ? 'redirect' : statusCode.startsWith('4') ? 'client_error' : statusCode.startsWith('5') ? 'sever_error' : 'unknown';
            responseIdentifiers.push(['http', 'response', 'status_code'], ['http', 'response', 'status_code', statusCode], ['http', 'response', 'status_code', statusCodeAlias]);
          }
          if (typeof element.headers !== 'undefined' && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isObjectElement)(element.headers)) {
            element.headers.forEach((value, key) => {
              const headerName = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
              responseIdentifiers.push(['http', 'response', 'header'], ['http', 'response', 'header', headerName], ['http', 'message', 'header', headerName]);
            });
          }
          if (typeof element.contentProp !== 'undefined' && (0,_swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_1__.isObjectElement)(element.contentProp)) {
            responseIdentifiers.push(['http', 'response', 'body'], ['http', 'message', 'body']);
            element.contentProp.forEach((value, key) => {
              const headerName = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
              responseIdentifiers.push(['http', 'response', 'header'], ['http', 'response', 'header', headerName], ['http', 'message', 'header', headerName]);
            });
          }
        },
        leave(element) {
          element.setMetaProperty('ads-s-standard-identifier', responseIdentifiers);
          responseIdentifiers = [];
        }
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);

/***/ }),

/***/ 2191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7951);
/* harmony import */ var _Visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2746);



/**
 * This visitor is responsible for falling back to current traversed element
 * Given AsyncApi2Visitor expects ObjectElement to be traversed. If
 * different Element is provided FallBackVisitor is responsible to assigning
 * this Element as current element.
 */

class FallbackVisitor extends _Visitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  enter(element) {
    this.element = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackVisitor);

/***/ }),

/***/ 8863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4494);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4864);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4787);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6867);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5956);
/* harmony import */ var _Visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2746);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2191);






/**
 * This is a base class for every visitor that does
 * internal look-ups to retrieve other child visitors.
 */

class SpecificationVisitor extends _Visitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  specObj;
  passingOptionsNames = ['specObj'];
  constructor({
    specObj,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specObj = specObj;
  }
  retrievePassingOptions() {
    return (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(this.passingOptionsNames, this);
  }
  retrieveFixedFields(specPath) {
    const fixedFields = (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(['visitors', ...specPath, 'fixedFields'], this.specObj);
    if (typeof fixedFields === 'object' && fixedFields !== null) {
      return Object.keys(fixedFields);
    }
    return [];
  }
  retrieveVisitor(specPath) {
    if ((0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__["default"], ['visitors', ...specPath], this.specObj)) {
      return (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(['visitors', ...specPath], this.specObj);
    }
    return (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(['visitors', ...specPath, '$visitor'], this.specObj);
  }
  retrieveVisitorInstance(specPath, options = {}) {
    const passingOpts = this.retrievePassingOptions();
    const VisitorClz = this.retrieveVisitor(specPath);
    const visitorOpts = {
      ...passingOpts,
      ...options
    };
    return new VisitorClz(visitorOpts);
  }
  toRefractedElement(specPath, element, options = {}) {
    /**
     * This is `Visitor shortcut`: mechanism for short-circuiting the traversal and replacing
     * it by basic node cloning.
     *
     * Visiting the element is equivalent to cloning it if the prototype of a visitor
     * is the same as the prototype of FallbackVisitor. If that's the case, we can avoid
     * bootstrapping the traversal cycle for fields that don't require any special visiting.
     */
    const visitor = this.retrieveVisitorInstance(specPath, options);
    if (visitor instanceof _FallbackVisitor__WEBPACK_IMPORTED_MODULE_5__["default"] && visitor?.constructor === _FallbackVisitor__WEBPACK_IMPORTED_MODULE_5__["default"]) {
      return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(element);
    }
    (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__.visit)(element, visitor, options);
    return visitor.element;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecificationVisitor);

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2717);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);

class Visitor {
  element;
  constructor(options = {}) {
    Object.assign(this, options);
  }

  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(from, to) {
    if (from.meta.length > 0 || to.meta.length > 0) {
      to.meta = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(to.meta, from.meta);
      if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.hasElementSourceMap)(from)) {
        // avoid deep merging of source maps
        to.meta.set('sourceMap', from.meta.get('sourceMap'));
      }
    }
    if (from.attributes.length > 0 || from.meta.length > 0) {
      to.attributes = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(to.attributes, from.attributes); // eslint-disable-line no-param-reassign
    }
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Visitor);

/***/ }),

/***/ 4720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8863);


class FixedFieldsVisitor extends _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  specPath;
  ignoredFields;
  constructor({
    specPath,
    ignoredFields,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPath = specPath;
    this.ignoredFields = ignoredFields || [];
  }
  ObjectElement(objectElement) {
    const specPath = this.specPath(objectElement);
    const fields = this.retrieveFixedFields(specPath);

    // @ts-ignore
    objectElement.forEach((value, key, memberElement) => {
      if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(key) && fields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) && !this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key))) {
        const fixedFieldElement = this.toRefractedElement([...specPath, 'fixedFields', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key)], value);
        const newMemberElement = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.MemberElement((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(key), fixedFieldElement);
        newMemberElement.classes.push('fixed-field');
        this.copyMetaAndAttributes(memberElement, newMemberElement);
        this.element.content.push(newMemberElement);
      } else if (!this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key))) {
        this.element.content.push((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(memberElement));
      }
    });
    this.copyMetaAndAttributes(objectElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FixedFieldsVisitor);

/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNodeType: () => (/* binding */ getNodeType),
/* harmony export */   keyMap: () => (/* binding */ keyMap)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5956);


// getNodeType :: Node -> String
const getNodeType = element => {
  if (!(0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)) {
    return undefined;
  }
  return `${element.element.charAt(0).toUpperCase() + element.element.slice(1)}Element`;
};
const keyMap = {
  /**
   * API Design Systems 2021-05-07 specification elements.
   */
  MainElement: ['content'],
  InfoElement: ['content'],
  PrincipleElement: ['content'],
  StandardElement: ['content'],
  ScenarioElement: ['content'],
  RequirementElement: ['content'],
  StandardIdentifierElement: ['content'],
  RequirementLevelElement: [],
  ..._swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.keyMapDefault
};

/***/ }),

/***/ 5808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5956);
/* harmony import */ var _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);


/**
 * This file contains logic for translating Standard Identifier to value.
 */

const visitorOptions = {
  keyMap: _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_0__.keyMap,
  nodeTypeGetter: _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_0__.getNodeType
};
const access = (selected, standardIdentifier) => {
  const strStandardIdentifier = String((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(standardIdentifier));
  const values = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.ArrayElement();
  const visitor = {
    enter(element) {
      if (!element.meta.hasKey('ads-a-standard-identifier')) return;
      element.meta.get('ads-a-standard-identifier').content.filter(accessorMapping => {
        return String((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(accessorMapping.get('subject'))) === strStandardIdentifier;
      }).forEach(accessorMapping => {
        values.push(accessorMapping.get('value'));
      });
    }
  };
  (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.visit)(selected, visitor, visitorOptions);
  return values;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (access);

/***/ }),

/***/ 6263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   may: () => (/* binding */ may),
/* harmony export */   must: () => (/* binding */ must)
/* harmony export */ });
const may = (value, values) => {
  if (value === null) return true;
  return values.includes(value);
};
const must = (value, values) => {
  return values.includes(value);
};

/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2898);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5956);
/* harmony import */ var _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);



/**
 * This file contains logic for translating Standard Identifier to list of Operation Elements.
 */

const visitorOptions = {
  keyMap: _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_0__.keyMap,
  nodeTypeGetter: _swagger_api_apidom_ns_openapi_3_1__WEBPACK_IMPORTED_MODULE_0__.getNodeType
};
const select = (openAPIElement, standardIdentifier) => {
  const selected = [];
  const visitor = {
    OperationElement(element) {
      if (!element.meta.hasKey('ads-s-standard-identifier')) return;
      const standardIdentifiers = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(element.meta.get('ads-s-standard-identifier'));
      if ((0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(standardIdentifier), standardIdentifiers)) {
        selected.push(element);
      }
    },
    ResponseElement(element) {
      if (!element.meta.hasKey('ads-s-standard-identifier')) return;
      const standardIdentifiers = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(element.meta.get('ads-s-standard-identifier'));
      if ((0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__["default"])(standardIdentifier), standardIdentifiers)) {
        selected.push(element);
      }
    }
  };
  (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.visit)(openAPIElement, visitor, visitorOptions);
  return selected;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);

/***/ }),

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60);
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4909);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4590);
/* harmony import */ var _accessor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5808);
/* harmony import */ var _requirement_level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6263);





const makeMessage = (value, requirementLevel, standardIdentifier) => {
  const primitiveValue = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  const primitiveStandardIdentifier = JSON.stringify((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(standardIdentifier));
  if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(requirementLevel) === 'may') {
    return `"${primitiveValue}" not allowed for subject ${primitiveStandardIdentifier}`;
  }
  throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('[Requirement levels] other than "may" are not yet implemented.');
};

// @ts-ignore
const makeAnnotation = (message, value, level, standardIdentifier) => {
  const annotation = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.AnnotationElement(message);
  annotation.classes.push(level);
  annotation.attributes.set('value', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(value));
  annotation.attributes.set('standardIdentifier', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(standardIdentifier));
  return annotation;
};
const validateValue = (value, requirement) => {
  const annotations = [];
  const {
    subject
  } = requirement;
  if (typeof requirement.values === 'undefined') return annotations;
  if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(requirement.level) === 'may') {
    const isValid = (0,_requirement_level__WEBPACK_IMPORTED_MODULE_4__.may)((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(value), (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(requirement.values));
    if (!isValid) {
      const message = makeMessage(value, requirement.level, subject);
      const annotation = makeAnnotation(message, value, 'error', subject);
      annotations.push(annotation);
    }
  }
  return annotations;
};
const validateRequirement = (requirement, selected) => {
  const {
    subject
  } = requirement;
  const values = (0,_accessor__WEBPACK_IMPORTED_MODULE_5__["default"])(selected, subject);
  const annotations = [];
  values.forEach(value => {
    annotations.push(...validateValue(value, requirement));
  });
  return annotations;
};
const validateScenario = (scenario, openApiElement) => {
  const annotations = [];
  const {
    when
  } = scenario;
  const selected = (0,_selector__WEBPACK_IMPORTED_MODULE_6__["default"])(openApiElement, when);
  const {
    then: requirements
  } = scenario;
  if (typeof requirements === 'undefined') return annotations;
  selected.forEach(item => {
    // @ts-ignore
    requirements.forEach(requirement => {
      annotations.push(...validateRequirement(requirement, item));
    });
  });
  return annotations;
};
const validate = (mainElement, openApiElement) => {
  const {
    scenarios
  } = mainElement;
  const annotations = [];
  if (typeof scenarios === 'undefined' || !(0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__.isArrayElement)(scenarios)) return [];

  // @ts-ignore
  scenarios.forEach(scenario => {
    annotations.push(...validateScenario(scenario, openApiElement));
  });
  return annotations;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 3103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 5098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(3305),
    hashDelete = __webpack_require__(9361),
    hashGet = __webpack_require__(1112),
    hashHas = __webpack_require__(5276),
    hashSet = __webpack_require__(5071);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 1386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(2393),
    listCacheDelete = __webpack_require__(2049),
    listCacheGet = __webpack_require__(7144),
    listCacheHas = __webpack_require__(7452),
    listCacheSet = __webpack_require__(3964);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 9770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 8250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(9753),
    mapCacheDelete = __webpack_require__(5681),
    mapCacheGet = __webpack_require__(88),
    mapCacheHas = __webpack_require__(4732),
    mapCacheSet = __webpack_require__(9068);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 9413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 4512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 3212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(8250),
    setCacheAdd = __webpack_require__(1877),
    setCacheHas = __webpack_require__(8006);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 1340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386),
    stackClear = __webpack_require__(4103),
    stackDelete = __webpack_require__(1779),
    stackGet = __webpack_require__(4162),
    stackHas = __webpack_require__(7462),
    stackSet = __webpack_require__(6638);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 5650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 1623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 9270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715),
    root = __webpack_require__(8942);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 9847:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(6137),
    isArguments = __webpack_require__(3283),
    isArray = __webpack_require__(3142),
    isBuffer = __webpack_require__(5853),
    isIndex = __webpack_require__(9632),
    isTypedArray = __webpack_require__(8666);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 1129:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 6465:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 7034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(6285);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 8244:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(1129),
    isArray = __webpack_require__(3142);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 7379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650),
    getRawTag = __webpack_require__(8870),
    objectToString = __webpack_require__(9005);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 6027:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 4687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(353),
    isObjectLike = __webpack_require__(547);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(1340),
    equalArrays = __webpack_require__(3934),
    equalByTag = __webpack_require__(8861),
    equalObjects = __webpack_require__(1182),
    getTag = __webpack_require__(8486),
    isArray = __webpack_require__(3142),
    isBuffer = __webpack_require__(5853),
    isTypedArray = __webpack_require__(8666);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 9624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3655),
    isMasked = __webpack_require__(4759),
    isObject = __webpack_require__(1580),
    toSource = __webpack_require__(4066);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isLength = __webpack_require__(5387),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(4882),
    nativeKeys = __webpack_require__(8121);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 6137:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 9460:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 5568:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 1950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8942);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 3934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(3212),
    arraySome = __webpack_require__(6465),
    cacheHas = __webpack_require__(5568);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 8861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650),
    Uint8Array = __webpack_require__(1623),
    eq = __webpack_require__(6285),
    equalArrays = __webpack_require__(3934),
    mapToArray = __webpack_require__(5894),
    setToArray = __webpack_require__(9828);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 1182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(393);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 4967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(8244),
    getSymbols = __webpack_require__(7979),
    keys = __webpack_require__(1211);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 4700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(9067);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 4715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(9624),
    getValue = __webpack_require__(155);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 8870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(5650);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 7979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(9847),
    stubArray = __webpack_require__(9306);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 8486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(3103),
    Map = __webpack_require__(9770),
    Promise = __webpack_require__(9413),
    Set = __webpack_require__(4512),
    WeakMap = __webpack_require__(9270),
    baseGetTag = __webpack_require__(7379),
    toSource = __webpack_require__(4066);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 155:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 3305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 9361:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 1112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 5276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 5071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4497);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 9632:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 9067:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 4759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(1950);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 4882:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 2393:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 2049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 7144:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 7452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 3964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(7034);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 9753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(5098),
    ListCache = __webpack_require__(1386),
    Map = __webpack_require__(9770);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 5681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 88:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 4732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 9068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(4700);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 5894:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 4497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(4715);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 8121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(3766);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 2306:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(4967);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 9005:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 3766:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 8942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(4967);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 1877:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 8006:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 9828:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 4103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 1779:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 4162:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 7462:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 6638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386),
    Map = __webpack_require__(9770),
    MapCache = __webpack_require__(8250);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 4066:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 6285:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 3283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(6027),
    isObjectLike = __webpack_require__(547);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 3142:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 6529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3655),
    isLength = __webpack_require__(5387);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 2563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),

/***/ 5853:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(8942),
    stubFalse = __webpack_require__(4772);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 6343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(4687);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 3655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObject = __webpack_require__(1580);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 5387:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 9310:
/***/ ((module) => {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),

/***/ 986:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 1580:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 547:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 8138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(7379),
    isArray = __webpack_require__(3142),
    isObjectLike = __webpack_require__(547);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 8666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(674),
    baseUnary = __webpack_require__(9460),
    nodeUtil = __webpack_require__(2306);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 1211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(358),
    baseKeys = __webpack_require__(195),
    isArrayLike = __webpack_require__(6529);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 1517:
/***/ ((module) => {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),

/***/ 9306:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 4772:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 4123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(1517);

// Coerces an a parameter into a callback for matching elements.
// This accepts an element name, an element type and returns a
// callback to match for those elements.
function coerceElementMatchingCallback(value) {
  // Element Name
  if (typeof value === 'string') {
    return element => element.element === value;
  }

  // Element Type
  if (value.constructor && value.extend) {
    return element => element instanceof value;
  }

  return value;
}

/**
 * @class
 *
 * @param {Element[]} elements
 *
 * @property {Element[]} elements
 */
class ArraySlice {
  constructor(elements) {
    this.elements = elements || [];
  }

  /**
   * @returns {Array}
   */
  toValue() {
    return this.elements.map(element => element.toValue());
  }

  // High Order Functions

  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array} A new array with each element being the result of the callback function
   */
  map(callback, thisArg) {
    return this.elements.map(callback, thisArg);
  }

  /**
   * Maps and then flattens the results.
   * @param callback - Function to execute for each element.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array}
   */
  flatMap(callback, thisArg) {
    return this
      .map(callback, thisArg)
      .reduce((a, b) => a.concat(b), []);
  }

  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(transform, thisArg) {
    const results = [];

    this.forEach((element) => {
      const result = transform.bind(thisArg)(element);

      if (result) {
        results.push(result);
      }
    });

    return results;
  }

  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  filter(callback, thisArg) {
    callback = coerceElementMatchingCallback(callback);
    return new ArraySlice(this.elements.filter(callback, thisArg));
  }

  /**
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   * @memberof ArraySlice.prototype
   */
  reject(callback, thisArg) {
    callback = coerceElementMatchingCallback(callback);
    return new ArraySlice(this.elements.filter(negate(callback), thisArg));
  }

  /**
   * Returns the first element in the array that satisfies the given value
   * @param callback - Function to execute for each element. This may be a callback, an element name or an element class.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  find(callback, thisArg) {
    callback = coerceElementMatchingCallback(callback);
    return this.elements.find(callback, thisArg);
  }

  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArraySlice.prototype
   */
  forEach(callback, thisArg) {
    this.elements.forEach(callback, thisArg);
  }

  /**
   * @param callback - Function to execute for each element
   * @param initialValue
   * @memberof ArraySlice.prototype
   */
  reduce(callback, initialValue) {
    return this.elements.reduce(callback, initialValue);
  }

  /**
   * @param value
   * @returns {boolean}
   * @memberof ArraySlice.prototype
   */
  includes(value) {
    return this.elements.some(element => element.equals(value));
  }

  // Mutation

  /**
   * Removes the first element from the slice
   * @returns {Element} The removed element or undefined if the slice is empty
   * @memberof ArraySlice.prototype
   */
  shift() {
    return this.elements.shift();
  }

  /**
   * Adds the given element to the begining of the slice
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  unshift(value) {
    this.elements.unshift(this.refract(value));
  }

  /**
   * Adds the given element to the end of the slice
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  push(value) {
    this.elements.push(this.refract(value));
    return this;
  }

  /**
   * @parameter {Element} value
   * @memberof ArraySlice.prototype
   */
  add(value) {
    this.push(value);
  }

  // Accessors

  /**
   * @parameter {number} index
   * @returns {Element}
   * @memberof ArraySlice.prototype
   */
  get(index) {
    return this.elements[index];
  }

  /**
   * @parameter {number} index
   * @memberof ArraySlice.prototype
   */
  getValue(index) {
    const element = this.elements[index];

    if (element) {
      return element.toValue();
    }

    return undefined;
  }

  /**
   * Returns the number of elements in the slice
   * @type number
   */
  get length() {
    return this.elements.length;
  }

  /**
   * Returns whether the slice is empty
   * @type boolean
   */
  get isEmpty() {
    return this.elements.length === 0;
  }

  /**
   * Returns the first element in the slice or undefined if the slice is empty
   * @type Element
   */
  get first() {
    return this.elements[0];
  }
}

if (typeof Symbol !== 'undefined') {
  ArraySlice.prototype[Symbol.iterator] = function symbol() {
    return this.elements[Symbol.iterator]();
  };
}

module.exports = ArraySlice;


/***/ }),

/***/ 2322:
/***/ ((module) => {

/**
 * @class
 *
 * @property {Element} key
 * @property {Element} value
 */
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  /**
   * @returns {KeyValuePair}
   */
  clone() {
    const clone = new KeyValuePair();

    if (this.key) {
      clone.key = this.key.clone();
    }

    if (this.value) {
      clone.value = this.value.clone();
    }

    return clone;
  }
}

module.exports = KeyValuePair;


/***/ }),

/***/ 5735:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isNull = __webpack_require__(9310);
const isString = __webpack_require__(8138);
const isNumber = __webpack_require__(986);
const isBoolean = __webpack_require__(2563);
const isObject = __webpack_require__(1580);

const JSONSerialiser = __webpack_require__(394);
const elements = __webpack_require__(7547);

/**
 * @class
 *
 * A refract element implementation with an extensible namespace, able to
 * load other namespaces into it.
 *
 * The namespace allows you to register your own classes to be instantiated
 * when a particular refract element is encountered, and allows you to specify
 * which elements get instantiated for existing Javascript objects.
 */
class Namespace {
  constructor(options) {
    this.elementMap = {};
    this.elementDetection = [];
    this.Element = elements.Element;
    this.KeyValuePair = elements.KeyValuePair;

    if (!options || !options.noDefault) {
      this.useDefault();
    }

    // These provide the defaults for new elements.
    this._attributeElementKeys = [];
    this._attributeElementArrayKeys = [];
  }

  /**
   * Use a namespace plugin or load a generic plugin.
   *
   * @param plugin
   */
  use(plugin) {
    if (plugin.namespace) {
      plugin.namespace({ base: this });
    }
    if (plugin.load) {
      plugin.load({ base: this });
    }
    return this;
  }

  /*
   * Use the default namespace. This preloads all the default elements
   * into this registry instance.
   */
  useDefault() {
    // Set up classes for default elements
    this
      .register('null', elements.NullElement)
      .register('string', elements.StringElement)
      .register('number', elements.NumberElement)
      .register('boolean', elements.BooleanElement)
      .register('array', elements.ArrayElement)
      .register('object', elements.ObjectElement)
      .register('member', elements.MemberElement)
      .register('ref', elements.RefElement)
      .register('link', elements.LinkElement);

    // Add instance detection functions to convert existing objects into
    // the corresponding refract elements.
    this
      .detect(isNull, elements.NullElement, false)
      .detect(isString, elements.StringElement, false)
      .detect(isNumber, elements.NumberElement, false)
      .detect(isBoolean, elements.BooleanElement, false)
      .detect(Array.isArray, elements.ArrayElement, false)
      .detect(isObject, elements.ObjectElement, false);

    return this;
  }

  /**
   * Register a new element class for an element.
   *
   * @param {string} name
   * @param elementClass
   */
  register(name, ElementClass) {
    this._elements = undefined;
    this.elementMap[name] = ElementClass;
    return this;
  }

  /**
   * Unregister a previously registered class for an element.
   *
   * @param {string} name
   */
  unregister(name) {
    this._elements = undefined;
    delete this.elementMap[name];
    return this;
  }

  /*
   * Add a new detection function to determine which element
   * class to use when converting existing js instances into
   * refract element.
   */
  detect(test, ElementClass, givenPrepend) {
    const prepend = givenPrepend === undefined ? true : givenPrepend;

    if (prepend) {
      this.elementDetection.unshift([test, ElementClass]);
    } else {
      this.elementDetection.push([test, ElementClass]);
    }

    return this;
  }

  /*
   * Convert an existing Javascript object into refract element instances, which
   * can be further processed or serialized into refract.
   * If the item passed in is already refracted, then it is returned
   * unmodified.
   */
  toElement(value) {
    if (value instanceof this.Element) { return value; }

    let element;

    for (let i = 0; i < this.elementDetection.length; i += 1) {
      const test = this.elementDetection[i][0];
      const ElementClass = this.elementDetection[i][1];

      if (test(value)) {
        element = new ElementClass(value);
        break;
      }
    }

    return element;
  }

  /*
   * Get an element class given an element name.
   */
  getElementClass(element) {
    const ElementClass = this.elementMap[element];

    if (ElementClass === undefined) {
      // Fall back to the base element. We may not know what
      // to do with the `content`, but downstream software
      // may know.
      return this.Element;
    }

    return ElementClass;
  }

  /*
   * Convert a refract document into refract element instances.
   */
  fromRefract(doc) {
    return this.serialiser.deserialise(doc);
  }

  /*
   * Convert an element to a Refracted JSON object.
   */
  toRefract(element) {
    return this.serialiser.serialise(element);
  }

  /*
   * Get an object that contains all registered element classes, where
   * the key is the PascalCased element name and the value is the class.
   */
  get elements() {
    if (this._elements === undefined) {
      this._elements = {
        Element: this.Element,
      };

      Object.keys(this.elementMap).forEach((name) => {
        // Currently, all registered element types use a camelCaseName.
        // Converting to PascalCase is as simple as upper-casing the first
        // letter.
        const pascal = name[0].toUpperCase() + name.substr(1);
        this._elements[pascal] = this.elementMap[name];
      });
    }

    return this._elements;
  }

  /**
   * Convinience method for getting a JSON Serialiser configured with the
   * current namespace
   *
   * @type JSONSerialiser
   * @readonly
   *
   * @memberof Namespace.prototype
   */
  get serialiser() {
    return new JSONSerialiser(this);
  }
}

JSONSerialiser.prototype.Namespace = Namespace;

module.exports = Namespace;


/***/ }),

/***/ 3311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(1517);
const ArraySlice = __webpack_require__(4123);

/**
 */
class ObjectSlice extends ArraySlice {
  map(callback, thisArg) {
    return this.elements.map(member => callback.bind(thisArg)(member.value, member.key, member));
  }

  filter(callback, thisArg) {
    return new ObjectSlice(this.elements.filter(member => callback.bind(thisArg)(member.value, member.key, member)));
  }

  reject(callback, thisArg) {
    return this.filter(negate(callback.bind(thisArg)));
  }

  forEach(callback, thisArg) {
    return this.elements.forEach((member, index) => { callback.bind(thisArg)(member.value, member.key, member, index); });
  }

  /**
   * @returns {array}
   */
  keys() {
    return this.map((value, key) => key.toValue());
  }

  /**
   * @returns {array}
   */
  values() {
    return this.map(value => value.toValue());
  }
}

module.exports = ObjectSlice;


/***/ }),

/***/ 7547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);
const NullElement = __webpack_require__(3004);
const StringElement = __webpack_require__(8712);
const NumberElement = __webpack_require__(2536);
const BooleanElement = __webpack_require__(2555);
const ArrayElement = __webpack_require__(9796);
const MemberElement = __webpack_require__(7309);
const ObjectElement = __webpack_require__(5642);
const LinkElement = __webpack_require__(9620);
const RefElement = __webpack_require__(593);

const ArraySlice = __webpack_require__(4123);
const ObjectSlice = __webpack_require__(3311);

const KeyValuePair = __webpack_require__(2322);

/**
 * Refracts a JSON type to minim elements
 * @param value
 * @returns {Element}
 */
function refract(value) {
  if (value instanceof Element) {
    return value;
  }

  if (typeof value === 'string') {
    return new StringElement(value);
  }

  if (typeof value === 'number') {
    return new NumberElement(value);
  }

  if (typeof value === 'boolean') {
    return new BooleanElement(value);
  }

  if (value === null) {
    return new NullElement();
  }

  if (Array.isArray(value)) {
    return new ArrayElement(value.map(refract));
  }

  if (typeof value === 'object') {
    const element = new ObjectElement(value);
    return element;
  }

  return value;
}

Element.prototype.ObjectElement = ObjectElement;
Element.prototype.RefElement = RefElement;
Element.prototype.MemberElement = MemberElement;

Element.prototype.refract = refract;
ArraySlice.prototype.refract = refract;

/**
 * Contains all of the element classes, and related structures and methods
 * for handling with element instances.
 */
module.exports = {
  Element,
  NullElement,
  StringElement,
  NumberElement,
  BooleanElement,
  ArrayElement,
  MemberElement,
  ObjectElement,
  LinkElement,
  RefElement,

  refract,

  ArraySlice,
  ObjectSlice,
  KeyValuePair,
};


/***/ }),

/***/ 9620:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);

/** Hyperlinking MAY be used to link to other resources, provide links to
 * instructions on how to process a given element (by way of a profile or
 * other means), and may be used to provide meta data about the element in
 * which it's found. The meaning and purpose of the hyperlink is defined by
 * the link relation according to RFC 5988.
 *
 * @class LinkElement
 *
 * @param content
 * @param meta
 * @param attributes
 */
module.exports = class LinkElement extends Element {
  constructor(content, meta, attributes) {
    super(content || [], meta, attributes);
    this.element = 'link';
  }

  /**
   * The relation identifier for the link, as defined in RFC 5988.
   * @type StringElement
   */
  get relation() {
    return this.attributes.get('relation');
  }

  set relation(relation) {
    this.attributes.set('relation', relation);
  }

  /**
   * The URI for the given link.
   * @type StringElement
   */
  get href() {
    return this.attributes.get('href');
  }

  set href(href) {
    this.attributes.set('href', href);
  }
};


/***/ }),

/***/ 593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);

/**
 * @class RefElement
 *
 * @param content
 * @param meta
 * @param attributes
 *
 * @extends Element
 */
module.exports = class RefElement extends Element {
  constructor(content, meta, attributes) {
    super(content || [], meta, attributes);
    this.element = 'ref';

    if (!this.path) {
      this.path = 'element';
    }
  }

  /**
   * Path of referenced element to transclude instead of element itself.
   * @type StringElement
   * @default element
   */
  get path() {
    return this.attributes.get('path');
  }

  set path(newValue) {
    this.attributes.set('path', newValue);
  }
};


/***/ }),

/***/ 8326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Namespace = __webpack_require__(5735);
const elements = __webpack_require__(7547);

// Direct access to the Namespace class
exports.Namespace = Namespace;

// Special constructor for the Namespace class
exports.namespace = function namespace(options) {
  return new Namespace(options);
};

exports.KeyValuePair = __webpack_require__(2322);

exports.ArraySlice = elements.ArraySlice;
exports.ObjectSlice = elements.ObjectSlice;

exports.Element = elements.Element;
exports.StringElement = elements.StringElement;
exports.NumberElement = elements.NumberElement;
exports.BooleanElement = elements.BooleanElement;
exports.NullElement = elements.NullElement;
exports.ArrayElement = elements.ArrayElement;
exports.ObjectElement = elements.ObjectElement;
exports.MemberElement = elements.MemberElement;
exports.RefElement = elements.RefElement;
exports.LinkElement = elements.LinkElement;

exports.refract = elements.refract;

exports.JSONSerialiser = __webpack_require__(394);
exports.JSON06Serialiser = __webpack_require__(3148);


/***/ }),

/***/ 9796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(1517);
const Element = __webpack_require__(8631);
const ArraySlice = __webpack_require__(4123);

/**
 * @class
 *
 * @param {Element[]} content
 * @param meta
 * @param attributes
 */
class ArrayElement extends Element {
  constructor(content, meta, attributes) {
    super(content || [], meta, attributes);
    this.element = 'array';
  }

  primitive() {
    return 'array';
  }

  /**
   * @returns {Element}
   */
  get(index) {
    return this.content[index];
  }

  /**
   * Helper for returning the value of an item
   * This works for both ArrayElement and ObjectElement instances
   */
  getValue(indexOrKey) {
    const item = this.get(indexOrKey);

    if (item) {
      return item.toValue();
    }

    return undefined;
  }

  /**
   * @returns {Element}
   */
  getIndex(index) {
    return this.content[index];
  }

  set(index, value) {
    this.content[index] = this.refract(value);
    return this;
  }

  remove(index) {
    const removed = this.content.splice(index, 1);

    if (removed.length) {
      return removed[0];
    }

    return null;
  }

  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   */
  map(callback, thisArg) {
    return this.content.map(callback, thisArg);
  }

  /**
   * Maps and then flattens the results.
   * @param callback - Function to execute for each element.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {array}
   */
  flatMap(callback, thisArg) {
    return this
      .map(callback, thisArg)
      .reduce((a, b) => a.concat(b), []);
  }

  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts an element of this array as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArrayElement.prototype
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(transform, thisArg) {
    const results = [];

    this.forEach((element) => {
      const result = transform.bind(thisArg)(element);

      if (result) {
        results.push(result);
      }
    });

    return results;
  }

  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  filter(callback, thisArg) {
    return new ArraySlice(this.content.filter(callback, thisArg));
  }

  /**
   * @param callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns {ArraySlice}
   */
  reject(callback, thisArg) {
    return this.filter(negate(callback), thisArg);
  }

  /**
   * This is a reduce function specifically for Minim arrays and objects. It
   * allows for returning normal values or Minim instances, so it converts any
   * primitives on each step.
   */
  reduce(callback, initialValue) {
    let startIndex;
    let memo;

    // Allows for defining a starting value of the reduce
    if (initialValue !== undefined) {
      startIndex = 0;
      memo = this.refract(initialValue);
    } else {
      startIndex = 1;
      // Object Element content items are member elements. Because of this,
      // the memo should start out as the member value rather than the
      // actual member itself.
      memo = this.primitive() === 'object' ? this.first.value : this.first;
    }

    // Sending each function call to the registry allows for passing Minim
    // instances through the function return. This means you can return
    // primitive values or return Minim instances and reduce will still work.
    for (let i = startIndex; i < this.length; i += 1) {
      const item = this.content[i];

      if (this.primitive() === 'object') {
        memo = this.refract(callback(memo, item.value, item.key, item, this));
      } else {
        memo = this.refract(callback(memo, item, i, this));
      }
    }

    return memo;
  }

  /**
   * @callback forEachCallback
   * @param {Element} currentValue
   * @param {NumberElement} index
   */

  /**
   * @param {forEachCallback} callback - Function to execute for each element
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @memberof ArrayElement.prototype
   */
  forEach(callback, thisArg) {
    this.content.forEach((item, index) => {
      callback.bind(thisArg)(item, this.refract(index));
    });
  }

  /**
   * @returns {Element}
   */
  shift() {
    return this.content.shift();
  }

  /**
   * @param value
   */
  unshift(value) {
    this.content.unshift(this.refract(value));
  }

  /**
   * @param value
   */
  push(value) {
    this.content.push(this.refract(value));
    return this;
  }

  /**
   * @param value
   */
  add(value) {
    this.push(value);
  }

  /**
   * Recusively search all descendents using a condition function.
   * @returns {Element[]}
   */
  findElements(condition, givenOptions) {
    const options = givenOptions || {};
    const recursive = !!options.recursive;
    const results = options.results === undefined ? [] : options.results;

    // The forEach method for Object Elements returns value, key, and member.
    // This passes those along to the condition function below.
    this.forEach((item, keyOrIndex, member) => {
      // We use duck-typing here to support any registered class that
      // may contain other elements.
      if (recursive && (item.findElements !== undefined)) {
        item.findElements(condition, {
          results,
          recursive,
        });
      }

      if (condition(item, keyOrIndex, member)) {
        results.push(item);
      }
    });

    return results;
  }

  /**
   * Recusively search all descendents using a condition function.
   * @param condition
   * @returns {ArraySlice}
   */
  find(condition) {
    return new ArraySlice(this.findElements(condition, { recursive: true }));
  }

  /**
   * @param {string} element
   * @returns {ArraySlice}
   */
  findByElement(element) {
    return this.find(item => item.element === element);
  }

  /**
   * @param {string} className
   * @returns {ArraySlice}
   * @memberof ArrayElement.prototype
   */
  findByClass(className) {
    return this.find(item => item.classes.includes(className));
  }

  /**
   * Search the tree recursively and find the element with the matching ID
   * @param {string} id
   * @returns {Element}
   * @memberof ArrayElement.prototype
   */
  getById(id) {
    return this.find(item => item.id.toValue() === id).first;
  }

  /**
   * Looks for matching children using deep equality
   * @param value
   * @returns {boolean}
   */
  includes(value) {
    return this.content.some(element => element.equals(value));
  }

  /**
   * Looks for matching children using deep equality
   * @param value
   * @returns {boolean}
   * @see includes
   * @deprecated method was replaced by includes
   */
  contains(value) {
    return this.includes(value);
  }

  // Fantasy Land

  /**
   * @returns {ArrayElement} An empty array element
   */
  empty() {
    return new this.constructor([]);
  }

  ['fantasy-land/empty']() {
    return this.empty();
  }

  /**
   * @param {ArrayElement} other
   * @returns {ArrayElement}
   */
  concat(other) {
    return new this.constructor(this.content.concat(other.content));
  }

  ['fantasy-land/concat'](other) {
    return this.concat(other);
  }

  ['fantasy-land/map'](transform) {
    return new this.constructor(this.map(transform));
  }

  ['fantasy-land/chain'](transform) {
    return this
      .map(element => transform(element), this)
      .reduce((a, b) => a.concat(b), this.empty());
  }

  ['fantasy-land/filter'](callback) {
    return new this.constructor(this.content.filter(callback));
  }

  ['fantasy-land/reduce'](transform, initialValue) {
    return this.content.reduce(transform, initialValue);
  }

  /**
   * Returns the length of the collection
   * @type number
   */
  get length() {
    return this.content.length;
  }

  /**
   * Returns whether the collection is empty
   * @type boolean
   */
  get isEmpty() {
    return this.content.length === 0;
  }

  /**
   * Return the first item in the collection
   * @type Element
   */
  get first() {
    return this.getIndex(0);
  }

  /**
   * Return the second item in the collection
   * @type Element
   */
  get second() {
    return this.getIndex(1);
  }

  /**
   * Return the last item in the collection
   * @type Element
   */
  get last() {
    return this.getIndex(this.length - 1);
  }
}

/**
 * @returns {ArrayElement} An empty array element
 */
ArrayElement.empty = function empty() {
  return new this();
};

ArrayElement['fantasy-land/empty'] = ArrayElement.empty;

if (typeof Symbol !== 'undefined') {
  ArrayElement.prototype[Symbol.iterator] = function symbol() {
    return this.content[Symbol.iterator]();
  };
}

module.exports = ArrayElement;


/***/ }),

/***/ 2555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);

/**
 * @class BooleanElement
 *
 * @param {boolean} content
 * @param meta
 * @param attributes
 */
module.exports = class BooleanElement extends Element {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'boolean';
  }

  primitive() {
    return 'boolean';
  }
};


/***/ }),

/***/ 8631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isEqual = __webpack_require__(6343);
const KeyValuePair = __webpack_require__(2322);
const ArraySlice = __webpack_require__(4123);

/**
 * @class
 *
 * @param content
 * @param meta
 * @param attributes
 *
 * @property {string} element
 */
class Element {
  constructor(content, meta, attributes) {
    // Lazy load this.meta and this.attributes because it's a Minim element
    // Otherwise, we get into circuluar calls
    if (meta) {
      this.meta = meta;
    }

    if (attributes) {
      this.attributes = attributes;
    }

    this.content = content;
  }

  /**
   * Freezes the element to prevent any mutation.
   * A frozen element will add `parent` property to every child element
   * to allow traversing up the element tree.
   */
  freeze() {
    if (Object.isFrozen(this)) {
      return;
    }

    if (this._meta) {
      this.meta.parent = this;
      this.meta.freeze();
    }

    if (this._attributes) {
      this.attributes.parent = this;
      this.attributes.freeze();
    }

    this.children.forEach((element) => {
      element.parent = this;
      element.freeze();
    }, this);

    if (this.content && Array.isArray(this.content)) {
      Object.freeze(this.content);
    }

    Object.freeze(this);
  }

  primitive() {

  }

  /**
   * Creates a deep clone of the instance
   */
  clone() {
    const copy = new this.constructor();

    copy.element = this.element;

    if (this.meta.length) {
      copy._meta = this.meta.clone();
    }

    if (this.attributes.length) {
      copy._attributes = this.attributes.clone();
    }

    if (this.content) {
      if (this.content.clone) {
        copy.content = this.content.clone();
      } else if (Array.isArray(this.content)) {
        copy.content = this.content.map(element => element.clone());
      } else {
        copy.content = this.content;
      }
    } else {
      copy.content = this.content;
    }

    return copy;
  }

  /**
   */
  toValue() {
    if (this.content instanceof Element) {
      return this.content.toValue();
    }

    if (this.content instanceof KeyValuePair) {
      return {
        key: this.content.key.toValue(),
        value: this.content.value ? this.content.value.toValue() : undefined,
      };
    }

    if (this.content && this.content.map) {
      return this.content.map(element => element.toValue(), this);
    }

    return this.content;
  }

  /**
   * Creates a reference pointing at the Element
   * @returns {RefElement}
   * @memberof Element.prototype
   */
  toRef(path) {
    if (this.id.toValue() === '') {
      throw Error('Cannot create reference to an element that does not contain an ID');
    }

    const ref = new this.RefElement(this.id.toValue());

    if (path) {
      ref.path = path;
    }

    return ref;
  }

  /**
   * Finds the given elements in the element tree.
   * When providing multiple element names, you must first freeze the element.
   *
   * @param names {...elementNames}
   * @returns {ArraySlice}
   */
  findRecursive(...elementNames) {
    if (arguments.length > 1 && !this.isFrozen) {
      throw new Error('Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`');
    }

    const elementName = elementNames.pop();
    let elements = new ArraySlice();

    const append = (array, element) => {
      array.push(element);
      return array;
    };

    // Checks the given element and appends element/sub-elements
    // that match element name to given array
    const checkElement = (array, element) => {
      if (element.element === elementName) {
        array.push(element);
      }

      const items = element.findRecursive(elementName);
      if (items) {
        items.reduce(append, array);
      }

      if (element.content instanceof KeyValuePair) {
        if (element.content.key) {
          checkElement(array, element.content.key);
        }

        if (element.content.value) {
          checkElement(array, element.content.value);
        }
      }

      return array;
    };

    if (this.content) {
      // Direct Element
      if (this.content.element) {
        checkElement(elements, this.content);
      }

      // Element Array
      if (Array.isArray(this.content)) {
        this.content.reduce(checkElement, elements);
      }
    }

    if (!elementNames.isEmpty) {
      elements = elements.filter((element) => {
        let parentElements = element.parents.map(e => e.element);

        // eslint-disable-next-line no-restricted-syntax
        for (const namesIndex in elementNames) {
          const name = elementNames[namesIndex];
          const index = parentElements.indexOf(name);

          if (index !== -1) {
            parentElements = parentElements.splice(0, index);
          } else {
            return false;
          }
        }

        return true;
      });
    }

    return elements;
  }

  set(content) {
    this.content = content;
    return this;
  }

  equals(value) {
    return isEqual(this.toValue(), value);
  }

  getMetaProperty(name, value) {
    if (!this.meta.hasKey(name)) {
      if (this.isFrozen) {
        const element = this.refract(value);
        element.freeze();
        return element;
      }

      this.meta.set(name, value);
    }

    return this.meta.get(name);
  }

  setMetaProperty(name, value) {
    this.meta.set(name, value);
  }

  /**
   * @type String
   */
  get element() {
    // Returns 'element' so we don't have undefined as element
    return this._storedElement || 'element';
  }

  set element(element) {
    this._storedElement = element;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    if (value instanceof Element) {
      this._content = value;
    } else if (value instanceof ArraySlice) {
      this.content = value.elements;
    } else if (
      typeof value == 'string'
      || typeof value == 'number'
      || typeof value == 'boolean'
      || value === 'null'
      || value == undefined
    ) {
      // Primitive Values
      this._content = value;
    } else if (value instanceof KeyValuePair) {
      this._content = value;
    } else if (Array.isArray(value)) {
      this._content = value.map(this.refract);
    } else if (typeof value === 'object') {
      this._content = Object.keys(value).map(key => new this.MemberElement(key, value[key]));
    } else {
      throw new Error('Cannot set content to given value');
    }
  }

  /**
   * @type ObjectElement
   */
  get meta() {
    if (!this._meta) {
      if (this.isFrozen) {
        const meta = new this.ObjectElement();
        meta.freeze();
        return meta;
      }

      this._meta = new this.ObjectElement();
    }

    return this._meta;
  }

  set meta(value) {
    if (value instanceof this.ObjectElement) {
      this._meta = value;
    } else {
      this.meta.set(value || {});
    }
  }

  /**
   * The attributes property defines attributes about the given instance
   * of the element, as specified by the element property.
   *
   * @type ObjectElement
   */
  get attributes() {
    if (!this._attributes) {
      if (this.isFrozen) {
        const meta = new this.ObjectElement();
        meta.freeze();
        return meta;
      }

      this._attributes = new this.ObjectElement();
    }

    return this._attributes;
  }

  set attributes(value) {
    if (value instanceof this.ObjectElement) {
      this._attributes = value;
    } else {
      this.attributes.set(value || {});
    }
  }

  /**
   * Unique Identifier, MUST be unique throughout an entire element tree.
   * @type StringElement
   */
  get id() {
    return this.getMetaProperty('id', '');
  }

  set id(element) {
    this.setMetaProperty('id', element);
  }

  /**
   * @type ArrayElement
   */
  get classes() {
    return this.getMetaProperty('classes', []);
  }

  set classes(element) {
    this.setMetaProperty('classes', element);
  }

  /**
   * Human-readable title of element
   * @type StringElement
   */
  get title() {
    return this.getMetaProperty('title', '');
  }

  set title(element) {
    this.setMetaProperty('title', element);
  }

  /**
   * Human-readable description of element
   * @type StringElement
   */
  get description() {
    return this.getMetaProperty('description', '');
  }

  set description(element) {
    this.setMetaProperty('description', element);
  }

  /**
   * @type ArrayElement
   */
  get links() {
    return this.getMetaProperty('links', []);
  }

  set links(element) {
    this.setMetaProperty('links', element);
  }

  /**
   * Returns whether the element is frozen.
   * @type boolean
   * @see freeze
   */
  get isFrozen() {
    return Object.isFrozen(this);
  }

  /**
   * Returns all of the parent elements.
   * @type ArraySlice
   */
  get parents() {
    let { parent } = this;
    const parents = new ArraySlice();

    while (parent) {
      parents.push(parent);

      // eslint-disable-next-line prefer-destructuring
      parent = parent.parent;
    }

    return parents;
  }

  /**
   * Returns all of the children elements found within the element.
   * @type ArraySlice
   * @see recursiveChildren
   */
  get children() {
    if (Array.isArray(this.content)) {
      return new ArraySlice(this.content);
    }

    if (this.content instanceof KeyValuePair) {
      const children = new ArraySlice([this.content.key]);

      if (this.content.value) {
        children.push(this.content.value);
      }

      return children;
    }

    if (this.content instanceof Element) {
      return new ArraySlice([this.content]);
    }

    return new ArraySlice();
  }

  /**
  * Returns all of the children elements found within the element recursively.
  * @type ArraySlice
  * @see children
  */
  get recursiveChildren() {
    const children = new ArraySlice();

    this.children.forEach((element) => {
      children.push(element);

      element.recursiveChildren.forEach((child) => {
        children.push(child);
      });
    });

    return children;
  }
}

module.exports = Element;


/***/ }),

/***/ 7309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const KeyValuePair = __webpack_require__(2322);
const Element = __webpack_require__(8631);

/**
 * @class MemberElement
 *
 * @param {Element} key
 * @param {Element} value
 * @param meta
 * @param attributes
 */
module.exports = class MemberElement extends Element {
  constructor(key, value, meta, attributes) {
    super(new KeyValuePair(), meta, attributes);

    this.element = 'member';
    this.key = key;
    this.value = value;
  }

  /**
   * @type Element
   */
  get key() {
    return this.content.key;
  }

  set key(key) {
    this.content.key = this.refract(key);
  }

  /**
   * @type Element
   */
  get value() {
    return this.content.value;
  }

  set value(value) {
    this.content.value = this.refract(value);
  }
};


/***/ }),

/***/ 3004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);

/**
 */
class NullElement extends Element {
  constructor(content, meta, attributes) {
    super(content || null, meta, attributes);
    this.element = 'null';
  }

  primitive() {
    return 'null';
  }

  set() {
    return new Error('Cannot set the value of null');
  }
}

module.exports = NullElement;


/***/ }),

/***/ 2536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);

/**
 * @class NumberElement
 *
 * @param {number} content
 * @param meta
 * @param attributes
 */
module.exports = class NumberElement extends Element {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'number';
  }

  primitive() {
    return 'number';
  }
};


/***/ }),

/***/ 5642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(1517);
const isObject = __webpack_require__(1580);

const ArrayElement = __webpack_require__(9796);
const MemberElement = __webpack_require__(7309);
const ObjectSlice = __webpack_require__(3311);

/**
 * @class
 *
 * @param content
 * @param meta
 * @param attributes
 */
class ObjectElement extends ArrayElement {
  constructor(content, meta, attributes) {
    super(content || [], meta, attributes);
    this.element = 'object';
  }

  primitive() {
    return 'object';
  }

  toValue() {
    return this.content.reduce((results, el) => {
      results[el.key.toValue()] = el.value ? el.value.toValue() : undefined;
      return results;
    }, {});
  }

  /**
   * @param key
   * @returns {Element}
   */
  get(name) {
    const member = this.getMember(name);

    if (member) {
      return member.value;
    }

    return undefined;
  }

  /**
   * @param key
   * @returns {MemberElement}
   */
  getMember(name) {
    if (name === undefined) { return undefined; }

    return this.content.find(element => element.key.toValue() === name);
  }

  /**
   * @param key
   */
  remove(name) {
    let removed = null;

    this.content = this.content.filter((item) => {
      if (item.key.toValue() === name) {
        removed = item;
        return false;
      }

      return true;
    });

    return removed;
  }

  /**
   * @param key
   * @returns {Element}
   */
  getKey(name) {
    const member = this.getMember(name);

    if (member) {
      return member.key;
    }

    return undefined;
  }

  /**
   * Set allows either a key/value pair to be given or an object
   * If an object is given, each key is set to its respective value
   */
  set(keyOrObject, value) {
    if (isObject(keyOrObject)) {
      Object.keys(keyOrObject).forEach((objectKey) => {
        this.set(objectKey, keyOrObject[objectKey]);
      });

      return this;
    }

    // Store as key for clarity
    const key = keyOrObject;
    const member = this.getMember(key);

    if (member) {
      member.value = value;
    } else {
      this.content.push(new MemberElement(key, value));
    }

    return this;
  }

  /**
   */
  keys() {
    return this.content.map(item => item.key.toValue());
  }

  /**
   */
  values() {
    return this.content.map(item => item.value.toValue());
  }

  /**
   * @returns {boolean}
   */
  hasKey(value) {
    return this.content.some(member => member.key.equals(value));
  }

  /**
   * @returns {array}
   */
  items() {
    return this.content.map(item => [item.key.toValue(), item.value.toValue()]);
  }

  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   */
  map(callback, thisArg) {
    return this.content.map(item => callback.bind(thisArg)(item.value, item.key, item));
  }

  /**
   * Returns an array containing the truthy results of calling the given transformation with each element of this sequence
   * @param transform - A closure that accepts the value, key and member element of this object as its argument and returns an optional value.
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   * @returns An array of the non-undefined results of calling transform with each element of the array
   */
  compactMap(callback, thisArg) {
    const results = [];

    this.forEach((value, key, member) => {
      const result = callback.bind(thisArg)(value, key, member);

      if (result) {
        results.push(result);
      }
    });

    return results;
  }

  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   */
  filter(callback, thisArg) {
    return new ObjectSlice(this.content).filter(callback, thisArg);
  }

  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @returns {ObjectSlice}
   *
   * @memberof ObjectElement.prototype
   */
  reject(callback, thisArg) {
    return this.filter(negate(callback), thisArg);
  }

  /**
   * @param callback
   * @param thisArg - Value to use as this (i.e the reference Object) when executing callback
   *
   * @memberof ObjectElement.prototype
   */
  forEach(callback, thisArg) {
    return this.content.forEach(item => callback.bind(thisArg)(item.value, item.key, item));
  }
}

module.exports = ObjectElement;


/***/ }),

/***/ 8712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(8631);

/**
 * @class StringElement
 *
 * @param {string} content
 * @param meta
 * @param attributes
 */
module.exports = class StringElement extends Element {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'string';
  }

  primitive() {
    return 'string';
  }

  /**
   * The length of the string.
   * @type number
   */
  get length() {
    return this.content.length;
  }
};


/***/ }),

/***/ 3148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const JSONSerialiser = __webpack_require__(394);

module.exports = class JSON06Serialiser extends JSONSerialiser {
  serialise(element) {
    if (!(element instanceof this.namespace.elements.Element)) {
      throw new TypeError(`Given element \`${element}\` is not an Element instance`);
    }

    let variable;
    if (element._attributes && element.attributes.get('variable')) {
      variable = element.attributes.get('variable');
    }

    const payload = {
      element: element.element,
    };

    if (element._meta && element._meta.length > 0) {
      payload.meta = this.serialiseObject(element.meta);
    }

    const isEnum = (element.element === 'enum' || element.attributes.keys().indexOf('enumerations') !== -1);

    if (isEnum) {
      const attributes = this.enumSerialiseAttributes(element);

      if (attributes) {
        payload.attributes = attributes;
      }
    } else if (element._attributes && element._attributes.length > 0) {
      let { attributes } = element;

      // Meta attribute was renamed to metadata
      if (attributes.get('metadata')) {
        attributes = attributes.clone();
        attributes.set('meta', attributes.get('metadata'));
        attributes.remove('metadata');
      }

      if (element.element === 'member' && variable) {
        attributes = attributes.clone();
        attributes.remove('variable');
      }

      if (attributes.length > 0) {
        payload.attributes = this.serialiseObject(attributes);
      }
    }

    if (isEnum) {
      payload.content = this.enumSerialiseContent(element, payload);
    } else if (this[`${element.element}SerialiseContent`]) {
      payload.content = this[`${element.element}SerialiseContent`](element, payload);
    } else if (element.content !== undefined) {
      let content;

      if (variable && element.content.key) {
        content = element.content.clone();
        content.key.attributes.set('variable', variable);
        content = this.serialiseContent(content);
      } else {
        content = this.serialiseContent(element.content);
      }

      if (this.shouldSerialiseContent(element, content)) {
        payload.content = content;
      }
    } else if (this.shouldSerialiseContent(element, element.content) && element instanceof this.namespace.elements.Array) {
      payload.content = [];
    }

    return payload;
  }

  shouldSerialiseContent(element, content) {
    if (element.element === 'parseResult' || element.element === 'httpRequest'
        || element.element === 'httpResponse' || element.element === 'category'
        || element.element === 'link') {
      return true;
    }

    if (content === undefined) {
      return false;
    }

    if (Array.isArray(content) && content.length === 0) {
      return false;
    }

    return true;
  }

  refSerialiseContent(element, payload) {
    delete payload.attributes;

    return {
      href: element.toValue(),
      path: element.path.toValue(),
    };
  }

  sourceMapSerialiseContent(element) {
    return element.toValue();
  }

  dataStructureSerialiseContent(element) {
    return [this.serialiseContent(element.content)];
  }

  enumSerialiseAttributes(element) {
    const attributes = element.attributes.clone();

    // Enumerations attribute was is placed inside content (see `enumSerialiseContent` below)
    const enumerations = attributes.remove('enumerations') || new this.namespace.elements.Array([]);

    // Remove fixed type attribute from samples and default
    const defaultValue = attributes.get('default');
    let samples = attributes.get('samples') || new this.namespace.elements.Array([]);

    if (defaultValue && defaultValue.content) {
      if (defaultValue.content.attributes) {
        defaultValue.content.attributes.remove('typeAttributes');
      }
      // Wrap default in array (not sure it is really needed because tests pass without this line)
      attributes.set('default', new this.namespace.elements.Array([defaultValue.content]));
    }

    // Strip typeAttributes from samples, 0.6 doesn't usually contain them in samples
    samples.forEach((sample) => {
      if (sample.content && sample.content.element) {
        sample.content.attributes.remove('typeAttributes');
      }
    });

    // Content -> Samples
    if (element.content && enumerations.length !== 0) {
      // If we don't have enumerations, content should stay in
      // content (enumerations) as per Drafter 3 behaviour.
      samples.unshift(element.content);
    }

    samples = samples.map((sample) => {
      if (sample instanceof this.namespace.elements.Array) {
        return [sample];
      }

      return new this.namespace.elements.Array([sample.content]);
    });

    if (samples.length) {
      attributes.set('samples', samples);
    }

    if (attributes.length > 0) {
      return this.serialiseObject(attributes);
    }

    return undefined;
  }

  enumSerialiseContent(element) {
    // In API Elements < 1.0, the content is the enumerations
    // If we don't have an enumerations, use the value (Drafter 3 behaviour)

    if (element._attributes) {
      const enumerations = element.attributes.get('enumerations');

      if (enumerations && enumerations.length > 0) {
        return enumerations.content.map((enumeration) => {
          const e = enumeration.clone();
          e.attributes.remove('typeAttributes');
          return this.serialise(e);
        });
      }
    }

    if (element.content) {
      const value = element.content.clone();
      value.attributes.remove('typeAttributes');
      return [this.serialise(value)];
    }

    return [];
  }

  deserialise(value) {
    if (typeof value === 'string') {
      return new this.namespace.elements.String(value);
    }

    if (typeof value === 'number') {
      return new this.namespace.elements.Number(value);
    }

    if (typeof value === 'boolean') {
      return new this.namespace.elements.Boolean(value);
    }

    if (value === null) {
      return new this.namespace.elements.Null();
    }

    if (Array.isArray(value)) {
      return new this.namespace.elements.Array(value.map(this.deserialise, this));
    }

    const ElementClass = this.namespace.getElementClass(value.element);
    const element = new ElementClass();

    if (element.element !== value.element) {
      element.element = value.element;
    }

    if (value.meta) {
      this.deserialiseObject(value.meta, element.meta);
    }

    if (value.attributes) {
      this.deserialiseObject(value.attributes, element.attributes);
    }

    const content = this.deserialiseContent(value.content);
    if (content !== undefined || element.content === null) {
      element.content = content;
    }

    if (element.element === 'enum') {
      // Grab enumerations from content
      if (element.content) {
        element.attributes.set('enumerations', element.content);
      }

      // Unwrap the sample value (inside double array)
      let samples = element.attributes.get('samples');
      element.attributes.remove('samples');

      if (samples) {
        // Re-wrap samples from array of array to array of enum's

        const existingSamples = samples;

        samples = new this.namespace.elements.Array();
        existingSamples.forEach((existingSample) => {
          existingSample.forEach((sample) => {
            const enumElement = new ElementClass(sample);
            enumElement.element = element.element;
            samples.push(enumElement);
          });
        });

        const sample = samples.shift();

        if (sample) {
          element.content = sample.content;
        } else {
          element.content = undefined;
        }

        element.attributes.set('samples', samples);
      } else {
        element.content = undefined;
      }

      // Unwrap the default value
      let defaultValue = element.attributes.get('default');
      if (defaultValue && defaultValue.length > 0) {
        defaultValue = defaultValue.get(0);
        const defaultElement = new ElementClass(defaultValue);
        defaultElement.element = element.element;
        element.attributes.set('default', defaultElement);
      }
    } else if (element.element === 'dataStructure' && Array.isArray(element.content)) {
      [element.content] = element.content;
    } else if (element.element === 'category') {
      // "meta" attribute has been renamed to metadata
      const metadata = element.attributes.get('meta');

      if (metadata) {
        element.attributes.set('metadata', metadata);
        element.attributes.remove('meta');
      }
    } else if (element.element === 'member' && element.key && element.key._attributes && element.key._attributes.getValue('variable')) {
      element.attributes.set('variable', element.key.attributes.get('variable'));
      element.key.attributes.remove('variable');
    }

    return element;
  }

  // Private API

  serialiseContent(content) {
    if (content instanceof this.namespace.elements.Element) {
      return this.serialise(content);
    }

    if (content instanceof this.namespace.KeyValuePair) {
      const pair = {
        key: this.serialise(content.key),
      };

      if (content.value) {
        pair.value = this.serialise(content.value);
      }

      return pair;
    }

    if (content && content.map) {
      return content.map(this.serialise, this);
    }

    return content;
  }

  deserialiseContent(content) {
    if (content) {
      if (content.element) {
        return this.deserialise(content);
      }

      if (content.key) {
        const pair = new this.namespace.KeyValuePair(this.deserialise(content.key));

        if (content.value) {
          pair.value = this.deserialise(content.value);
        }

        return pair;
      }

      if (content.map) {
        return content.map(this.deserialise, this);
      }
    }

    return content;
  }

  shouldRefract(element) {
    if ((element._attributes && element.attributes.keys().length) || (element._meta && element.meta.keys().length)) {
      return true;
    }

    if (element.element === 'enum') {
      // enum elements are treated like primitives (array)
      return false;
    }

    if (element.element !== element.primitive() || element.element === 'member') {
      return true;
    }

    return false;
  }

  convertKeyToRefract(key, item) {
    if (this.shouldRefract(item)) {
      return this.serialise(item);
    }

    if (item.element === 'enum') {
      return this.serialiseEnum(item);
    }

    if (item.element === 'array') {
      return item.map((subItem) => {
        if (this.shouldRefract(subItem) || key === 'default') {
          return this.serialise(subItem);
        }

        if (subItem.element === 'array' || subItem.element === 'object' || subItem.element === 'enum') {
          // items for array or enum inside array are always serialised
          return subItem.children.map(subSubItem => this.serialise(subSubItem));
        }

        return subItem.toValue();
      });
    }

    if (item.element === 'object') {
      return (item.content || []).map(this.serialise, this);
    }

    return item.toValue();
  }

  serialiseEnum(element) {
    return element.children.map(item => this.serialise(item));
  }

  serialiseObject(obj) {
    const result = {};

    obj.forEach((value, key) => {
      if (value) {
        const keyValue = key.toValue();
        result[keyValue] = this.convertKeyToRefract(keyValue, value);
      }
    });

    return result;
  }

  deserialiseObject(from, to) {
    Object.keys(from).forEach((key) => {
      to.set(key, this.deserialise(from[key]));
    });
  }
};


/***/ }),

/***/ 394:
/***/ ((module) => {

/**
 * @class JSONSerialiser
 *
 * @param {Namespace} namespace
 *
 * @property {Namespace} namespace
 */
class JSONSerialiser {
  constructor(namespace) {
    this.namespace = namespace || new this.Namespace();
  }

  /**
   * @param {Element} element
   * @returns {object}
   */
  serialise(element) {
    if (!(element instanceof this.namespace.elements.Element)) {
      throw new TypeError(`Given element \`${element}\` is not an Element instance`);
    }

    const payload = {
      element: element.element,
    };

    if (element._meta && element._meta.length > 0) {
      payload.meta = this.serialiseObject(element.meta);
    }

    if (element._attributes && element._attributes.length > 0) {
      payload.attributes = this.serialiseObject(element.attributes);
    }

    const content = this.serialiseContent(element.content);

    if (content !== undefined) {
      payload.content = content;
    }

    return payload;
  }

  /**
   * @param {object} value
   * @returns {Element}
   */
  deserialise(value) {
    if (!value.element) {
      throw new Error('Given value is not an object containing an element name');
    }

    const ElementClass = this.namespace.getElementClass(value.element);
    const element = new ElementClass();

    if (element.element !== value.element) {
      element.element = value.element;
    }

    if (value.meta) {
      this.deserialiseObject(value.meta, element.meta);
    }

    if (value.attributes) {
      this.deserialiseObject(value.attributes, element.attributes);
    }

    const content = this.deserialiseContent(value.content);
    if (content !== undefined || element.content === null) {
      element.content = content;
    }

    return element;
  }

  // Private API

  serialiseContent(content) {
    if (content instanceof this.namespace.elements.Element) {
      return this.serialise(content);
    }

    if (content instanceof this.namespace.KeyValuePair) {
      const pair = {
        key: this.serialise(content.key),
      };

      if (content.value) {
        pair.value = this.serialise(content.value);
      }

      return pair;
    }

    if (content && content.map) {
      if (content.length === 0) {
        return undefined;
      }

      return content.map(this.serialise, this);
    }

    return content;
  }

  deserialiseContent(content) {
    if (content) {
      if (content.element) {
        return this.deserialise(content);
      }

      if (content.key) {
        const pair = new this.namespace.KeyValuePair(this.deserialise(content.key));

        if (content.value) {
          pair.value = this.deserialise(content.value);
        }

        return pair;
      }

      if (content.map) {
        return content.map(this.deserialise, this);
      }
    }

    return content;
  }

  serialiseObject(obj) {
    const result = {};

    obj.forEach((value, key) => {
      if (value) {
        result[key.toValue()] = this.serialise(value);
      }
    });

    if (Object.keys(result).length === 0) {
      return undefined;
    }

    return result;
  }

  deserialiseObject(from, to) {
    Object.keys(from).forEach((key) => {
      to.set(key, this.deserialise(from[key]));
    });
  }
}


module.exports = JSONSerialiser;


/***/ }),

/***/ 1212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8411);

/***/ }),

/***/ 7202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(239);

module.exports = parent;


/***/ }),

/***/ 6656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(484);
__webpack_require__(5695);
__webpack_require__(6138);
__webpack_require__(7447);
__webpack_require__(3832);
var path = __webpack_require__(8099);

module.exports = path.AggregateError;


/***/ }),

/***/ 8411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(8337);


/***/ }),

/***/ 8337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
__webpack_require__(5442);

var parent = __webpack_require__(7202);

module.exports = parent;


/***/ }),

/***/ 814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(2769);
var tryToString = __webpack_require__(459);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 1966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPossiblePrototype = __webpack_require__(2937);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 8137:
/***/ ((module) => {

"use strict";

module.exports = function () { /* empty */ };


/***/ }),

/***/ 7235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(262);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(3273);
var toAbsoluteIndex = __webpack_require__(4574);
var lengthOfArrayLike = __webpack_require__(8130);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 9932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 8407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(4904);
var isCallable = __webpack_require__(2769);
var classofRaw = __webpack_require__(9932);
var wellKnownSymbol = __webpack_require__(8655);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 7464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(701);
var ownKeys = __webpack_require__(5691);
var getOwnPropertyDescriptorModule = __webpack_require__(4543);
var definePropertyModule = __webpack_require__(9989);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(1203);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 877:
/***/ ((module) => {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 3999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var definePropertyModule = __webpack_require__(9989);
var createPropertyDescriptor = __webpack_require__(480);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 480:
/***/ ((module) => {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 3508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(3999);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
  return target;
};


/***/ }),

/***/ 7525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 5024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(1203);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 9619:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);
var isObject = __webpack_require__(262);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 1100:
/***/ ((module) => {

"use strict";

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 7868:
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 4432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);
var userAgent = __webpack_require__(7868);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 9683:
/***/ ((module) => {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 3885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(new $Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 4279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(3999);
var clearErrorStack = __webpack_require__(3885);
var ERROR_STACK_INSTALLABLE = __webpack_require__(5791);

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ 5791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(1203);
var createPropertyDescriptor = __webpack_require__(480);

module.exports = !fails(function () {
  var error = new Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ 9098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);
var apply = __webpack_require__(7013);
var uncurryThis = __webpack_require__(9344);
var isCallable = __webpack_require__(2769);
var getOwnPropertyDescriptor = (__webpack_require__(4543).f);
var isForced = __webpack_require__(8696);
var path = __webpack_require__(8099);
var bind = __webpack_require__(4572);
var createNonEnumerableProperty = __webpack_require__(3999);
var hasOwn = __webpack_require__(701);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : global[TARGET] && global[TARGET].prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;

    // bind methods to global for calling from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changes in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ 1203:
/***/ ((module) => {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 7013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(1780);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 4572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(9344);
var aCallable = __webpack_require__(814);
var NATIVE_BIND = __webpack_require__(1780);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 1780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(1203);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 4713:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(1780);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 3410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var hasOwn = __webpack_require__(701);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 3574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);
var aCallable = __webpack_require__(814);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 9344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classofRaw = __webpack_require__(9932);
var uncurryThis = __webpack_require__(6100);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 6100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(1780);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 3384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var path = __webpack_require__(8099);
var global = __webpack_require__(1063);
var isCallable = __webpack_require__(2769);

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(8407);
var getMethod = __webpack_require__(4674);
var isNullOrUndefined = __webpack_require__(3057);
var Iterators = __webpack_require__(6625);
var wellKnownSymbol = __webpack_require__(8655);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 1613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(4713);
var aCallable = __webpack_require__(814);
var anObject = __webpack_require__(7235);
var tryToString = __webpack_require__(459);
var getIteratorMethod = __webpack_require__(967);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 4674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(814);
var isNullOrUndefined = __webpack_require__(3057);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 1063:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 701:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);
var toObject = __webpack_require__(2137);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 5241:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 3489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(3384);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 9665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var fails = __webpack_require__(1203);
var createElement = __webpack_require__(9619);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 1395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);
var fails = __webpack_require__(1203);
var classof = __webpack_require__(9932);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(2769);
var isObject = __webpack_require__(262);
var setPrototypeOf = __webpack_require__(3491);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 8148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(262);
var createNonEnumerableProperty = __webpack_require__(3999);

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ 8417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(1314);
var global = __webpack_require__(1063);
var isObject = __webpack_require__(262);
var createNonEnumerableProperty = __webpack_require__(3999);
var hasOwn = __webpack_require__(701);
var shared = __webpack_require__(3753);
var sharedKey = __webpack_require__(4275);
var hiddenKeys = __webpack_require__(5241);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 2877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(8655);
var Iterators = __webpack_require__(6625);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 2769:
/***/ ((module) => {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 8696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(1203);
var isCallable = __webpack_require__(2769);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 3057:
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(2769);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 2937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(262);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 4871:
/***/ ((module) => {

"use strict";

module.exports = true;


/***/ }),

/***/ 6281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(3384);
var isCallable = __webpack_require__(2769);
var isPrototypeOf = __webpack_require__(4317);
var USE_SYMBOL_AS_UID = __webpack_require__(7460);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(4572);
var call = __webpack_require__(4713);
var anObject = __webpack_require__(7235);
var tryToString = __webpack_require__(459);
var isArrayIteratorMethod = __webpack_require__(2877);
var lengthOfArrayLike = __webpack_require__(8130);
var isPrototypeOf = __webpack_require__(4317);
var getIterator = __webpack_require__(1613);
var getIteratorMethod = __webpack_require__(967);
var iteratorClose = __webpack_require__(1743);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 1743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(4713);
var anObject = __webpack_require__(7235);
var getMethod = __webpack_require__(4674);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 1926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = (__webpack_require__(2621).IteratorPrototype);
var create = __webpack_require__(5780);
var createPropertyDescriptor = __webpack_require__(480);
var setToStringTag = __webpack_require__(1811);
var Iterators = __webpack_require__(6625);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(9098);
var call = __webpack_require__(4713);
var IS_PURE = __webpack_require__(4871);
var FunctionName = __webpack_require__(3410);
var isCallable = __webpack_require__(2769);
var createIteratorConstructor = __webpack_require__(1926);
var getPrototypeOf = __webpack_require__(3671);
var setPrototypeOf = __webpack_require__(3491);
var setToStringTag = __webpack_require__(1811);
var createNonEnumerableProperty = __webpack_require__(3999);
var defineBuiltIn = __webpack_require__(3508);
var wellKnownSymbol = __webpack_require__(8655);
var Iterators = __webpack_require__(6625);
var IteratorsCore = __webpack_require__(2621);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 2621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(1203);
var isCallable = __webpack_require__(2769);
var isObject = __webpack_require__(262);
var create = __webpack_require__(5780);
var getPrototypeOf = __webpack_require__(3671);
var defineBuiltIn = __webpack_require__(3508);
var wellKnownSymbol = __webpack_require__(8655);
var IS_PURE = __webpack_require__(4871);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 6625:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 8130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(8146);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 5777:
/***/ ((module) => {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 4879:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toString = __webpack_require__(1139);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 5780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(7235);
var definePropertiesModule = __webpack_require__(7389);
var enumBugKeys = __webpack_require__(9683);
var hiddenKeys = __webpack_require__(5241);
var html = __webpack_require__(3489);
var documentCreateElement = __webpack_require__(9619);
var sharedKey = __webpack_require__(4275);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 7389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(1330);
var definePropertyModule = __webpack_require__(9989);
var anObject = __webpack_require__(7235);
var toIndexedObject = __webpack_require__(3273);
var objectKeys = __webpack_require__(8364);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 9989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var IE8_DOM_DEFINE = __webpack_require__(9665);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(1330);
var anObject = __webpack_require__(7235);
var toPropertyKey = __webpack_require__(5341);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 4543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var call = __webpack_require__(4713);
var propertyIsEnumerableModule = __webpack_require__(7161);
var createPropertyDescriptor = __webpack_require__(480);
var toIndexedObject = __webpack_require__(3273);
var toPropertyKey = __webpack_require__(5341);
var hasOwn = __webpack_require__(701);
var IE8_DOM_DEFINE = __webpack_require__(9665);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 5116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(8600);
var enumBugKeys = __webpack_require__(9683);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 7313:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(701);
var isCallable = __webpack_require__(2769);
var toObject = __webpack_require__(2137);
var sharedKey = __webpack_require__(4275);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(2871);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 4317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 8600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);
var hasOwn = __webpack_require__(701);
var toIndexedObject = __webpack_require__(3273);
var indexOf = (__webpack_require__(1005).indexOf);
var hiddenKeys = __webpack_require__(5241);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(8600);
var enumBugKeys = __webpack_require__(9683);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 7161:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 3491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(3574);
var anObject = __webpack_require__(7235);
var aPossiblePrototype = __webpack_require__(1966);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 9559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(4904);
var classof = __webpack_require__(8407);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 9258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(4713);
var isCallable = __webpack_require__(2769);
var isObject = __webpack_require__(262);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(3384);
var uncurryThis = __webpack_require__(6100);
var getOwnPropertyNamesModule = __webpack_require__(5116);
var getOwnPropertySymbolsModule = __webpack_require__(7313);
var anObject = __webpack_require__(7235);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 8099:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 5516:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(9989).f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ 5426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(3057);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 1811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(4904);
var defineProperty = (__webpack_require__(9989).f);
var createNonEnumerableProperty = __webpack_require__(3999);
var hasOwn = __webpack_require__(701);
var toString = __webpack_require__(9559);
var wellKnownSymbol = __webpack_require__(8655);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  var target = STATIC ? it : it && it.prototype;
  if (target) {
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ 4275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(8141);
var uid = __webpack_require__(1268);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 3753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);
var defineGlobalProperty = __webpack_require__(7525);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 8141:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(4871);
var store = __webpack_require__(3753);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.35.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);
var toIntegerOrInfinity = __webpack_require__(9903);
var toString = __webpack_require__(1139);
var requireObjectCoercible = __webpack_require__(5426);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 4603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(4432);
var fails = __webpack_require__(1203);
var global = __webpack_require__(1063);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 4574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(9903);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 3273:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(1395);
var requireObjectCoercible = __webpack_require__(5426);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(5777);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(9903);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 2137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(5426);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(4713);
var isObject = __webpack_require__(262);
var isSymbol = __webpack_require__(6281);
var getMethod = __webpack_require__(4674);
var ordinaryToPrimitive = __webpack_require__(9258);
var wellKnownSymbol = __webpack_require__(8655);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 5341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(493);
var isSymbol = __webpack_require__(6281);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 4904:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(8655);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(8407);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 459:
/***/ ((module) => {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 1268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(6100);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4603);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 1330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var fails = __webpack_require__(1203);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 1314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);
var isCallable = __webpack_require__(2769);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(1063);
var shared = __webpack_require__(8141);
var hasOwn = __webpack_require__(701);
var uid = __webpack_require__(1268);
var NATIVE_SYMBOL = __webpack_require__(4603);
var USE_SYMBOL_AS_UID = __webpack_require__(7460);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(3384);
var hasOwn = __webpack_require__(701);
var createNonEnumerableProperty = __webpack_require__(3999);
var isPrototypeOf = __webpack_require__(4317);
var setPrototypeOf = __webpack_require__(3491);
var copyConstructorProperties = __webpack_require__(7464);
var proxyAccessor = __webpack_require__(5516);
var inheritIfRequired = __webpack_require__(3507);
var normalizeStringArgument = __webpack_require__(4879);
var installErrorCause = __webpack_require__(8148);
var installErrorStack = __webpack_require__(4279);
var DESCRIPTORS = __webpack_require__(5024);
var IS_PURE = __webpack_require__(4871);

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    installErrorStack(result, WrappedError, result.stack, 2);
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ 6138:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(9098);
var getBuiltIn = __webpack_require__(3384);
var apply = __webpack_require__(7013);
var fails = __webpack_require__(1203);
var wrapErrorConstructorWithCause = __webpack_require__(6453);

var AGGREGATE_ERROR = 'AggregateError';
var $AggregateError = getBuiltIn(AGGREGATE_ERROR);

var FORCED = !fails(function () {
  return $AggregateError([1]).errors[0] !== 1;
}) && fails(function () {
  return $AggregateError([1], AGGREGATE_ERROR, { cause: 7 }).cause !== 7;
});

// https://tc39.es/ecma262/#sec-aggregate-error
$({ global: true, constructor: true, arity: 2, forced: FORCED }, {
  AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {
    // eslint-disable-next-line no-unused-vars -- required for functions `.length`
    return function AggregateError(errors, message) { return apply(init, this, arguments); };
  }, FORCED, true)
});


/***/ }),

/***/ 3085:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(9098);
var isPrototypeOf = __webpack_require__(4317);
var getPrototypeOf = __webpack_require__(3671);
var setPrototypeOf = __webpack_require__(3491);
var copyConstructorProperties = __webpack_require__(7464);
var create = __webpack_require__(5780);
var createNonEnumerableProperty = __webpack_require__(3999);
var createPropertyDescriptor = __webpack_require__(480);
var installErrorCause = __webpack_require__(8148);
var installErrorStack = __webpack_require__(4279);
var iterate = __webpack_require__(208);
var normalizeStringArgument = __webpack_require__(4879);
var wellKnownSymbol = __webpack_require__(8655);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ 5695:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(3085);


/***/ }),

/***/ 7447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(3273);
var addToUnscopables = __webpack_require__(8137);
var Iterators = __webpack_require__(6625);
var InternalStateModule = __webpack_require__(8417);
var defineProperty = (__webpack_require__(9989).f);
var defineIterator = __webpack_require__(164);
var createIterResultObject = __webpack_require__(877);
var IS_PURE = __webpack_require__(4871);
var DESCRIPTORS = __webpack_require__(5024);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 484:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__(9098);
var global = __webpack_require__(1063);
var apply = __webpack_require__(7013);
var wrapErrorConstructorWithCause = __webpack_require__(6453);

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

// eslint-disable-next-line es/no-error-cause -- feature detection
var FORCED = new Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://tc39.es/ecma262/#sec-nativeerror
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ 3832:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(5571).charAt);
var toString = __webpack_require__(1139);
var InternalStateModule = __webpack_require__(8417);
var defineIterator = __webpack_require__(164);
var createIterResultObject = __webpack_require__(877);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 5442:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(5695);


/***/ }),

/***/ 85:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(7447);
var DOMIterables = __webpack_require__(1100);
var global = __webpack_require__(1063);
var setToStringTag = __webpack_require__(1811);
var Iterators = __webpack_require__(6625);

for (var COLLECTION_NAME in DOMIterables) {
  setToStringTag(global[COLLECTION_NAME], COLLECTION_NAME);
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ 239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
__webpack_require__(5442);

var parent = __webpack_require__(6656);
__webpack_require__(85);

module.exports = parent;


/***/ }),

/***/ 3699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9180);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2898);


/**
 * Returns true if the specified value is equal, in R.equals terms,
 * to at least one element of the given list or false otherwise.
 * Given list can be a string.
 *
 * Like {@link http://ramdajs.com/docs/#includes|R.includes} but with argument order reversed.
 *
 * @func included
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/3.0.0|v3.0.0}
 * @category List
 * @sig [a] -> a -> Boolean
 * @param {Array|String} list The list to consider
 * @param {*} a The item to compare against
 * @return {boolean} Returns Boolean `true` if an equivalent item is in the list or `false` otherwise
 * @see {@link http://ramdajs.com/docs/#includes|R.includes}
 * @example
 *
 * RA.included([1, 2, 3], 3); //=> true
 * RA.included([1, 2, 3], 4); //=> false
 * RA.included([{ name: 'Fred' }], { name: 'Fred' }); //=> true
 * RA.included([[42]], [42]); //=> true
 */
var included = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(ramda__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (included);

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var isOfTypeObject = function isOfTypeObject(val) {
  return _typeof(val) === 'object';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isOfTypeObject);

/***/ }),

/***/ 5474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4864);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4769);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(560);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8711);
/* harmony import */ var _isNotFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2754);
/* harmony import */ var _isEmptyArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7657);




/**
 * Invokes the method at path of object with given arguments.
 *
 * @func invokeArgs
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.27.0|v2.27.0}
 * @category Object
 * @sig Array -> Array -> Object -> *
 * @param {Array.<string|number>} path The path of the method to invoke
 * @param {Array} args The arguments to invoke the method with
 * @param {Object} obj The object to query
 * @return {*}
 * @example
 *
 * RA.invokeArgs(['abs'], [-1], Math); //=> 1
 * RA.invokeArgs(['path', 'to', 'non-existent', 'method'], [-1], Math); //=> undefined
 */

var invokeArgs = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(3, function (mpath, args, obj) {
  var method = (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(mpath, obj);
  var context = (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])((0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(mpath), obj);
  if ((0,_isNotFunction_js__WEBPACK_IMPORTED_MODULE_3__["default"])(method)) return undefined;
  if ((0,_isEmptyArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(mpath)) return undefined;
  var boundMethod = (0,ramda__WEBPACK_IMPORTED_MODULE_5__["default"])(method, context);
  return (0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])(boundMethod, args);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invokeArgs);

/***/ }),

/***/ 3834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2572);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6867);



/**
 * Checks if input value is `Array`.
 *
 * @func isArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([]); //=> true
 * RA.isArray(null); //=> false
 * RA.isArray({}); //=> false
 */
var isArray = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(1, (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Array.isArray) ? Array.isArray : (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(ramda__WEBPACK_IMPORTED_MODULE_3__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])('Array')));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);

/***/ }),

/***/ 5855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2572);


/**
 * Checks if input value is `Async Function`.
 *
 * @func isAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isNotAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isAsyncFunction(async function test() { }); //=> true
 * RA.isAsyncFunction(null); //=> false
 * RA.isAsyncFunction(function test() { }); //=> false
 * RA.isAsyncFunction(() => {}); //=> false
 */
var isAsyncFunction = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(1, (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(ramda__WEBPACK_IMPORTED_MODULE_2__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])('AsyncFunction')));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAsyncFunction);

/***/ }),

/***/ 7657:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4968);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7694);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3834);



/**
 * Checks if input value is an empty `Array`.
 *
 * @func isEmptyArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotEmptyArray|isNotEmptyArray}
 * @example
 *
 * RA.isEmptyArray([]); // => true
 * RA.isEmptyArray([42]); // => false
 * RA.isEmptyArray({}); // => false
 * RA.isEmptyArray(null); // => false
 * RA.isEmptyArray(undefined); // => false
 * RA.isEmptyArray(42); // => false
 * RA.isEmptyArray('42'); // => false
 */
var isEmptyArray = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"], ramda__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmptyArray);

/***/ }),

/***/ 6867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1020);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2572);
/* harmony import */ var _isGeneratorFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9702);
/* harmony import */ var _isAsyncFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5855);




/**
 * Checks if input value is `Function`.
 *
 * @func isFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotFunction|isNotFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isFunction(function test() { }); //=> true
 * RA.isFunction(function* test() { }); //=> true
 * RA.isFunction(async function test() { }); //=> true
 * RA.isFunction(() => {}); //=> true
 * RA.isFunction(null); //=> false
 * RA.isFunction('abc'); //=> false
 */
var isFunction = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])([(0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(ramda__WEBPACK_IMPORTED_MODULE_2__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])('Function')), _isGeneratorFunction_js__WEBPACK_IMPORTED_MODULE_4__["default"], _isAsyncFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);

/***/ }),

/***/ 9702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2572);


/**
 * Checks if input value is `Generator Function`.
 *
 * @func isGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isNotGeneratorFunction|isNotGeneratorFunction}
 * @example
 *
 * RA.isGeneratorFunction(function* test() { }); //=> true
 * RA.isGeneratorFunction(null); //=> false
 * RA.isGeneratorFunction(function test() { }); //=> false
 * RA.isGeneratorFunction(() => {}); //=> false
 */
var isGeneratorFunction = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(1, (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(ramda__WEBPACK_IMPORTED_MODULE_2__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])('GeneratorFunction')));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isGeneratorFunction);

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1323);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6867);



/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Function`.
 *
 * @func isNotFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotFunction(function test() { }); //=> false
 * RA.isNotFunction(function* test() { }); //=> false
 * RA.isNotFunction(async function test() { }); //=> false
 * RA.isNotFunction(() => {}); //=> false
 * RA.isNotFunction(null); //=> true
 * RA.isNotFunction('abc'); //=> true
 */
/* eslint-enable max-len */
var isNotFunction = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNotFunction);

/***/ }),

/***/ 6907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1323);
/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1834);



/**
 * Checks if input value is complement of `null`.
 *
 * @func isNotNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNull|isNull}
 * @example
 *
 * RA.isNotNull(1); //=> true
 * RA.isNotNull(undefined); //=> true
 * RA.isNotNull(null); //=> false
 */
var isNotNull = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(_isNull_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNotNull);

/***/ }),

/***/ 1834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3654);


/**
 * Checks if input value is `null`.
 *
 * @func isNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotNull|isNotNull}
 * @example
 *
 * RA.isNull(1); //=> false
 * RA.isNull(undefined); //=> false
 * RA.isNull(null); //=> true
 */
var isNull = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNull);

/***/ }),

/***/ 6989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4968);
/* harmony import */ var _isNotNull_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6907);
/* harmony import */ var _internal_isOfTypeObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9871);




/* eslint-disable max-len */
/**
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isObjLike
 * @aliases isObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObjLike|isNotObjLike}, {@link RA.isObj|isObj}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isObjLike({}); //=> true
 * RA.isObjLike([]); //=> true
 * RA.isObjLike(() => {}); //=> false
 * RA.isObjLike(null); //=> false
 * RA.isObjLike(undefined); //=> false
 */
/* eslint-enable max-len */
var isObjLike = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(1, (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(_isNotNull_js__WEBPACK_IMPORTED_MODULE_2__["default"], _internal_isOfTypeObject_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjLike);

/***/ }),

/***/ 4606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2572);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9271);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3654);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4787);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4968);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9784);
/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1834);
/* harmony import */ var _isObjLike_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6989);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6867);




var isObject = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(ramda__WEBPACK_IMPORTED_MODULE_1__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])('Object'));
var isObjectConstructor = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(ramda__WEBPACK_IMPORTED_MODULE_3__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])((0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(Object)));
var hasObjectConstructor = (0,ramda__WEBPACK_IMPORTED_MODULE_5__["default"])((0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])(_isFunction_js__WEBPACK_IMPORTED_MODULE_7__["default"], isObjectConstructor), ['constructor']);

/* eslint-disable max-len */
/**
 * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
 *
 * @func isPlainObj
 * @aliases isPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotPlainObj|isNotPlainObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isObj|isObj}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isPlainObj(new Bar()); //=> false
 * RA.isPlainObj({ prop: 'value' }); //=> true
 * RA.isPlainObj(['a', 'b', 'c']); //=> false
 * RA.isPlainObj(Object.create(null); //=> true
 * RA.isPlainObj(new Object()); //=> true
 */
/* eslint-enable max-len */
var isPlainObj = (0,ramda__WEBPACK_IMPORTED_MODULE_8__["default"])(1, function (val) {
  if (!(0,_isObjLike_js__WEBPACK_IMPORTED_MODULE_9__["default"])(val) || !isObject(val)) {
    return false;
  }
  var proto = Object.getPrototypeOf(val);
  if ((0,_isNull_js__WEBPACK_IMPORTED_MODULE_10__["default"])(proto)) {
    return true;
  }
  return hasObjectConstructor(proto);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObj);

/***/ }),

/***/ 5102:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2572);


/**
 * Checks if input value is `String`.
 *
 * @func isString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotString|isNotString}
 * @example
 *
 * RA.isString('abc'); //=> true
 * RA.isString(1); //=> false
 */
var isString = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(1, (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(ramda__WEBPACK_IMPORTED_MODULE_2__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])('String')));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isString);

/***/ }),

/***/ 3031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3654);
/* harmony import */ var _stubUndefined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);



/**
 * Checks if input value is `undefined`.
 *
 * @func isUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotUndefined|isNotUndefined}
 * @example
 *
 * RA.isUndefined(1); //=> false
 * RA.isUndefined(undefined); //=> true
 * RA.isUndefined(null); //=> false
 */
var isUndefined = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_stubUndefined_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isUndefined);

/***/ }),

/***/ 3387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9498);


/**
 * A function that returns `undefined`.
 *
 * @func stubUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.0.0|v1.0.0}
 * @category Function
 * @sig ... -> undefined
 * @return {undefined}
 * @example
 *
 * RA.stubUndefined(); //=> undefined
 * RA.stubUndefined(1, 2, 3); //=> undefined
 */
var stubUndefined = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(void 0); // eslint-disable-line no-void

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubUndefined);

/***/ }),

/***/ 8833:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = function () {
  return false;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (F);

/***/ }),

/***/ 3679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = function () {
  return true;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (T);

/***/ }),

/***/ 5380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6738);
/* harmony import */ var _internal_xall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6359);




/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      const equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
var all = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['all'], _internal_xall_js__WEBPACK_IMPORTED_MODULE_2__["default"], function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (all);

/***/ }),

/***/ 9498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (always);

/***/ }),

/***/ 7086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);


/**
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean `and` statement if both inputs are `Boolean`s.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.both, R.or
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
var and = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function and(a, b) {
  return a && b;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (and);

/***/ }),

/***/ 1020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9784);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4981);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9590);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7797);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass, R.either
 * @example
 *
 *      const isClub = R.propEq('♣', 'suit');
 *      const isSpade = R.propEq('♠', 'suit');
 *      const isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
var anyPass = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function anyPass(preds) {
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_3__["default"], 0, (0,_pluck_js__WEBPACK_IMPORTED_MODULE_4__["default"])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anyPass);

/***/ }),

/***/ 3470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2840);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(166);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(397);





/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the first argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
var ap = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } : (0,_internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (acc, f) {
    return (0,_internal_concat_js__WEBPACK_IMPORTED_MODULE_2__["default"])(acc, (0,_map_js__WEBPACK_IMPORTED_MODULE_3__["default"])(f, applyX));
  }, [], applyF);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ap);

/***/ }),

/***/ 8711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      const nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
var apply = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function apply(fn, args) {
  return fn.apply(this, args);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apply);

/***/ }),

/***/ 560:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3607);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function bind(fn, thisObj) {
  return (0,_internal_arity_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bind);

/***/ }),

/***/ 4968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9892);
/* harmony import */ var _and_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7086);
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9362);





/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.either, R.allPass, R.and
 * @example
 *
 *      const gt10 = R.gt(R.__, 10)
 *      const lt20 = R.lt(R.__, 20)
 *      const f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 *
 *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
 *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
 */
var both = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function both(f, g) {
  return (0,_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f) ? function _both() {
    return f.apply(this, arguments) && g.apply(this, arguments);
  } : (0,_lift_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_and_js__WEBPACK_IMPORTED_MODULE_3__["default"])(f, g);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (both);

/***/ }),

/***/ 1323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9362);
/* harmony import */ var _not_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2486);



/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      R.isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      R.isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = /*#__PURE__*/(0,_lift_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_not_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (complement);

/***/ }),

/***/ 9784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3607);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8938);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_curryN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2459);





/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function curryN(length, fn) {
  if (length === 1) {
    return (0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  }
  return (0,_internal_arity_js__WEBPACK_IMPORTED_MODULE_2__["default"])(length, (0,_internal_curryN_js__WEBPACK_IMPORTED_MODULE_3__["default"])(length, [], fn));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curryN);

/***/ }),

/***/ 6719:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
var defaultTo = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTo);

/***/ }),

/***/ 5734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6590);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4099);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _internal_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);
/* harmony import */ var _internal_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1829);







/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`),
 * TypedArray (`Uint8Array []`, `Float32Array []`, etc), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));               //=> Nothing()
 *      R.empty([1, 2, 3]);              //=> []
 *      R.empty('unicorns');             //=> ''
 *      R.empty({x: 1, y: 2});           //=> {}
 *      R.empty(Uint8Array.from('123')); //=> Uint8Array []
 */
var empty = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : (0,_internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x) ? [] : (0,_internal_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x) ? '' : (0,_internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(x) ? {} : (0,_internal_isArguments_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x) ? function () {
    return arguments;
  }() : (0,_internal_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(x) ? x.constructor.from('') : void 0 // else
  ;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (empty);

/***/ }),

/***/ 3654:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(497);



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function equals(a, b) {
  return (0,_internal_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b, [], []);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equals);

/***/ }),

/***/ 8481:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4121);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6738);
/* harmony import */ var _internal_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6574);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(131);
/* harmony import */ var _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8080);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7783);








/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @category Object
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['fantasy-land/filter', 'filter'], _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_2__["default"], function (pred, filterable) {
  return (0,_internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(filterable) ? (0,_internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, (0,_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(filterable)) :
  // else
  (0,_internal_filter_js__WEBPACK_IMPORTED_MODULE_6__["default"])(pred, filterable);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ 9180:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9784);



/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
var flip = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function flip(fn) {
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, function (a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flip);

/***/ }),

/***/ 2572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_objectIs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1111);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * Note this is merely a curried version of ES6 `Object.is`.
 *
 * `identical` does not support the `__` placeholder.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      const o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = function (a, b) {
  switch (arguments.length) {
    case 0:
      return identical;
    case 1:
      return function () {
        return function unaryIdentical(_b) {
          switch (arguments.length) {
            case 0:
              return unaryIdentical;
            default:
              return (0,_internal_objectIs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, _b);
          }
        };
      }();
    default:
      return (0,_internal_objectIs_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b);
  }
};

// In order to support Cross-origin Window objects as arguments to identical,
// it cannot be implemented as _curry2(_objectIs).
// The reason is that _curry2 checks if a function argument is the placeholder __
// by accessing a paritcular property. However, across URL origins access
// to most properties of Window is forbidden.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identical);

/***/ }),

/***/ 2898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6265);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);



/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Also works with strings.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */
var includes = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_includes_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (includes);

/***/ }),

/***/ 4769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5969);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
var init = /*#__PURE__*/(0,_slice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0, -1);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ 3607:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arity)
/* harmony export */ });
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/***/ }),

/***/ 1941:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayFromIterator)
/* harmony export */ });
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}

/***/ }),

/***/ 4121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayReduce)
/* harmony export */ });
function _arrayReduce(reducer, acc, list) {
  var index = 0;
  var length = list.length;
  while (index < length) {
    acc = reducer(acc, list[index]);
    index += 1;
  }
  return acc;
}

/***/ }),

/***/ 6122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _checkForMethod)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4099);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implementation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}

/***/ }),

/***/ 7940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _complement)
/* harmony export */ });
function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

/***/ }),

/***/ 2840:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _concat)
/* harmony export */ });
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}

/***/ }),

/***/ 4334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createReduce)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4620);

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _createReduce(arrayReduce, methodReduce, iterableReduce) {
  return function _reduce(xf, acc, list) {
    if ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list)) {
      return arrayReduce(xf, acc, list);
    }
    if (list == null) {
      return acc;
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return methodReduce(xf, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return iterableReduce(xf, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return iterableReduce(xf, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return methodReduce(xf, acc, list, 'reduce');
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}

/***/ }),

/***/ 8938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry1)
/* harmony export */ });
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),

/***/ 5959:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry2)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8938);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) ? f2 : (0,_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b) {
          return fn(a, _b);
        });
      default:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) ? f2 : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a) {
          return fn(_a, b);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),

/***/ 9088:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry3)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8938);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5959);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) ? f3 : (0,_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) ? f3 : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) ? (0,_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) ? (0,_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : (0,_curry1_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c) ? f3 : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) ? (0,_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c) ? (0,_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) && (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c) ? (0,_curry2_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_a) {
          return fn(_a, b, c);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_b) {
          return fn(a, _b, c);
        }) : (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c) ? (0,_curry1_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/***/ }),

/***/ 2459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curryN)
/* harmony export */ });
/* harmony import */ var _arity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3607);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);



/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    var hasPlaceholder = false;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!(0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result)) {
        left -= 1;
      } else {
        hasPlaceholder = true;
      }
      combinedIdx += 1;
    }
    return !hasPlaceholder && left <= 0 ? fn.apply(this, combined) : (0,_arity_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Math.max(0, left), _curryN(length, combined, fn));
  };
}

/***/ }),

/***/ 6738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _dispatchable)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4099);
/* harmony import */ var _isTransformer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7117);



/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer created by [transducerCreator] to return a new transformer
 * (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} transducerCreator transducer factory if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, transducerCreator, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var obj = arguments[arguments.length - 1];
    if (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
        }
        idx += 1;
      }
      if ((0,_isTransformer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
        var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}

/***/ }),

/***/ 497:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _equals)
/* harmony export */ });
/* harmony import */ var _arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1941);
/* harmony import */ var _includesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4333);
/* harmony import */ var _functionName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(415);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5722);
/* harmony import */ var _objectIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1111);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7783);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(963);








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparison of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = (0,_arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(aIterator);
  var b = (0,_arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !(0,_includesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (b, aItem) {
    return !(0,_includesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"])(eq, aItem, b);
  }, b, a);
}
function _equals(a, b, stackA, stackB) {
  if ((0,_objectIs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a, b)) {
    return true;
  }
  var typeA = (0,_type_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a);
  if (typeA !== (0,_type_js__WEBPACK_IMPORTED_MODULE_3__["default"])(b)) {
    return false;
  }
  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }
  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }
  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && (0,_functionName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && (0,_objectIs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!(0,_objectIs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }
  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }
      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }
  var keysA = (0,_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(a);
  if (keysA.length !== (0,_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(b).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!((0,_has_js__WEBPACK_IMPORTED_MODULE_6__["default"])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

/***/ }),

/***/ 6574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _filter)
/* harmony export */ });
function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}

/***/ }),

/***/ 415:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _functionName)
/* harmony export */ });
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

/***/ }),

/***/ 5722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _has)
/* harmony export */ });
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),

/***/ 6265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _includes)
/* harmony export */ });
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2243);

function _includes(a, list) {
  return (0,_indexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list, a, 0) >= 0;
}

/***/ }),

/***/ 4333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _includesWith)
/* harmony export */ });
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

/***/ }),

/***/ 2243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _indexOf)
/* harmony export */ });
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3654);

function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);
      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if ((0,_equals_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

/***/ }),

/***/ 6590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5722);

var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return (0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])('callee', x);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_isArguments);

/***/ }),

/***/ 4099:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});

/***/ }),

/***/ 4620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4099);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(141);




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 *      _isArrayLike({nodeType: 1, length: 1}) // => false
 */
var _isArrayLike = /*#__PURE__*/(0,_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isArrayLike(x) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if ((0,_isString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x)) {
    return false;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_isArrayLike);

/***/ }),

/***/ 9892:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isFunction)
/* harmony export */ });
function _isFunction(x) {
  var type = Object.prototype.toString.call(x);
  return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
}

/***/ }),

/***/ 7700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
});

/***/ }),

/***/ 131:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isObject)
/* harmony export */ });
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

/***/ }),

/***/ 1003:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isPlaceholder)
/* harmony export */ });
function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),

/***/ 141:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isString)
/* harmony export */ });
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/***/ }),

/***/ 7117:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isTransformer)
/* harmony export */ });
function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/***/ }),

/***/ 1829:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isTypedArray)
/* harmony export */ });
/**
 * Tests whether or not an object is a typed array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is a typed array, `false` otherwise.
 * @example
 *
 *      _isTypedArray(new Uint8Array([])); //=> true
 *      _isTypedArray(new Float32Array([])); //=> true
 *      _isTypedArray([]); //=> false
 *      _isTypedArray(null); //=> false
 *      _isTypedArray({}); //=> false
 */
function _isTypedArray(val) {
  var type = Object.prototype.toString.call(val);
  return type === '[object Uint8ClampedArray]' || type === '[object Int8Array]' || type === '[object Uint8Array]' || type === '[object Int16Array]' || type === '[object Uint16Array]' || type === '[object Int32Array]' || type === '[object Uint32Array]' || type === '[object Float32Array]' || type === '[object Float64Array]' || type === '[object BigInt64Array]' || type === '[object BigUint64Array]';
}

/***/ }),

/***/ 6584:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _map)
/* harmony export */ });
function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}

/***/ }),

/***/ 5136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nth)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);

function _nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return (0,_isString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list) ? list.charAt(idx) : list[idx];
}

/***/ }),

/***/ 1111:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Object.is === 'function' ? Object.is : _objectIs);

/***/ }),

/***/ 8067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _path)
/* harmony export */ });
/* harmony import */ var _isInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7700);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5136);


function _path(pathAr, obj) {
  var val = obj;
  for (var i = 0; i < pathAr.length; i += 1) {
    if (val == null) {
      return undefined;
    }
    var p = pathAr[i];
    if ((0,_isInteger_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p)) {
      val = (0,_nth_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, val);
    } else {
      val = val[p];
    }
  }
  return val;
}

/***/ }),

/***/ 4436:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _pipe)
/* harmony export */ });
function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}

/***/ }),

/***/ 9569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _quote)
/* harmony export */ });
function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/***/ }),

/***/ 166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4121);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4334);


function _iterableReduce(reducer, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = reducer(acc, step.value);
    step = iter.next();
  }
  return acc;
}
function _methodReduce(reducer, acc, obj, methodName) {
  return obj[methodName](reducer, acc);
}
var _reduce = /*#__PURE__*/(0,_createReduce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__["default"], _methodReduce, _iterableReduce);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_reduce);

/***/ }),

/***/ 2296:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _reduced)
/* harmony export */ });
function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}

/***/ }),

/***/ 8477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};
var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_toISOString);

/***/ }),

/***/ 2420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toString)
/* harmony export */ });
/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6265);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6584);
/* harmony import */ var _quote_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9569);
/* harmony import */ var _toISOString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8477);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7783);
/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7444);






function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return (0,_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return (0,_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k) {
      return (0,_quote_js__WEBPACK_IMPORTED_MODULE_2__["default"])(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };
  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + (0,_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + (0,_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(recur, x).concat(mapPairs(x, (0,_reject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function (k) {
        return /^\d+$/.test(k);
      }, (0,_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : (0,_quote_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toISOString_js__WEBPACK_IMPORTED_MODULE_5__["default"])(x))) + ')';
    case '[object Map]':
      return 'new Map(' + recur(Array.from(x)) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object Set]':
      return 'new Set(' + recur(Array.from(x).sort()) + ')';
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : (0,_quote_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, (0,_keys_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x)).join(', ') + '}';
  }
}

/***/ }),

/***/ 2719:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xArrayReduce)
/* harmony export */ });
function _xArrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

/***/ }),

/***/ 9728:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4334);
/* harmony import */ var _xArrayReduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2719);
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(560);



function _xIterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}
function _xMethodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName]((0,_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xf['@@transducer/step'], xf), acc));
}
var _xReduce = /*#__PURE__*/(0,_createReduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_xArrayReduce_js__WEBPACK_IMPORTED_MODULE_2__["default"], _xMethodReduce, _xIterableReduce);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_xReduce);

/***/ }),

/***/ 6359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xall)
/* harmony export */ });
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2296);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3143);


var XAll = /*#__PURE__*/function () {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].init;
  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = (0,_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };
  return XAll;
}();
function _xall(f) {
  return function (xf) {
    return new XAll(f, xf);
  };
}

/***/ }),

/***/ 3143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
});

/***/ }),

/***/ 8080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xfilter)
/* harmony export */ });
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3143);

var XFilter = /*#__PURE__*/function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].init;
  XFilter.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };
  return XFilter;
}();
function _xfilter(f) {
  return function (xf) {
    return new XFilter(f, xf);
  };
}

/***/ }),

/***/ 6390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3143);

var XMap = /*#__PURE__*/function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].init;
  XMap.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };
  return XMap;
}();
var _xmap = function _xmap(f) {
  return function (xf) {
    return new XMap(f, xf);
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_xmap);

/***/ }),

/***/ 4514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xwrap)
/* harmony export */ });
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };
  return XWrap;
}();
function _xwrap(fn) {
  return new XWrap(fn);
}

/***/ }),

/***/ 7694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5734);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3654);




/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty, R.isNotEmpty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);           //=> false
 *      R.isEmpty([]);                  //=> true
 *      R.isEmpty('');                  //=> true
 *      R.isEmpty(null);                //=> false
 *      R.isEmpty({});                  //=> true
 *      R.isEmpty({length: 0});         //=> false
 *      R.isEmpty(Uint8Array.from('')); //=> true
 */
var isEmpty = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isEmpty(x) {
  return x != null && (0,_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x, (0,_empty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);

/***/ }),

/***/ 7783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5722);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6590);




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();
var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && (0,_internal_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj);
  for (prop in obj) {
    if ((0,_internal_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if ((0,_internal_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 9451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _internal_nth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5136);



/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String | Undefined
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> undefined
 */
var last = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (list) {
  return (0,_internal_nth_js__WEBPACK_IMPORTED_MODULE_1__["default"])(-1, list);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (last);

/***/ }),

/***/ 9362:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _liftN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7110);



/**
 * "lifts" a function of arity >= 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
 */
var lift = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function lift(fn) {
  return (0,_liftN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, fn);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lift);

/***/ }),

/***/ 7110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4121);
/* harmony import */ var _ap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3470);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9784);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(397);






/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      const madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function liftN(arity, fn) {
  var lifted = (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arity, fn);
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arity, function () {
    return (0,_internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ap_js__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_map_js__WEBPACK_IMPORTED_MODULE_4__["default"])(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (liftN);

/***/ }),

/***/ 397:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4121);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6738);
/* harmony import */ var _internal_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6584);
/* harmony import */ var _internal_xmap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6390);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9784);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7783);








/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex, R.pluck, R.project
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['fantasy-land/map', 'map'], _internal_xmap_js__WEBPACK_IMPORTED_MODULE_2__["default"], function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_3__["default"])(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return (0,_internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_4__["default"])(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, (0,_keys_js__WEBPACK_IMPORTED_MODULE_5__["default"])(functor));
    default:
      return (0,_internal_map_js__WEBPACK_IMPORTED_MODULE_6__["default"])(fn, functor);
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);

/***/ }),

/***/ 4981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9271);



/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function max(a, b) {
  if (a === b) {
    return b;
  }
  function safeMax(x, y) {
    if (x > y !== y > x) {
      return y > x ? y : x;
    }
    return undefined;
  }
  var maxByValue = safeMax(a, b);
  if (maxByValue !== undefined) {
    return maxByValue;
  }
  var maxByType = safeMax(typeof a, typeof b);
  if (maxByType !== undefined) {
    return maxByType === typeof a ? a : b;
  }
  var stringA = (0,_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a);
  var maxByStringValue = safeMax(stringA, (0,_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b));
  if (maxByStringValue !== undefined) {
    return maxByStringValue === stringA ? a : b;
  }
  return b;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (max);

/***/ }),

/***/ 1515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8933);



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeDeepRight(lObj, rObj) {
  return (0,_mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeDeepRight);

/***/ }),

/***/ 8933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9088);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var _mergeWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8052);




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeDeepWithKey(fn, lObj, rObj) {
  return (0,_mergeWithKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (k, lVal, rVal) {
    if ((0,_internal_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(lVal) && (0,_internal_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeDeepWithKey);

/***/ }),

/***/ 8052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9088);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5722);



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;
  l = l || {};
  r = r || {};
  for (k in l) {
    if ((0,_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, l)) {
      result[k] = (0,_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }
  for (k in r) {
    if ((0,_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, r) && !(0,_internal_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])(k, result)) {
      result[k] = r[k];
    }
  }
  return result;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeWithKey);

/***/ }),

/***/ 2486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
var not = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function not(a) {
  return !a;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (not);

/***/ }),

/***/ 4864:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8067);



/**
 * Retrieves the value at a given path. The nodes of the path can be arbitrary strings or non-negative integers.
 * For anything else, the value is unspecified. Integer paths are meant to index arrays, strings are meant for objects.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> a | Undefined
 * @sig Idx = String | NonNegativeInt
 * @param {Array} path The path to use.
 * @param {Object} obj The object or array to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth, R.assocPath, R.dissocPath
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 *      R.path([2], {'2': 2}); //=> 2
 *      R.path([-2], {'-2': 'a'}); //=> undefined
 */

var path = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_path_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);

/***/ }),

/***/ 4787:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9088);
/* harmony import */ var _internal_path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8067);



/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int | Symbol
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 *      R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 */
var pathSatisfies = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pathSatisfies(pred, propPath, obj) {
  return pred((0,_internal_path_js__WEBPACK_IMPORTED_MODULE_1__["default"])(propPath, obj));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathSatisfies);

/***/ }),

/***/ 4494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
var pick = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pick);

/***/ }),

/***/ 7567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3607);
/* harmony import */ var _internal_pipe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4436);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7797);
/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6561);





/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 * @symb R.pipe(f, g, h)(a)(b) = h(g(f(a)))(b)
 */
function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return (0,_internal_arity_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments[0].length, (0,_reduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_internal_pipe_js__WEBPACK_IMPORTED_MODULE_2__["default"], arguments[0], (0,_tail_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arguments)));
}

/***/ }),

/***/ 9590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8822);




/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.project, R.prop, R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function pluck(p, list) {
  return (0,_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_prop_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p), list);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pluck);

/***/ }),

/***/ 8822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7700);
/* harmony import */ var _internal_nth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5136);




/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.props, R.pluck, R.project, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function prop(p, obj) {
  if (obj == null) {
    return;
  }
  return (0,_internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p) ? (0,_internal_nth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p, obj) : obj[p];
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prop);

/***/ }),

/***/ 5379:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9088);
/* harmony import */ var _defaultTo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6719);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8822);




/**
 * Return the specified property of the given non-null object if the property
 * is present and it's value is not `null`, `undefined` or `NaN`.
 *
 * Otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function propOr(val, p, obj) {
  return (0,_defaultTo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val, (0,_prop_js__WEBPACK_IMPORTED_MODULE_2__["default"])(p, obj));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (propOr);

/***/ }),

/***/ 7797:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9088);
/* harmony import */ var _internal_xReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9728);
/* harmony import */ var _internal_xwrap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4514);




/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (xf, acc, list) {
  return (0,_internal_xReduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof xf === 'function' ? (0,_internal_xwrap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(xf) : xf, acc, list);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reduce);

/***/ }),

/***/ 7444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_complement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7940);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5959);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8481);




/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 !== 0;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function reject(pred, filterable) {
  return (0,_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_internal_complement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pred), filterable);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reject);

/***/ }),

/***/ 5969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6122);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9088);



/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_1__["default"])('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice);

/***/ }),

/***/ 6561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6122);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5969);




/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_1__["default"])('tail', /*#__PURE__*/(0,_slice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1, Infinity)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tail);

/***/ }),

/***/ 9271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);
/* harmony import */ var _internal_toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2420);



/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function toString(val) {
  return (0,_internal_toString_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val, []);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);

/***/ }),

/***/ 963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8938);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig * -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(async () => {}); //=> "AsyncFunction"
 *      R.type(undefined); //=> "Undefined"
 *      R.type(BigInt(123)); //=> "BigInt"
 */
var type = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (type);

/***/ }),

/***/ 7951:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAK: () => (/* binding */ BREAK),
/* harmony export */   cloneNode: () => (/* binding */ cloneNode),
/* harmony export */   getNodeType: () => (/* binding */ getNodeType),
/* harmony export */   getVisitFn: () => (/* binding */ getVisitFn),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   mergeAll: () => (/* binding */ mergeAll),
/* harmony export */   visit: () => (/* binding */ visit)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2449);


/**
 * SPDX-FileCopyrightText: Copyright (c) GraphQL Contributors
 *
 * SPDX-License-Identifier: MIT
 */

// getVisitFn :: (Visitor, String, Boolean) -> Function
const getVisitFn = (visitor, type, isLeaving) => {
  const typeVisitor = visitor[type];
  if (typeVisitor != null) {
    if (!isLeaving && typeof typeVisitor === 'function') {
      // { Type() {} }
      return typeVisitor;
    }
    const typeSpecificVisitor = isLeaving ? typeVisitor.leave : typeVisitor.enter;
    if (typeof typeSpecificVisitor === 'function') {
      // { Type: { enter() {}, leave() {} } }
      return typeSpecificVisitor;
    }
  } else {
    const specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor != null) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      const specificTypeVisitor = specificVisitor[type];
      if (typeof specificTypeVisitor === 'function') {
        // { enter: { Type() {} }, leave: { Type() {} } }
        return specificTypeVisitor;
      }
    }
  }
  return null;
};
const BREAK = {};

// getNodeType :: Node -> String
const getNodeType = node => node === null || node === void 0 ? void 0 : node.type;

// isNode :: Node -> Boolean
const isNode = node => typeof getNodeType(node) === 'string';

// cloneNode :: a -> a
const cloneNode = node => Object.create(Object.getPrototypeOf(node), Object.getOwnPropertyDescriptors(node));

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 * `exposeEdits=true` can be used to expose the edited node from the previous visitors.
 */

const mergeAll = (visitors, {
  visitFnGetter = getVisitFn,
  nodeTypeGetter = getNodeType,
  breakSymbol = BREAK,
  deleteNodeSymbol = null,
  skipVisitingNodeSymbol = false,
  exposeEdits = false
} = {}) => {
  const skipSymbol = Symbol('skip');
  const skipping = new Array(visitors.length).fill(skipSymbol);
  return {
    enter(node, key, parent, path, ancestors, link) {
      let currentNode = node;
      let hasChanged = false;
      const linkProxy = {
        ...link,
        replaceWith(newNode, replacer) {
          link.replaceWith(newNode, replacer);
          currentNode = newNode;
        }
      };
      for (let i = 0; i < visitors.length; i += 1) {
        if (skipping[i] === skipSymbol) {
          const visitFn = visitFnGetter(visitors[i], nodeTypeGetter(currentNode), false);
          if (typeof visitFn === 'function') {
            const result = visitFn.call(visitors[i], currentNode, key, parent, path, ancestors, linkProxy);

            // check if the visitor is async
            if (typeof (result === null || result === void 0 ? void 0 : result.then) === 'function') {
              throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"]('Async visitor not supported in sync mode', {
                visitor: visitors[i],
                visitFn
              });
            }
            if (result === skipVisitingNodeSymbol) {
              skipping[i] = currentNode;
            } else if (result === breakSymbol) {
              skipping[i] = breakSymbol;
            } else if (result === deleteNodeSymbol) {
              return result;
            } else if (result !== undefined) {
              if (exposeEdits) {
                currentNode = result;
                hasChanged = true;
              } else {
                return result;
              }
            }
          }
        }
      }
      return hasChanged ? currentNode : undefined;
    },
    leave(node, key, parent, path, ancestors, link) {
      let currentNode = node;
      const linkProxy = {
        ...link,
        replaceWith(newNode, replacer) {
          link.replaceWith(newNode, replacer);
          currentNode = newNode;
        }
      };
      for (let i = 0; i < visitors.length; i += 1) {
        if (skipping[i] === skipSymbol) {
          const visitFn = visitFnGetter(visitors[i], nodeTypeGetter(currentNode), true);
          if (typeof visitFn === 'function') {
            const result = visitFn.call(visitors[i], currentNode, key, parent, path, ancestors, linkProxy);

            // check if the visitor is async
            if (typeof (result === null || result === void 0 ? void 0 : result.then) === 'function') {
              throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"]('Async visitor not supported in sync mode', {
                visitor: visitors[i],
                visitFn
              });
            }
            if (result === breakSymbol) {
              skipping[i] = breakSymbol;
            } else if (result !== undefined && result !== skipVisitingNodeSymbol) {
              return result;
            }
          }
        } else if (skipping[i] === currentNode) {
          skipping[i] = skipSymbol;
        }
      }
      return undefined;
    }
  };
};
const mergeAllAsync = (visitors, {
  visitFnGetter = getVisitFn,
  nodeTypeGetter = getNodeType,
  breakSymbol = BREAK,
  deleteNodeSymbol = null,
  skipVisitingNodeSymbol = false,
  exposeEdits = false
} = {}) => {
  const skipSymbol = Symbol('skip');
  const skipping = new Array(visitors.length).fill(skipSymbol);
  return {
    async enter(node, key, parent, path, ancestors, link) {
      let currentNode = node;
      let hasChanged = false;
      const linkProxy = {
        ...link,
        replaceWith(newNode, replacer) {
          link.replaceWith(newNode, replacer);
          currentNode = newNode;
        }
      };
      for (let i = 0; i < visitors.length; i += 1) {
        if (skipping[i] === skipSymbol) {
          const visitFn = visitFnGetter(visitors[i], nodeTypeGetter(currentNode), false);
          if (typeof visitFn === 'function') {
            // eslint-disable-next-line no-await-in-loop
            const result = await visitFn.call(visitors[i], currentNode, key, parent, path, ancestors, linkProxy);
            if (result === skipVisitingNodeSymbol) {
              skipping[i] = currentNode;
            } else if (result === breakSymbol) {
              skipping[i] = breakSymbol;
            } else if (result === deleteNodeSymbol) {
              return result;
            } else if (result !== undefined) {
              if (exposeEdits) {
                currentNode = result;
                hasChanged = true;
              } else {
                return result;
              }
            }
          }
        }
      }
      return hasChanged ? currentNode : undefined;
    },
    async leave(node, key, parent, path, ancestors, link) {
      let currentNode = node;
      const linkProxy = {
        ...link,
        replaceWith(newNode, replacer) {
          link.replaceWith(newNode, replacer);
          currentNode = newNode;
        }
      };
      for (let i = 0; i < visitors.length; i += 1) {
        if (skipping[i] === skipSymbol) {
          const visitFn = visitFnGetter(visitors[i], nodeTypeGetter(currentNode), true);
          if (typeof visitFn === 'function') {
            // eslint-disable-next-line no-await-in-loop
            const result = await visitFn.call(visitors[i], currentNode, key, parent, path, ancestors, linkProxy);
            if (result === breakSymbol) {
              skipping[i] = breakSymbol;
            } else if (result !== undefined && result !== skipVisitingNodeSymbol) {
              return result;
            }
          }
        } else if (skipping[i] === currentNode) {
          skipping[i] = skipSymbol;
        }
      }
      return undefined;
    }
  };
};
mergeAll[Symbol.for('nodejs.util.promisify.custom')] = mergeAllAsync;

/* eslint-disable no-continue, no-param-reassign */
/**
 * visit() will walk through an AST using a preorder depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 *  @sig visit :: (Node, Visitor, Options)
 *  @sig      Options = { keyMap: Object, state: Object }
 */
const visit = (
// @ts-ignore
root,
// @ts-ignore
visitor, {
  keyMap = null,
  state = {},
  breakSymbol = BREAK,
  deleteNodeSymbol = null,
  skipVisitingNodeSymbol = false,
  visitFnGetter = getVisitFn,
  nodeTypeGetter = getNodeType,
  nodePredicate = isNode,
  nodeCloneFn = cloneNode,
  detectCycles = true
} = {}) => {
  const visitorKeys = keyMap || {};
  let stack;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let parent;
  let edits = [];
  let node = root;
  const path = [];
  // @ts-ignore
  const ancestors = [];
  do {
    index += 1;
    const isLeaving = index === keys.length;
    let key;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      // @ts-ignore
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          // @ts-ignore; creating clone
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === deleteNodeSymbol) {
              node.splice(arrayKey, 1);
              editOffset += 1;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          // creating clone
          node = nodeCloneFn(node);
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      // @ts-ignore
      edits = stack.edits;
      // @ts-ignore
      inArray = stack.inArray;
      // @ts-ignore
      stack = stack.prev;
    } else if (parent !== deleteNodeSymbol && parent !== undefined) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === deleteNodeSymbol || node === undefined) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _result;
      if (!nodePredicate(node)) {
        throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"](`Invalid AST Node:  ${String(node)}`, {
          node
        });
      }

      // cycle detected; skipping over a sub-tree to avoid recursion
      if (detectCycles && ancestors.includes(node)) {
        path.pop();
        continue;
      }
      // call appropriate visitor function if available
      const visitFn = visitFnGetter(visitor, nodeTypeGetter(node), isLeaving);
      if (visitFn) {
        // assign state
        for (const [stateKey, stateValue] of Object.entries(state)) {
          visitor[stateKey] = stateValue;
        }
        const link = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(newNode, replacer) {
            if (typeof replacer === 'function') {
              replacer(newNode, node, key, parent, path, ancestors);
            } else if (parent) {
              parent[key] = newNode;
            }
            if (!isLeaving) {
              node = newNode;
            }
          }
        };

        // retrieve result
        result = visitFn.call(visitor, node, key, parent, path, ancestors, link);
      }

      // check if the visitor is async
      if (typeof ((_result = result) === null || _result === void 0 ? void 0 : _result.then) === 'function') {
        throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"]('Async visitor not supported in sync mode', {
          visitor,
          visitFn
        });
      }
      if (result === breakSymbol) {
        break;
      }
      if (result === skipVisitingNodeSymbol) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== undefined) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (nodePredicate(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }
    if (!isLeaving) {
      var _visitorKeys$nodeType;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      // @ts-ignore
      keys = inArray ? node : (_visitorKeys$nodeType = visitorKeys[nodeTypeGetter(node)]) !== null && _visitorKeys$nodeType !== void 0 ? _visitorKeys$nodeType : [];
      index = -1;
      edits = [];
      if (parent !== deleteNodeSymbol && parent !== undefined) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
  }
  return root;
};

/**
 * Asynchronous version of visit.
 */
// @ts-ignore
visit[Symbol.for('nodejs.util.promisify.custom')] = async (
// @ts-ignore
root,
// @ts-ignore
visitor, {
  keyMap = null,
  state = {},
  breakSymbol = BREAK,
  deleteNodeSymbol = null,
  skipVisitingNodeSymbol = false,
  visitFnGetter = getVisitFn,
  nodeTypeGetter = getNodeType,
  nodePredicate = isNode,
  nodeCloneFn = cloneNode,
  detectCycles = true
} = {}) => {
  const visitorKeys = keyMap || {};
  let stack;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let parent;
  let edits = [];
  let node = root;
  const path = [];
  // @ts-ignore
  const ancestors = [];
  do {
    index += 1;
    const isLeaving = index === keys.length;
    let key;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      // @ts-ignore
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          // @ts-ignore; creating clone
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === deleteNodeSymbol) {
              node.splice(arrayKey, 1);
              editOffset += 1;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          // creating clone
          node = nodeCloneFn(node);
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      // @ts-ignore
      edits = stack.edits;
      // @ts-ignore
      inArray = stack.inArray;
      // @ts-ignore
      stack = stack.prev;
    } else if (parent !== deleteNodeSymbol && parent !== undefined) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === deleteNodeSymbol || node === undefined) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      if (!nodePredicate(node)) {
        throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"](`Invalid AST Node: ${String(node)}`, {
          node
        });
      }

      // cycle detected; skipping over a sub-tree to avoid recursion
      if (detectCycles && ancestors.includes(node)) {
        path.pop();
        continue;
      }
      const visitFn = visitFnGetter(visitor, nodeTypeGetter(node), isLeaving);
      if (visitFn) {
        // assign state
        for (const [stateKey, stateValue] of Object.entries(state)) {
          visitor[stateKey] = stateValue;
        }
        const link = {
          // eslint-disable-next-line @typescript-eslint/no-loop-func
          replaceWith(newNode, replacer) {
            if (typeof replacer === 'function') {
              replacer(newNode, node, key, parent, path, ancestors);
            } else if (parent) {
              parent[key] = newNode;
            }
            if (!isLeaving) {
              node = newNode;
            }
          }
        };

        // retrieve result
        result = await visitFn.call(visitor, node, key, parent, path, ancestors, link); // eslint-disable-line no-await-in-loop
      }
      if (result === breakSymbol) {
        break;
      }
      if (result === skipVisitingNodeSymbol) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== undefined) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (nodePredicate(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }
    if (!isLeaving) {
      var _visitorKeys$nodeType2;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      // @ts-ignore
      keys = inArray ? node : (_visitorKeys$nodeType2 = visitorKeys[nodeTypeGetter(node)]) !== null && _visitorKeys$nodeType2 !== void 0 ? _visitorKeys$nodeType2 : [];
      index = -1;
      edits = [];
      if (parent !== deleteNodeSymbol && parent !== undefined) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
  }
  return root;
};

/* eslint-enable */

/***/ }),

/***/ 1244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2449);

class CloneError extends _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"] {
  value;
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (typeof structuredOptions !== 'undefined') {
      this.value = structuredOptions.value;
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloneError);

/***/ }),

/***/ 426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1244);

class DeepCloneError extends _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeepCloneError);

/***/ }),

/***/ 8774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1244);

class ShallowCloneError extends _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShallowCloneError);

/***/ }),

/***/ 4831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep),
/* harmony export */   cloneShallow: () => (/* binding */ cloneShallow)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _errors_DeepCloneError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(426);
/* harmony import */ var _errors_ShallowCloneError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8774);




const cloneDeep = (value, options = {}) => {
  const {
    visited = new WeakMap()
  } = options;
  const passThroughOptions = {
    ...options,
    visited
  };

  // detect cycle and return memoized value
  if (visited.has(value)) {
    return visited.get(value);
  }
  if (value instanceof minim__WEBPACK_IMPORTED_MODULE_0__.KeyValuePair) {
    const {
      key,
      value: val
    } = value;
    const keyCopy = (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(key) ? cloneDeep(key, passThroughOptions) : key;
    const valueCopy = (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(val) ? cloneDeep(val, passThroughOptions) : val;
    const copy = new minim__WEBPACK_IMPORTED_MODULE_0__.KeyValuePair(keyCopy, valueCopy);
    visited.set(value, copy);
    return copy;
  }
  if (value instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ObjectSlice) {
    const mapper = element => cloneDeep(element, passThroughOptions);
    const items = [...value].map(mapper);
    const copy = new minim__WEBPACK_IMPORTED_MODULE_0__.ObjectSlice(items);
    visited.set(value, copy);
    return copy;
  }
  if (value instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ArraySlice) {
    const mapper = element => cloneDeep(element, passThroughOptions);
    const items = [...value].map(mapper);
    const copy = new minim__WEBPACK_IMPORTED_MODULE_0__.ArraySlice(items);
    visited.set(value, copy);
    return copy;
  }
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(value)) {
    const copy = cloneShallow(value); // eslint-disable-line @typescript-eslint/no-use-before-define

    visited.set(value, copy);
    if (value.content) {
      if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(value.content)) {
        copy.content = cloneDeep(value.content, passThroughOptions);
      } else if (value.content instanceof minim__WEBPACK_IMPORTED_MODULE_0__.KeyValuePair) {
        copy.content = cloneDeep(value.content, passThroughOptions);
      } else if (Array.isArray(value.content)) {
        const mapper = element => cloneDeep(element, passThroughOptions);
        copy.content = value.content.map(mapper);
      } else {
        copy.content = value.content;
      }
    } else {
      copy.content = value.content;
    }
    return copy;
  }
  throw new _errors_DeepCloneError_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]("Value provided to cloneDeep function couldn't be cloned", {
    value
  });
};
cloneDeep.safe = value => {
  try {
    return cloneDeep(value);
  } catch {
    return value;
  }
};
const cloneShallowKeyValuePair = keyValuePair => {
  const {
    key,
    value
  } = keyValuePair;
  return new minim__WEBPACK_IMPORTED_MODULE_0__.KeyValuePair(key, value);
};
const cloneShallowArraySlice = arraySlice => {
  const items = [...arraySlice];
  return new minim__WEBPACK_IMPORTED_MODULE_0__.ArraySlice(items);
};
const cloneShallowObjectSlice = objectSlice => {
  const items = [...objectSlice];
  return new minim__WEBPACK_IMPORTED_MODULE_0__.ObjectSlice(items);
};

/* eslint-disable no-underscore-dangle */
const cloneShallowElement = element => {
  // @ts-ignore
  const copy = new element.constructor();
  copy.element = element.element;
  if (element.meta.length > 0) {
    copy._meta = cloneDeep(element.meta);
  }
  if (element.attributes.length > 0) {
    copy._attributes = cloneDeep(element.attributes);
  }
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(element.content)) {
    const content = element.content;
    copy.content = cloneShallowElement(content);
  } else if (Array.isArray(element.content)) {
    copy.content = [...element.content];
  } else if (element.content instanceof minim__WEBPACK_IMPORTED_MODULE_0__.KeyValuePair) {
    copy.content = cloneShallowKeyValuePair(element.content);
  } else {
    copy.content = element.content;
  }
  return copy;
};
/* eslint-enable */

const cloneShallow = value => {
  if (value instanceof minim__WEBPACK_IMPORTED_MODULE_0__.KeyValuePair) {
    return cloneShallowKeyValuePair(value);
  }
  if (value instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ObjectSlice) {
    return cloneShallowObjectSlice(value);
  }
  if (value instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ArraySlice) {
    return cloneShallowArraySlice(value);
  }
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(value)) {
    return cloneShallowElement(value);
  }
  throw new _errors_ShallowCloneError_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]("Value provided to cloneShallow function couldn't be cloned", {
    value
  });
};
cloneShallow.safe = value => {
  try {
    return cloneShallow(value);
  } catch {
    return value;
  }
};

/***/ }),

/***/ 1460:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);

class Annotation extends minim__WEBPACK_IMPORTED_MODULE_0__.StringElement {
  // classes: warning | error

  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'annotation';
  }
  get code() {
    return this.attributes.get('code');
  }
  set code(value) {
    this.attributes.set('code', value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Annotation);

/***/ }),

/***/ 5534:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);

class Comment extends minim__WEBPACK_IMPORTED_MODULE_0__.StringElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'comment';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ 6439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3031);


class ParseResult extends minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'parseResult';
  }
  get api() {
    return this.children.filter(item => item.classes.contains('api')).first;
  }
  get results() {
    return this.children.filter(item => item.classes.contains('result'));
  }
  get result() {
    return this.results.first;
  }
  get annotations() {
    return this.children.filter(item => item.element === 'annotation');
  }
  get warnings() {
    return this.children.filter(item => item.element === 'annotation' && item.classes.contains('warning'));
  }
  get errors() {
    return this.children.filter(item => item.element === 'annotation' && item.classes.contains('error'));
  }
  get isEmpty() {
    return this.children.reject(item => item.element === 'annotation').isEmpty;
  }
  replaceResult(replacement) {
    const {
      result
    } = this;
    if ((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__["default"])(result)) {
      return false;
    }

    // @ts-ignore
    const searchIndex = this.content.findIndex(e => e === result);
    if (searchIndex === -1) {
      return false;
    }
    this.content[searchIndex] = replacement;
    return true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParseResult);

/***/ }),

/***/ 2738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);

class SourceMap extends minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'sourceMap';
  }
  get positionStart() {
    return this.children.filter(item => item.classes.contains('position')).get(0);
  }
  get positionEnd() {
    return this.children.filter(item => item.classes.contains('position')).get(1);
  }
  set position(position) {
    if (typeof position === 'undefined') {
      return;
    }
    const start = new minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement([position.start.row, position.start.column, position.start.char]);
    const end = new minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement([position.end.row, position.end.column, position.end.char]);
    start.classes.push('position');
    end.classes.push('position');
    this.push(start).push(end);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceMap);

/***/ }),

/***/ 7901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4909);

class MediaTypes extends Array {
  unknownMediaType = 'application/octet-stream';

  // eslint-disable-next-line class-methods-use-this
  filterByFormat() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"]('filterByFormat method in MediaTypes class is not yet implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  findBy() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"]('findBy method in MediaTypes class is not yet implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  latest() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__["default"]('latest method in MediaTypes class is not yet implemented.');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaTypes);

/***/ }),

/***/ 2717:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deepmerge),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   emptyElement: () => (/* binding */ emptyElement)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4831);
/* harmony import */ var _transformers_serializers_value_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1514);




/* eslint-disable @typescript-eslint/no-use-before-define */
const emptyElement = element => {
  const meta = element.meta.length > 0 ? (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(element.meta) : undefined;
  const attributes = element.attributes.length > 0 ? (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(element.attributes) : undefined;

  // @ts-ignore
  return new element.constructor(undefined, meta, attributes);
};
const cloneUnlessOtherwiseSpecified = (element, options) => options.clone && options.isMergeableElement(element) ? deepmerge(emptyElement(element), element, options) : element;
const getMergeFunction = (keyElement, options) => {
  if (typeof options.customMerge !== 'function') {
    return deepmerge;
  }
  const customMerge = options.customMerge(keyElement, options);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
};
const getMetaMergeFunction = options => {
  if (typeof options.customMetaMerge !== 'function') {
    return targetMeta => (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(targetMeta);
  }
  return options.customMetaMerge;
};
const getAttributesMergeFunction = options => {
  if (typeof options.customAttributesMerge !== 'function') {
    return targetAttributes => (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(targetAttributes);
  }
  return options.customAttributesMerge;
};
const mergeArrayElement = (targetElement, sourceElement, options) => targetElement.concat(sourceElement)['fantasy-land/map'](item => cloneUnlessOtherwiseSpecified(item, options));
const mergeObjectElement = (targetElement, sourceElement, options) => {
  const destination = (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectElement)(targetElement) ? emptyElement(targetElement) : emptyElement(sourceElement);
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectElement)(targetElement)) {
    targetElement.forEach((value, key, member) => {
      const clonedMember = (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneShallow)(member);
      clonedMember.value = cloneUnlessOtherwiseSpecified(value, options);
      destination.content.push(clonedMember);
    });
  }
  sourceElement.forEach((value, key, member) => {
    const keyValue = (0,_transformers_serializers_value_index_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(key);
    let clonedMember;
    if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectElement)(targetElement) && targetElement.hasKey(keyValue) && options.isMergeableElement(value)) {
      const targetValue = targetElement.get(keyValue);
      clonedMember = (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneShallow)(member);
      clonedMember.value = getMergeFunction(key, options)(targetValue, value);
    } else {
      clonedMember = (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneShallow)(member);
      clonedMember.value = cloneUnlessOtherwiseSpecified(value, options);
    }
    destination.remove(keyValue);
    destination.content.push(clonedMember);
  });
  return destination;
};
const defaultOptions = {
  clone: true,
  isMergeableElement: element => (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectElement)(element) || (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isArrayElement)(element),
  arrayElementMerge: mergeArrayElement,
  objectElementMerge: mergeObjectElement,
  customMerge: undefined,
  customMetaMerge: undefined,
  customAttributesMerge: undefined
};
function deepmerge(targetElement, sourceElement, options) {
  var _mergedOptions$isMerg, _mergedOptions$arrayE, _mergedOptions$object;
  const mergedOptions = {
    ...defaultOptions,
    ...options
  };
  mergedOptions.isMergeableElement = (_mergedOptions$isMerg = mergedOptions.isMergeableElement) !== null && _mergedOptions$isMerg !== void 0 ? _mergedOptions$isMerg : defaultOptions.isMergeableElement;
  mergedOptions.arrayElementMerge = (_mergedOptions$arrayE = mergedOptions.arrayElementMerge) !== null && _mergedOptions$arrayE !== void 0 ? _mergedOptions$arrayE : defaultOptions.arrayElementMerge;
  mergedOptions.objectElementMerge = (_mergedOptions$object = mergedOptions.objectElementMerge) !== null && _mergedOptions$object !== void 0 ? _mergedOptions$object : defaultOptions.objectElementMerge;
  const sourceIsArrayElement = (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isArrayElement)(sourceElement);
  const targetIsArrayElement = (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isArrayElement)(targetElement);
  const sourceAndTargetTypesMatch = sourceIsArrayElement === targetIsArrayElement;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(sourceElement, mergedOptions);
  }

  // merging two elements
  const mergedElement = sourceIsArrayElement && typeof mergedOptions.arrayElementMerge === 'function' ? mergedOptions.arrayElementMerge(targetElement, sourceElement, mergedOptions) : mergedOptions.objectElementMerge(targetElement, sourceElement, mergedOptions);

  // merging meta & attributes
  mergedElement.meta = getMetaMergeFunction(mergedOptions)(targetElement.meta, sourceElement.meta);
  mergedElement.attributes = getAttributesMergeFunction(mergedOptions)(targetElement.attributes, sourceElement.attributes);
  return mergedElement;
}
deepmerge.all = (list, options) => {
  if (!Array.isArray(list)) {
    throw new TypeError('First argument of deepmerge should be an array.');
  }
  if (list.length === 0) {
    return new minim__WEBPACK_IMPORTED_MODULE_0__.ObjectElement();
  }
  return list.reduce((target, source) => {
    return deepmerge(target, source, options);
  }, emptyElement(list[0]));
};
/* eslint-enable @typescript-eslint/no-use-before-define */

/***/ }),

/***/ 6260:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Namespace: () => (/* binding */ Namespace),
/* harmony export */   createNamespace: () => (/* binding */ createNamespace),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4606);
/* harmony import */ var _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1460);
/* harmony import */ var _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5534);
/* harmony import */ var _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6439);
/* harmony import */ var _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2738);






class Namespace extends minim__WEBPACK_IMPORTED_MODULE_0__.Namespace {
  constructor() {
    super();
    this.register('annotation', _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.register('comment', _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.register('parseResult', _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.register('sourceMap', _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
}
const namespace = new Namespace();
const createNamespace = namespacePlugin => {
  const namespaceInstance = new Namespace();
  if ((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__["default"])(namespacePlugin)) {
    namespaceInstance.use(namespacePlugin);
  }
  return namespaceInstance;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (namespace);

/***/ }),

/***/ 1787:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isElementType: () => (/* binding */ isElementType)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);

const hasMethod = (name, element) => {
  return typeof element === 'object' && element !== null && name in element && typeof element[name] === 'function';
};
const hasBasicElementProps = element => typeof element === 'object' && element != null && '_storedElement' in element && typeof element._storedElement === 'string' &&
// eslint-disable-line no-underscore-dangle
'_content' in element;
const primitiveEq = (val, element) => {
  if (typeof element === 'object' && element !== null && 'primitive' in element) {
    return typeof element.primitive === 'function' && element.primitive() === val;
  }
  return false;
};
const hasClass = (cls, element) => {
  return typeof element === 'object' && element !== null && 'classes' in element && (Array.isArray(element.classes) || element.classes instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement) && element.classes.includes(cls);
};
const isElementType = (name, element) => typeof element === 'object' && element !== null && 'element' in element && element.element === name;
const createPredicate = predicateCreator => {
  return predicateCreator({
    hasMethod,
    hasBasicElementProps,
    primitiveEq,
    isElementType,
    hasClass
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPredicate);

/***/ }),

/***/ 60:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasElementSourceMap: () => (/* binding */ hasElementSourceMap),
/* harmony export */   includesClasses: () => (/* binding */ includesClasses),
/* harmony export */   includesSymbols: () => (/* binding */ includesSymbols),
/* harmony export */   isAnnotationElement: () => (/* binding */ isAnnotationElement),
/* harmony export */   isArrayElement: () => (/* binding */ isArrayElement),
/* harmony export */   isBooleanElement: () => (/* binding */ isBooleanElement),
/* harmony export */   isCommentElement: () => (/* binding */ isCommentElement),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isLinkElement: () => (/* binding */ isLinkElement),
/* harmony export */   isMemberElement: () => (/* binding */ isMemberElement),
/* harmony export */   isNullElement: () => (/* binding */ isNullElement),
/* harmony export */   isNumberElement: () => (/* binding */ isNumberElement),
/* harmony export */   isObjectElement: () => (/* binding */ isObjectElement),
/* harmony export */   isParseResultElement: () => (/* binding */ isParseResultElement),
/* harmony export */   isPrimitiveElement: () => (/* binding */ isPrimitiveElement),
/* harmony export */   isRefElement: () => (/* binding */ isRefElement),
/* harmony export */   isSourceMapElement: () => (/* binding */ isSourceMapElement),
/* harmony export */   isStringElement: () => (/* binding */ isStringElement)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5380);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3699);
/* harmony import */ var _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1460);
/* harmony import */ var _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5534);
/* harmony import */ var _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6439);
/* harmony import */ var _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2738);
/* harmony import */ var _helpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1787);








const isElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.Element || hasBasicElementProps(element) && primitiveEq(undefined, element);
});
const isStringElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.StringElement || hasBasicElementProps(element) && primitiveEq('string', element);
});
const isNumberElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.NumberElement || hasBasicElementProps(element) && primitiveEq('number', element);
});
const isNullElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.NullElement || hasBasicElementProps(element) && primitiveEq('null', element);
});
const isBooleanElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.BooleanElement || hasBasicElementProps(element) && primitiveEq('boolean', element);
});
const isObjectElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq,
  hasMethod
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ObjectElement || hasBasicElementProps(element) && primitiveEq('object', element) && hasMethod('keys', element) && hasMethod('values', element) && hasMethod('items', element);
});
const isArrayElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  primitiveEq,
  hasMethod
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement && !(element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.ObjectElement) || hasBasicElementProps(element) && primitiveEq('array', element) && hasMethod('push', element) && hasMethod('unshift', element) && hasMethod('map', element) && hasMethod('reduce', element);
});
const isMemberElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.MemberElement || hasBasicElementProps(element) && isElementType('member', element) && primitiveEq(undefined, element);
});
const isLinkElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.LinkElement || hasBasicElementProps(element) && isElementType('link', element) && primitiveEq(undefined, element);
});
const isRefElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof minim__WEBPACK_IMPORTED_MODULE_0__.RefElement || hasBasicElementProps(element) && isElementType('ref', element) && primitiveEq(undefined, element);
});
const isAnnotationElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] || hasBasicElementProps(element) && isElementType('annotation', element) && primitiveEq('array', element);
});
const isCommentElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] || hasBasicElementProps(element) && isElementType('comment', element) && primitiveEq('string', element);
});
const isParseResultElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] || hasBasicElementProps(element) && isElementType('parseResult', element) && primitiveEq('array', element);
});
const isSourceMapElement = (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"] || hasBasicElementProps(element) && isElementType('sourceMap', element) && primitiveEq('array', element);
});
const isPrimitiveElement = element => {
  return (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('object', element) || (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('array', element) || (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('boolean', element) || (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('number', element) || (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('string', element) || (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('null', element) || (0,_helpers_mjs__WEBPACK_IMPORTED_MODULE_1__.isElementType)('member', element);
};
const hasElementSourceMap = element => {
  return isSourceMapElement(element.meta.get('sourceMap'));
};
const includesSymbols = (symbols, element) => {
  if (symbols.length === 0) {
    return true;
  }
  const elementSymbols = element.attributes.get('symbols');
  if (!isArrayElement(elementSymbols)) {
    return false;
  }
  return (0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_7__["default"])(elementSymbols.toValue()), symbols);
};
const includesClasses = (classes, element) => {
  if (classes.length === 0) {
    return true;
  }
  return (0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_7__["default"])(element.classes.toValue()), classes);
};

/***/ }),

/***/ 2934:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRefractor: () => (/* binding */ createRefractor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_dispatcher_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5956);
/* harmony import */ var _clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4831);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _toolbox_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2471);





const refract = (value, {
  Type,
  plugins = []
}) => {
  /**
   * This is where values gets refracted into generic ApiDOM.
   * We don't allow consumers to hook into this translation.
   * Though we allow consumers to define their onw plugins on already transformed ApiDOM.
   */
  const element = new Type(value);
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_0__.isElement)(value)) {
    if (value.meta.length > 0) {
      element.meta = (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(value.meta);
    }
    if (value.attributes.length > 0) {
      element.attributes = (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(value.attributes);
    }
  }

  /**
   * Run plugins only when necessary.
   * Running plugins visitors means extra single traversal === performance hit.
   */
  return (0,_plugins_dispatcher_index_mjs__WEBPACK_IMPORTED_MODULE_2__.dispatchPluginsSync)(element, plugins, {
    toolboxCreator: _toolbox_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
    visitorOptions: {
      nodeTypeGetter: _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_4__.getNodeType
    }
  });
};
const createRefractor = Type => (value, options = {}) => refract(value, {
  ...options,
  Type
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refract);

/***/ }),

/***/ 9915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchPluginsAsync: () => (/* binding */ dispatchPluginsAsync),
/* harmony export */   dispatchPluginsSync: () => (/* binding */ dispatchPluginsSync)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1515);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5379);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5474);
/* harmony import */ var _toolbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2471);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5956);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7951);




const defaultDispatchPluginsOptions = {
  toolboxCreator: _toolbox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
  visitorOptions: {
    nodeTypeGetter: _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__.getNodeType,
    exposeEdits: true
  }
};
const dispatchPluginsSync = (element, plugins, options = {}) => {
  if (plugins.length === 0) return element;
  const mergedOptions = (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultDispatchPluginsOptions, options);
  const {
    toolboxCreator,
    visitorOptions
  } = mergedOptions;
  const toolbox = toolboxCreator();
  const pluginsSpecs = plugins.map(plugin => plugin(toolbox));
  const mergedPluginsVisitor = (0,_traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(pluginsSpecs.map((0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])({}, 'visitor')), {
    ...visitorOptions
  });
  pluginsSpecs.forEach((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__["default"])(['pre'], []));
  const newElement = (0,_traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__.visit)(element, mergedPluginsVisitor, visitorOptions);
  pluginsSpecs.forEach((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__["default"])(['post'], []));
  return newElement;
};
const dispatchPluginsAsync = async (element, plugins, options = {}) => {
  if (plugins.length === 0) return element;
  const mergedOptions = (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultDispatchPluginsOptions, options);
  const {
    toolboxCreator,
    visitorOptions
  } = mergedOptions;
  const toolbox = toolboxCreator();
  const pluginsSpecs = plugins.map(plugin => plugin(toolbox));
  const mergeAllVisitorsAsync = _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_3__.mergeAll[Symbol.for('nodejs.util.promisify.custom')];
  const visitAsync = _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__.visit[Symbol.for('nodejs.util.promisify.custom')];
  const mergedPluginsVisitor = mergeAllVisitorsAsync(pluginsSpecs.map((0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])({}, 'visitor')), {
    ...visitorOptions
  });
  await Promise.allSettled(pluginsSpecs.map((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__["default"])(['pre'], [])));
  const newElement = await visitAsync(element, mergedPluginsVisitor, visitorOptions);
  await Promise.allSettled(pluginsSpecs.map((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__["default"])(['post'], [])));
  return newElement;
};
dispatchPluginsSync[Symbol.for('nodejs.util.promisify.custom')] = dispatchPluginsAsync;

/***/ }),

/***/ 1865:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationElement: () => (/* reexport safe */ _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   ArrayElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement),
/* harmony export */   BooleanElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.BooleanElement),
/* harmony export */   CommentElement: () => (/* reexport safe */ _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   LinkElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.LinkElement),
/* harmony export */   NullElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.NullElement),
/* harmony export */   NumberElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.NumberElement),
/* harmony export */   ObjectElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.ObjectElement),
/* harmony export */   ParseResultElement: () => (/* reexport safe */ _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   RefElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.RefElement),
/* harmony export */   SourceMapElement: () => (/* reexport safe */ _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   StringElement: () => (/* reexport safe */ minim__WEBPACK_IMPORTED_MODULE_0__.StringElement)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8326);
/* harmony import */ var _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1460);
/* harmony import */ var _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5534);
/* harmony import */ var _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6439);
/* harmony import */ var _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2738);
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2934);






minim__WEBPACK_IMPORTED_MODULE_0__.ObjectElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.ObjectElement);
minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.ArrayElement);
minim__WEBPACK_IMPORTED_MODULE_0__.StringElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.StringElement);
minim__WEBPACK_IMPORTED_MODULE_0__.BooleanElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.BooleanElement);
minim__WEBPACK_IMPORTED_MODULE_0__.NullElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.NullElement);
minim__WEBPACK_IMPORTED_MODULE_0__.NumberElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.NumberElement);
minim__WEBPACK_IMPORTED_MODULE_0__.LinkElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.LinkElement);
minim__WEBPACK_IMPORTED_MODULE_0__.RefElement.refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(minim__WEBPACK_IMPORTED_MODULE_0__.RefElement);
_elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(_elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
_elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(_elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]);
_elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(_elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
_elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(_elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ 2471:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _namespace_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6260);


const createToolbox = () => {
  const predicates = {
    ..._predicates_index_mjs__WEBPACK_IMPORTED_MODULE_0__
  };
  return {
    predicates,
    namespace: _namespace_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToolbox);

/***/ }),

/***/ 5330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class EphemeralArray {
  type = 'EphemeralArray';
  content = [];
  reference = undefined;
  constructor(content) {
    this.content = content;
    this.reference = [];
  }
  toReference() {
    return this.reference;
  }
  toArray() {
    this.reference.push(...this.content);
    return this.reference;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EphemeralArray);

/***/ }),

/***/ 1234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class EphemeralObject {
  type = 'EphemeralObject';
  content = [];
  reference = undefined;
  constructor(content) {
    this.content = content;
    this.reference = {};
  }
  toReference() {
    return this.reference;
  }
  toObject() {
    return Object.assign(this.reference, Object.fromEntries(this.content));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EphemeralObject);

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9872);
/* harmony import */ var _ast_ephemeral_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5330);
/* harmony import */ var _ast_ephemeral_object_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1234);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);




/* eslint-disable class-methods-use-this */
class Visitor {
  ObjectElement = {
    enter: element => {
      if (this.references.has(element)) {
        return this.references.get(element).toReference();
      }
      const ephemeral = new _ast_ephemeral_object_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](element.content);
      this.references.set(element, ephemeral);
      return ephemeral;
    }
  };
  EphemeralObject = {
    leave: ephemeral => {
      return ephemeral.toObject();
    }
  };
  MemberElement = {
    enter: element => {
      return [element.key, element.value];
    }
  };
  ArrayElement = {
    enter: element => {
      if (this.references.has(element)) {
        return this.references.get(element).toReference();
      }
      const ephemeral = new _ast_ephemeral_array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](element.content);
      this.references.set(element, ephemeral);
      return ephemeral;
    }
  };
  EphemeralArray = {
    leave: ephemeral => {
      return ephemeral.toArray();
    }
  };
  references = new WeakMap();
  BooleanElement(element) {
    return element.toValue();
  }
  NumberElement(element) {
    return element.toValue();
  }
  StringElement(element) {
    return element.toValue();
  }
  NullElement() {
    return null;
  }
  RefElement(element, ...rest) {
    var _ancestors;
    const ancestors = rest[3];
    if (((_ancestors = ancestors[ancestors.length - 1]) === null || _ancestors === void 0 ? void 0 : _ancestors.type) === 'EphemeralObject') {
      return Symbol.for('delete-node');
    }
    return String(element.toValue());
  }
  LinkElement(element) {
    if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(element.href)) {
      return element.href.toValue();
    }
    return '';
  }
}
const serializer = element => {
  if (!(0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isElement)(element)) return element;

  // shortcut optimization for certain element types
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(element) || (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isNumberElement)(element) || (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isBooleanElement)(element) || (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isNullElement)(element)) {
    return element.toValue();
  }
  return (0,_visitor_mjs__WEBPACK_IMPORTED_MODULE_3__.visit)(element, new Visitor());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serializer);

/***/ }),

/***/ 9872:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visit: () => (/* binding */ visit)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3679);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5956);


const nodeTypeGetter = node => {
  if (typeof (node === null || node === void 0 ? void 0 : node.type) === 'string') {
    return node.type;
  }
  return (0,_traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.getNodeType)(node);
};
const keyMapDefault = {
  EphemeralObject: ['content'],
  EphemeralArray: ['content'],
  ..._traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.keyMapDefault
};

// eslint-disable-next-line import/prefer-default-export
const visit = (root,
// @ts-ignore
visitor, {
  keyMap = keyMapDefault,
  ...rest
} = {}) => {
  return (0,_traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.visit)(root, visitor, {
    keyMap,
    // @ts-ignore
    nodeTypeGetter,
    nodePredicate: ramda__WEBPACK_IMPORTED_MODULE_1__["default"],
    detectCycles: false,
    deleteNodeSymbol: Symbol.for('delete-node'),
    skipVisitingNodeSymbol: Symbol.for('skip-visiting-node'),
    ...rest
  });
};

// @ts-ignore
visit[Symbol.for('nodejs.util.promisify.custom')] = async (root, {
  keyMap = keyMapDefault,
  ...rest
} = {}) => {
  // @ts-ignore
  return _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__.visit[Symbol.for('nodejs.util.promisify.custom')](root, visitor, {
    keyMap,
    nodeTypeGetter,
    nodePredicate: ramda__WEBPACK_IMPORTED_MODULE_1__["default"],
    detectCycles: false,
    deleteNodeSymbol: Symbol.for('delete-node'),
    skipVisitingNodeSymbol: Symbol.for('skip-visiting-node'),
    ...rest
  });
};

/***/ }),

/***/ 5956:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAK: () => (/* reexport safe */ _swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__.BREAK),
/* harmony export */   PredicateVisitor: () => (/* binding */ PredicateVisitor),
/* harmony export */   cloneNode: () => (/* binding */ cloneNode),
/* harmony export */   getNodeType: () => (/* binding */ getNodeType),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   keyMapDefault: () => (/* binding */ keyMapDefault),
/* harmony export */   mergeAllVisitors: () => (/* reexport safe */ _swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__.mergeAll),
/* harmony export */   visit: () => (/* binding */ visit)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8833);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5102);
/* harmony import */ var _swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7951);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _clone_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4831);







// getNodeType :: Node -> String
const getNodeType = element => {
  /*
   * We're translating every possible higher element type to primitive minim type here.
   * We're using polymorphism to recognize any higher element type as ObjectElement or ArrayElement.
   * Using polymorphism allows us to assume any namespace.
   *
   * There is a problem with naming visitor methods described here: https://github.com/babel/babel/discussions/12874
   */
  return (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isObjectElement)(element) ? 'ObjectElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isArrayElement)(element) ? 'ArrayElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isMemberElement)(element) ? 'MemberElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(element) ? 'StringElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isBooleanElement)(element) ? 'BooleanElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isNumberElement)(element) ? 'NumberElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isNullElement)(element) ? 'NullElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isLinkElement)(element) ? 'LinkElement' : (0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isRefElement)(element) ? 'RefElement' : undefined;
};

// cloneNode :: a -> a
const cloneNode = node => {
  if ((0,_predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isElement)(node)) {
    return (0,_clone_index_mjs__WEBPACK_IMPORTED_MODULE_2__.cloneShallow)(node);
  }
  return (0,_swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__.cloneNode)(node);
};

// isNode :: Node -> Boolean
const isNode = (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(getNodeType, ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__["default"]);
const keyMapDefault = {
  ObjectElement: ['content'],
  ArrayElement: ['content'],
  MemberElement: ['key', 'value'],
  StringElement: [],
  BooleanElement: [],
  NumberElement: [],
  NullElement: [],
  RefElement: [],
  LinkElement: [],
  Annotation: [],
  Comment: [],
  ParseResultElement: ['content'],
  SourceMap: ['content']
};
class PredicateVisitor {
  result;
  predicate;
  returnOnTrue;
  returnOnFalse;
  constructor({
    predicate = ramda__WEBPACK_IMPORTED_MODULE_5__["default"],
    returnOnTrue,
    returnOnFalse
  } = {}) {
    this.result = [];
    this.predicate = predicate;
    this.returnOnTrue = returnOnTrue;
    this.returnOnFalse = returnOnFalse;
  }
  enter(element) {
    if (this.predicate(element)) {
      this.result.push(element);
      return this.returnOnTrue;
    }
    return this.returnOnFalse;
  }
}
const visit = (root,
// @ts-ignore
visitor, {
  keyMap = keyMapDefault,
  ...rest
} = {}) => {
  // @ts-ignore
  return (0,_swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__.visit)(root, visitor, {
    // @ts-ignore
    keyMap,
    // @ts-ignore
    nodeTypeGetter: getNodeType,
    nodePredicate: isNode,
    nodeCloneFn: cloneNode,
    ...rest
  });
};

// @ts-ignore
visit[Symbol.for('nodejs.util.promisify.custom')] = async (root,
// @ts-ignore
visitor, {
  keyMap = keyMapDefault,
  ...rest
} = {}) => {
  // @ts-ignore
  return _swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__.visit[Symbol.for('nodejs.util.promisify.custom')](root, visitor, {
    // @ts-ignore
    keyMap,
    // @ts-ignore
    nodeTypeGetter: getNodeType,
    nodePredicate: isNode,
    nodeCloneFn: cloneNode,
    ...rest
  });
};

/***/ }),

/***/ 6173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_aggregate_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1212);

class ApiDOMAggregateError extends _babel_runtime_corejs3_core_js_aggregate_error__WEBPACK_IMPORTED_MODULE_0__ {
  constructor(errors, message, options) {
    super(errors, message, options);
    this.name = this.constructor.name;
    if (typeof message === 'string') {
      this.message = message;
    }
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }

    /**
     * This needs to stay here until our minimum supported version of Node.js is >= 16.9.0.
     * Node.js >= 16.9.0 supports error causes natively.
     */
    if (options != null && typeof options === 'object' && Object.hasOwn(options, 'cause') && !('cause' in this)) {
      const {
        cause
      } = options;
      this.cause = cause;
      if (cause instanceof Error && 'stack' in cause) {
        this.stack = `${this.stack}\nCAUSE: ${cause.stack}`;
      }
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiDOMAggregateError);

/***/ }),

/***/ 5262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMAggregateError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6173);

class ApiDOMError extends Error {
  static [Symbol.hasInstance](instance) {
    // we want to ApiDOMAggregateError to act as if ApiDOMError was its superclass
    return super[Symbol.hasInstance](instance) || Function.prototype[Symbol.hasInstance].call(_ApiDOMAggregateError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"], instance);
  }
  constructor(message, options) {
    super(message, options);
    this.name = this.constructor.name;
    if (typeof message === 'string') {
      this.message = message;
    }
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }

    /**
     * This needs to stay here until our minimum supported version of Node.js is >= 16.9.0.
     * Node.js is >= 16.9.0 supports error causes natively.
     */
    if (options != null && typeof options === 'object' && Object.hasOwn(options, 'cause') && !('cause' in this)) {
      const {
        cause
      } = options;
      this.cause = cause;
      if (cause instanceof Error && 'stack' in cause) {
        this.stack = `${this.stack}\nCAUSE: ${cause.stack}`;
      }
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiDOMError);

/***/ }),

/***/ 2449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);

class ApiDOMStructuredError extends _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (structuredOptions != null && typeof structuredOptions === 'object') {
      const {
        cause,
        ...causelessOptions
      } = structuredOptions;
      Object.assign(this, causelessOptions);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiDOMStructuredError);

/***/ }),

/***/ 4909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UnsupportedOperationError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3930);

class NotImplementedError extends _UnsupportedOperationError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotImplementedError);

/***/ }),

/***/ 3930:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);

class UnsupportedOperationError extends _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnsupportedOperationError);

/***/ }),

/***/ 8103:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNodeType: () => (/* binding */ getNodeType),
/* harmony export */   keyMap: () => (/* binding */ keyMap)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5956);


// getNodeType :: Node -> String
const getNodeType = element => {
  if (!(0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)) {
    return undefined;
  }
  return `${element.element.charAt(0).toUpperCase() + element.element.slice(1)}Element`;
};

/**
 * There are unfortunately two `LinkElement` types. One is from base namespace
 * and the other one if from this namespace. `LinkElement` from base namespace
 * is used extremely rarely so it's almost always safe during traversing
 * to assume that `LinkElement` is element from this namespace.
 *
 * To be 100% sure that currently visiting `LinkElement` is from this namespace
 * use `isLinkElement` predicate from this namespace to assert for it.
 */

const keyMap = {
  CallbackElement: ['content'],
  ComponentsElement: ['content'],
  ContactElement: ['content'],
  DiscriminatorElement: ['content'],
  Encoding: ['content'],
  Example: ['content'],
  ExternalDocumentationElement: ['content'],
  HeaderElement: ['content'],
  InfoElement: ['content'],
  LicenseElement: ['content'],
  MediaTypeElement: ['content'],
  OAuthFlowElement: ['content'],
  OAuthFlowsElement: ['content'],
  OpenApi3_1Element: ['content'],
  OperationElement: ['content'],
  ParameterElement: ['content'],
  PathItemElement: ['content'],
  PathsElement: ['content'],
  ReferenceElement: ['content'],
  RequestBodyElement: ['content'],
  ResponseElement: ['content'],
  ResponsesElement: ['content'],
  SchemaElement: ['content'],
  SecurityRequirementElement: ['content'],
  SecuritySchemeElement: ['content'],
  ServerElement: ['content'],
  ServerVariableElement: ['content'],
  TagElement: ['content'],
  ..._swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.keyMapDefault
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiDesignSystemsMediaTypes: () => (/* reexport safe */ _media_types__WEBPACK_IMPORTED_MODULE_1__.ApiDesignSystemsMediaTypes),
/* harmony export */   FallbackVisitor: () => (/* reexport safe */ _refractor_visitors_FallbackVisitor__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   FixedFieldsVisitor: () => (/* reexport safe */ _refractor_visitors_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   InfoElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   MainElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   PrincipleElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   RequirementElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   RequirementLevelElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   ScenarioElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   SpecificationVisitor: () => (/* reexport safe */ _refractor_visitors_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   StandardElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   StandardIdentifierElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   Visitor: () => (/* reexport safe */ _refractor_visitors_Visitor__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _namespace__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   getNodeType: () => (/* reexport safe */ _traversal_visitor__WEBPACK_IMPORTED_MODULE_11__.getNodeType),
/* harmony export */   isArrayElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isArrayElement),
/* harmony export */   isBooleanElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isBooleanElement),
/* harmony export */   isElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isElement),
/* harmony export */   isInfoElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isInfoElement),
/* harmony export */   isLinkElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isLinkElement),
/* harmony export */   isMainElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isMainElement),
/* harmony export */   isMemberElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isMemberElement),
/* harmony export */   isNullElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isNullElement),
/* harmony export */   isNumberElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isNumberElement),
/* harmony export */   isObjectElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isObjectElement),
/* harmony export */   isPrincipleElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isPrincipleElement),
/* harmony export */   isRefElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isRefElement),
/* harmony export */   isRequirementElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isRequirementElement),
/* harmony export */   isRequirementLevelElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isRequirementLevelElement),
/* harmony export */   isScenarioElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isScenarioElement),
/* harmony export */   isStandardElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isStandardElement),
/* harmony export */   isStandardIdentifierElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_6__.isStandardIdentifierElement),
/* harmony export */   isStringElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isStringElement),
/* harmony export */   keyMap: () => (/* reexport safe */ _traversal_visitor__WEBPACK_IMPORTED_MODULE_11__.keyMap),
/* harmony export */   mediaTypes: () => (/* reexport safe */ _media_types__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   refractPluginOpenApi3_1StandardIdentifierAccessors: () => (/* reexport safe */ _refractor_plugins_openapi_3_1_standard_identifier_accessors__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   refractPluginOpenApi3_1StandardIdentifierSelectors: () => (/* reexport safe */ _refractor_plugins_openapi_3_1_standard_identifier_selectors__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   validateOpenAPI3_1: () => (/* reexport safe */ _validator_openapi_3_1_validator__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _media_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9936);
/* harmony import */ var _refractor_plugins_openapi_3_1_standard_identifier_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(356);
/* harmony import */ var _refractor_plugins_openapi_3_1_standard_identifier_accessors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4754);
/* harmony import */ var _validator_openapi_3_1_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1817);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7269);
/* harmony import */ var _refractor_visitors_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4720);
/* harmony import */ var _refractor_visitors_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8863);
/* harmony import */ var _refractor_visitors_FallbackVisitor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2191);
/* harmony import */ var _refractor_visitors_Visitor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2746);
/* harmony import */ var _traversal_visitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(192);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1712);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7425);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9441);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9166);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1230);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9735);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(168);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7683);



// eslint-disable-next-line no-restricted-exports











/**
 * API Design Systems 2021-05-07 specification elements.
 */

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});