"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_AriaQueryHandler_js-third_party_puppeteer-f16f10"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js":
/*!*********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/AriaQueryHandler.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAQueryHandler: () => (/* binding */ ARIAQueryHandler)
/* harmony export */ });
/* harmony import */ var _common_QueryHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/QueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/QueryHandler.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */ var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
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

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js":
/*!************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: () => (/* binding */ assert)
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
const assert = (value, message) => {
    if (!value) {
        throw new Error(message);
    }
};
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js":
/*!****************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncDisposableStack: () => (/* binding */ AsyncDisposableStack),
/* harmony export */   DisposableStack: () => (/* binding */ DisposableStack),
/* harmony export */   asyncDisposeSymbol: () => (/* binding */ asyncDisposeSymbol),
/* harmony export */   disposeSymbol: () => (/* binding */ disposeSymbol)
/* harmony export */ });
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
Symbol.dispose ??= Symbol('dispose');
Symbol.asyncDispose ??= Symbol('asyncDispose');
/**
 * @internal
 */
const disposeSymbol = Symbol.dispose;
/**
 * @internal
 */
const asyncDisposeSymbol = Symbol.asyncDispose;
/**
 * @internal
 */
class DisposableStack {
    #disposed = false;
    #stack = [];
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
        return this.#disposed;
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    dispose() {
        if (this.#disposed) {
            return;
        }
        this.#disposed = true;
        for (const resource of this.#stack.reverse()) {
            resource[disposeSymbol]();
        }
    }
    /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */
    use(value) {
        if (value) {
            this.#stack.push(value);
        }
        return value;
    }
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(value, onDispose) {
        this.#stack.push({
            [disposeSymbol]() {
                onDispose(value);
            },
        });
        return value;
    }
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(onDispose) {
        this.#stack.push({
            [disposeSymbol]() {
                onDispose();
            },
        });
    }
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move() {
        if (this.#disposed) {
            throw new ReferenceError('a disposed stack can not use anything new'); // step 3
        }
        const stack = new DisposableStack(); // step 4-5
        stack.#stack = this.#stack;
        this.#disposed = true;
        return stack;
    }
    [disposeSymbol] = this.dispose;
    [Symbol.toStringTag] = 'DisposableStack';
}
/**
 * @internal
 */
class AsyncDisposableStack {
    #disposed = false;
    #stack = [];
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
        return this.#disposed;
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    async dispose() {
        if (this.#disposed) {
            return;
        }
        this.#disposed = true;
        for (const resource of this.#stack.reverse()) {
            await resource[asyncDisposeSymbol]();
        }
    }
    /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */
    use(value) {
        if (value) {
            this.#stack.push(value);
        }
        return value;
    }
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(value, onDispose) {
        this.#stack.push({
            [asyncDisposeSymbol]() {
                return onDispose(value);
            },
        });
        return value;
    }
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(onDispose) {
        this.#stack.push({
            [asyncDisposeSymbol]() {
                return onDispose();
            },
        });
    }
    /**
     * Move all resources out of this stack and into a new `DisposableStack`, and
     * marks this stack as disposed.
     *
     * @example
     *
     * ```ts
     * class C {
     *   #res1: Disposable;
     *   #res2: Disposable;
     *   #disposables: DisposableStack;
     *   constructor() {
     *     // stack will be disposed when exiting constructor for any reason
     *     using stack = new DisposableStack();
     *
     *     // get first resource
     *     this.#res1 = stack.use(getResource1());
     *
     *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
     *     this.#res2 = stack.use(getResource2());
     *
     *     // all operations succeeded, move resources out of `stack` so that
     *     // they aren't disposed when constructor exits
     *     this.#disposables = stack.move();
     *   }
     *
     *   [disposeSymbol]() {
     *     this.#disposables.dispose();
     *   }
     * }
     * ```
     */
    move() {
        if (this.#disposed) {
            throw new ReferenceError('a disposed stack can not use anything new'); // step 3
        }
        const stack = new AsyncDisposableStack(); // step 4-5
        stack.#stack = this.#stack;
        this.#disposed = true;
        return stack;
    }
    [asyncDisposeSymbol] = this.dispose;
    [Symbol.toStringTag] = 'AsyncDisposableStack';
}
//# sourceMappingURL=disposable.js.map

/***/ })

}]);