/**
 * @remix-run/dev v2.12.1
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

var path = require('node:path');
var fse = require('fs-extra');
var pc = require('picocolors');
var plugin = require('./plugin.js');
var invariant = require('../invariant.js');
var importViteEsmSync = require('./import-vite-esm-sync.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fse__default = /*#__PURE__*/_interopDefaultLegacy(fse);
var pc__default = /*#__PURE__*/_interopDefaultLegacy(pc);

function getAddressableRoutes(routes) {
  let nonAddressableIds = new Set();
  for (let id in routes) {
    let route = routes[id];

    // We omit the parent route of index routes since the index route takes ownership of its parent's path
    if (route.index) {
      invariant["default"](route.parentId, `Expected index route "${route.id}" to have "parentId" set`);
      nonAddressableIds.add(route.parentId);
    }

    // We omit pathless routes since they can only be addressed via descendant routes
    if (typeof route.path !== "string" && !route.index) {
      nonAddressableIds.add(id);
    }
  }
  return Object.values(routes).filter(route => !nonAddressableIds.has(route.id));
}
function getRouteBranch(routes, routeId) {
  let branch = [];
  let currentRouteId = routeId;
  while (currentRouteId) {
    let route = routes[currentRouteId];
    invariant["default"](route, `Missing route for ${currentRouteId}`);
    branch.push(route);
    currentRouteId = route.parentId;
  }
  return branch.reverse();
}
async function getServerBuilds(ctx) {
  let {
    rootDirectory
  } = ctx;
  // eslint-disable-next-line prefer-let/prefer-let -- Improve type narrowing
  const {
    routes,
    serverBuildFile,
    serverBundles,
    appDirectory
  } = ctx.remixConfig;
  let serverBuildDirectory = plugin.getServerBuildDirectory(ctx);
  if (!serverBundles) {
    return {
      serverBuilds: [{
        ssr: true
      }],
      buildManifest: {
        routes
      }
    };
  }
  let {
    normalizePath
  } = await import('vite');
  let resolvedAppDirectory = path__default["default"].resolve(rootDirectory, appDirectory);
  let rootRelativeRoutes = Object.fromEntries(Object.entries(routes).map(([id, route]) => {
    let filePath = path__default["default"].join(resolvedAppDirectory, route.file);
    let rootRelativeFilePath = normalizePath(path__default["default"].relative(rootDirectory, filePath));
    return [id, {
      ...route,
      file: rootRelativeFilePath
    }];
  }));
  let buildManifest = {
    serverBundles: {},
    routeIdToServerBundleId: {},
    routes: rootRelativeRoutes
  };
  let serverBundleBuildConfigById = new Map();
  await Promise.all(getAddressableRoutes(routes).map(async route => {
    let branch = getRouteBranch(routes, route.id);
    let serverBundleId = await serverBundles({
      branch: branch.map(route => plugin.configRouteToBranchRoute({
        ...route,
        // Ensure absolute paths are passed to the serverBundles function
        file: path__default["default"].join(resolvedAppDirectory, route.file)
      }))
    });
    if (typeof serverBundleId !== "string") {
      throw new Error(`The "serverBundles" function must return a string`);
    }
    if (!/^[a-zA-Z0-9-_]+$/.test(serverBundleId)) {
      throw new Error(`The "serverBundles" function must only return strings containing alphanumeric characters, hyphens and underscores.`);
    }
    buildManifest.routeIdToServerBundleId[route.id] = serverBundleId;
    let relativeServerBundleDirectory = path__default["default"].relative(rootDirectory, path__default["default"].join(serverBuildDirectory, serverBundleId));
    let serverBuildConfig = serverBundleBuildConfigById.get(serverBundleId);
    if (!serverBuildConfig) {
      buildManifest.serverBundles[serverBundleId] = {
        id: serverBundleId,
        file: normalizePath(path__default["default"].join(relativeServerBundleDirectory, serverBuildFile))
      };
      serverBuildConfig = {
        routes: {},
        serverBundleId
      };
      serverBundleBuildConfigById.set(serverBundleId, serverBuildConfig);
    }
    for (let route of branch) {
      serverBuildConfig.routes[route.id] = route;
    }
  }));
  let serverBuilds = Array.from(serverBundleBuildConfigById.values()).map(serverBundleBuildConfig => {
    let serverBuild = {
      ssr: true,
      serverBundleBuildConfig
    };
    return serverBuild;
  });
  return {
    serverBuilds,
    buildManifest
  };
}
async function cleanBuildDirectory(viteConfig, ctx) {
  let buildDirectory = ctx.remixConfig.buildDirectory;
  let isWithinRoot = () => {
    let relativePath = path__default["default"].relative(ctx.rootDirectory, buildDirectory);
    return !relativePath.startsWith("..") && !path__default["default"].isAbsolute(relativePath);
  };
  if (viteConfig.build.emptyOutDir ?? isWithinRoot()) {
    await fse__default["default"].remove(buildDirectory);
  }
}
function getViteManifestPaths(ctx, serverBuilds) {
  let buildRelative = pathname => path__default["default"].resolve(ctx.remixConfig.buildDirectory, pathname);
  let viteManifestPaths = [{
    srcPath: "client/.vite/manifest.json",
    destPath: ".vite/client-manifest.json"
  }, ...serverBuilds.map(({
    serverBundleBuildConfig
  }) => {
    let serverBundleId = serverBundleBuildConfig === null || serverBundleBuildConfig === void 0 ? void 0 : serverBundleBuildConfig.serverBundleId;
    let serverBundlePath = serverBundleId ? serverBundleId + "/" : "";
    let serverBundleSuffix = serverBundleId ? serverBundleId + "-" : "";
    return {
      srcPath: `server/${serverBundlePath}.vite/manifest.json`,
      destPath: `.vite/server-${serverBundleSuffix}manifest.json`
    };
  })].map(({
    srcPath,
    destPath
  }) => ({
    srcPath: buildRelative(srcPath),
    destPath: buildRelative(destPath)
  }));
  return viteManifestPaths;
}
async function build(root, {
  assetsInlineLimit,
  clearScreen,
  config: configFile,
  emptyOutDir,
  force,
  logLevel,
  minify,
  mode,
  sourcemapClient,
  sourcemapServer
}) {
  var _remixConfig$buildEnd;
  // Ensure Vite's ESM build is preloaded at the start of the process
  // so it can be accessed synchronously via `importViteEsmSync`
  await importViteEsmSync.preloadViteEsm();
  let viteConfig = await plugin.resolveViteConfig({
    configFile,
    mode,
    root
  });

  // eslint-disable-next-line prefer-let/prefer-let -- Improve type narrowing
  const ctx = await plugin.extractRemixPluginContext(viteConfig);
  if (!ctx) {
    console.error(pc__default["default"].red("Remix Vite plugin not found in Vite config"));
    process.exit(1);
  }
  let {
    remixConfig
  } = ctx;
  let vite = await import('vite');
  async function viteBuild({
    ssr,
    serverBundleBuildConfig
  }) {
    await vite.build({
      root,
      mode,
      configFile,
      build: {
        assetsInlineLimit,
        emptyOutDir,
        minify,
        ssr,
        sourcemap: ssr ? sourcemapServer : sourcemapClient
      },
      optimizeDeps: {
        force
      },
      clearScreen,
      logLevel,
      ...(serverBundleBuildConfig ? {
        __remixServerBundleBuildConfig: serverBundleBuildConfig
      } : {})
    });
  }
  await cleanBuildDirectory(viteConfig, ctx);

  // Run the Vite client build first
  await viteBuild({
    ssr: false
  });

  // Then run Vite SSR builds in parallel
  let {
    serverBuilds,
    buildManifest
  } = await getServerBuilds(ctx);
  await Promise.all(serverBuilds.map(viteBuild));
  let viteManifestPaths = getViteManifestPaths(ctx, serverBuilds);
  await Promise.all(viteManifestPaths.map(async ({
    srcPath,
    destPath
  }) => {
    let manifestExists = await fse__default["default"].pathExists(srcPath);
    if (!manifestExists) return;

    // Move/delete original Vite manifest file
    if (ctx.viteManifestEnabled) {
      await fse__default["default"].ensureDir(path__default["default"].dirname(destPath));
      await fse__default["default"].move(srcPath, destPath);
    } else {
      await fse__default["default"].remove(srcPath);
    }

    // Remove .vite dir if it's now empty
    let viteDir = path__default["default"].dirname(srcPath);
    let viteDirFiles = await fse__default["default"].readdir(viteDir);
    if (viteDirFiles.length === 0) {
      await fse__default["default"].remove(viteDir);
    }
  }));
  if (ctx.remixConfig.manifest) {
    await fse__default["default"].ensureDir(path__default["default"].join(ctx.remixConfig.buildDirectory, ".remix"));
    await fse__default["default"].writeFile(path__default["default"].join(ctx.remixConfig.buildDirectory, ".remix", "manifest.json"), JSON.stringify(buildManifest, null, 2), "utf-8");
  }
  await ((_remixConfig$buildEnd = remixConfig.buildEnd) === null || _remixConfig$buildEnd === void 0 ? void 0 : _remixConfig$buildEnd.call(remixConfig, {
    buildManifest,
    remixConfig,
    viteConfig
  }));
}

exports.build = build;
