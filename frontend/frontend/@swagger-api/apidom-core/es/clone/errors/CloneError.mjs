import { ApiDOMStructuredError } from '@swagger-api/apidom-error';
class CloneError extends ApiDOMStructuredError {
  value;
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (typeof structuredOptions !== 'undefined') {
      this.value = structuredOptions.value;
    }
  }
}
export default CloneError;