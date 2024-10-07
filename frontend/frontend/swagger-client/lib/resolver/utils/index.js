"use strict";

exports.__esModule = true;
exports.makeFetchJSON = makeFetchJSON;
var _constants = require("../../constants.js");
// eslint-disable-next-line import/prefer-default-export
function makeFetchJSON(http, opts = {}) {
  const {
    requestInterceptor,
    responseInterceptor
  } = opts;
  // Set credentials with 'http.withCredentials' value
  const credentials = http.withCredentials ? 'include' : 'same-origin';
  return docPath => http({
    url: docPath,
    loadSpec: true,
    requestInterceptor,
    responseInterceptor,
    headers: {
      Accept: _constants.ACCEPT_HEADER_VALUE_FOR_DOCUMENTS
    },
    credentials
  }).then(res => res.body);
}