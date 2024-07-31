"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_PSelectorParser_ts"],{

/***/ "./src/third_party/puppeteer/package/src/common/PSelectorParser.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/PSelectorParser.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsePSelectors: () => (/* binding */ parsePSelectors)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _injected_PQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../injected/PQuerySelector.js */ "./src/third_party/puppeteer/package/src/injected/PQuerySelector.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */


Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['nesting'] = /&/g;
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())['combinator'] = /\s*(>>>>?|[\s>+~])\s*/g;
const ESCAPE_REGEXP = /\\[\s\S]/g;
const unquote = (text) => {
    if (text.length <= 1) {
        return text;
    }
    if ((text[0] === '"' || text[0] === "'") && text.endsWith(text[0])) {
        text = text.slice(1, -1);
    }
    return text.replace(ESCAPE_REGEXP, match => {
        return match[1];
    });
};
/**
 * @internal
 */
function parsePSelectors(selector) {
    let isPureCSS = true;
    let hasAria = false;
    let hasPseudoClasses = false;
    const tokens = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selector);
    if (tokens.length === 0) {
        return [[], isPureCSS, hasPseudoClasses, false];
    }
    let compoundSelector = [];
    let complexSelector = [compoundSelector];
    const selectors = [complexSelector];
    const storage = [];
    for (const token of tokens) {
        switch (token.type) {
            case 'combinator':
                switch (token.content) {
                    case _injected_PQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.PCombinator.Descendent:
                        isPureCSS = false;
                        if (storage.length) {
                            compoundSelector.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(storage));
                            storage.splice(0);
                        }
                        compoundSelector = [];
                        complexSelector.push(_injected_PQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.PCombinator.Descendent);
                        complexSelector.push(compoundSelector);
                        continue;
                    case _injected_PQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.PCombinator.Child:
                        isPureCSS = false;
                        if (storage.length) {
                            compoundSelector.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(storage));
                            storage.splice(0);
                        }
                        compoundSelector = [];
                        complexSelector.push(_injected_PQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.PCombinator.Child);
                        complexSelector.push(compoundSelector);
                        continue;
                }
                break;
            case 'pseudo-element':
                if (!token.name.startsWith('-p-')) {
                    break;
                }
                isPureCSS = false;
                if (storage.length) {
                    compoundSelector.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(storage));
                    storage.splice(0);
                }
                const name = token.name.slice(3);
                if (name === 'aria') {
                    hasAria = true;
                }
                compoundSelector.push({
                    name,
                    value: unquote(token.argument ?? ''),
                });
                continue;
            case 'pseudo-class':
                hasPseudoClasses = true;
                break;
            case 'comma':
                if (storage.length) {
                    compoundSelector.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(storage));
                    storage.splice(0);
                }
                compoundSelector = [];
                complexSelector = [compoundSelector];
                selectors.push(complexSelector);
                continue;
        }
        storage.push(token);
    }
    if (storage.length) {
        compoundSelector.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../third_party/parsel-js/parsel-js.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(storage));
    }
    return [selectors, isPureCSS, hasPseudoClasses, hasAria];
}


/***/ })

}]);