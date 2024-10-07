import { hasElementSourceMap, deepmerge } from '@swagger-api/apidom-core';
class Visitor {
  element;
  constructor(options) {
    Object.assign(this, options);
  }

  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(from, to) {
    if (from.meta.length > 0 || to.meta.length > 0) {
      // eslint-disable-next-line no-param-reassign
      to.meta = deepmerge(to.meta, from.meta);
      if (hasElementSourceMap(from)) {
        // avoid deep merging of source maps
        to.meta.set('sourceMap', from.meta.get('sourceMap'));
      }
    }
    if (from.attributes.length > 0 || from.meta.length > 0) {
      // eslint-disable-next-line no-param-reassign
      to.attributes = deepmerge(to.attributes, from.attributes);
    }
  }
}
export default Visitor;