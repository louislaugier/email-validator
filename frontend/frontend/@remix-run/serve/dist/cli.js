#!/usr/bin/env node
/**
 * @remix-run/serve v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

require('@remix-run/node/install');
var fs = require('node:fs');
var os = require('node:os');
var path = require('node:path');
var url = require('node:url');
var node = require('@remix-run/node');
var express$1 = require('@remix-run/express');
var chokidar = require('chokidar');
var compression = require('compression');
var express = require('express');
var morgan = require('morgan');
var sourceMapSupport = require('source-map-support');
var getPort = require('get-port');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var url__default = /*#__PURE__*/_interopDefaultLegacy(url);
var chokidar__default = /*#__PURE__*/_interopDefaultLegacy(chokidar);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var morgan__default = /*#__PURE__*/_interopDefaultLegacy(morgan);
var sourceMapSupport__default = /*#__PURE__*/_interopDefaultLegacy(sourceMapSupport);
var getPort__default = /*#__PURE__*/_interopDefaultLegacy(getPort);

process.env.NODE_ENV = process.env.NODE_ENV ?? "production";
sourceMapSupport__default["default"].install({
  retrieveSourceMap: function (source) {
    let match = source.startsWith("file://");
    if (match) {
      let filePath = url__default["default"].fileURLToPath(source);
      let sourceMapPath = `${filePath}.map`;
      if (fs__default["default"].existsSync(sourceMapPath)) {
        return {
          url: source,
          map: fs__default["default"].readFileSync(sourceMapPath, "utf8")
        };
      }
    }
    return null;
  }
});
run();
function parseNumber(raw) {
  if (raw === undefined) return undefined;
  let maybe = Number(raw);
  if (Number.isNaN(maybe)) return undefined;
  return maybe;
}
async function run() {
  let port = parseNumber(process.env.PORT) ?? (await getPort__default["default"]({
    port: 3000
  }));
  let buildPathArg = process.argv[2];
  if (!buildPathArg) {
    console.error(`
  Usage: remix-serve <server-build-path> - e.g. remix-serve build/index.js`);
    process.exit(1);
  }
  let buildPath = path__default["default"].resolve(buildPathArg);
  let versionPath = path__default["default"].resolve(buildPath, "..", "version.txt");
  async function reimportServer() {
    Object.keys(require.cache).forEach(key => {
      if (key.startsWith(buildPath)) {
        delete require.cache[key];
      }
    });
    let stat = fs__default["default"].statSync(buildPath);

    // use a timestamp query parameter to bust the import cache
    return import(url__default["default"].pathToFileURL(buildPath).href + "?t=" + stat.mtimeMs);
  }
  function createDevRequestHandler(initialBuild) {
    let build = initialBuild;
    async function handleServerUpdate() {
      // 1. re-import the server build
      build = await reimportServer();
      // 2. tell Remix that this app server is now up-to-date and ready
      node.broadcastDevReady(build);
    }
    chokidar__default["default"].watch(versionPath, {
      ignoreInitial: true
    }).on("add", handleServerUpdate).on("change", handleServerUpdate);

    // wrap request handler to make sure its recreated with the latest build for every request
    return async (req, res, next) => {
      try {
        return express$1.createRequestHandler({
          build,
          mode: "development"
        })(req, res, next);
      } catch (error) {
        next(error);
      }
    };
  }
  let build = await reimportServer();
  node.installGlobals({
    nativeFetch: build.future.unstable_singleFetch
  });
  let onListen = () => {
    var _Object$values$flat$f;
    let address = process.env.HOST || ((_Object$values$flat$f = Object.values(os__default["default"].networkInterfaces()).flat().find(ip => String(ip === null || ip === void 0 ? void 0 : ip.family).includes("4") && !(ip !== null && ip !== void 0 && ip.internal))) === null || _Object$values$flat$f === void 0 ? void 0 : _Object$values$flat$f.address);
    if (!address) {
      console.log(`[remix-serve] http://localhost:${port}`);
    } else {
      console.log(`[remix-serve] http://localhost:${port} (http://${address}:${port})`);
    }
    if (process.env.NODE_ENV === "development") {
      void node.broadcastDevReady(build);
    }
  };
  let app = express__default["default"]();
  app.disable("x-powered-by");
  app.use(compression__default["default"]());
  app.use(build.publicPath, express__default["default"].static(build.assetsBuildDirectory, {
    immutable: true,
    maxAge: "1y"
  }));
  app.use(express__default["default"].static("public", {
    maxAge: "1h"
  }));
  app.use(morgan__default["default"]("tiny"));
  app.all("*", process.env.NODE_ENV === "development" ? createDevRequestHandler(build) : express$1.createRequestHandler({
    build,
    mode: process.env.NODE_ENV
  }));
  let server = process.env.HOST ? app.listen(port, process.env.HOST, onListen) : app.listen(port, onListen);
  ["SIGTERM", "SIGINT"].forEach(signal => {
    process.once(signal, () => server === null || server === void 0 ? void 0 : server.close(console.error));
  });
}
