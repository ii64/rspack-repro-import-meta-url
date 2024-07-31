"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_esm_puppeteer_common_GetQueryHandler_js"],{

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAQueryHandler: () => (/* binding */ ARIAQueryHandler)
/* harmony export */ });
/* harmony import */ var _common_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



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
    static querySelector = async (node, selector, { ariaQuerySelector }) => {
        return await ariaQuerySelector(node, selector);
    };
    static async *queryAll(element, selector) {
        const { name, role } = parseARIASelector(selector);
        yield* element.queryAXTree(name, role);
    }
    static queryOne = async (element, selector) => {
        return ((await _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_2__.AsyncIterableUtil.first(this.queryAll(element, selector))) ?? null);
    };
}
//# sourceMappingURL=AriaQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/CSSQueryHandler.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/CSSQueryHandler.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSQueryHandler: () => (/* binding */ CSSQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class CSSQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
    static querySelector = (element, selector, { cssQuerySelector }) => {
        return cssQuerySelector(element, selector);
    };
    static querySelectorAll = (element, selector, { cssQuerySelectorAll }) => {
        return cssQuerySelectorAll(element, selector);
    };
}
//# sourceMappingURL=CSSQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js":
/*!******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomQueryHandlerRegistry: () => (/* binding */ CustomQueryHandlerRegistry),
/* harmony export */   clearCustomQueryHandlers: () => (/* binding */ clearCustomQueryHandlers),
/* harmony export */   customQueryHandlerNames: () => (/* binding */ customQueryHandlerNames),
/* harmony export */   customQueryHandlers: () => (/* binding */ customQueryHandlers),
/* harmony export */   registerCustomQueryHandler: () => (/* binding */ registerCustomQueryHandler),
/* harmony export */   unregisterCustomQueryHandler: () => (/* binding */ unregisterCustomQueryHandler)
/* harmony export */ });
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_Function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/Function.js");
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/* harmony import */ var _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScriptInjector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/ScriptInjector.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */




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
    #handlers = new Map();
    get(name) {
        const handler = this.#handlers.get(name);
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
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!this.#handlers.has(name), `Cannot register over existing handler: ${name}`);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
        (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert)(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
        const Handler = class extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_2__.QueryHandler {
            static querySelectorAll = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)((node, selector, PuppeteerUtil) => {
                return PuppeteerUtil.customQuerySelectors
                    .get(PLACEHOLDER('name'))
                    .querySelectorAll(node, selector);
            }, { name: JSON.stringify(name) });
            static querySelector = (0,_util_Function_js__WEBPACK_IMPORTED_MODULE_1__.interpolateFunction)((node, selector, PuppeteerUtil) => {
                return PuppeteerUtil.customQuerySelectors
                    .get(PLACEHOLDER('name'))
                    .querySelector(node, selector);
            }, { name: JSON.stringify(name) });
        };
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
        this.#handlers.set(name, [registerScript, Handler]);
        _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.append(registerScript);
    }
    /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */
    unregister(name) {
        const handler = this.#handlers.get(name);
        if (!handler) {
            throw new Error(`Cannot unregister unknown handler: ${name}`);
        }
        _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.pop(handler[0]);
        this.#handlers.delete(name);
    }
    /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */
    names() {
        return [...this.#handlers.keys()];
    }
    /**
     * Unregisters all custom query handlers.
     */
    clear() {
        for (const [registerScript] of this.#handlers) {
            _ScriptInjector_js__WEBPACK_IMPORTED_MODULE_3__.scriptInjector.pop(registerScript);
        }
        this.#handlers.clear();
    }
}
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
//# sourceMappingURL=CustomQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/GetQueryHandler.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/GetQueryHandler.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryHandlerAndSelector: () => (/* binding */ getQueryHandlerAndSelector)
/* harmony export */ });
/* harmony import */ var _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cdp/AriaQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js");
/* harmony import */ var _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/CSSQueryHandler.js");
/* harmony import */ var _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js");
/* harmony import */ var _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PierceQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PierceQueryHandler.js");
/* harmony import */ var _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PQueryHandler.js");
/* harmony import */ var _PSelectorParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PSelectorParser.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PSelectorParser.js");
/* harmony import */ var _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/TextQueryHandler.js");
/* harmony import */ var _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./XPathQueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/XPathQueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */








const BUILTIN_QUERY_HANDLERS = {
    aria: _cdp_AriaQueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.ARIAQueryHandler,
    pierce: _PierceQueryHandler_js__WEBPACK_IMPORTED_MODULE_3__.PierceQueryHandler,
    xpath: _XPathQueryHandler_js__WEBPACK_IMPORTED_MODULE_7__.XPathQueryHandler,
    text: _TextQueryHandler_js__WEBPACK_IMPORTED_MODULE_6__.TextQueryHandler,
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
                        polling: name === 'aria' ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */,
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
                    ? "raf" /* PollingOptions.RAF */
                    : "mutation" /* PollingOptions.MUTATION */,
                QueryHandler: _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.CSSQueryHandler,
            };
        }
        return {
            updatedSelector: JSON.stringify(pSelector),
            polling: hasAria ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */,
            QueryHandler: _PQueryHandler_js__WEBPACK_IMPORTED_MODULE_4__.PQueryHandler,
        };
    }
    catch {
        return {
            updatedSelector: selector,
            polling: "mutation" /* PollingOptions.MUTATION */,
            QueryHandler: _CSSQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.CSSQueryHandler,
        };
    }
}
//# sourceMappingURL=GetQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PQueryHandler.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PQueryHandler.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PQueryHandler: () => (/* binding */ PQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class PQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
    static querySelectorAll = (element, selector, { pQuerySelectorAll }) => {
        return pQuerySelectorAll(element, selector);
    };
    static querySelector = (element, selector, { pQuerySelector }) => {
        return pQuerySelector(element, selector);
    };
}
//# sourceMappingURL=PQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PSelectorParser.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PSelectorParser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsePSelectors: () => (/* binding */ parsePSelectors)
/* harmony export */ });
/* harmony import */ var _third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/parsel-js/parsel-js.js */ "./src/third_party/puppeteer/package/lib/esm/third_party/parsel-js/parsel-js.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.TOKENS['nesting'] = /&/g;
_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.TOKENS['combinator'] = /\s*(>>>>?|[\s>+~])\s*/g;
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
    const tokens = (0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.tokenize)(selector);
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
                    case ">>>" /* PCombinator.Descendent */:
                        isPureCSS = false;
                        if (storage.length) {
                            compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                            storage.splice(0);
                        }
                        compoundSelector = [];
                        complexSelector.push(">>>" /* PCombinator.Descendent */);
                        complexSelector.push(compoundSelector);
                        continue;
                    case ">>>>" /* PCombinator.Child */:
                        isPureCSS = false;
                        if (storage.length) {
                            compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
                            storage.splice(0);
                        }
                        compoundSelector = [];
                        complexSelector.push(">>>>" /* PCombinator.Child */);
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
                    compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
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
                    compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
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
        compoundSelector.push((0,_third_party_parsel_js_parsel_js_js__WEBPACK_IMPORTED_MODULE_0__.stringify)(storage));
    }
    return [selectors, isPureCSS, hasPseudoClasses, hasAria];
}
//# sourceMappingURL=PSelectorParser.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PierceQueryHandler.js":
/*!******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/PierceQueryHandler.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PierceQueryHandler: () => (/* binding */ PierceQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class PierceQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
    static querySelector = (element, selector, { pierceQuerySelector }) => {
        return pierceQuerySelector(element, selector);
    };
    static querySelectorAll = (element, selector, { pierceQuerySelectorAll }) => {
        return pierceQuerySelectorAll(element, selector);
    };
}
//# sourceMappingURL=PierceQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/TextQueryHandler.js":
/*!****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/TextQueryHandler.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextQueryHandler: () => (/* binding */ TextQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class TextQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
    static querySelectorAll = (element, selector, { textQuerySelectorAll }) => {
        return textQuerySelectorAll(element, selector);
    };
}
//# sourceMappingURL=TextQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/XPathQueryHandler.js":
/*!*****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/common/XPathQueryHandler.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XPathQueryHandler: () => (/* binding */ XPathQueryHandler)
/* harmony export */ });
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
class XPathQueryHandler extends _QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__.QueryHandler {
    static querySelectorAll = (element, selector, { xpathQuerySelectorAll }) => {
        return xpathQuerySelectorAll(element, selector);
    };
    static querySelector = (element, selector, { xpathQuerySelectorAll }) => {
        for (const result of xpathQuerySelectorAll(element, selector, 1)) {
            return result;
        }
        return null;
    };
}
//# sourceMappingURL=XPathQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/third_party/parsel-js/parsel-js.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/third_party/parsel-js/parsel-js.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOKENS: () => (/* binding */ TOKENS),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   tokenize: () => (/* binding */ tokenize)
/* harmony export */ });
/**
MIT License

Copyright (c) 2020 Lea Verou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
// ../../node_modules/parsel-js/dist/parsel.js
var TOKENS = {
  attribute: /\[\s*(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)\s*(?:(?<operator>\W?=)\s*(?<value>.+?)\s*(\s(?<caseSensitive>[iIsS]))?\s*)?\]/gu,
  id: /#(?<name>[-\w\P{ASCII}]+)/gu,
  class: /\.(?<name>[-\w\P{ASCII}]+)/gu,
  comma: /\s*,\s*/g,
  combinator: /\s*[\s>+~]\s*/g,
  "pseudo-element": /::(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
  "pseudo-class": /:(?<name>[-\w\P{ASCII}]+)(?:\((?<argument>¶*)\))?/gu,
  universal: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?\*/gu,
  type: /(?:(?<namespace>\*|[-\w\P{ASCII}]*)\|)?(?<name>[-\w\P{ASCII}]+)/gu
  // this must be last
};
var TRIM_TOKENS = /* @__PURE__ */ new Set(["combinator", "comma"]);
var getArgumentPatternByType = (type) => {
  switch (type) {
    case "pseudo-element":
    case "pseudo-class":
      return new RegExp(TOKENS[type].source.replace("(?<argument>\xB6*)", "(?<argument>.*)"), "gu");
    default:
      return TOKENS[type];
  }
};
function gobbleParens(text, offset) {
  let nesting = 0;
  let result = "";
  for (; offset < text.length; offset++) {
    const char = text[offset];
    switch (char) {
      case "(":
        ++nesting;
        break;
      case ")":
        --nesting;
        break;
    }
    result += char;
    if (nesting === 0) {
      return result;
    }
  }
  return result;
}
function tokenizeBy(text, grammar = TOKENS) {
  if (!text) {
    return [];
  }
  const tokens = [text];
  for (const [type, pattern] of Object.entries(grammar)) {
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token !== "string") {
        continue;
      }
      pattern.lastIndex = 0;
      const match = pattern.exec(token);
      if (!match) {
        continue;
      }
      const from = match.index - 1;
      const args = [];
      const content = match[0];
      const before = token.slice(0, from + 1);
      if (before) {
        args.push(before);
      }
      args.push({
        ...match.groups,
        type,
        content
      });
      const after = token.slice(from + content.length + 1);
      if (after) {
        args.push(after);
      }
      tokens.splice(i, 1, ...args);
    }
  }
  let offset = 0;
  for (const token of tokens) {
    switch (typeof token) {
      case "string":
        throw new Error(`Unexpected sequence ${token} found at index ${offset}`);
      case "object":
        offset += token.content.length;
        token.pos = [offset - token.content.length, offset];
        if (TRIM_TOKENS.has(token.type)) {
          token.content = token.content.trim() || " ";
        }
        break;
    }
  }
  return tokens;
}
var STRING_PATTERN = /(['"])([^\\\n]+?)\1/g;
var ESCAPE_PATTERN = /\\./g;
function tokenize(selector, grammar = TOKENS) {
  selector = selector.trim();
  if (selector === "") {
    return [];
  }
  const replacements = [];
  selector = selector.replace(ESCAPE_PATTERN, (value, offset) => {
    replacements.push({ value, offset });
    return "\uE000".repeat(value.length);
  });
  selector = selector.replace(STRING_PATTERN, (value, quote, content, offset) => {
    replacements.push({ value, offset });
    return `${quote}${"\uE001".repeat(content.length)}${quote}`;
  });
  {
    let pos = 0;
    let offset;
    while ((offset = selector.indexOf("(", pos)) > -1) {
      const value = gobbleParens(selector, offset);
      replacements.push({ value, offset });
      selector = `${selector.substring(0, offset)}(${"\xB6".repeat(value.length - 2)})${selector.substring(offset + value.length)}`;
      pos = offset + value.length;
    }
  }
  const tokens = tokenizeBy(selector, grammar);
  const changedTokens = /* @__PURE__ */ new Set();
  for (const replacement of replacements.reverse()) {
    for (const token of tokens) {
      const { offset, value } = replacement;
      if (!(token.pos[0] <= offset && offset + value.length <= token.pos[1])) {
        continue;
      }
      const { content } = token;
      const tokenOffset = offset - token.pos[0];
      token.content = content.slice(0, tokenOffset) + value + content.slice(tokenOffset + value.length);
      if (token.content !== content) {
        changedTokens.add(token);
      }
    }
  }
  for (const token of changedTokens) {
    const pattern = getArgumentPatternByType(token.type);
    if (!pattern) {
      throw new Error(`Unknown token type: ${token.type}`);
    }
    pattern.lastIndex = 0;
    const match = pattern.exec(token.content);
    if (!match) {
      throw new Error(`Unable to parse content for ${token.type}: ${token.content}`);
    }
    Object.assign(token, match.groups);
  }
  return tokens;
}
function* flatten(node, parent) {
  switch (node.type) {
    case "list":
      for (let child of node.list) {
        yield* flatten(child, node);
      }
      break;
    case "complex":
      yield* flatten(node.left, node);
      yield* flatten(node.right, node);
      break;
    case "compound":
      yield* node.list.map((token) => [token, node]);
      break;
    default:
      yield [node, parent];
  }
}
function stringify(listOrNode) {
  let tokens;
  if (Array.isArray(listOrNode)) {
    tokens = listOrNode;
  } else {
    tokens = [...flatten(listOrNode)].map(([token]) => token);
  }
  return tokens.map((token) => token.content).join("");
}



/***/ })

}]);