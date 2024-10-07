import { BREAK, isStringElement, MemberElement, cloneDeep, toValue } from '@swagger-api/apidom-core';
import SpecificationVisitor from "../SpecificationVisitor.mjs";
class FixedFieldsVisitor extends SpecificationVisitor {
  specPath;
  ignoredFields;
  constructor({
    specPath,
    ignoredFields,
    ...rest
  }) {
    super({
      ...rest
    });
    this.specPath = specPath;
    this.ignoredFields = ignoredFields || [];
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
      } else if (!this.ignoredFields.includes(toValue(key))) {
        this.element.content.push(cloneDeep(memberElement));
      }
    });
    this.copyMetaAndAttributes(objectElement, this.element);
    return BREAK;
  }
}
export default FixedFieldsVisitor;