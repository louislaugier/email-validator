/**
 * @remix-run/node v2.12.1
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

var crypto = require('node:crypto');
var node_fs = require('node:fs');
var promises = require('node:fs/promises');
var node_os = require('node:os');
var path = require('node:path');
var node_stream = require('node:stream');
var node_util = require('node:util');
var serverRuntime = require('@remix-run/server-runtime');
var streamSlice = require('stream-slice');
var stream = require('../stream.js');

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

var streamSlice__namespace = /*#__PURE__*/_interopNamespace(streamSlice);

/**
 * Chooses the path of the file to be uploaded. If a string is not
 * returned the file will not be written.
 */

let defaultFilePathResolver = ({
  filename
}) => {
  let ext = filename ? path.extname(filename) : "";
  return "upload_" + crypto.randomBytes(4).readUInt32LE(0) + ext;
};
async function uniqueFile(filepath) {
  let ext = path.extname(filepath);
  let uniqueFilepath = filepath;
  for (let i = 1; await promises.stat(uniqueFilepath).then(() => true).catch(() => false); i++) {
    uniqueFilepath = (ext ? filepath.slice(0, -ext.length) : filepath) + `-${new Date().getTime()}${ext}`;
  }
  return uniqueFilepath;
}
function createFileUploadHandler({
  directory = node_os.tmpdir(),
  avoidFileConflicts = true,
  file = defaultFilePathResolver,
  filter,
  maxPartSize = 3000000
} = {}) {
  return async ({
    name,
    filename,
    contentType,
    data
  }) => {
    if (!filename || filter && !(await filter({
      name,
      filename,
      contentType
    }))) {
      return undefined;
    }
    let dir = typeof directory === "string" ? directory : directory({
      name,
      filename,
      contentType
    });
    if (!dir) {
      return undefined;
    }
    let filedir = path.resolve(dir);
    let path$1 = typeof file === "string" ? file : file({
      name,
      filename,
      contentType
    });
    if (!path$1) {
      return undefined;
    }
    let filepath = path.resolve(filedir, path$1);
    if (avoidFileConflicts) {
      filepath = await uniqueFile(filepath);
    }
    await promises.mkdir(path.dirname(filepath), {
      recursive: true
    }).catch(() => {});
    let writeFileStream = node_fs.createWriteStream(filepath);
    let size = 0;
    let deleteFile = false;
    try {
      for await (let chunk of data) {
        size += chunk.byteLength;
        if (size > maxPartSize) {
          deleteFile = true;
          throw new serverRuntime.MaxPartSizeExceededError(name, maxPartSize);
        }
        writeFileStream.write(chunk);
      }
    } finally {
      writeFileStream.end();
      await node_util.promisify(node_stream.finished)(writeFileStream);
      if (deleteFile) {
        await promises.rm(filepath).catch(() => {});
      }
    }

    // TODO: remove this typecast once TS fixed File class regression
    //  https://github.com/microsoft/TypeScript/issues/52166
    return new NodeOnDiskFile(filepath, contentType);
  };
}

// TODO: remove this `Omit` usage once TS fixed File class regression
//  https://github.com/microsoft/TypeScript/issues/52166
class NodeOnDiskFile {
  lastModified = 0;
  webkitRelativePath = "";

  // TODO: remove this property once TS fixed File class regression
  //  https://github.com/microsoft/TypeScript/issues/52166
  prototype = File.prototype;
  constructor(filepath, type, slicer) {
    this.filepath = filepath;
    this.type = type;
    this.slicer = slicer;
    this.name = path.basename(filepath);
  }
  get size() {
    let stats = node_fs.statSync(this.filepath);
    if (this.slicer) {
      let slice = this.slicer.end - this.slicer.start;
      return slice < 0 ? 0 : slice > stats.size ? stats.size : slice;
    }
    return stats.size;
  }
  slice(start, end, type) {
    var _this$slicer;
    if (typeof start === "number" && start < 0) start = this.size + start;
    if (typeof end === "number" && end < 0) end = this.size + end;
    let startOffset = ((_this$slicer = this.slicer) === null || _this$slicer === void 0 ? void 0 : _this$slicer.start) || 0;
    start = startOffset + (start || 0);
    end = startOffset + (end || this.size);
    return new NodeOnDiskFile(this.filepath, typeof type === "string" ? type : this.type, {
      start,
      end
    }
    // TODO: remove this typecast once TS fixed File class regression
    //  https://github.com/microsoft/TypeScript/issues/52166
    );
  }
  async arrayBuffer() {
    let stream = node_fs.createReadStream(this.filepath);
    if (this.slicer) {
      stream = stream.pipe(streamSlice__namespace.slice(this.slicer.start, this.slicer.end));
    }
    return new Promise((resolve, reject) => {
      let buf = [];
      stream.on("data", chunk => buf.push(chunk));
      stream.on("end", () => resolve(Buffer.concat(buf)));
      stream.on("error", err => reject(err));
    });
  }
  stream() {
    let stream$1 = node_fs.createReadStream(this.filepath);
    if (this.slicer) {
      stream$1 = stream$1.pipe(streamSlice__namespace.slice(this.slicer.start, this.slicer.end));
    }
    return stream.createReadableStreamFromReadable(stream$1);
  }
  async text() {
    return stream.readableStreamToString(this.stream());
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  remove() {
    return promises.unlink(this.filepath);
  }
  getFilePath() {
    return this.filepath;
  }
}

exports.NodeOnDiskFile = NodeOnDiskFile;
exports.createFileUploadHandler = createFileUploadHandler;
