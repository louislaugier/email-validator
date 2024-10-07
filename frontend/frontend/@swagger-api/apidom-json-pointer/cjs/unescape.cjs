"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
/**
 * decodeURIComponent can throw URIError in certain cases like 'c%d'.
 * safeDecodeURIComponent is a safe variant of decodeURIComponent that never trows.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Malformed_URI|More info about URIError}
 */
const safeDecodeURIComponent = encodedURIComponent => {
  try {
    return decodeURIComponent(encodedURIComponent);
  } catch {
    return encodedURIComponent;
  }
};

// unescape :: String -> String
const unescape = (0, _ramda.pipe)((0, _ramda.replace)(/~1/g, '/'), (0, _ramda.replace)(/~0/g, '~'), safeDecodeURIComponent);
var _default = exports.default = unescape;