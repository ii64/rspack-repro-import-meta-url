"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_DOMPath_js"],{

/***/ "./panels/elements/DOMPath.js":
/*!************************************!*\
  !*** ./panels/elements/DOMPath.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* binding */ Step),
/* harmony export */   canGetJSPath: () => (/* binding */ canGetJSPath),
/* harmony export */   cssPath: () => (/* binding */ cssPath),
/* harmony export */   fullQualifiedSelector: () => (/* binding */ fullQualifiedSelector),
/* harmony export */   jsPath: () => (/* binding */ jsPath),
/* harmony export */   xPath: () => (/* binding */ xPath)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const fullQualifiedSelector = function (node, justSelector) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return node.localName() || node.nodeName().toLowerCase();
    }
    return cssPath(node, justSelector);
};
const cssPath = function (node, optimized) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return '';
    }
    const steps = [];
    let contextNode = node;
    while (contextNode) {
        const step = cssPathStep(contextNode, Boolean(optimized), contextNode === node);
        if (!step) {
            break;
        } // Error - bail out early.
        steps.push(step);
        if (step.optimized) {
            break;
        }
        contextNode = contextNode.parentNode;
    }
    steps.reverse();
    return steps.join(' > ');
};
const canGetJSPath = function (node) {
    let wp = node;
    while (wp) {
        const shadowRoot = wp.ancestorShadowRoot();
        if (shadowRoot && shadowRoot.shadowRootType() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode.ShadowRootTypes.Open) {
            return false;
        }
        wp = wp.ancestorShadowHost();
    }
    return true;
};
const jsPath = function (node, optimized) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return '';
    }
    const path = [];
    let wp = node;
    while (wp) {
        path.push(cssPath(wp, optimized));
        wp = wp.ancestorShadowHost();
    }
    path.reverse();
    let result = '';
    for (let i = 0; i < path.length; ++i) {
        const string = JSON.stringify(path[i]);
        if (i) {
            result += `.shadowRoot.querySelector(${string})`;
        }
        else {
            result += `document.querySelector(${string})`;
        }
    }
    return result;
};
const cssPathStep = function (node, optimized, isTargetNode) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return null;
    }
    const id = node.getAttribute('id');
    if (optimized) {
        if (id) {
            return new Step(idSelector(id), true);
        }
        const nodeNameLower = node.nodeName().toLowerCase();
        if (nodeNameLower === 'body' || nodeNameLower === 'head' || nodeNameLower === 'html') {
            return new Step(node.nodeNameInCorrectCase(), true);
        }
    }
    const nodeName = node.nodeNameInCorrectCase();
    if (id) {
        return new Step(nodeName + idSelector(id), true);
    }
    const parent = node.parentNode;
    if (!parent || parent.nodeType() === Node.DOCUMENT_NODE) {
        return new Step(nodeName, true);
    }
    function prefixedElementClassNames(node) {
        const classAttribute = node.getAttribute('class');
        if (!classAttribute) {
            return [];
        }
        return classAttribute.split(/\s+/g).filter(Boolean).map(function (name) {
            // The prefix is required to store "__proto__" in a object-based map.
            return '$' + name;
        });
    }
    function idSelector(id) {
        return '#' + CSS.escape(id);
    }
    const prefixedOwnClassNamesArray = prefixedElementClassNames(node);
    let needsClassNames = false;
    let needsNthChild = false;
    let ownIndex = -1;
    let elementIndex = -1;
    const siblings = parent.children();
    for (let i = 0; siblings && (ownIndex === -1 || !needsNthChild) && i < siblings.length; ++i) {
        const sibling = siblings[i];
        if (sibling.nodeType() !== Node.ELEMENT_NODE) {
            continue;
        }
        elementIndex += 1;
        if (sibling === node) {
            ownIndex = elementIndex;
            continue;
        }
        if (needsNthChild) {
            continue;
        }
        if (sibling.nodeNameInCorrectCase() !== nodeName) {
            continue;
        }
        needsClassNames = true;
        const ownClassNames = new Set(prefixedOwnClassNamesArray);
        if (!ownClassNames.size) {
            needsNthChild = true;
            continue;
        }
        const siblingClassNamesArray = prefixedElementClassNames(sibling);
        for (let j = 0; j < siblingClassNamesArray.length; ++j) {
            const siblingClass = siblingClassNamesArray[j];
            if (!ownClassNames.has(siblingClass)) {
                continue;
            }
            ownClassNames.delete(siblingClass);
            if (!ownClassNames.size) {
                needsNthChild = true;
                break;
            }
        }
    }
    let result = nodeName;
    if (isTargetNode && nodeName.toLowerCase() === 'input' && node.getAttribute('type') && !node.getAttribute('id') &&
        !node.getAttribute('class')) {
        result += '[type=' + CSS.escape((node.getAttribute('type')) || '') + ']';
    }
    if (needsNthChild) {
        result += ':nth-child(' + (ownIndex + 1) + ')';
    }
    else if (needsClassNames) {
        for (const prefixedName of prefixedOwnClassNamesArray) {
            result += '.' + CSS.escape(prefixedName.slice(1));
        }
    }
    return new Step(result, false);
};
const xPath = function (node, optimized) {
    if (node.nodeType() === Node.DOCUMENT_NODE) {
        return '/';
    }
    const steps = [];
    let contextNode = node;
    while (contextNode) {
        const step = xPathValue(contextNode, optimized);
        if (!step) {
            break;
        } // Error - bail out early.
        steps.push(step);
        if (step.optimized) {
            break;
        }
        contextNode = contextNode.parentNode;
    }
    steps.reverse();
    return (steps.length && steps[0].optimized ? '' : '/') + steps.join('/');
};
const xPathValue = function (node, optimized) {
    let ownValue;
    const ownIndex = xPathIndex(node);
    if (ownIndex === -1) {
        return null;
    } // Error.
    switch (node.nodeType()) {
        case Node.ELEMENT_NODE:
            if (optimized && node.getAttribute('id')) {
                return new Step('//*[@id="' + node.getAttribute('id') + '"]', true);
            }
            ownValue = node.localName();
            break;
        case Node.ATTRIBUTE_NODE:
            ownValue = '@' + node.nodeName();
            break;
        case Node.TEXT_NODE:
        case Node.CDATA_SECTION_NODE:
            ownValue = 'text()';
            break;
        case Node.PROCESSING_INSTRUCTION_NODE:
            ownValue = 'processing-instruction()';
            break;
        case Node.COMMENT_NODE:
            ownValue = 'comment()';
            break;
        case Node.DOCUMENT_NODE:
            ownValue = '';
            break;
        default:
            ownValue = '';
            break;
    }
    if (ownIndex > 0) {
        ownValue += '[' + ownIndex + ']';
    }
    return new Step(ownValue, node.nodeType() === Node.DOCUMENT_NODE);
};
const xPathIndex = function (node) {
    /**
     * Returns -1 in case of error, 0 if no siblings matching the same expression,
     * <XPath index among the same expression-matching sibling nodes> otherwise.
     */
    function areNodesSimilar(left, right) {
        if (left === right) {
            return true;
        }
        if (left.nodeType() === Node.ELEMENT_NODE && right.nodeType() === Node.ELEMENT_NODE) {
            return left.localName() === right.localName();
        }
        if (left.nodeType() === right.nodeType()) {
            return true;
        }
        // XPath treats CDATA as text nodes.
        const leftType = left.nodeType() === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : left.nodeType();
        const rightType = right.nodeType() === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : right.nodeType();
        return leftType === rightType;
    }
    const siblings = node.parentNode ? node.parentNode.children() : null;
    if (!siblings) {
        return 0;
    } // Root node - no siblings.
    let hasSameNamedElements;
    for (let i = 0; i < siblings.length; ++i) {
        if (areNodesSimilar(node, siblings[i]) && siblings[i] !== node) {
            hasSameNamedElements = true;
            break;
        }
    }
    if (!hasSameNamedElements) {
        return 0;
    }
    let ownIndex = 1; // XPath indices start with 1.
    for (let i = 0; i < siblings.length; ++i) {
        if (areNodesSimilar(node, siblings[i])) {
            if (siblings[i] === node) {
                return ownIndex;
            }
            ++ownIndex;
        }
    }
    return -1; // An error occurred: |node| not found in parent's children.
};
class Step {
    value;
    optimized;
    constructor(value, optimized) {
        this.value = value;
        this.optimized = optimized || false;
    }
    toString() {
        return this.value;
    }
}
//# sourceMappingURL=DOMPath.js.map

/***/ })

}]);