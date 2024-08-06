"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js"], {
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
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  textQuerySelectorAll: function() { return textQuerySelectorAll; }
});
/* harmony import */var _TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextContent.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

/**
 * Queries the given node for all nodes matching the given text selector.
 *
 * @internal
 */ var textQuerySelectorAll = function textQuerySelectorAll1(root, selector) {
    var yielded, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, node, matches, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, match, err, err, textContent;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                yielded = false;
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                _state.label = 1;
            case 1:
                _state.trys.push([
                    1,
                    12,
                    13,
                    14
                ]);
                _iterator = root.childNodes[Symbol.iterator]();
                _state.label = 2;
            case 2:
                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                    3,
                    11
                ];
                node = _step.value;
                if (!(_instanceof(node, Element) && (0,_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.isSuitableNodeForTextMatching)(node))) return [
                    3,
                    10
                ];
                matches = void 0;
                if (!node.shadowRoot) {
                    matches = textQuerySelectorAll(node, selector);
                } else {
                    matches = textQuerySelectorAll(node.shadowRoot, selector);
                }
                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                _state.label = 3;
            case 3:
                _state.trys.push([
                    3,
                    8,
                    9,
                    10
                ]);
                _iterator1 = matches[Symbol.iterator]();
                _state.label = 4;
            case 4:
                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                    3,
                    7
                ];
                match = _step1.value;
                return [
                    4,
                    match
                ];
            case 5:
                _state.sent();
                yielded = true;
                _state.label = 6;
            case 6:
                _iteratorNormalCompletion1 = true;
                return [
                    3,
                    4
                ];
            case 7:
                return [
                    3,
                    10
                ];
            case 8:
                err = _state.sent();
                _didIteratorError1 = true;
                _iteratorError1 = err;
                return [
                    3,
                    10
                ];
            case 9:
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
                return [
                    7
                ];
            case 10:
                _iteratorNormalCompletion = true;
                return [
                    3,
                    2
                ];
            case 11:
                return [
                    3,
                    14
                ];
            case 12:
                err = _state.sent();
                _didIteratorError = true;
                _iteratorError = err;
                return [
                    3,
                    14
                ];
            case 13:
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
                return [
                    7
                ];
            case 14:
                if (yielded) {
                    return [
                        2
                    ];
                }
                if (!(_instanceof(root, Element) && (0,_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.isSuitableNodeForTextMatching)(root))) return [
                    3,
                    16
                ];
                textContent = (0,_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.createTextContent)(root);
                if (!textContent.full.includes(selector)) return [
                    3,
                    16
                ];
                return [
                    4,
                    root
                ];
            case 15:
                _state.sent();
                _state.label = 16;
            case 16:
                return [
                    2
                ];
        }
    });
}; //# sourceMappingURL=TextQuerySelector.js.map


}),

}]);