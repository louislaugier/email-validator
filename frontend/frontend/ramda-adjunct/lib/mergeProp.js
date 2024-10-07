"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ramda = require("ramda");
var _mergePath = _interopRequireDefault(require("./mergePath.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Create a new object with the own properties of the object under the `p`
 * merged with the own properties of the provided `source`.
 * If a key exists in both objects, the value from the `source` object will be used.
 *
 * @func mergeProp
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.18.0|v1.18.0}
 * @category Object
 * @sig [k] -> {a} -> {k: {a}} -> {k: {a}}
 * @see {@link RA.mergePath|mergePath}
 * @param {!Array} p The property of the destination object
 * @param {!Object} source The source object
 * @param {!Object} obj The object that has destination object under corresponding property
 * @return {!Object} The new version of object
 * @example
 *
 * RA.mergeProp(
 *  'outer',
 *  { foo: 3, bar: 4 },
 *  { outer: { foo: 2 } }
 * ); //=> { outer: { foo: 3, bar: 4 } };
 */
var mergeProp = (0, _ramda.curry)(function (p, subj, obj) {
  return (0, _mergePath["default"])((0, _ramda.of)(Array, p), subj, obj);
});
var _default = exports["default"] = mergeProp;