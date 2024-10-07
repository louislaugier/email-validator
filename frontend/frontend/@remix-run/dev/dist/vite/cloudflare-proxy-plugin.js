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

var serverRuntime = require('@remix-run/server-runtime');
var nodeAdapter = require('./node-adapter.js');

let serverBuildId = "virtual:remix/server-build";
function importWrangler() {
  try {
    return import('wrangler');
  } catch (_) {
    throw Error("Could not import `wrangler`. Do you have it installed?");
  }
}
const NAME = "vite-plugin-remix-cloudflare-proxy";
const cloudflareDevProxyVitePlugin = ({
  getLoadContext,
  ...options
} = {}) => {
  return {
    name: NAME,
    config: () => ({
      ssr: {
        resolve: {
          externalConditions: ["workerd", "worker"]
        }
      }
    }),
    configResolved: viteConfig => {
      let pluginIndex = name => viteConfig.plugins.findIndex(plugin => plugin.name === name);
      let remixIndex = pluginIndex("remix");
      if (remixIndex >= 0 && remixIndex < pluginIndex(NAME)) {
        throw new Error(`The "${NAME}" plugin should be placed before the Remix plugin in your Vite config file`);
      }
    },
    configureServer: async viteDevServer => {
      let {
        getPlatformProxy
      } = await importWrangler();
      // Do not include `dispose` in Cloudflare context
      let {
        dispose,
        ...cloudflare
      } = await getPlatformProxy(options);
      let context = {
        cloudflare
      };
      return () => {
        if (!viteDevServer.config.server.middlewareMode) {
          viteDevServer.middlewares.use(async (nodeReq, nodeRes, next) => {
            try {
              let build = await viteDevServer.ssrLoadModule(serverBuildId);
              let handler = serverRuntime.createRequestHandler(build, "development");
              let req = nodeAdapter.fromNodeRequest(nodeReq, nodeRes);
              let loadContext = getLoadContext ? await getLoadContext({
                request: req,
                context
              }) : context;
              let res = await handler(req, loadContext);
              await nodeAdapter.toNodeRequest(res, nodeRes);
            } catch (error) {
              next(error);
            }
          });
        }
      };
    }
  };
};

exports.cloudflareDevProxyVitePlugin = cloudflareDevProxyVitePlugin;
