"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsOpenapi = require("@swagger-api/apidom-ns-openapi-2");
const yamlMediaTypes = new _apidomNsOpenapi.OpenAPIMediaTypes(..._apidomNsOpenapi.mediaTypes.filterByFormat('generic'), ..._apidomNsOpenapi.mediaTypes.filterByFormat('yaml'));
var _default = exports.default = yamlMediaTypes;