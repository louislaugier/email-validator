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

var React = require('react');
var reactRouterDom = require('react-router-dom');
var components = require('./components.js');

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

class RemixErrorBoundary extends React__namespace.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application (even the HTML!) that will have no effect--the error page
    // continues to display. This gives us a mechanism to recover from the error
    // when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error || null,
        location: props.location
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    if (this.state.error) {
      return /*#__PURE__*/React__namespace.createElement(RemixRootDefaultErrorBoundary, {
        error: this.state.error,
        isOutsideRemixApp: true
      });
    } else {
      return this.props.children;
    }
  }
}

/**
 * When app's don't provide a root level ErrorBoundary, we default to this.
 */
function RemixRootDefaultErrorBoundary({
  error,
  isOutsideRemixApp
}) {
  console.error(error);
  let heyDeveloper = /*#__PURE__*/React__namespace.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
    }
  });
  if (reactRouterDom.isRouteErrorResponse(error)) {
    return /*#__PURE__*/React__namespace.createElement(BoundaryShell, {
      title: "Unhandled Thrown Response!"
    }, /*#__PURE__*/React__namespace.createElement("h1", {
      style: {
        fontSize: "24px"
      }
    }, error.status, " ", error.statusText), heyDeveloper);
  }
  let errorInstance;
  if (error instanceof Error) {
    errorInstance = error;
  } else {
    let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    errorInstance = new Error(errorString);
  }
  return /*#__PURE__*/React__namespace.createElement(BoundaryShell, {
    title: "Application Error!",
    isOutsideRemixApp: isOutsideRemixApp
  }, /*#__PURE__*/React__namespace.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /*#__PURE__*/React__namespace.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, errorInstance.stack), heyDeveloper);
}
function BoundaryShell({
  title,
  renderScripts,
  isOutsideRemixApp,
  children
}) {
  var _routeModules$root;
  let {
    routeModules
  } = components.useRemixContext();

  // Generally speaking, when the root route has a Layout we want to use that
  // as the app shell instead of the default `BoundaryShell` wrapper markup below.
  // This is true for `loader`/`action` errors, most render errors, and
  // `HydrateFallback` scenarios.

  // However, render errors thrown from the `Layout` present a bit of an issue
  // because if the `Layout` itself throws during the `ErrorBoundary` pass and
  // we bubble outside the `RouterProvider` to the wrapping `RemixErrorBoundary`,
  // by returning only `children` here we'll be trying to append a `<div>` to
  // the `document` and the DOM will throw, putting React into an error/hydration
  // loop.

  // Instead, if we're ever rendering from the outermost `RemixErrorBoundary`
  // during hydration that wraps `RouterProvider`, then we can't trust the
  // `Layout` and should fallback to the default app shell so we're always
  // returning an `<html>` document.
  if ((_routeModules$root = routeModules.root) !== null && _routeModules$root !== void 0 && _routeModules$root.Layout && !isOutsideRemixApp) {
    return children;
  }
  return /*#__PURE__*/React__namespace.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/React__namespace.createElement("head", null, /*#__PURE__*/React__namespace.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React__namespace.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /*#__PURE__*/React__namespace.createElement("title", null, title)), /*#__PURE__*/React__namespace.createElement("body", null, /*#__PURE__*/React__namespace.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, children, renderScripts ? /*#__PURE__*/React__namespace.createElement(components.Scripts, null) : null)));
}

exports.BoundaryShell = BoundaryShell;
exports.RemixErrorBoundary = RemixErrorBoundary;
exports.RemixRootDefaultErrorBoundary = RemixRootDefaultErrorBoundary;
