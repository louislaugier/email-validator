import { deepmerge, hasElementSourceMap } from '@swagger-api/apidom-core';
class Visitor {
  element;
  constructor(options = {}) {
    Object.assign(this, options);
  }

  /* eslint-disable class-methods-use-this, no-param-reassign */
  copyMetaAndAttributes(from, to) {
    if (from.meta.length > 0 || to.meta.length > 0) {
      to.meta = deepmerge(to.meta, from.meta);
      if (hasElementSourceMap(from)) {
        // avoid deep merging of source maps
        to.meta.set('sourceMap', from.meta.get('sourceMap'));
      }
    }
    if (from.attributes.length > 0 || from.meta.length > 0) {
      to.attributes = deepmerge(to.attributes, from.attributes); // eslint-disable-line no-param-reassign
    }
  }
  /* eslint-enable class-methods-use-this, no-param-reassign */
}
export default Visitor;