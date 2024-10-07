import os from 'os-browserify';
import { uptime } from './process.js';
var _endianness = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1 ? 'LE' : 'BE';
os.endianness = function() { return _endianness; };
os.homedir = function() { return '/home'; };
os.version = function() { return ''; };
os.arch = function() { return 'x64'; };
os.totalmem = function() {
  return navigator.deviceMemory !== undefined ? navigator.deviceMemory * (1 << 30) : 2 * (1 << 30);
};
os.cpus = function () {
  return Array(navigator.hardwareConcurrency || 0).fill({ model: '', times: {} });
};
os.uptime = uptime;
os.constants = {};
export default os;
export var version = os.version;
export var constants = os.constants;
export var EOL = os.EOL;
export var arch = os.arch;
export var cpus = os.cpus;
export var endianness = os.endianness;
export var freemem = os.freemem;
export var getNetworkInterfaces = os.getNetworkInterfaces;
export var homedir = os.homedir;
export var hostname = os.hostname;
export var loadavg = os.loadavg;
export var networkInterfaces = os.networkInterfaces;
export var platform = os.platform;
export var release = os.release;
export var tmpDir = os.tmpDir;
export var tmpdir = os.tmpdir;
export var totalmem = os.totalmem;
export var type = os.type;
export { uptime };
