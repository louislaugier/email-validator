"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.uriToPointer = exports.default = void 0;
var _ramda = require("ramda");
var _ramdaAdjunct = require("ramda-adjunct");
var _unescape = _interopRequireDefault(require("./unescape.cjs"));
var _InvalidJsonPointerError = _interopRequireDefault(require("./errors/InvalidJsonPointerError.cjs"));
// parse :: String -> String[]
const parse = pointer => {
  if ((0, _ramdaAdjunct.isEmptyString)(pointer)) {
    return [];
  }
  if (!(0, _ramda.startsWith)('/', pointer)) {
    throw new _InvalidJsonPointerError.default(`Invalid JSON Pointer "${pointer}". JSON Pointers must begin with "/"`, {
      pointer
    });
  }
  try {
    const tokens = (0, _ramda.pipe)((0, _ramda.split)('/'), (0, _ramda.map)(_unescape.default))(pointer);
    return (0, _ramda.tail)(tokens);
  } catch (error) {
    throw new _InvalidJsonPointerError.default(`JSON Pointer parsing of "${pointer}" encountered an error.`, {
      pointer,
      cause: error
    });
  }
};

/**
 * Returns the hash (URL fragment), of the given path.
 * If there is no hash, then the root hash ("#") is returned.
 */
const getHash = uri => {
  const hashIndex = uri.indexOf('#');
  if (hashIndex !== -1) {
    return uri.substring(hashIndex);
  }
  return '#';
};

// uriToPointer :: String -> String
const uriToPointer = uri => {
  const hash = getHash(uri);
  return (0, _ramdaAdjunct.trimCharsStart)('#', hash);
};
exports.uriToPointer = uriToPointer;
var _default = exports.default = parse;