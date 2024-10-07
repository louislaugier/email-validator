import { pick } from 'ramda';
import { parse, mediaTypes as OpenAPIYAML2MediaTypes, detect } from '@swagger-api/apidom-parser-adapter-openapi-yaml-2';
import ParserError from "../../../errors/ParserError.mjs";
import Parser from "../Parser.mjs";
class OpenAPIYAML2Parser extends Parser {
  refractorOpts;
  constructor(options) {
    const {
      fileExtensions = [],
      mediaTypes = OpenAPIYAML2MediaTypes,
      ...rest
    } = options !== null && options !== void 0 ? options : {};
    super({
      ...rest,
      name: 'openapi-yaml-2',
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
      return detect(file.toString());
    }
    return false;
  }
  async parse(file) {
    const source = file.toString();
    try {
      const parserOpts = pick(['sourceMap', 'refractorOpts'], this);
      return await parse(source, parserOpts);
    } catch (error) {
      throw new ParserError(`Error parsing "${file.uri}"`, {
        cause: error
      });
    }
  }
}
export default OpenAPIYAML2Parser;