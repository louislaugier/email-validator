"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  useClipboard: () => useClipboard
});
module.exports = __toCommonJS(src_exports);
var import_react = require("react");
function useClipboard({ timeout = 2e3 } = {}) {
  const [error, setError] = (0, import_react.useState)(null);
  const [copied, setCopied] = (0, import_react.useState)(false);
  const [copyTimeout, setCopyTimeout] = (0, import_react.useState)(null);
  const onClearTimeout = (0, import_react.useCallback)(() => {
    if (copyTimeout) {
      clearTimeout(copyTimeout);
    }
  }, [copyTimeout]);
  const handleCopyResult = (0, import_react.useCallback)(
    (value) => {
      onClearTimeout();
      setCopyTimeout(setTimeout(() => setCopied(false), timeout));
      setCopied(value);
    },
    [onClearTimeout, timeout]
  );
  const copy = (0, import_react.useCallback)(
    (valueToCopy) => {
      if ("clipboard" in navigator) {
        navigator.clipboard.writeText(valueToCopy).then(() => handleCopyResult(true)).catch((err) => setError(err));
      } else {
        setError(new Error("useClipboard: navigator.clipboard is not supported"));
      }
    },
    [handleCopyResult]
  );
  const reset = (0, import_react.useCallback)(() => {
    setCopied(false);
    setError(null);
    onClearTimeout();
  }, [onClearTimeout]);
  return { copy, reset, error, copied };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useClipboard
});
