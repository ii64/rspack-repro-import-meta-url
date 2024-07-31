"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_injected_PQuerySelector_ts"],{

/***/ "./src/third_party/puppeteer/package/src/injected/ARIAQuerySelector.ts":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/ARIAQuerySelector.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaQuerySelector: () => (/* binding */ ariaQuerySelector),
/* harmony export */   ariaQuerySelectorAll: () => (/* binding */ ariaQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const ariaQuerySelector = (root, selector) => {
    // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
    return globalThis.__ariaQuerySelector(root, selector);
};
const ariaQuerySelectorAll = async function* (root, selector) {
    // In Firefox sandboxes globalThis !== window and we expose bindings on globalThis.
    yield* await globalThis.__ariaQuerySelectorAll(root, selector);
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/CustomQuerySelector.ts":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/CustomQuerySelector.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customQuerySelectors: () => (/* binding */ customQuerySelectors)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CustomQuerySelectorRegistry_selectors;
/**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */
class CustomQuerySelectorRegistry {
    constructor() {
        _CustomQuerySelectorRegistry_selectors.set(this, new Map());
    }
    register(name, handler) {
        if (!handler.queryOne && handler.queryAll) {
            const querySelectorAll = handler.queryAll;
            handler.queryOne = (node, selector) => {
                for (const result of querySelectorAll(node, selector)) {
                    return result;
                }
                return null;
            };
        }
        else if (handler.queryOne && !handler.queryAll) {
            const querySelector = handler.queryOne;
            handler.queryAll = (node, selector) => {
                const result = querySelector(node, selector);
                return result ? [result] : [];
            };
        }
        else if (!handler.queryOne || !handler.queryAll) {
            throw new Error('At least one query method must be defined.');
        }
        __classPrivateFieldGet(this, _CustomQuerySelectorRegistry_selectors, "f").set(name, {
            querySelector: handler.queryOne,
            querySelectorAll: handler.queryAll,
        });
    }
    unregister(name) {
        __classPrivateFieldGet(this, _CustomQuerySelectorRegistry_selectors, "f").delete(name);
    }
    get(name) {
        return __classPrivateFieldGet(this, _CustomQuerySelectorRegistry_selectors, "f").get(name);
    }
    clear() {
        __classPrivateFieldGet(this, _CustomQuerySelectorRegistry_selectors, "f").clear();
    }
}
_CustomQuerySelectorRegistry_selectors = new WeakMap();
const customQuerySelectors = new CustomQuerySelectorRegistry();


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/PQuerySelector.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/PQuerySelector.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PCombinator: () => (/* binding */ PCombinator),
/* harmony export */   pQuerySelector: () => (/* binding */ pQuerySelector),
/* harmony export */   pQuerySelectorAll: () => (/* binding */ pQuerySelectorAll)
/* harmony export */ });
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/src/util/AsyncIterableUtil.ts");
/* harmony import */ var _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARIAQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/ARIAQuerySelector.ts");
/* harmony import */ var _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/CustomQuerySelector.ts");
/* harmony import */ var _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/TextQuerySelector.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/src/injected/util.ts");
/* harmony import */ var _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XPathQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/XPathQuerySelector.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _PQueryEngine_instances, _PQueryEngine_complexSelector, _PQueryEngine_compoundSelector, _PQueryEngine_selector, _PQueryEngine_next, _DepthCalculator_cache;






const IDENT_TOKEN_START = /[-\w\P{ASCII}*]/;
/**
 * @internal
 */
var PCombinator;
(function (PCombinator) {
    PCombinator["Descendent"] = ">>>";
    PCombinator["Child"] = ">>>>";
})(PCombinator || (PCombinator = {}));
const isQueryableNode = (node) => {
    return 'querySelectorAll' in node;
};
class PQueryEngine {
    constructor(element, complexSelector) {
        _PQueryEngine_instances.add(this);
        _PQueryEngine_complexSelector.set(this, void 0);
        _PQueryEngine_compoundSelector.set(this, []);
        _PQueryEngine_selector.set(this, undefined);
        Object.defineProperty(this, "elements", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.elements = [element];
        __classPrivateFieldSet(this, _PQueryEngine_complexSelector, complexSelector, "f");
        __classPrivateFieldGet(this, _PQueryEngine_instances, "m", _PQueryEngine_next).call(this);
    }
    async run() {
        if (typeof __classPrivateFieldGet(this, _PQueryEngine_selector, "f") === 'string') {
            switch (__classPrivateFieldGet(this, _PQueryEngine_selector, "f").trimStart()) {
                case ':scope':
                    // `:scope` has some special behavior depending on the node. It always
                    // represents the current node within a compound selector, but by
                    // itself, it depends on the node. For example, Document is
                    // represented by `<html>`, but any HTMLElement is not represented by
                    // itself (i.e. `null`). This can be troublesome if our combinators
                    // are used right after so we treat this selector specially.
                    __classPrivateFieldGet(this, _PQueryEngine_instances, "m", _PQueryEngine_next).call(this);
                    break;
            }
        }
        for (; __classPrivateFieldGet(this, _PQueryEngine_selector, "f") !== undefined; __classPrivateFieldGet(this, _PQueryEngine_instances, "m", _PQueryEngine_next).call(this)) {
            const selector = __classPrivateFieldGet(this, _PQueryEngine_selector, "f");
            if (typeof selector === 'string') {
                // The regular expression tests if the selector is a type/universal
                // selector. Any other case means we want to apply the selector onto
                // the element itself (e.g. `element.class`, `element>div`,
                // `element:hover`, etc.).
                if (selector[0] && IDENT_TOKEN_START.test(selector[0])) {
                    this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, async function* (element) {
                        if (isQueryableNode(element)) {
                            yield* element.querySelectorAll(selector);
                        }
                    });
                }
                else {
                    this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, async function* (element) {
                        if (!element.parentElement) {
                            if (!isQueryableNode(element)) {
                                return;
                            }
                            yield* element.querySelectorAll(selector);
                            return;
                        }
                        let index = 0;
                        for (const child of element.parentElement.children) {
                            ++index;
                            if (child === element) {
                                break;
                            }
                        }
                        yield* element.parentElement.querySelectorAll(`:scope>:nth-child(${index})${selector}`);
                    });
                }
            }
            else {
                this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, async function* (element) {
                    switch (selector.name) {
                        case 'text':
                            yield* (0,_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_3__.textQuerySelectorAll)(element, selector.value);
                            break;
                        case 'xpath':
                            yield* (0,_XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__.xpathQuerySelectorAll)(element, selector.value);
                            break;
                        case 'aria':
                            yield* (0,_ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.ariaQuerySelectorAll)(element, selector.value);
                            break;
                        default:
                            const querySelector = _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__.customQuerySelectors.get(selector.name);
                            if (!querySelector) {
                                throw new Error(`Unknown selector type: ${selector.name}`);
                            }
                            yield* querySelector.querySelectorAll(element, selector.value);
                    }
                });
            }
        }
    }
}
_PQueryEngine_complexSelector = new WeakMap(), _PQueryEngine_compoundSelector = new WeakMap(), _PQueryEngine_selector = new WeakMap(), _PQueryEngine_instances = new WeakSet(), _PQueryEngine_next = function _PQueryEngine_next() {
    if (__classPrivateFieldGet(this, _PQueryEngine_compoundSelector, "f").length !== 0) {
        __classPrivateFieldSet(this, _PQueryEngine_selector, __classPrivateFieldGet(this, _PQueryEngine_compoundSelector, "f").shift(), "f");
        return;
    }
    if (__classPrivateFieldGet(this, _PQueryEngine_complexSelector, "f").length === 0) {
        __classPrivateFieldSet(this, _PQueryEngine_selector, undefined, "f");
        return;
    }
    const selector = __classPrivateFieldGet(this, _PQueryEngine_complexSelector, "f").shift();
    switch (selector) {
        case PCombinator.Child: {
            this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, _util_js__WEBPACK_IMPORTED_MODULE_4__.pierce);
            __classPrivateFieldGet(this, _PQueryEngine_instances, "m", _PQueryEngine_next).call(this);
            break;
        }
        case PCombinator.Descendent: {
            this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, _util_js__WEBPACK_IMPORTED_MODULE_4__.pierceAll);
            __classPrivateFieldGet(this, _PQueryEngine_instances, "m", _PQueryEngine_next).call(this);
            break;
        }
        default:
            __classPrivateFieldSet(this, _PQueryEngine_compoundSelector, selector, "f");
            __classPrivateFieldGet(this, _PQueryEngine_instances, "m", _PQueryEngine_next).call(this);
            break;
    }
};
class DepthCalculator {
    constructor() {
        _DepthCalculator_cache.set(this, new WeakMap());
    }
    calculate(node, depth = []) {
        if (node === null) {
            return depth;
        }
        if (node instanceof ShadowRoot) {
            node = node.host;
        }
        const cachedDepth = __classPrivateFieldGet(this, _DepthCalculator_cache, "f").get(node);
        if (cachedDepth) {
            return [...cachedDepth, ...depth];
        }
        let index = 0;
        for (let prevSibling = node.previousSibling; prevSibling; prevSibling = prevSibling.previousSibling) {
            ++index;
        }
        const value = this.calculate(node.parentNode, [index]);
        __classPrivateFieldGet(this, _DepthCalculator_cache, "f").set(node, value);
        return [...value, ...depth];
    }
}
_DepthCalculator_cache = new WeakMap();
const compareDepths = (a, b) => {
    if (a.length + b.length === 0) {
        return 0;
    }
    const [i = -1, ...otherA] = a;
    const [j = -1, ...otherB] = b;
    if (i === j) {
        return compareDepths(otherA, otherB);
    }
    return i < j ? -1 : 1;
};
const domSort = async function* (elements) {
    const results = new Set();
    for await (const element of elements) {
        results.add(element);
    }
    const calculator = new DepthCalculator();
    yield* [...results.values()]
        .map(result => {
        return [result, calculator.calculate(result)];
    })
        .sort(([, a], [, b]) => {
        return compareDepths(a, b);
    })
        .map(([result]) => {
        return result;
    });
};
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
const pQuerySelectorAll = function (root, selector) {
    const selectors = JSON.parse(selector);
    // If there are any empty elements, then this implies the selector has
    // contiguous combinators (e.g. `>>> >>>>`) or starts/ends with one which we
    // treat as illegal, similar to existing behavior.
    if (selectors.some(parts => {
        let i = 0;
        return parts.some(parts => {
            if (typeof parts === 'string') {
                ++i;
            }
            else {
                i = 0;
            }
            return i > 1;
        });
    })) {
        throw new Error('Multiple deep combinators found in sequence.');
    }
    return domSort(_util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(selectors, selectorParts => {
        const query = new PQueryEngine(root, selectorParts);
        void query.run();
        return query.elements;
    }));
};
/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */
const pQuerySelector = async function (root, selector) {
    for await (const element of pQuerySelectorAll(root, selector)) {
        return element;
    }
    return null;
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/TextContent.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/TextContent.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/TextQuerySelector.ts":
/*!*****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/TextQuerySelector.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textQuerySelectorAll: () => (/* binding */ textQuerySelectorAll)
/* harmony export */ });
/* harmony import */ var _TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContent.js */ "./src/third_party/puppeteer/package/src/injected/TextContent.ts");
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/XPathQuerySelector.ts":
/*!******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/XPathQuerySelector.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xpathQuerySelectorAll: () => (/* binding */ xpathQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
const xpathQuerySelectorAll = function* (root, selector, maxResults = -1) {
    const doc = root.ownerDocument || document;
    const iterator = doc.evaluate(selector, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    const items = [];
    let item;
    // Read all results upfront to avoid
    // https://stackoverflow.com/questions/48235278/xpath-error-the-document-has-mutated-since-the-result-was-returned.
    while ((item = iterator.iterateNext())) {
        items.push(item);
        if (maxResults && items.length === maxResults) {
            break;
        }
    }
    for (let i = 0; i < items.length; i++) {
        item = items[i];
        yield item;
        delete items[i];
    }
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/util.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/util.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkVisibility: () => (/* binding */ checkVisibility),
/* harmony export */   pierce: () => (/* binding */ pierce),
/* harmony export */   pierceAll: () => (/* binding */ pierceAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const HIDDEN_VISIBILITY_VALUES = ['hidden', 'collapse'];
/**
 * @internal
 */
const checkVisibility = (node, visible) => {
    if (!node) {
        return visible === false;
    }
    if (visible === undefined) {
        return node;
    }
    const element = (node.nodeType === Node.TEXT_NODE ? node.parentElement : node);
    const style = window.getComputedStyle(element);
    const isVisible = style &&
        !HIDDEN_VISIBILITY_VALUES.includes(style.visibility) &&
        !isBoundingBoxEmpty(element);
    return visible === isVisible ? node : false;
};
function isBoundingBoxEmpty(element) {
    const rect = element.getBoundingClientRect();
    return rect.width === 0 || rect.height === 0;
}
const hasShadowRoot = (node) => {
    return 'shadowRoot' in node && node.shadowRoot instanceof ShadowRoot;
};
/**
 * @internal
 */
function* pierce(root) {
    if (hasShadowRoot(root)) {
        yield root.shadowRoot;
    }
    else {
        yield root;
    }
}
/**
 * @internal
 */
function* pierceAll(root) {
    root = pierce(root).next().value;
    yield root;
    const walkers = [document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)];
    for (const walker of walkers) {
        let node;
        while ((node = walker.nextNode())) {
            if (!node.shadowRoot) {
                continue;
            }
            yield node.shadowRoot;
            walkers.push(document.createTreeWalker(node.shadowRoot, NodeFilter.SHOW_ELEMENT));
        }
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/AsyncIterableUtil.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/AsyncIterableUtil.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncIterableUtil: () => (/* binding */ AsyncIterableUtil)
/* harmony export */ });
/**
 * @internal
 */
class AsyncIterableUtil {
    static async *map(iterable, map) {
        for await (const value of iterable) {
            yield await map(value);
        }
    }
    static async *flatMap(iterable, map) {
        for await (const value of iterable) {
            yield* map(value);
        }
    }
    static async collect(iterable) {
        const result = [];
        for await (const value of iterable) {
            result.push(value);
        }
        return result;
    }
    static async first(iterable) {
        for await (const value of iterable) {
            return value;
        }
        return;
    }
}


/***/ })

}]);