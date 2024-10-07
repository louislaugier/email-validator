import { Mixin } from 'ts-mixer';
import { ArrayElement, BREAK } from '@swagger-api/apidom-core';
import FallbackVisitor from "../../FallbackVisitor.mjs";
import SpecificationVisitor from "../../SpecificationVisitor.mjs";
class ScenariosVisitor extends Mixin(SpecificationVisitor, FallbackVisitor) {
  constructor(options) {
    super(options);
    this.element = new ArrayElement();
    this.element.classes.push('main-scenarios');
  }
  ArrayElement(arrayElement) {
    arrayElement.forEach(item => {
      const specPath = ['document', 'objects', 'Scenario'];
      const element = this.toRefractedElement(specPath, item);
      this.element.push(element);
    });
    this.copyMetaAndAttributes(arrayElement, this.element);
    return BREAK;
  }
}
export default ScenariosVisitor;