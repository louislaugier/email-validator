var $kg1kr$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "PackageLocalizationProvider", () => $417d44b6975b2ee7$export$9ec1fc026a5460ba);
$parcel$export(module.exports, "getPackageLocalizationScript", () => $417d44b6975b2ee7$export$fe9518edbbdc73da);
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $417d44b6975b2ee7$export$9ec1fc026a5460ba(props) {
    if (typeof document !== 'undefined') {
        console.log('PackageLocalizationProvider should only be rendered on the server.');
        return null;
    }
    let { locale: locale, strings: strings } = props;
    return /*#__PURE__*/ (0, ($parcel$interopDefault($kg1kr$react))).createElement("script", {
        dangerouslySetInnerHTML: {
            __html: $417d44b6975b2ee7$export$fe9518edbbdc73da(locale, strings)
        }
    });
}
function $417d44b6975b2ee7$export$fe9518edbbdc73da(locale, strings) {
    return `window[Symbol.for('react-aria.i18n.locale')]=${JSON.stringify(locale)};{${$417d44b6975b2ee7$var$serialize(strings)}}`;
}
const $417d44b6975b2ee7$var$cache = new WeakMap();
function $417d44b6975b2ee7$var$serialize(strings) {
    let cached = $417d44b6975b2ee7$var$cache.get(strings);
    if (cached) return cached;
    // Find common strings between packages and hoist them into variables.
    let seen = new Set();
    let common = new Map();
    for(let pkg in strings)for(let key in strings[pkg]){
        let v = strings[pkg][key];
        let s = typeof v === 'string' ? JSON.stringify(v) : v.toString();
        if (seen.has(s) && !common.has(s)) {
            let name = String.fromCharCode(common.size > 25 ? common.size + 97 : common.size + 65);
            common.set(s, name);
        }
        seen.add(s);
    }
    let res = '';
    if (common.size > 0) res += 'let ';
    for (let [string, name] of common)res += `${name}=${string},`;
    if (common.size > 0) res = res.slice(0, -1) + ';';
    res += "window[Symbol.for('react-aria.i18n.strings')]={";
    for(let pkg in strings){
        res += `'${pkg}':{`;
        for(let key in strings[pkg]){
            let v = strings[pkg][key];
            let s = typeof v === 'string' ? JSON.stringify(v) : v.toString();
            if (common.has(s)) s = common.get(s);
            res += `${/[ ()]/.test(key) ? JSON.stringify(key) : key}:${s},`;
        }
        res = res.slice(0, -1) + '},';
    }
    res = res.slice(0, -1) + '};';
    $417d44b6975b2ee7$var$cache.set(strings, res);
    return res;
}


//# sourceMappingURL=index.js.map
