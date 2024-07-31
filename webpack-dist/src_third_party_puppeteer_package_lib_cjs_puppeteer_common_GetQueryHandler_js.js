"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_lib_cjs_puppeteer_common_GetQueryHandler_js"],{

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/AriaQueryHandler.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/AriaQueryHandler.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ARIAQueryHandler = void 0;
const QueryHandler_js_1 = __webpack_require__(/*! ../common/QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const AsyncIterableUtil_js_1 = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/AsyncIterableUtil.js");
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
        (0, assert_js_1.assert)(isKnownAttribute(attribute), `Unknown aria attribute "${attribute}" in selector`);
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
class ARIAQueryHandler extends QueryHandler_js_1.QueryHandler {
    static querySelector = async (node, selector, { ariaQuerySelector }) => {
        return await ariaQuerySelector(node, selector);
    };
    static async *queryAll(element, selector) {
        const { name, role } = parseARIASelector(selector);
        yield* element.queryAXTree(name, role);
    }
    static queryOne = async (element, selector) => {
        return ((await AsyncIterableUtil_js_1.AsyncIterableUtil.first(this.queryAll(element, selector))) ?? null);
    };
}
exports.ARIAQueryHandler = ARIAQueryHandler;
//# sourceMappingURL=AriaQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CSSQueryHandler.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CSSQueryHandler.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CSSQueryHandler = void 0;
const QueryHandler_js_1 = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
/**
 * @internal
 */
class CSSQueryHandler extends QueryHandler_js_1.QueryHandler {
    static querySelector = (element, selector, { cssQuerySelector }) => {
        return cssQuerySelector(element, selector);
    };
    static querySelectorAll = (element, selector, { cssQuerySelectorAll }) => {
        return cssQuerySelectorAll(element, selector);
    };
}
exports.CSSQueryHandler = CSSQueryHandler;
//# sourceMappingURL=CSSQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CustomQueryHandler.js":
/*!******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CustomQueryHandler.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearCustomQueryHandlers = exports.customQueryHandlerNames = exports.unregisterCustomQueryHandler = exports.registerCustomQueryHandler = exports.customQueryHandlers = exports.CustomQueryHandlerRegistry = void 0;
const assert_js_1 = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/assert.js");
const Function_js_1 = __webpack_require__(/*! ../util/Function.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/Function.js");
const QueryHandler_js_1 = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
const ScriptInjector_js_1 = __webpack_require__(/*! ./ScriptInjector.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ScriptInjector.js");
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
        (0, assert_js_1.assert)(!this.#handlers.has(name), `Cannot register over existing handler: ${name}`);
        (0, assert_js_1.assert)(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
        (0, assert_js_1.assert)(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
        const Handler = class extends QueryHandler_js_1.QueryHandler {
            static querySelectorAll = (0, Function_js_1.interpolateFunction)((node, selector, PuppeteerUtil) => {
                return PuppeteerUtil.customQuerySelectors
                    .get(PLACEHOLDER('name'))
                    .querySelectorAll(node, selector);
            }, { name: JSON.stringify(name) });
            static querySelector = (0, Function_js_1.interpolateFunction)((node, selector, PuppeteerUtil) => {
                return PuppeteerUtil.customQuerySelectors
                    .get(PLACEHOLDER('name'))
                    .querySelector(node, selector);
            }, { name: JSON.stringify(name) });
        };
        const registerScript = (0, Function_js_1.interpolateFunction)((PuppeteerUtil) => {
            PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER('name'), {
                queryAll: PLACEHOLDER('queryAll'),
                queryOne: PLACEHOLDER('queryOne'),
            });
        }, {
            name: JSON.stringify(name),
            queryAll: handler.queryAll
                ? (0, Function_js_1.stringifyFunction)(handler.queryAll)
                : String(undefined),
            queryOne: handler.queryOne
                ? (0, Function_js_1.stringifyFunction)(handler.queryOne)
                : String(undefined),
        }).toString();
        this.#handlers.set(name, [registerScript, Handler]);
        ScriptInjector_js_1.scriptInjector.append(registerScript);
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
        ScriptInjector_js_1.scriptInjector.pop(handler[0]);
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
            ScriptInjector_js_1.scriptInjector.pop(registerScript);
        }
        this.#handlers.clear();
    }
}
exports.CustomQueryHandlerRegistry = CustomQueryHandlerRegistry;
/**
 * @internal
 */
exports.customQueryHandlers = new CustomQueryHandlerRegistry();
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.registerCustomQueryHandler}
 *
 * @public
 */
function registerCustomQueryHandler(name, handler) {
    exports.customQueryHandlers.register(name, handler);
}
exports.registerCustomQueryHandler = registerCustomQueryHandler;
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.unregisterCustomQueryHandler}
 *
 * @public
 */
function unregisterCustomQueryHandler(name) {
    exports.customQueryHandlers.unregister(name);
}
exports.unregisterCustomQueryHandler = unregisterCustomQueryHandler;
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.customQueryHandlerNames}
 *
 * @public
 */
function customQueryHandlerNames() {
    return exports.customQueryHandlers.names();
}
exports.customQueryHandlerNames = customQueryHandlerNames;
/**
 * @deprecated Import {@link Puppeteer} and use the static method
 * {@link Puppeteer.clearCustomQueryHandlers}
 *
 * @public
 */
function clearCustomQueryHandlers() {
    exports.customQueryHandlers.clear();
}
exports.clearCustomQueryHandlers = clearCustomQueryHandlers;
//# sourceMappingURL=CustomQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/GetQueryHandler.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/GetQueryHandler.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getQueryHandlerAndSelector = void 0;
const AriaQueryHandler_js_1 = __webpack_require__(/*! ../cdp/AriaQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/cdp/AriaQueryHandler.js");
const CSSQueryHandler_js_1 = __webpack_require__(/*! ./CSSQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CSSQueryHandler.js");
const CustomQueryHandler_js_1 = __webpack_require__(/*! ./CustomQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/CustomQueryHandler.js");
const PierceQueryHandler_js_1 = __webpack_require__(/*! ./PierceQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PierceQueryHandler.js");
const PQueryHandler_js_1 = __webpack_require__(/*! ./PQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PQueryHandler.js");
const PSelectorParser_js_1 = __webpack_require__(/*! ./PSelectorParser.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PSelectorParser.js");
const TextQueryHandler_js_1 = __webpack_require__(/*! ./TextQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TextQueryHandler.js");
const XPathQueryHandler_js_1 = __webpack_require__(/*! ./XPathQueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/XPathQueryHandler.js");
const BUILTIN_QUERY_HANDLERS = {
    aria: AriaQueryHandler_js_1.ARIAQueryHandler,
    pierce: PierceQueryHandler_js_1.PierceQueryHandler,
    xpath: XPathQueryHandler_js_1.XPathQueryHandler,
    text: TextQueryHandler_js_1.TextQueryHandler,
};
const QUERY_SEPARATORS = ['=', '/'];
/**
 * @internal
 */
function getQueryHandlerAndSelector(selector) {
    for (const handlerMap of [
        CustomQueryHandler_js_1.customQueryHandlers.names().map(name => {
            return [name, CustomQueryHandler_js_1.customQueryHandlers.get(name)];
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
        const [pSelector, isPureCSS, hasPseudoClasses, hasAria] = (0, PSelectorParser_js_1.parsePSelectors)(selector);
        if (isPureCSS) {
            return {
                updatedSelector: selector,
                polling: hasPseudoClasses
                    ? "raf" /* PollingOptions.RAF */
                    : "mutation" /* PollingOptions.MUTATION */,
                QueryHandler: CSSQueryHandler_js_1.CSSQueryHandler,
            };
        }
        return {
            updatedSelector: JSON.stringify(pSelector),
            polling: hasAria ? "raf" /* PollingOptions.RAF */ : "mutation" /* PollingOptions.MUTATION */,
            QueryHandler: PQueryHandler_js_1.PQueryHandler,
        };
    }
    catch {
        return {
            updatedSelector: selector,
            polling: "mutation" /* PollingOptions.MUTATION */,
            QueryHandler: CSSQueryHandler_js_1.CSSQueryHandler,
        };
    }
}
exports.getQueryHandlerAndSelector = getQueryHandlerAndSelector;
//# sourceMappingURL=GetQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PQueryHandler.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PQueryHandler.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PQueryHandler = void 0;
const QueryHandler_js_1 = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
/**
 * @internal
 */
class PQueryHandler extends QueryHandler_js_1.QueryHandler {
    static querySelectorAll = (element, selector, { pQuerySelectorAll }) => {
        return pQuerySelectorAll(element, selector);
    };
    static querySelector = (element, selector, { pQuerySelector }) => {
        return pQuerySelector(element, selector);
    };
}
exports.PQueryHandler = PQueryHandler;
//# sourceMappingURL=PQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PierceQueryHandler.js":
/*!******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/PierceQueryHandler.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PierceQueryHandler = void 0;
const QueryHandler_js_1 = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
/**
 * @internal
 */
class PierceQueryHandler extends QueryHandler_js_1.QueryHandler {
    static querySelector = (element, selector, { pierceQuerySelector }) => {
        return pierceQuerySelector(element, selector);
    };
    static querySelectorAll = (element, selector, { pierceQuerySelectorAll }) => {
        return pierceQuerySelectorAll(element, selector);
    };
}
exports.PierceQueryHandler = PierceQueryHandler;
//# sourceMappingURL=PierceQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ScriptInjector.js":
/*!**************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/ScriptInjector.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.scriptInjector = exports.ScriptInjector = void 0;
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const injected_js_1 = __webpack_require__(/*! ../generated/injected.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/generated/injected.js");
/**
 * @internal
 */
class ScriptInjector {
    #updated = false;
    #amendments = new Set();
    // Appends a statement of the form `(PuppeteerUtil) => {...}`.
    append(statement) {
        this.#update(() => {
            this.#amendments.add(statement);
        });
    }
    pop(statement) {
        this.#update(() => {
            this.#amendments.delete(statement);
        });
    }
    inject(inject, force = false) {
        if (this.#updated || force) {
            inject(this.#get());
        }
        this.#updated = false;
    }
    #update(callback) {
        callback();
        this.#updated = true;
    }
    #get() {
        return `(() => {
      const module = {};
      ${injected_js_1.source}
      ${[...this.#amendments]
            .map(statement => {
            return `(${statement})(module.exports.default);`;
        })
            .join('')}
      return module.exports.default;
    })()`;
    }
}
exports.ScriptInjector = ScriptInjector;
/**
 * @internal
 */
exports.scriptInjector = new ScriptInjector();
//# sourceMappingURL=ScriptInjector.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TextQueryHandler.js":
/*!****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/TextQueryHandler.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextQueryHandler = void 0;
const QueryHandler_js_1 = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
/**
 * @internal
 */
class TextQueryHandler extends QueryHandler_js_1.QueryHandler {
    static querySelectorAll = (element, selector, { textQuerySelectorAll }) => {
        return textQuerySelectorAll(element, selector);
    };
}
exports.TextQueryHandler = TextQueryHandler;
//# sourceMappingURL=TextQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/XPathQueryHandler.js":
/*!*****************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/XPathQueryHandler.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XPathQueryHandler = void 0;
const QueryHandler_js_1 = __webpack_require__(/*! ./QueryHandler.js */ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/common/QueryHandler.js");
/**
 * @internal
 */
class XPathQueryHandler extends QueryHandler_js_1.QueryHandler {
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
exports.XPathQueryHandler = XPathQueryHandler;
//# sourceMappingURL=XPathQueryHandler.js.map

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/AsyncIterableUtil.js":
/*!***************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/cjs/puppeteer/util/AsyncIterableUtil.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncIterableUtil = void 0;
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
exports.AsyncIterableUtil = AsyncIterableUtil;
//# sourceMappingURL=AsyncIterableUtil.js.map

/***/ })

}]);