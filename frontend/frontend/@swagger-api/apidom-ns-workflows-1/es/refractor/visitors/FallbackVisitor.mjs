import { BREAK, cloneDeep } from '@swagger-api/apidom-core';
import Visitor from "./Visitor.mjs";
/**
 * This visitor is responsible for falling back to current traversed element.
 * Given WorkflowsSpecificationVisitor expects ObjectElement to be traversed. If
 * different Element is provided FallBackVisitor is responsible to assigning
 * this Element as current element.
 */
class FallbackVisitor extends Visitor {
  enter(element) {
    this.element = cloneDeep(element);
    return BREAK;
  }
}
export default FallbackVisitor;