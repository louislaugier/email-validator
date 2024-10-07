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

var node_crypto = require('node:crypto');
var path = require('node:path');
var url = require('node:url');
var fse = require('fs-extra');
var babel = require('@babel/core');
var serverRuntime = require('@remix-run/server-runtime');
var esModuleLexer = require('es-module-lexer');
var jsesc = require('jsesc');
var pick = require('lodash/pick');
var omit = require('lodash/omit');
var pc = require('picocolors');
var config = require('../config.js');
var invariant = require('../invariant.js');
var nodeAdapter = require('./node-adapter.js');
var styles = require('./styles.js');
var vmod = require('./vmod.js');
var resolveFileUrl = require('./resolve-file-url.js');
var combineUrls = require('./combine-urls.js');
var removeExports = require('./remove-exports.js');
var importViteEsmSync = require('./import-vite-esm-sync.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
var url__namespace = /*#__PURE__*/_interopNamespace(url);
var fse__namespace = /*#__PURE__*/_interopNamespace(fse);
var babel__default = /*#__PURE__*/_interopDefaultLegacy(babel);
var jsesc__default = /*#__PURE__*/_interopDefaultLegacy(jsesc);
var pick__default = /*#__PURE__*/_interopDefaultLegacy(pick);
var omit__default = /*#__PURE__*/_interopDefaultLegacy(omit);
var pc__default = /*#__PURE__*/_interopDefaultLegacy(pc);

// We can only import types from Vite at the top level since we're in a CJS
async function resolveViteConfig({
  configFile,
  mode,
  root
}) {
  let vite = await import('vite');
  let viteConfig = await vite.resolveConfig({
    mode,
    configFile,
    root
  }, "build",
  // command
  "production",
  // default mode
  "production" // default NODE_ENV
  );
  if (typeof viteConfig.build.manifest === "string") {
    throw new Error("Custom Vite manifest paths are not supported");
  }
  return viteConfig;
}
async function extractRemixPluginContext(viteConfig) {
  return viteConfig["__remixPluginContext"];
}
async function loadVitePluginContext({
  configFile,
  root
}) {
  if (!root) {
    root = process.env.REMIX_ROOT || process.cwd();
  }
  configFile = configFile ?? config.findConfig(root, "vite.config", [".ts", ".cts", ".mts", ".js", ".cjs", ".mjs"]);

  // V3 TODO: Vite config should not be optional
  if (!configFile) {
    return;
  }
  let viteConfig = await resolveViteConfig({
    configFile,
    root
  });
  return await extractRemixPluginContext(viteConfig);
}
const supportedRemixEsbuildConfigKeys = ["appDirectory", "future", "ignoredRouteFiles", "routes", "serverModuleFormat"];
const SERVER_ONLY_ROUTE_EXPORTS = ["loader", "action", "headers"];
const CLIENT_ROUTE_EXPORTS = ["clientAction", "clientLoader", "default", "ErrorBoundary", "handle", "HydrateFallback", "Layout", "links", "meta", "shouldRevalidate"];

/** This is used to manage a build optimization to remove unused route exports
from the client build output. This is important in cases where custom route
exports are only ever used on the server. Without this optimization we can't
tree-shake any unused custom exports because routes are entry points. */
const BUILD_CLIENT_ROUTE_QUERY_STRING = "?__remix-build-client-route";

// Only expose a subset of route properties to the "serverBundles" function
const branchRouteProperties = ["id", "path", "file", "index"];
const configRouteToBranchRoute = configRoute => pick__default["default"](configRoute, branchRouteProperties);
const excludedRemixConfigPresetKeys = ["presets"];
let serverBuildId = vmod.id("server-build");
let serverManifestId = vmod.id("server-manifest");
let browserManifestId = vmod.id("browser-manifest");
let hmrRuntimeId = vmod.id("hmr-runtime");
let injectHmrRuntimeId = vmod.id("inject-hmr-runtime");
const resolveRelativeRouteFilePath = (route, remixConfig) => {
  let vite = importViteEsmSync.importViteEsmSync();
  let file = route.file;
  let fullPath = path__namespace.resolve(remixConfig.appDirectory, file);
  return vite.normalizePath(fullPath);
};
let vmods = [serverBuildId, serverManifestId, browserManifestId];
const invalidateVirtualModules = viteDevServer => {
  vmods.forEach(vmod$1 => {
    let mod = viteDevServer.moduleGraph.getModuleById(vmod.resolve(vmod$1));
    if (mod) {
      viteDevServer.moduleGraph.invalidateModule(mod);
    }
  });
};
const getHash = (source, maxLength) => {
  let hash = node_crypto.createHash("sha256").update(source).digest("hex");
  return typeof maxLength === "number" ? hash.slice(0, maxLength) : hash;
};
const resolveChunk = (ctx, viteManifest, absoluteFilePath) => {
  let vite = importViteEsmSync.importViteEsmSync();
  let rootRelativeFilePath = vite.normalizePath(path__namespace.relative(ctx.rootDirectory, absoluteFilePath));
  let entryChunk = viteManifest[rootRelativeFilePath + BUILD_CLIENT_ROUTE_QUERY_STRING] ?? viteManifest[rootRelativeFilePath];
  if (!entryChunk) {
    let knownManifestKeys = Object.keys(viteManifest).map(key => '"' + key + '"').join(", ");
    throw new Error(`No manifest entry found for "${rootRelativeFilePath}". Known manifest keys: ${knownManifestKeys}`);
  }
  return entryChunk;
};
const getRemixManifestBuildAssets = (ctx, viteManifest, entryFilePath, prependedAssetFilePaths = []) => {
  let entryChunk = resolveChunk(ctx, viteManifest, entryFilePath);

  // This is here to support prepending client entry assets to the root route
  let prependedAssetChunks = prependedAssetFilePaths.map(filePath => resolveChunk(ctx, viteManifest, filePath));
  let chunks = resolveDependantChunks(viteManifest, [...prependedAssetChunks, entryChunk]);
  return {
    module: `${ctx.remixConfig.publicPath}${entryChunk.file}`,
    imports: dedupe(chunks.flatMap(e => e.imports ?? [])).map(imported => {
      return `${ctx.remixConfig.publicPath}${viteManifest[imported].file}`;
    }) ?? [],
    css: dedupe(chunks.flatMap(e => e.css ?? [])).map(href => {
      return `${ctx.remixConfig.publicPath}${href}`;
    }) ?? []
  };
};
function resolveDependantChunks(viteManifest, entryChunks) {
  let chunks = new Set();
  function walk(chunk) {
    if (chunks.has(chunk)) {
      return;
    }
    chunks.add(chunk);
    if (chunk.imports) {
      for (let importKey of chunk.imports) {
        walk(viteManifest[importKey]);
      }
    }
  }
  for (let entryChunk of entryChunks) {
    walk(entryChunk);
  }
  return Array.from(chunks);
}
function dedupe(array) {
  return [...new Set(array)];
}
const writeFileSafe = async (file, contents) => {
  await fse__namespace.ensureDir(path__namespace.dirname(file));
  await fse__namespace.writeFile(file, contents);
};
const getRouteManifestModuleExports = async (viteChildCompiler, ctx) => {
  let entries = await Promise.all(Object.entries(ctx.remixConfig.routes).map(async ([key, route]) => {
    let sourceExports = await getRouteModuleExports(viteChildCompiler, ctx, route.file);
    return [key, sourceExports];
  }));
  return Object.fromEntries(entries);
};
const getRouteModuleExports = async (viteChildCompiler, ctx, routeFile, readRouteFile) => {
  if (!viteChildCompiler) {
    throw new Error("Vite child compiler not found");
  }

  // We transform the route module code with the Vite child compiler so that we
  // can parse the exports from non-JS files like MDX. This ensures that we can
  // understand the exports from anything that Vite can compile to JS, not just
  // the route file formats that the Remix compiler historically supported.

  let ssr = true;
  let {
    pluginContainer,
    moduleGraph
  } = viteChildCompiler;
  let routePath = path__namespace.resolve(ctx.remixConfig.appDirectory, routeFile);
  let url = resolveFileUrl.resolveFileUrl(ctx, routePath);
  let resolveId = async () => {
    let result = await pluginContainer.resolveId(url, undefined, {
      ssr
    });
    if (!result) throw new Error(`Could not resolve module ID for ${url}`);
    return result.id;
  };
  let [id, code] = await Promise.all([resolveId(), (readRouteFile === null || readRouteFile === void 0 ? void 0 : readRouteFile()) ?? fse__namespace.readFile(routePath, "utf-8"),
  // pluginContainer.transform(...) fails if we don't do this first:
  moduleGraph.ensureEntryFromUrl(url, ssr)]);
  let transformed = await pluginContainer.transform(code, id, {
    ssr
  });
  let [, exports] = esModuleLexer.parse(transformed.code);
  let exportNames = exports.map(e => e.n);
  return exportNames;
};
const getServerBundleBuildConfig = viteUserConfig => {
  if (!("__remixServerBundleBuildConfig" in viteUserConfig) || !viteUserConfig.__remixServerBundleBuildConfig) {
    return null;
  }
  return viteUserConfig.__remixServerBundleBuildConfig;
};
let getServerBuildDirectory = ctx => path__namespace.join(ctx.remixConfig.buildDirectory, "server", ...(ctx.serverBundleBuildConfig ? [ctx.serverBundleBuildConfig.serverBundleId] : []));
let getClientBuildDirectory = remixConfig => path__namespace.join(remixConfig.buildDirectory, "client");
let defaultEntriesDir = path__namespace.resolve(__dirname, "..", "config", "defaults");
let defaultEntries = fse__namespace.readdirSync(defaultEntriesDir).map(filename => path__namespace.join(defaultEntriesDir, filename));
invariant["default"](defaultEntries.length > 0, "No default entries found");
let mergeRemixConfig = (...configs) => {
  let reducer = (configA, configB) => {
    let mergeRequired = key => configA[key] !== undefined && configB[key] !== undefined;
    return {
      ...configA,
      ...configB,
      ...(mergeRequired("buildEnd") ? {
        buildEnd: async (...args) => {
          var _configA$buildEnd, _configB$buildEnd;
          await Promise.all([(_configA$buildEnd = configA.buildEnd) === null || _configA$buildEnd === void 0 ? void 0 : _configA$buildEnd.call(configA, ...args), (_configB$buildEnd = configB.buildEnd) === null || _configB$buildEnd === void 0 ? void 0 : _configB$buildEnd.call(configB, ...args)]);
        }
      } : {}),
      ...(mergeRequired("future") ? {
        future: {
          ...configA.future,
          ...configB.future
        }
      } : {}),
      ...(mergeRequired("ignoredRouteFiles") ? {
        ignoredRouteFiles: Array.from(new Set([...(configA.ignoredRouteFiles ?? []), ...(configB.ignoredRouteFiles ?? [])]))
      } : {}),
      ...(mergeRequired("presets") ? {
        presets: [...(configA.presets ?? []), ...(configB.presets ?? [])]
      } : {}),
      ...(mergeRequired("routes") ? {
        routes: async (...args) => {
          var _configA$routes, _configB$routes;
          let [routesA, routesB] = await Promise.all([(_configA$routes = configA.routes) === null || _configA$routes === void 0 ? void 0 : _configA$routes.call(configA, ...args), (_configB$routes = configB.routes) === null || _configB$routes === void 0 ? void 0 : _configB$routes.call(configB, ...args)]);
          return {
            ...routesA,
            ...routesB
          };
        }
      } : {})
    };
  };
  return configs.reduce(reducer, {});
};
let remixDevLoadContext = () => ({});
let setRemixDevLoadContext = loadContext => {
  remixDevLoadContext = loadContext;
};

// Inlined from https://github.com/jsdf/deep-freeze
let deepFreeze = o => {
  Object.freeze(o);
  let oIsFunction = typeof o === "function";
  let hasOwnProp = Object.prototype.hasOwnProperty;
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (hasOwnProp.call(o, prop) && (oIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
};
const remixVitePlugin = (remixUserConfig = {}) => {
  // Prevent mutations to the user config
  remixUserConfig = deepFreeze(remixUserConfig);
  let viteCommand;
  let viteUserConfig;
  let viteConfigEnv;
  let viteConfig;
  let cssModulesManifest = {};
  let viteChildCompiler = null;

  // This is initialized by `updateRemixPluginContext` during Vite's `config`
  // hook, so most of the code can assume this defined without null check.
  // During dev, `updateRemixPluginContext` is called again on every config file
  // change or route file addition/removal.
  let ctx;

  /** Mutates `ctx` as a side-effect */
  let updateRemixPluginContext = async () => {
    var _viteUserConfig$serve, _viteUserConfig$build;
    let remixConfigPresets = (await Promise.all((remixUserConfig.presets ?? []).map(async preset => {
      if (!preset.name) {
        throw new Error("Remix presets must have a `name` property defined.");
      }
      if (!preset.remixConfig) {
        return null;
      }
      let remixConfigPreset = omit__default["default"](await preset.remixConfig({
        remixUserConfig
      }), excludedRemixConfigPresetKeys);
      return remixConfigPreset;
    }))).filter(function isNotNull(value) {
      return value !== null;
    });
    let defaults = {
      basename: "/",
      buildDirectory: "build",
      manifest: false,
      serverBuildFile: "index.js",
      ssr: true
    };
    let resolvedRemixUserConfig = {
      ...defaults,
      // Default values should be completely overridden by user/preset config, not merged
      ...mergeRemixConfig(...remixConfigPresets, remixUserConfig)
    };
    let rootDirectory = viteUserConfig.root ?? process.env.REMIX_ROOT ?? process.cwd();
    let {
      basename,
      buildEnd,
      manifest,
      ssr
    } = resolvedRemixUserConfig;
    let isSpaMode = !ssr;

    // Only select the Remix esbuild config options that the Vite plugin uses
    let {
      appDirectory,
      entryClientFilePath,
      entryServerFilePath,
      future,
      routes,
      serverModuleFormat
    } = await config.resolveConfig(pick__default["default"](resolvedRemixUserConfig, supportedRemixEsbuildConfigKeys), {
      rootDirectory,
      isSpaMode
    });
    let buildDirectory = path__namespace.resolve(rootDirectory, resolvedRemixUserConfig.buildDirectory);
    let {
      serverBuildFile,
      serverBundles
    } = resolvedRemixUserConfig;
    let publicPath = viteUserConfig.base ?? "/";
    if (basename !== "/" && viteCommand === "serve" && !((_viteUserConfig$serve = viteUserConfig.server) !== null && _viteUserConfig$serve !== void 0 && _viteUserConfig$serve.middlewareMode) && !basename.startsWith(publicPath)) {
      throw new Error("When using the Remix `basename` and the Vite `base` config, " + "the `basename` config must begin with `base` for the default " + "Vite dev server.");
    }

    // Log warning for incompatible vite config flags
    if (isSpaMode && serverBundles) {
      console.warn(pc__default["default"].yellow(pc__default["default"].bold("⚠️  SPA Mode: ") + "the `serverBundles` config is invalid with " + "`ssr:false` and will be ignored`"));
      serverBundles = undefined;
    }
    let remixConfig = deepFreeze({
      appDirectory,
      basename,
      buildDirectory,
      buildEnd,
      future,
      manifest,
      publicPath,
      routes,
      serverBuildFile,
      serverBundles,
      serverModuleFormat,
      ssr
    });
    for (let preset of remixUserConfig.presets ?? []) {
      var _preset$remixConfigRe;
      await ((_preset$remixConfigRe = preset.remixConfigResolved) === null || _preset$remixConfigRe === void 0 ? void 0 : _preset$remixConfigRe.call(preset, {
        remixConfig
      }));
    }
    let viteManifestEnabled = ((_viteUserConfig$build = viteUserConfig.build) === null || _viteUserConfig$build === void 0 ? void 0 : _viteUserConfig$build.manifest) === true;
    let ssrBuildCtx = viteConfigEnv.isSsrBuild && viteCommand === "build" ? {
      isSsrBuild: true,
      getRemixServerManifest: async () => (await generateRemixManifestsForBuild()).remixServerManifest,
      serverBundleBuildConfig: getServerBundleBuildConfig(viteUserConfig)
    } : {
      isSsrBuild: false
    };
    ctx = {
      remixConfig,
      rootDirectory,
      entryClientFilePath,
      entryServerFilePath,
      viteManifestEnabled,
      ...ssrBuildCtx
    };
  };
  let pluginIndex = pluginName => {
    invariant["default"](viteConfig);
    return viteConfig.plugins.findIndex(plugin => plugin.name === pluginName);
  };
  let getServerEntry = async () => {
    invariant["default"](viteConfig, "viteconfig required to generate the server entry");

    // v3 TODO:
    // - Deprecate `ServerBuild.mode` once we officially stabilize vite and
    //   mark the old compiler as deprecated
    // - Remove `ServerBuild.mode` in v3

    let routes = ctx.serverBundleBuildConfig ?
    // For server bundle builds, the server build should only import the
    // routes for this bundle rather than importing all routes
    ctx.serverBundleBuildConfig.routes :
    // Otherwise, all routes are imported as usual
    ctx.remixConfig.routes;
    return `
    import * as entryServer from ${JSON.stringify(resolveFileUrl.resolveFileUrl(ctx, ctx.entryServerFilePath))};
    ${Object.keys(routes).map((key, index) => {
      let route = routes[key];
      return `import * as route${index} from ${JSON.stringify(resolveFileUrl.resolveFileUrl(ctx, resolveRelativeRouteFilePath(route, ctx.remixConfig)))};`;
    }).join("\n")}
      /**
       * \`mode\` is only relevant for the old Remix compiler but
       * is included here to satisfy the \`ServerBuild\` typings.
       */
      export const mode = ${JSON.stringify(viteConfig.mode)};
      export { default as assets } from ${JSON.stringify(serverManifestId)};
      export const assetsBuildDirectory = ${JSON.stringify(path__namespace.relative(ctx.rootDirectory, getClientBuildDirectory(ctx.remixConfig)))};
      export const basename = ${JSON.stringify(ctx.remixConfig.basename)};
      export const future = ${JSON.stringify(ctx.remixConfig.future)};
      export const isSpaMode = ${!ctx.remixConfig.ssr};
      export const publicPath = ${JSON.stringify(ctx.remixConfig.publicPath)};
      export const entry = { module: entryServer };
      export const routes = {
        ${Object.keys(routes).map((key, index) => {
      let route = routes[key];
      return `${JSON.stringify(key)}: {
          id: ${JSON.stringify(route.id)},
          parentId: ${JSON.stringify(route.parentId)},
          path: ${JSON.stringify(route.path)},
          index: ${JSON.stringify(route.index)},
          caseSensitive: ${JSON.stringify(route.caseSensitive)},
          module: route${index}
        }`;
    }).join(",\n  ")}
      };`;
  };
  let loadViteManifest = async directory => {
    let manifestContents = await fse__namespace.readFile(path__namespace.resolve(directory, ".vite", "manifest.json"), "utf-8");
    return JSON.parse(manifestContents);
  };
  let getViteManifestAssetPaths = viteManifest => {
    // Get .css?url imports and CSS entry points
    let cssUrlPaths = Object.values(viteManifest).filter(chunk => chunk.file.endsWith(".css")).map(chunk => chunk.file);

    // Get bundled CSS files and generic asset types
    let chunkAssetPaths = Object.values(viteManifest).flatMap(chunk => chunk.assets ?? []);
    return new Set([...cssUrlPaths, ...chunkAssetPaths]);
  };
  let generateRemixManifestsForBuild = async () => {
    invariant["default"](viteConfig);
    let viteManifest = await loadViteManifest(getClientBuildDirectory(ctx.remixConfig));
    let entry = getRemixManifestBuildAssets(ctx, viteManifest, ctx.entryClientFilePath);
    let browserRoutes = {};
    let serverRoutes = {};
    let routeManifestExports = await getRouteManifestModuleExports(viteChildCompiler, ctx);
    for (let [key, route] of Object.entries(ctx.remixConfig.routes)) {
      var _ctx$serverBundleBuil;
      let routeFilePath = path__namespace.join(ctx.remixConfig.appDirectory, route.file);
      let sourceExports = routeManifestExports[key];
      let isRootRoute = route.parentId === undefined;
      let routeManifestEntry = {
        id: route.id,
        parentId: route.parentId,
        path: route.path,
        index: route.index,
        caseSensitive: route.caseSensitive,
        hasAction: sourceExports.includes("action"),
        hasLoader: sourceExports.includes("loader"),
        hasClientAction: sourceExports.includes("clientAction"),
        hasClientLoader: sourceExports.includes("clientLoader"),
        hasErrorBoundary: sourceExports.includes("ErrorBoundary"),
        ...getRemixManifestBuildAssets(ctx, viteManifest, routeFilePath,
        // If this is the root route, we also need to include assets from the
        // client entry file as this is a common way for consumers to import
        // global reset styles, etc.
        isRootRoute ? [ctx.entryClientFilePath] : [])
      };
      browserRoutes[key] = routeManifestEntry;
      let serverBundleRoutes = (_ctx$serverBundleBuil = ctx.serverBundleBuildConfig) === null || _ctx$serverBundleBuil === void 0 ? void 0 : _ctx$serverBundleBuil.routes;
      if (!serverBundleRoutes || serverBundleRoutes[key]) {
        serverRoutes[key] = routeManifestEntry;
      }
    }
    let fingerprintedValues = {
      entry,
      routes: browserRoutes
    };
    let version = getHash(JSON.stringify(fingerprintedValues), 8);
    let manifestPath = path__namespace.posix.join(viteConfig.build.assetsDir, `manifest-${version}.js`);
    let url = `${ctx.remixConfig.publicPath}${manifestPath}`;
    let nonFingerprintedValues = {
      url,
      version
    };
    let remixBrowserManifest = {
      ...fingerprintedValues,
      ...nonFingerprintedValues
    };

    // Write the browser manifest to disk as part of the build process
    await writeFileSafe(path__namespace.join(getClientBuildDirectory(ctx.remixConfig), manifestPath), `window.__remixManifest=${JSON.stringify(remixBrowserManifest)};`);

    // The server manifest is the same as the browser manifest, except for
    // server bundle builds which only includes routes for the current bundle,
    // otherwise the server and client have the same routes
    let remixServerManifest = {
      ...remixBrowserManifest,
      routes: serverRoutes
    };
    return {
      remixBrowserManifest,
      remixServerManifest
    };
  };

  // In dev, the server and browser Remix manifests are the same
  let getRemixManifestForDev = async () => {
    let routes = {};
    let routeManifestExports = await getRouteManifestModuleExports(viteChildCompiler, ctx);
    for (let [key, route] of Object.entries(ctx.remixConfig.routes)) {
      let sourceExports = routeManifestExports[key];
      routes[key] = {
        id: route.id,
        parentId: route.parentId,
        path: route.path,
        index: route.index,
        caseSensitive: route.caseSensitive,
        module: combineUrls.combineURLs(ctx.remixConfig.publicPath, `${resolveFileUrl.resolveFileUrl(ctx, resolveRelativeRouteFilePath(route, ctx.remixConfig))}`),
        hasAction: sourceExports.includes("action"),
        hasLoader: sourceExports.includes("loader"),
        hasClientAction: sourceExports.includes("clientAction"),
        hasClientLoader: sourceExports.includes("clientLoader"),
        hasErrorBoundary: sourceExports.includes("ErrorBoundary"),
        imports: []
      };
    }
    return {
      version: String(Math.random()),
      url: combineUrls.combineURLs(ctx.remixConfig.publicPath, vmod.url(browserManifestId)),
      hmr: {
        runtime: combineUrls.combineURLs(ctx.remixConfig.publicPath, vmod.url(injectHmrRuntimeId))
      },
      entry: {
        module: combineUrls.combineURLs(ctx.remixConfig.publicPath, resolveFileUrl.resolveFileUrl(ctx, ctx.entryClientFilePath)),
        imports: []
      },
      routes
    };
  };
  return [{
    name: "remix",
    config: async (_viteUserConfig, _viteConfigEnv) => {
      var _viteUserConfig$serve2, _viteUserConfig$serve3, _viteUserConfig$build4;
      // Preload Vite's ESM build up-front as soon as we're in an async context
      await importViteEsmSync.preloadViteEsm();

      // Ensure sync import of Vite works after async preload
      let vite = importViteEsmSync.importViteEsmSync();
      viteUserConfig = _viteUserConfig;
      viteConfigEnv = _viteConfigEnv;
      viteCommand = viteConfigEnv.command;
      await updateRemixPluginContext();
      Object.assign(process.env, vite.loadEnv(viteConfigEnv.mode, ctx.rootDirectory,
      // We override default prefix of "VITE_" with a blank string since
      // we're targeting the server, so we want to load all environment
      // variables, not just those explicitly marked for the client
      ""));
      let baseRollupOptions = {
        // Silence Rollup "use client" warnings
        // Adapted from https://github.com/vitejs/vite-plugin-react/pull/144
        onwarn(warning, defaultHandler) {
          var _viteUserConfig$build2, _viteUserConfig$build3;
          if (warning.code === "MODULE_LEVEL_DIRECTIVE" && warning.message.includes("use client")) {
            return;
          }
          if ((_viteUserConfig$build2 = viteUserConfig.build) !== null && _viteUserConfig$build2 !== void 0 && (_viteUserConfig$build3 = _viteUserConfig$build2.rollupOptions) !== null && _viteUserConfig$build3 !== void 0 && _viteUserConfig$build3.onwarn) {
            viteUserConfig.build.rollupOptions.onwarn(warning, defaultHandler);
          } else {
            defaultHandler(warning);
          }
        }
      };
      return {
        __remixPluginContext: ctx,
        appType: viteCommand === "serve" && viteConfigEnv.mode === "production" && ctx.remixConfig.ssr === false ? "spa" : "custom",
        ssr: {
          external: isInRemixMonorepo() ? [
          // This is only needed within the Remix repo because these
          // packages are linked to a directory outside of node_modules
          // so Vite treats them as internal code by default.
          "@remix-run/architect", "@remix-run/cloudflare-pages", "@remix-run/cloudflare-workers", "@remix-run/cloudflare", "@remix-run/css-bundle", "@remix-run/deno", "@remix-run/dev", "@remix-run/express", "@remix-run/netlify", "@remix-run/node", "@remix-run/react", "@remix-run/serve", "@remix-run/server-runtime"] : undefined
        },
        optimizeDeps: {
          entries: ctx.remixConfig.future.unstable_optimizeDeps ? [ctx.entryClientFilePath, ...Object.values(ctx.remixConfig.routes).map(route => path__namespace.join(ctx.remixConfig.appDirectory, route.file))] : [],
          include: [
          // Pre-bundle React dependencies to avoid React duplicates,
          // even if React dependencies are not direct dependencies.
          // https://react.dev/warnings/invalid-hook-call-warning#duplicate-react
          "react", "react/jsx-runtime", "react/jsx-dev-runtime", "react-dom/client",
          // Pre-bundle Remix dependencies to avoid Remix router duplicates.
          // Our remix-remix-react-proxy plugin does not process default client and
          // server entry files since those come from within `node_modules`.
          // That means that before Vite pre-bundles dependencies (e.g. first time dev server is run)
          // mismatching Remix routers cause `Error: You must render this element inside a <Remix> element`.
          "@remix-run/react"]
        },
        esbuild: {
          jsx: "automatic",
          jsxDev: viteCommand !== "build"
        },
        resolve: {
          dedupe: [
          // https://react.dev/warnings/invalid-hook-call-warning#duplicate-react
          "react", "react-dom",
          // see description for `@remix-run/react` in `optimizeDeps.include`
          "@remix-run/react"]
        },
        base: viteUserConfig.base,
        // When consumer provides an allow list for files that can be read by
        // the server, ensure that Remix's default entry files are included.
        // If we don't do this and a default entry file is used, the server
        // will throw an error that the file is not allowed to be read.
        // https://vitejs.dev/config/server-options#server-fs-allow
        server: (_viteUserConfig$serve2 = viteUserConfig.server) !== null && _viteUserConfig$serve2 !== void 0 && (_viteUserConfig$serve3 = _viteUserConfig$serve2.fs) !== null && _viteUserConfig$serve3 !== void 0 && _viteUserConfig$serve3.allow ? {
          fs: {
            allow: defaultEntries
          }
        } : undefined,
        // Vite config options for building
        ...(viteCommand === "build" ? {
          build: {
            cssMinify: ((_viteUserConfig$build4 = viteUserConfig.build) === null || _viteUserConfig$build4 === void 0 ? void 0 : _viteUserConfig$build4.cssMinify) ?? true,
            ...(!viteConfigEnv.isSsrBuild ? {
              manifest: true,
              outDir: getClientBuildDirectory(ctx.remixConfig),
              rollupOptions: {
                ...baseRollupOptions,
                preserveEntrySignatures: "exports-only",
                input: [ctx.entryClientFilePath, ...Object.values(ctx.remixConfig.routes).map(route => `${path__namespace.resolve(ctx.remixConfig.appDirectory, route.file)}${BUILD_CLIENT_ROUTE_QUERY_STRING}`)]
              }
            } : {
              // We move SSR-only assets to client assets. Note that the
              // SSR build can also emit code-split JS files (e.g. by
              // dynamic import) under the same assets directory
              // regardless of "ssrEmitAssets" option, so we also need to
              // keep these JS files have to be kept as-is.
              ssrEmitAssets: true,
              copyPublicDir: false,
              // Assets in the public directory are only used by the client
              manifest: true,
              // We need the manifest to detect SSR-only assets
              outDir: getServerBuildDirectory(ctx),
              rollupOptions: {
                ...baseRollupOptions,
                preserveEntrySignatures: "exports-only",
                input: serverBuildId,
                output: {
                  entryFileNames: ctx.remixConfig.serverBuildFile,
                  format: ctx.remixConfig.serverModuleFormat
                }
              }
            })
          }
        } : undefined),
        // Vite config options for SPA preview mode
        ...(viteCommand === "serve" && ctx.remixConfig.ssr === false ? {
          build: {
            manifest: true,
            outDir: getClientBuildDirectory(ctx.remixConfig)
          }
        } : undefined)
      };
    },
    async configResolved(resolvedViteConfig) {
      await esModuleLexer.init;
      viteConfig = resolvedViteConfig;
      invariant["default"](viteConfig);

      // We load the same Vite config file again for the child compiler so
      // that both parent and child compiler's plugins have independent state.
      // If we re-used the `viteUserConfig.plugins` array for the child
      // compiler, it could lead to mutating shared state between plugin
      // instances in unexpected ways, e.g. during `vite build` the
      // `configResolved` plugin hook would be called with `command = "build"`
      // by parent and then `command = "serve"` by child, which some plugins
      // may respond to by updating state referenced by the parent.
      if (!viteConfig.configFile) {
        throw new Error("The Remix Vite plugin requires the use of a Vite config file");
      }
      let vite = importViteEsmSync.importViteEsmSync();
      let childCompilerConfigFile = await vite.loadConfigFromFile({
        command: viteConfig.command,
        mode: viteConfig.mode,
        isSsrBuild: ctx.isSsrBuild
      }, viteConfig.configFile);
      invariant["default"](childCompilerConfigFile, "Vite config file was unable to be resolved for Remix child compiler");

      // Validate that commonly used Rollup plugins that need to run before
      // Remix are in the correct order. This is because Rollup plugins can't
      // set `enforce: "pre"` like Vite plugins can. Explicitly validating
      // this provides a much nicer developer experience.
      let rollupPrePlugins = [{
        pluginName: "@mdx-js/rollup",
        displayName: "@mdx-js/rollup"
      }];
      for (let prePlugin of rollupPrePlugins) {
        let prePluginIndex = pluginIndex(prePlugin.pluginName);
        if (prePluginIndex >= 0 && prePluginIndex > pluginIndex("remix")) {
          throw new Error(`The "${prePlugin.displayName}" plugin should be placed before the Remix plugin in your Vite config file`);
        }
      }
      viteChildCompiler = await vite.createServer({
        ...viteUserConfig,
        mode: viteConfig.mode,
        server: {
          watch: viteConfig.command === "build" ? null : undefined,
          preTransformRequests: false,
          hmr: false
        },
        configFile: false,
        envFile: false,
        plugins: [...(childCompilerConfigFile.config.plugins ?? []).flat()
        // Exclude this plugin from the child compiler to prevent an
        // infinite loop (plugin creates a child compiler with the same
        // plugin that creates another child compiler, repeat ad
        // infinitum), and to prevent the manifest from being written to
        // disk from the child compiler. This is important in the
        // production build because the child compiler is a Vite dev
        // server and will generate incorrect manifests.
        .filter(plugin => typeof plugin === "object" && plugin !== null && "name" in plugin && plugin.name !== "remix" && plugin.name !== "remix-hmr-updates")]
      });
      await viteChildCompiler.pluginContainer.buildStart({});
    },
    async transform(code, id) {
      if (styles.isCssModulesFile(id)) {
        cssModulesManifest[id] = code;
      }
      if (id.endsWith(BUILD_CLIENT_ROUTE_QUERY_STRING)) {
        let routeModuleId = id.replace(BUILD_CLIENT_ROUTE_QUERY_STRING, "");
        let sourceExports = await getRouteModuleExports(viteChildCompiler, ctx, routeModuleId);
        let routeFileName = path__namespace.basename(routeModuleId);
        let clientExports = sourceExports.filter(exportName => CLIENT_ROUTE_EXPORTS.includes(exportName)).join(", ");
        return `export { ${clientExports} } from "./${routeFileName}";`;
      }
    },
    buildStart() {
      invariant["default"](viteConfig);
      if (viteCommand === "build" && viteConfig.mode === "production" && !viteConfig.build.ssr && viteConfig.build.sourcemap) {
        viteConfig.logger.warn(pc__default["default"].yellow("\n" + pc__default["default"].bold("  ⚠️  Source maps are enabled in production\n") + ["This makes your server code publicly", "visible in the browser. This is highly", "discouraged! If you insist, ensure that", "you are using environment variables for", "secrets and not hard-coding them in", "your source code."].map(line => "     " + line).join("\n") + "\n"));
      }
    },
    async configureServer(viteDevServer) {
      serverRuntime.unstable_setDevServerHooks({
        // Give the request handler access to the critical CSS in dev to avoid a
        // flash of unstyled content since Vite injects CSS file contents via JS
        getCriticalCss: async (build, url) => {
          return styles.getStylesForUrl({
            rootDirectory: ctx.rootDirectory,
            entryClientFilePath: ctx.entryClientFilePath,
            remixConfig: ctx.remixConfig,
            viteDevServer,
            cssModulesManifest,
            build,
            url
          });
        },
        // If an error is caught within the request handler, let Vite fix the
        // stack trace so it maps back to the actual source code
        processRequestError: error => {
          if (error instanceof Error) {
            viteDevServer.ssrFixStacktrace(error);
          }
        }
      });

      // Invalidate virtual modules and update cached plugin config via file watcher
      viteDevServer.watcher.on("all", async (eventName, filepath) => {
        var _viteConfig;
        let {
          normalizePath
        } = importViteEsmSync.importViteEsmSync();
        let appFileAddedOrRemoved = (eventName === "add" || eventName === "unlink") && normalizePath(filepath).startsWith(normalizePath(ctx.remixConfig.appDirectory));
        invariant["default"]((_viteConfig = viteConfig) === null || _viteConfig === void 0 ? void 0 : _viteConfig.configFile);
        let viteConfigChanged = eventName === "change" && normalizePath(filepath) === normalizePath(viteConfig.configFile);
        if (appFileAddedOrRemoved || viteConfigChanged) {
          let lastRemixConfig = ctx.remixConfig;
          await updateRemixPluginContext();
          if (!isEqualJson(lastRemixConfig, ctx.remixConfig)) {
            invalidateVirtualModules(viteDevServer);
          }
        }
      });
      return () => {
        // Let user servers handle SSR requests in middleware mode,
        // otherwise the Vite plugin will handle the request
        if (!viteDevServer.config.server.middlewareMode) {
          viteDevServer.middlewares.use(async (req, res, next) => {
            try {
              let build = await viteDevServer.ssrLoadModule(serverBuildId);
              let handler = serverRuntime.createRequestHandler(build, "development");
              let nodeHandler = async (nodeReq, nodeRes) => {
                let req = nodeAdapter.fromNodeRequest(nodeReq, nodeRes);
                let res = await handler(req, await remixDevLoadContext(req));
                await nodeAdapter.toNodeRequest(res, nodeRes);
              };
              await nodeHandler(req, res);
            } catch (error) {
              next(error);
            }
          });
        }
      };
    },
    writeBundle: {
      // After the SSR build is finished, we inspect the Vite manifest for
      // the SSR build and move server-only assets to client assets directory
      async handler() {
        if (!ctx.isSsrBuild) {
          return;
        }
        invariant["default"](viteConfig);
        let clientBuildDirectory = getClientBuildDirectory(ctx.remixConfig);
        let serverBuildDirectory = getServerBuildDirectory(ctx);
        let ssrViteManifest = await loadViteManifest(serverBuildDirectory);
        let ssrAssetPaths = getViteManifestAssetPaths(ssrViteManifest);

        // We only move assets that aren't in the client build, otherwise we
        // remove them. These assets only exist because we explicitly set
        // `ssrEmitAssets: true` in the SSR Vite config. These assets
        // typically wouldn't exist by default, which is why we assume it's
        // safe to remove them. We're aiming for a clean build output so that
        // unnecessary assets don't get deployed alongside the server code.
        let movedAssetPaths = [];
        for (let ssrAssetPath of ssrAssetPaths) {
          let src = path__namespace.join(serverBuildDirectory, ssrAssetPath);
          let dest = path__namespace.join(clientBuildDirectory, ssrAssetPath);
          if (!fse__namespace.existsSync(dest)) {
            await fse__namespace.move(src, dest);
            movedAssetPaths.push(dest);
          } else {
            await fse__namespace.remove(src);
          }
        }

        // We assume CSS assets from the SSR build are unnecessary and remove
        // them for the same reasons as above.
        let ssrCssPaths = Object.values(ssrViteManifest).flatMap(chunk => chunk.css ?? []);
        await Promise.all(ssrCssPaths.map(cssPath => fse__namespace.remove(path__namespace.join(serverBuildDirectory, cssPath))));
        if (movedAssetPaths.length) {
          viteConfig.logger.info(["", `${pc__default["default"].green("✓")} ${movedAssetPaths.length} asset${movedAssetPaths.length > 1 ? "s" : ""} moved from Remix server build to client assets.`, ...movedAssetPaths.map(movedAssetPath => pc__default["default"].dim(path__namespace.relative(ctx.rootDirectory, movedAssetPath))), ""].join("\n"));
        }
        if (!ctx.remixConfig.ssr) {
          await handleSpaMode(serverBuildDirectory, ctx.remixConfig.serverBuildFile, clientBuildDirectory, viteConfig, ctx.remixConfig.basename);
        }
      }
    },
    async buildEnd() {
      var _viteChildCompiler;
      await ((_viteChildCompiler = viteChildCompiler) === null || _viteChildCompiler === void 0 ? void 0 : _viteChildCompiler.close());
    }
  }, {
    name: "remix-virtual-modules",
    enforce: "pre",
    resolveId(id) {
      if (vmods.includes(id)) return vmod.resolve(id);
    },
    async load(id) {
      switch (id) {
        case vmod.resolve(serverBuildId):
          {
            return await getServerEntry();
          }
        case vmod.resolve(serverManifestId):
          {
            let remixManifest = ctx.isSsrBuild ? await ctx.getRemixServerManifest() : await getRemixManifestForDev();
            return `export default ${jsesc__default["default"](remixManifest, {
              es6: true
            })};`;
          }
        case vmod.resolve(browserManifestId):
          {
            if (viteCommand === "build") {
              throw new Error("This module only exists in development");
            }
            let remixManifest = await getRemixManifestForDev();
            let remixManifestString = jsesc__default["default"](remixManifest, {
              es6: true
            });
            return `window.__remixManifest=${remixManifestString};`;
          }
      }
    }
  }, {
    name: "remix-dot-server",
    enforce: "pre",
    async resolveId(id, importer, options) {
      var _options$custom;
      // https://vitejs.dev/config/dep-optimization-options
      let isOptimizeDeps = viteCommand === "serve" && (options === null || options === void 0 ? void 0 : options.scan) === true;
      if (options !== null && options !== void 0 && options.ssr || isOptimizeDeps) return;
      let isResolving = (options === null || options === void 0 ? void 0 : (_options$custom = options.custom) === null || _options$custom === void 0 ? void 0 : _options$custom["remix-dot-server"]) ?? false;
      if (isResolving) return;
      options.custom = {
        ...options.custom,
        "remix-dot-server": true
      };
      let resolved = await this.resolve(id, importer, options);
      if (!resolved) return;
      let serverFileRE = /\.server(\.[cm]?[jt]sx?)?$/;
      let serverDirRE = /\/\.server\//;
      let isDotServer = serverFileRE.test(resolved.id) || serverDirRE.test(resolved.id);
      if (!isDotServer) return;
      if (!importer) return;
      if (viteCommand !== "build" && importer.endsWith(".html")) {
        // Vite has a special `index.html` importer for `resolveId` within `transformRequest`
        // https://github.com/vitejs/vite/blob/5684fcd8d27110d098b3e1c19d851f44251588f1/packages/vite/src/node/server/transformRequest.ts#L158
        // https://github.com/vitejs/vite/blob/5684fcd8d27110d098b3e1c19d851f44251588f1/packages/vite/src/node/server/pluginContainer.ts#L668
        return;
      }
      let vite = importViteEsmSync.importViteEsmSync();
      let importerShort = vite.normalizePath(path__namespace.relative(ctx.rootDirectory, importer));
      let isRoute = getRoute(ctx.remixConfig, importer);
      if (isRoute) {
        let serverOnlyExports = SERVER_ONLY_ROUTE_EXPORTS.map(xport => `\`${xport}\``).join(", ");
        throw Error([pc__default["default"].red(`Server-only module referenced by client`), "", `    '${id}' imported by route '${importerShort}'`, "", `  Remix automatically removes server-code from these exports:`, `    ${serverOnlyExports}`, "", `  But other route exports in '${importerShort}' depend on '${id}'.`, "", "  See https://remix.run/docs/en/main/guides/vite#splitting-up-client-and-server-code", ""].join("\n"));
      }
      throw Error([pc__default["default"].red(`Server-only module referenced by client`), "", `    '${id}' imported by '${importerShort}'`, "", "  See https://remix.run/docs/en/main/guides/vite#splitting-up-client-and-server-code", ""].join("\n"));
    }
  }, {
    name: "remix-dot-client",
    async transform(code, id, options) {
      if (!(options !== null && options !== void 0 && options.ssr)) return;
      let clientFileRE = /\.client(\.[cm]?[jt]sx?)?$/;
      let clientDirRE = /\/\.client\//;
      if (clientFileRE.test(id) || clientDirRE.test(id)) {
        let exports = esModuleLexer.parse(code)[1];
        return {
          code: exports.map(({
            n: name
          }) => name === "default" ? "export default undefined;" : `export const ${name} = undefined;`).join("\n"),
          map: null
        };
      }
    }
  }, {
    name: "remix-route-exports",
    async transform(code, id, options) {
      if (options !== null && options !== void 0 && options.ssr) return;
      let route = getRoute(ctx.remixConfig, id);
      if (!route) return;
      if (!ctx.remixConfig.ssr) {
        let serverOnlyExports = esModuleLexer.parse(code)[1].map(exp => exp.n).filter(exp => SERVER_ONLY_ROUTE_EXPORTS.includes(exp));
        if (serverOnlyExports.length > 0) {
          let str = serverOnlyExports.map(e => `\`${e}\``).join(", ");
          let message = `SPA Mode: ${serverOnlyExports.length} invalid route export(s) in ` + `\`${route.file}\`: ${str}. See https://remix.run/guides/spa-mode ` + `for more information.`;
          throw Error(message);
        }
        if (route.id !== "root") {
          let hasHydrateFallback = esModuleLexer.parse(code)[1].map(exp => exp.n).some(exp => exp === "HydrateFallback");
          if (hasHydrateFallback) {
            let message = `SPA Mode: Invalid \`HydrateFallback\` export found in ` + `\`${route.file}\`. \`HydrateFallback\` is only permitted on ` + `the root route in SPA Mode. See https://remix.run/guides/spa-mode ` + `for more information.`;
            throw Error(message);
          }
        }
      }
      let [filepath] = id.split("?");
      return removeExports.removeExports(code, SERVER_ONLY_ROUTE_EXPORTS, {
        sourceMaps: true,
        filename: id,
        sourceFileName: filepath
      });
    }
  }, {
    name: "remix-inject-hmr-runtime",
    enforce: "pre",
    resolveId(id) {
      if (id === injectHmrRuntimeId) return vmod.resolve(injectHmrRuntimeId);
    },
    async load(id) {
      if (id !== vmod.resolve(injectHmrRuntimeId)) return;
      return [`import RefreshRuntime from "${hmrRuntimeId}"`, "RefreshRuntime.injectIntoGlobalHook(window)", "window.$RefreshReg$ = () => {}", "window.$RefreshSig$ = () => (type) => type", "window.__vite_plugin_react_preamble_installed__ = true"].join("\n");
    }
  }, {
    name: "remix-hmr-runtime",
    enforce: "pre",
    resolveId(id) {
      if (id === hmrRuntimeId) return vmod.resolve(hmrRuntimeId);
    },
    async load(id) {
      if (id !== vmod.resolve(hmrRuntimeId)) return;
      let reactRefreshDir = path__namespace.dirname(require.resolve("react-refresh/package.json"));
      let reactRefreshRuntimePath = path__namespace.join(reactRefreshDir, "cjs/react-refresh-runtime.development.js");
      return ["const exports = {}", await fse__namespace.readFile(reactRefreshRuntimePath, "utf8"), await fse__namespace.readFile(require.resolve("./static/refresh-utils.cjs"), "utf8"), "export default exports"].join("\n");
    }
  }, {
    name: "remix-react-refresh-babel",
    async transform(code, id, options) {
      if (viteCommand !== "serve") return;
      if (id.includes("/node_modules/")) return;
      let [filepath] = id.split("?");
      let extensionsRE = /\.(jsx?|tsx?|mdx?)$/;
      if (!extensionsRE.test(filepath)) return;
      let devRuntime = "react/jsx-dev-runtime";
      let ssr = (options === null || options === void 0 ? void 0 : options.ssr) === true;
      let isJSX = filepath.endsWith("x");
      let useFastRefresh = !ssr && (isJSX || code.includes(devRuntime));
      if (!useFastRefresh) return;
      let result = await babel__default["default"].transformAsync(code, {
        configFile: false,
        babelrc: false,
        filename: id,
        sourceFileName: filepath,
        parserOpts: {
          sourceType: "module",
          allowAwaitOutsideFunction: true
        },
        plugins: [[require("react-refresh/babel"), {
          skipEnvCheck: true
        }]],
        sourceMaps: true
      });
      if (result === null) return;
      code = result.code;
      let refreshContentRE = /\$Refresh(?:Reg|Sig)\$\(/;
      if (refreshContentRE.test(code)) {
        code = addRefreshWrapper(ctx.remixConfig, code, id);
      }
      return {
        code,
        map: result.map
      };
    }
  }, {
    name: "remix-hmr-updates",
    async handleHotUpdate({
      server,
      file,
      modules,
      read
    }) {
      let route = getRoute(ctx.remixConfig, file);
      let hmrEventData = {
        route: null
      };
      if (route) {
        // invalidate manifest on route exports change
        let serverManifest = (await server.ssrLoadModule(serverManifestId)).default;
        let oldRouteMetadata = serverManifest.routes[route.id];
        let newRouteMetadata = await getRouteMetadata(ctx, viteChildCompiler, route, read);
        hmrEventData.route = newRouteMetadata;
        if (!oldRouteMetadata || ["hasLoader", "hasClientLoader", "hasAction", "hasClientAction", "hasErrorBoundary"].some(key => oldRouteMetadata[key] !== newRouteMetadata[key])) {
          invalidateVirtualModules(server);
        }
      }
      server.ws.send({
        type: "custom",
        event: "remix:hmr",
        data: hmrEventData
      });
      return modules;
    }
  }];
};
function isInRemixMonorepo() {
  let devPath = path__namespace.dirname(require.resolve("@remix-run/dev/package.json"));
  let devParentDir = path__namespace.basename(path__namespace.resolve(devPath, ".."));
  return devParentDir === "packages";
}
function isEqualJson(v1, v2) {
  return JSON.stringify(v1) === JSON.stringify(v2);
}
function addRefreshWrapper(remixConfig, code, id) {
  let route = getRoute(remixConfig, id);
  let acceptExports = route ? ["clientAction", "clientLoader", "handle", "meta", "links", "shouldRevalidate"] : [];
  return REACT_REFRESH_HEADER.replaceAll("__SOURCE__", JSON.stringify(id)) + code + REACT_REFRESH_FOOTER.replaceAll("__SOURCE__", JSON.stringify(id)).replaceAll("__ACCEPT_EXPORTS__", JSON.stringify(acceptExports)).replaceAll("__ROUTE_ID__", JSON.stringify(route === null || route === void 0 ? void 0 : route.id));
}
const REACT_REFRESH_HEADER = `
import RefreshRuntime from "${hmrRuntimeId}";

const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error(
      "Remix Vite plugin can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, __SOURCE__ + " " + id)
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}`.replace(/\n+/g, "");
const REACT_REFRESH_FOOTER = `
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh(__SOURCE__, currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      __ROUTE_ID__ && window.__remixRouteModuleUpdates.set(__ROUTE_ID__, nextExports);
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports, __ACCEPT_EXPORTS__);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}`;
function getRoute(pluginConfig, file) {
  let vite = importViteEsmSync.importViteEsmSync();
  let routePath = vite.normalizePath(path__namespace.relative(pluginConfig.appDirectory, file));
  let route = Object.values(pluginConfig.routes).find(r => vite.normalizePath(r.file) === routePath);
  return route;
}
async function getRouteMetadata(ctx, viteChildCompiler, route, readRouteFile) {
  let sourceExports = await getRouteModuleExports(viteChildCompiler, ctx, route.file, readRouteFile);
  let info = {
    id: route.id,
    parentId: route.parentId,
    path: route.path,
    index: route.index,
    caseSensitive: route.caseSensitive,
    url: combineUrls.combineURLs(ctx.remixConfig.publicPath, "/" + path__namespace.relative(ctx.rootDirectory, resolveRelativeRouteFilePath(route, ctx.remixConfig))),
    module: combineUrls.combineURLs(ctx.remixConfig.publicPath, `${resolveFileUrl.resolveFileUrl(ctx, resolveRelativeRouteFilePath(route, ctx.remixConfig))}?import`),
    // Ensure the Vite dev server responds with a JS module
    hasAction: sourceExports.includes("action"),
    hasClientAction: sourceExports.includes("clientAction"),
    hasLoader: sourceExports.includes("loader"),
    hasClientLoader: sourceExports.includes("clientLoader"),
    hasErrorBoundary: sourceExports.includes("ErrorBoundary"),
    imports: []
  };
  return info;
}
async function handleSpaMode(serverBuildDirectoryPath, serverBuildFile, clientBuildDirectory, viteConfig, basename) {
  // Create a handler and call it for the `/` path - rendering down to the
  // proper HydrateFallback ... or not!  Maybe they have a static landing page
  // generated from routes/_index.tsx.
  let serverBuildPath = path__namespace.join(serverBuildDirectoryPath, serverBuildFile);
  let build = await import(url__namespace.pathToFileURL(serverBuildPath).toString());
  let {
    createRequestHandler: createHandler
  } = await import('@remix-run/node');
  let handler = createHandler(build, viteConfig.mode);
  let response = await handler(new Request(`http://localhost${basename}`));
  let html = await response.text();
  if (response.status !== 200) {
    throw new Error(`SPA Mode: Received a ${response.status} status code from ` + `\`entry.server.tsx\` while generating the \`index.html\` file.\n${html}`);
  }
  if (!html.includes("window.__remixContext =") || !html.includes("window.__remixRouteModules =")) {
    throw new Error("SPA Mode: Did you forget to include <Scripts/> in your `root.tsx` " + "`HydrateFallback` component?  Your `index.html` file cannot hydrate " + "into a SPA without `<Scripts />`.");
  }

  // Write out the index.html file for the SPA
  await fse__namespace.writeFile(path__namespace.join(clientBuildDirectory, "index.html"), html);
  viteConfig.logger.info("SPA Mode: index.html has been written to your " + pc__default["default"].bold(path__namespace.relative(process.cwd(), clientBuildDirectory)) + " directory");

  // Cleanup - we no longer need the server build assets
  fse__namespace.removeSync(serverBuildDirectoryPath);
}

exports.configRouteToBranchRoute = configRouteToBranchRoute;
exports.extractRemixPluginContext = extractRemixPluginContext;
exports.getServerBuildDirectory = getServerBuildDirectory;
exports.loadVitePluginContext = loadVitePluginContext;
exports.remixVitePlugin = remixVitePlugin;
exports.resolveViteConfig = resolveViteConfig;
exports.setRemixDevLoadContext = setRemixDevLoadContext;
