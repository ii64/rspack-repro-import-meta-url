"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_PQuerySelector_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js":
/*!***************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js ***!
  \***************************************************************************************/
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
//# sourceMappingURL=ARIAQuerySelector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js":
/*!*****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js ***!
  \*****************************************************************************************/
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
/**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
 */
class CustomQuerySelectorRegistry {
    #selectors = new Map();
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
        this.#selectors.set(name, {
            querySelector: handler.queryOne,
            querySelectorAll: handler.queryAll,
        });
    }
    unregister(name) {
        this.#selectors.delete(name);
    }
    get(name) {
        return this.#selectors.get(name);
    }
    clear() {
        this.#selectors.clear();
    }
}
const customQuerySelectors = new CustomQuerySelectorRegistry();
//# sourceMappingURL=CustomQuerySelector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PQuerySelector.js":
/*!************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/PQuerySelector.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pQuerySelector: () => (/* binding */ pQuerySelector),
/* harmony export */   pQuerySelectorAll: () => (/* binding */ pQuerySelectorAll)
/* harmony export */ });
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */ var _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARIAQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/ARIAQuerySelector.js");
/* harmony import */ var _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js");
/* harmony import */ var _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js");
/* harmony import */ var _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./XPathQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */






const IDENT_TOKEN_START = /[-\w\P{ASCII}*]/;
const isQueryableNode = (node) => {
    return 'querySelectorAll' in node;
};
class PQueryEngine {
    #complexSelector;
    #compoundSelector = [];
    #selector = undefined;
    elements;
    constructor(element, complexSelector) {
        this.elements = [element];
        this.#complexSelector = complexSelector;
        this.#next();
    }
    async run() {
        if (typeof this.#selector === 'string') {
            switch (this.#selector.trimStart()) {
                case ':scope':
                    // `:scope` has some special behavior depending on the node. It always
                    // represents the current node within a compound selector, but by
                    // itself, it depends on the node. For example, Document is
                    // represented by `<html>`, but any HTMLElement is not represented by
                    // itself (i.e. `null`). This can be troublesome if our combinators
                    // are used right after so we treat this selector specially.
                    this.#next();
                    break;
            }
        }
        for (; this.#selector !== undefined; this.#next()) {
            const selector = this.#selector;
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
    #next() {
        if (this.#compoundSelector.length !== 0) {
            this.#selector = this.#compoundSelector.shift();
            return;
        }
        if (this.#complexSelector.length === 0) {
            this.#selector = undefined;
            return;
        }
        const selector = this.#complexSelector.shift();
        switch (selector) {
            case ">>>>" /* PCombinator.Child */: {
                this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, _util_js__WEBPACK_IMPORTED_MODULE_4__.pierce);
                this.#next();
                break;
            }
            case ">>>" /* PCombinator.Descendent */: {
                this.elements = _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_0__.AsyncIterableUtil.flatMap(this.elements, _util_js__WEBPACK_IMPORTED_MODULE_4__.pierceAll);
                this.#next();
                break;
            }
            default:
                this.#compoundSelector = selector;
                this.#next();
                break;
        }
    }
}
class DepthCalculator {
    #cache = new WeakMap();
    calculate(node, depth = []) {
        if (node === null) {
            return depth;
        }
        if (node instanceof ShadowRoot) {
            node = node.host;
        }
        const cachedDepth = this.#cache.get(node);
        if (cachedDepth) {
            return [...cachedDepth, ...depth];
        }
        let index = 0;
        for (let prevSibling = node.previousSibling; prevSibling; prevSibling = prevSibling.previousSibling) {
            ++index;
        }
        const value = this.calculate(node.parentNode, [index]);
        this.#cache.set(node, value);
        return [...value, ...depth];
    }
}
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
//# sourceMappingURL=PQuerySelector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js ***!
  \*********************************************************************************/
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
//# sourceMappingURL=TextContent.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js":
/*!***************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textQuerySelectorAll: () => (/* binding */ textQuerySelectorAll)
/* harmony export */ });
/* harmony import */ var _TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContent.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
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

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js":
/*!****************************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/XPathQuerySelector.js ***!
  \****************************************************************************************/
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
//# sourceMappingURL=XPathQuerySelector.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js":
/*!**************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/injected/util.js ***!
  \**************************************************************************/
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
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js ***!
  \***********************************************************************************/
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
//# sourceMappingURL=AsyncIterableUtil.js.map

/***/ })

}]);