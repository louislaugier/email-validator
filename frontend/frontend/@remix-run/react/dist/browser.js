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

var router$1 = require('@remix-run/router');
var React = require('react');
var reactRouter = require('react-router');
var reactRouterDom = require('react-router-dom');
var components = require('./components.js');
var errorBoundaries = require('./errorBoundaries.js');
var errors = require('./errors.js');
var routes = require('./routes.js');
var singleFetch = require('./single-fetch.js');
var invariant = require('./invariant.js');
var fogOfWar = require('./fog-of-war.js');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/* eslint-disable prefer-let/prefer-let */

/* eslint-enable prefer-let/prefer-let */

let stateDecodingPromise;
let router;
let routerInitialized = false;
let hmrRouterReadyResolve;
// There's a race condition with HMR where the remix:manifest is signaled before
// the router is assigned in the RemixBrowser component. This promise gates the
// HMR handler until the router is ready
new Promise(resolve => {
  // body of a promise is executed immediately, so this can be resolved outside
  // of the promise body
  hmrRouterReadyResolve = resolve;
}).catch(() => {
  // This is a noop catch handler to avoid unhandled promise rejection warnings
  // in the console. The promise is never rejected.
  return undefined;
});

/**
 * The entry point for a Remix app when it is rendered in the browser (in
 * `app/entry.client.js`). This component is used by React to hydrate the HTML
 * that was received from the server.
 */
function RemixBrowser(_props) {
  if (!router) {
    // When single fetch is enabled, we need to suspend until the initial state
    // snapshot is decoded into window.__remixContext.state
    if (window.__remixContext.future.unstable_singleFetch) {
      // Note: `stateDecodingPromise` is not coupled to `router` - we'll reach this
      // code potentially many times waiting for our state to arrive, but we'll
      // then only get past here and create the `router` one time
      if (!stateDecodingPromise) {
        let stream = window.__remixContext.stream;
        invariant(stream, "No stream found for single fetch decoding");
        window.__remixContext.stream = undefined;
        stateDecodingPromise = singleFetch.decodeViaTurboStream(stream, window).then(value => {
          window.__remixContext.state = value.value;
          stateDecodingPromise.value = true;
        }).catch(e => {
          stateDecodingPromise.error = e;
        });
      }
      if (stateDecodingPromise.error) {
        throw stateDecodingPromise.error;
      }
      if (!stateDecodingPromise.value) {
        throw stateDecodingPromise;
      }
    }
    let routes$1 = routes.createClientRoutes(window.__remixManifest.routes, window.__remixRouteModules, window.__remixContext.state, window.__remixContext.future, window.__remixContext.isSpaMode);
    let hydrationData = undefined;
    if (!window.__remixContext.isSpaMode) {
      // Create a shallow clone of `loaderData` we can mutate for partial hydration.
      // When a route exports a `clientLoader` and a `HydrateFallback`, the SSR will
      // render the fallback so we need the client to do the same for hydration.
      // The server loader data has already been exposed to these route `clientLoader`'s
      // in `createClientRoutes` above, so we need to clear out the version we pass to
      // `createBrowserRouter` so it initializes and runs the client loaders.
      hydrationData = {
        ...window.__remixContext.state,
        loaderData: {
          ...window.__remixContext.state.loaderData
        }
      };
      let initialMatches = reactRouterDom.matchRoutes(routes$1, window.location, window.__remixContext.basename);
      if (initialMatches) {
        for (let match of initialMatches) {
          let routeId = match.route.id;
          let route = window.__remixRouteModules[routeId];
          let manifestRoute = window.__remixManifest.routes[routeId];
          // Clear out the loaderData to avoid rendering the route component when the
          // route opted into clientLoader hydration and either:
          // * gave us a HydrateFallback
          // * or doesn't have a server loader and we have no data to render
          if (route && routes.shouldHydrateRouteLoader(manifestRoute, route, window.__remixContext.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
            hydrationData.loaderData[routeId] = undefined;
          } else if (manifestRoute && !manifestRoute.hasLoader) {
            // Since every Remix route gets a `loader` on the client side to load
            // the route JS module, we need to add a `null` value to `loaderData`
            // for any routes that don't have server loaders so our partial
            // hydration logic doesn't kick off the route module loaders during
            // hydration
            hydrationData.loaderData[routeId] = null;
          }
        }
      }
      if (hydrationData && hydrationData.errors) {
        hydrationData.errors = errors.deserializeErrors(hydrationData.errors);
      }
    }

    // We don't use createBrowserRouter here because we need fine-grained control
    // over initialization to support synchronous `clientLoader` flows.
    router = router$1.createRouter({
      routes: routes$1,
      history: router$1.createBrowserHistory(),
      basename: window.__remixContext.basename,
      future: {
        v7_normalizeFormMethod: true,
        v7_fetcherPersist: window.__remixContext.future.v3_fetcherPersist,
        v7_partialHydration: true,
        v7_prependBasename: true,
        v7_relativeSplatPath: window.__remixContext.future.v3_relativeSplatPath,
        // Single fetch enables this underlying behavior
        v7_skipActionErrorRevalidation: window.__remixContext.future.unstable_singleFetch === true
      },
      hydrationData,
      mapRouteProperties: reactRouter.UNSAFE_mapRouteProperties,
      unstable_dataStrategy: window.__remixContext.future.unstable_singleFetch ? singleFetch.getSingleFetchDataStrategy(window.__remixManifest, window.__remixRouteModules, () => router) : undefined,
      unstable_patchRoutesOnNavigation: fogOfWar.getPatchRoutesOnNavigationFunction(window.__remixManifest, window.__remixRouteModules, window.__remixContext.future, window.__remixContext.isSpaMode, window.__remixContext.basename)
    });

    // We can call initialize() immediately if the router doesn't have any
    // loaders to run on hydration
    if (router.state.initialized) {
      routerInitialized = true;
      router.initialize();
    }

    // @ts-ignore
    router.createRoutesForHMR = routes.createClientRoutesWithHMRRevalidationOptOut;
    window.__remixRouter = router;

    // Notify that the router is ready for HMR
    if (hmrRouterReadyResolve) {
      hmrRouterReadyResolve(router);
    }
  }

  // Critical CSS can become stale after code changes, e.g. styles might be
  // removed from a component, but the styles will still be present in the
  // server HTML. This allows our HMR logic to clear the critical CSS state.

  let [criticalCss, setCriticalCss] = React__namespace.useState(process.env.NODE_ENV === "development" ? window.__remixContext.criticalCss : undefined);
  if (process.env.NODE_ENV === "development") {
    window.__remixClearCriticalCss = () => setCriticalCss(undefined);
  }

  // This is due to the short circuit return above when the pathname doesn't
  // match and we force a hard reload.  This is an exceptional scenario in which
  // we can't hydrate anyway.

  let [location, setLocation] = React__namespace.useState(router.state.location);
  React__namespace.useLayoutEffect(() => {
    // If we had to run clientLoaders on hydration, we delay initialization until
    // after we've hydrated to avoid hydration issues from synchronous client loaders
    if (!routerInitialized) {
      routerInitialized = true;
      router.initialize();
    }
  }, []);
  React__namespace.useLayoutEffect(() => {
    return router.subscribe(newState => {
      if (newState.location !== location) {
        setLocation(newState.location);
      }
    });
  }, [location]);
  fogOfWar.useFogOFWarDiscovery(router, window.__remixManifest, window.__remixRouteModules, window.__remixContext.future, window.__remixContext.isSpaMode);

  // We need to include a wrapper RemixErrorBoundary here in case the root error
  // boundary also throws and we need to bubble up outside of the router entirely.
  // Then we need a stateful location here so the user can back-button navigate
  // out of there
  return (
    /*#__PURE__*/
    // This fragment is important to ensure we match the <RemixServer> JSX
    // structure so that useId values hydrate correctly
    React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(components.RemixContext.Provider, {
      value: {
        manifest: window.__remixManifest,
        routeModules: window.__remixRouteModules,
        future: window.__remixContext.future,
        criticalCss,
        isSpaMode: window.__remixContext.isSpaMode
      }
    }, /*#__PURE__*/React__namespace.createElement(errorBoundaries.RemixErrorBoundary, {
      location: location
    }, /*#__PURE__*/React__namespace.createElement(reactRouterDom.RouterProvider, {
      router: router,
      fallbackElement: null,
      future: {
        v7_startTransition: true
      }
    }))), window.__remixContext.future.unstable_singleFetch ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null) : null)
  );
}

exports.RemixBrowser = RemixBrowser;
