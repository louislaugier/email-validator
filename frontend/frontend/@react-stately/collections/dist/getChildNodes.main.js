
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "getChildNodes", () => $7a155683b0d79a6a$export$1005530eda016c13);
$parcel$export(module.exports, "getFirstItem", () => $7a155683b0d79a6a$export$fbdeaa6a76694f71);
$parcel$export(module.exports, "getNthItem", () => $7a155683b0d79a6a$export$5f3398f8733f90e2);
$parcel$export(module.exports, "getLastItem", () => $7a155683b0d79a6a$export$7475b2c64539e4cf);
$parcel$export(module.exports, "compareNodeOrder", () => $7a155683b0d79a6a$export$8c434b3a7a4dad6);
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7a155683b0d79a6a$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === 'function') return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $7a155683b0d79a6a$export$fbdeaa6a76694f71(iterable) {
    return $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, 0);
}
function $7a155683b0d79a6a$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $7a155683b0d79a6a$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $7a155683b0d79a6a$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$7a155683b0d79a6a$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $7a155683b0d79a6a$var$getAncestors(collection, node) {
    let parents = [];
    while((node === null || node === void 0 ? void 0 : node.parentKey) != null){
        node = collection.getItem(node.parentKey);
        parents.unshift(node);
    }
    return parents;
}


//# sourceMappingURL=getChildNodes.main.js.map
