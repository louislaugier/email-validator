"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault").default;
exports.__esModule = true;
exports.default = void 0;
var _ramda = require("ramda");
var _apidomParserAdapterAsyncapiJson = require("@swagger-api/apidom-parser-adapter-asyncapi-json-2");
var _ParserError = _interopRequireDefault(require("../../../errors/ParserError.cjs"));
var _Parser = _interopRequireDefault(require("../Parser.cjs"));
class AsyncAPIJSON2Parser extends _Parser.default {
  syntacticAnalysis;
  refractorOpts;
  constructor(options) {
    const {
      fileExtensions = [],
      mediaTypes = _apidomParserAdapterAsyncapiJson.mediaTypes,
      ...rest
    } = options != null ? options : {};
    super({
      ...rest,
      name: 'asyncapi-json-2',
      fileExtensions,
      mediaTypes
    });
  }
  async canParse(file) {
    const hasSupportedFileExtension = this.fileExtensions.length === 0 ? true : this.fileExtensions.includes(file.extension);
    const hasSupportedMediaType = this.mediaTypes.includes(file.mediaType);
    if (!hasSupportedFileExtension) return false;
    if (hasSupportedMediaType) return true;
    if (!hasSupportedMediaType) {
      return (0, _apidomParserAdapterAsyncapiJson.detect)(file.toString());
    }
    return false;
  }
  async parse(file) {
    const source = file.toString();
    try {
      const parserOpts = (0, _ramda.pick)(['sourceMap', 'syntacticAnalysis', 'refractorOpts'], this);
      return await (0, _apidomParserAdapterAsyncapiJson.parse)(source, parserOpts);
    } catch (error) {
      throw new _ParserError.default(`Error parsing "${file.uri}"`, {
        cause: error
      });
    }
  }
}
var _default = exports.default = AsyncAPIJSON2Parser;