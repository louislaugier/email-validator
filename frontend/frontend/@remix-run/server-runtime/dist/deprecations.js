/**
 * @remix-run/server-runtime v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function resourceRouteJsonWarning(type, routeId) {
  return "⚠️ REMIX FUTURE CHANGE: Resource routes will no longer be able to " + "return raw JavaScript objects in v3 when Single Fetch becomes the default. " + "You can prepare for this change at your convenience by wrapping the data " + `returned from your \`${type}\` function in the \`${routeId}\` route with ` + "`json()`.  For instructions on making this change see " + "https://remix.run/docs/en/v2.9.2/guides/single-fetch#resource-routes";
}

exports.resourceRouteJsonWarning = resourceRouteJsonWarning;
