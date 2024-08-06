"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createTextContent: function() { return createTextContent; },
  isSuitableNodeForTextMatching: function() { return isSuitableNodeForTextMatching; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var TRIVIAL_VALUE_INPUT_TYPES = new Set([
    'checkbox',
    'image',
    'radio'
]);
/**
 * Determines if the node has a non-trivial value property.
 *
 * @internal
 */ var isNonTrivialValueNode = function(node) {
    if (_instanceof(node, HTMLSelectElement)) {
        return true;
    }
    if (_instanceof(node, HTMLTextAreaElement)) {
        return true;
    }
    if (_instanceof(node, HTMLInputElement) && !TRIVIAL_VALUE_INPUT_TYPES.has(node.type)) {
        return true;
    }
    return false;
};
var UNSUITABLE_NODE_NAMES = new Set([
    'SCRIPT',
    'STYLE'
]);
/**
 * Determines whether a given node is suitable for text matching.
 *
 * @internal
 */ var isSuitableNodeForTextMatching = function(node) {
    var _document_head;
    return !UNSUITABLE_NODE_NAMES.has(node.nodeName) && !((_document_head = document.head) === null || _document_head === void 0 ? void 0 : _document_head.contains(node));
};
/**
 * Maps {@link Node}s to their computed {@link TextContent}.
 */ var textContentCache = new WeakMap();
var eraseFromCache = function(node) {
    while(node){
        textContentCache.delete(node);
        if (_instanceof(node, ShadowRoot)) {
            node = node.host;
        } else {
            node = node.parentNode;
        }
    }
};
/**
 * Erases the cache when the tree has mutated text.
 */ var observedNodes = new WeakSet();
var textChangeObserver = new MutationObserver(function(mutations) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = mutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var mutation = _step.value;
            eraseFromCache(mutation.target);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
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
 */ var createTextContent = function(root) {
    var value = textContentCache.get(root);
    if (value) {
        return value;
    }
    value = {
        full: '',
        immediate: []
    };
    if (!isSuitableNodeForTextMatching(root)) {
        return value;
    }
    var currentImmediate = '';
    if (isNonTrivialValueNode(root)) {
        value.full = root.value;
        value.immediate.push(root.value);
        root.addEventListener('input', function(event) {
            eraseFromCache(event.target);
        }, {
            once: true,
            capture: true
        });
    } else {
        for(var child = root.firstChild; child; child = child.nextSibling){
            if (child.nodeType === Node.TEXT_NODE) {
                var _child_nodeValue;
                value.full += (_child_nodeValue = child.nodeValue) !== null && _child_nodeValue !== void 0 ? _child_nodeValue : '';
                var _child_nodeValue1;
                currentImmediate += (_child_nodeValue1 = child.nodeValue) !== null && _child_nodeValue1 !== void 0 ? _child_nodeValue1 : '';
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
        if (_instanceof(root, Element) && root.shadowRoot) {
            value.full += createTextContent(root.shadowRoot).full;
        }
        if (!observedNodes.has(root)) {
            textChangeObserver.observe(root, {
                childList: true,
                characterData: true,
                subtree: true
            });
            observedNodes.add(root);
        }
    }
    textContentCache.set(root, value);
    return value;
}; //# sourceMappingURL=TextContent.js.map


}),

}]);