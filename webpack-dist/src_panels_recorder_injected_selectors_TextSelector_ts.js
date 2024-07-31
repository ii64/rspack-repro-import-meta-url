"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_selectors_TextSelector_ts"],{

/***/ "./src/panels/recorder/injected/selectors/TextSelector.ts":
/*!****************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/TextSelector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeTextSelector: () => (/* binding */ computeTextSelector)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const MINIMUM_TEXT_LENGTH = 12;
const MAXIMUM_TEXT_LENGTH = 64;
const collect = (iter, max = Infinity) => {
    const results = [];
    for (const value of iter) {
        if (max <= 0) {
            break;
        }
        results.push(value);
        --max;
    }
    return results;
};
/**
 * Computes the text selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed text selector.
 *
 * @internal
 */
const computeTextSelector = (node) => {
    const content = (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.createTextContent)(node).full.trim();
    if (!content) {
        return;
    }
    // If it's short, just return it.
    if (content.length <= MINIMUM_TEXT_LENGTH) {
        const elements = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content), 2);
        if (elements.length !== 1 || elements[0] !== node) {
            return;
        }
        return [content];
    }
    // If it's too long, it's probably irrelevant.
    if (content.length > MAXIMUM_TEXT_LENGTH) {
        return;
    }
    // We do a binary search for the optimal length of a substring starting at 0.
    let left = MINIMUM_TEXT_LENGTH;
    let right = content.length;
    while (left <= right) {
        const center = left + ((right - left) >> 2);
        const elements = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content.slice(0, center)), 2);
        if (elements.length !== 1 || elements[0] !== node) {
            left = center + 1;
        }
        else {
            right = center - 1;
        }
    }
    // Never matched.
    if (right === content.length) {
        return;
    }
    // We attempt to round the word in the event we are in the middle of a word.
    const length = right + 1;
    const remainder = content.slice(length, length + MAXIMUM_TEXT_LENGTH);
    return [content.slice(0, length + remainder.search(/ |$/))];
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTextContent: () => (/* binding */ createTextContent),
/* harmony export */   isSuitableNodeForTextMatching: () => (/* binding */ isSuitableNodeForTextMatching)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const TRIVIAL_VALUE_INPUT_TYPES = new Set(['checkbox', 'image', 'radio']);
/**
 * Determines if the node has a non-trivial value property.
 *
 * @internal
 */
const isNonTrivialValueNode = (node) => {
    if (node instanceof HTMLSelectElement) {
        return true;
    }
    if (node instanceof HTMLTextAreaElement) {
        return true;
    }
    if (node instanceof HTMLInputElement &&
        !TRIVIAL_VALUE_INPUT_TYPES.has(node.type)) {
        return true;
    }
    return false;
};
const UNSUITABLE_NODE_NAMES = new Set(['SCRIPT', 'STYLE']);
/**
 * Determines whether a given node is suitable for text matching.
 *
 * @internal
 */
const isSuitableNodeForTextMatching = (node) => {
    return (!UNSUITABLE_NODE_NAMES.has(node.nodeName) && !document.head?.contains(node));
};
/**
 * Maps {@link Node}s to their computed {@link TextContent}.
 */
const textContentCache = new WeakMap();
const eraseFromCache = (node) => {
    while (node) {
        textContentCache.delete(node);
        if (node instanceof ShadowRoot) {
            node = node.host;
        }
        else {
            node = node.parentNode;
        }
    }
};
/**
 * Erases the cache when the tree has mutated text.
 */
const observedNodes = new WeakSet();
const textChangeObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        eraseFromCache(mutation.target);
    }
});
/**
 * Builds the text content of a node using some custom logic.
 *
 * @remarks
 * The primary reason this function exists is due to {@link ShadowRoot}s not having
 * text content.
 *
 * @internal
 */
const createTextContent = (root) => {
    let value = textContentCache.get(root);
    if (value) {
        return value;
    }
    value = { full: '', immediate: [] };
    if (!isSuitableNodeForTextMatching(root)) {
        return value;
    }
    let currentImmediate = '';
    if (isNonTrivialValueNode(root)) {
        value.full = root.value;
        value.immediate.push(root.value);
        root.addEventListener('input', event => {
            eraseFromCache(event.target);
        }, { once: true, capture: true });
    }
    else {
        for (let child = root.firstChild; child; child = child.nextSibling) {
            if (child.nodeType === Node.TEXT_NODE) {
                value.full += child.nodeValue ?? '';
                currentImmediate += child.nodeValue ?? '';
                continue;
            }
            if (currentImmediate) {
                value.immediate.push(currentImmediate);
            }
            currentImmediate = '';
            if (child.nodeType === Node.ELEMENT_NODE) {
                value.full += createTextContent(child).full;
            }
        }
        if (currentImmediate) {
            value.immediate.push(currentImmediate);
        }
        if (root instanceof Element && root.shadowRoot) {
            value.full += createTextContent(root.shadowRoot).full;
        }
        if (!observedNodes.has(root)) {
            textChangeObserver.observe(root, {
                childList: true,
                characterData: true,
                subtree: true,
            });
            observedNodes.add(root);
        }
    }
    textContentCache.set(root, value);
    return value;
};
//# sourceMappingURL=TextContent.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js":
/*!*******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textQuerySelectorAll: () => (/* binding */ textQuerySelectorAll)
/* harmony export */ });
/* harmony import */ var _TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContent.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
const textQuerySelectorAll = function* (root, selector) {
    let yielded = false;
    for (const node of root.childNodes) {
        if (node instanceof Element && (0,_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.isSuitableNodeForTextMatching)(node)) {
            let matches;
            if (!node.shadowRoot) {
                matches = textQuerySelectorAll(node, selector);
            }
            else {
                matches = textQuerySelectorAll(node.shadowRoot, selector);
            }
            for (const match of matches) {
                yield match;
                yielded = true;
            }
        }
    }
    if (yielded) {
        return;
    }
    if (root instanceof Element && (0,_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.isSuitableNodeForTextMatching)(root)) {
        const textContent = (0,_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.createTextContent)(root);
        if (textContent.full.includes(selector)) {
            yield root;
        }
    }
};
//# sourceMappingURL=TextQuerySelector.js.map

/***/ })

}]);