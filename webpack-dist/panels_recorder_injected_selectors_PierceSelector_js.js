"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_selectors_PierceSelector_js"],{

/***/ "./panels/recorder/injected/selectors/CSSSelector.js":
/*!***********************************************************!*\
  !*** ./panels/recorder/injected/selectors/CSSSelector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorRangeOps: () => (/* binding */ SelectorRangeOps),
/* harmony export */   computeCSSSelector: () => (/* binding */ computeCSSSelector),
/* harmony export */   findMinMax: () => (/* binding */ findMinMax),
/* harmony export */   getSelectorPart: () => (/* binding */ getSelectorPart),
/* harmony export */   queryCSSSelectorAll: () => (/* binding */ queryCSSSelectorAll)
/* harmony export */ });
/* harmony import */ var _Selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector.js */ "./panels/recorder/injected/selectors/Selector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const idSelector = (id) => {
    return `#${CSS.escape(id)}`;
};
const attributeSelector = (name, value) => {
    return `[${name}='${CSS.escape(value)}']`;
};
const classSelector = (selector, className) => {
    return `${selector}.${CSS.escape(className)}`;
};
const nthTypeSelector = (selector, index) => {
    return `${selector}:nth-of-type(${index + 1})`;
};
const typeSelector = (selector, type) => {
    return `${selector}${attributeSelector('type', type)}`;
};
const hasUniqueId = (node) => {
    return (Boolean(node.id) && node.getRootNode().querySelectorAll(idSelector(node.id)).length === 1);
};
const isUniqueAmongTagNames = (node, children) => {
    for (const child of children) {
        if (child !== node && child.tagName === node.tagName) {
            return false;
        }
    }
    return true;
};
const isUniqueAmongInputTypes = (node, children) => {
    for (const child of children) {
        if (child !== node && child instanceof HTMLInputElement && child.type === node.type) {
            return false;
        }
    }
    return true;
};
const getUniqueClassName = (node, children) => {
    const classNames = new Set(node.classList);
    for (const child of children) {
        if (child !== node) {
            for (const className of child.classList) {
                classNames.delete(className);
            }
            if (classNames.size === 0) {
                break;
            }
        }
    }
    if (classNames.size > 0) {
        return classNames.values().next().value;
    }
    return undefined;
};
const getTypeIndex = (node, children) => {
    let nthTypeIndex = 0;
    for (const child of children) {
        if (child === node) {
            return nthTypeIndex;
        }
        if (child.tagName === node.tagName) {
            ++nthTypeIndex;
        }
    }
    throw new Error('Node not found in children');
};
const getSelectorPart = (node, attributes = []) => {
    if (!(node instanceof Element)) {
        return;
    }
    // Declared attibutes have the greatest priority.
    for (const attribute of attributes) {
        const value = node.getAttribute(attribute);
        if (value) {
            return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(attributeSelector(attribute, value), true);
        }
    }
    // IDs are supposed to be globally unique, so this has second priority.
    if (hasUniqueId(node)) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(idSelector(node.id), true);
    }
    // All selectors will be prefixed with the tag name starting here.
    const selector = node.tagName.toLowerCase();
    // These can only appear once in the entire document, so handle this fast.
    switch (node.tagName) {
        case 'BODY':
        case 'HEAD':
        case 'HTML':
            return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(selector, true);
    }
    const parent = node.parentNode;
    // If the node has no parent, then the node must be detached. We handle this
    // gracefully.
    if (!parent) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(selector, true);
    }
    const children = parent.children;
    // Determine if the child has a unique node name among all children.
    if (isUniqueAmongTagNames(node, children)) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(selector, true);
    }
    // If it's an input, check uniqueness among types.
    if (node instanceof HTMLInputElement && isUniqueAmongInputTypes(node, children)) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(typeSelector(selector, node.type), true);
    }
    // Determine if the child has a unique class name.
    const className = getUniqueClassName(node, children);
    if (className !== undefined) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(classSelector(selector, className), true);
    }
    // Last resort. Just use the nth-type index. A priori, this will always exists.
    return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(nthTypeSelector(selector, getTypeIndex(node, children)), false);
};
/**
 * The goal of this function is to find the smallest index `i` that makes
 * `gte(valueOf(i), j)` true for all `j` in `[min, max)`. We do not use binary
 * search because
 *
 *  1. We expect the min-max to be concentrated towards the minimum (< 10
 *     iterations).
 *  2. We expect `valueOf` to be `O(n)`, so together with (1), the average will
 *     be around `O(n)` which is significantly faster than binary search in this
 *     case.
 */
const findMinMax = ([min, max], fns) => {
    fns.self ??= (i) => i;
    let index = fns.inc(min);
    let value;
    let isMax;
    do {
        value = fns.valueOf(min);
        isMax = true;
        while (index !== max) {
            min = fns.self(index);
            index = fns.inc(min);
            if (!fns.gte(value, index)) {
                isMax = false;
                break;
            }
        }
    } while (!isMax);
    return value;
};
class SelectorRangeOps {
    // Close chains (using `>`) are stored in inner arrays.
    #buffer = [[]];
    #attributes;
    #depth = 0;
    constructor(attributes = []) {
        this.#attributes = attributes;
    }
    inc(node) {
        return node.parentNode ?? node.getRootNode();
    }
    valueOf(node) {
        const part = getSelectorPart(node, this.#attributes);
        if (!part) {
            throw new Error('Node is not an element');
        }
        if (this.#depth > 1) {
            // Implies this selector is for a distant ancestor.
            this.#buffer.unshift([part]);
        }
        else {
            // Implies this selector is for a parent.
            this.#buffer[0].unshift(part);
        }
        this.#depth = 0;
        return this.#buffer.map(parts => parts.join(' > ')).join(' ');
    }
    gte(selector, node) {
        ++this.#depth;
        return node.querySelectorAll(selector).length === 1;
    }
}
/**
 * Computes the CSS selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed CSS selector.
 *
 * @internal
 */
const computeCSSSelector = (node, attributes) => {
    const selectors = [];
    // We want to find the minimal selector that is unique within a document. We
    // are slightly restricted since selectors cannot cross ShadowRoot borders, so
    // the actual goal is to find the minimal selector that is unique within a
    // root node. We then need to repeat this for each shadow root.
    try {
        let root;
        while (node instanceof Element) {
            root = node.getRootNode();
            selectors.unshift(findMinMax([node, root], new SelectorRangeOps(attributes)));
            node = root instanceof ShadowRoot ? root.host : root;
        }
    }
    catch {
        return undefined;
    }
    return selectors;
};
const queryCSSSelectorAll = (selectors) => {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    else if (selectors.length === 0) {
        return [];
    }
    let lists = [
        [document.documentElement],
    ];
    do {
        const selector = selectors.shift();
        const roots = [];
        for (const nodes of lists) {
            for (const node of nodes) {
                const list = (node.shadowRoot ?? node).querySelectorAll(selector);
                if (list.length > 0) {
                    roots.push(list);
                }
            }
        }
        lists = roots;
    } while (selectors.length > 0 && lists.length > 0);
    return lists.flatMap(list => [...list]);
};
//# sourceMappingURL=CSSSelector.js.map

/***/ }),

/***/ "./panels/recorder/injected/selectors/PierceSelector.js":
/*!**************************************************************!*\
  !*** ./panels/recorder/injected/selectors/PierceSelector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePierceSelector: () => (/* binding */ computePierceSelector),
/* harmony export */   queryPierceSelectorAll: () => (/* binding */ queryPierceSelectorAll)
/* harmony export */ });
/* harmony import */ var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSSelector.js */ "./panels/recorder/injected/selectors/CSSSelector.js");
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class PierceSelectorRangeOpts {
    #selector = [[]];
    #attributes;
    #depth = 0;
    constructor(attributes = []) {
        this.#attributes = attributes;
    }
    inc(node) {
        return node.getRootNode();
    }
    self(node) {
        return node instanceof ShadowRoot ? node.host : node;
    }
    valueOf(node) {
        const selector = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([node, node.getRootNode()], new _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorRangeOps(this.#attributes));
        if (this.#depth > 1) {
            this.#selector.unshift([selector]);
        }
        else {
            this.#selector[0].unshift(selector);
        }
        this.#depth = 0;
        return this.#selector;
    }
    gte(selector, node) {
        ++this.#depth;
        // Note we use some insider logic here. `valueOf(node)` will always
        // correspond to `selector.flat().slice(1)`, so it suffices to check
        // uniqueness for `selector.flat()[0]`.
        return (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.pierceQuerySelectorAll)(node, selector[0][0]).length === 1;
    }
}
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
//# sourceMappingURL=PierceSelector.js.map

/***/ }),

/***/ "./panels/recorder/injected/selectors/Selector.js":
/*!********************************************************!*\
  !*** ./panels/recorder/injected/selectors/Selector.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPart: () => (/* binding */ SelectorPart)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SelectorPart {
    value;
    optimized;
    constructor(value, optimized) {
        this.value = value;
        this.optimized = optimized || false;
    }
    toString() {
        return this.value;
    }
}
//# sourceMappingURL=Selector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js":
/*!*****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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