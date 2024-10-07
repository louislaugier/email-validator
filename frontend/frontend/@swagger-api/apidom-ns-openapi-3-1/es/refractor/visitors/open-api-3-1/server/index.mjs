import { specificationObj as OpenApi3_1Specification } from '@swagger-api/apidom-ns-openapi-3-0';
import ServerElement from "../../../../elements/Server.mjs";
const {
  visitors: {
    document: {
      objects: {
        Server: {
          $visitor: BaseServerVisitor
        }
      }
    }
  }
} = OpenApi3_1Specification;
class ServerVisitor extends BaseServerVisitor {
  constructor(options) {
    super(options);
    this.element = new ServerElement();
  }
}
export default ServerVisitor;