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
var router = require('@remix-run/router');
var resolveFileUrl = require('./resolve-file-url.js');

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

var path__namespace = /*#__PURE__*/_interopNamespace(path);

// Style collection logic adapted from solid-start: https://github.com/solidjs/solid-start

// Vite doesn't expose these so we just copy the list for now
// https://github.com/vitejs/vite/blob/d6bde8b03d433778aaed62afc2be0630c8131908/packages/vite/src/node/constants.ts#L49C23-L50
const cssFileRegExp = /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
// https://github.com/vitejs/vite/blob/d6bde8b03d433778aaed62afc2be0630c8131908/packages/vite/src/node/plugins/css.ts#L160
const cssModulesRegExp = new RegExp(`\\.module${cssFileRegExp.source}`);
const isCssFile = file => cssFileRegExp.test(file);
const isCssModulesFile = file => cssModulesRegExp.test(file);

// https://vitejs.dev/guide/features#disabling-css-injection-into-the-page
// https://github.com/vitejs/vite/blob/561b940f6f963fbb78058a6e23b4adad53a2edb9/packages/vite/src/node/plugins/css.ts#L194
// https://vitejs.dev/guide/features#static-assets
// https://github.com/vitejs/vite/blob/561b940f6f963fbb78058a6e23b4adad53a2edb9/packages/vite/src/node/utils.ts#L309-L310
const cssUrlParamsWithoutSideEffects = ["url", "inline", "raw", "inline-css"];
const isCssUrlWithoutSideEffects = url => {
  let queryString = url.split("?")[1];
  if (!queryString) {
    return false;
  }
  let params = new URLSearchParams(queryString);
  for (let paramWithoutSideEffects of cssUrlParamsWithoutSideEffects) {
    if (
    // Parameter is blank and not explicitly set, i.e. "?url", not "?url="
    params.get(paramWithoutSideEffects) === "" && !url.includes(`?${paramWithoutSideEffects}=`) && !url.includes(`&${paramWithoutSideEffects}=`)) {
      return true;
    }
  }
  return false;
};
const getStylesForFiles = async ({
  viteDevServer,
  rootDirectory,
  cssModulesManifest,
  files
}) => {
  let styles = {};
  let deps = new Set();
  try {
    for (let file of files) {
      let normalizedPath = path__namespace.resolve(rootDirectory, file).replace(/\\/g, "/");
      let node = await viteDevServer.moduleGraph.getModuleById(normalizedPath);

      // If the module is only present in the client module graph, the module
      // won't have been found on the first request to the server. If so, we
      // request the module so it's in the module graph, then try again.
      if (!node) {
        try {
          await viteDevServer.transformRequest(resolveFileUrl.resolveFileUrl({
            rootDirectory
          }, normalizedPath));
        } catch (err) {
          console.error(err);
        }
        node = await viteDevServer.moduleGraph.getModuleById(normalizedPath);
      }
      if (!node) {
        console.log(`Could not resolve module for file: ${file}`);
        continue;
      }
      await findDeps(viteDevServer, node, deps);
    }
  } catch (err) {
    console.error(err);
  }
  for (let dep of deps) {
    if (dep.file && isCssFile(dep.file) && !isCssUrlWithoutSideEffects(dep.url) // Ignore styles that resolved as URLs, inline or raw. These shouldn't get injected.
    ) {
      try {
        let css = isCssModulesFile(dep.file) ? cssModulesManifest[dep.file] : (await viteDevServer.ssrLoadModule(dep.url)).default;
        if (css === undefined) {
          throw new Error();
        }
        styles[dep.url] = css;
      } catch {
        console.warn(`Could not load ${dep.file}`);
        // this can happen with dynamically imported modules, I think
        // because the Vite module graph doesn't distinguish between
        // static and dynamic imports? TODO investigate, submit fix
      }
    }
  }
  return Object.entries(styles).map(([fileName, css], i) => [`\n/* ${fileName
  // Escape comment syntax in file paths
  .replace(/\/\*/g, "/\\*").replace(/\*\//g, "*\\/")} */`, css]).flat().join("\n") || undefined;
};
const findDeps = async (vite, node, deps) => {
  // since `ssrTransformResult.deps` contains URLs instead of `ModuleNode`s, this process is asynchronous.
  // instead of using `await`, we resolve all branches in parallel.
  let branches = [];
  async function addFromNode(node) {
    if (!deps.has(node)) {
      deps.add(node);
      await findDeps(vite, node, deps);
    }
  }
  async function addFromUrl(url) {
    let node = await vite.moduleGraph.getModuleByUrl(url);
    if (node) {
      await addFromNode(node);
    }
  }
  if (node.ssrTransformResult) {
    if (node.ssrTransformResult.deps) {
      node.ssrTransformResult.deps.forEach(url => branches.push(addFromUrl(url)));
    }
  } else {
    node.importedModules.forEach(node => branches.push(addFromNode(node)));
  }
  await Promise.all(branches);
};
const groupRoutesByParentId = manifest => {
  let routes = {};
  Object.values(manifest).forEach(route => {
    let parentId = route.parentId || "";
    if (!routes[parentId]) {
      routes[parentId] = [];
    }
    routes[parentId].push(route);
  });
  return routes;
};

// Create a map of routes by parentId to use recursively instead of
// repeatedly filtering the manifest.
const createRoutes = (manifest, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) => {
  return (routesByParentId[parentId] || []).map(route => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
};
const getStylesForUrl = async ({
  viteDevServer,
  rootDirectory,
  remixConfig,
  entryClientFilePath,
  cssModulesManifest,
  build,
  url
}) => {
  var _matchRoutes;
  if (url === undefined || url.includes("?_data=")) {
    return undefined;
  }
  let routes = createRoutes(build.routes);
  let appPath = path__namespace.relative(process.cwd(), remixConfig.appDirectory);
  let documentRouteFiles = ((_matchRoutes = router.matchRoutes(routes, url, build.basename)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.map(match => path__namespace.resolve(appPath, remixConfig.routes[match.route.id].file))) ?? [];
  let styles = await getStylesForFiles({
    viteDevServer,
    rootDirectory,
    cssModulesManifest,
    files: [
    // Always include the client entry file when crawling the module graph for CSS
    path__namespace.relative(rootDirectory, entryClientFilePath),
    // Then include any styles from the matched routes
    ...documentRouteFiles]
  });
  return styles;
};

exports.getStylesForUrl = getStylesForUrl;
exports.isCssModulesFile = isCssModulesFile;
exports.isCssUrlWithoutSideEffects = isCssUrlWithoutSideEffects;
