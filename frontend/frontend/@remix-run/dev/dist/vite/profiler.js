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

var fs = require('node:fs');
var path = require('node:path');
var pc = require('picocolors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var pc__default = /*#__PURE__*/_interopDefaultLegacy(pc);

// Adapted from:
const getSession = () => global.__remix_profile_session;
const start = async callback => {
  let inspector = await import('node:inspector').then(r => r.default);
  let session = global.__remix_profile_session = new inspector.Session();
  session.connect();
  session.post("Profiler.enable", () => {
    session.post("Profiler.start", callback);
  });
};
let profileCount = 0;
const stop = log => {
  let session = getSession();
  if (!session) return;
  return new Promise((res, rej) => {
    session.post("Profiler.stop", (err, {
      profile
    }) => {
      if (err) return rej(err);
      let outPath = path__default["default"].resolve(`./remix-${profileCount++}.cpuprofile`);
      fs__default["default"].writeFileSync(outPath, JSON.stringify(profile));
      log(pc__default["default"].yellow(`CPU profile written to ${pc__default["default"].white(pc__default["default"].dim(outPath))}`));
      global.__remix_profile_session = undefined;
      res();
    });
  });
};

exports.getSession = getSession;
exports.start = start;
exports.stop = stop;
