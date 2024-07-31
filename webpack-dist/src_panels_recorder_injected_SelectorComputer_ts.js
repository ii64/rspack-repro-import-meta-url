"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_SelectorComputer_ts"],{

/***/ "./src/panels/recorder/injected/MonotonicArray.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/injected/MonotonicArray.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonotonicArray: () => (/* binding */ MonotonicArray)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MonotonicArray_values, _MonotonicArray_nextId;
class MonotonicArray {
    constructor() {
        _MonotonicArray_values.set(this, new WeakMap());
        _MonotonicArray_nextId.set(this, 1);
        Object.defineProperty(this, "getOrInsert", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (node) => {
                var _a;
                const value = __classPrivateFieldGet(this, _MonotonicArray_values, "f").get(node);
                if (value !== undefined) {
                    return value;
                }
                __classPrivateFieldGet(this, _MonotonicArray_values, "f").set(node, __classPrivateFieldGet(this, _MonotonicArray_nextId, "f"));
                __classPrivateFieldSet(this, _MonotonicArray_nextId, (_a = __classPrivateFieldGet(this, _MonotonicArray_nextId, "f"), _a++, _a), "f");
                return __classPrivateFieldGet(this, _MonotonicArray_nextId, "f") - 1;
            }
        });
    }
}
_MonotonicArray_values = new WeakMap(), _MonotonicArray_nextId = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/injected/SelectorComputer.ts":
/*!**********************************************************!*\
  !*** ./src/panels/recorder/injected/SelectorComputer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorComputer: () => (/* binding */ SelectorComputer)
/* harmony export */ });
/* harmony import */ var _MonotonicArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonotonicArray.js */ "./src/panels/recorder/injected/MonotonicArray.ts");
/* harmony import */ var _selectors_ARIASelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors/ARIASelector.js */ "./src/panels/recorder/injected/selectors/ARIASelector.ts");
/* harmony import */ var _selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/CSSSelector.js */ "./src/panels/recorder/injected/selectors/CSSSelector.ts");
/* harmony import */ var _selectors_PierceSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors/PierceSelector.js */ "./src/panels/recorder/injected/selectors/PierceSelector.ts");
/* harmony import */ var _selectors_TextSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors/TextSelector.js */ "./src/panels/recorder/injected/selectors/TextSelector.ts");
/* harmony import */ var _selectors_XPath_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors/XPath.js */ "./src/panels/recorder/injected/selectors/XPath.ts");
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
var _SelectorComputer_customAttributes, _SelectorComputer_bindings, _SelectorComputer_logger, _SelectorComputer_nodes, _SelectorComputer_selectorFunctionsInOrder;






const prefixSelector = (selector, prefix) => {
    if (selector === undefined) {
        return;
    }
    if (typeof selector === 'string') {
        return `${prefix}/${selector}`;
    }
    return selector.map(selector => `${prefix}/${selector}`);
};
class SelectorComputer {
    constructor(bindings, logger, customAttribute = '', selectorTypesToRecord) {
        _SelectorComputer_customAttributes.set(this, [
            // Most common attributes first.
            'data-testid',
            'data-test',
            'data-qa',
            'data-cy',
            'data-test-id',
            'data-qa-id',
            'data-testing',
        ]);
        _SelectorComputer_bindings.set(this, void 0);
        _SelectorComputer_logger.set(this, void 0);
        _SelectorComputer_nodes.set(this, new _MonotonicArray_js__WEBPACK_IMPORTED_MODULE_0__.MonotonicArray());
        _SelectorComputer_selectorFunctionsInOrder.set(this, void 0);
        __classPrivateFieldSet(this, _SelectorComputer_bindings, bindings, "f");
        __classPrivateFieldSet(this, _SelectorComputer_logger, logger, "f");
        let selectorOrder = [
            'aria',
            'css',
            'xpath',
            'pierce',
            'text',
        ];
        if (customAttribute) {
            // Custom DOM attributes indicate a preference for CSS/XPath selectors.
            __classPrivateFieldGet(this, _SelectorComputer_customAttributes, "f").unshift(customAttribute);
            selectorOrder = [
                'css',
                'xpath',
                'pierce',
                'aria',
                'text',
            ];
        }
        __classPrivateFieldSet(this, _SelectorComputer_selectorFunctionsInOrder, selectorOrder
            .filter(type => {
            if (selectorTypesToRecord) {
                return selectorTypesToRecord.includes(type);
            }
            return true;
        })
            .map(selectorType => {
            switch (selectorType) {
                case 'css':
                    return this.getCSSSelector.bind(this);
                case 'xpath':
                    return this.getXPathSelector.bind(this);
                case 'pierce':
                    return this.getPierceSelector.bind(this);
                case 'aria':
                    return this.getARIASelector.bind(this);
                case 'text':
                    return this.getTextSelector.bind(this);
                default:
                    throw new Error('Unknown selector type: ' + selectorType);
            }
        }), "f");
    }
    getSelectors(node) {
        const selectors = [];
        for (const getSelector of __classPrivateFieldGet(this, _SelectorComputer_selectorFunctionsInOrder, "f")) {
            const selector = getSelector(node);
            if (selector) {
                selectors.push(selector);
            }
        }
        return selectors;
    }
    getCSSSelector(node) {
        return __classPrivateFieldGet(this, _SelectorComputer_logger, "f").timed(`getCSSSelector: ${__classPrivateFieldGet(this, _SelectorComputer_nodes, "f").getOrInsert(node)} ${node.nodeName}`, () => {
            return (0,_selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__.computeCSSSelector)(node, __classPrivateFieldGet(this, _SelectorComputer_customAttributes, "f"));
        });
    }
    getTextSelector(node) {
        return __classPrivateFieldGet(this, _SelectorComputer_logger, "f").timed(`getTextSelector: ${__classPrivateFieldGet(this, _SelectorComputer_nodes, "f").getOrInsert(node)} ${node.nodeName}`, () => {
            return prefixSelector((0,_selectors_TextSelector_js__WEBPACK_IMPORTED_MODULE_4__.computeTextSelector)(node), 'text');
        });
    }
    getXPathSelector(node) {
        return __classPrivateFieldGet(this, _SelectorComputer_logger, "f").timed(`getXPathSelector: ${__classPrivateFieldGet(this, _SelectorComputer_nodes, "f").getOrInsert(node)} ${node.nodeName}`, () => {
            return prefixSelector((0,_selectors_XPath_js__WEBPACK_IMPORTED_MODULE_5__.computeXPath)(node, true, __classPrivateFieldGet(this, _SelectorComputer_customAttributes, "f")), 'xpath');
        });
    }
    getPierceSelector(node) {
        return __classPrivateFieldGet(this, _SelectorComputer_logger, "f").timed(`getPierceSelector: ${__classPrivateFieldGet(this, _SelectorComputer_nodes, "f").getOrInsert(node)} ${node.nodeName}`, () => {
            return prefixSelector((0,_selectors_PierceSelector_js__WEBPACK_IMPORTED_MODULE_3__.computePierceSelector)(node, __classPrivateFieldGet(this, _SelectorComputer_customAttributes, "f")), 'pierce');
        });
    }
    getARIASelector(node) {
        return __classPrivateFieldGet(this, _SelectorComputer_logger, "f").timed(`getARIASelector: ${__classPrivateFieldGet(this, _SelectorComputer_nodes, "f").getOrInsert(node)} ${node.nodeName}`, () => {
            return prefixSelector((0,_selectors_ARIASelector_js__WEBPACK_IMPORTED_MODULE_1__.computeARIASelector)(node, __classPrivateFieldGet(this, _SelectorComputer_bindings, "f")), 'aria');
        });
    }
}
_SelectorComputer_customAttributes = new WeakMap(), _SelectorComputer_bindings = new WeakMap(), _SelectorComputer_logger = new WeakMap(), _SelectorComputer_nodes = new WeakMap(), _SelectorComputer_selectorFunctionsInOrder = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/injected/selectors/ARIASelector.ts":
/*!****************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/ARIASelector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeARIASelector: () => (/* binding */ computeARIASelector)
/* harmony export */ });
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
var _ARIASelectorComputer_bindings, _ARIASelectorComputer_computeUniqueARIASelectorForElements, _ARIASelectorComputer_queryA11yTreeOneByName, _ARIASelectorComputer_queryA11yTreeOneByRole, _ARIASelectorComputer_queryA11yTreeOneByNameAndRole, _ARIASelectorComputer_queryA11yTree;
class ARIASelectorComputer {
    constructor(bindings) {
        _ARIASelectorComputer_bindings.set(this, void 0);
        // Takes a path consisting of element names and roles and makes sure that
        // every element resolves to a single result. If it does, the selector is added
        // to the chain of selectors.
        _ARIASelectorComputer_computeUniqueARIASelectorForElements.set(this, (elements, queryByRoleOnly) => {
            const selectors = [];
            let parent = document;
            for (const element of elements) {
                let result = __classPrivateFieldGet(this, _ARIASelectorComputer_queryA11yTreeOneByName, "f").call(this, parent, element.name);
                if (result) {
                    selectors.push(element.name);
                    parent = result;
                    continue;
                }
                if (queryByRoleOnly) {
                    result = __classPrivateFieldGet(this, _ARIASelectorComputer_queryA11yTreeOneByRole, "f").call(this, parent, element.role);
                    if (result) {
                        selectors.push(`[role="${element.role}"]`);
                        parent = result;
                        continue;
                    }
                }
                result = __classPrivateFieldGet(this, _ARIASelectorComputer_queryA11yTreeOneByNameAndRole, "f").call(this, parent, element.name, element.role);
                if (result) {
                    selectors.push(`${element.name}[role="${element.role}"]`);
                    parent = result;
                    continue;
                }
                return;
            }
            return selectors;
        });
        _ARIASelectorComputer_queryA11yTreeOneByName.set(this, (parent, name) => {
            if (!name) {
                return null;
            }
            const maxResults = 2;
            const result = __classPrivateFieldGet(this, _ARIASelectorComputer_queryA11yTree, "f").call(this, parent, name, undefined, maxResults);
            if (result.length !== 1) {
                return null;
            }
            return result[0];
        });
        _ARIASelectorComputer_queryA11yTreeOneByRole.set(this, (parent, role) => {
            if (!role) {
                return null;
            }
            const maxResults = 2;
            const result = __classPrivateFieldGet(this, _ARIASelectorComputer_queryA11yTree, "f").call(this, parent, undefined, role, maxResults);
            if (result.length !== 1) {
                return null;
            }
            return result[0];
        });
        _ARIASelectorComputer_queryA11yTreeOneByNameAndRole.set(this, (parent, name, role) => {
            if (!role || !name) {
                return null;
            }
            const maxResults = 2;
            const result = __classPrivateFieldGet(this, _ARIASelectorComputer_queryA11yTree, "f").call(this, parent, name, role, maxResults);
            if (result.length !== 1) {
                return null;
            }
            return result[0];
        });
        // Queries the DOM tree for elements with matching accessibility name and role.
        // It attempts to mimic https://chromedevtools.github.io/devtools-protocol/tot/Accessibility/#method-queryAXTree.
        _ARIASelectorComputer_queryA11yTree.set(this, (parent, name, role, maxResults = 0) => {
            const result = [];
            if (!name && !role) {
                throw new Error('Both role and name are empty');
            }
            const shouldMatchName = Boolean(name);
            const shouldMatchRole = Boolean(role);
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
                    if (shouldMatchName && __classPrivateFieldGet(this, _ARIASelectorComputer_bindings, "f").getAccessibleName(currentNode) !== name) {
                        continue;
                    }
                    if (shouldMatchRole && __classPrivateFieldGet(this, _ARIASelectorComputer_bindings, "f").getAccessibleRole(currentNode) !== role) {
                        continue;
                    }
                    result.push(currentNode);
                    if (maxResults && result.length >= maxResults) {
                        return;
                    }
                } while (iter.nextNode());
            };
            collect(parent instanceof Document ? document.documentElement : parent);
            return result;
        });
        Object.defineProperty(this, "compute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (node) => {
                let selector;
                let current = node;
                const elements = [];
                while (current) {
                    const role = __classPrivateFieldGet(this, _ARIASelectorComputer_bindings, "f").getAccessibleRole(current);
                    const name = __classPrivateFieldGet(this, _ARIASelectorComputer_bindings, "f").getAccessibleName(current);
                    if (!role && !name) {
                        if (current === node) {
                            break;
                        }
                    }
                    else {
                        elements.unshift({ name, role });
                        selector = __classPrivateFieldGet(this, _ARIASelectorComputer_computeUniqueARIASelectorForElements, "f").call(this, elements, current !== node);
                        if (selector) {
                            break;
                        }
                        if (current !== node) {
                            elements.shift();
                        }
                    }
                    current = current.parentNode;
                    if (current instanceof ShadowRoot) {
                        current = current.host;
                    }
                }
                return selector;
            }
        });
        __classPrivateFieldSet(this, _ARIASelectorComputer_bindings, bindings, "f");
    }
}
_ARIASelectorComputer_bindings = new WeakMap(), _ARIASelectorComputer_computeUniqueARIASelectorForElements = new WeakMap(), _ARIASelectorComputer_queryA11yTreeOneByName = new WeakMap(), _ARIASelectorComputer_queryA11yTreeOneByRole = new WeakMap(), _ARIASelectorComputer_queryA11yTreeOneByNameAndRole = new WeakMap(), _ARIASelectorComputer_queryA11yTree = new WeakMap();
/**
 * Computes the ARIA selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed CSS selector.
 *
 * @internal
 */
const computeARIASelector = (node, bindings) => {
    return new ARIASelectorComputer(bindings).compute(node);
};


/***/ }),

/***/ "./src/panels/recorder/injected/selectors/PierceSelector.ts":
/*!******************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/PierceSelector.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePierceSelector: () => (/* binding */ computePierceSelector),
/* harmony export */   queryPierceSelectorAll: () => (/* binding */ queryPierceSelectorAll)
/* harmony export */ });
/* harmony import */ var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSSelector.js */ "./src/panels/recorder/injected/selectors/CSSSelector.ts");
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js");
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
var _PierceSelectorRangeOpts_selector, _PierceSelectorRangeOpts_attributes, _PierceSelectorRangeOpts_depth;


class PierceSelectorRangeOpts {
    constructor(attributes = []) {
        _PierceSelectorRangeOpts_selector.set(this, [[]]);
        _PierceSelectorRangeOpts_attributes.set(this, void 0);
        _PierceSelectorRangeOpts_depth.set(this, 0);
        __classPrivateFieldSet(this, _PierceSelectorRangeOpts_attributes, attributes, "f");
    }
    inc(node) {
        return node.getRootNode();
    }
    self(node) {
        return node instanceof ShadowRoot ? node.host : node;
    }
    valueOf(node) {
        const selector = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([node, node.getRootNode()], new _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorRangeOps(__classPrivateFieldGet(this, _PierceSelectorRangeOpts_attributes, "f")));
        if (__classPrivateFieldGet(this, _PierceSelectorRangeOpts_depth, "f") > 1) {
            __classPrivateFieldGet(this, _PierceSelectorRangeOpts_selector, "f").unshift([selector]);
        }
        else {
            __classPrivateFieldGet(this, _PierceSelectorRangeOpts_selector, "f")[0].unshift(selector);
        }
        __classPrivateFieldSet(this, _PierceSelectorRangeOpts_depth, 0, "f");
        return __classPrivateFieldGet(this, _PierceSelectorRangeOpts_selector, "f");
    }
    gte(selector, node) {
        var _a;
        __classPrivateFieldSet(this, _PierceSelectorRangeOpts_depth, (_a = __classPrivateFieldGet(this, _PierceSelectorRangeOpts_depth, "f"), ++_a), "f");
        // Note we use some insider logic here. `valueOf(node)` will always
        // correspond to `selector.flat().slice(1)`, so it suffices to check
        // uniqueness for `selector.flat()[0]`.
        return (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.pierceQuerySelectorAll)(node, selector[0][0]).length === 1;
    }
}
_PierceSelectorRangeOpts_selector = new WeakMap(), _PierceSelectorRangeOpts_attributes = new WeakMap(), _PierceSelectorRangeOpts_depth = new WeakMap();
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


/***/ }),

/***/ "./src/panels/recorder/injected/selectors/TextSelector.ts":
/*!****************************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/TextSelector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeTextSelector: () => (/* binding */ computeTextSelector)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/* harmony import */ var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const MINIMUM_TEXT_LENGTH = 12;
const MAXIMUM_TEXT_LENGTH = 64;
const collect = (iter, max = Infinity) => {
    const results = [];
    for (const value of iter) {
        if (max <= 0) {
            break;
        }
        results.push(value);
        --max;
    }
    return results;
};
/**
 * Computes the text selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed text selector.
 *
 * @internal
 */
const computeTextSelector = (node) => {
    const content = (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.createTextContent)(node).full.trim();
    if (!content) {
        return;
    }
    // If it's short, just return it.
    if (content.length <= MINIMUM_TEXT_LENGTH) {
        const elements = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content), 2);
        if (elements.length !== 1 || elements[0] !== node) {
            return;
        }
        return [content];
    }
    // If it's too long, it's probably irrelevant.
    if (content.length > MAXIMUM_TEXT_LENGTH) {
        return;
    }
    // We do a binary search for the optimal length of a substring starting at 0.
    let left = MINIMUM_TEXT_LENGTH;
    let right = content.length;
    while (left <= right) {
        const center = left + ((right - left) >> 2);
        const elements = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content.slice(0, center)), 2);
        if (elements.length !== 1 || elements[0] !== node) {
            left = center + 1;
        }
        else {
            right = center - 1;
        }
    }
    // Never matched.
    if (right === content.length) {
        return;
    }
    // We attempt to round the word in the event we are in the middle of a word.
    const length = right + 1;
    const remainder = content.slice(length, length + MAXIMUM_TEXT_LENGTH);
    return [content.slice(0, length + remainder.search(/ |$/))];
};


/***/ }),

/***/ "./src/panels/recorder/injected/selectors/XPath.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/injected/selectors/XPath.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeXPath: () => (/* binding */ computeXPath)
/* harmony export */ });
/* harmony import */ var _Selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector.js */ "./src/panels/recorder/injected/selectors/Selector.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const attributeSelector = (name, value) => {
    return `//*[@${name}=${JSON.stringify(value)}]`;
};
const getSelectorPart = (node, optimized, attributes = []) => {
    let value;
    switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            if (!(node instanceof Element)) {
                return;
            }
            if (optimized) {
                for (const attribute of attributes) {
                    value = node.getAttribute(attribute) ?? '';
                    if (value) {
                        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(attributeSelector(attribute, value), true);
                    }
                }
            }
            if (node.id) {
                return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(attributeSelector('id', node.id), true);
            }
            value = node.localName;
            break;
        case Node.ATTRIBUTE_NODE:
            value = '@' + node.nodeName;
            break;
        case Node.TEXT_NODE:
        case Node.CDATA_SECTION_NODE:
            value = 'text()';
            break;
        case Node.PROCESSING_INSTRUCTION_NODE:
            value = 'processing-instruction()';
            break;
        case Node.COMMENT_NODE:
            value = 'comment()';
            break;
        case Node.DOCUMENT_NODE:
            value = '';
            break;
        default:
            value = '';
            break;
    }
    const index = getXPathIndexInParent(node);
    if (index > 0) {
        value += `[${index}]`;
    }
    return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(value, node.nodeType === Node.DOCUMENT_NODE);
};
const getXPathIndexInParent = (node) => {
    /**
     * @returns -1 in case of error, 0 if no siblings matching the same expression,
     * XPath index among the same expression-matching sibling nodes otherwise.
     */
    function areNodesSimilar(left, right) {
        if (left === right) {
            return true;
        }
        if (left instanceof Element && right instanceof Element) {
            return left.localName === right.localName;
        }
        if (left.nodeType === right.nodeType) {
            return true;
        }
        // XPath treats CDATA as text nodes.
        const leftType = left.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : left.nodeType;
        const rightType = right.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : right.nodeType;
        return leftType === rightType;
    }
    const children = node.parentNode ? node.parentNode.children : null;
    if (!children) {
        return 0;
    }
    let hasSameNamedElements;
    for (let i = 0; i < children.length; ++i) {
        if (areNodesSimilar(node, children[i]) && children[i] !== node) {
            hasSameNamedElements = true;
            break;
        }
    }
    if (!hasSameNamedElements) {
        return 0;
    }
    let ownIndex = 1; // XPath indices start with 1.
    for (let i = 0; i < children.length; ++i) {
        if (areNodesSimilar(node, children[i])) {
            if (children[i] === node) {
                return ownIndex;
            }
            ++ownIndex;
        }
    }
    throw new Error('This is impossible; a child must be the child of the parent');
};
/**
 * Computes the XPath for a node.
 *
 * @param node - The node to compute.
 * @param optimized - Whether to optimize the XPath for the node. Does not imply
 * the XPath is shorter; implies the XPath will be highly-scoped to the node.
 * @returns The computed XPath.
 *
 * @internal
 */
const computeXPath = (node, optimized, attributes) => {
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return '/';
    }
    const selectors = [];
    const buffer = [];
    let contextNode = node;
    while (contextNode !== document && contextNode) {
        const part = getSelectorPart(contextNode, optimized, attributes);
        if (!part) {
            return;
        }
        buffer.unshift(part);
        if (part.optimized) {
            contextNode = contextNode.getRootNode();
        }
        else {
            contextNode = contextNode.parentNode;
        }
        if (contextNode instanceof ShadowRoot) {
            selectors.unshift((buffer[0].optimized ? '' : '/') + buffer.join('/'));
            buffer.splice(0, buffer.length);
            contextNode = contextNode.host;
        }
    }
    if (buffer.length) {
        selectors.unshift((buffer[0].optimized ? '' : '/') + buffer.join('/'));
    }
    if (!selectors.length || selectors.length > 1) {
        // XPath evaluation does not work on shadowRoot.
        return;
    }
    return selectors;
};


/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js":
/*!*********************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js":
/*!*************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js":
/*!*******************************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textQuerySelectorAll: () => (/* binding */ textQuerySelectorAll)
/* harmony export */ });
/* harmony import */ var _TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContent.js */ "./src/third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
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

/***/ })

}]);