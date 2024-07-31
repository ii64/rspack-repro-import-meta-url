"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_selectors_CSSSelector_ts"],{

/***/ "./src/panels/recorder/injected/selectors/CSSSelector.ts":
/*!***************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/CSSSelector.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorRangeOps: () => (/* binding */ SelectorRangeOps),
/* harmony export */   computeCSSSelector: () => (/* binding */ computeCSSSelector),
/* harmony export */   findMinMax: () => (/* binding */ findMinMax),
/* harmony export */   getSelectorPart: () => (/* binding */ getSelectorPart),
/* harmony export */   queryCSSSelectorAll: () => (/* binding */ queryCSSSelectorAll)
/* harmony export */ });
/* harmony import */ var _Selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector.js */ "./src/panels/recorder/injected/selectors/Selector.ts");
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
var _SelectorRangeOps_buffer, _SelectorRangeOps_attributes, _SelectorRangeOps_depth;

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
    fns.self ?? (fns.self = (i) => i);
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
    constructor(attributes = []) {
        // Close chains (using `>`) are stored in inner arrays.
        _SelectorRangeOps_buffer.set(this, [[]]);
        _SelectorRangeOps_attributes.set(this, void 0);
        _SelectorRangeOps_depth.set(this, 0);
        __classPrivateFieldSet(this, _SelectorRangeOps_attributes, attributes, "f");
    }
    inc(node) {
        return node.parentNode ?? node.getRootNode();
    }
    valueOf(node) {
        const part = getSelectorPart(node, __classPrivateFieldGet(this, _SelectorRangeOps_attributes, "f"));
        if (!part) {
            throw new Error('Node is not an element');
        }
        if (__classPrivateFieldGet(this, _SelectorRangeOps_depth, "f") > 1) {
            // Implies this selector is for a distant ancestor.
            __classPrivateFieldGet(this, _SelectorRangeOps_buffer, "f").unshift([part]);
        }
        else {
            // Implies this selector is for a parent.
            __classPrivateFieldGet(this, _SelectorRangeOps_buffer, "f")[0].unshift(part);
        }
        __classPrivateFieldSet(this, _SelectorRangeOps_depth, 0, "f");
        return __classPrivateFieldGet(this, _SelectorRangeOps_buffer, "f").map(parts => parts.join(' > ')).join(' ');
    }
    gte(selector, node) {
        var _a;
        __classPrivateFieldSet(this, _SelectorRangeOps_depth, (_a = __classPrivateFieldGet(this, _SelectorRangeOps_depth, "f"), ++_a), "f");
        return node.querySelectorAll(selector).length === 1;
    }
}
_SelectorRangeOps_buffer = new WeakMap(), _SelectorRangeOps_attributes = new WeakMap(), _SelectorRangeOps_depth = new WeakMap();
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


/***/ }),

/***/ "./src/panels/recorder/injected/selectors/Selector.ts":
/*!************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/Selector.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPart: () => (/* binding */ SelectorPart)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SelectorPart {
    constructor(value, optimized) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "optimized", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
        this.optimized = optimized || false;
    }
    toString() {
        return this.value;
    }
}


/***/ })

}]);