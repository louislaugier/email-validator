"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
var _ramdaAdjunct = require("ramda-adjunct");
var _index = require("../predicates/index.cjs");
var _visitor = require("./visitor.cjs");
var _index2 = _interopRequireDefault(require("../transformers/serializers/value/index.cjs"));
class Visitor {
  result;
  offset;
  includeRightBound;
  constructor({
    offset = 0,
    includeRightBound = false
  } = {}) {
    this.result = [];
    this.offset = offset;
    this.includeRightBound = includeRightBound;
  }
  enter(element) {
    if (!(0, _index.hasElementSourceMap)(element)) {
      return undefined; // dive in
    }
    const sourceMapElement = element.getMetaProperty('sourceMap');
    const charStart = (0, _index2.default)(sourceMapElement.positionStart.get(2));
    const charEnd = (0, _index2.default)(sourceMapElement.positionEnd.get(2));
    const isWithinOffsetRange = this.offset >= charStart && (this.offset < charEnd || this.includeRightBound && this.offset <= charEnd);
    if (isWithinOffsetRange) {
      this.result.push(element);
      return undefined; // push to stack and dive in
    }
    return false; // skip entire sub-tree
  }
}
// Finds the most inner node at the given offset.
// If includeRightBound is set, also finds nodes that end at the given offset.
// findAtOffset :: Number -> Element -> Element | Undefined
const findAtOffset = (options, element) => {
  let offset;
  let includeRightBound;
  if ((0, _ramdaAdjunct.isNumber)(options)) {
    offset = options;
    includeRightBound = false;
  } else {
    offset = (0, _ramda.pathOr)(0, ['offset'], options);
    includeRightBound = (0, _ramda.pathOr)(false, ['includeRightBound'], options);
  }
  const visitor = new Visitor({
    offset,
    includeRightBound
  });
  (0, _visitor.visit)(element, visitor);
  return (0, _ramda.last)(visitor.result);
};
var _default = exports.default = findAtOffset;