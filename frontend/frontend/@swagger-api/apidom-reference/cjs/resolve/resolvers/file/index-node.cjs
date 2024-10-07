"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _fs = require("#fs");
var _util = require("#util");
var _minimatch = _interopRequireDefault(require("minimatch"));
var _Resolver = _interopRequireDefault(require("../Resolver.cjs"));
var url = _interopRequireWildcard(require("../../../util/url.cjs"));
var _ResolverError = _interopRequireDefault(require("../../../errors/ResolverError.cjs"));
// eslint-disable-line import/order
// eslint-disable-line import/order

class FileResolver extends _Resolver.default {
  fileAllowList;
  constructor(options) {
    const {
      fileAllowList = []
    } = options != null ? options : {};
    super({
      name: 'file'
    });
    this.fileAllowList = fileAllowList;
  }
  canRead(file) {
    return url.isFileSystemPath(file.uri) && this.fileAllowList.some(pattern => {
      return typeof pattern === 'string' ? (0, _minimatch.default)(file.uri, pattern, {
        matchBase: true
      }) : pattern.test(file.uri);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async read(file) {
    const fileSystemPath = url.toFileSystemPath(file.uri);
    try {
      return await (0, _util.promisify)(_fs.readFile)(fileSystemPath);
    } catch (error) {
      throw new _ResolverError.default(`Error opening file "${file.uri}"`, {
        cause: error
      });
    }
  }
}
var _default = exports.default = FileResolver;