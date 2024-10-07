import { isNonEmptyString } from 'ramda-adjunct';
import PatternedFieldsVisitor from "./PatternedFieldsVisitor.mjs";
class MapVisitor extends PatternedFieldsVisitor {
  constructor(options) {
    super(options);
    this.fieldPatternPredicate = isNonEmptyString;
  }
}
export default MapVisitor;