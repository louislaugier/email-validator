import ResponseContentElement from "../../../../elements/nces/ResponseContent.mjs";
import BaseContentVisitor from "../ContentVisitor.mjs";
class ContentVisitor extends BaseContentVisitor {
  constructor(options) {
    super(options);
    this.element = new ResponseContentElement();
  }
}
export default ContentVisitor;