"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
/**
 * Checks if input value is the Boolean primitive `false`. Will return false for all values created
 * using the `Boolean` function as a constructor.
 *
 * @func isFalse
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.6.0|v2.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link RA.isTrue|isTrue}, {@link RA.isTruthy|isTruthy}, {@link RA.isFalsy|isFalsy}
 * @example
 *
 * RA.isFalse(false); // => true
 * RA.isFalse(Boolean(false)); // => true
 * RA.isFalse(true); // => false
 * RA.isFalse(0); // => false
 * RA.isFalse(''); // => false
 * RA.isFalse(null); // => false
 * RA.isFalse(undefined); // => false
 * RA.isFalse(NaN); // => false
 * RA.isFalse([]); // => false
 * RA.isFalse(new Boolean(false)); // => false
 */

var isFalse = (0, _ramda.curryN)(1, (0, _ramda.identical)(false));
var _default = exports["default"] = isFalse;