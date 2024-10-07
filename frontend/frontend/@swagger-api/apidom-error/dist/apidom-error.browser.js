(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["apidomError"] = factory();
	else
		root["apidomError"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ApiDOMAggregateError extends AggregateError {
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

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMAggregateError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);

class ApiDOMError extends Error {
  static [Symbol.hasInstance](instance) {
    // we want to ApiDOMAggregateError to act as if ApiDOMError was its superclass
    return super[Symbol.hasInstance](instance) || Function.prototype[Symbol.hasInstance].call(_ApiDOMAggregateError__WEBPACK_IMPORTED_MODULE_0__["default"], instance);
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

/***/ 672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797);

class ApiDOMStructuredError extends _ApiDOMError__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ 428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UnsupportedOperationError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);

class NotImplementedError extends _UnsupportedOperationError__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotImplementedError);

/***/ }),

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiDOMError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797);

class UnsupportedOperationError extends _ApiDOMError__WEBPACK_IMPORTED_MODULE_0__["default"] {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnsupportedOperationError);

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiDOMAggregateError: () => (/* reexport safe */ _ApiDOMAggregateError__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ApiDOMError: () => (/* reexport safe */ _ApiDOMError__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ApiDOMStructuredError: () => (/* reexport safe */ _ApiDOMStructuredError__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   NotImplementedError: () => (/* reexport safe */ _NotImplementedError__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   UnsupportedOperationError: () => (/* reexport safe */ _UnsupportedOperationError__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _ApiDOMError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797);
/* harmony import */ var _ApiDOMAggregateError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony import */ var _ApiDOMStructuredError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(672);
/* harmony import */ var _UnsupportedOperationError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(537);
/* harmony import */ var _NotImplementedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(428);
// base error classes



// generic custom error classes


/******/ 	return __webpack_exports__;
/******/ })()
;
});