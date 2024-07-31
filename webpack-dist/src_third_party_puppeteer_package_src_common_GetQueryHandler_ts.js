"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_common_GetQueryHandler_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/AriaQueryHandler.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/AriaQueryHandler.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAQueryHandler: () => (/* binding */ ARIAQueryHandler)
/* harmony export */ });
/* harmony import */ var _common_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/src/util/AsyncIterableUtil.ts");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;



const isKnownAttribute = (attribute) => {
    return ['name', 'role'].includes(attribute);
};
const normalizeValue = (value) => {
    return value.replace(/ +/g, ' ').trim();
};
/**
 * The selectors consist of an accessible name to query for and optionally
 * further aria attributes on the form `[<attribute>=<value>]`.
 * Currently, we only support the `name` and `role` attribute.
 * The following examples showcase how the syntax works wrt. querying:
 *
 * - 'title[role="heading"]' queries for elements with name 'title' and role 'heading'.
 * - '[role="image"]' queries for elements with role 'image' and any name.
 * - 'label' queries for elements with name 'label' and any role.
 * - '[name=""][role="button"]' queries for elements with no name and role 'button'.
 */
const ATTRIBUTE_REGEXP = /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g;
const parseARIASelector = (selector) => {
    const queryOptions = {};
    const defaultName = selector.replace(ATTRIBUTE_REGEXP, (_, attribute, __, value) => {
        attribute = attribute.trim();
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(isKnownAttribute(attribute), `Unknown aria attribute "${attribute}" in selector`);
        queryOptions[attribute] = normalizeValue(value);
        return '';
    });
    if (defaultName && !queryOptions.name) {
        queryOptions.name = normalizeValue(defaultName);
    }
    return queryOptions;
};
/**
 * @internal
 */
class ARIAQueryHandler extends _common_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
    static async *queryAll(element, selector) {
        const { name, role } = parseARIASelector(selector);
        yield* element.queryAXTree(name, role);
    }
}
_a = ARIAQueryHandler;
Object.defineProperty(ARIAQueryHandler, "querySelector", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: async (node, selector, { ariaQuerySelector }) => {
        return await ariaQuerySelector(node, selector);
    }
});
Object.defineProperty(ARIAQueryHandler, "queryOne", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: async (element, selector) => {
        return ((await _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_2__.AsyncIterableUtil.first(_a.queryAll(element, selector))) ?? null);
    }
});


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/CSSQueryHandler.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/CSSQueryHandler.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSQueryHandler: () => (/* binding */ CSSQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class CSSQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
}
Object.defineProperty(CSSQueryHandler, "querySelector", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { cssQuerySelector }) => {
        return cssQuerySelector(element, selector);
    }
});
Object.defineProperty(CSSQueryHandler, "querySelectorAll", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { cssQuerySelectorAll }) => {
        return cssQuerySelectorAll(element, selector);
    }
});


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/CustomQueryHandler.ts":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/CustomQueryHandler.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomQueryHandlerRegistry: () => (/* binding */ CustomQueryHandlerRegistry),
/* harmony export */   clearCustomQueryHandlers: () => (/* binding */ clearCustomQueryHandlers),
/* harmony export */   customQueryHandlerNames: () => (/* binding */ customQueryHandlerNames),
/* harmony export */   customQueryHandlers: () => (/* binding */ customQueryHandlers),
/* harmony export */   registerCustomQueryHandler: () => (/* binding */ registerCustomQueryHandler),
/* harmony export */   unregisterCustomQueryHandler: () => (/* binding */ unregisterCustomQueryHandler)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/src/util/Function.ts");
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/* harmony import */ var _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScriptInjector.js */ "./src/third_party/puppeteer/package/src/common/ScriptInjector.ts");
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
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _CustomQueryHandlerRegistry_handlers;




/**
 * The registry of {@link CustomQueryHandler | custom query handlers}.
 *
 * @example
 *
 * ```ts
 * Puppeteer.customQueryHandlers.register('lit', { … });
 * const aHandle = await page.$('lit/…');
 * ```
 *
 * @internal
 */
class CustomQueryHandlerRegistry {
    constructor() {
        _CustomQueryHandlerRegistry_handlers.set(this, new Map());
    }
    get(name) {
        const handler = __classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").get(name);
        return handler ? handler[1] : undefined;
    }
    /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is
     * only allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```ts
     * Puppeteer.customQueryHandlers.register('lit', { … });
     * const aHandle = await page.$('lit/…');
     * ```
     *
     * @param name - Name to register under.
     * @param queryHandler - {@link CustomQueryHandler | Custom query handler} to
     * register.
     */
    register(name, handler) {
        var _a;
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!__classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").has(name), `Cannot register over existing handler: ${name}`);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
        const Handler = (_a = class extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.QueryHandler {
            },
            __setFunctionName(_a, "Handler"),
            Object.defineProperty(_a, "querySelectorAll", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)((node, selector, PuppeteerUtil) => {
                    return PuppeteerUtil.customQuerySelectors
                        .get(PLACEHOLDER('name'))
                        .querySelectorAll(node, selector);
                }, { name: JSON.stringify(name) })
            }),
            Object.defineProperty(_a, "querySelector", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)((node, selector, PuppeteerUtil) => {
                    return PuppeteerUtil.customQuerySelectors
                        .get(PLACEHOLDER('name'))
                        .querySelector(node, selector);
                }, { name: JSON.stringify(name) })
            }),
            _a);
        const registerScript = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)((PuppeteerUtil) => {
            PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER('name'), {
                queryAll: PLACEHOLDER('queryAll'),
                queryOne: PLACEHOLDER('queryOne'),
            });
        }, {
            name: JSON.stringify(name),
            queryAll: handler.queryAll
                ? (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.stringifyFunction)(handler.queryAll)
                : String(undefined),
            queryOne: handler.queryOne
                ? (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.stringifyFunction)(handler.queryOne)
                : String(undefined),
        }).toString();
        __classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").set(name, [registerScript, Handler]);
        _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.append(registerScript);
    }
    /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */
    unregister(name) {
        const handler = __classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").get(name);
        if (!handler) {
            throw new Error(`Cannot unregister unknown handler: ${name}`);
        }
        _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.pop(handler[0]);
        __classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").delete(name);
    }
    /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */
    names() {
        return [...__classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").keys()];
    }
    /**
     * Unregisters all custom query handlers.
     */
    clear() {
        for (const [registerScript] of __classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f")) {
            _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.pop(registerScript);
        }
        __classPrivateFieldGet(this, _CustomQueryHandlerRegistry_handlers, "f").clear();
    }
}
_CustomQueryHandlerRegistry_handlers = new WeakMap();
/**
 * @internal
 */
const customQueryHandlers = new CustomQueryHandlerRegistry();
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.registerCustomQueryHandler}
 *
 * @public
 */
function registerCustomQueryHandler(name, handler) {
    customQueryHandlers.register(name, handler);
}
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.unregisterCustomQueryHandler}
 *
 * @public
 */
function unregisterCustomQueryHandler(name) {
    customQueryHandlers.unregister(name);
}
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.customQueryHandlerNames}
 *
 * @public
 */
function customQueryHandlerNames() {
    return customQueryHandlers.names();
}
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.clearCustomQueryHandlers}
 *
 * @public
 */
function clearCustomQueryHandlers() {
    customQueryHandlers.clear();
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/GetQueryHandler.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/GetQueryHandler.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryHandlerAndSelector: () => (/* binding */ getQueryHandlerAndSelector)
/* harmony export */ });
/* harmony import */ var _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdp/AriaQueryHandler.js */ "./src/third_party/puppeteer/package/src/cdp/AriaQueryHandler.ts");
/* harmony import */ var _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/CSSQueryHandler.ts");
/* harmony import */ var _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/CustomQueryHandler.ts");
/* harmony import */ var _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PierceQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/PierceQueryHandler.ts");
/* harmony import */ var _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/PQueryHandler.ts");
/* harmony import */ var _PSelectorParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PSelectorParser.js */ "./src/third_party/puppeteer/package/src/common/PSelectorParser.ts");
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/* harmony import */ var _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/TextQueryHandler.ts");
/* harmony import */ var _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./XPathQueryHandler.js */ "./src/third_party/puppeteer/package/src/common/XPathQueryHandler.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */









const BUILTIN_QUERY_HANDLERS = {
    aria: _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.ARIAQueryHandler,
    pierce: _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_3__.PierceQueryHandler,
    xpath: _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_8__.XPathQueryHandler,
    text: _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.TextQueryHandler,
};
const QUERY_SEPARATORS = ['=', '/'];
/**
 * @internal
 */
function getQueryHandlerAndSelector(selector) {
    for (const handlerMap of [
        _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.customQueryHandlers.names().map(name => {
            return [name, _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.customQueryHandlers.get(name)];
        }),
        Object.entries(BUILTIN_QUERY_HANDLERS),
    ]) {
        for (const [name, QueryHandler] of handlerMap) {
            for (const separator of QUERY_SEPARATORS) {
                const prefix = `${name}${separator}`;
                if (selector.startsWith(prefix)) {
                    selector = selector.slice(prefix.length);
                    return {
                        updatedSelector: selector,
                        polling: name === 'aria' ? _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.RAF : _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.MUTATION,
                        QueryHandler,
                    };
                }
            }
        }
    }
    try {
        const [pSelector, isPureCSS, hasPseudoClasses, hasAria] = (0,_PSelectorParser_js__WEBPACK_IMPORTED_MODULE_5__.parsePSelectors)(selector);
        if (isPureCSS) {
            return {
                updatedSelector: selector,
                polling: hasPseudoClasses
                    ? _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.RAF
                    : _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.MUTATION,
                QueryHandler: _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.CSSQueryHandler,
            };
        }
        return {
            updatedSelector: JSON.stringify(pSelector),
            polling: hasAria ? _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.RAF : _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.MUTATION,
            QueryHandler: _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_4__.PQueryHandler,
        };
    }
    catch {
        return {
            updatedSelector: selector,
            polling: _QueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.PollingOptions.MUTATION,
            QueryHandler: _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.CSSQueryHandler,
        };
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/PQueryHandler.ts":
/*!***********************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/PQueryHandler.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PQueryHandler: () => (/* binding */ PQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class PQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
}
Object.defineProperty(PQueryHandler, "querySelectorAll", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { pQuerySelectorAll }) => {
        return pQuerySelectorAll(element, selector);
    }
});
Object.defineProperty(PQueryHandler, "querySelector", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { pQuerySelector }) => {
        return pQuerySelector(element, selector);
    }
});


/***/ }),

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


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/PierceQueryHandler.ts":
/*!****************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/PierceQueryHandler.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PierceQueryHandler: () => (/* binding */ PierceQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class PierceQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
}
Object.defineProperty(PierceQueryHandler, "querySelector", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { pierceQuerySelector }) => {
        return pierceQuerySelector(element, selector);
    }
});
Object.defineProperty(PierceQueryHandler, "querySelectorAll", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { pierceQuerySelectorAll }) => {
        return pierceQuerySelectorAll(element, selector);
    }
});


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/TextQueryHandler.ts":
/*!**************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/TextQueryHandler.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextQueryHandler: () => (/* binding */ TextQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class TextQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
}
Object.defineProperty(TextQueryHandler, "querySelectorAll", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { textQuerySelectorAll }) => {
        return textQuerySelectorAll(element, selector);
    }
});


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/common/XPathQueryHandler.ts":
/*!***************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/common/XPathQueryHandler.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XPathQueryHandler: () => (/* binding */ XPathQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/src/common/QueryHandler.ts");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class XPathQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
}
Object.defineProperty(XPathQueryHandler, "querySelectorAll", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { xpathQuerySelectorAll }) => {
        return xpathQuerySelectorAll(element, selector);
    }
});
Object.defineProperty(XPathQueryHandler, "querySelector", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: (element, selector, { xpathQuerySelectorAll }) => {
        for (const result of xpathQuerySelectorAll(element, selector, 1)) {
            return result;
        }
        return null;
    }
});


/***/ })

}]);