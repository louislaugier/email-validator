"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomCore = require("@swagger-api/apidom-core");
class Visitor {
  element;
  constructor(options) {
    Object.assign(this, options);
  }

  // eslint-disable-next-line class-methods-use-this
  copyMetaAndAttributes(from, to) {
    if (from.meta.length > 0 || to.meta.length > 0) {
      // eslint-disable-next-line no-param-reassign
      to.meta = (0, _apidomCore.deepmerge)(to.meta, from.meta);
      if ((0, _apidomCore.hasElementSourceMap)(from)) {
        // avoid deep merging of source maps
        to.meta.set('sourceMap', from.meta.get('sourceMap'));
      }
    }
    if (from.attributes.length > 0 || from.meta.length > 0) {
      // eslint-disable-next-line no-param-reassign
      to.attributes = (0, _apidomCore.deepmerge)(to.attributes, from.attributes);
    }
  }
}
var _default = exports.default = Visitor;