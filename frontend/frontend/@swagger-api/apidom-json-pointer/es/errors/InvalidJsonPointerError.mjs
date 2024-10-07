import JsonPointerError from "./JsonPointerError.mjs";
class InvalidJsonPointerError extends JsonPointerError {
  pointer;
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (typeof structuredOptions !== 'undefined') {
      this.pointer = structuredOptions.pointer;
    }
  }
}
export default InvalidJsonPointerError;