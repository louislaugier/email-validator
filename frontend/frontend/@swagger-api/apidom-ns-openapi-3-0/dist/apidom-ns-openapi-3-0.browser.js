(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["apidomNsOpenApi3_0"] = factory();
	else
		root["apidomNsOpenApi3_0"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 74014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Callback extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'callback';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Callback);

/***/ }),

/***/ 44281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Components extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'components';
  }
  get schemas() {
    return this.get('schemas');
  }
  set schemas(schemas) {
    this.set('schemas', schemas);
  }
  get responses() {
    return this.get('responses');
  }
  set responses(responses) {
    this.set('responses', responses);
  }
  get parameters() {
    return this.get('parameters');
  }
  set parameters(parameters) {
    this.set('parameters', parameters);
  }
  get examples() {
    return this.get('examples');
  }
  set examples(examples) {
    this.set('examples', examples);
  }
  get requestBodies() {
    return this.get('requestBodies');
  }
  set requestBodies(requestBodies) {
    this.set('requestBodies', requestBodies);
  }
  get headers() {
    return this.get('headers');
  }
  set headers(headers) {
    this.set('headers', headers);
  }
  get securitySchemes() {
    return this.get('securitySchemes');
  }
  set securitySchemes(securitySchemes) {
    this.set('securitySchemes', securitySchemes);
  }
  get links() {
    return this.get('links');
  }
  set links(links) {
    this.set('links', links);
  }
  get callbacks() {
    return this.get('callbacks');
  }
  set callbacks(callbacks) {
    this.set('callbacks', callbacks);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Components);

/***/ }),

/***/ 95857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Contact extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'contact';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get url() {
    return this.get('url');
  }
  set url(url) {
    this.set('url', url);
  }
  get email() {
    return this.get('email');
  }
  set email(email) {
    this.set('email', email);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ 32633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Discriminator extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'discriminator';
  }
  get propertyName() {
    return this.get('propertyName');
  }
  set propertyName(propertyName) {
    this.set('propertyName', propertyName);
  }
  get mapping() {
    return this.get('mapping');
  }
  set mapping(mapping) {
    this.set('mapping', mapping);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Discriminator);

/***/ }),

/***/ 37904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Encoding extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'encoding';
  }
  get contentType() {
    return this.get('contentType');
  }
  set contentType(contentType) {
    this.set('contentType', contentType);
  }
  get headers() {
    return this.get('headers');
  }
  set headers(headers) {
    this.set('headers', headers);
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
  get allowedReserved() {
    return this.get('allowedReserved');
  }
  set allowedReserved(allowedReserved) {
    this.set('allowedReserved', allowedReserved);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Encoding);

/***/ }),

/***/ 17931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Example extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'example';
  }
  get summary() {
    return this.get('summary');
  }
  set summary(summary) {
    this.set('summary', summary);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get value() {
    return this.get('value');
  }
  set value(value) {
    this.set('value', value);
  }
  get externalValue() {
    return this.get('externalValue');
  }
  set externalValue(externalValue) {
    this.set('externalValue', externalValue);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);

/***/ }),

/***/ 20950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ExternalDocumentation extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'externalDocumentation';
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get url() {
    return this.get('url');
  }
  set url(url) {
    this.set('url', url);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalDocumentation);

/***/ }),

/***/ 95376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Header extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'header';
  }
  get required() {
    if (this.hasKey('required')) {
      return this.get('required');
    }
    return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.BooleanElement(false);
  }
  set required(required) {
    this.set('required', required);
  }
  get deprecated() {
    if (this.hasKey('deprecated')) {
      return this.get('deprecated');
    }
    return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.BooleanElement(false);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 77425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Info extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'info';
    this.classes.push('info');
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
  get termsOfService() {
    return this.get('termsOfService');
  }
  set termsOfService(tos) {
    this.set('termsOfService', tos);
  }
  get contact() {
    return this.get('contact');
  }
  set contact(contactElement) {
    this.set('contact', contactElement);
  }
  get license() {
    return this.get('license');
  }
  set license(licenseElement) {
    this.set('license', licenseElement);
  }
  get version() {
    return this.get('version');
  }
  set version(version) {
    this.set('version', version);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

/***/ }),

/***/ 96878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class License extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'license';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get url() {
    return this.get('url');
  }
  set url(url) {
    this.set('url', url);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (License);

/***/ }),

/***/ 7469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70060);

class Link extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'link';
  }
  get operationRef() {
    return this.get('operationRef');
  }
  set operationRef(operationRef) {
    this.set('operationRef', operationRef);
  }
  get operationId() {
    return this.get('operationId');
  }
  set operationId(operationId) {
    this.set('operationId', operationId);
  }
  get operation() {
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(this.operationRef)) {
      return this.operationRef?.meta.get('operation');
    }
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.isStringElement)(this.operationId)) {
      return this.operationId?.meta.get('operation');
    }
    return undefined;
  }
  set operation(operation) {
    this.set('operation', operation);
  }
  get parameters() {
    return this.get('parameters');
  }
  set parameters(parameters) {
    this.set('parameters', parameters);
  }
  get requestBody() {
    return this.get('requestBody');
  }
  set requestBody(requestBody) {
    this.set('requestBody', requestBody);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get server() {
    return this.get('server');
  }
  set server(server) {
    this.set('server', server);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ 62521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class MediaType extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'mediaType';
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
  get encoding() {
    return this.get('encoding');
  }
  set encoding(encoding) {
    this.set('encoding', encoding);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaType);

/***/ }),

/***/ 16950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OAuthFlow extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'oAuthFlow';
  }
  get authorizationUrl() {
    return this.get('authorizationUrl');
  }
  set authorizationUrl(authorizationUrl) {
    this.set('authorizationUrl', authorizationUrl);
  }
  get tokenUrl() {
    return this.get('tokenUrl');
  }
  set tokenUrl(tokenUrl) {
    this.set('tokenUrl', tokenUrl);
  }
  get refreshUrl() {
    return this.get('refreshUrl');
  }
  set refreshUrl(refreshUrl) {
    this.set('refreshUrl', refreshUrl);
  }
  get scopes() {
    return this.get('scopes');
  }
  set scopes(scopes) {
    this.set('scopes', scopes);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthFlow);

/***/ }),

/***/ 4981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OAuthFlows extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'oAuthFlows';
  }
  get implicit() {
    return this.get('implicit');
  }
  set implicit(implicit) {
    this.set('implicit', implicit);
  }
  get password() {
    return this.get('password');
  }
  set password(password) {
    this.set('password', password);
  }
  get clientCredentials() {
    return this.get('clientCredentials');
  }
  set clientCredentials(clientCredentials) {
    this.set('clientCredentials', clientCredentials);
  }
  get authorizationCode() {
    return this.get('authorizationCode');
  }
  set authorizationCode(authorizationCode) {
    this.set('authorizationCode', authorizationCode);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthFlows);

/***/ }),

/***/ 84889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

// eslint-disable-next-line @typescript-eslint/naming-convention
class OpenApi3_0 extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'openApi3_0';
    this.classes.push('api');
  }
  get openapi() {
    return this.get('openapi');
  }
  set openapi(openapi) {
    this.set('openapi', openapi);
  }
  get info() {
    return this.get('info');
  }
  set info(info) {
    this.set('info', info);
  }
  get servers() {
    return this.get('servers');
  }
  set servers(servers) {
    this.set('servers', servers);
  }
  get paths() {
    return this.get('paths');
  }
  set paths(paths) {
    this.set('paths', paths);
  }
  get components() {
    return this.get('components');
  }
  set components(components) {
    this.set('components', components);
  }
  get security() {
    return this.get('security');
  }
  set security(security) {
    this.set('security', security);
  }
  get tags() {
    return this.get('tags');
  }
  set tags(tags) {
    this.set('tags', tags);
  }
  get externalDocs() {
    return this.get('externalDocs');
  }
  set externalDocs(externalDocs) {
    this.set('externalDocs', externalDocs);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenApi3_0);

/***/ }),

/***/ 98565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Openapi extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.StringElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'openapi';
    this.classes.push('spec-version');
    this.classes.push('version');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Openapi);

/***/ }),

/***/ 87788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Operation extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'operation';
  }
  get tags() {
    return this.get('tags');
  }
  set tags(tags) {
    this.set('tags', tags);
  }
  get summary() {
    return this.get('summary');
  }
  set summary(description) {
    this.set('summary', description);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  set externalDocs(externalDocs) {
    this.set('externalDocs', externalDocs);
  }
  get externalDocs() {
    return this.get('externalDocs');
  }
  get operationId() {
    return this.get('operationId');
  }
  set operationId(operationId) {
    this.set('operationId', operationId);
  }
  get parameters() {
    return this.get('parameters');
  }
  set parameters(parameters) {
    this.set('parameters', parameters);
  }
  get requestBody() {
    return this.get('requestBody');
  }
  set requestBody(requestBody) {
    this.set('requestBody', requestBody);
  }
  get responses() {
    return this.get('responses');
  }
  set responses(responses) {
    this.set('responses', responses);
  }
  get callbacks() {
    return this.get('callbacks');
  }
  set callbacks(callbacks) {
    this.set('callbacks', callbacks);
  }
  get deprecated() {
    if (this.hasKey('deprecated')) {
      return this.get('deprecated');
    }
    return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.BooleanElement(false);
  }
  set deprecated(deprecated) {
    this.set('deprecated', deprecated);
  }
  get security() {
    return this.get('security');
  }
  set security(security) {
    this.set('security', security);
  }
  get servers() {
    return this.get('severs');
  }
  set servers(servers) {
    this.set('servers', servers);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ }),

/***/ 47578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Parameter extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
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
  get required() {
    if (this.hasKey('required')) {
      return this.get('required');
    }
    return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.BooleanElement(false);
  }
  set required(required) {
    this.set('required', required);
  }
  get deprecated() {
    if (this.hasKey('deprecated')) {
      return this.get('deprecated');
    }
    return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.BooleanElement(false);
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
Object.defineProperty(Parameter.prototype, 'description', {
  get() {
    return this.get('description');
  },
  set(description) {
    this.set('description', description);
  },
  enumerable: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parameter);

/***/ }),

/***/ 16253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class PathItem extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'pathItem';
  }
  get $ref() {
    return this.get('$ref');
  }
  set $ref($ref) {
    this.set('$ref', $ref);
  }
  get summary() {
    return this.get('summary');
  }
  set summary(summary) {
    this.set('summary', summary);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get GET() {
    return this.get('get');
  }
  set GET(operation) {
    this.set('GET', operation);
  }
  get PUT() {
    return this.get('put');
  }
  set PUT(operation) {
    this.set('PUT', operation);
  }
  get POST() {
    return this.get('post');
  }
  set POST(operation) {
    this.set('POST', operation);
  }
  get DELETE() {
    return this.get('delete');
  }
  set DELETE(operation) {
    this.set('DELETE', operation);
  }
  get OPTIONS() {
    return this.get('options');
  }
  set OPTIONS(operation) {
    this.set('OPTIONS', operation);
  }
  get HEAD() {
    return this.get('head');
  }
  set HEAD(operation) {
    this.set('HEAD', operation);
  }
  get PATCH() {
    return this.get('patch');
  }
  set PATCH(operation) {
    this.set('PATCH', operation);
  }
  get TRACE() {
    return this.get('trace');
  }
  set TRACE(operation) {
    this.set('TRACE', operation);
  }
  get servers() {
    return this.get('servers');
  }
  set servers(servers) {
    this.set('servers', servers);
  }
  get parameters() {
    return this.get('parameters');
  }
  set parameters(parameters) {
    this.set('parameters', parameters);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathItem);

/***/ }),

/***/ 15001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Paths extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'paths';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paths);

/***/ }),

/***/ 27112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Reference extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'reference';
    this.classes.push('openapi-reference');
  }
  get $ref() {
    return this.get('$ref');
  }
  set $ref($ref) {
    this.set('$ref', $ref);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reference);

/***/ }),

/***/ 79964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class RequestBody extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'requestBody';
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get contentProp() {
    return this.get('content');
  }
  set contentProp(content) {
    this.set('content', content);
  }
  get required() {
    if (this.hasKey('required')) {
      return this.get('required');
    }
    return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.BooleanElement(false);
  }
  set required(required) {
    this.set('required', required);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestBody);

/***/ }),

/***/ 6370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Response extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'response';
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get headers() {
    return this.get('headers');
  }
  set headers(headers) {
    this.set('headers', headers);
  }
  get contentProp() {
    return this.get('content');
  }
  set contentProp(contentProp) {
    this.set('content', contentProp);
  }
  get links() {
    return this.get('links');
  }
  set links(links) {
    this.set('links', links);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Response);

/***/ }),

/***/ 53113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Responses extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'responses';
  }
  get default() {
    return this.get('default');
  }
  set default(defaultValue) {
    this.set('default', defaultValue);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responses);

/***/ }),

/***/ 9854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73930);
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78573);


/* eslint-disable class-methods-use-this */
class Schema extends _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__.JSONSchemaElement {
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
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('idProp getter in Schema class is not not supported.');
  }
  set idProp(idProps) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('idProp setter in Schema class is not not supported.');
  }
  get $schema() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('$schema getter in Schema class is not not supported.');
  }
  set $schema($schema) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('$schema setter in Schema class is not not supported.');
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
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('patternProperties getter in Schema class is not not supported.');
  }
  set patternProperties(patternProperties) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('patternProperties setter in Schema class is not not supported.');
  }
  get dependencies() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('dependencies getter in Schema class is not not supported.');
  }
  set dependencies(dependencies) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('dependencies setter in Schema class is not not supported.');
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
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('definitions getter in Schema class is not not supported.');
  }
  set definitions(definitions) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('definitions setter in Schema class is not not supported.');
  }

  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */

  get base() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('base getter in Schema class is not not supported.');
  }
  set base(base) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('base setter in Schema class is not not supported.');
  }
  get links() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('links getter in Schema class is not not supported.');
  }
  set links(links) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('links setter in Schema class is not not supported.');
  }
  get media() {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('media getter in Schema class is not not supported.');
  }
  set media(media) {
    throw new _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_1__["default"]('media setter in Schema class is not not supported.');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Schema);

/***/ }),

/***/ 11060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class SecurityRequirement extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'securityRequirement';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityRequirement);

/***/ }),

/***/ 1120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class SecurityScheme extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'securityScheme';
  }
  get type() {
    return this.get('type');
  }
  set type(type) {
    this.set('type', type);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
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
  set in(inVal) {
    this.set('in', inVal);
  }
  get scheme() {
    return this.get('scheme');
  }
  set scheme(scheme) {
    this.set('scheme', scheme);
  }
  get bearerFormat() {
    return this.get('bearerFormat');
  }
  set bearerFormat(bearerFormat) {
    this.set('bearerFormat', bearerFormat);
  }
  get flows() {
    return this.get('flows');
  }
  set flows(flows) {
    this.set('flows', flows);
  }
  get openIdConnectUrl() {
    return this.get('openIdConnectUrl');
  }
  set openIdConnectUrl(openIdConnectUrl) {
    this.set('openIdConnectUrl', openIdConnectUrl);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityScheme);

/***/ }),

/***/ 50710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Server extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'server';
  }
  get url() {
    return this.get('url');
  }
  set url(url) {
    this.set('url', url);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
  get variables() {
    return this.get('variables');
  }
  set variables(variables) {
    this.set('variables', variables);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Server);

/***/ }),

/***/ 68618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ServerVariable extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'serverVariable';
  }
  get enum() {
    return this.get('enum');
  }
  set enum(value) {
    this.set('enum', value);
  }
  get default() {
    return this.get('default');
  }
  set default(value) {
    this.set('default', value);
  }
  get description() {
    return this.get('description');
  }
  set description(description) {
    this.set('description', description);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerVariable);

/***/ }),

/***/ 50565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Tag extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'tag';
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
  get externalDocs() {
    return this.get('externalDocs');
  }
  set externalDocs(externalDocs) {
    this.set('externalDocs', externalDocs);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);

/***/ }),

/***/ 55588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Xml extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'xml';
  }
  get name() {
    return this.get('name');
  }
  set name(name) {
    this.set('name', name);
  }
  get namespace() {
    return this.get('namespace');
  }
  set namespace(namespace) {
    this.set('namespace', namespace);
  }
  get prefix() {
    return this.get('prefix');
  }
  set prefix(prefix) {
    this.set('prefix', prefix);
  }
  get attribute() {
    return this.get('attribute');
  }
  set attribute(attribute) {
    this.set('attribute', attribute);
  }
  get wrapped() {
    return this.get('wrapped');
  }
  set wrapped(wrapped) {
    this.set('wrapped', wrapped);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Xml);

/***/ }),

/***/ 90365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsCallbacks extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-callbacks';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsCallbacks.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsCallbacks);

/***/ }),

/***/ 15706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsExamples extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-examples';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsExamples.primaryClass);
    this.classes.push('examples');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsExamples);

/***/ }),

/***/ 75671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsHeaders extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-headers';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsHeaders.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsHeaders);

/***/ }),

/***/ 3924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsLinks extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-links';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsLinks.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsLinks);

/***/ }),

/***/ 29777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsParameters extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-parameters';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsParameters.primaryClass);
    this.classes.push('parameters');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsParameters);

/***/ }),

/***/ 69568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsRequestBodies extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-request-bodies';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsRequestBodies.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsRequestBodies);

/***/ }),

/***/ 35113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsResponses extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-responses';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsResponses.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsResponses);

/***/ }),

/***/ 96477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsSchemas extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-schemas';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsSchemas.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsSchemas);

/***/ }),

/***/ 47975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ComponentsSecuritySchemes extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'components-security-schemes';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ComponentsSecuritySchemes.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsSecuritySchemes);

/***/ }),

/***/ 12331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class DiscriminatorMapping extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'discriminator-mapping';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(DiscriminatorMapping.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscriminatorMapping);

/***/ }),

/***/ 3952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class EncodingHeaders extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'encoding-headers';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(EncodingHeaders.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EncodingHeaders);

/***/ }),

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class HeaderContent extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'header-content';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(HeaderContent.primaryClass);
    this.classes.push('content');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderContent);

/***/ }),

/***/ 62951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class HeaderExamples extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'header-examples';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(HeaderExamples.primaryClass);
    this.classes.push('examples');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderExamples);

/***/ }),

/***/ 59517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class LinkParameters extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'link-parameters';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(LinkParameters.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkParameters);

/***/ }),

/***/ 62872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class MediaTypeEncoding extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'media-type-encoding';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(MediaTypeEncoding.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaTypeEncoding);

/***/ }),

/***/ 37154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class MediaTypeExamples extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'media-type-examples';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(MediaTypeExamples.primaryClass);
    this.classes.push('examples');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaTypeExamples);

/***/ }),

/***/ 73951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OAuthFlowScopes extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'oauth-flow-scopes';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OAuthFlowScopes.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthFlowScopes);

/***/ }),

/***/ 70090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OperationCallbacks extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'operation-callbacks';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationCallbacks.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationCallbacks);

/***/ }),

/***/ 68748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OperationParameters extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'operation-parameters';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationParameters.primaryClass);
    this.classes.push('parameters');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationParameters);

/***/ }),

/***/ 23062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OperationSecurity extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'operation-security';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationSecurity.primaryClass);
    this.classes.push('security');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationSecurity);

/***/ }),

/***/ 89686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OperationServers extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'operation-servers';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationServers.primaryClass);
    this.classes.push('servers');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationServers);

/***/ }),

/***/ 36509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class OperationTags extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'operation-tags';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(OperationTags.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationTags);

/***/ }),

/***/ 11889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ParameterContent extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'parameter-content';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ParameterContent.primaryClass);
    this.classes.push('content');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParameterContent);

/***/ }),

/***/ 98741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ParameterExamples extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'parameter-examples';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ParameterExamples.primaryClass);
    this.classes.push('examples');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParameterExamples);

/***/ }),

/***/ 90877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class PathItemParameters extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'path-item-parameters';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(PathItemParameters.primaryClass);
    this.classes.push('parameters');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathItemParameters);

/***/ }),

/***/ 34977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class PathItemServers extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'path-item-servers';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(PathItemServers.primaryClass);
    this.classes.push('servers');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathItemServers);

/***/ }),

/***/ 98183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class RequestBodyContent extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'request-body-content';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(RequestBodyContent.primaryClass);
    this.classes.push('content');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestBodyContent);

/***/ }),

/***/ 36641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ResponseContent extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'response-content';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ResponseContent.primaryClass);
    this.classes.push('content');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseContent);

/***/ }),

/***/ 86958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ResponseHeaders extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'response-headers';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ResponseHeaders.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseHeaders);

/***/ }),

/***/ 79577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ResponseLinks extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'response-links';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ResponseLinks.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseLinks);

/***/ }),

/***/ 34295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Security extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'security';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(Security.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Security);

/***/ }),

/***/ 83669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class ServerVariables extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  static primaryClass = 'server-variables';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(ServerVariables.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerVariables);

/***/ }),

/***/ 90129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Servers extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'servers';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(Servers.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Servers);

/***/ }),

/***/ 63336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class Tags extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ArrayElement {
  static primaryClass = 'tags';
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.classes.push(Tags.primaryClass);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

/***/ }),

/***/ 58267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenAPIMediaTypes: () => (/* binding */ OpenAPIMediaTypes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49451);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37901);


class OpenAPIMediaTypes extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"] {
  filterByFormat(format = 'generic') {
    const effectiveFormat = format === 'generic' ? 'openapi;version' : format;
    return this.filter(mediaType => mediaType.includes(effectiveFormat));
  }
  findBy(version = '3.0.3', format = 'generic') {
    const search = format === 'generic' ? `vnd.oai.openapi;version=${version}` : `vnd.oai.openapi+${format};version=${version}`;
    const found = this.find(mediaType => mediaType.includes(search));
    return found || this.unknownMediaType;
  }
  latest(format = 'generic') {
    return (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(this.filterByFormat(format));
  }
}
const mediaTypes = new OpenAPIMediaTypes('application/vnd.oai.openapi;version=3.0.0', 'application/vnd.oai.openapi+json;version=3.0.0', 'application/vnd.oai.openapi+yaml;version=3.0.0', 'application/vnd.oai.openapi;version=3.0.1', 'application/vnd.oai.openapi+json;version=3.0.1', 'application/vnd.oai.openapi+yaml;version=3.0.1', 'application/vnd.oai.openapi;version=3.0.2', 'application/vnd.oai.openapi+json;version=3.0.2', 'application/vnd.oai.openapi+yaml;version=3.0.2', 'application/vnd.oai.openapi;version=3.0.3', 'application/vnd.oai.openapi+json;version=3.0.3', 'application/vnd.oai.openapi+yaml;version=3.0.3');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaTypes);

/***/ }),

/***/ 9936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_Callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74014);
/* harmony import */ var _elements_Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44281);
/* harmony import */ var _elements_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95857);
/* harmony import */ var _elements_Discriminator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32633);
/* harmony import */ var _elements_Encoding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37904);
/* harmony import */ var _elements_Example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17931);
/* harmony import */ var _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20950);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95376);
/* harmony import */ var _elements_Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77425);
/* harmony import */ var _elements_License__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96878);
/* harmony import */ var _elements_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7469);
/* harmony import */ var _elements_MediaType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62521);
/* harmony import */ var _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16950);
/* harmony import */ var _elements_OAuthFlows__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4981);
/* harmony import */ var _elements_Openapi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98565);
/* harmony import */ var _elements_OpenApi3_0__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84889);
/* harmony import */ var _elements_Operation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87788);
/* harmony import */ var _elements_Parameter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47578);
/* harmony import */ var _elements_PathItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16253);
/* harmony import */ var _elements_Paths__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15001);
/* harmony import */ var _elements_Reference__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27112);
/* harmony import */ var _elements_RequestBody__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79964);
/* harmony import */ var _elements_Response__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6370);
/* harmony import */ var _elements_Responses__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(53113);
/* harmony import */ var _elements_Schema__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9854);
/* harmony import */ var _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11060);
/* harmony import */ var _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1120);
/* harmony import */ var _elements_Server__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50710);
/* harmony import */ var _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(68618);
/* harmony import */ var _elements_Tag__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(50565);
/* harmony import */ var _elements_Xml__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(55588);
































// eslint-disable-next-line @typescript-eslint/naming-convention
const openApi3_0 = {
  namespace: options => {
    const {
      base
    } = options;
    base.register('callback', _elements_Callback__WEBPACK_IMPORTED_MODULE_0__["default"]);
    base.register('components', _elements_Components__WEBPACK_IMPORTED_MODULE_1__["default"]);
    base.register('contact', _elements_Contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
    base.register('discriminator', _elements_Discriminator__WEBPACK_IMPORTED_MODULE_3__["default"]);
    base.register('encoding', _elements_Encoding__WEBPACK_IMPORTED_MODULE_4__["default"]);
    base.register('example', _elements_Example__WEBPACK_IMPORTED_MODULE_5__["default"]);
    base.register('externalDocumentation', _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_6__["default"]);
    base.register('header', _elements_Header__WEBPACK_IMPORTED_MODULE_7__["default"]);
    base.register('info', _elements_Info__WEBPACK_IMPORTED_MODULE_8__["default"]);
    base.register('license', _elements_License__WEBPACK_IMPORTED_MODULE_9__["default"]);
    base.register('link', _elements_Link__WEBPACK_IMPORTED_MODULE_10__["default"]);
    base.register('mediaType', _elements_MediaType__WEBPACK_IMPORTED_MODULE_11__["default"]);
    base.register('oAuthFlow', _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_12__["default"]);
    base.register('oAuthFlows', _elements_OAuthFlows__WEBPACK_IMPORTED_MODULE_13__["default"]);
    base.register('openapi', _elements_Openapi__WEBPACK_IMPORTED_MODULE_14__["default"]);
    base.register('openApi3_0', _elements_OpenApi3_0__WEBPACK_IMPORTED_MODULE_15__["default"]);
    base.register('operation', _elements_Operation__WEBPACK_IMPORTED_MODULE_16__["default"]);
    base.register('parameter', _elements_Parameter__WEBPACK_IMPORTED_MODULE_17__["default"]);
    base.register('pathItem', _elements_PathItem__WEBPACK_IMPORTED_MODULE_18__["default"]);
    base.register('paths', _elements_Paths__WEBPACK_IMPORTED_MODULE_19__["default"]);
    base.register('reference', _elements_Reference__WEBPACK_IMPORTED_MODULE_20__["default"]);
    base.register('requestBody', _elements_RequestBody__WEBPACK_IMPORTED_MODULE_21__["default"]);
    base.register('response', _elements_Response__WEBPACK_IMPORTED_MODULE_22__["default"]);
    base.register('responses', _elements_Responses__WEBPACK_IMPORTED_MODULE_23__["default"]);
    base.register('schema', _elements_Schema__WEBPACK_IMPORTED_MODULE_24__["default"]);
    base.register('securityRequirement', _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_25__["default"]);
    base.register('securityScheme', _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_26__["default"]);
    base.register('server', _elements_Server__WEBPACK_IMPORTED_MODULE_27__["default"]);
    base.register('serverVariable', _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_28__["default"]);
    base.register('tag', _elements_Tag__WEBPACK_IMPORTED_MODULE_29__["default"]);
    base.register('xml', _elements_Xml__WEBPACK_IMPORTED_MODULE_30__["default"]);
    return base;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openApi3_0);

/***/ }),

/***/ 97269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBooleanJsonSchemaElement: () => (/* binding */ isBooleanJsonSchemaElement),
/* harmony export */   isCallbackElement: () => (/* binding */ isCallbackElement),
/* harmony export */   isComponentsElement: () => (/* binding */ isComponentsElement),
/* harmony export */   isContactElement: () => (/* binding */ isContactElement),
/* harmony export */   isExampleElement: () => (/* binding */ isExampleElement),
/* harmony export */   isExternalDocumentationElement: () => (/* binding */ isExternalDocumentationElement),
/* harmony export */   isHeaderElement: () => (/* binding */ isHeaderElement),
/* harmony export */   isInfoElement: () => (/* binding */ isInfoElement),
/* harmony export */   isLicenseElement: () => (/* binding */ isLicenseElement),
/* harmony export */   isLinkElement: () => (/* binding */ isLinkElement),
/* harmony export */   isMediaTypeElement: () => (/* binding */ isMediaTypeElement),
/* harmony export */   isOpenApi3_0Element: () => (/* binding */ isOpenApi3_0Element),
/* harmony export */   isOpenapiElement: () => (/* binding */ isOpenapiElement),
/* harmony export */   isOperationElement: () => (/* binding */ isOperationElement),
/* harmony export */   isParameterElement: () => (/* binding */ isParameterElement),
/* harmony export */   isPathItemElement: () => (/* binding */ isPathItemElement),
/* harmony export */   isPathsElement: () => (/* binding */ isPathsElement),
/* harmony export */   isReferenceElement: () => (/* binding */ isReferenceElement),
/* harmony export */   isRequestBodyElement: () => (/* binding */ isRequestBodyElement),
/* harmony export */   isResponseElement: () => (/* binding */ isResponseElement),
/* harmony export */   isResponsesElement: () => (/* binding */ isResponsesElement),
/* harmony export */   isSchemaElement: () => (/* binding */ isSchemaElement),
/* harmony export */   isSecurityRequirementElement: () => (/* binding */ isSecurityRequirementElement),
/* harmony export */   isSecuritySchemeElement: () => (/* binding */ isSecuritySchemeElement),
/* harmony export */   isServerElement: () => (/* binding */ isServerElement),
/* harmony export */   isServerVariableElement: () => (/* binding */ isServerVariableElement),
/* harmony export */   isServersElement: () => (/* binding */ isServersElement)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81787);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(70060);
/* harmony import */ var _elements_Callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74014);
/* harmony import */ var _elements_Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44281);
/* harmony import */ var _elements_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95857);
/* harmony import */ var _elements_Example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17931);
/* harmony import */ var _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20950);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95376);
/* harmony import */ var _elements_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77425);
/* harmony import */ var _elements_License__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96878);
/* harmony import */ var _elements_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7469);
/* harmony import */ var _elements_Openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98565);
/* harmony import */ var _elements_OpenApi3_0__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84889);
/* harmony import */ var _elements_Operation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87788);
/* harmony import */ var _elements_Parameter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47578);
/* harmony import */ var _elements_PathItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16253);
/* harmony import */ var _elements_Paths__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15001);
/* harmony import */ var _elements_Reference__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27112);
/* harmony import */ var _elements_RequestBody__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79964);
/* harmony import */ var _elements_Response__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6370);
/* harmony import */ var _elements_Responses__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(53113);
/* harmony import */ var _elements_Schema__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9854);
/* harmony import */ var _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(11060);
/* harmony import */ var _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1120);
/* harmony import */ var _elements_Server__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(50710);
/* harmony import */ var _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(68618);
/* harmony import */ var _elements_MediaType__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62521);
/* harmony import */ var _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90129);


























// NCE types

const isCallbackElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Callback__WEBPACK_IMPORTED_MODULE_1__["default"] || hasBasicElementProps(element) && isElementType('callback', element) && primitiveEq('object', element);
});
const isComponentsElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Components__WEBPACK_IMPORTED_MODULE_2__["default"] || hasBasicElementProps(element) && isElementType('components', element) && primitiveEq('object', element);
});
const isContactElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Contact__WEBPACK_IMPORTED_MODULE_3__["default"] || hasBasicElementProps(element) && isElementType('contact', element) && primitiveEq('object', element);
});
const isExampleElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Example__WEBPACK_IMPORTED_MODULE_4__["default"] || hasBasicElementProps(element) && isElementType('example', element) && primitiveEq('object', element);
});
const isExternalDocumentationElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_5__["default"] || hasBasicElementProps(element) && isElementType('externalDocumentation', element) && primitiveEq('object', element);
});
const isHeaderElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Header__WEBPACK_IMPORTED_MODULE_6__["default"] || hasBasicElementProps(element) && isElementType('header', element) && primitiveEq('object', element);
});
const isInfoElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Info__WEBPACK_IMPORTED_MODULE_7__["default"] || hasBasicElementProps(element) && isElementType('info', element) && primitiveEq('object', element);
});
const isLicenseElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_License__WEBPACK_IMPORTED_MODULE_8__["default"] || hasBasicElementProps(element) && isElementType('license', element) && primitiveEq('object', element);
});
const isLinkElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Link__WEBPACK_IMPORTED_MODULE_9__["default"] || hasBasicElementProps(element) && isElementType('link', element) && primitiveEq('object', element);
});
const isOpenapiElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Openapi__WEBPACK_IMPORTED_MODULE_10__["default"] || hasBasicElementProps(element) && isElementType('openapi', element) && primitiveEq('string', element);
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const isOpenApi3_0Element = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof _elements_OpenApi3_0__WEBPACK_IMPORTED_MODULE_11__["default"] || hasBasicElementProps(element) && isElementType('openApi3_0', element) && primitiveEq('object', element) && hasClass('api', element);
});
const isOperationElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Operation__WEBPACK_IMPORTED_MODULE_12__["default"] || hasBasicElementProps(element) && isElementType('operation', element) && primitiveEq('object', element);
});
const isParameterElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Parameter__WEBPACK_IMPORTED_MODULE_13__["default"] || hasBasicElementProps(element) && isElementType('parameter', element) && primitiveEq('object', element);
});
const isPathItemElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_PathItem__WEBPACK_IMPORTED_MODULE_14__["default"] || hasBasicElementProps(element) && isElementType('pathItem', element) && primitiveEq('object', element);
});
const isPathsElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Paths__WEBPACK_IMPORTED_MODULE_15__["default"] || hasBasicElementProps(element) && isElementType('paths', element) && primitiveEq('object', element);
});
const isReferenceElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Reference__WEBPACK_IMPORTED_MODULE_16__["default"] || hasBasicElementProps(element) && isElementType('reference', element) && primitiveEq('object', element);
});
const isRequestBodyElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_RequestBody__WEBPACK_IMPORTED_MODULE_17__["default"] || hasBasicElementProps(element) && isElementType('requestBody', element) && primitiveEq('object', element);
});
const isResponseElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Response__WEBPACK_IMPORTED_MODULE_18__["default"] || hasBasicElementProps(element) && isElementType('response', element) && primitiveEq('object', element);
});
const isResponsesElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Responses__WEBPACK_IMPORTED_MODULE_19__["default"] || hasBasicElementProps(element) && isElementType('responses', element) && primitiveEq('object', element);
});
const isSchemaElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Schema__WEBPACK_IMPORTED_MODULE_20__["default"] || hasBasicElementProps(element) && isElementType('schema', element) && primitiveEq('object', element);
});
const isBooleanJsonSchemaElement = element => {
  return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_21__.isBooleanElement)(element) && element.classes.includes('boolean-json-schema');
};
const isSecurityRequirementElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_22__["default"] || hasBasicElementProps(element) && isElementType('securityRequirement', element) && primitiveEq('object', element);
});
const isSecuritySchemeElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_23__["default"] || hasBasicElementProps(element) && isElementType('securityScheme', element) && primitiveEq('object', element);
});
const isServerElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Server__WEBPACK_IMPORTED_MODULE_24__["default"] || hasBasicElementProps(element) && isElementType('server', element) && primitiveEq('object', element);
});
const isServerVariableElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_25__["default"] || hasBasicElementProps(element) && isElementType('serverVariable', element) && primitiveEq('object', element);
});
const isMediaTypeElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_MediaType__WEBPACK_IMPORTED_MODULE_26__["default"] || hasBasicElementProps(element) && isElementType('mediaType', element) && primitiveEq('object', element);
});
const isServersElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq,
  hasClass
}) => {
  return element => element instanceof _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_27__["default"] || hasBasicElementProps(element) && isElementType('array', element) && primitiveEq('array', element) && hasClass('servers', element);
});

/***/ }),

/***/ 14074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRefractor: () => (/* binding */ createRefractor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27155);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35956);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49915);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14864);
/* harmony import */ var _specification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27715);
/* harmony import */ var _traversal_visitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80192);
/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84225);





const refract = (value, {
  specPath = ['visitors', 'document', 'objects', 'OpenApi', '$visitor'],
  plugins = []
} = {}) => {
  const element = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.refract)(value);
  const resolvedSpec = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.dereference)(_specification__WEBPACK_IMPORTED_MODULE_2__["default"]);

  /**
   * This is where generic ApiDOM becomes semantic (namespace applied).
   * We don't allow consumers to hook into this translation.
   * Though we allow consumers to define their onw plugins on already transformed ApiDOM.
   */
  const RootVisitorClass = (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(specPath, resolvedSpec);
  const rootVisitor = new RootVisitorClass({
    specObj: resolvedSpec
  });
  (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.visit)(element, rootVisitor);

  /**
   * Running plugins visitors means extra single traversal === performance hit.
   */
  return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.dispatchPluginsSync)(rootVisitor.element, plugins, {
    toolboxCreator: _toolbox__WEBPACK_IMPORTED_MODULE_6__["default"],
    visitorOptions: {
      keyMap: _traversal_visitor__WEBPACK_IMPORTED_MODULE_7__.keyMap,
      nodeTypeGetter: _traversal_visitor__WEBPACK_IMPORTED_MODULE_7__.getNodeType
    }
  });
};
const createRefractor = specPath => (value, options = {}) => refract(value, {
  specPath,
  ...options
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refract);

/***/ }),

/***/ 74000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(14831);
/* harmony import */ var _elements_Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77425);
/* harmony import */ var _elements_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95857);
/* harmony import */ var _elements_License__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96878);
/* harmony import */ var _elements_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15001);
/* harmony import */ var _elements_PathItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16253);
/* harmony import */ var _elements_Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44281);
/* harmony import */ var _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20950);
/* harmony import */ var _elements_Operation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87788);
/* harmony import */ var _elements_Schema__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9854);
/* harmony import */ var _elements_RequestBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79964);
/* harmony import */ var _elements_Responses__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(53113);
/* harmony import */ var _elements_Response__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(6370);
/* harmony import */ var _elements_Server__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(50710);
/* harmony import */ var _elements_Discriminator__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(32633);
/* harmony import */ var _elements_Xml__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(55588);
/* harmony import */ var _elements_OAuthFlows__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(4981);
/* harmony import */ var _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(16950);
/* harmony import */ var _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(68618);
/* harmony import */ var _elements_Parameter__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(47578);
/* harmony import */ var _elements_Example__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(17931);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(95376);
/* harmony import */ var _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(1120);
/* harmony import */ var _elements_Link__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(7469);
/* harmony import */ var _elements_Callback__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(74014);
/* harmony import */ var _elements_MediaType__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(62521);
/* harmony import */ var _elements_Encoding__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(37904);
/* harmony import */ var _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(11060);
/* harmony import */ var _elements_Tag__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(50565);
/* harmony import */ var _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90129);
/* harmony import */ var _elements_nces_Security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34295);
/* harmony import */ var _elements_nces_Tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63336);
/* harmony import */ var _elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83669);
/* harmony import */ var _elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(96477);
/* harmony import */ var _elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(35113);
/* harmony import */ var _elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(29777);
/* harmony import */ var _elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(15706);
/* harmony import */ var _elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(69568);
/* harmony import */ var _elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(75671);
/* harmony import */ var _elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(47975);
/* harmony import */ var _elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(3924);
/* harmony import */ var _elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(90365);
/* harmony import */ var _elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34977);
/* harmony import */ var _elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90877);
/* harmony import */ var _elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68748);
/* harmony import */ var _elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(98741);
/* harmony import */ var _elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(11889);
/* harmony import */ var _elements_nces_OperationTags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36509);
/* harmony import */ var _elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(70090);
/* harmony import */ var _elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23062);
/* harmony import */ var _elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(89686);
/* harmony import */ var _elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(98183);
/* harmony import */ var _elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(37154);
/* harmony import */ var _elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(62872);
/* harmony import */ var _elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(3952);
/* harmony import */ var _elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(86958);
/* harmony import */ var _elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(36641);
/* harmony import */ var _elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(79577);
/* harmony import */ var _elements_nces_DiscriminatorMapping__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(12331);
/* harmony import */ var _elements_nces_OAuthFlowScopes__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(73951);
/* harmony import */ var _elements_nces_LinkParameters__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59517);
/* harmony import */ var _elements_nces_HeaderExamples__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(62951);
/* harmony import */ var _elements_nces_HeaderContent__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(2195);
/* harmony import */ var _traversal_visitor__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(80192);


/**
 * OpenAPI 3.0.3 specification elements.
 */




























// non-concrete Elements (NCEs)




































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
 * openapi: 3.0.3
 * info:
 * ```
 * Refracting result without this plugin:
 *
 *  (OpenApi3_0Element
 *    (MemberElement
 *      (StringElement)
 *      (OpenapiElement))
 *    (MemberElement
 *      (StringElement)
 *      (StringElement))
 *
 * Refracting result with this plugin:
 *
 *  (OpenApi3_0Element
 *    (MemberElement
 *      (StringElement)
 *      (OpenapiElement))
 *    (MemberElement
 *      (StringElement)
 *      (InfoElement))
 */

const isEmptyElement = element => (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isStringElement)(element) && (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.includesClasses)(['yaml-e-node', 'yaml-e-scalar'], element);
const schema = {
  // concrete types handling (CTs)
  OpenApi3_0Element: {
    info(...args) {
      return new _elements_Info__WEBPACK_IMPORTED_MODULE_1__["default"](...args);
    },
    servers(...args) {
      return new _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_2__["default"](...args);
    },
    paths(...args) {
      return new _elements_Paths__WEBPACK_IMPORTED_MODULE_3__["default"](...args);
    },
    components(...args) {
      return new _elements_Components__WEBPACK_IMPORTED_MODULE_4__["default"](...args);
    },
    security(...args) {
      return new _elements_nces_Security__WEBPACK_IMPORTED_MODULE_5__["default"](...args);
    },
    tags(...args) {
      return new _elements_nces_Tags__WEBPACK_IMPORTED_MODULE_6__["default"](...args);
    },
    externalDocs(...args) {
      return new _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_7__["default"](...args);
    }
  },
  InfoElement: {
    contact(...args) {
      return new _elements_Contact__WEBPACK_IMPORTED_MODULE_8__["default"](...args);
    },
    license(...args) {
      return new _elements_License__WEBPACK_IMPORTED_MODULE_9__["default"](...args);
    }
  },
  ServerElement: {
    variables(...args) {
      return new _elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_10__["default"](...args);
    }
  },
  ServerVariableElement: {
    enum(...args) {
      return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
    }
  },
  PathsElement: {
    '[key: *]': function key(...args) {
      return new _elements_PathItem__WEBPACK_IMPORTED_MODULE_12__["default"](...args);
    }
  },
  PathItemElement: {
    get(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    put(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    post(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    delete(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    options(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    head(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    patch(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    trace(...args) {
      return new _elements_Operation__WEBPACK_IMPORTED_MODULE_13__["default"](...args);
    },
    servers(...args) {
      return new _elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_14__["default"](...args);
    },
    parameters(...args) {
      return new _elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_15__["default"](...args);
    }
  },
  OperationElement: {
    tags(...args) {
      return new _elements_nces_OperationTags__WEBPACK_IMPORTED_MODULE_16__["default"](...args);
    },
    externalDocs(...args) {
      return new _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_7__["default"](...args);
    },
    parameters(...args) {
      return new _elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_17__["default"](...args);
    },
    requestBody(...args) {
      return new _elements_RequestBody__WEBPACK_IMPORTED_MODULE_18__["default"](...args);
    },
    responses(...args) {
      return new _elements_Responses__WEBPACK_IMPORTED_MODULE_19__["default"](...args);
    },
    callbacks(...args) {
      return new _elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_20__["default"](...args);
    },
    security(...args) {
      return new _elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_21__["default"](...args);
    },
    servers(...args) {
      return new _elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_22__["default"](...args);
    }
  },
  ParameterElement: {
    schema(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    },
    examples(...args) {
      return new _elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_24__["default"](...args);
    },
    content(...args) {
      return new _elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_25__["default"](...args);
    }
  },
  RequestBodyElement: {
    content(...args) {
      return new _elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_26__["default"](...args);
    }
  },
  MediaTypeElement: {
    schema(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    },
    examples(...args) {
      return new _elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_27__["default"](...args);
    },
    encoding(...args) {
      return new _elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_28__["default"](...args);
    }
  },
  EncodingElement: {
    headers(...args) {
      return new _elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_29__["default"](...args);
    }
  },
  ResponsesElement: {
    '[key: *]': function key(...args) {
      return new _elements_Response__WEBPACK_IMPORTED_MODULE_30__["default"](...args);
    }
  },
  ResponseElement: {
    headers(...args) {
      return new _elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_31__["default"](...args);
    },
    content(...args) {
      return new _elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_32__["default"](...args);
    },
    links(...args) {
      return new _elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_33__["default"](...args);
    }
  },
  CallbackElement: {
    '[key: *]': function key(...args) {
      return new _elements_PathItem__WEBPACK_IMPORTED_MODULE_12__["default"](...args);
    }
  },
  LinkElement: {
    parameters(...args) {
      return new _elements_nces_LinkParameters__WEBPACK_IMPORTED_MODULE_34__["default"](...args);
    },
    server(...args) {
      return new _elements_Server__WEBPACK_IMPORTED_MODULE_35__["default"](...args);
    }
  },
  HeaderElement: {
    schema(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    },
    examples(...args) {
      return new _elements_nces_HeaderExamples__WEBPACK_IMPORTED_MODULE_36__["default"](...args);
    },
    content(...args) {
      return new _elements_nces_HeaderContent__WEBPACK_IMPORTED_MODULE_37__["default"](...args);
    }
  },
  ComponentsElement: {
    schemas(...args) {
      return new _elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_38__["default"](...args);
    },
    responses(...args) {
      return new _elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_39__["default"](...args);
    },
    parameters(...args) {
      return new _elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_40__["default"](...args);
    },
    examples(...args) {
      return new _elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_41__["default"](...args);
    },
    requestBodies(...args) {
      return new _elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_42__["default"](...args);
    },
    headers(...args) {
      return new _elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_43__["default"](...args);
    },
    securitySchemes(...args) {
      return new _elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_44__["default"](...args);
    },
    links(...args) {
      return new _elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_45__["default"](...args);
    },
    callbacks(...args) {
      return new _elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_46__["default"](...args);
    }
  },
  SecurityRequirementElement: {
    '[key: *]': function key(...args) {
      return new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
    }
  },
  TagElement: {
    externalDocs(...args) {
      return new _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_7__["default"](...args);
    }
  },
  SchemaElement: {
    definitions(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ObjectElement(...args);
      element.classes.push('json-schema-definitions');
      return element;
    },
    allOf(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
      element.classes.push('json-schema-allOf');
      return element;
    },
    anyOf(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
      element.classes.push('json-schema-anyOf');
      return element;
    },
    oneOf(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
      element.classes.push('json-schema-oneOf');
      return element;
    },
    not(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    },
    items(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    },
    properties(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ObjectElement(...args);
      element.classes.push('json-schema-properties');
      return element;
    },
    patternProperties(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ObjectElement(...args);
      element.classes.push('json-schema-patternProperties');
      return element;
    },
    additionalProperties(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    },
    enum(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
      element.classes.push('json-schema-enum');
      return element;
    },
    required(...args) {
      const element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_11__.ArrayElement(...args);
      element.classes.push('json-schema-required');
      return element;
    },
    discriminator(...args) {
      return new _elements_Discriminator__WEBPACK_IMPORTED_MODULE_47__["default"](...args);
    },
    xml(...args) {
      return new _elements_Xml__WEBPACK_IMPORTED_MODULE_48__["default"](...args);
    },
    externalDocs(...args) {
      return new _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_7__["default"](...args);
    }
  },
  DiscriminatorElement: {
    mapping(...args) {
      return new _elements_nces_DiscriminatorMapping__WEBPACK_IMPORTED_MODULE_49__["default"](...args);
    }
  },
  SecuritySchemeElement: {
    flows(...args) {
      return new _elements_OAuthFlows__WEBPACK_IMPORTED_MODULE_50__["default"](...args);
    }
  },
  OAuthFlowsElement: {
    implicit(...args) {
      return new _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_51__["default"](...args);
    },
    password(...args) {
      return new _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_51__["default"](...args);
    },
    clientCredentials(...args) {
      return new _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_51__["default"](...args);
    },
    authorizationCode(...args) {
      return new _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_51__["default"](...args);
    }
  },
  OAuthFlowElement: {
    scopes(...args) {
      return new _elements_nces_OAuthFlowScopes__WEBPACK_IMPORTED_MODULE_52__["default"](...args);
    }
  },
  // non-concrete types handling (NCEs)
  [_elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_10__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_53__["default"](...args);
    }
  },
  [_elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_38__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  [_elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_39__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Response__WEBPACK_IMPORTED_MODULE_30__["default"](...args);
    }
  },
  [_elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_40__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Parameter__WEBPACK_IMPORTED_MODULE_54__["default"](...args);
    }
  },
  [_elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_41__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Example__WEBPACK_IMPORTED_MODULE_55__["default"](...args);
    }
  },
  [_elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_42__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_RequestBody__WEBPACK_IMPORTED_MODULE_18__["default"](...args);
    }
  },
  [_elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_43__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Header__WEBPACK_IMPORTED_MODULE_56__["default"](...args);
    }
  },
  [_elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_44__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_57__["default"](...args);
    }
  },
  [_elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_45__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Link__WEBPACK_IMPORTED_MODULE_58__["default"](...args);
    }
  },
  [_elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_46__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Callback__WEBPACK_IMPORTED_MODULE_59__["default"](...args);
    }
  },
  [_elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_20__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Callback__WEBPACK_IMPORTED_MODULE_59__["default"](...args);
    }
  },
  [_elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_24__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Example__WEBPACK_IMPORTED_MODULE_55__["default"](...args);
    }
  },
  [_elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_25__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_MediaType__WEBPACK_IMPORTED_MODULE_60__["default"](...args);
    }
  },
  [_elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_26__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_MediaType__WEBPACK_IMPORTED_MODULE_60__["default"](...args);
    }
  },
  [_elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_27__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Example__WEBPACK_IMPORTED_MODULE_55__["default"](...args);
    }
  },
  [_elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_28__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Encoding__WEBPACK_IMPORTED_MODULE_61__["default"](...args);
    }
  },
  [_elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_29__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Header__WEBPACK_IMPORTED_MODULE_56__["default"](...args);
    }
  },
  [_elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_31__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Header__WEBPACK_IMPORTED_MODULE_56__["default"](...args);
    }
  },
  [_elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_32__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_MediaType__WEBPACK_IMPORTED_MODULE_60__["default"](...args);
    }
  },
  [_elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_33__["default"].primaryClass]: {
    '[key: *]': function key(...args) {
      return new _elements_Link__WEBPACK_IMPORTED_MODULE_58__["default"](...args);
    }
  },
  'json-schema-$defs': {
    '[key: *]': function key(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  'json-schema-dependentSchemas': {
    '[key: *]': function key(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  'json-schema-properties': {
    '[key: *]': function key(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  [_elements_nces_Servers__WEBPACK_IMPORTED_MODULE_2__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_Server__WEBPACK_IMPORTED_MODULE_35__["default"](...args);
    }
  },
  [_elements_nces_Security__WEBPACK_IMPORTED_MODULE_5__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_62__["default"](...args);
    }
  },
  [_elements_nces_Tags__WEBPACK_IMPORTED_MODULE_6__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_Tag__WEBPACK_IMPORTED_MODULE_63__["default"](...args);
    }
  },
  [_elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_14__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_Server__WEBPACK_IMPORTED_MODULE_35__["default"](...args);
    }
  },
  [_elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_15__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_Parameter__WEBPACK_IMPORTED_MODULE_54__["default"](...args);
    }
  },
  [_elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_17__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_Parameter__WEBPACK_IMPORTED_MODULE_54__["default"](...args);
    }
  },
  [_elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_21__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_62__["default"](...args);
    }
  },
  [_elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_22__["default"].primaryClass]: {
    '<*>': function asterisk(...args) {
      return new _elements_Server__WEBPACK_IMPORTED_MODULE_35__["default"](...args);
    }
  },
  'json-schema-allOf': {
    '<*>': function asterisk(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  'json-schema-anyOf': {
    '<*>': function asterisk(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  'json-schema-oneOf': {
    '<*>': function asterisk(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  },
  'json-schema-prefixItems': {
    '<*>': function asterisk(...args) {
      return new _elements_Schema__WEBPACK_IMPORTED_MODULE_23__["default"](...args);
    }
  }
};
const findElementFactory = (ancestor, keyName) => {
  const elementType = (0,_traversal_visitor__WEBPACK_IMPORTED_MODULE_64__.getNodeType)(ancestor); // @ts-ignore
  const keyMapping = schema[elementType] || schema[(0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_65__["default"])(ancestor.classes.first)];
  return typeof keyMapping === 'undefined' ? undefined : Object.prototype.hasOwnProperty.call(keyMapping, '[key: *]') ? keyMapping['[key: *]'] : keyMapping[keyName];
};
const plugin = () => () => ({
  visitor: {
    StringElement(element, key, parent, path, ancestors) {
      if (!isEmptyElement(element)) return undefined;
      const lineage = [...ancestors, parent].filter(_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isElement);
      const parentElement = lineage[lineage.length - 1]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
      let elementFactory;
      let context;
      if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isArrayElement)(parentElement)) {
        context = element;
        elementFactory = findElementFactory(parentElement, '<*>');
      } else if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isMemberElement)(parentElement)) {
        context = lineage[lineage.length - 2]; // @TODO(vladimir.gorej@gmail.com): can be replaced by Array.prototype.at in future
        elementFactory = findElementFactory(context, (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_65__["default"])(parentElement.key));
      }

      // no element factory found
      if (typeof elementFactory !== 'function') return undefined;
      return elementFactory.call({
        context
      }, undefined, (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_66__.cloneDeep)(element.meta), (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_66__.cloneDeep)(element.attributes));
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);

/***/ }),

/***/ 83990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isOpenApiExtension: () => (/* binding */ isOpenApiExtension),
/* harmony export */   isReferenceLikeElement: () => (/* binding */ isReferenceLikeElement),
/* harmony export */   isServerLikeElement: () => (/* binding */ isServerLikeElement),
/* harmony export */   isTagLikeElement: () => (/* binding */ isTagLikeElement)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2278);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71514);


const isReferenceLikeElement = element => {
  return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isObjectElement)(element) && element.hasKey('$ref');
};
const isServerLikeElement = _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isObjectElement;
const isTagLikeElement = _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isObjectElement;
const isOpenApiExtension = element => {
  // @ts-ignore
  return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isStringElement)(element.key) && (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])('x-', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(element.key));
};

/***/ }),

/***/ 27715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _visitors_open_api_3_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3981);
/* harmony import */ var _visitors_open_api_3_0_OpenapiVisitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19419);
/* harmony import */ var _visitors_SpecificationExtensionVisitor__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(97444);
/* harmony import */ var _visitors_open_api_3_0_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44198);
/* harmony import */ var _visitors_open_api_3_0_info_VersionVisitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72138);
/* harmony import */ var _visitors_open_api_3_0_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13414);
/* harmony import */ var _visitors_open_api_3_0_license__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22209);
/* harmony import */ var _visitors_open_api_3_0_link__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(50426);
/* harmony import */ var _visitors_open_api_3_0_link_OperationRefVisitor__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(42726);
/* harmony import */ var _visitors_open_api_3_0_link_OperationIdVisitor__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(14298);
/* harmony import */ var _visitors_open_api_3_0_link_ParametersVisitor__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(99076);
/* harmony import */ var _visitors_open_api_3_0_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72537);
/* harmony import */ var _visitors_open_api_3_0_server_UrlVisitor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68808);
/* harmony import */ var _visitors_open_api_3_0_ServersVisitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26699);
/* harmony import */ var _visitors_open_api_3_0_server_variable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74744);
/* harmony import */ var _visitors_open_api_3_0_server_VariablesVisitor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4440);
/* harmony import */ var _visitors_FallbackVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34572);
/* harmony import */ var _visitors_open_api_3_0_media_type__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(96881);
/* harmony import */ var _visitors_open_api_3_0_media_type_SchemaVisitor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(16614);
/* harmony import */ var _visitors_open_api_3_0_media_type_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(93154);
/* harmony import */ var _visitors_open_api_3_0_media_type_EncodingVisitor__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(15764);
/* harmony import */ var _visitors_open_api_3_0_security_requirement__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(49886);
/* harmony import */ var _visitors_open_api_3_0_SecurityVisitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41061);
/* harmony import */ var _visitors_open_api_3_0_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91886);
/* harmony import */ var _visitors_open_api_3_0_tag__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(58442);
/* harmony import */ var _visitors_open_api_3_0_reference__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(50163);
/* harmony import */ var _visitors_open_api_3_0_reference_$RefVisitor__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(17566);
/* harmony import */ var _visitors_open_api_3_0_parameter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(44237);
/* harmony import */ var _visitors_open_api_3_0_parameter_SchemaVisitor__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(90658);
/* harmony import */ var _visitors_open_api_3_0_header__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(89915);
/* harmony import */ var _visitors_open_api_3_0_header_SchemaVisitor__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(26700);
/* harmony import */ var _visitors_open_api_3_0_header_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(89244);
/* harmony import */ var _visitors_open_api_3_0_header_ContentVisitor__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(68518);
/* harmony import */ var _visitors_open_api_3_0_schema__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(51049);
/* harmony import */ var _visitors_open_api_3_0_schema_AllOfVisitor__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(26729);
/* harmony import */ var _visitors_open_api_3_0_schema_AnyOfVisitor__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(94478);
/* harmony import */ var _visitors_open_api_3_0_schema_OneOfVisitor__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(52);
/* harmony import */ var _visitors_open_api_3_0_schema_ItemsVisitor__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(67475);
/* harmony import */ var _visitors_open_api_3_0_schema_PropertiesVisitor__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(39796);
/* harmony import */ var _visitors_open_api_3_0_schema_TypeVisitor__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(13655);
/* harmony import */ var _visitors_open_api_3_0_schema_SchemaOrReferenceVisitor__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(5858);
/* harmony import */ var _visitors_open_api_3_0_distriminator__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(35349);
/* harmony import */ var _visitors_open_api_3_0_distriminator_MappingVisitor__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(91317);
/* harmony import */ var _visitors_open_api_3_0_xml__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(85375);
/* harmony import */ var _visitors_open_api_3_0_parameter_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(92382);
/* harmony import */ var _visitors_open_api_3_0_parameter_ContentVisitor__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(92776);
/* harmony import */ var _visitors_open_api_3_0_components_SchemasVisitor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13658);
/* harmony import */ var _visitors_open_api_3_0_components_ResponsesVisitor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(67554);
/* harmony import */ var _visitors_open_api_3_0_components_ParametersVisitor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(17400);
/* harmony import */ var _visitors_open_api_3_0_components_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84945);
/* harmony import */ var _visitors_open_api_3_0_components_RequestBodiesVisitor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(13417);
/* harmony import */ var _visitors_open_api_3_0_components_HeadersVisitor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23192);
/* harmony import */ var _visitors_open_api_3_0_components_SecuritySchemesVisitor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(62032);
/* harmony import */ var _visitors_open_api_3_0_components_LinksVisitor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87025);
/* harmony import */ var _visitors_open_api_3_0_components_CallbacksVisitor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(47962);
/* harmony import */ var _visitors_open_api_3_0_example__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(72176);
/* harmony import */ var _visitors_open_api_3_0_example_ExternalValueVisitor__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(76964);
/* harmony import */ var _visitors_open_api_3_0_external_documentation__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(72210);
/* harmony import */ var _visitors_open_api_3_0_encoding__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(78579);
/* harmony import */ var _visitors_open_api_3_0_encoding_HeadersVisitor__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(85855);
/* harmony import */ var _visitors_open_api_3_0_paths__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29958);
/* harmony import */ var _visitors_open_api_3_0_request_body__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(45290);
/* harmony import */ var _visitors_open_api_3_0_request_body_ContentVisitor__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(12425);
/* harmony import */ var _visitors_open_api_3_0_callback__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(98729);
/* harmony import */ var _visitors_open_api_3_0_response__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(83677);
/* harmony import */ var _visitors_open_api_3_0_response_HeadersVisitor__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(97697);
/* harmony import */ var _visitors_open_api_3_0_response_ContentVisitor__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(54936);
/* harmony import */ var _visitors_open_api_3_0_response_LinksVisitor__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(83084);
/* harmony import */ var _visitors_open_api_3_0_responses__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(7390);
/* harmony import */ var _visitors_open_api_3_0_responses_DefaultVisitor__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(31681);
/* harmony import */ var _visitors_open_api_3_0_operation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(91983);
/* harmony import */ var _visitors_open_api_3_0_operation_TagsVisitor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(11890);
/* harmony import */ var _visitors_open_api_3_0_operation_ParametersVisitor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(79057);
/* harmony import */ var _visitors_open_api_3_0_operation_RequestBodyVisitor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(68366);
/* harmony import */ var _visitors_open_api_3_0_operation_CallbacksVisitor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(86673);
/* harmony import */ var _visitors_open_api_3_0_operation_SecurityVisitor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(74783);
/* harmony import */ var _visitors_open_api_3_0_operation_ServersVisitor__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(44529);
/* harmony import */ var _visitors_open_api_3_0_path_item__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2643);
/* harmony import */ var _visitors_open_api_3_0_path_item_$RefVisitor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1566);
/* harmony import */ var _visitors_open_api_3_0_path_item_ServersVisitor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(49685);
/* harmony import */ var _visitors_open_api_3_0_path_item_ParametersVisitor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(38101);
/* harmony import */ var _visitors_open_api_3_0_security_scheme__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(1784);
/* harmony import */ var _visitors_open_api_3_0_oauth_flows__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(23769);
/* harmony import */ var _visitors_open_api_3_0_oauth_flow__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(26188);
/* harmony import */ var _visitors_open_api_3_0_oauth_flow_ScopesVisitor__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(82281);
/* harmony import */ var _visitors_open_api_3_0_TagsVisitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88748);
























































































/**
 * Specification object allows us to have complete control over visitors
 * when traversing the ApiDOM.
 * Specification also allows us to create amended refractors from
 * existing ones by manipulating it.
 *
 * Note: Specification object allows to use absolute internal JSON pointers.
 */
const {
  fixedFields: jsonSchemaFixedFields
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema;
const specification = {
  visitors: {
    value: _visitors_FallbackVisitor__WEBPACK_IMPORTED_MODULE_1__["default"],
    document: {
      objects: {
        OpenApi: {
          $visitor: _visitors_open_api_3_0__WEBPACK_IMPORTED_MODULE_2__["default"],
          fixedFields: {
            openapi: _visitors_open_api_3_0_OpenapiVisitor__WEBPACK_IMPORTED_MODULE_3__["default"],
            info: {
              $ref: '#/visitors/document/objects/Info'
            },
            servers: _visitors_open_api_3_0_ServersVisitor__WEBPACK_IMPORTED_MODULE_4__["default"],
            paths: {
              $ref: '#/visitors/document/objects/Paths'
            },
            components: {
              $ref: '#/visitors/document/objects/Components'
            },
            security: _visitors_open_api_3_0_SecurityVisitor__WEBPACK_IMPORTED_MODULE_5__["default"],
            tags: _visitors_open_api_3_0_TagsVisitor__WEBPACK_IMPORTED_MODULE_6__["default"],
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            }
          }
        },
        Info: {
          $visitor: _visitors_open_api_3_0_info__WEBPACK_IMPORTED_MODULE_7__["default"],
          fixedFields: {
            title: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            termsOfService: {
              $ref: '#/visitors/value'
            },
            contact: {
              $ref: '#/visitors/document/objects/Contact'
            },
            license: {
              $ref: '#/visitors/document/objects/License'
            },
            version: _visitors_open_api_3_0_info_VersionVisitor__WEBPACK_IMPORTED_MODULE_8__["default"]
          }
        },
        Contact: {
          $visitor: _visitors_open_api_3_0_contact__WEBPACK_IMPORTED_MODULE_9__["default"],
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            url: {
              $ref: '#/visitors/value'
            },
            email: {
              $ref: '#/visitors/value'
            }
          }
        },
        License: {
          $visitor: _visitors_open_api_3_0_license__WEBPACK_IMPORTED_MODULE_10__["default"],
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            url: {
              $ref: '#/visitors/value'
            }
          }
        },
        Server: {
          $visitor: _visitors_open_api_3_0_server__WEBPACK_IMPORTED_MODULE_11__["default"],
          fixedFields: {
            url: _visitors_open_api_3_0_server_UrlVisitor__WEBPACK_IMPORTED_MODULE_12__["default"],
            description: {
              $ref: '#/visitors/value'
            },
            variables: _visitors_open_api_3_0_server_VariablesVisitor__WEBPACK_IMPORTED_MODULE_13__["default"]
          }
        },
        ServerVariable: {
          $visitor: _visitors_open_api_3_0_server_variable__WEBPACK_IMPORTED_MODULE_14__["default"],
          fixedFields: {
            enum: {
              $ref: '#/visitors/value'
            },
            default: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            }
          }
        },
        Components: {
          $visitor: _visitors_open_api_3_0_components__WEBPACK_IMPORTED_MODULE_15__["default"],
          fixedFields: {
            schemas: _visitors_open_api_3_0_components_SchemasVisitor__WEBPACK_IMPORTED_MODULE_16__["default"],
            responses: _visitors_open_api_3_0_components_ResponsesVisitor__WEBPACK_IMPORTED_MODULE_17__["default"],
            parameters: _visitors_open_api_3_0_components_ParametersVisitor__WEBPACK_IMPORTED_MODULE_18__["default"],
            examples: _visitors_open_api_3_0_components_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_19__["default"],
            requestBodies: _visitors_open_api_3_0_components_RequestBodiesVisitor__WEBPACK_IMPORTED_MODULE_20__["default"],
            headers: _visitors_open_api_3_0_components_HeadersVisitor__WEBPACK_IMPORTED_MODULE_21__["default"],
            securitySchemes: _visitors_open_api_3_0_components_SecuritySchemesVisitor__WEBPACK_IMPORTED_MODULE_22__["default"],
            links: _visitors_open_api_3_0_components_LinksVisitor__WEBPACK_IMPORTED_MODULE_23__["default"],
            callbacks: _visitors_open_api_3_0_components_CallbacksVisitor__WEBPACK_IMPORTED_MODULE_24__["default"]
          }
        },
        Paths: {
          $visitor: _visitors_open_api_3_0_paths__WEBPACK_IMPORTED_MODULE_25__["default"]
        },
        PathItem: {
          $visitor: _visitors_open_api_3_0_path_item__WEBPACK_IMPORTED_MODULE_26__["default"],
          fixedFields: {
            $ref: _visitors_open_api_3_0_path_item_$RefVisitor__WEBPACK_IMPORTED_MODULE_27__["default"],
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            get: {
              $ref: '#/visitors/document/objects/Operation'
            },
            put: {
              $ref: '#/visitors/document/objects/Operation'
            },
            post: {
              $ref: '#/visitors/document/objects/Operation'
            },
            delete: {
              $ref: '#/visitors/document/objects/Operation'
            },
            options: {
              $ref: '#/visitors/document/objects/Operation'
            },
            head: {
              $ref: '#/visitors/document/objects/Operation'
            },
            patch: {
              $ref: '#/visitors/document/objects/Operation'
            },
            trace: {
              $ref: '#/visitors/document/objects/Operation'
            },
            servers: _visitors_open_api_3_0_path_item_ServersVisitor__WEBPACK_IMPORTED_MODULE_28__["default"],
            parameters: _visitors_open_api_3_0_path_item_ParametersVisitor__WEBPACK_IMPORTED_MODULE_29__["default"]
          }
        },
        Operation: {
          $visitor: _visitors_open_api_3_0_operation__WEBPACK_IMPORTED_MODULE_30__["default"],
          fixedFields: {
            tags: _visitors_open_api_3_0_operation_TagsVisitor__WEBPACK_IMPORTED_MODULE_31__["default"],
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            },
            operationId: {
              $ref: '#/visitors/value'
            },
            parameters: _visitors_open_api_3_0_operation_ParametersVisitor__WEBPACK_IMPORTED_MODULE_32__["default"],
            requestBody: _visitors_open_api_3_0_operation_RequestBodyVisitor__WEBPACK_IMPORTED_MODULE_33__["default"],
            responses: {
              $ref: '#/visitors/document/objects/Responses'
            },
            callbacks: _visitors_open_api_3_0_operation_CallbacksVisitor__WEBPACK_IMPORTED_MODULE_34__["default"],
            deprecated: {
              $ref: '#/visitors/value'
            },
            security: _visitors_open_api_3_0_operation_SecurityVisitor__WEBPACK_IMPORTED_MODULE_35__["default"],
            servers: _visitors_open_api_3_0_operation_ServersVisitor__WEBPACK_IMPORTED_MODULE_36__["default"]
          }
        },
        ExternalDocumentation: {
          $visitor: _visitors_open_api_3_0_external_documentation__WEBPACK_IMPORTED_MODULE_37__["default"],
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            url: {
              $ref: '#/visitors/value'
            }
          }
        },
        Parameter: {
          $visitor: _visitors_open_api_3_0_parameter__WEBPACK_IMPORTED_MODULE_38__["default"],
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            in: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            required: {
              $ref: '#/visitors/value'
            },
            deprecated: {
              $ref: '#/visitors/value'
            },
            allowEmptyValue: {
              $ref: '#/visitors/value'
            },
            style: {
              $ref: '#/visitors/value'
            },
            explode: {
              $ref: '#/visitors/value'
            },
            allowReserved: {
              $ref: '#/visitors/value'
            },
            schema: _visitors_open_api_3_0_parameter_SchemaVisitor__WEBPACK_IMPORTED_MODULE_39__["default"],
            example: {
              $ref: '#/visitors/value'
            },
            examples: _visitors_open_api_3_0_parameter_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_40__["default"],
            content: _visitors_open_api_3_0_parameter_ContentVisitor__WEBPACK_IMPORTED_MODULE_41__["default"]
          }
        },
        RequestBody: {
          $visitor: _visitors_open_api_3_0_request_body__WEBPACK_IMPORTED_MODULE_42__["default"],
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            content: _visitors_open_api_3_0_request_body_ContentVisitor__WEBPACK_IMPORTED_MODULE_43__["default"],
            required: {
              $ref: '#/visitors/value'
            }
          }
        },
        MediaType: {
          $visitor: _visitors_open_api_3_0_media_type__WEBPACK_IMPORTED_MODULE_44__["default"],
          fixedFields: {
            schema: _visitors_open_api_3_0_media_type_SchemaVisitor__WEBPACK_IMPORTED_MODULE_45__["default"],
            example: {
              $ref: '#/visitors/value'
            },
            examples: _visitors_open_api_3_0_media_type_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_46__["default"],
            encoding: _visitors_open_api_3_0_media_type_EncodingVisitor__WEBPACK_IMPORTED_MODULE_47__["default"]
          }
        },
        Encoding: {
          $visitor: _visitors_open_api_3_0_encoding__WEBPACK_IMPORTED_MODULE_48__["default"],
          fixedFields: {
            contentType: {
              $ref: '#/visitors/value'
            },
            headers: _visitors_open_api_3_0_encoding_HeadersVisitor__WEBPACK_IMPORTED_MODULE_49__["default"],
            style: {
              $ref: '#/visitors/value'
            },
            explode: {
              $ref: '#/visitors/value'
            },
            allowReserved: {
              $ref: '#/visitors/value'
            }
          }
        },
        Responses: {
          $visitor: _visitors_open_api_3_0_responses__WEBPACK_IMPORTED_MODULE_50__["default"],
          fixedFields: {
            default: _visitors_open_api_3_0_responses_DefaultVisitor__WEBPACK_IMPORTED_MODULE_51__["default"]
          }
        },
        Response: {
          $visitor: _visitors_open_api_3_0_response__WEBPACK_IMPORTED_MODULE_52__["default"],
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            headers: _visitors_open_api_3_0_response_HeadersVisitor__WEBPACK_IMPORTED_MODULE_53__["default"],
            content: _visitors_open_api_3_0_response_ContentVisitor__WEBPACK_IMPORTED_MODULE_54__["default"],
            links: _visitors_open_api_3_0_response_LinksVisitor__WEBPACK_IMPORTED_MODULE_55__["default"]
          }
        },
        Callback: {
          $visitor: _visitors_open_api_3_0_callback__WEBPACK_IMPORTED_MODULE_56__["default"]
        },
        Example: {
          $visitor: _visitors_open_api_3_0_example__WEBPACK_IMPORTED_MODULE_57__["default"],
          fixedFields: {
            summary: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            value: {
              $ref: '#/visitors/value'
            },
            externalValue: _visitors_open_api_3_0_example_ExternalValueVisitor__WEBPACK_IMPORTED_MODULE_58__["default"]
          }
        },
        Link: {
          $visitor: _visitors_open_api_3_0_link__WEBPACK_IMPORTED_MODULE_59__["default"],
          fixedFields: {
            operationRef: _visitors_open_api_3_0_link_OperationRefVisitor__WEBPACK_IMPORTED_MODULE_60__["default"],
            operationId: _visitors_open_api_3_0_link_OperationIdVisitor__WEBPACK_IMPORTED_MODULE_61__["default"],
            parameters: _visitors_open_api_3_0_link_ParametersVisitor__WEBPACK_IMPORTED_MODULE_62__["default"],
            requestBody: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            server: {
              $ref: '#/visitors/document/objects/Server'
            }
          }
        },
        Header: {
          $visitor: _visitors_open_api_3_0_header__WEBPACK_IMPORTED_MODULE_63__["default"],
          fixedFields: {
            description: {
              $ref: '#/visitors/value'
            },
            required: {
              $ref: '#/visitors/value'
            },
            deprecated: {
              $ref: '#/visitors/value'
            },
            allowEmptyValue: {
              $ref: '#/visitors/value'
            },
            style: {
              $ref: '#/visitors/value'
            },
            explode: {
              $ref: '#/visitors/value'
            },
            allowReserved: {
              $ref: '#/visitors/value'
            },
            schema: _visitors_open_api_3_0_header_SchemaVisitor__WEBPACK_IMPORTED_MODULE_64__["default"],
            example: {
              $ref: '#/visitors/value'
            },
            examples: _visitors_open_api_3_0_header_ExamplesVisitor__WEBPACK_IMPORTED_MODULE_65__["default"],
            content: _visitors_open_api_3_0_header_ContentVisitor__WEBPACK_IMPORTED_MODULE_66__["default"]
          }
        },
        Tag: {
          $visitor: _visitors_open_api_3_0_tag__WEBPACK_IMPORTED_MODULE_67__["default"],
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            }
          }
        },
        Reference: {
          $visitor: _visitors_open_api_3_0_reference__WEBPACK_IMPORTED_MODULE_68__["default"],
          fixedFields: {
            $ref: _visitors_open_api_3_0_reference_$RefVisitor__WEBPACK_IMPORTED_MODULE_69__["default"]
          }
        },
        JSONSchema: {
          $ref: '#/visitors/document/objects/Schema'
        },
        JSONReference: {
          $ref: '#/visitors/document/objects/Reference'
        },
        Schema: {
          $visitor: _visitors_open_api_3_0_schema__WEBPACK_IMPORTED_MODULE_70__["default"],
          fixedFields: {
            // the following properties are taken directly from the JSON Schema definition and follow the same specifications
            title: jsonSchemaFixedFields.title,
            multipleOf: jsonSchemaFixedFields.multipleOf,
            maximum: jsonSchemaFixedFields.maximum,
            exclusiveMaximum: jsonSchemaFixedFields.exclusiveMaximum,
            minimum: jsonSchemaFixedFields.minimum,
            exclusiveMinimum: jsonSchemaFixedFields.exclusiveMinimum,
            maxLength: jsonSchemaFixedFields.maxLength,
            minLength: jsonSchemaFixedFields.minLength,
            pattern: jsonSchemaFixedFields.pattern,
            maxItems: jsonSchemaFixedFields.maxItems,
            minItems: jsonSchemaFixedFields.minItems,
            uniqueItems: jsonSchemaFixedFields.uniqueItems,
            maxProperties: jsonSchemaFixedFields.maxProperties,
            minProperties: jsonSchemaFixedFields.minProperties,
            required: jsonSchemaFixedFields.required,
            enum: jsonSchemaFixedFields.enum,
            // the following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification
            type: _visitors_open_api_3_0_schema_TypeVisitor__WEBPACK_IMPORTED_MODULE_71__["default"],
            allOf: _visitors_open_api_3_0_schema_AllOfVisitor__WEBPACK_IMPORTED_MODULE_72__["default"],
            anyOf: _visitors_open_api_3_0_schema_AnyOfVisitor__WEBPACK_IMPORTED_MODULE_73__["default"],
            oneOf: _visitors_open_api_3_0_schema_OneOfVisitor__WEBPACK_IMPORTED_MODULE_74__["default"],
            not: _visitors_open_api_3_0_schema_SchemaOrReferenceVisitor__WEBPACK_IMPORTED_MODULE_75__["default"],
            items: _visitors_open_api_3_0_schema_ItemsVisitor__WEBPACK_IMPORTED_MODULE_76__["default"],
            properties: _visitors_open_api_3_0_schema_PropertiesVisitor__WEBPACK_IMPORTED_MODULE_77__["default"],
            additionalProperties: _visitors_open_api_3_0_schema_SchemaOrReferenceVisitor__WEBPACK_IMPORTED_MODULE_75__["default"],
            description: jsonSchemaFixedFields.description,
            format: jsonSchemaFixedFields.format,
            default: jsonSchemaFixedFields.default,
            // OpenAPI vocabulary
            nullable: {
              $ref: '#/visitors/value'
            },
            discriminator: {
              $ref: '#/visitors/document/objects/Discriminator'
            },
            writeOnly: {
              $ref: '#/visitors/value'
            },
            xml: {
              $ref: '#/visitors/document/objects/XML'
            },
            externalDocs: {
              $ref: '#/visitors/document/objects/ExternalDocumentation'
            },
            example: {
              $ref: '#/visitors/value'
            },
            deprecated: {
              $ref: '#/visitors/value'
            }
          }
        },
        Discriminator: {
          $visitor: _visitors_open_api_3_0_distriminator__WEBPACK_IMPORTED_MODULE_78__["default"],
          fixedFields: {
            propertyName: {
              $ref: '#/visitors/value'
            },
            mapping: _visitors_open_api_3_0_distriminator_MappingVisitor__WEBPACK_IMPORTED_MODULE_79__["default"]
          }
        },
        XML: {
          $visitor: _visitors_open_api_3_0_xml__WEBPACK_IMPORTED_MODULE_80__["default"],
          fixedFields: {
            name: {
              $ref: '#/visitors/value'
            },
            namespace: {
              $ref: '#/visitors/value'
            },
            prefix: {
              $ref: '#/visitors/value'
            },
            attribute: {
              $ref: '#/visitors/value'
            },
            wrapped: {
              $ref: '#/visitors/value'
            }
          }
        },
        SecurityScheme: {
          $visitor: _visitors_open_api_3_0_security_scheme__WEBPACK_IMPORTED_MODULE_81__["default"],
          fixedFields: {
            type: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            name: {
              $ref: '#/visitors/value'
            },
            in: {
              $ref: '#/visitors/value'
            },
            scheme: {
              $ref: '#/visitors/value'
            },
            bearerFormat: {
              $ref: '#/visitors/value'
            },
            flows: {
              $ref: '#/visitors/document/objects/OAuthFlows'
            },
            openIdConnectUrl: {
              $ref: '#/visitors/value'
            }
          }
        },
        OAuthFlows: {
          $visitor: _visitors_open_api_3_0_oauth_flows__WEBPACK_IMPORTED_MODULE_82__["default"],
          fixedFields: {
            implicit: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            },
            password: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            },
            clientCredentials: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            },
            authorizationCode: {
              $ref: '#/visitors/document/objects/OAuthFlow'
            }
          }
        },
        OAuthFlow: {
          $visitor: _visitors_open_api_3_0_oauth_flow__WEBPACK_IMPORTED_MODULE_83__["default"],
          fixedFields: {
            authorizationUrl: {
              $ref: '#/visitors/value'
            },
            tokenUrl: {
              $ref: '#/visitors/value'
            },
            refreshUrl: {
              $ref: '#/visitors/value'
            },
            scopes: _visitors_open_api_3_0_oauth_flow_ScopesVisitor__WEBPACK_IMPORTED_MODULE_84__["default"]
          }
        },
        SecurityRequirement: {
          $visitor: _visitors_open_api_3_0_security_requirement__WEBPACK_IMPORTED_MODULE_85__["default"]
        }
      },
      extension: {
        $visitor: _visitors_SpecificationExtensionVisitor__WEBPACK_IMPORTED_MODULE_86__["default"]
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (specification);

/***/ }),

/***/ 84225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6260);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70060);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97269);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9936);



const createToolbox = () => {
  const namespace = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.createNamespace)(_namespace__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const predicates = {
    ..._predicates__WEBPACK_IMPORTED_MODULE_2__,
    isElement: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.isElement,
    isStringElement: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.isStringElement,
    isArrayElement: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.isArrayElement,
    isObjectElement: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.isObjectElement,
    isMemberElement: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.isMemberElement,
    includesClasses: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.includesClasses,
    hasElementSourceMap: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.hasElementSourceMap
  };
  return {
    predicates,
    namespace
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToolbox);

/***/ }),

/***/ 34572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7951);
/* harmony import */ var _Visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12746);



/**
 * This visitor is responsible for falling back to current traversed element
 * Given OpenApi3_0Visitor expects ObjectElement to be traversed. If
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

/***/ 97444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88863);


class SpecificationExtensionVisitor extends _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  MemberElement(memberElement) {
    this.element = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(memberElement);
    this.element.classes.push('specification-extension');
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecificationExtensionVisitor);

/***/ }),

/***/ 88863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14494);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14864);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44787);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16867);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35956);
/* harmony import */ var _Visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12746);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34572);






/**
 * This is a base Type for every visitor that does
 * internal look-ups to retrieve other child visitors.
 */

class SpecificationVisitor extends _Visitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  specObj;
  passingOptionsNames = ['specObj', 'openApiGenericElement', 'openApiSemanticElement'];
  openApiGenericElement;
  openApiSemanticElement;
  constructor({
    specObj,
    passingOptionsNames,
    openApiGenericElement,
    openApiSemanticElement,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specObj = specObj;
    this.openApiGenericElement = openApiGenericElement;
    this.openApiSemanticElement = openApiSemanticElement;
    if (Array.isArray(passingOptionsNames)) {
      this.passingOptionsNames = passingOptionsNames;
    }
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
     * Visiting the element is equivalent to cloning it  if the prototype of a visitor
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

/***/ 12746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2717);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70060);

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

/***/ 49666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75229);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29498);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23387);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9753);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88863);




class AlternatingVisitor extends _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  alternator;
  constructor({
    alternator,
    ...rest
  }) {
    super({
      ...rest
    });
    this.alternator = alternator || [];
  }
  enter(element) {
    const functions = this.alternator.map(({
      predicate,
      specPath
    }) => (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(predicate, (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(specPath), ramda_adjunct__WEBPACK_IMPORTED_MODULE_3__["default"]));
    const specPath = (0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__["default"])(functions)(element);
    this.element = this.toRefractedElement(specPath, element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlternatingVisitor);

/***/ }),

/***/ 44720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88863);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83990);



class FixedFieldsVisitor extends _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  specPath;
  ignoredFields;
  canSupportSpecificationExtensions = true;
  specificationExtensionPredicate = _predicates__WEBPACK_IMPORTED_MODULE_1__.isOpenApiExtension;
  constructor({
    specPath,
    ignoredFields,
    canSupportSpecificationExtensions,
    specificationExtensionPredicate,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPath = specPath;
    this.ignoredFields = ignoredFields || [];
    if (typeof canSupportSpecificationExtensions === 'boolean') {
      this.canSupportSpecificationExtensions = canSupportSpecificationExtensions;
    }
    if (typeof specificationExtensionPredicate === 'function') {
      this.specificationExtensionPredicate = specificationExtensionPredicate;
    }
  }
  ObjectElement(objectElement) {
    const specPath = this.specPath(objectElement);
    const fields = this.retrieveFixedFields(specPath);

    // @ts-ignore
    objectElement.forEach((value, key, memberElement) => {
      if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.isStringElement)(key) && fields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key)) && !this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key))) {
        const fixedFieldElement = this.toRefractedElement([...specPath, 'fixedFields', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key)], value);
        const newMemberElement = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.MemberElement((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(key), fixedFieldElement);
        this.copyMetaAndAttributes(memberElement, newMemberElement);
        newMemberElement.classes.push('fixed-field');
        this.element.content.push(newMemberElement);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(memberElement)) {
        const extensionElement = this.toRefractedElement(['document', 'extension'], memberElement);
        this.element.content.push(extensionElement);
      } else if (!this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key))) {
        this.element.content.push((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(memberElement));
      }
    });
    this.copyMetaAndAttributes(objectElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FixedFieldsVisitor);

/***/ }),

/***/ 65411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68894);
/* harmony import */ var _PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92063);


class MapVisitor extends _PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.fieldPatternPredicate = ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapVisitor);

/***/ }),

/***/ 52651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70036);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7951);
/* harmony import */ var _FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92063);





class MixedFieldsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  specPathFixedFields;
  specPathPatternedFields;
  constructor({
    specPathFixedFields,
    specPathPatternedFields,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPathFixedFields = specPathFixedFields;
    this.specPathPatternedFields = specPathPatternedFields;
  }
  ObjectElement(objectElement) {
    const {
      specPath,
      ignoredFields
    } = this;
    try {
      this.specPath = this.specPathFixedFields;
      const fixedFields = this.retrieveFixedFields(this.specPath(objectElement));
      // let FixedFieldsVisitor only process fixed fields and leave rest to PatternedFieldsVisitor
      // @ts-ignore
      this.ignoredFields = [...ignoredFields, ...(0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(objectElement.keys(), fixedFields)];
      _FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);
      this.specPath = this.specPathPatternedFields;
      this.ignoredFields = fixedFields;
      _PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.ObjectElement.call(this, objectElement);
    } catch (e) {
      this.specPath = specPath;
      throw e;
    }
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MixedFieldsVisitor);

/***/ }),

/***/ 92063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28833);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88863);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83990);




class PatternedFieldsVisitor extends _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  specPath;
  ignoredFields;
  fieldPatternPredicate = ramda__WEBPACK_IMPORTED_MODULE_1__["default"];
  canSupportSpecificationExtensions = false;
  specificationExtensionPredicate = _predicates__WEBPACK_IMPORTED_MODULE_2__.isOpenApiExtension;
  constructor({
    specPath,
    ignoredFields,
    fieldPatternPredicate,
    canSupportSpecificationExtensions,
    specificationExtensionPredicate,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPath = specPath;
    this.ignoredFields = ignoredFields || [];
    if (typeof fieldPatternPredicate === 'function') {
      this.fieldPatternPredicate = fieldPatternPredicate;
    }
    if (typeof canSupportSpecificationExtensions === 'boolean') {
      this.canSupportSpecificationExtensions = canSupportSpecificationExtensions;
    }
    if (typeof specificationExtensionPredicate === 'function') {
      this.specificationExtensionPredicate = specificationExtensionPredicate;
    }
  }
  ObjectElement(objectElement) {
    // @ts-ignore
    objectElement.forEach((value, key, memberElement) => {
      if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(memberElement)) {
        const extensionElement = this.toRefractedElement(['document', 'extension'], memberElement);
        this.element.content.push(extensionElement);
      } else if (!this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key)) && this.fieldPatternPredicate((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key))) {
        const specPath = this.specPath(value);
        const patternedFieldElement = this.toRefractedElement(specPath, value);
        const newMemberElement = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.MemberElement((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(key), patternedFieldElement);
        this.copyMetaAndAttributes(memberElement, newMemberElement);
        newMemberElement.classes.push('patterned-field');
        this.element.content.push(newMemberElement);
      } else if (!this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__["default"])(key))) {
        this.element.content.push((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(memberElement));
      }
    });
    this.copyMetaAndAttributes(objectElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternedFieldsVisitor);

/***/ }),

/***/ 61160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61865);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class ContentVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.ObjectElement();
    this.element.classes.push('content');
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'MediaType']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentVisitor);

/***/ }),

/***/ 25310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61865);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class ExamplesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.ObjectElement();
    this.element.classes.push('examples');
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Example'];
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'example');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesVisitor);

/***/ }),

/***/ 19419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88863);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _elements_Openapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98565);





class OpenapiVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  StringElement(stringElement) {
    const openapiElement = new _elements_Openapi__WEBPACK_IMPORTED_MODULE_3__["default"]((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__["default"])(stringElement));
    this.copyMetaAndAttributes(stringElement, openapiElement);
    this.element = openapiElement;
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenapiVisitor);

/***/ }),

/***/ 42263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88863);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class ParametersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.ArrayElement();
    this.element.classes.push('parameters');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(item) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Parameter'];
      const element = this.toRefractedElement(specPath, item);
      if ((0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement)(element)) {
        element.setMetaProperty('referenced-element', 'parameter');
      }
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParametersVisitor);

/***/ }),

/***/ 41061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _elements_nces_Security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34295);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88863);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class SecurityVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_Security__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.isObjectElement)(item)) {
        const element = this.toRefractedElement(['document', 'objects', 'SecurityRequirement'], item);
        this.element.push(element);
      } else {
        this.element.push((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(item));
      }
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityVisitor);

/***/ }),

/***/ 26699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90129);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88863);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);






class ServersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isServerLikeElement)(item) ? ['document', 'objects', 'Server'] : ['value'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServersVisitor);

/***/ }),

/***/ 88748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _elements_nces_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63336);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88863);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);






class TagsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_Tags__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isTagLikeElement)(item) ? ['document', 'objects', 'Tag'] : ['value'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsVisitor);

/***/ }),

/***/ 98729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71514);
/* harmony import */ var _elements_Callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74014);
/* harmony import */ var _generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92063);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65411);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97269);








class CallbackVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Callback__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'PathItem']);
    this.canSupportSpecificationExtensions = true;
    this.fieldPatternPredicate = value => /{(?<expression>[^}]{1,2083})}/.test(String(value)); // 2,083 characters is the maximum length of a URL in Chrome
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_5__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every PathItemElement with Callback Object expression metadata
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isPathItemElement)
    // @ts-ignore
    .forEach((pathItemElement, key) => {
      pathItemElement.setMetaProperty('runtime-expression', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(key));
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallbackVisitor);

/***/ }),

/***/ 47962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90365);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class CallbacksVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Callback'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'callback');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallbacksVisitor);

/***/ }),

/***/ 84945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15706);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class ExamplesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Example'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'example');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesVisitor);

/***/ }),

/***/ 23192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71514);
/* harmony import */ var _elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75671);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);







class HeadersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Header'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'header');
    });

    // decorate every HeaderElement with metadata about their name
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isHeaderElement).forEach((value, key) => {
      value.setMetaProperty('header-name', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__["default"])(key));
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadersVisitor);

/***/ }),

/***/ 87025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3924);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class LinksVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Link'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'link');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinksVisitor);

/***/ }),

/***/ 17400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29777);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class ParametersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Parameter'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'parameter');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParametersVisitor);

/***/ }),

/***/ 13417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69568);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class RequestBodiesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'RequestBody'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'requestBody');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestBodiesVisitor);

/***/ }),

/***/ 67554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71514);
/* harmony import */ var _elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35113);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);







class ResponsesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Response'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'response');
    });

    // decorate every ResponseElement with metadata about their status code
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isResponseElement).forEach((value, key) => {
      value.setMetaProperty('http-status-code', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__["default"])(key));
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsesVisitor);

/***/ }),

/***/ 13658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96477);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class SchemasVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Schema'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemasVisitor);

/***/ }),

/***/ 62032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47975);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class SecuritySchemesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'SecurityScheme'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'securityScheme');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecuritySchemesVisitor);

/***/ }),

/***/ 91886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44281);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class ComponentsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Components__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Components']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentsVisitor);

/***/ }),

/***/ 13414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95857);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class ContactVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Contact__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Contact']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactVisitor);

/***/ }),

/***/ 91317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _elements_nces_DiscriminatorMapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12331);





class MappingVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_DiscriminatorMapping__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['value']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MappingVisitor);

/***/ }),

/***/ 35349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Discriminator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32633);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class DiscriminatorVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Discriminator__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Discriminator']);
    this.canSupportSpecificationExtensions = false;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscriminatorVisitor);

/***/ }),

/***/ 85855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71514);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);
/* harmony import */ var _elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3952);







class HeadersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Header'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'header');
    });

    // decorate every HeaderElement with metadata about their name
    this.element.forEach((value, key) => {
      if (!(0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isHeaderElement)(value)) return;
      const headerName = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__["default"])(key);
      value.setMetaProperty('headerName', headerName);
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadersVisitor);

/***/ }),

/***/ 78579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71514);
/* harmony import */ var _elements_Encoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37904);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97269);







class EncodingVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Encoding__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Encoding']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every Header with media type metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isObjectElement)(this.element.headers)) {
      this.element.headers.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isHeaderElement)
      // @ts-ignore
      .forEach((headerElement, key) => {
        headerElement.setMetaProperty('header-name', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(key));
      });
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EncodingVisitor);

/***/ }),

/***/ 76964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class ExternalValueVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalValueVisitor);

/***/ }),

/***/ 72176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _elements_Example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17931);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);






class ExampleVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Example__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Example']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // mark this ExampleElement with reference metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isStringElement)(this.element.externalValue)) {
      this.element.classes.push('reference-element');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExampleVisitor);

/***/ }),

/***/ 72210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20950);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class ExternalDocumentationVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_ExternalDocumentation__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'ExternalDocumentation']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalDocumentationVisitor);

/***/ }),

/***/ 68518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61160);
/* harmony import */ var _elements_nces_HeaderContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2195);


class ContentVisitor extends _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_HeaderContent__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentVisitor);

/***/ }),

/***/ 89244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamplesVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25310);
/* harmony import */ var _elements_nces_HeaderExamples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62951);


class ExamplesVisitor extends _ExamplesVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_HeaderExamples__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesVisitor);

/***/ }),

/***/ 26700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53679);
/* harmony import */ var _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49666);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class SchemaVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: _predicates__WEBPACK_IMPORTED_MODULE_3__.isReferenceLikeElement,
      specPath: ['document', 'objects', 'Reference']
    }, {
      predicate: ramda__WEBPACK_IMPORTED_MODULE_4__["default"],
      specPath: ['document', 'objects', 'Schema']
    }];
  }
  ObjectElement(objectElement) {
    const result = _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.enter.call(this, objectElement);
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaVisitor);

/***/ }),

/***/ 89915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95376);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class HeaderVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Header__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Header']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderVisitor);

/***/ }),

/***/ 3981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _elements_OpenApi3_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84889);






// eslint-disable-next-line @typescript-eslint/naming-convention

// eslint-disable-next-line @typescript-eslint/naming-convention
class OpenApi3_0Visitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_OpenApi3_0__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'OpenApi']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    return _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenApi3_0Visitor);

/***/ }),

/***/ 72138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class VersionVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('api-version');
    this.element.classes.push('version');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VersionVisitor);

/***/ }),

/***/ 44198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77425);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class InfoVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Info__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Info']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoVisitor);

/***/ }),

/***/ 22209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_License__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96878);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class LicenseVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_License__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'License']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LicenseVisitor);

/***/ }),

/***/ 14298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class OperationIdVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationIdVisitor);

/***/ }),

/***/ 42726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class OperationRefVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationRefVisitor);

/***/ }),

/***/ 99076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _elements_nces_LinkParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59517);





class ParametersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_LinkParameters__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['value']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParametersVisitor);

/***/ }),

/***/ 50426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _elements_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7469);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);






class LinkVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Link__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Link']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // mark this LinkElement with reference metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isStringElement)(this.element.operationId) || (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isStringElement)(this.element.operationRef)) {
      this.element.classes.push('reference-element');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkVisitor);

/***/ }),

/***/ 15764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62872);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class EncodingVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Encoding']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EncodingVisitor);

/***/ }),

/***/ 93154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamplesVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25310);
/* harmony import */ var _elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37154);


class ExamplesVisitor extends _ExamplesVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesVisitor);

/***/ }),

/***/ 16614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53679);
/* harmony import */ var _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49666);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class SchemaVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: _predicates__WEBPACK_IMPORTED_MODULE_3__.isReferenceLikeElement,
      specPath: ['document', 'objects', 'Reference']
    }, {
      predicate: ramda__WEBPACK_IMPORTED_MODULE_4__["default"],
      specPath: ['document', 'objects', 'Schema']
    }];
  }
  ObjectElement(objectElement) {
    const result = _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.enter.call(this, objectElement);
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaVisitor);

/***/ }),

/***/ 96881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_MediaType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62521);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class MediaTypeVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_MediaType__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'MediaType']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaTypeVisitor);

/***/ }),

/***/ 82281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _elements_nces_OAuthFlowScopes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73951);





class ScopesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_OAuthFlowScopes__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['value']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScopesVisitor);

/***/ }),

/***/ 26188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16950);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class OAuthFlowVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_OAuthFlow__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'OAuthFlow']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthFlowVisitor);

/***/ }),

/***/ 23769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_OAuthFlows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4981);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class OAuthFlowsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_OAuthFlows__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'OAuthFlows']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OAuthFlowsVisitor);

/***/ }),

/***/ 86673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);
/* harmony import */ var _elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70090);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);






class CallbacksVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  specPath;
  constructor(options) {
    super(options);
    this.element = new _elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Callback'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'callback');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallbacksVisitor);

/***/ }),

/***/ 79057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68748);
/* harmony import */ var _ParametersVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);


class ParametersVisitor extends _ParametersVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParametersVisitor);

/***/ }),

/***/ 68366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53679);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97269);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83990);
/* harmony import */ var _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49666);




class RequestBodyVisitor extends _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: _predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceLikeElement,
      specPath: ['document', 'objects', 'Reference']
    }, {
      predicate: ramda__WEBPACK_IMPORTED_MODULE_2__["default"],
      specPath: ['document', 'objects', 'RequestBody']
    }];
  }
  ObjectElement(objectElement) {
    const result = _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.enter.call(this, objectElement);
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_3__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'requestBody');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestBodyVisitor);

/***/ }),

/***/ 74783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23062);
/* harmony import */ var _SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88863);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class SecurityVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.isObjectElement)(item) ? ['document', 'objects', 'SecurityRequirement'] : ['value'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityVisitor);

/***/ }),

/***/ 44529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89686);
/* harmony import */ var _ServersVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26699);


class ServersVisitor extends _ServersVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServersVisitor);

/***/ }),

/***/ 11890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7951);
/* harmony import */ var _elements_nces_OperationTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36509);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);



class TagsVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_OperationTags__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  ArrayElement(arrayElement) {
    this.element = this.element.concat((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(arrayElement));
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsVisitor);

/***/ }),

/***/ 91983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87788);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class OperationVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Operation__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Operation']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationVisitor);

/***/ }),

/***/ 92776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61160);
/* harmony import */ var _elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11889);


class ContentVisitor extends _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentVisitor);

/***/ }),

/***/ 92382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ExamplesVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25310);
/* harmony import */ var _elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98741);


class ExamplesVisitor extends _ExamplesVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesVisitor);

/***/ }),

/***/ 90658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53679);
/* harmony import */ var _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49666);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class SchemaVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: _predicates__WEBPACK_IMPORTED_MODULE_3__.isReferenceLikeElement,
      specPath: ['document', 'objects', 'Reference']
    }, {
      predicate: ramda__WEBPACK_IMPORTED_MODULE_4__["default"],
      specPath: ['document', 'objects', 'Schema']
    }];
  }
  ObjectElement(objectElement) {
    const result = _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.enter.call(this, objectElement);
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaVisitor);

/***/ }),

/***/ 44237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71514);
/* harmony import */ var _elements_Parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47578);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97269);







class ParameterVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Parameter__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Parameter']);
    this.canSupportSpecificationExtensions = true;
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every MediaTypeElement with media type metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isObjectElement)(this.element.contentProp)) {
      this.element.contentProp.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isMediaTypeElement)
      // @ts-ignore
      .forEach((mediaTypeElement, key) => {
        mediaTypeElement.setMetaProperty('media-type', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(key));
      });
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParameterVisitor);

/***/ }),

/***/ 1566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class $RefVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($RefVisitor);

/***/ }),

/***/ 38101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90877);
/* harmony import */ var _ParametersVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);


class ParametersVisitor extends _ParametersVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParametersVisitor);

/***/ }),

/***/ 49685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34977);
/* harmony import */ var _ServersVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26699);


class ServersVisitor extends _ServersVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServersVisitor);

/***/ }),

/***/ 2643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70060);
/* harmony import */ var _elements_PathItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16253);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);







class PathItemVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_PathItem__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'PathItem']);
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate Operation elements with HTTP method
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isOperationElement)
    // @ts-ignore
    .forEach((operationElement, httpMethodElementCI) => {
      const httpMethodElementCS = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(httpMethodElementCI);
      httpMethodElementCS.content = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(httpMethodElementCS).toUpperCase();
      operationElement.setMetaProperty('http-method', httpMethodElementCS);
    });

    // mark this PathItemElement with reference metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_8__.isStringElement)(this.element.$ref)) {
      this.element.classes.push('reference-element');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathItemVisitor);

/***/ }),

/***/ 29958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53679);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14831);
/* harmony import */ var _elements_Paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15001);
/* harmony import */ var _generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92063);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97269);







class PathsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Paths__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'PathItem']);
    this.canSupportSpecificationExtensions = true;
    this.fieldPatternPredicate = ramda__WEBPACK_IMPORTED_MODULE_5__["default"];
  }
  ObjectElement(objectElement) {
    const result = _generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every PathItemElement with path metadata
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isPathItemElement)
    // @ts-ignore
    .forEach((pathItemElement, key) => {
      key.classes.push('openapi-path-template');
      key.classes.push('path-template');
      pathItemElement.setMetaProperty('path', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__.cloneDeep)(key));
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathsVisitor);

/***/ }),

/***/ 17566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class $RefVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($RefVisitor);

/***/ }),

/***/ 50163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _elements_Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27112);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);






class ReferenceVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Reference__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Reference']);
    this.canSupportSpecificationExtensions = false;
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // mark this ReferenceElement with reference metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isStringElement)(this.element.$ref)) {
      this.element.classes.push('reference-element');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReferenceVisitor);

/***/ }),

/***/ 12425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98183);
/* harmony import */ var _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61160);


class ContentVisitor extends _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentVisitor);

/***/ }),

/***/ 45290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71514);
/* harmony import */ var _elements_RequestBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79964);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97269);







class RequestBodyVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_RequestBody__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'RequestBody']);
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every MediaTypeElement with media type metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isObjectElement)(this.element.contentProp)) {
      this.element.contentProp.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isMediaTypeElement)
      // @ts-ignore
      .forEach((mediaTypeElement, key) => {
        mediaTypeElement.setMetaProperty('media-type', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(key));
      });
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestBodyVisitor);

/***/ }),

/***/ 54936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36641);
/* harmony import */ var _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61160);


class ContentVisitor extends _ContentVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentVisitor);

/***/ }),

/***/ 97697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71514);
/* harmony import */ var _elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86958);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);







class HeadersVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Header'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'header');
    });

    // decorate every HeaderElement with metadata about their name
    this.element.forEach((value, key) => {
      if (!(0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isHeaderElement)(value)) return;
      const headerName = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__["default"])(key);
      value.setMetaProperty('header-name', headerName);
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadersVisitor);

/***/ }),

/***/ 83084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79577);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);






class LinksVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_4__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Link'];
  }
  ObjectElement(objectElement) {
    const result = _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'link');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinksVisitor);

/***/ }),

/***/ 83677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71514);
/* harmony import */ var _elements_Response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6370);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97269);







class ResponseVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Response__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Response']);
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every MediaTypeElement with media type metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isObjectElement)(this.element.contentProp)) {
      this.element.contentProp.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isMediaTypeElement)
      // @ts-ignore
      .forEach((mediaTypeElement, key) => {
        mediaTypeElement.setMetaProperty('media-type', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(key));
      });
    }

    // decorate every MediaTypeElement with media type metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isObjectElement)(this.element.headers)) {
      this.element.headers.filter(_predicates__WEBPACK_IMPORTED_MODULE_6__.isHeaderElement)
      // @ts-ignore
      .forEach((headerElement, key) => {
        headerElement.setMetaProperty('header-name', (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__["default"])(key));
      });
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseVisitor);

/***/ }),

/***/ 31681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53679);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97269);
/* harmony import */ var _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49666);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);






class DefaultVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: _predicates__WEBPACK_IMPORTED_MODULE_3__.isReferenceLikeElement,
      specPath: ['document', 'objects', 'Reference']
    }, {
      predicate: ramda__WEBPACK_IMPORTED_MODULE_4__["default"],
      specPath: ['document', 'objects', 'Response']
    }];
  }
  ObjectElement(objectElement) {
    const result = _generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.enter.call(this, objectElement);

    // decorate ReferenceElement with type of referencing element
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'response');
    } else if ((0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isResponseElement)(this.element)) {
      this.element.setMetaProperty('http-status-code', 'default');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultVisitor);

/***/ }),

/***/ 7390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41685);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71514);
/* harmony import */ var _elements_Responses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53113);
/* harmony import */ var _generics_MixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52651);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83990);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97269);








class ResponsesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Responses__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPathFixedFields = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Responses']);
    this.canSupportSpecificationExtensions = true;
    this.specPathPatternedFields = element => (0,_predicates__WEBPACK_IMPORTED_MODULE_5__.isReferenceLikeElement)(element) ? ['document', 'objects', 'Reference'] : ['document', 'objects', 'Response'];
    this.fieldPatternPredicate = value => new RegExp(`^(1XX|2XX|3XX|4XX|5XX|${(0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])(100, 600).join('|')})$`).test(String(value));
  }
  ObjectElement(objectElement) {
    const result = _generics_MixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // decorate every ReferenceElement with metadata about their referencing type
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_7__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'response');
    });

    // decorate every ResponseElement with metadata about their status code
    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_7__.isResponseElement).forEach((value, key) => {
      const httpStatusCode = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_8__.cloneDeep)(key);
      if (!this.fieldPatternPredicate((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_9__["default"])(httpStatusCode))) return;
      value.setMetaProperty('http-status-code', httpStatusCode);
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsesVisitor);

/***/ }),

/***/ 26729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97269);


const {
  allOf: JSONSchemaAllOfVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema.fixedFields;
class AllOfVisitor extends JSONSchemaAllOfVisitor {
  ArrayElement(arrayElement) {
    const result = JSONSchemaAllOfVisitor.prototype.ArrayElement.call(this, arrayElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllOfVisitor);

/***/ }),

/***/ 94478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97269);


const {
  anyOf: JSONSchemaAnyOfVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema.fixedFields;
class AnyOfVisitor extends JSONSchemaAnyOfVisitor {
  ArrayElement(arrayElement) {
    const result = JSONSchemaAnyOfVisitor.prototype.ArrayElement.call(this, arrayElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnyOfVisitor);

/***/ }),

/***/ 67475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97269);


const {
  items: JSONSchemaItemsVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema.fixedFields;
class ItemsVisitor extends JSONSchemaItemsVisitor {
  ObjectElement(objectElement) {
    const result = JSONSchemaItemsVisitor.prototype.ObjectElement.call(this, objectElement);
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
  ArrayElement(arrayElement) {
    const result = this.enter(arrayElement);
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsVisitor);

/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97269);


const {
  oneOf: JSONSchemaOneOfVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema.fixedFields;
class OneOfVisitor extends JSONSchemaOneOfVisitor {
  ArrayElement(arrayElement) {
    const result = JSONSchemaOneOfVisitor.prototype.ArrayElement.call(this, arrayElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneOfVisitor);

/***/ }),

/***/ 39796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97269);


const {
  properties: JSONSchemaPropertiesVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema.fixedFields;
class PropertiesVisitor extends JSONSchemaPropertiesVisitor {
  ObjectElement(objectElement) {
    const result = JSONSchemaPropertiesVisitor.prototype.ObjectElement.call(this, objectElement);

    // @ts-ignore
    this.element.filter(_predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceElement).forEach(referenceElement => {
      referenceElement.setMetaProperty('referenced-element', 'schema');
    });
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertiesVisitor);

/***/ }),

/***/ 5858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97269);


const {
  JSONSchemaOrJSONReferenceVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors;
class SchemaOrReferenceVisitor extends JSONSchemaOrJSONReferenceVisitor {
  ObjectElement(objectElement) {
    const result = JSONSchemaOrJSONReferenceVisitor.prototype.enter.call(this, objectElement);
    if ((0,_predicates__WEBPACK_IMPORTED_MODULE_1__.isReferenceElement)(this.element)) {
      this.element.setMetaProperty('referenced-element', 'schema');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaOrReferenceVisitor);

/***/ }),

/***/ 13655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);

const {
  type: JSONSchemaTypeVisitor
} = _swagger_api_apidom_ns_json_schema_draft_4__WEBPACK_IMPORTED_MODULE_0__["default"].visitors.document.objects.JSONSchema.fixedFields;
class TypeVisitor extends JSONSchemaTypeVisitor {
  ArrayElement(arrayElement) {
    const result = this.enter(arrayElement);
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeVisitor);

/***/ }),

/***/ 51049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9854);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class SchemaVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Schema__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Schema']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaVisitor);

/***/ }),

/***/ 49886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11060);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class SecurityRequirementVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_SecurityRequirement__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['value']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityRequirementVisitor);

/***/ }),

/***/ 1784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1120);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class SecuritySchemeVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_SecurityScheme__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'SecurityScheme']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecuritySchemeVisitor);

/***/ }),

/***/ 74744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68618);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class ServerVariableVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_ServerVariable__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'ServerVariable']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerVariableVisitor);

/***/ }),

/***/ 68808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34572);

class UrlVisitor extends _FallbackVisitor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = super.enter(stringElement);
    this.element.classes.push('server-url');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlVisitor);

/***/ }),

/***/ 4440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65411);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);
/* harmony import */ var _elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83669);





class VariablesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'ServerVariable']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VariablesVisitor);

/***/ }),

/***/ 72537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50710);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class ServerVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Server__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Server']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServerVisitor);

/***/ }),

/***/ 58442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50565);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class TagVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Tag__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Tag']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagVisitor);

/***/ }),

/***/ 85375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55588);
/* harmony import */ var _generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44720);
/* harmony import */ var _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34572);





class XmlVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Xml__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'XML']);
    this.canSupportSpecificationExtensions = true;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (XmlVisitor);

/***/ }),

/***/ 80192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNodeType: () => (/* binding */ getNodeType),
/* harmony export */   keyMap: () => (/* binding */ keyMap)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35956);


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
 * is used extremely rarely, so it's almost always safe during traversing
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
  OpenApi3_0Element: ['content'],
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

/***/ }),

/***/ 33103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(94715),
    root = __webpack_require__(78942);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 25098:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(23305),
    hashDelete = __webpack_require__(39361),
    hashGet = __webpack_require__(11112),
    hashHas = __webpack_require__(25276),
    hashSet = __webpack_require__(57452);

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

var listCacheClear = __webpack_require__(12393),
    listCacheDelete = __webpack_require__(62049),
    listCacheGet = __webpack_require__(7144),
    listCacheHas = __webpack_require__(7452),
    listCacheSet = __webpack_require__(13964);

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

/***/ 19770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(94715),
    root = __webpack_require__(78942);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 68250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(49753),
    mapCacheDelete = __webpack_require__(5681),
    mapCacheGet = __webpack_require__(80088),
    mapCacheHas = __webpack_require__(54732),
    mapCacheSet = __webpack_require__(59068);

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

/***/ 89413:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(94715),
    root = __webpack_require__(78942);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 64512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(94715),
    root = __webpack_require__(78942);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 23212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(68250),
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

/***/ 51340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386),
    stackClear = __webpack_require__(64103),
    stackDelete = __webpack_require__(21779),
    stackGet = __webpack_require__(34162),
    stackHas = __webpack_require__(7462),
    stackSet = __webpack_require__(96638);

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

/***/ 65650:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(78942);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 31623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(78942);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 19270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(94715),
    root = __webpack_require__(78942);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 79847:
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

/***/ 10358:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(26137),
    isArguments = __webpack_require__(3283),
    isArray = __webpack_require__(53142),
    isBuffer = __webpack_require__(75853),
    isIndex = __webpack_require__(69632),
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

/***/ 11129:
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

/***/ 36465:
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

/***/ 97034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(46285);

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

/***/ 48244:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(11129),
    isArray = __webpack_require__(53142);

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

/***/ 87379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(65650),
    getRawTag = __webpack_require__(8870),
    objectToString = __webpack_require__(29005);

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

/***/ 56027:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(87379),
    isObjectLike = __webpack_require__(80547);

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

/***/ 94687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(90353),
    isObjectLike = __webpack_require__(80547);

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

/***/ 90353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(51340),
    equalArrays = __webpack_require__(33934),
    equalByTag = __webpack_require__(88861),
    equalObjects = __webpack_require__(31182),
    getTag = __webpack_require__(28486),
    isArray = __webpack_require__(53142),
    isBuffer = __webpack_require__(75853),
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

/***/ 89624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(93655),
    isMasked = __webpack_require__(64759),
    isObject = __webpack_require__(41580),
    toSource = __webpack_require__(64066);

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

/***/ 70674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(87379),
    isLength = __webpack_require__(65387),
    isObjectLike = __webpack_require__(80547);

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

var isPrototype = __webpack_require__(84882),
    nativeKeys = __webpack_require__(98121);

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

/***/ 26137:
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

/***/ 49460:
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

/***/ 65568:
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

/***/ 41950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(78942);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 33934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(23212),
    arraySome = __webpack_require__(36465),
    cacheHas = __webpack_require__(65568);

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

/***/ 88861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(65650),
    Uint8Array = __webpack_require__(31623),
    eq = __webpack_require__(46285),
    equalArrays = __webpack_require__(33934),
    mapToArray = __webpack_require__(95894),
    setToArray = __webpack_require__(49828);

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

/***/ 31182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(80393);

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

/***/ 74967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 80393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(48244),
    getSymbols = __webpack_require__(77979),
    keys = __webpack_require__(81211);

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

/***/ 44700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(79067);

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

/***/ 94715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(89624),
    getValue = __webpack_require__(20155);

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

var Symbol = __webpack_require__(65650);

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

/***/ 77979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(79847),
    stubArray = __webpack_require__(99306);

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

/***/ 28486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(33103),
    Map = __webpack_require__(19770),
    Promise = __webpack_require__(89413),
    Set = __webpack_require__(64512),
    WeakMap = __webpack_require__(19270),
    baseGetTag = __webpack_require__(87379),
    toSource = __webpack_require__(64066);

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

/***/ 20155:
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

/***/ 23305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(94497);

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

/***/ 39361:
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

/***/ 11112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(94497);

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

/***/ 25276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(94497);

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

/***/ 57452:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(94497);

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

/***/ 69632:
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

/***/ 79067:
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

/***/ 64759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(41950);

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

/***/ 84882:
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

/***/ 12393:
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

/***/ 62049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(97034);

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

var assocIndexOf = __webpack_require__(97034);

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

var assocIndexOf = __webpack_require__(97034);

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

/***/ 13964:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(97034);

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

/***/ 49753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(25098),
    ListCache = __webpack_require__(1386),
    Map = __webpack_require__(19770);

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

var getMapData = __webpack_require__(44700);

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

/***/ 80088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(44700);

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

/***/ 54732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(44700);

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

/***/ 59068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(44700);

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

/***/ 95894:
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

/***/ 94497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(94715);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 98121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(3766);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 2306:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(74967);

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

/***/ 29005:
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

/***/ 78942:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(74967);

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

/***/ 49828:
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

/***/ 64103:
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

/***/ 21779:
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

/***/ 34162:
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

/***/ 96638:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(1386),
    Map = __webpack_require__(19770),
    MapCache = __webpack_require__(68250);

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

/***/ 64066:
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

/***/ 46285:
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

var baseIsArguments = __webpack_require__(56027),
    isObjectLike = __webpack_require__(80547);

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

/***/ 53142:
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

/***/ 36529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(93655),
    isLength = __webpack_require__(65387);

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

/***/ 22563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(87379),
    isObjectLike = __webpack_require__(80547);

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

/***/ 75853:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(78942),
    stubFalse = __webpack_require__(34772);

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

/***/ 46343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(94687);

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

/***/ 93655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(87379),
    isObject = __webpack_require__(41580);

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

/***/ 65387:
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

/***/ 49310:
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

/***/ 60986:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(87379),
    isObjectLike = __webpack_require__(80547);

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

/***/ 41580:
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

/***/ 80547:
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

var baseGetTag = __webpack_require__(87379),
    isArray = __webpack_require__(53142),
    isObjectLike = __webpack_require__(80547);

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

var baseIsTypedArray = __webpack_require__(70674),
    baseUnary = __webpack_require__(49460),
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

/***/ 81211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(10358),
    baseKeys = __webpack_require__(195),
    isArrayLike = __webpack_require__(36529);

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

/***/ 21517:
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

/***/ 99306:
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

/***/ 34772:
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

/***/ 94123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(21517);

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

/***/ 82322:
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

/***/ 25735:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isNull = __webpack_require__(49310);
const isString = __webpack_require__(8138);
const isNumber = __webpack_require__(60986);
const isBoolean = __webpack_require__(22563);
const isObject = __webpack_require__(41580);

const JSONSerialiser = __webpack_require__(50394);
const elements = __webpack_require__(57547);

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

/***/ 93311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(21517);
const ArraySlice = __webpack_require__(94123);

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

/***/ 57547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(18631);
const NullElement = __webpack_require__(13004);
const StringElement = __webpack_require__(8712);
const NumberElement = __webpack_require__(12536);
const BooleanElement = __webpack_require__(2555);
const ArrayElement = __webpack_require__(29796);
const MemberElement = __webpack_require__(67309);
const ObjectElement = __webpack_require__(15642);
const LinkElement = __webpack_require__(9620);
const RefElement = __webpack_require__(70593);

const ArraySlice = __webpack_require__(94123);
const ObjectSlice = __webpack_require__(93311);

const KeyValuePair = __webpack_require__(82322);

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

const Element = __webpack_require__(18631);

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

/***/ 70593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(18631);

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

/***/ 88326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Namespace = __webpack_require__(25735);
const elements = __webpack_require__(57547);

// Direct access to the Namespace class
exports.Namespace = Namespace;

// Special constructor for the Namespace class
exports.namespace = function namespace(options) {
  return new Namespace(options);
};

exports.KeyValuePair = __webpack_require__(82322);

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

exports.JSONSerialiser = __webpack_require__(50394);
exports.JSON06Serialiser = __webpack_require__(83148);


/***/ }),

/***/ 29796:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(21517);
const Element = __webpack_require__(18631);
const ArraySlice = __webpack_require__(94123);

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

const Element = __webpack_require__(18631);

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

/***/ 18631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isEqual = __webpack_require__(46343);
const KeyValuePair = __webpack_require__(82322);
const ArraySlice = __webpack_require__(94123);

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

/***/ 67309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const KeyValuePair = __webpack_require__(82322);
const Element = __webpack_require__(18631);

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

/***/ 13004:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(18631);

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

/***/ 12536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Element = __webpack_require__(18631);

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

/***/ 15642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const negate = __webpack_require__(21517);
const isObject = __webpack_require__(41580);

const ArrayElement = __webpack_require__(29796);
const MemberElement = __webpack_require__(67309);
const ObjectSlice = __webpack_require__(93311);

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

const Element = __webpack_require__(18631);

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

/***/ 83148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const JSONSerialiser = __webpack_require__(50394);

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

/***/ 50394:
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

/***/ 17028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mixin: () => (/* binding */ Mixin),
/* harmony export */   decorate: () => (/* binding */ decorate),
/* harmony export */   hasMixin: () => (/* binding */ hasMixin),
/* harmony export */   mix: () => (/* binding */ mix),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/**
 * Utility function that works like `Object.apply`, but copies getters and setters properly as well.  Additionally gives
 * the option to exclude properties by name.
 */
const copyProps = (dest, src, exclude = []) => {
    const props = Object.getOwnPropertyDescriptors(src);
    for (let prop of exclude)
        delete props[prop];
    Object.defineProperties(dest, props);
};
/**
 * Returns the full chain of prototypes up until Object.prototype given a starting object.  The order of prototypes will
 * be closest to farthest in the chain.
 */
const protoChain = (obj, currentChain = [obj]) => {
    const proto = Object.getPrototypeOf(obj);
    if (proto === null)
        return currentChain;
    return protoChain(proto, [...currentChain, proto]);
};
/**
 * Identifies the nearest ancestor common to all the given objects in their prototype chains.  For most unrelated
 * objects, this function should return Object.prototype.
 */
const nearestCommonProto = (...objs) => {
    if (objs.length === 0)
        return undefined;
    let commonProto = undefined;
    const protoChains = objs.map(obj => protoChain(obj));
    while (protoChains.every(protoChain => protoChain.length > 0)) {
        const protos = protoChains.map(protoChain => protoChain.pop());
        const potentialCommonProto = protos[0];
        if (protos.every(proto => proto === potentialCommonProto))
            commonProto = potentialCommonProto;
        else
            break;
    }
    return commonProto;
};
/**
 * Creates a new prototype object that is a mixture of the given prototypes.  The mixing is achieved by first
 * identifying the nearest common ancestor and using it as the prototype for a new object.  Then all properties/methods
 * downstream of this prototype (ONLY downstream) are copied into the new object.
 *
 * The resulting prototype is more performant than softMixProtos(...), as well as ES5 compatible.  However, it's not as
 * flexible as updates to the source prototypes aren't captured by the mixed result.  See softMixProtos for why you may
 * want to use that instead.
 */
const hardMixProtos = (ingredients, constructor, exclude = []) => {
    var _a;
    const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
    const mixedProto = Object.create(base);
    // Keeps track of prototypes we've already visited to avoid copying the same properties multiple times.  We init the
    // list with the proto chain below the nearest common ancestor because we don't want any of those methods mixed in
    // when they will already be accessible via prototype access.
    const visitedProtos = protoChain(base);
    for (let prototype of ingredients) {
        let protos = protoChain(prototype);
        // Apply the prototype chain in reverse order so that old methods don't override newer ones.
        for (let i = protos.length - 1; i >= 0; i--) {
            let newProto = protos[i];
            if (visitedProtos.indexOf(newProto) === -1) {
                copyProps(mixedProto, newProto, ['constructor', ...exclude]);
                visitedProtos.push(newProto);
            }
        }
    }
    mixedProto.constructor = constructor;
    return mixedProto;
};
const unique = (arr) => arr.filter((e, i) => arr.indexOf(e) == i);

/**
 * Finds the ingredient with the given prop, searching in reverse order and breadth-first if searching ingredient
 * prototypes is required.
 */
const getIngredientWithProp = (prop, ingredients) => {
    const protoChains = ingredients.map(ingredient => protoChain(ingredient));
    // since we search breadth-first, we need to keep track of our depth in the prototype chains
    let protoDepth = 0;
    // not all prototype chains are the same depth, so this remains true as long as at least one of the ingredients'
    // prototype chains has an object at this depth
    let protosAreLeftToSearch = true;
    while (protosAreLeftToSearch) {
        // with the start of each horizontal slice, we assume this is the one that's deeper than any of the proto chains
        protosAreLeftToSearch = false;
        // scan through the ingredients right to left
        for (let i = ingredients.length - 1; i >= 0; i--) {
            const searchTarget = protoChains[i][protoDepth];
            if (searchTarget !== undefined && searchTarget !== null) {
                // if we find something, this is proof that this horizontal slice potentially more objects to search
                protosAreLeftToSearch = true;
                // eureka, we found it
                if (Object.getOwnPropertyDescriptor(searchTarget, prop) != undefined) {
                    return protoChains[i][0];
                }
            }
        }
        protoDepth++;
    }
    return undefined;
};
/**
 * "Mixes" ingredients by wrapping them in a Proxy.  The optional prototype argument allows the mixed object to sit
 * downstream of an existing prototype chain.  Note that "properties" cannot be added, deleted, or modified.
 */
const proxyMix = (ingredients, prototype = Object.prototype) => new Proxy({}, {
    getPrototypeOf() {
        return prototype;
    },
    setPrototypeOf() {
        throw Error('Cannot set prototype of Proxies created by ts-mixer');
    },
    getOwnPropertyDescriptor(_, prop) {
        return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
    },
    defineProperty() {
        throw new Error('Cannot define new properties on Proxies created by ts-mixer');
    },
    has(_, prop) {
        return getIngredientWithProp(prop, ingredients) !== undefined || prototype[prop] !== undefined;
    },
    get(_, prop) {
        return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
    },
    set(_, prop, val) {
        const ingredientWithProp = getIngredientWithProp(prop, ingredients);
        if (ingredientWithProp === undefined)
            throw new Error('Cannot set new properties on Proxies created by ts-mixer');
        ingredientWithProp[prop] = val;
        return true;
    },
    deleteProperty() {
        throw new Error('Cannot delete properties on Proxies created by ts-mixer');
    },
    ownKeys() {
        return ingredients
            .map(Object.getOwnPropertyNames)
            .reduce((prev, curr) => curr.concat(prev.filter(key => curr.indexOf(key) < 0)));
    },
});
/**
 * Creates a new proxy-prototype object that is a "soft" mixture of the given prototypes.  The mixing is achieved by
 * proxying all property access to the ingredients.  This is not ES5 compatible and less performant.  However, any
 * changes made to the source prototypes will be reflected in the proxy-prototype, which may be desirable.
 */
const softMixProtos = (ingredients, constructor) => proxyMix([...ingredients, { constructor }]);

const settings = {
    initFunction: null,
    staticsStrategy: 'copy',
    prototypeStrategy: 'copy',
    decoratorInheritance: 'deep',
};

// Keeps track of constituent classes for every mixin class created by ts-mixer.
const mixins = new WeakMap();
const getMixinsForClass = (clazz) => mixins.get(clazz);
const registerMixins = (mixedClass, constituents) => mixins.set(mixedClass, constituents);
const hasMixin = (instance, mixin) => {
    if (instance instanceof mixin)
        return true;
    const constructor = instance.constructor;
    const visited = new Set();
    let frontier = new Set();
    frontier.add(constructor);
    while (frontier.size > 0) {
        // check if the frontier has the mixin we're looking for.  if not, we can say we visited every item in the frontier
        if (frontier.has(mixin))
            return true;
        frontier.forEach((item) => visited.add(item));
        // build a new frontier based on the associated mixin classes and prototype chains of each frontier item
        const newFrontier = new Set();
        frontier.forEach((item) => {
            var _a;
            const itemConstituents = (_a = mixins.get(item)) !== null && _a !== void 0 ? _a : protoChain(item.prototype)
                .map((proto) => proto.constructor)
                .filter((item) => item !== null);
            if (itemConstituents)
                itemConstituents.forEach((constituent) => {
                    if (!visited.has(constituent) && !frontier.has(constituent))
                        newFrontier.add(constituent);
                });
        });
        // we have a new frontier, now search again
        frontier = newFrontier;
    }
    // if we get here, we couldn't find the mixin anywhere in the prototype chain or associated mixin classes
    return false;
};

const mergeObjectsOfDecorators = (o1, o2) => {
    var _a, _b;
    const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o2)]);
    const mergedObject = {};
    for (let key of allKeys)
        mergedObject[key] = unique([...((_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : []), ...((_b = o2 === null || o2 === void 0 ? void 0 : o2[key]) !== null && _b !== void 0 ? _b : [])]);
    return mergedObject;
};
const mergePropertyAndMethodDecorators = (d1, d2) => {
    var _a, _b, _c, _d;
    return ({
        property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d2 === null || d2 === void 0 ? void 0 : d2.property) !== null && _b !== void 0 ? _b : {}),
        method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.method) !== null && _d !== void 0 ? _d : {}),
    });
};
const mergeDecorators = (d1, d2) => {
    var _a, _b, _c, _d, _e, _f;
    return ({
        class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d2 === null || d2 === void 0 ? void 0 : d2.class) !== null && _b !== void 0 ? _b : []]),
        static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d2 === null || d2 === void 0 ? void 0 : d2.static) !== null && _d !== void 0 ? _d : {}),
        instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d2 === null || d2 === void 0 ? void 0 : d2.instance) !== null && _f !== void 0 ? _f : {}),
    });
};
const decorators = new Map();
const findAllConstituentClasses = (...classes) => {
    var _a;
    const allClasses = new Set();
    const frontier = new Set([...classes]);
    while (frontier.size > 0) {
        for (let clazz of frontier) {
            const protoChainClasses = protoChain(clazz.prototype).map(proto => proto.constructor);
            const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
            const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
            const newClasses = potentiallyNewClasses.filter(c => !allClasses.has(c));
            for (let newClass of newClasses)
                frontier.add(newClass);
            allClasses.add(clazz);
            frontier.delete(clazz);
        }
    }
    return [...allClasses];
};
const deepDecoratorSearch = (...classes) => {
    const decoratorsForClassChain = findAllConstituentClasses(...classes)
        .map(clazz => decorators.get(clazz))
        .filter(decorators => !!decorators);
    if (decoratorsForClassChain.length == 0)
        return {};
    if (decoratorsForClassChain.length == 1)
        return decoratorsForClassChain[0];
    return decoratorsForClassChain.reduce((d1, d2) => mergeDecorators(d1, d2));
};
const directDecoratorSearch = (...classes) => {
    const classDecorators = classes.map(clazz => getDecoratorsForClass(clazz));
    if (classDecorators.length === 0)
        return {};
    if (classDecorators.length === 1)
        return classDecorators[0];
    return classDecorators.reduce((d1, d2) => mergeDecorators(d1, d2));
};
const getDecoratorsForClass = (clazz) => {
    let decoratorsForClass = decorators.get(clazz);
    if (!decoratorsForClass) {
        decoratorsForClass = {};
        decorators.set(clazz, decoratorsForClass);
    }
    return decoratorsForClass;
};
const decorateClass = (decorator) => ((clazz) => {
    const decoratorsForClass = getDecoratorsForClass(clazz);
    let classDecorators = decoratorsForClass.class;
    if (!classDecorators) {
        classDecorators = [];
        decoratorsForClass.class = classDecorators;
    }
    classDecorators.push(decorator);
    return decorator(clazz);
});
const decorateMember = (decorator) => ((object, key, ...otherArgs) => {
    var _a, _b, _c;
    const decoratorTargetType = typeof object === 'function' ? 'static' : 'instance';
    const decoratorType = typeof object[key] === 'function' ? 'method' : 'property';
    const clazz = decoratorTargetType === 'static' ? object : object.constructor;
    const decoratorsForClass = getDecoratorsForClass(clazz);
    const decoratorsForTargetType = (_a = decoratorsForClass === null || decoratorsForClass === void 0 ? void 0 : decoratorsForClass[decoratorTargetType]) !== null && _a !== void 0 ? _a : {};
    decoratorsForClass[decoratorTargetType] = decoratorsForTargetType;
    let decoratorsForType = (_b = decoratorsForTargetType === null || decoratorsForTargetType === void 0 ? void 0 : decoratorsForTargetType[decoratorType]) !== null && _b !== void 0 ? _b : {};
    decoratorsForTargetType[decoratorType] = decoratorsForType;
    let decoratorsForKey = (_c = decoratorsForType === null || decoratorsForType === void 0 ? void 0 : decoratorsForType[key]) !== null && _c !== void 0 ? _c : [];
    decoratorsForType[key] = decoratorsForKey;
    // @ts-ignore: array is type `A[] | B[]` and item is type `A | B`, so technically a type error, but it's fine
    decoratorsForKey.push(decorator);
    // @ts-ignore
    return decorator(object, key, ...otherArgs);
});
const decorate = (decorator) => ((...args) => {
    if (args.length === 1)
        return decorateClass(decorator)(args[0]);
    return decorateMember(decorator)(...args);
});

function Mixin(...constructors) {
    var _a, _b, _c;
    const prototypes = constructors.map(constructor => constructor.prototype);
    // Here we gather up the init functions of the ingredient prototypes, combine them into one init function, and
    // attach it to the mixed class prototype.  The reason we do this is because we want the init functions to mix
    // similarly to constructors -- not methods, which simply override each other.
    const initFunctionName = settings.initFunction;
    if (initFunctionName !== null) {
        const initFunctions = prototypes
            .map(proto => proto[initFunctionName])
            .filter(func => typeof func === 'function');
        const combinedInitFunction = function (...args) {
            for (let initFunction of initFunctions)
                initFunction.apply(this, args);
        };
        const extraProto = { [initFunctionName]: combinedInitFunction };
        prototypes.push(extraProto);
    }
    function MixedClass(...args) {
        for (const constructor of constructors)
            // @ts-ignore: potentially abstract class
            copyProps(this, new constructor(...args));
        if (initFunctionName !== null && typeof this[initFunctionName] === 'function')
            this[initFunctionName].apply(this, args);
    }
    MixedClass.prototype = settings.prototypeStrategy === 'copy'
        ? hardMixProtos(prototypes, MixedClass)
        : softMixProtos(prototypes, MixedClass);
    Object.setPrototypeOf(MixedClass, settings.staticsStrategy === 'copy'
        ? hardMixProtos(constructors, null, ['prototype'])
        : proxyMix(constructors, Function.prototype));
    let DecoratedMixedClass = MixedClass;
    if (settings.decoratorInheritance !== 'none') {
        const classDecorators = settings.decoratorInheritance === 'deep'
            ? deepDecoratorSearch(...constructors)
            : directDecoratorSearch(...constructors);
        for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : []) {
            const result = decorator(DecoratedMixedClass);
            if (result) {
                DecoratedMixedClass = result;
            }
        }
        applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
        applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
    }
    registerMixins(DecoratedMixedClass, constructors);
    return DecoratedMixedClass;
}
const applyPropAndMethodDecorators = (propAndMethodDecorators, target) => {
    const propDecorators = propAndMethodDecorators.property;
    const methodDecorators = propAndMethodDecorators.method;
    if (propDecorators)
        for (let key in propDecorators)
            for (let decorator of propDecorators[key])
                decorator(target, key);
    if (methodDecorators)
        for (let key in methodDecorators)
            for (let decorator of methodDecorators[key])
                decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
};
/**
 * A decorator version of the `Mixin` function.  You'll want to use this instead of `Mixin` for mixing generic classes.
 */
const mix = (...ingredients) => decoratedClass => {
    // @ts-ignore
    const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
    Object.defineProperty(mixedClass, 'name', {
        value: decoratedClass.name,
        writable: false,
    });
    return mixedClass;
};




/***/ }),

/***/ 21212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8411);

/***/ }),

/***/ 7202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var parent = __webpack_require__(30239);

module.exports = parent;


/***/ }),

/***/ 26656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(70484);
__webpack_require__(35695);
__webpack_require__(26138);
__webpack_require__(59828);
__webpack_require__(73832);
var path = __webpack_require__(68099);

module.exports = path.AggregateError;


/***/ }),

/***/ 8411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(18337);


/***/ }),

/***/ 18337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
__webpack_require__(65442);

var parent = __webpack_require__(7202);

module.exports = parent;


/***/ }),

/***/ 70814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(52769);
var tryToString = __webpack_require__(70459);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 91966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isPossiblePrototype = __webpack_require__(42937);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 68137:
/***/ ((module) => {

"use strict";

module.exports = function () { /* empty */ };


/***/ }),

/***/ 47235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(90262);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 61005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(83273);
var toAbsoluteIndex = __webpack_require__(44574);
var lengthOfArrayLike = __webpack_require__(48130);

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

/***/ 89932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 98407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(84904);
var isCallable = __webpack_require__(52769);
var classofRaw = __webpack_require__(89932);
var wellKnownSymbol = __webpack_require__(38655);

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

/***/ 47464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(70701);
var ownKeys = __webpack_require__(35691);
var getOwnPropertyDescriptorModule = __webpack_require__(94543);
var definePropertyModule = __webpack_require__(79989);

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

var fails = __webpack_require__(61203);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 40877:
/***/ ((module) => {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 73999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var definePropertyModule = __webpack_require__(79989);
var createPropertyDescriptor = __webpack_require__(70480);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 70480:
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

/***/ 63508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(73999);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
  return target;
};


/***/ }),

/***/ 57525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(21063);

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

var fails = __webpack_require__(61203);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 59619:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(21063);
var isObject = __webpack_require__(90262);

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

/***/ 47868:
/***/ ((module) => {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 44432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(21063);
var userAgent = __webpack_require__(47868);

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

/***/ 79683:
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

/***/ 13885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);

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

/***/ 44279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var createNonEnumerableProperty = __webpack_require__(73999);
var clearErrorStack = __webpack_require__(13885);
var ERROR_STACK_INSTALLABLE = __webpack_require__(35791);

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

module.exports = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};


/***/ }),

/***/ 35791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(61203);
var createPropertyDescriptor = __webpack_require__(70480);

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

var global = __webpack_require__(21063);
var apply = __webpack_require__(57013);
var uncurryThis = __webpack_require__(9344);
var isCallable = __webpack_require__(52769);
var getOwnPropertyDescriptor = (__webpack_require__(94543).f);
var isForced = __webpack_require__(58696);
var path = __webpack_require__(68099);
var bind = __webpack_require__(94572);
var createNonEnumerableProperty = __webpack_require__(73999);
var hasOwn = __webpack_require__(70701);

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

/***/ 61203:
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

/***/ 57013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(41780);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 94572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(9344);
var aCallable = __webpack_require__(70814);
var NATIVE_BIND = __webpack_require__(41780);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 41780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(61203);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 54713:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(41780);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 3410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var hasOwn = __webpack_require__(70701);

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

/***/ 33574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);
var aCallable = __webpack_require__(70814);

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

var classofRaw = __webpack_require__(89932);
var uncurryThis = __webpack_require__(46100);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 46100:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_BIND = __webpack_require__(41780);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 21003:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var path = __webpack_require__(68099);
var global = __webpack_require__(21063);
var isCallable = __webpack_require__(52769);

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 20967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(98407);
var getMethod = __webpack_require__(14674);
var isNullOrUndefined = __webpack_require__(83057);
var Iterators = __webpack_require__(86625);
var wellKnownSymbol = __webpack_require__(38655);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 91613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(54713);
var aCallable = __webpack_require__(70814);
var anObject = __webpack_require__(47235);
var tryToString = __webpack_require__(70459);
var getIteratorMethod = __webpack_require__(20967);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 14674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aCallable = __webpack_require__(70814);
var isNullOrUndefined = __webpack_require__(83057);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 21063:
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

/***/ 70701:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);
var toObject = __webpack_require__(92137);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 95241:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 23489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(21003);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 49665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var fails = __webpack_require__(61203);
var createElement = __webpack_require__(59619);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 41395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);
var fails = __webpack_require__(61203);
var classof = __webpack_require__(89932);

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

/***/ 43507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(52769);
var isObject = __webpack_require__(90262);
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

/***/ 98148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(90262);
var createNonEnumerableProperty = __webpack_require__(73999);

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ 58417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(31314);
var global = __webpack_require__(21063);
var isObject = __webpack_require__(90262);
var createNonEnumerableProperty = __webpack_require__(73999);
var hasOwn = __webpack_require__(70701);
var shared = __webpack_require__(33753);
var sharedKey = __webpack_require__(64275);
var hiddenKeys = __webpack_require__(95241);

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

/***/ 72877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(38655);
var Iterators = __webpack_require__(86625);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 52769:
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

/***/ 58696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(61203);
var isCallable = __webpack_require__(52769);

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

/***/ 83057:
/***/ ((module) => {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 90262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isCallable = __webpack_require__(52769);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 42937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(90262);

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};


/***/ }),

/***/ 64871:
/***/ ((module) => {

"use strict";

module.exports = true;


/***/ }),

/***/ 96281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(21003);
var isCallable = __webpack_require__(52769);
var isPrototypeOf = __webpack_require__(54317);
var USE_SYMBOL_AS_UID = __webpack_require__(57460);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 90208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(94572);
var call = __webpack_require__(54713);
var anObject = __webpack_require__(47235);
var tryToString = __webpack_require__(70459);
var isArrayIteratorMethod = __webpack_require__(72877);
var lengthOfArrayLike = __webpack_require__(48130);
var isPrototypeOf = __webpack_require__(54317);
var getIterator = __webpack_require__(91613);
var getIteratorMethod = __webpack_require__(20967);
var iteratorClose = __webpack_require__(21743);

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

/***/ 21743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(54713);
var anObject = __webpack_require__(47235);
var getMethod = __webpack_require__(14674);

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

var IteratorPrototype = (__webpack_require__(92621).IteratorPrototype);
var create = __webpack_require__(55780);
var createPropertyDescriptor = __webpack_require__(70480);
var setToStringTag = __webpack_require__(71811);
var Iterators = __webpack_require__(86625);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 80164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(9098);
var call = __webpack_require__(54713);
var IS_PURE = __webpack_require__(64871);
var FunctionName = __webpack_require__(3410);
var isCallable = __webpack_require__(52769);
var createIteratorConstructor = __webpack_require__(1926);
var getPrototypeOf = __webpack_require__(13671);
var setPrototypeOf = __webpack_require__(3491);
var setToStringTag = __webpack_require__(71811);
var createNonEnumerableProperty = __webpack_require__(73999);
var defineBuiltIn = __webpack_require__(63508);
var wellKnownSymbol = __webpack_require__(38655);
var Iterators = __webpack_require__(86625);
var IteratorsCore = __webpack_require__(92621);

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

/***/ 92621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(61203);
var isCallable = __webpack_require__(52769);
var isObject = __webpack_require__(90262);
var create = __webpack_require__(55780);
var getPrototypeOf = __webpack_require__(13671);
var defineBuiltIn = __webpack_require__(63508);
var wellKnownSymbol = __webpack_require__(38655);
var IS_PURE = __webpack_require__(64871);

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

/***/ 86625:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 48130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toLength = __webpack_require__(78146);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 45777:
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

/***/ 55780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(47235);
var definePropertiesModule = __webpack_require__(67389);
var enumBugKeys = __webpack_require__(79683);
var hiddenKeys = __webpack_require__(95241);
var html = __webpack_require__(23489);
var documentCreateElement = __webpack_require__(59619);
var sharedKey = __webpack_require__(64275);

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

/***/ 67389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(61330);
var definePropertyModule = __webpack_require__(79989);
var anObject = __webpack_require__(47235);
var toIndexedObject = __webpack_require__(83273);
var objectKeys = __webpack_require__(98364);

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

/***/ 79989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var IE8_DOM_DEFINE = __webpack_require__(49665);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(61330);
var anObject = __webpack_require__(47235);
var toPropertyKey = __webpack_require__(65341);

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

/***/ 94543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var call = __webpack_require__(54713);
var propertyIsEnumerableModule = __webpack_require__(87161);
var createPropertyDescriptor = __webpack_require__(70480);
var toIndexedObject = __webpack_require__(83273);
var toPropertyKey = __webpack_require__(65341);
var hasOwn = __webpack_require__(70701);
var IE8_DOM_DEFINE = __webpack_require__(49665);

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

/***/ 65116:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(88600);
var enumBugKeys = __webpack_require__(79683);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 87313:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 13671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var hasOwn = __webpack_require__(70701);
var isCallable = __webpack_require__(52769);
var toObject = __webpack_require__(92137);
var sharedKey = __webpack_require__(64275);
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

/***/ 54317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 88600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);
var hasOwn = __webpack_require__(70701);
var toIndexedObject = __webpack_require__(83273);
var indexOf = (__webpack_require__(61005).indexOf);
var hiddenKeys = __webpack_require__(95241);

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

/***/ 98364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var internalObjectKeys = __webpack_require__(88600);
var enumBugKeys = __webpack_require__(79683);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 87161:
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
var uncurryThisAccessor = __webpack_require__(33574);
var anObject = __webpack_require__(47235);
var aPossiblePrototype = __webpack_require__(91966);

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

/***/ 49559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(84904);
var classof = __webpack_require__(98407);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 89258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(54713);
var isCallable = __webpack_require__(52769);
var isObject = __webpack_require__(90262);

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

/***/ 35691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(21003);
var uncurryThis = __webpack_require__(46100);
var getOwnPropertyNamesModule = __webpack_require__(65116);
var getOwnPropertySymbolsModule = __webpack_require__(87313);
var anObject = __webpack_require__(47235);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 68099:
/***/ ((module) => {

"use strict";

module.exports = {};


/***/ }),

/***/ 65516:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var defineProperty = (__webpack_require__(79989).f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ 95426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isNullOrUndefined = __webpack_require__(83057);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 71811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(84904);
var defineProperty = (__webpack_require__(79989).f);
var createNonEnumerableProperty = __webpack_require__(73999);
var hasOwn = __webpack_require__(70701);
var toString = __webpack_require__(49559);
var wellKnownSymbol = __webpack_require__(38655);

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

/***/ 64275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var shared = __webpack_require__(58141);
var uid = __webpack_require__(41268);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 33753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(21063);
var defineGlobalProperty = __webpack_require__(57525);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 58141:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IS_PURE = __webpack_require__(64871);
var store = __webpack_require__(33753);

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

var uncurryThis = __webpack_require__(46100);
var toIntegerOrInfinity = __webpack_require__(99903);
var toString = __webpack_require__(1139);
var requireObjectCoercible = __webpack_require__(95426);

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

/***/ 74603:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(44432);
var fails = __webpack_require__(61203);
var global = __webpack_require__(21063);

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

/***/ 44574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(99903);

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

/***/ 83273:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(41395);
var requireObjectCoercible = __webpack_require__(95426);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 99903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var trunc = __webpack_require__(45777);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 78146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIntegerOrInfinity = __webpack_require__(99903);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 92137:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var requireObjectCoercible = __webpack_require__(95426);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 60493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(54713);
var isObject = __webpack_require__(90262);
var isSymbol = __webpack_require__(96281);
var getMethod = __webpack_require__(14674);
var ordinaryToPrimitive = __webpack_require__(89258);
var wellKnownSymbol = __webpack_require__(38655);

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

/***/ 65341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPrimitive = __webpack_require__(60493);
var isSymbol = __webpack_require__(96281);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 84904:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var wellKnownSymbol = __webpack_require__(38655);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var classof = __webpack_require__(98407);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 70459:
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

/***/ 41268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(46100);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 57460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(74603);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 61330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(5024);
var fails = __webpack_require__(61203);

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

/***/ 31314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(21063);
var isCallable = __webpack_require__(52769);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 38655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(21063);
var shared = __webpack_require__(58141);
var hasOwn = __webpack_require__(70701);
var uid = __webpack_require__(41268);
var NATIVE_SYMBOL = __webpack_require__(74603);
var USE_SYMBOL_AS_UID = __webpack_require__(57460);

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

/***/ 16453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(21003);
var hasOwn = __webpack_require__(70701);
var createNonEnumerableProperty = __webpack_require__(73999);
var isPrototypeOf = __webpack_require__(54317);
var setPrototypeOf = __webpack_require__(3491);
var copyConstructorProperties = __webpack_require__(47464);
var proxyAccessor = __webpack_require__(65516);
var inheritIfRequired = __webpack_require__(43507);
var normalizeStringArgument = __webpack_require__(4879);
var installErrorCause = __webpack_require__(98148);
var installErrorStack = __webpack_require__(44279);
var DESCRIPTORS = __webpack_require__(5024);
var IS_PURE = __webpack_require__(64871);

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

/***/ 26138:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(9098);
var getBuiltIn = __webpack_require__(21003);
var apply = __webpack_require__(57013);
var fails = __webpack_require__(61203);
var wrapErrorConstructorWithCause = __webpack_require__(16453);

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

/***/ 83085:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(9098);
var isPrototypeOf = __webpack_require__(54317);
var getPrototypeOf = __webpack_require__(13671);
var setPrototypeOf = __webpack_require__(3491);
var copyConstructorProperties = __webpack_require__(47464);
var create = __webpack_require__(55780);
var createNonEnumerableProperty = __webpack_require__(73999);
var createPropertyDescriptor = __webpack_require__(70480);
var installErrorCause = __webpack_require__(98148);
var installErrorStack = __webpack_require__(44279);
var iterate = __webpack_require__(90208);
var normalizeStringArgument = __webpack_require__(4879);
var wellKnownSymbol = __webpack_require__(38655);

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

/***/ 35695:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(83085);


/***/ }),

/***/ 59828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(83273);
var addToUnscopables = __webpack_require__(68137);
var Iterators = __webpack_require__(86625);
var InternalStateModule = __webpack_require__(58417);
var defineProperty = (__webpack_require__(79989).f);
var defineIterator = __webpack_require__(80164);
var createIterResultObject = __webpack_require__(40877);
var IS_PURE = __webpack_require__(64871);
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

/***/ 70484:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__(9098);
var global = __webpack_require__(21063);
var apply = __webpack_require__(57013);
var wrapErrorConstructorWithCause = __webpack_require__(16453);

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

/***/ 73832:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var charAt = (__webpack_require__(5571).charAt);
var toString = __webpack_require__(1139);
var InternalStateModule = __webpack_require__(58417);
var defineIterator = __webpack_require__(80164);
var createIterResultObject = __webpack_require__(40877);

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

/***/ 65442:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(35695);


/***/ }),

/***/ 80085:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(59828);
var DOMIterables = __webpack_require__(1100);
var global = __webpack_require__(21063);
var setToStringTag = __webpack_require__(71811);
var Iterators = __webpack_require__(86625);

for (var COLLECTION_NAME in DOMIterables) {
  setToStringTag(global[COLLECTION_NAME], COLLECTION_NAME);
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ 30239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: remove from `core-js@4`
__webpack_require__(65442);

var parent = __webpack_require__(26656);
__webpack_require__(80085);

module.exports = parent;


/***/ }),

/***/ 9753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68199);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15791);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95121);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18822);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84332);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26517);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97797);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75229);
/* harmony import */ var _isNotNil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76955);
/* harmony import */ var _isNonEmptyArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60058);
/* harmony import */ var _stubUndefined_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23387);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/**
 * Can be used as a way to compose multiple invokers together to form polymorphic functions,
 * or functions that exhibit different behaviors based on their argument(s).
 * Consumes dispatching functions and keep trying to invoke each in turn, until a non-nil value is returned.
 *
 * Accepts a list of dispatching functions and returns a new function.
 * When invoked, this new function is applied to some arguments,
 * each dispatching function is applied to those same arguments until one of the
 * dispatching functions returns a non-nil value.
 *
 * @func dispatch
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Function
 * @sig [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> x1 | x2 | ...
 * @param {!Array} functions A list of functions
 * @return {*|undefined} Returns the first not-nil value, or undefined if either an empty list is provided or none of the dispatching functions returns a non-nil value
 * @see {@link RA.isNotNil}
 * @example
 *
 * // returns first non-nil value
 * const stubNil = () => null;
 * const stubUndefined = () => undefined;
 * const addOne = v => v + 1;
 * const addTwo = v => v + 2;
 *
 * RA.dispatch([stubNil, stubUndefined, addOne, addTwo])(1); //=> 2
 *
 * // acts as a switch
 * const fnSwitch = RA.dispatch([
 *   R.ifElse(RA.isString, s => `${s}-join`, RA.stubUndefined),
 *   R.ifElse(RA.isNumber, n => n + 1, RA.stubUndefined),
 *   R.ifElse(RA.isDate, R.T, RA.stubUndefined),
 * ]);
 * fnSwitch(1); //=> 2
 */



var byArity = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(function (a, b) {
  return a.length > b.length;
});
var getMaxArity = (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])((0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(byArity), ramda__WEBPACK_IMPORTED_MODULE_3__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])('length'));
var iteratorFn = (0,ramda__WEBPACK_IMPORTED_MODULE_5__["default"])(function (args, accumulator, fn) {
  var result = fn.apply(void 0, _toConsumableArray(args));
  return (0,_isNotNil_js__WEBPACK_IMPORTED_MODULE_6__["default"])(result) ? (0,ramda__WEBPACK_IMPORTED_MODULE_7__["default"])(result) : accumulator;
});
var dispatchImpl = function dispatchImpl(functions) {
  var arity = getMaxArity(functions);
  return (0,ramda__WEBPACK_IMPORTED_MODULE_8__["default"])(arity, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (0,ramda__WEBPACK_IMPORTED_MODULE_9__["default"])(iteratorFn(args), undefined, functions);
  });
};
var dispatch = (0,ramda__WEBPACK_IMPORTED_MODULE_10__["default"])(_isNonEmptyArray_js__WEBPACK_IMPORTED_MODULE_11__["default"], dispatchImpl, _stubUndefined_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);

/***/ }),

/***/ 73699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69180);
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

/***/ 55474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14864);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54769);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90560);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28711);
/* harmony import */ var _isNotFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2754);
/* harmony import */ var _isEmptyArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27657);




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

/***/ 93834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62572);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16867);



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

/***/ 45855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62572);


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

/***/ 27657:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24968);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27694);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93834);



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

/***/ 16867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91020);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62572);
/* harmony import */ var _isGeneratorFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49702);
/* harmony import */ var _isAsyncFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45855);




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

/***/ 49702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62572);


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

/***/ 60058:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24968);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76785);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93834);



/**
 * Checks if input value is not an empty `Array`.
 *
 * @func isNonEmptyArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEmptyArray|isEmptyArray}
 * @example
 *
 * RA.isNonEmptyArray([42]); // => true
 * RA.isNonEmptyArray([]); // => false
 * RA.isNonEmptyArray({}); // => false
 * RA.isNonEmptyArray(null); // => false
 * RA.isNonEmptyArray(undefined); // => false
 * RA.isNonEmptyArray(42); // => false
 * RA.isNonEmptyArray('42'); // => false
 */
var isNonEmptyArray = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"], ramda__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNonEmptyArray);

/***/ }),

/***/ 68894:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1037);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76785);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85102);
/* harmony import */ var _isNotObj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38301);




/**
 * Checks if input value is not an empty `String`.
 *
 * @func isNonEmptyString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.4.0|v2.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isEmptyString|isEmptyString}
 * @example
 *
 * RA.isNonEmptyString('42'); // => true
 * RA.isNonEmptyString(''); // => false
 * RA.isNonEmptyString(new String('42')); // => false
 * RA.isNonEmptyString(new String('')); // => false
 * RA.isNonEmptyString([42]); // => false
 * RA.isNonEmptyString({}); // => false
 * RA.isNonEmptyString(null); // => false
 * RA.isNonEmptyString(undefined); // => false
 * RA.isNonEmptyString(42); // => false
 */
var isNonEmptyString = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])([_isString_js__WEBPACK_IMPORTED_MODULE_1__["default"], _isNotObj_js__WEBPACK_IMPORTED_MODULE_2__["default"], ramda__WEBPACK_IMPORTED_MODULE_3__["default"]]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNonEmptyString);

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81323);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16867);



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

/***/ 76955:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81323);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19904);


/**
 * Checks if input value is complement of `null` or `undefined`.
 *
 * @func isNotNil
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link http://ramdajs.com/docs/#isNil|R.isNil}
 * @example
 *
 * RA.isNotNil(null); //=> false
 * RA.isNotNil(undefined); //=> false
 * RA.isNotNil(0); //=> true
 * RA.isNotNil([]); //=> true
 */
var isNotNil = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(ramda__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNotNil);

/***/ }),

/***/ 46907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81323);
/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);



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

/***/ 38301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81323);
/* harmony import */ var _isObj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85138);



/* eslint-disable max-len */
/**
 * Checks if input value is complement of language type of `Object`.
 *
 * @func isNotObj
 * @aliases isNotObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isObj|isObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isNotObj({}); //=> false
 * RA.isNotObj([]); //=> false
 * RA.isNotObj(() => {}); //=> false
 * RA.isNotObj(null); //=> true
 * RA.isNotObj(undefined); //=> true
 */
/* eslint-enable max-len */
var isNotObj = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(_isObj_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNotObj);

/***/ }),

/***/ 11834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53654);


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

/***/ 85138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24968);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4462);
/* harmony import */ var _isNotNull_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46907);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16867);
/* harmony import */ var _internal_isOfTypeObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9871);





/* eslint-disable max-len */
/**
 * Checks if input value is language type of `Object`.
 *
 * @func isObj
 * @aliases isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isNotObj|isNotObj}, {@link RA.isObjLike|isObjLike}, {@link RA.isPlainObj|isPlainObj}
 * @example
 *
 * RA.isObj({}); //=> true
 * RA.isObj([]); //=> true
 * RA.isObj(() => {}); //=> true
 * RA.isObj(null); //=> false
 * RA.isObj(undefined); //=> false
 */
/* eslint-enable max-len */
var isObj = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(1, (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(_isNotNull_js__WEBPACK_IMPORTED_MODULE_2__["default"], (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(_internal_isOfTypeObject_js__WEBPACK_IMPORTED_MODULE_4__["default"], _isFunction_js__WEBPACK_IMPORTED_MODULE_5__["default"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObj);

/***/ }),

/***/ 46989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24968);
/* harmony import */ var _isNotNull_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46907);
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

/***/ 34606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62572);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9271);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53654);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44787);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24968);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19784);
/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11834);
/* harmony import */ var _isObjLike_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46989);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16867);




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

/***/ 85102:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19784);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60963);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62572);


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

/***/ 33031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53654);
/* harmony import */ var _stubUndefined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23387);



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

/***/ 23387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29498);


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

/***/ 64988:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84332);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67515);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52781);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95819);
/* harmony import */ var _included_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73699);



/**
 * Removes specified characters from the beginning of a string.
 *
 * @func trimCharsStart
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.24.0|v2.24.0}
 * @category String
 * @sig String -> String
 * @param {string} chars The characters to trim
 * @param {string} value The string to trim
 * @return {string} Returns the trimmed string.
 * @example
 *
 * RA.trimCharsStart('_-', '-_-abc-_-'); //=> 'abc-_-'
 */

var trimCharsStart = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(function (chars, value) {
  return (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])((0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(''), (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_included_js__WEBPACK_IMPORTED_MODULE_4__["default"])(chars)), (0,ramda__WEBPACK_IMPORTED_MODULE_5__["default"])(''))(value);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimCharsStart);

/***/ }),

/***/ 28833:
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

/***/ 53679:
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

/***/ 95380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96738);
/* harmony import */ var _internal_xall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96359);




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

/***/ 1037:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54981);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39590);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97797);






/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
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
 * @see R.anyPass, R.both
 * @example
 *
 *      const isQueen = R.propEq('Q', 'rank');
 *      const isSpade = R.propEq('♠︎', 'suit');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function allPass(preds) {
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_reduce_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_max_js__WEBPACK_IMPORTED_MODULE_3__["default"], 0, (0,_pluck_js__WEBPACK_IMPORTED_MODULE_4__["default"])('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allPass);

/***/ }),

/***/ 29498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);


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

/***/ 37086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);


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

/***/ 91020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54981);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39590);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97797);






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

/***/ 93470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12840);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60166);
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

/***/ 28711:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);


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

/***/ 90560:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53607);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);



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

/***/ 24968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59892);
/* harmony import */ var _and_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37086);
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79362);





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

/***/ 68199:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      const byAge = R.comparator((a, b) => a.age < b.age);
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByIncreasingAge = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */
var comparator = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function comparator(pred) {
  return function (a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comparator);

/***/ }),

/***/ 81323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79362);
/* harmony import */ var _not_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62486);



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

/***/ 84332:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);



/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
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
 * Please note that default parameters don't count towards a [function arity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
 * and therefore `curry` won't work well with those.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 *
 *      // R.curry not working well with default parameters
 *      const h = R.curry((a, b, c = 2) => a + b + c);
 *      h(1)(2)(7); //=> Error! (`3` is not a function!)
 */
var curry = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function curry(fn) {
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fn.length, fn);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (curry);

/***/ }),

/***/ 19784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53607);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18938);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
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

/***/ 66719:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);


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

/***/ 70036:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_Set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55586);



/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
var difference = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new _internal_Set_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  for (var i = 0; i < secondLen; i += 1) {
    toFilterOut.add(second[i]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (difference);

/***/ }),

/***/ 52781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96738);
/* harmony import */ var _internal_xdropWhile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52886);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85969);





/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      const lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['dropWhile'], _internal_xdropWhile_js__WEBPACK_IMPORTED_MODULE_2__["default"], function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return (0,_slice_js__WEBPACK_IMPORTED_MODULE_3__["default"])(idx, Infinity, xs);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropWhile);

/***/ }),

/***/ 4462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59892);
/* harmony import */ var _lift_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79362);
/* harmony import */ var _or_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);





/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.both, R.anyPass, R.or
 * @example
 *
 *      const gt10 = x => x > 10;
 *      const even = x => x % 2 === 0;
 *      const f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 *
 *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
 *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
 */
var either = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function either(f, g) {
  return (0,_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(f) ? function _either() {
    return f.apply(this, arguments) || g.apply(this, arguments);
  } : (0,_lift_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_or_js__WEBPACK_IMPORTED_MODULE_3__["default"])(f, g);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (either);

/***/ }),

/***/ 95734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26590);
/* harmony import */ var _internal_isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4099);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60131);
/* harmony import */ var _internal_isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40141);
/* harmony import */ var _internal_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31829);







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

/***/ 53654:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30497);



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

/***/ 68481:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54121);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96738);
/* harmony import */ var _internal_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46574);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60131);
/* harmony import */ var _internal_xfilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88080);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77783);








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

/***/ 69180:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);



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

/***/ 5107:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86104);



/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      const hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      const point = {x: 0, y: 0};
 *      const pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
var has = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function has(prop, obj) {
  return (0,_hasPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])([prop], obj);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (has);

/***/ }),

/***/ 86104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65722);
/* harmony import */ var _isNil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19904);




/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array} path The path to use.
 * @param {Object} obj The object to check the path in.
 * @return {Boolean} Whether the path exists.
 * @see R.has
 * @example
 *
 *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 *      R.hasPath(['a', 'b'], {});                  // => false
 */
var hasPath = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function hasPath(_path, obj) {
  if (_path.length === 0 || (0,_isNil_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj)) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (!(0,_isNil_js__WEBPACK_IMPORTED_MODULE_1__["default"])(val) && (0,_internal_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasPath);

/***/ }),

/***/ 95121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _internal_nth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55136);



/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String | Undefined
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> undefined
 */
var head = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (list) {
  return (0,_internal_nth_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0, list);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (head);

/***/ }),

/***/ 62572:
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

/***/ 75229:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);



/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * Note that `ifElse` takes its arity from the longest of the three functions passed to it.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({ count: 1 }); //=> { count: 2 }
 *      incCount({});           //=> { count: 1 }
 */
var ifElse = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ifElse(condition, onTrue, onFalse) {
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ifElse);

/***/ }),

/***/ 2898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26265);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);



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

/***/ 54769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85969);


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

/***/ 55586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26265);

var _Set = /*#__PURE__*/function () {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }
  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();
function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }
    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!(0,_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }
    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }
    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!(0,_includes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Set);

/***/ }),

/***/ 53607:
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

/***/ 71941:
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

/***/ 54121:
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

/***/ 76122:
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

/***/ 47940:
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

/***/ 12840:
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

/***/ 44334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createReduce)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54620);

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

/***/ 18938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry1)
/* harmony export */ });
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41003);


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

/***/ 45959:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry2)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18938);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41003);



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

/***/ 39088:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _curry3)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18938);
/* harmony import */ var _curry2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45959);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41003);




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
/* harmony import */ var _arity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53607);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41003);



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

/***/ 96738:
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

/***/ 30497:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _equals)
/* harmony export */ });
/* harmony import */ var _arrayFromIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71941);
/* harmony import */ var _includesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64333);
/* harmony import */ var _functionName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20415);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65722);
/* harmony import */ var _objectIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1111);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77783);
/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60963);








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

/***/ 46574:
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

/***/ 20415:
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

/***/ 65722:
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

/***/ 26265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _includes)
/* harmony export */ });
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12243);

function _includes(a, list) {
  return (0,_indexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list, a, 0) >= 0;
}

/***/ }),

/***/ 64333:
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

/***/ 12243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _indexOf)
/* harmony export */ });
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53654);

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

/***/ 26590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65722);

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

/***/ 54620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4099);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40141);




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

/***/ 59892:
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

/***/ 77700:
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

/***/ 47969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNumber)
/* harmony export */ });
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}

/***/ }),

/***/ 60131:
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

/***/ 41003:
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

/***/ 40141:
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

/***/ 31829:
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

/***/ 46584:
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

/***/ 55136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nth)
/* harmony export */ });
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40141);

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

/***/ 68067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _path)
/* harmony export */ });
/* harmony import */ var _isInteger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77700);
/* harmony import */ var _nth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55136);


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

/***/ 94436:
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

/***/ 61950:
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

/***/ 60166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54121);
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44334);


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

/***/ 52296:
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

/***/ 28477:
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

/***/ 52420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toString)
/* harmony export */ });
/* harmony import */ var _includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26265);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46584);
/* harmony import */ var _quote_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61950);
/* harmony import */ var _toISOString_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28477);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77783);
/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67444);






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

/***/ 82719:
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

/***/ 69728:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44334);
/* harmony import */ var _xArrayReduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82719);
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90560);



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

/***/ 96359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xall)
/* harmony export */ });
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52296);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63143);


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

/***/ 52886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xdropWhile)
/* harmony export */ });
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63143);

var XDropWhile = /*#__PURE__*/function () {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].result;
  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };
  return XDropWhile;
}();
function _xdropWhile(f) {
  return function (xf) {
    return new XDropWhile(f, xf);
  };
}

/***/ }),

/***/ 63143:
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

/***/ 88080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xfilter)
/* harmony export */ });
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63143);

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

/***/ 96390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63143);

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

/***/ 80605:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _xtake)
/* harmony export */ });
/* harmony import */ var _reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52296);
/* harmony import */ var _xfBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63143);


var XTake = /*#__PURE__*/function () {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].init;
  XTake.prototype['@@transducer/result'] = _xfBase_js__WEBPACK_IMPORTED_MODULE_0__["default"].result;
  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? (0,_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ret) : ret;
  };
  return XTake;
}();
function _xtake(n) {
  return function (xf) {
    return new XTake(n, xf);
  };
}

/***/ }),

/***/ 24514:
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

/***/ 41837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59892);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9271);





/**
 * Given an `arity` (Number) and a `name` (String) the `invoker` function
 * returns a curried function that takes `arity` arguments and a `context`
 * object. It will "invoke" the `name`'d function (a method) on the `context`
 * object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of any of the target object's methods to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *      // A function with no arguments
 *      const asJson = invoker(0, "json")
 *      // Just like calling .then((response) => response.json())
 *      fetch("http://example.com/index.json").then(asJson)
 *
 *      // A function with one argument
 *      const sliceFrom = invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *
 *      // A function with two arguments
 *      const sliceFrom6 = invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 *      // NOTE: You can't simply pass some of the arguments to the initial invoker function.
 *      const firstCreditCardSection = invoker(2, "slice", 0, 4)
 *      firstCreditCardSection("4242 4242 4242 4242") // => Function<...>
 *
 *      // Since invoker returns a curried function, you may partially apply it to create the function you need.
 *      const firstCreditCardSection = invoker(2, "slice")(0, 4)
 *      firstCreditCardSection("4242 4242 4242 4242") // => "4242"
 *
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function invoker(arity, method) {
  return (0,_curryN_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arity + 1, function () {
    var target = arguments[arity];
    if (target != null && (0,_internal_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target) + ' does not have a method named "' + method + '"');
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (invoker);

/***/ }),

/***/ 27694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95734);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53654);




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

/***/ 19904:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
var isNil = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isNil(x) {
  return x == null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNil);

/***/ }),

/***/ 76785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27694);



/**
 * Returns `false` if the given value is its type's empty value; `true`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.29.2
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty, R.isEmpty
 * @example
 *
 *      R.isNotEmpty([1, 2, 3]);           //=> true
 *      R.isNotEmpty([]);                  //=> false
 *      R.isNotEmpty('');                  //=> false
 *      R.isNotEmpty(null);                //=> true
 *      R.isNotEmpty({});                  //=> false
 *      R.isNotEmpty({length: 0});         //=> true
 *      R.isNotEmpty(Uint8Array.from('')); //=> false
 */
var isNotEmpty = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function isNotEmpty(x) {
  return !(0,_isEmpty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNotEmpty);

/***/ }),

/***/ 95819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41837);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      const spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
var join = /*#__PURE__*/(0,_invoker_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 'join');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (join);

/***/ }),

/***/ 77783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65722);
/* harmony import */ var _internal_isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26590);




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

/***/ 49451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _internal_nth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55136);



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

/***/ 79362:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
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
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54121);
/* harmony import */ var _ap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93470);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19784);
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
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54121);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96738);
/* harmony import */ var _internal_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46584);
/* harmony import */ var _internal_xmap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96390);
/* harmony import */ var _curryN_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19784);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77783);








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

/***/ 89867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54121);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77783);




/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      const xyz = { x: 1, y: 2, z: 3 };
 *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
var mapObjIndexed = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function mapObjIndexed(fn, obj) {
  return (0,_internal_arrayReduce_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function (acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, (0,_keys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(obj));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapObjIndexed);

/***/ }),

/***/ 54981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
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

/***/ 81515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _mergeDeepWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11314);



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

/***/ 11314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _internal_isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60131);
/* harmony import */ var _mergeWithKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28052);




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

/***/ 28052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _internal_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65722);



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

/***/ 62486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);


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

/***/ 6986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);


/**
 * Returns the first argument if it is truthy, otherwise the second argument.
 * Acts as the boolean `or` statement if both inputs are `Boolean`s.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.either, R.and
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
var or = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function or(a, b) {
  return a || b;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (or);

/***/ }),

/***/ 14864:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68067);



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

/***/ 44787:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _internal_path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68067);



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

/***/ 14494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);


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

/***/ 27567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _internal_arity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53607);
/* harmony import */ var _internal_pipe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94436);
/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97797);
/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86561);





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

/***/ 39590:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(397);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18822);




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

/***/ 18822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_isInteger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77700);
/* harmony import */ var _internal_nth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55136);




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

/***/ 85379:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _defaultTo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66719);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18822);




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

/***/ 77981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _prop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18822);



/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = /*#__PURE__*/(0,_internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function propSatisfies(pred, name, obj) {
  return pred((0,_prop_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name, obj));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (propSatisfies);

/***/ }),

/***/ 41685:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47969);



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in the set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function range(from, to) {
  if (!((0,_internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(from) && (0,_internal_isNumber_js__WEBPACK_IMPORTED_MODULE_1__["default"])(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = Array(from < to ? to - from : 0);
  var finish = from < 0 ? to + Math.abs(from) : to - from;
  var idx = 0;
  while (idx < finish) {
    result[idx] = idx + from;
    idx += 1;
  }
  return result;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (range);

/***/ }),

/***/ 97797:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);
/* harmony import */ var _internal_xReduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69728);
/* harmony import */ var _internal_xwrap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24514);




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

/***/ 26517:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _internal_reduced_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52296);



/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * This optimization is available to the below functions:
 * - [`reduce`](#reduce)
 * - [`reduceWhile`](#reduceWhile)
 * - [`reduceBy`](#reduceBy)
 * - [`reduceRight`](#reduceRight)
 * - [`transduce`](#transduce)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.reduceWhile, R.reduceBy, R.reduceRight, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_internal_reduced_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reduced);

/***/ }),

/***/ 67444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_complement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47940);
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68481);




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

/***/ 85969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76122);
/* harmony import */ var _internal_curry3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39088);



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

/***/ 15791:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @see R.ascend, R.descend
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sort);

/***/ }),

/***/ 67515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _invoker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41837);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `sep`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /*#__PURE__*/(0,_invoker_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 'split');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (split);

/***/ }),

/***/ 2278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _equals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53654);
/* harmony import */ var _take_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66516);




/**
 * Checks if a list starts with the provided sublist.
 *
 * Similarly, checks if a string starts with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var startsWith = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prefix, list) {
  return (0,_equals_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_take_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prefix.length, list), prefix);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startsWith);

/***/ }),

/***/ 86561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_checkForMethod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76122);
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85969);




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

/***/ 66516:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45959);
/* harmony import */ var _internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96738);
/* harmony import */ var _internal_xtake_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80605);
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85969);





/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
var take = /*#__PURE__*/(0,_internal_curry2_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,_internal_dispatchable_js__WEBPACK_IMPORTED_MODULE_1__["default"])(['take'], _internal_xtake_js__WEBPACK_IMPORTED_MODULE_2__["default"], function take(n, xs) {
  return (0,_slice_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0, n < 0 ? Infinity : n, xs);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (take);

/***/ }),

/***/ 9271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);
/* harmony import */ var _internal_toString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52420);



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

/***/ 60963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18938);


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
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12449);


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

/***/ 21244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12449);

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

/***/ 80426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21244);

class DeepCloneError extends _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeepCloneError);

/***/ }),

/***/ 68774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21244);

class ShallowCloneError extends _CloneError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShallowCloneError);

/***/ }),

/***/ 14831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneDeep: () => (/* binding */ cloneDeep),
/* harmony export */   cloneShallow: () => (/* binding */ cloneShallow)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70060);
/* harmony import */ var _errors_DeepCloneError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80426);
/* harmony import */ var _errors_ShallowCloneError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68774);




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
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);

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

/***/ 85534:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);

class Comment extends minim__WEBPACK_IMPORTED_MODULE_0__.StringElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'comment';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ 76439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33031);


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

/***/ 42738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);

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

/***/ 37901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94909);

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
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70060);
/* harmony import */ var _clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14831);
/* harmony import */ var _transformers_serializers_value_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71514);




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
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34606);
/* harmony import */ var _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1460);
/* harmony import */ var _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85534);
/* harmony import */ var _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76439);
/* harmony import */ var _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42738);






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

/***/ 81787:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isElementType: () => (/* binding */ isElementType)
/* harmony export */ });
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);

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

/***/ 70060:
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
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95380);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73699);
/* harmony import */ var _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1460);
/* harmony import */ var _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85534);
/* harmony import */ var _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76439);
/* harmony import */ var _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42738);
/* harmony import */ var _helpers_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81787);








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

/***/ 62934:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRefractor: () => (/* binding */ createRefractor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_dispatcher_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49915);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35956);
/* harmony import */ var _clone_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14831);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
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

/***/ 49915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatchPluginsAsync: () => (/* binding */ dispatchPluginsAsync),
/* harmony export */   dispatchPluginsSync: () => (/* binding */ dispatchPluginsSync)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81515);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85379);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55474);
/* harmony import */ var _toolbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2471);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35956);
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

/***/ 61865:
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
/* harmony import */ var minim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var _elements_Annotation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1460);
/* harmony import */ var _elements_Comment_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85534);
/* harmony import */ var _elements_ParseResult_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76439);
/* harmony import */ var _elements_SourceMap_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42738);
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62934);






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
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
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

/***/ 85330:
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

/***/ 21234:
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

/***/ 71514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79872);
/* harmony import */ var _ast_ephemeral_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85330);
/* harmony import */ var _ast_ephemeral_object_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21234);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70060);




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

/***/ 79872:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visit: () => (/* binding */ visit)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53679);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35956);


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

/***/ 35956:
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
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27567);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28833);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85102);
/* harmony import */ var _swagger_api_apidom_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7951);
/* harmony import */ var _predicates_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70060);
/* harmony import */ var _clone_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14831);







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

/***/ 27155:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dereference: () => (/* binding */ dereference)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66719);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89867);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5107);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77981);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14864);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34606);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85102);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64988);



/**
 * This dereference algorithm is used exclusively for dereferencing specification objects.
 * It doesn't handle circular references of external references and works on objects only (not arrays).
 */
// eslint-disable-next-line import/prefer-default-export
const dereference = (object, root) => {
  const rootObject = (0,ramda__WEBPACK_IMPORTED_MODULE_0__["default"])(object, root);
  return (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(val => {
    if ((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_2__["default"])(val) && (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])('$ref', val) && (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(ramda_adjunct__WEBPACK_IMPORTED_MODULE_5__["default"], '$ref', val)) {
      const $ref = (0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])(['$ref'], val);
      // @ts-ignore
      const pointer = (0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_7__["default"])('#/', $ref);
      return (0,ramda__WEBPACK_IMPORTED_MODULE_6__["default"])(pointer.split('/'), rootObject);
    }
    if ((0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_2__["default"])(val)) {
      return dereference(val, rootObject);
    }
    return val;
  }, object);
};

/***/ }),

/***/ 26173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_aggregate_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21212);

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

/***/ 55262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMAggregateError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26173);

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

/***/ 12449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55262);

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

/***/ 94909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UnsupportedOperationError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73930);

class NotImplementedError extends _UnsupportedOperationError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotImplementedError);

/***/ }),

/***/ 73930:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55262);

class UnsupportedOperationError extends _ApiDOMError_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnsupportedOperationError);

/***/ }),

/***/ 60532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);


/**
 * In Draft 4, $ref behaves a little differently. When an object contains a $ref property,
 * the object is considered a reference, not a schema. Therefore, any other properties you put in that object will
 * not be treated as JSON Schema keywords and will be ignored by the validator.
 * $ref can only be used where a schema is expected.
 *
 * URI: https://json-schema.org/understanding-json-schema/structuring.html?highlight=ref#id18
 */

class JSONReference extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'JSONReference';
    this.classes.push('json-reference');
  }
  get $ref() {
    return this.get('$ref');
  }
  set $ref($ref) {
    this.set('$ref', $ref);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONReference);

/***/ }),

/***/ 66800:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

class JSONSchema extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'JSONSchemaDraft4';
  }

  /**
   * Core vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-00
   */

  get idProp() {
    return this.get('id');
  }
  set idProp(idProp) {
    this.set('id', idProp);
  }
  get $schema() {
    return this.get('$schema');
  }
  set $schema($schema) {
    this.set('$schema', $schema);
  }

  /**
   * Validation vocabulary
   *
   * URI: https://tools.ietf.org/html/draft-wright-json-schema-validation-00
   */

  /**
   *  Validation keywords for numeric instances (number and integer)
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
   * Validation keywords for strings
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

  /**
   * Validation keywords for objects
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
  get properties() {
    return this.get('properties');
  }
  set properties(properties) {
    this.set('properties', properties);
  }
  get additionalProperties() {
    return this.get('additionalProperties');
  }
  set additionalProperties(additionalProperties) {
    this.set('additionalProperties', additionalProperties);
  }
  get patternProperties() {
    return this.get('patternProperties');
  }
  set patternProperties(patternProperties) {
    this.set('patternProperties', patternProperties);
  }
  get dependencies() {
    return this.get('dependencies');
  }
  set dependencies(dependencies) {
    this.set('dependencies', dependencies);
  }

  /**
   *  Validation keywords for any instance type
   */

  get enum() {
    return this.get('enum');
  }
  set enum(enumValue) {
    this.set('enum', enumValue);
  }
  get type() {
    return this.get('type');
  }
  set type(type) {
    this.set('type', type);
  }
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
  get definitions() {
    return this.get('definitions');
  }
  set definitions(definitions) {
    this.set('definitions', definitions);
  }

  /**
   * Metadata keywords
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6
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
  set default(defaultValue) {
    this.set('default', defaultValue);
  }

  /**
   * Semantic validation with "format"
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-7
   */

  get format() {
    return this.get('format');
  }
  set format(format) {
    this.set('format', format);
  }

  /**
   * JSON Hyper-Schema
   *
   * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00
   */

  get base() {
    return this.get('base');
  }
  set base(base) {
    this.set('base', base);
  }
  get links() {
    return this.get('links');
  }
  set links(links) {
    this.set('links', links);
  }
  get media() {
    return this.get('media');
  }
  set media(media) {
    this.set('media', media);
  }
  get readOnly() {
    return this.get('readOnly');
  }
  set readOnly(readOnly) {
    this.set('readOnly', readOnly);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONSchema);

/***/ }),

/***/ 45535:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);

/**
 * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00#section-5
 */

class LinkDescription extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'linkDescription';
  }
  get href() {
    return this.get('href');
  }
  set href(href) {
    this.set('href', href);
  }
  get rel() {
    return this.get('rel');
  }
  set rel(rel) {
    this.set('rel', rel);
  }
  get title() {
    return this.get('title');
  }
  set title(title) {
    this.set('title', title);
  }
  get targetSchema() {
    return this.get('targetSchema');
  }
  set targetSchema(targetSchema) {
    this.set('targetSchema', targetSchema);
  }
  get mediaType() {
    return this.get('mediaType');
  }
  set mediaType(mediaType) {
    this.set('mediaType', mediaType);
  }
  get method() {
    return this.get('method');
  }
  set method(method) {
    this.set('method', method);
  }
  get encType() {
    return this.get('encType');
  }
  set encType(encType) {
    this.set('encType', encType);
  }
  get schema() {
    return this.get('schema');
  }
  set schema(schema) {
    this.set('schema', schema);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkDescription);

/***/ }),

/***/ 15681:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61865);


/**
 * URI: https://datatracker.ietf.org/doc/html/draft-wright-json-schema-hyperschema-00#section-4.3
 */

class Media extends _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.ObjectElement {
  constructor(content, meta, attributes) {
    super(content, meta, attributes);
    this.element = 'media';
  }
  get binaryEncoding() {
    return this.get('binaryEncoding');
  }
  set binaryEncoding(binaryEncoding) {
    this.set('binaryEncoding', binaryEncoding);
  }
  get type() {
    return this.get('type');
  }
  set type(type) {
    this.set('type', type);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);

/***/ }),

/***/ 53064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66800);
/* harmony import */ var _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60532);
/* harmony import */ var _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15681);
/* harmony import */ var _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45535);




const jsonSchemaDraft4 = {
  namespace: options => {
    const {
      base
    } = options;
    base.register('jSONSchemaDraft4', _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);
    base.register('jSONReference', _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
    base.register('media', _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
    base.register('linkDescription', _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]);
    return base;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsonSchemaDraft4);

/***/ }),

/***/ 83337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isJSONReferenceElement: () => (/* binding */ isJSONReferenceElement),
/* harmony export */   isJSONSchemaElement: () => (/* binding */ isJSONSchemaElement),
/* harmony export */   isLinkDescriptionElement: () => (/* binding */ isLinkDescriptionElement),
/* harmony export */   isMediaElement: () => (/* binding */ isMediaElement)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81787);
/* harmony import */ var _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66800);
/* harmony import */ var _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60532);
/* harmony import */ var _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15681);
/* harmony import */ var _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45535);





const isJSONSchemaElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] || hasBasicElementProps(element) && isElementType('JSONSchemaDraft4', element) && primitiveEq('object', element);
});
const isJSONReferenceElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] || hasBasicElementProps(element) && isElementType('JSONReference', element) && primitiveEq('object', element);
});
const isMediaElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] || hasBasicElementProps(element) && isElementType('media', element) && primitiveEq('object', element);
});
const isLinkDescriptionElement = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(({
  hasBasicElementProps,
  isElementType,
  primitiveEq
}) => {
  return element => element instanceof _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] || hasBasicElementProps(element) && isElementType('linkDescription', element) && primitiveEq('object', element);
});

/***/ }),

/***/ 76970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRefractor: () => (/* binding */ createRefractor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27155);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35956);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49915);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14864);
/* harmony import */ var _specification_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53785);
/* harmony import */ var _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13720);
/* harmony import */ var _toolbox_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20363);





const refract = (value, {
  specPath = ['visitors', 'document', 'objects', 'JSONSchema', '$visitor'],
  plugins = [],
  specificationObj = _specification_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
} = {}) => {
  const element = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.refract)(value);
  const resolvedSpec = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.dereference)(specificationObj);

  /**
   * This is where generic ApiDOM becomes semantic (namespace applied).
   * We don't allow consumers to hook into this translation.
   * Though we allow consumers to define their onw plugins on already transformed ApiDOM.
   */
  const RootVisitorClass = (0,ramda__WEBPACK_IMPORTED_MODULE_3__["default"])(specPath, resolvedSpec);
  const rootVisitor = new RootVisitorClass({
    specObj: resolvedSpec
  });
  (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.visit)(element, rootVisitor);

  /**
   * Running plugins visitors means extra single traversal === performance hit.
   */
  return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.dispatchPluginsSync)(rootVisitor.element, plugins, {
    toolboxCreator: _toolbox_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
    visitorOptions: {
      keyMap: _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_7__.keyMap,
      nodeTypeGetter: _traversal_visitor_mjs__WEBPACK_IMPORTED_MODULE_7__.getNodeType
    }
  });
};
const createRefractor = specPath => (value, options = {}) => refract(value, {
  specPath,
  ...options
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refract);

/***/ }),

/***/ 39236:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isJSONReferenceLikeElement: () => (/* binding */ isJSONReferenceLikeElement)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);

// eslint-disable-next-line import/prefer-default-export
const isJSONReferenceLikeElement = element => {
  return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isObjectElement)(element) && element.hasKey('$ref');
};

/***/ }),

/***/ 78573:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONReferenceElement: () => (/* reexport safe */ _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   JSONSchemaElement: () => (/* reexport safe */ _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   LinkDescriptionElement: () => (/* reexport safe */ _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   MediaElement: () => (/* reexport safe */ _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66800);
/* harmony import */ var _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60532);
/* harmony import */ var _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15681);
/* harmony import */ var _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45535);
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76970);




 // register refractors specific to element types
_elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(['visitors', 'document', 'objects', 'JSONSchema', '$visitor']);
_elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(['visitors', 'document', 'objects', 'JSONReference', '$visitor']);
_elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(['visitors', 'document', 'objects', 'Media', '$visitor']);
_elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].refract = (0,_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createRefractor)(['visitors', 'document', 'objects', 'LinkDescription', '$visitor']);


/***/ }),

/***/ 53785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _visitors_FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83502);
/* harmony import */ var _visitors_json_schema_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65593);
/* harmony import */ var _visitors_json_schema_ItemsVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59233);
/* harmony import */ var _visitors_json_schema_RequiredVisitor_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14110);
/* harmony import */ var _visitors_json_schema_PropertiesVisitor_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25442);
/* harmony import */ var _visitors_json_schema_PatternPropertiesVisitor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38786);
/* harmony import */ var _visitors_json_schema_DependenciesVisitor_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33278);
/* harmony import */ var _visitors_json_schema_EnumVisitor_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60882);
/* harmony import */ var _visitors_json_schema_TypeVisitor_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54651);
/* harmony import */ var _visitors_json_schema_AllOfVisitor_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95655);
/* harmony import */ var _visitors_json_schema_AnyOfVisitor_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91014);
/* harmony import */ var _visitors_json_schema_OneOfVisitor_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63392);
/* harmony import */ var _visitors_json_schema_DefinitionsVisitor_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87151);
/* harmony import */ var _visitors_json_schema_LinksVisitor_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64144);
/* harmony import */ var _visitors_json_schema_json_reference_index_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10144);
/* harmony import */ var _visitors_json_schema_json_reference_$RefVisitor_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15035);
/* harmony import */ var _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9562);
/* harmony import */ var _visitors_json_schema_media_index_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10428);
/* harmony import */ var _visitors_json_schema_link_description_index_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2243);



















/**
 * Specification object allows us to have complete control over visitors
 * when traversing the ApiDOM.
 * Specification also allows us to create amended refractors from
 * existing ones by manipulating it.
 *
 * Note: Specification object allows to use absolute internal JSON pointers.
 */
const specification = {
  visitors: {
    value: _visitors_FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    JSONSchemaOrJSONReferenceVisitor: _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
    document: {
      objects: {
        JSONSchema: {
          $visitor: _visitors_json_schema_index_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
          fixedFields: {
            // core vocabulary
            id: {
              $ref: '#/visitors/value'
            },
            $schema: {
              $ref: '#/visitors/value'
            },
            // validation vocabulary
            // validation keywords for numeric instances (number and integer)
            multipleOf: {
              $ref: '#/visitors/value'
            },
            maximum: {
              $ref: '#/visitors/value'
            },
            exclusiveMaximum: {
              $ref: '#/visitors/value'
            },
            minimum: {
              $ref: '#/visitors/value'
            },
            exclusiveMinimum: {
              $ref: '#/visitors/value'
            },
            // validation keywords for strings
            maxLength: {
              $ref: '#/visitors/value'
            },
            minLength: {
              $ref: '#/visitors/value'
            },
            pattern: {
              $ref: '#/visitors/value'
            },
            // validation keywords for arrays
            additionalItems: _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            items: _visitors_json_schema_ItemsVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            maxItems: {
              $ref: '#/visitors/value'
            },
            minItems: {
              $ref: '#/visitors/value'
            },
            uniqueItems: {
              $ref: '#/visitors/value'
            },
            // validation keywords for objects
            maxProperties: {
              $ref: '#/visitors/value'
            },
            minProperties: {
              $ref: '#/visitors/value'
            },
            required: _visitors_json_schema_RequiredVisitor_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            properties: _visitors_json_schema_PropertiesVisitor_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            additionalProperties: _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            patternProperties: _visitors_json_schema_PatternPropertiesVisitor_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            dependencies: _visitors_json_schema_DependenciesVisitor_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
            // validation keywords for any instance type
            enum: _visitors_json_schema_EnumVisitor_mjs__WEBPACK_IMPORTED_MODULE_8__["default"],
            type: _visitors_json_schema_TypeVisitor_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
            allOf: _visitors_json_schema_AllOfVisitor_mjs__WEBPACK_IMPORTED_MODULE_10__["default"],
            anyOf: _visitors_json_schema_AnyOfVisitor_mjs__WEBPACK_IMPORTED_MODULE_11__["default"],
            oneOf: _visitors_json_schema_OneOfVisitor_mjs__WEBPACK_IMPORTED_MODULE_12__["default"],
            not: _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            definitions: _visitors_json_schema_DefinitionsVisitor_mjs__WEBPACK_IMPORTED_MODULE_13__["default"],
            // metadata keywords
            title: {
              $ref: '#/visitors/value'
            },
            description: {
              $ref: '#/visitors/value'
            },
            default: {
              $ref: '#/visitors/value'
            },
            // semantic validation with "format"
            format: {
              $ref: '#/visitors/value'
            },
            // JSON Hyper-Schema
            base: {
              $ref: '#/visitors/value'
            },
            links: _visitors_json_schema_LinksVisitor_mjs__WEBPACK_IMPORTED_MODULE_14__["default"],
            media: {
              $ref: '#/visitors/document/objects/Media'
            },
            readOnly: {
              $ref: '#/visitors/value'
            }
          }
        },
        JSONReference: {
          $visitor: _visitors_json_schema_json_reference_index_mjs__WEBPACK_IMPORTED_MODULE_15__["default"],
          fixedFields: {
            $ref: _visitors_json_schema_json_reference_$RefVisitor_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]
          }
        },
        Media: {
          $visitor: _visitors_json_schema_media_index_mjs__WEBPACK_IMPORTED_MODULE_17__["default"],
          fixedFields: {
            binaryEncoding: {
              $ref: '#/visitors/value'
            },
            type: {
              $ref: '#/visitors/value'
            }
          }
        },
        LinkDescription: {
          $visitor: _visitors_json_schema_link_description_index_mjs__WEBPACK_IMPORTED_MODULE_18__["default"],
          fixedFields: {
            href: {
              $ref: '#/visitors/value'
            },
            rel: {
              $ref: '#/visitors/value'
            },
            title: {
              $ref: '#/visitors/value'
            },
            targetSchema: _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            mediaType: {
              $ref: '#/visitors/value'
            },
            method: {
              $ref: '#/visitors/value'
            },
            encType: {
              $ref: '#/visitors/value'
            },
            schema: _visitors_json_schema_JSONSchemaOrJSONReferenceVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
          }
        }
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (specification);

/***/ }),

/***/ 20363:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6260);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70060);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83337);
/* harmony import */ var _namespace_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53064);



const createToolbox = () => {
  const namespace = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.createNamespace)(_namespace_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const predicates = {
    ..._predicates_mjs__WEBPACK_IMPORTED_MODULE_2__,
    isStringElement: _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.isStringElement
  };
  return {
    predicates,
    namespace
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToolbox);

/***/ }),

/***/ 83502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7951);
/* harmony import */ var _Visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84980);


/**
 * This visitor is responsible for falling back to current traversed element
 * Given JSONSchemaVisitor expects ObjectElement to be traversed. If
 * different Element is provided FallBackVisitor is responsible to assigning
 * this Element as current element.
 */
class FallbackVisitor extends _Visitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  enter(element) {
    this.element = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallbackVisitor);

/***/ }),

/***/ 45985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14494);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14864);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44787);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16867);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35956);
/* harmony import */ var _Visitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84980);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83502);





/**
 * This is a base Type for every visitor that does
 * internal look-ups to retrieve other child visitors.
 */
class SpecificationVisitor extends _Visitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
     * This is `Visitor shortcut`: mechanism for short circuiting the traversal and replacing
     * it by basic node cloning.
     *
     * Visiting the element is equivalent to cloning it  if the prototype of a visitor
     * is the same as the prototype of FallbackVisitor. If that's the case, we can avoid
     * bootstrapping the traversal cycle for fields that don't require any special visiting.
     */
    const visitor = this.retrieveVisitorInstance(specPath, options);
    if (visitor instanceof _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_5__["default"] && (visitor === null || visitor === void 0 ? void 0 : visitor.constructor) === _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]) {
      return (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(element);
    }
    (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_7__.visit)(element, visitor, options);
    return visitor.element;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpecificationVisitor);

/***/ }),

/***/ 84980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2717);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70060);

class Visitor {
  element;
  constructor(options) {
    Object.assign(this, options);
  }

  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(from, to) {
    if (from.meta.length > 0 || to.meta.length > 0) {
      // eslint-disable-next-line no-param-reassign
      to.meta = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(to.meta, from.meta);
      if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__.hasElementSourceMap)(from)) {
        // avoid deep merging of source maps
        to.meta.set('sourceMap', from.meta.get('sourceMap'));
      }
    }
    if (from.attributes.length > 0 || from.meta.length > 0) {
      // eslint-disable-next-line no-param-reassign
      to.attributes = (0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__["default"])(to.attributes, from.attributes);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Visitor);

/***/ }),

/***/ 24120:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75229);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29498);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23387);
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9753);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45985);




class AlternatingVisitor extends _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  alternator;
  constructor({
    alternator,
    ...rest
  }) {
    super({
      ...rest
    });
    this.alternator = alternator;
  }
  enter(element) {
    const functions = this.alternator.map(({
      predicate,
      specPath
    }) => (0,ramda__WEBPACK_IMPORTED_MODULE_1__["default"])(predicate, (0,ramda__WEBPACK_IMPORTED_MODULE_2__["default"])(specPath), ramda_adjunct__WEBPACK_IMPORTED_MODULE_3__["default"]));
    const specPath = (0,ramda_adjunct__WEBPACK_IMPORTED_MODULE_4__["default"])(functions)(element);
    this.element = this.toRefractedElement(specPath, element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlternatingVisitor);

/***/ }),

/***/ 67210:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45985);


class FixedFieldsVisitor extends _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
        this.copyMetaAndAttributes(memberElement, newMemberElement);
        newMemberElement.classes.push('fixed-field');
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

/***/ 56023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68894);
/* harmony import */ var _PatternedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81427);


class MapVisitor extends _PatternedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.fieldPatternPredicate = ramda_adjunct__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapVisitor);

/***/ }),

/***/ 81427:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28833);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71514);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88326);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14831);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45985);



class PatternedFieldsVisitor extends _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  specPath;
  ignoredFields;
  fieldPatternPredicate = ramda__WEBPACK_IMPORTED_MODULE_1__["default"];
  constructor({
    specPath,
    ignoredFields,
    fieldPatternPredicate,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPath = specPath;
    this.ignoredFields = ignoredFields || [];
    if (typeof fieldPatternPredicate === 'function') {
      this.fieldPatternPredicate = fieldPatternPredicate;
    }
  }
  ObjectElement(objectElement) {
    // @ts-ignore
    objectElement.forEach((value, key, memberElement) => {
      if (!this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) && this.fieldPatternPredicate((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key))) {
        const specPath = this.specPath(value);
        const patternedFieldElement = this.toRefractedElement(specPath, value);
        const newMemberElement = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_3__.MemberElement((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(key), patternedFieldElement);
        this.copyMetaAndAttributes(memberElement, newMemberElement);
        newMemberElement.classes.push('patterned-field');
        this.element.content.push(newMemberElement);
      } else if (!this.ignoredFields.includes((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_2__["default"])(key))) {
        this.element.content.push((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(memberElement));
      }
    });
    this.copyMetaAndAttributes(objectElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternedFieldsVisitor);

/***/ }),

/***/ 95655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45985);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class AllOfVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ArrayElement();
    this.element.classes.push('json-schema-allOf');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(item) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllOfVisitor);

/***/ }),

/***/ 91014:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45985);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class AnyOfVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ArrayElement();
    this.element.classes.push('json-schema-anyOf');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(item) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnyOfVisitor);

/***/ }),

/***/ 87151:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56023);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class DefinitionsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ObjectElement();
    this.element.classes.push('json-schema-definitions');
    this.specPath = element => (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(element) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefinitionsVisitor);

/***/ }),

/***/ 33278:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56023);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class DependenciesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ObjectElement();
    this.element.classes.push('json-schema-dependencies');
    this.specPath = element => (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(element) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DependenciesVisitor);

/***/ }),

/***/ 60882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83502);

class EnumVisitor extends _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  ArrayElement(arrayElement) {
    const result = this.enter(arrayElement);
    this.element.classes.push('json-schema-enum');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnumVisitor);

/***/ }),

/***/ 59233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61865);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45985);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39236);






class ItemsVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  ObjectElement(objectElement) {
    const specPath = (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_4__.isJSONReferenceLikeElement)(objectElement) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
    this.element = this.toRefractedElement(specPath, objectElement);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
  ArrayElement(arrayElement) {
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.ArrayElement();
    this.element.classes.push('json-schema-items');
    arrayElement.forEach(item => {
      const specPath = (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_4__.isJSONReferenceLikeElement)(item) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsVisitor);

/***/ }),

/***/ 9562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53679);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39236);
/* harmony import */ var _generics_AlternatingVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24120);



class SchemaOrReferenceVisitor extends _generics_AlternatingVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options);
    this.alternator = [{
      predicate: _predicates_mjs__WEBPACK_IMPORTED_MODULE_1__.isJSONReferenceLikeElement,
      specPath: ['document', 'objects', 'JSONReference']
    }, {
      predicate: ramda__WEBPACK_IMPORTED_MODULE_2__["default"],
      specPath: ['document', 'objects', 'JSONSchema']
    }];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaOrReferenceVisitor);

/***/ }),

/***/ 64144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7951);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45985);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);





class LinksVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ArrayElement();
    this.element.classes.push('json-schema-links');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const linkDescriptionElement = this.toRefractedElement(['document', 'objects', 'LinkDescription'], item);
      this.element.push(linkDescriptionElement);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinksVisitor);

/***/ }),

/***/ 63392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7951);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45985);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class OneOfVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_SpecificationVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ArrayElement();
    this.element.classes.push('json-schema-oneOf');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(item) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_6__.BREAK;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneOfVisitor);

/***/ }),

/***/ 91530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ParentSchemaAwareVisitor {
  parent;
  constructor({
    parent
  }) {
    this.parent = parent;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParentSchemaAwareVisitor);

/***/ }),

/***/ 38786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56023);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class PatternPropertiesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ObjectElement();
    this.element.classes.push('json-schema-patternProperties');
    this.specPath = element => (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(element) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternPropertiesVisitor);

/***/ }),

/***/ 25442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61865);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83502);
/* harmony import */ var _generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56023);
/* harmony import */ var _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91530);
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39236);






class PropertiesVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_MapVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _ParentSchemaAwareVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_4__.ObjectElement();
    this.element.classes.push('json-schema-properties');
    this.specPath = element => (0,_predicates_mjs__WEBPACK_IMPORTED_MODULE_5__.isJSONReferenceLikeElement)(element) ? ['document', 'objects', 'JSONReference'] : ['document', 'objects', 'JSONSchema'];
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertiesVisitor);

/***/ }),

/***/ 14110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83502);

class RequiredVisitor extends _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  ArrayElement(arrayElement) {
    const result = this.enter(arrayElement);
    this.element.classes.push('json-schema-required');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequiredVisitor);

/***/ }),

/***/ 54651:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83502);

class TypeVisitor extends _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = this.enter(stringElement);
    this.element.classes.push('json-schema-type');
    return result;
  }
  ArrayElement(arrayElement) {
    const result = this.enter(arrayElement);
    this.element.classes.push('json-schema-type');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeVisitor);

/***/ }),

/***/ 65593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67210);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83502);
/* harmony import */ var _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66800);





class JSONSchemaVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_JSONSchema_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'JSONSchema']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONSchemaVisitor);

/***/ }),

/***/ 15035:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83502);

class $RefVisitor extends _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
  StringElement(stringElement) {
    const result = this.enter(stringElement);
    this.element.classes.push('reference-value');
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($RefVisitor);

/***/ }),

/***/ 10144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70060);
/* harmony import */ var _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60532);
/* harmony import */ var _generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67210);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83502);






class JSONReferenceVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_JSONReference_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'JSONReference']);
  }
  ObjectElement(objectElement) {
    const result = _generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.ObjectElement.call(this, objectElement);

    // mark this JSONReferenceElement with reference metadata
    if ((0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_5__.isStringElement)(this.element.$ref)) {
      this.element.classes.push('reference-element');
    }
    return result;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSONReferenceVisitor);

/***/ }),

/***/ 2243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45535);
/* harmony import */ var _generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67210);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83502);





class LinkDescriptionVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_LinkDescription_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'LinkDescription']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkDescriptionVisitor);

/***/ }),

/***/ 10428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_mixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17028);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29498);
/* harmony import */ var _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15681);
/* harmony import */ var _generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67210);
/* harmony import */ var _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83502);





class MediaVisitor extends (0,ts_mixer__WEBPACK_IMPORTED_MODULE_0__.Mixin)(_generics_FixedFieldsVisitor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _FallbackVisitor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]) {
  constructor(options) {
    super(options);
    this.element = new _elements_Media_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.specPath = (0,ramda__WEBPACK_IMPORTED_MODULE_4__["default"])(['document', 'objects', 'Media']);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaVisitor);

/***/ }),

/***/ 13720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNodeType: () => (/* binding */ getNodeType),
/* harmony export */   keyMap: () => (/* binding */ keyMap)
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35956);


// getNodeType :: Node -> String
const getNodeType = element => {
  if (!(0,_swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isElement)(element)) {
    return undefined;
  }
  return `${element.element.charAt(0).toUpperCase() + element.element.slice(1)}Element`;
};
const keyMap = {
  JSONSchemaDraft4Element: ['content'],
  JSONReferenceElement: ['content'],
  MediaElement: ['content'],
  LinkDescriptionElement: ['content'],
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
/* harmony export */   AlternatingVisitor: () => (/* reexport safe */ _refractor_visitors_generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   CallbackElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   ComponentsCallbacksElement: () => (/* reexport safe */ _elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   ComponentsElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   ComponentsExamplesElement: () => (/* reexport safe */ _elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   ComponentsHeadersElement: () => (/* reexport safe */ _elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   ComponentsLinksElement: () => (/* reexport safe */ _elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   ComponentsParametersElement: () => (/* reexport safe */ _elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   ComponentsRequestBodiesElement: () => (/* reexport safe */ _elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   ComponentsResponsesElement: () => (/* reexport safe */ _elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   ComponentsSchemasElement: () => (/* reexport safe */ _elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   ComponentsSecuritySchemesElement: () => (/* reexport safe */ _elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   ContactElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   DiscriminatorElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   DiscriminatorMappingElement: () => (/* reexport safe */ _elements_nces_DiscriminatorMapping__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   EncodingElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   EncodingHeadersElement: () => (/* reexport safe */ _elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   ExampleElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   ExternalDocumentationElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   FallbackVisitor: () => (/* reexport safe */ _refractor_visitors_FallbackVisitor__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   FixedFieldsVisitor: () => (/* reexport safe */ _refractor_visitors_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   HeaderContentElement: () => (/* reexport safe */ _elements_nces_HeaderContent__WEBPACK_IMPORTED_MODULE_61__["default"]),
/* harmony export */   HeaderElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   HeaderExamplesElement: () => (/* reexport safe */ _elements_nces_HeaderExamples__WEBPACK_IMPORTED_MODULE_62__["default"]),
/* harmony export */   InfoElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   LicenseElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   LinkElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   LinkParametersElement: () => (/* reexport safe */ _elements_nces_LinkParameters__WEBPACK_IMPORTED_MODULE_63__["default"]),
/* harmony export */   MapVisitor: () => (/* reexport safe */ _refractor_visitors_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   MediaTypeElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   MediaTypeEncodingElement: () => (/* reexport safe */ _elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_64__["default"]),
/* harmony export */   MediaTypeExamplesElement: () => (/* reexport safe */ _elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_65__["default"]),
/* harmony export */   MixedFieldsVisitor: () => (/* reexport safe */ _refractor_visitors_generics_MixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   OAuthFlowElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   OAuthFlowScopesElement: () => (/* reexport safe */ _elements_nces_OAuthFlowScopes__WEBPACK_IMPORTED_MODULE_66__["default"]),
/* harmony export */   OAuthFlowsElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   OpenAPIMediaTypes: () => (/* reexport safe */ _media_types__WEBPACK_IMPORTED_MODULE_1__.OpenAPIMediaTypes),
/* harmony export */   OpenApi3_0Element: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   OpenapiElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   OperationCallbacksElement: () => (/* reexport safe */ _elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_67__["default"]),
/* harmony export */   OperationElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   OperationParametersElement: () => (/* reexport safe */ _elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_68__["default"]),
/* harmony export */   OperationSecurityElement: () => (/* reexport safe */ _elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_69__["default"]),
/* harmony export */   OperationServersElement: () => (/* reexport safe */ _elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_70__["default"]),
/* harmony export */   OperationTagsElement: () => (/* reexport safe */ _elements_nces_OperationTags__WEBPACK_IMPORTED_MODULE_71__["default"]),
/* harmony export */   ParameterContentElement: () => (/* reexport safe */ _elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_72__["default"]),
/* harmony export */   ParameterElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   ParameterExamplesElement: () => (/* reexport safe */ _elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_73__["default"]),
/* harmony export */   PathItemElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   PathItemParametersElement: () => (/* reexport safe */ _elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_74__["default"]),
/* harmony export */   PathItemServersElement: () => (/* reexport safe */ _elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_75__["default"]),
/* harmony export */   PathsElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   PatternedFieldsVisitor: () => (/* reexport safe */ _refractor_visitors_generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   ReferenceElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   RequestBodyContentElement: () => (/* reexport safe */ _elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_76__["default"]),
/* harmony export */   RequestBodyElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   ResponseContentElement: () => (/* reexport safe */ _elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_77__["default"]),
/* harmony export */   ResponseElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   ResponseHeadersElement: () => (/* reexport safe */ _elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_78__["default"]),
/* harmony export */   ResponseLinksElement: () => (/* reexport safe */ _elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_79__["default"]),
/* harmony export */   ResponsesElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   SchemaElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   SecurityElement: () => (/* reexport safe */ _elements_nces_Security__WEBPACK_IMPORTED_MODULE_80__["default"]),
/* harmony export */   SecurityRequirementElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   SecuritySchemeElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   ServerElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_46__["default"]),
/* harmony export */   ServerVariableElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   ServerVariablesElement: () => (/* reexport safe */ _elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_82__["default"]),
/* harmony export */   ServersElement: () => (/* reexport safe */ _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_81__["default"]),
/* harmony export */   SpecificationExtensionVisitor: () => (/* reexport safe */ _refractor_visitors_SpecificationExtensionVisitor__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   SpecificationVisitor: () => (/* reexport safe */ _refractor_visitors_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   TagElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   TagsElement: () => (/* reexport safe */ _elements_nces_Tags__WEBPACK_IMPORTED_MODULE_83__["default"]),
/* harmony export */   Visitor: () => (/* reexport safe */ _refractor_visitors_Visitor__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   XmlElement: () => (/* reexport safe */ _refractor_registration__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   createRefractor: () => (/* reexport safe */ _refractor__WEBPACK_IMPORTED_MODULE_4__.createRefractor),
/* harmony export */   createToolbox: () => (/* reexport safe */ _refractor_toolbox__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "default": () => (/* reexport safe */ _namespace__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   getNodeType: () => (/* reexport safe */ _traversal_visitor__WEBPACK_IMPORTED_MODULE_18__.getNodeType),
/* harmony export */   isArrayElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isArrayElement),
/* harmony export */   isBooleanElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isBooleanElement),
/* harmony export */   isBooleanJsonSchemaElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isBooleanJsonSchemaElement),
/* harmony export */   isCallbackElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isCallbackElement),
/* harmony export */   isComponentsElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isComponentsElement),
/* harmony export */   isContactElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isContactElement),
/* harmony export */   isElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isElement),
/* harmony export */   isExampleElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isExampleElement),
/* harmony export */   isExternalDocumentationElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isExternalDocumentationElement),
/* harmony export */   isInfoElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isInfoElement),
/* harmony export */   isLicenseElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isLicenseElement),
/* harmony export */   isLinkElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isLinkElement),
/* harmony export */   isLinkPrimitiveElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isLinkElement),
/* harmony export */   isMediaTypeElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isMediaTypeElement),
/* harmony export */   isMemberElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isMemberElement),
/* harmony export */   isNullElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isNullElement),
/* harmony export */   isNumberElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isNumberElement),
/* harmony export */   isObjectElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isObjectElement),
/* harmony export */   isOpenApi3_0Element: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isOpenApi3_0Element),
/* harmony export */   isOpenApiExtension: () => (/* reexport safe */ _refractor_predicates__WEBPACK_IMPORTED_MODULE_8__.isOpenApiExtension),
/* harmony export */   isOpenapiElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isOpenapiElement),
/* harmony export */   isOperationElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isOperationElement),
/* harmony export */   isParameterElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isParameterElement),
/* harmony export */   isPathItemElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isPathItemElement),
/* harmony export */   isPathsElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isPathsElement),
/* harmony export */   isRefElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isRefElement),
/* harmony export */   isReferenceElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isReferenceElement),
/* harmony export */   isReferenceLikeElement: () => (/* reexport safe */ _refractor_predicates__WEBPACK_IMPORTED_MODULE_8__.isReferenceLikeElement),
/* harmony export */   isRequestBodyElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isRequestBodyElement),
/* harmony export */   isResponseElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isResponseElement),
/* harmony export */   isResponsesElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isResponsesElement),
/* harmony export */   isSchemaElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isSchemaElement),
/* harmony export */   isSecurityRequirementElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isSecurityRequirementElement),
/* harmony export */   isSecuritySchemeElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isSecuritySchemeElement),
/* harmony export */   isServerElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isServerElement),
/* harmony export */   isServerLikeElement: () => (/* reexport safe */ _refractor_predicates__WEBPACK_IMPORTED_MODULE_8__.isServerLikeElement),
/* harmony export */   isServerVariableElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isServerVariableElement),
/* harmony export */   isServersElement: () => (/* reexport safe */ _predicates__WEBPACK_IMPORTED_MODULE_7__.isServersElement),
/* harmony export */   isStringElement: () => (/* reexport safe */ _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__.isStringElement),
/* harmony export */   isTagLikeElement: () => (/* reexport safe */ _refractor_predicates__WEBPACK_IMPORTED_MODULE_8__.isTagLikeElement),
/* harmony export */   keyMap: () => (/* reexport safe */ _traversal_visitor__WEBPACK_IMPORTED_MODULE_18__.keyMap),
/* harmony export */   mediaTypes: () => (/* reexport safe */ _media_types__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   refract: () => (/* reexport safe */ _refractor__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   refractorPluginReplaceEmptyElement: () => (/* reexport safe */ _refractor_plugins_replace_empty_element__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   specificationObj: () => (/* reexport safe */ _refractor_specification__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var _swagger_api_apidom_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70060);
/* harmony import */ var _media_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58267);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9936);
/* harmony import */ var _refractor_plugins_replace_empty_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74000);
/* harmony import */ var _refractor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14074);
/* harmony import */ var _refractor_toolbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84225);
/* harmony import */ var _refractor_specification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27715);
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97269);
/* harmony import */ var _refractor_predicates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83990);
/* harmony import */ var _refractor_visitors_generics_AlternatingVisitor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49666);
/* harmony import */ var _refractor_visitors_generics_FixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44720);
/* harmony import */ var _refractor_visitors_generics_MapVisitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65411);
/* harmony import */ var _refractor_visitors_generics_MixedFieldsVisitor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52651);
/* harmony import */ var _refractor_visitors_generics_PatternedFieldsVisitor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92063);
/* harmony import */ var _refractor_visitors_FallbackVisitor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34572);
/* harmony import */ var _refractor_visitors_SpecificationExtensionVisitor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(97444);
/* harmony import */ var _refractor_visitors_SpecificationVisitor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88863);
/* harmony import */ var _refractor_visitors_Visitor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12746);
/* harmony import */ var _traversal_visitor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80192);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74014);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44281);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(95857);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(32633);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37904);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(17931);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(20950);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95376);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(77425);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(96878);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(7469);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(62521);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(16950);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(4981);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(98565);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(84889);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(87788);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(47578);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(16253);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(15001);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(27112);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(79964);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(6370);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(53113);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(9854);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(11060);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(1120);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(50710);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(68618);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(50565);
/* harmony import */ var _refractor_registration__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(55588);
/* harmony import */ var _elements_nces_ComponentsCallbacks__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(90365);
/* harmony import */ var _elements_nces_ComponentsExamples__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(15706);
/* harmony import */ var _elements_nces_ComponentsHeaders__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(75671);
/* harmony import */ var _elements_nces_ComponentsLinks__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(3924);
/* harmony import */ var _elements_nces_ComponentsParameters__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(29777);
/* harmony import */ var _elements_nces_ComponentsRequestBodies__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(69568);
/* harmony import */ var _elements_nces_ComponentsResponses__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(35113);
/* harmony import */ var _elements_nces_ComponentsSchemas__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(96477);
/* harmony import */ var _elements_nces_ComponentsSecuritySchemes__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(47975);
/* harmony import */ var _elements_nces_DiscriminatorMapping__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(12331);
/* harmony import */ var _elements_nces_EncodingHeaders__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(3952);
/* harmony import */ var _elements_nces_HeaderContent__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(2195);
/* harmony import */ var _elements_nces_HeaderExamples__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(62951);
/* harmony import */ var _elements_nces_LinkParameters__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(59517);
/* harmony import */ var _elements_nces_MediaTypeEncoding__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(62872);
/* harmony import */ var _elements_nces_MediaTypeExamples__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(37154);
/* harmony import */ var _elements_nces_OAuthFlowScopes__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(73951);
/* harmony import */ var _elements_nces_OperationCallbacks__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(70090);
/* harmony import */ var _elements_nces_OperationParameters__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(68748);
/* harmony import */ var _elements_nces_OperationSecurity__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(23062);
/* harmony import */ var _elements_nces_OperationServers__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(89686);
/* harmony import */ var _elements_nces_OperationTags__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(36509);
/* harmony import */ var _elements_nces_ParameterContent__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(11889);
/* harmony import */ var _elements_nces_ParameterExamples__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(98741);
/* harmony import */ var _elements_nces_PathItemParameters__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(90877);
/* harmony import */ var _elements_nces_PathItemServers__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(34977);
/* harmony import */ var _elements_nces_RequestBodyContent__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(98183);
/* harmony import */ var _elements_nces_ResponseContent__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(36641);
/* harmony import */ var _elements_nces_ResponseHeaders__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(86958);
/* harmony import */ var _elements_nces_ResponseLinks__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(79577);
/* harmony import */ var _elements_nces_Security__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(34295);
/* harmony import */ var _elements_nces_Servers__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(90129);
/* harmony import */ var _elements_nces_ServerVariables__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(83669);
/* harmony import */ var _elements_nces_Tags__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(63336);



// eslint-disable-next-line no-restricted-exports


















// OpenAPI 3.0.x elements

// NCE types


































})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});