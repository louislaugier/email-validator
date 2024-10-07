import BaseContentVisitor from "../ContentVisitor.mjs";
import ParameterContentElement from "../../../../elements/nces/ParameterContent.mjs";
class ContentVisitor extends BaseContentVisitor {
  constructor(options) {
    super(options);
    this.element = new ParameterContentElement();
  }
}
export default ContentVisitor;