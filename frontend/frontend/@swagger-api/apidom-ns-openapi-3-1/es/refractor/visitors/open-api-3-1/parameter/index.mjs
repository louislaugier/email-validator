import { specificationObj as OpenApi3_1Specification } from '@swagger-api/apidom-ns-openapi-3-0';
import ParameterElement from "../../../../elements/Parameter.mjs";
const {
  visitors: {
    document: {
      objects: {
        Parameter: {
          $visitor: BaseParameterVisitor
        }
      }
    }
  }
} = OpenApi3_1Specification;
class ParameterVisitor extends BaseParameterVisitor {
  constructor(options) {
    super(options);
    this.element = new ParameterElement();
  }
}
export default ParameterVisitor;