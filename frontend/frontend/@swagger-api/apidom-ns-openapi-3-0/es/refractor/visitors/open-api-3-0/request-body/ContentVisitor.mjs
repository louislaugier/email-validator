import RequestBodyContentElement from "../../../../elements/nces/RequestBodyContent.mjs";
import BaseContentVisitor from "../ContentVisitor.mjs";
class ContentVisitor extends BaseContentVisitor {
  constructor(options) {
    super(options);
    this.element = new RequestBodyContentElement();
  }
}
export default ContentVisitor;