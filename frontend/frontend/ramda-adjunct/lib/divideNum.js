"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
/**
 * Divides two numbers, where the second number is divided by the first number.
 *
 * @func divideNum
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Math
 * @sig Number -> Number -> Number
 * @param {number} divisor the number to divide by
 * @param {number} dividend the number to divide
 * @return {number} A number representing the quotient of dividing the dividend by the divisor
 * @example
 *
 * RA.divideNum(2, 1); //=> 0.5
 */
var divideNum = (0, _ramda.flip)(_ramda.divide);
var _default = exports["default"] = divideNum;