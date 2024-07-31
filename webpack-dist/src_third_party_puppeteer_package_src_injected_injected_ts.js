"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_injected_injected_ts"],{

/***/ "./src/third_party/puppeteer/package/src/injected/CSSSelector.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/CSSSelector.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssQuerySelector: () => (/* binding */ cssQuerySelector),
/* harmony export */   cssQuerySelectorAll: () => (/* binding */ cssQuerySelectorAll)
/* harmony export */ });
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const cssQuerySelector = (root, selector) => {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
const cssQuerySelectorAll = function (root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/PierceQuerySelector.ts":
/*!*******************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/PierceQuerySelector.ts ***!
  \*******************************************************************************/
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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/injected/injected.ts":
/*!********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/injected/injected.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./src/third_party/puppeteer/package/src/util/Deferred.ts");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/src/util/Function.ts");
/* harmony import */ var _ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ARIAQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/ARIAQuerySelector.ts");
/* harmony import */ var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSSelector.js */ "./src/third_party/puppeteer/package/src/injected/CSSSelector.ts");
/* harmony import */ var _CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/CustomQuerySelector.ts");
/* harmony import */ var _PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PierceQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/PierceQuerySelector.ts");
/* harmony import */ var _Poller_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Poller.js */ "./src/third_party/puppeteer/package/src/injected/Poller.ts");
/* harmony import */ var _PQuerySelector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/PQuerySelector.ts");
/* harmony import */ var _TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextContent.js */ "./src/third_party/puppeteer/package/src/injected/TextContent.ts");
/* harmony import */ var _TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/TextQuerySelector.ts");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.js */ "./src/third_party/puppeteer/package/src/injected/util.ts");
/* harmony import */ var _XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./XPathQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/XPathQuerySelector.ts");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */












/**
 * @internal
 */
const PuppeteerUtil = Object.freeze({
    ..._ARIAQuerySelector_js__WEBPACK_IMPORTED_MODULE_2__,
    ..._CustomQuerySelector_js__WEBPACK_IMPORTED_MODULE_4__,
    ..._PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_5__,
    ..._PQuerySelector_js__WEBPACK_IMPORTED_MODULE_7__,
    ..._TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_9__,
    ..._util_js__WEBPACK_IMPORTED_MODULE_10__,
    ..._XPathQuerySelector_js__WEBPACK_IMPORTED_MODULE_11__,
    ..._CSSSelector_js__WEBPACK_IMPORTED_MODULE_3__,
    Deferred: _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred,
    createFunction: _util_Function_js__WEBPACK_IMPORTED_MODULE_1__.createFunction,
    createTextContent: _TextContent_js__WEBPACK_IMPORTED_MODULE_8__.createTextContent,
    IntervalPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.IntervalPoller,
    isSuitableNodeForTextMatching: _TextContent_js__WEBPACK_IMPORTED_MODULE_8__.isSuitableNodeForTextMatching,
    MutationPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.MutationPoller,
    RAFPoller: _Poller_js__WEBPACK_IMPORTED_MODULE_6__.RAFPoller,
});
/**
 * @internal
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PuppeteerUtil);


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/util/Function.ts":
/*!****************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/util/Function.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFunction: () => (/* binding */ createFunction),
/* harmony export */   interpolateFunction: () => (/* binding */ interpolateFunction),
/* harmony export */   stringifyFunction: () => (/* binding */ stringifyFunction)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const createdFunctions = new Map();
/**
 * Creates a function from a string.
 *
 * @internal
 */
const createFunction = (functionValue) => {
    let fn = createdFunctions.get(functionValue);
    if (fn) {
        return fn;
    }
    fn = new Function(`return ${functionValue}`)();
    createdFunctions.set(functionValue, fn);
    return fn;
};
/**
 * @internal
 */
function stringifyFunction(fn) {
    let value = fn.toString();
    try {
        new Function(`(${value})`);
    }
    catch (err) {
        if (err.message.includes(`Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive`)) {
            // The content security policy does not allow Function eval. Let's
            // assume the value might be valid as is.
            return value;
        }
        // This means we might have a function shorthand (e.g. `test(){}`). Let's
        // try prefixing.
        let prefix = 'function ';
        if (value.startsWith('async ')) {
            prefix = `async ${prefix}`;
            value = value.substring('async '.length);
        }
        value = `${prefix}${value}`;
        try {
            new Function(`(${value})`);
        }
        catch {
            // We tried hard to serialize, but there's a weird beast here.
            throw new Error('Passed function cannot be serialized!');
        }
    }
    return value;
}
/**
 * Replaces `PLACEHOLDER`s with the given replacements.
 *
 * All replacements must be valid JS code.
 *
 * @example
 *
 * ```ts
 * interpolateFunction(() => PLACEHOLDER('test'), {test: 'void 0'});
 * // Equivalent to () => void 0
 * ```
 *
 * @internal
 */
const interpolateFunction = (fn, replacements) => {
    let value = stringifyFunction(fn);
    for (const [name, jsValue] of Object.entries(replacements)) {
        value = value.replace(new RegExp(`PLACEHOLDER\\(\\s*(?:'${name}'|"${name}")\\s*\\)`, 'g'), 
        // Wrapping this ensures tersers that accidentally inline PLACEHOLDER calls
        // are still valid. Without, we may get calls like ()=>{...}() which is
        // not valid.
        `(${jsValue})`);
    }
    return createFunction(value);
};


/***/ })

}]);