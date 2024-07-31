"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_selectors_PierceSelector_ts"],{

/***/ "./src/panels/recorder/injected/selectors/PierceSelector.ts":
/*!******************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/PierceSelector.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePierceSelector: () => (/* binding */ computePierceSelector),
/* harmony export */   queryPierceSelectorAll: () => (/* binding */ queryPierceSelectorAll)
/* harmony export */ });
/* harmony import */ var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSSelector.js */ "./src/panels/recorder/injected/selectors/CSSSelector.ts");
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PierceSelectorRangeOpts_selector, _PierceSelectorRangeOpts_attributes, _PierceSelectorRangeOpts_depth;


class PierceSelectorRangeOpts {
    constructor(attributes = []) {
        _PierceSelectorRangeOpts_selector.set(this, [[]]);
        _PierceSelectorRangeOpts_attributes.set(this, void 0);
        _PierceSelectorRangeOpts_depth.set(this, 0);
        __classPrivateFieldSet(this, _PierceSelectorRangeOpts_attributes, attributes, "f");
    }
    inc(node) {
        return node.getRootNode();
    }
    self(node) {
        return node instanceof ShadowRoot ? node.host : node;
    }
    valueOf(node) {
        const selector = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([node, node.getRootNode()], new _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorRangeOps(__classPrivateFieldGet(this, _PierceSelectorRangeOpts_attributes, "f")));
        if (__classPrivateFieldGet(this, _PierceSelectorRangeOpts_depth, "f") > 1) {
            __classPrivateFieldGet(this, _PierceSelectorRangeOpts_selector, "f").unshift([selector]);
        }
        else {
            __classPrivateFieldGet(this, _PierceSelectorRangeOpts_selector, "f")[0].unshift(selector);
        }
        __classPrivateFieldSet(this, _PierceSelectorRangeOpts_depth, 0, "f");
        return __classPrivateFieldGet(this, _PierceSelectorRangeOpts_selector, "f");
    }
    gte(selector, node) {
        var _a;
        __classPrivateFieldSet(this, _PierceSelectorRangeOpts_depth, (_a = __classPrivateFieldGet(this, _PierceSelectorRangeOpts_depth, "f"), ++_a), "f");
        // Note we use some insider logic here. `valueOf(node)` will always
        // correspond to `selector.flat().slice(1)`, so it suffices to check
        // uniqueness for `selector.flat()[0]`.
        return (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.pierceQuerySelectorAll)(node, selector[0][0]).length === 1;
    }
}
_PierceSelectorRangeOpts_selector = new WeakMap(), _PierceSelectorRangeOpts_attributes = new WeakMap(), _PierceSelectorRangeOpts_depth = new WeakMap();
/**
 * Computes the pierce CSS selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed pierce CSS selector.
 *
 * @internal
 */
const computePierceSelector = (node, attributes) => {
    try {
        const ops = new PierceSelectorRangeOpts(attributes);
        return (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([node, document], ops).flat();
    }
    catch {
        return undefined;
    }
};
const queryPierceSelectorAll = (selectors) => {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    else if (selectors.length === 0) {
        return [];
    }
    let lists = [[document.documentElement]];
    do {
        const selector = selectors.shift();
        const roots = [];
        for (const nodes of lists) {
            for (const node of nodes) {
                const list = (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.pierceQuerySelectorAll)(node.shadowRoot ?? node, selector);
                if (list.length > 0) {
                    roots.push(list);
                }
            }
        }
        lists = roots;
    } while (selectors.length > 0 && lists.length > 0);
    return lists.flatMap(list => [...list]);
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js":
/*!*********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pierceQuerySelector: () => (/* binding */ pierceQuerySelector),
/* harmony export */   pierceQuerySelectorAll: () => (/* binding */ pierceQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const pierceQuerySelector = (root, selector) => {
    let found = null;
    const search = (root) => {
        const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            const currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                search(currentNode.shadowRoot);
            }
            if (currentNode instanceof ShadowRoot) {
                continue;
            }
            if (currentNode !== root && !found && currentNode.matches(selector)) {
                found = currentNode;
            }
        } while (!found && iter.nextNode());
    };
    if (root instanceof Document) {
        root = root.documentElement;
    }
    search(root);
    return found;
};
/**
 * @internal
 */
const pierceQuerySelectorAll = (element, selector) => {
    const result = [];
    const collect = (root) => {
        const iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            const currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                collect(currentNode.shadowRoot);
            }
            if (currentNode instanceof ShadowRoot) {
                continue;
            }
            if (currentNode !== root && currentNode.matches(selector)) {
                result.push(currentNode);
            }
        } while (iter.nextNode());
    };
    if (element instanceof Document) {
        element = element.documentElement;
    }
    collect(element);
    return result;
};
//# sourceMappingURL=PierceQuerySelector.js.map

/***/ })

}]);