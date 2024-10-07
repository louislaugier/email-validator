/**
 * @remix-run/react v2.12.1
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

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

/**
 * A function that handles data mutations for a route on the client
 */

/**
 * Arguments passed to a route `clientAction` function
 */

/**
 * A function that loads data for a route on the client
 */

/**
 * Arguments passed to a route `clientLoader` function
 */

/**
 * ErrorBoundary to display for this route
 */

/**
 * `<Route HydrateFallback>` component to render on initial loads
 * when client loaders are present
 */

/**
 * Optional, root-only `<Route Layout>` component to wrap the root content in.
 * Useful for defining the <html>/<head>/<body> document shell shared by the
 * Component, HydrateFallback, and ErrorBoundary
 */

/**
 * A function that defines `<link>` tags to be inserted into the `<head>` of
 * the document on route transitions.
 *
 * @see https://remix.run/route/meta
 */

/**
 * A React component that is rendered for a route.
 */

/**
 * An arbitrary object that is associated with a route.
 *
 * @see https://remix.run/route/handle
 */

async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await (function (t) { return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(t)); }); })( /* webpackIgnore: true */route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    // If we can't load the route it's likely one of 2 things:
    // - User got caught in the middle of a deploy and the CDN no longer has the
    //   asset we're trying to import! Reload from the server and the user
    //   (should) get the new manifest--unless the developer purged the static
    //   assets, the manifest path, but not the documents 😬
    // - Or, the asset trying to be imported has an error (usually in vite dev
    //   mode), so the best we can do here is log the error for visibility
    //   (via `Preserve log`) and reload

    // Log the error so it can be accessed via the `Preserve Log` setting
    console.error(`Error loading route module \`${route.module}\`, reloading page...`);
    console.error(error);
    if (window.__remixContext.isSpaMode &&
    // @ts-expect-error
    typeof undefined !== "undefined") {
      // In SPA Mode (which implies vite) we don't want to perform a hard reload
      // on dev-time errors since it's a vite compilation error and a reload is
      // just going to fail with the same issue.  Let the UI bubble to the error
      // boundary and let them see the error in the overlay or the dev server log
      throw error;
    }
    window.location.reload();
    return new Promise(() => {
      // check out of this hook cause the DJs never gonna re[s]olve this
    });
  }
}

exports.loadRouteModule = loadRouteModule;
