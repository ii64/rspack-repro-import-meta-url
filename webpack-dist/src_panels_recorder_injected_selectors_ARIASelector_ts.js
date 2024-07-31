"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_injected_selectors_ARIASelector_ts"],{

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


/***/ })

}]);