"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apidomNsWorkflows = require("@swagger-api/apidom-ns-workflows-1");
const jsonMediaTypes = new _apidomNsWorkflows.WorkflowsMediaTypes(..._apidomNsWorkflows.mediaTypes.filterByFormat('generic'), ..._apidomNsWorkflows.mediaTypes.filterByFormat('json'));
var _default = exports.default = jsonMediaTypes;