import YamlSchemaError from "./YamlSchemaError.mjs";
class YamlTagError extends YamlSchemaError {
  specificTagName;
  explicitTagName;
  tagKind;
  tagPosition;
  nodeCanonicalContent;
  node;
  constructor(message, structuredOptions) {
    super(message, structuredOptions);
    if (typeof structuredOptions !== 'undefined') {
      this.specificTagName = structuredOptions.specificTagName;
      this.explicitTagName = structuredOptions.explicitTagName;
      this.tagKind = structuredOptions.tagKind;
      this.tagPosition = structuredOptions.tagPosition;
      this.nodeCanonicalContent = structuredOptions.nodeCanonicalContent;
      this.node = structuredOptions.node;
    }
  }
}
export default YamlTagError;