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
import { unstable_data, UNSAFE_ErrorResponseImpl, isRouteErrorResponse, stripBasename } from '@remix-run/router';
import { encode } from 'turbo-stream';
import { sanitizeError, sanitizeErrors } from './errors.js';
import { getDocumentHeaders } from './headers.js';
import { ServerMode } from './mode.js';
import { isResponse, isRedirectStatusCode } from './responses.js';

const SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
// We can't use a 3xx status or else the `fetch()` would follow the redirect.
// We need to communicate the redirect back as data so we can act on it in the
// client side router.  We use a 202 to avoid any automatic caching we might
// get from a 200 since a "temporary" redirect should not be cached.  This lets
// the user control cache behavior via Cache-Control
const SINGLE_FETCH_REDIRECT_STATUS = 202;
function getSingleFetchDataStrategy({
  isActionDataRequest,
  loadRouteIds
} = {}) {
  return async ({
    request,
    matches
  }) => {
    // Don't call loaders on action data requests
    if (isActionDataRequest && request.method === "GET") {
      return {};
    }

    // Only run opt-in loaders when fine-grained revalidation is enabled
    let matchesToLoad = loadRouteIds ? matches.filter(m => loadRouteIds.includes(m.route.id)) : matches;
    let results = await Promise.all(matchesToLoad.map(match => match.resolve()));
    return results.reduce((acc, result, i) => Object.assign(acc, {
      [matchesToLoad[i].route.id]: result
    }), {});
  };
}
async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    let handlerRequest = new Request(handlerUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers,
      signal: request.signal,
      ...(request.body ? {
        duplex: "half"
      } : undefined)
    });
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      unstable_dataStrategy: getSingleFetchDataStrategy({
        isActionDataRequest: true
      })
    });

    // Unlike `handleDataRequest`, when singleFetch is enabled, query does
    // let non-Response return values through
    if (isResponse(result)) {
      return {
        result: getSingleFetchRedirect(result.status, result.headers, build.basename),
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    let context = result;
    let headers = getDocumentHeaders(build, context);
    if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
      return {
        result: getSingleFetchRedirect(context.statusCode, headers, build.basename),
        headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }

    // Sanitize errors outside of development environments
    if (context.errors) {
      Object.values(context.errors).forEach(err => {
        // @ts-expect-error This is "private" from users but intended for internal use
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let singleFetchResult;
    if (context.errors) {
      singleFetchResult = {
        error: Object.values(context.errors)[0]
      };
    } else {
      singleFetchResult = {
        data: Object.values(context.actionData || {})[0]
      };
    }
    return {
      result: singleFetchResult,
      headers,
      status: context.statusCode
    };
  } catch (error) {
    handleError(error);
    // These should only be internal remix errors, no need to deal with responseStubs
    return {
      result: {
        error
      },
      headers: new Headers(),
      status: 500
    };
  }
}
async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    var _URL$searchParams$get;
    let handlerRequest = new Request(handlerUrl, {
      headers: request.headers,
      signal: request.signal
    });
    let loadRouteIds = ((_URL$searchParams$get = new URL(request.url).searchParams.get("_routes")) === null || _URL$searchParams$get === void 0 ? void 0 : _URL$searchParams$get.split(",")) || undefined;
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      unstable_dataStrategy: getSingleFetchDataStrategy({
        loadRouteIds
      })
    });
    if (isResponse(result)) {
      return {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(result.status, result.headers, build.basename)
        },
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }
    let context = result;
    let headers = getDocumentHeaders(build, context);
    if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
      return {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(context.statusCode, headers, build.basename)
        },
        headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      };
    }

    // Sanitize errors outside of development environments
    if (context.errors) {
      Object.values(context.errors).forEach(err => {
        // @ts-expect-error This is "private" from users but intended for internal use
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }

    // Aggregate results based on the matches we intended to load since we get
    // `null` values back in `context.loaderData` for routes we didn't load
    let results = {};
    let loadedMatches = loadRouteIds ? context.matches.filter(m => m.route.loader && loadRouteIds.includes(m.route.id)) : context.matches;
    loadedMatches.forEach(m => {
      var _context$loaderData, _context$errors;
      let data = (_context$loaderData = context.loaderData) === null || _context$loaderData === void 0 ? void 0 : _context$loaderData[m.route.id];
      let error = (_context$errors = context.errors) === null || _context$errors === void 0 ? void 0 : _context$errors[m.route.id];
      if (error !== undefined) {
        results[m.route.id] = {
          error
        };
      } else if (data !== undefined) {
        results[m.route.id] = {
          data
        };
      }
    });
    return {
      result: results,
      headers,
      status: context.statusCode
    };
  } catch (error) {
    handleError(error);
    // These should only be internal remix errors, no need to deal with responseStubs
    return {
      result: {
        root: {
          error
        }
      },
      headers: new Headers(),
      status: 500
    };
  }
}
function getSingleFetchRedirect(status, headers, basename) {
  let redirect = headers.get("Location");
  if (basename) {
    redirect = stripBasename(redirect, basename) || redirect;
  }
  return {
    redirect,
    status,
    revalidate:
    // Technically X-Remix-Revalidate isn't needed here - that was an implementation
    // detail of ?_data requests as our way to tell the front end to revalidate when
    // we didn't have a response body to include that information in.
    // With single fetch, we tell the front end via this revalidate boolean field.
    // However, we're respecting it for now because it may be something folks have
    // used in their own responses
    // TODO(v3): Consider removing or making this official public API
    headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie"),
    reload: headers.has("X-Remix-Reload-Document"),
    replace: headers.has("X-Remix-Replace")
  };
}

// Note: If you change this function please change the corresponding
// decodeViaTurboStream function in server-runtime
function encodeViaTurboStream(data, requestSignal, streamTimeout, serverMode) {
  let controller = new AbortController();
  // How long are we willing to wait for all of the promises in `data` to resolve
  // before timing out?  We default this to 50ms shorter than the default value for
  // `ABORT_DELAY` in our built-in `entry.server.tsx` so that once we reject we
  // have time to flush the rejections down through React's rendering stream before `
  // we call abort() on that.  If the user provides their own it's up to them to
  // decouple the aborting of the stream from the aborting of React's renderToPipeableStream
  let timeoutId = setTimeout(() => controller.abort(new Error("Server Timeout")), typeof streamTimeout === "number" ? streamTimeout : 4950);
  requestSignal.addEventListener("abort", () => clearTimeout(timeoutId));
  return encode(data, {
    signal: controller.signal,
    plugins: [value => {
      // Even though we sanitized errors on context.errors prior to responding,
      // we still need to handle this for any deferred data that rejects with an
      // Error - as those will not be sanitized yet
      if (value instanceof Error) {
        let {
          name,
          message,
          stack
        } = serverMode === ServerMode.Production ? sanitizeError(value, serverMode) : value;
        return ["SanitizedError", name, message, stack];
      }
      if (value instanceof UNSAFE_ErrorResponseImpl) {
        let {
          data,
          status,
          statusText
        } = value;
        return ["ErrorResponse", data, status, statusText];
      }
      if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) {
        return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
      }
    }],
    postPlugins: [value => {
      if (!value) return;
      if (typeof value !== "object") return;
      return ["SingleFetchClassInstance", Object.fromEntries(Object.entries(value))];
    }, () => ["SingleFetchFallback"]]
  });
}
function data(value, init) {
  return unstable_data(value, init);
}

// prettier-ignore
// eslint-disable-next-line

export { SINGLE_FETCH_REDIRECT_STATUS, SingleFetchRedirectSymbol, data, encodeViaTurboStream, getSingleFetchDataStrategy, getSingleFetchRedirect, singleFetchAction, singleFetchLoaders };
