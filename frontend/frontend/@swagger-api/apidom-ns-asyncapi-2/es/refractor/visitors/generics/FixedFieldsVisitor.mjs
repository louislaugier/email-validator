import { BREAK, isStringElement, MemberElement, cloneDeep, toValue } from '@swagger-api/apidom-core';
import SpecificationVisitor from "../SpecificationVisitor.mjs";
import { isAsyncApiExtension } from "../../predicates.mjs";
class FixedFieldsVisitor extends SpecificationVisitor {
  specPath;
  ignoredFields;
  canSupportSpecificationExtensions = true;
  specificationExtensionPredicate = isAsyncApiExtension;
  constructor({
    specPath,
    ignoredFields,
    canSupportSpecificationExtensions,
    specificationExtensionPredicate,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPath = specPath;
    this.ignoredFields = ignoredFields || [];
    if (typeof canSupportSpecificationExtensions === 'boolean') {
      this.canSupportSpecificationExtensions = canSupportSpecificationExtensions;
    }
    if (typeof specificationExtensionPredicate === 'function') {
      this.specificationExtensionPredicate = specificationExtensionPredicate;
    }
  }
  ObjectElement(objectElement) {
    const specPath = this.specPath(objectElement);
    const fields = this.retrieveFixedFields(specPath);

    // @ts-ignore
    objectElement.forEach((value, key, memberElement) => {
      if (isStringElement(key) && fields.includes(toValue(key)) && !this.ignoredFields.includes(toValue(key))) {
        const fixedFieldElement = this.toRefractedElement([...specPath, 'fixedFields', toValue(key)], value);
        const newMemberElement = new MemberElement(cloneDeep(key), fixedFieldElement);
        newMemberElement.classes.push('fixed-field');
        this.copyMetaAndAttributes(memberElement, newMemberElement);
        this.element.content.push(newMemberElement);
      } else if (this.canSupportSpecificationExtensions && this.specificationExtensionPredicate(memberElement)) {
        const extensionElement = this.toRefractedElement(['document', 'extension'], memberElement);
        this.element.content.push(extensionElement);
      } else if (!this.ignoredFields.includes(toValue(key))) {
        this.element.content.push(cloneDeep(memberElement));
      }
    });
    this.copyMetaAndAttributes(objectElement, this.element);
    return BREAK;
  }
}
export default FixedFieldsVisitor;