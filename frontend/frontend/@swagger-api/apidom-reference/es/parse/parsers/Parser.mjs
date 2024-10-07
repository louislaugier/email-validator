class Parser {
  name;

  /**
   * Whether to allow "empty" files. This includes zero-byte files.
   */
  allowEmpty;

  /**
   * Whether to generate source map during parsing.
   */
  sourceMap;

  /**
   * List of supported file extensions.
   */
  fileExtensions;

  /**
   * List of supported media types.
   */
  mediaTypes;
  constructor({
    name,
    allowEmpty = true,
    sourceMap = false,
    fileExtensions = [],
    mediaTypes = []
  }) {
    this.name = name;
    this.allowEmpty = allowEmpty;
    this.sourceMap = sourceMap;
    this.fileExtensions = fileExtensions;
    this.mediaTypes = mediaTypes;
  }
}
export default Parser;