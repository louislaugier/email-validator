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
import * as React from 'react';
import { UNSAFE_ErrorResponseImpl, isRouteErrorResponse, unstable_data, redirect } from '@remix-run/router';
import { UNSAFE_SingleFetchRedirectSymbol } from '@remix-run/server-runtime';
import { decode } from 'turbo-stream';
import { createRequestInit, isResponse } from './data.js';
import { escapeHtml } from './markup.js';
import invariant from './invariant.js';

// StreamTransfer recursively renders down chunks of the `serverHandoffStream`
// into the client-side `streamController`
function StreamTransfer({
  context,
  identifier,
  reader,
  textDecoder,
  nonce
}) {
  // If the user didn't render the <Scripts> component then we don't have to
  // bother streaming anything in
  if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
    return null;
  }
  if (!context.renderMeta.streamCache) {
    context.renderMeta.streamCache = {};
  }
  let {
    streamCache
  } = context.renderMeta;
  let promise = streamCache[identifier];
  if (!promise) {
    promise = streamCache[identifier] = reader.read().then(result => {
      streamCache[identifier].result = {
        done: result.done,
        value: textDecoder.decode(result.value, {
          stream: true
        })
      };
    }).catch(e => {
      streamCache[identifier].error = e;
    });
  }
  if (promise.error) {
    throw promise.error;
  }
  if (promise.result === undefined) {
    throw promise;
  }
  let {
    done,
    value
  } = promise.result;
  let scriptTag = value ? /*#__PURE__*/React.createElement("script", {
    nonce: nonce,
    dangerouslySetInnerHTML: {
      __html: `window.__remixContext.streamController.enqueue(${escapeHtml(JSON.stringify(value))});`
    }
  }) : null;
  if (done) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, scriptTag, /*#__PURE__*/React.createElement("script", {
      nonce: nonce,
      dangerouslySetInnerHTML: {
        __html: `window.__remixContext.streamController.close();`
      }
    }));
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, scriptTag, /*#__PURE__*/React.createElement(React.Suspense, null, /*#__PURE__*/React.createElement(StreamTransfer, {
      context: context,
      identifier: identifier + 1,
      reader: reader,
      textDecoder: textDecoder,
      nonce: nonce
    })));
  }
}
function getSingleFetchDataStrategy(manifest, routeModules, getRouter) {
  return async ({
    request,
    matches,
    fetcherKey
  }) => {
    // Actions are simple and behave the same for navigations and fetchers
    if (request.method !== "GET") {
      return singleFetchActionStrategy(request, matches);
    }

    // Fetcher loads are singular calls to one loader
    if (fetcherKey) {
      return singleFetchLoaderFetcherStrategy(request, matches);
    }

    // Navigational loads are more complex...
    return singleFetchLoaderNavigationStrategy(manifest, routeModules, getRouter(), request, matches);
  };
}

// Actions are simple since they're singular calls to the server for both
// navigations and fetchers)
async function singleFetchActionStrategy(request, matches) {
  let actionMatch = matches.find(m => m.shouldLoad);
  invariant(actionMatch, "No action match found");
  let actionStatus = undefined;
  let result = await actionMatch.resolve(async handler => {
    let result = await handler(async () => {
      let url = singleFetchUrl(request.url);
      let init = await createRequestInit(request);
      let {
        data,
        status
      } = await fetchAndDecode(url, init);
      actionStatus = status;
      return unwrapSingleFetchResult(data, actionMatch.route.id);
    });
    return result;
  });
  if (isResponse(result.result) || isRouteErrorResponse(result.result)) {
    return {
      [actionMatch.route.id]: result
    };
  }

  // For non-responses, proxy along the statusCode via unstable_data()
  // (most notably for skipping action error revalidation)
  return {
    [actionMatch.route.id]: {
      type: result.type,
      result: unstable_data(result.result, actionStatus)
    }
  };
}

// Loaders are trickier since we only want to hit the server once, so we
// create a singular promise for all server-loader routes to latch onto.
async function singleFetchLoaderNavigationStrategy(manifest, routeModules, router, request, matches) {
  // Track which routes need a server load - in case we need to tack on a
  // `_routes` param
  let routesParams = new Set();

  // We only add `_routes` when one or more routes opts out of a load via
  // `shouldRevalidate` or `clientLoader`
  let foundOptOutRoute = false;

  // Deferreds for each route so we can be sure they've all loaded via
  // `match.resolve()`, and a singular promise that can tell us all routes
  // have been resolved
  let routeDfds = matches.map(() => createDeferred());
  let routesLoadedPromise = Promise.all(routeDfds.map(d => d.promise));

  // Deferred that we'll use for the call to the server that each match can
  // await and parse out it's specific result
  let singleFetchDfd = createDeferred();

  // Base URL and RequestInit for calls to the server
  let url = stripIndexParam(singleFetchUrl(request.url));
  let init = await createRequestInit(request);

  // We'll build up this results object as we loop through matches
  let results = {};
  let resolvePromise = Promise.all(matches.map(async (m, i) => m.resolve(async handler => {
    routeDfds[i].resolve();
    if (!m.shouldLoad) {
      var _routeModules$m$route;
      // If we're not yet initialized and this is the initial load, respect
      // `shouldLoad` because we're only dealing with `clientLoader.hydrate`
      // routes which will fall into the `clientLoader` section below.
      if (!router.state.initialized) {
        return;
      }

      // Otherwise, we opt out if we currently have data, a `loader`, and a
      // `shouldRevalidate` function.  This implies that the user opted out
      // via `shouldRevalidate`
      if (m.route.id in router.state.loaderData && manifest.routes[m.route.id].hasLoader && (_routeModules$m$route = routeModules[m.route.id]) !== null && _routeModules$m$route !== void 0 && _routeModules$m$route.shouldRevalidate) {
        foundOptOutRoute = true;
        return;
      }
    }

    // When a route has a client loader, it opts out of the singular call and
    // calls it's server loader via `serverLoader()` using a `?_routes` param
    if (manifest.routes[m.route.id].hasClientLoader) {
      if (manifest.routes[m.route.id].hasLoader) {
        foundOptOutRoute = true;
      }
      try {
        let result = await fetchSingleLoader(handler, url, init, m.route.id);
        results[m.route.id] = {
          type: "data",
          result
        };
      } catch (e) {
        results[m.route.id] = {
          type: "error",
          result: e
        };
      }
      return;
    }

    // Load this route on the server if it has a loader
    if (manifest.routes[m.route.id].hasLoader) {
      routesParams.add(m.route.id);
    }

    // Lump this match in with the others on a singular promise
    try {
      let result = await handler(async () => {
        let data = await singleFetchDfd.promise;
        return unwrapSingleFetchResults(data, m.route.id);
      });
      results[m.route.id] = {
        type: "data",
        result
      };
    } catch (e) {
      results[m.route.id] = {
        type: "error",
        result: e
      };
    }
  })));

  // Wait for all routes to resolve above before we make the HTTP call
  await routesLoadedPromise;

  // We can skip the server call:
  // - On initial hydration - only clientLoaders can pass through via `clientLoader.hydrate`
  // - If there are no routes to fetch from the server
  //
  // One exception - if we are performing an HDR revalidation we have to call
  // the server in case a new loader has shown up that the manifest doesn't yet
  // know about
  if ((!router.state.initialized || routesParams.size === 0) && !window.__remixHdrActive) {
    singleFetchDfd.resolve({});
  } else {
    try {
      // When one or more routes have opted out, we add a _routes param to
      // limit the loaders to those that have a server loader and did not
      // opt out
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set("_routes", matches.filter(m => routesParams.has(m.route.id)).map(m => m.route.id).join(","));
      }
      let data = await fetchAndDecode(url, init);
      singleFetchDfd.resolve(data.data);
    } catch (e) {
      singleFetchDfd.reject(e);
    }
  }
  await resolvePromise;
  return results;
}

// Fetcher loader calls are much simpler than navigational loader calls
async function singleFetchLoaderFetcherStrategy(request, matches) {
  let fetcherMatch = matches.find(m => m.shouldLoad);
  invariant(fetcherMatch, "No fetcher match found");
  let result = await fetcherMatch.resolve(async handler => {
    let url = stripIndexParam(singleFetchUrl(request.url));
    let init = await createRequestInit(request);
    return fetchSingleLoader(handler, url, init, fetcherMatch.route.id);
  });
  return {
    [fetcherMatch.route.id]: result
  };
}
function fetchSingleLoader(handler, url, init, routeId) {
  return handler(async () => {
    let singleLoaderUrl = new URL(url);
    singleLoaderUrl.searchParams.set("_routes", routeId);
    let {
      data
    } = await fetchAndDecode(singleLoaderUrl, init);
    return unwrapSingleFetchResults(data, routeId);
  });
}
function stripIndexParam(url) {
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return url;
}
function singleFetchUrl(reqUrl) {
  let url = typeof reqUrl === "string" ? new URL(reqUrl, window.location.origin) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = "_root.data";
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
  }
  return url;
}
async function fetchAndDecode(url, init) {
  let res = await fetch(url, init);
  // Don't do a hard check against the header here.  We'll get `text/x-script`
  // when we have a running server, but if folks want to prerender `.data` files
  // and serve them from a CDN we should let them come back with whatever
  // Content-Type their CDN provides and not force them to make sure `.data`
  // files are served as `text/x-script`.  We'll throw if we can't decode anyway.
  invariant(res.body, "No response body to decode");
  try {
    let decoded = await decodeViaTurboStream(res.body, window);
    return {
      status: res.status,
      data: decoded.value
    };
  } catch (e) {
    console.error(e);
    throw new Error(`Unable to decode turbo-stream response from URL: ${url.toString()}`);
  }
}

// Note: If you change this function please change the corresponding
// encodeViaTurboStream function in server-runtime
function decodeViaTurboStream(body, global) {
  return decode(body, {
    plugins: [(type, ...rest) => {
      // Decode Errors back into Error instances using the right type and with
      // the right (potentially undefined) stacktrace
      if (type === "SanitizedError") {
        let [name, message, stack] = rest;
        let Constructor = Error;
        // @ts-expect-error
        if (name && name in global && typeof global[name] === "function") {
          // @ts-expect-error
          Constructor = global[name];
        }
        let error = new Constructor(message);
        error.stack = stack;
        return {
          value: error
        };
      }
      if (type === "ErrorResponse") {
        let [data, status, statusText] = rest;
        return {
          value: new UNSAFE_ErrorResponseImpl(status, statusText, data)
        };
      }
      if (type === "SingleFetchRedirect") {
        return {
          value: {
            [UNSAFE_SingleFetchRedirectSymbol]: rest[0]
          }
        };
      }
    }, (type, value) => {
      if (type === "SingleFetchFallback") {
        return {
          value: undefined
        };
      }
      if (type === "SingleFetchClassInstance") {
        return {
          value
        };
      }
    }]
  });
}
function unwrapSingleFetchResults(results, routeId) {
  let redirect = results[UNSAFE_SingleFetchRedirectSymbol];
  if (redirect) {
    return unwrapSingleFetchResult(redirect, routeId);
  }
  return results[routeId] !== undefined ? unwrapSingleFetchResult(results[routeId], routeId) : null;
}
function unwrapSingleFetchResult(result, routeId) {
  if ("error" in result) {
    throw result.error;
  } else if ("redirect" in result) {
    let headers = {};
    if (result.revalidate) {
      headers["X-Remix-Revalidate"] = "yes";
    }
    if (result.reload) {
      headers["X-Remix-Reload-Document"] = "yes";
    }
    if (result.replace) {
      headers["X-Remix-Replace"] = "yes";
    }
    return redirect(result.redirect, {
      status: result.status,
      headers
    });
  } else if ("data" in result) {
    return result.data;
  } else {
    throw new Error(`No response found for routeId "${routeId}"`);
  }
}
function createDeferred() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async val => {
      res(val);
      try {
        await promise;
      } catch (e) {}
    };
    reject = async error => {
      rej(error);
      try {
        await promise;
      } catch (e) {}
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}

export { StreamTransfer, decodeViaTurboStream, getSingleFetchDataStrategy, singleFetchUrl };
