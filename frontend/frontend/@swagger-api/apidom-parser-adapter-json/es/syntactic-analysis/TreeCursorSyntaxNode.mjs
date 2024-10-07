class TreeCursorSyntaxNode {
  type;
  startPosition;
  endPosition;
  startIndex;
  endIndex;
  text;
  isNamed;
  isMissing;
  fieldName;
  hasError = false;
  children = [];
  constructor(cursor) {
    this.type = cursor.nodeType;
    this.startPosition = cursor.startPosition;
    this.endPosition = cursor.endPosition;
    this.startIndex = cursor.startIndex;
    this.endIndex = cursor.endIndex;
    this.text = cursor.nodeText;
    this.isNamed = cursor.nodeIsNamed;
    this.isMissing = cursor.nodeIsMissing;
  }
  get keyNode() {
    if (this.type === 'pair') {
      return this.children.find(node => node.fieldName === 'key');
    }
    return undefined;
  }
  get valueNode() {
    if (this.type === 'pair') {
      return this.children.find(node => node.fieldName === 'value');
    }
    return undefined;
  }
  setFieldName(cursor) {
    if (typeof cursor.currentFieldName === 'function') {
      this.fieldName = cursor.currentFieldName();
    } else {
      this.fieldName = cursor.currentFieldName;
    }
    return this;
  }
  setHasError(cursor) {
    if (typeof cursor.currentNode === 'function') {
      this.hasError = cursor.currentNode().hasError();
    } else {
      this.hasError = cursor.currentNode.hasError();
    }
    return this;
  }
  pushChildren(...children) {
    this.children.push(...children);
  }
}
export default TreeCursorSyntaxNode;