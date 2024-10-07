/**
 * @remix-run/dev v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parser = require('@babel/parser');
var t = require('@babel/types');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var t__namespace = /*#__PURE__*/_interopNamespace(t);

/* eslint-disable @typescript-eslint/consistent-type-imports */

// These `require`s were needed to support building within vite-ecosystem-ci,
// otherwise we get errors that `traverse` and `generate` are not functions.
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

Object.defineProperty(exports, 'parse', {
  enumerable: true,
  get: function () { return parser.parse; }
});
exports.t = t__namespace;
exports.generate = generate;
exports.traverse = traverse;
