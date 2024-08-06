"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_selectors_PierceSelector_js"], {
"./panels/recorder/injected/selectors/PierceSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computePierceSelector: function() { return computePierceSelector; },
  queryPierceSelectorAll: function() { return queryPierceSelectorAll; }
});
/* harmony import */var _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSSelector.js */ "./panels/recorder/injected/selectors/CSSSelector.js");
/* harmony import */var _third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


var _selector = /*#__PURE__*/ new WeakMap(), _attributes = /*#__PURE__*/ new WeakMap(), _depth = /*#__PURE__*/ new WeakMap();
var PierceSelectorRangeOpts = /*#__PURE__*/ function() {
    "use strict";
    function PierceSelectorRangeOpts() {
        var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _class_call_check(this, PierceSelectorRangeOpts);
        _class_private_field_init(this, _selector, {
            writable: true,
            value: [
                []
            ]
        });
        _class_private_field_init(this, _attributes, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _depth, {
            writable: true,
            value: 0
        });
        _class_private_field_set(this, _attributes, attributes);
    }
    _create_class(PierceSelectorRangeOpts, [
        {
            key: "inc",
            value: function inc(node) {
                return node.getRootNode();
            }
        },
        {
            key: "self",
            value: function self(node) {
                return _instanceof(node, ShadowRoot) ? node.host : node;
            }
        },
        {
            key: "valueOf",
            value: function valueOf(node) {
                var selector = (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([
                    node,
                    node.getRootNode()
                ], new _CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorRangeOps(_class_private_field_get(this, _attributes)));
                if (_class_private_field_get(this, _depth) > 1) {
                    _class_private_field_get(this, _selector).unshift([
                        selector
                    ]);
                } else {
                    _class_private_field_get(this, _selector)[0].unshift(selector);
                }
                _class_private_field_set(this, _depth, 0);
                return _class_private_field_get(this, _selector);
            }
        },
        {
            key: "gte",
            value: function gte(selector, node) {
                ++_class_private_field_update(this, _depth).value;
                // Note we use some insider logic here. `valueOf(node)` will always
                // correspond to `selector.flat().slice(1)`, so it suffices to check
                // uniqueness for `selector.flat()[0]`.
                return (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.pierceQuerySelectorAll)(node, selector[0][0]).length === 1;
            }
        }
    ]);
    return PierceSelectorRangeOpts;
}();
/**
 * Computes the pierce CSS selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed pierce CSS selector.
 *
 * @internal
 */ var computePierceSelector = function(node, attributes) {
    try {
        var ops = new PierceSelectorRangeOpts(attributes);
        return (0,_CSSSelector_js__WEBPACK_IMPORTED_MODULE_0__.findMinMax)([
            node,
            document
        ], ops).flat();
    } catch (e) {
        return undefined;
    }
};
var queryPierceSelectorAll = function(selectors) {
    if (typeof selectors === 'string') {
        selectors = [
            selectors
        ];
    } else if (selectors.length === 0) {
        return [];
    }
    var lists = [
        [
            document.documentElement
        ]
    ];
    do {
        var selector = selectors.shift();
        var roots = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var nodes = _step.value;
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = nodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var node = _step1.value;
                        var _node_shadowRoot;
                        var list = (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.pierceQuerySelectorAll)((_node_shadowRoot = node.shadowRoot) !== null && _node_shadowRoot !== void 0 ? _node_shadowRoot : node, selector);
                        if (list.length > 0) {
                            roots.push(list);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
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
        lists = roots;
    }while (selectors.length > 0 && lists.length > 0);
    return lists.flatMap(function(list) {
        return _to_consumable_array(list);
    });
}; //# sourceMappingURL=PierceSelector.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pierceQuerySelector: function() { return pierceQuerySelector; },
  pierceQuerySelectorAll: function() { return pierceQuerySelectorAll; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var pierceQuerySelector = function(root, selector) {
    var found = null;
    var search = function(root) {
        var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            var currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                search(currentNode.shadowRoot);
            }
            if (_instanceof(currentNode, ShadowRoot)) {
                continue;
            }
            if (currentNode !== root && !found && currentNode.matches(selector)) {
                found = currentNode;
            }
        }while (!found && iter.nextNode());
    };
    if (_instanceof(root, Document)) {
        root = root.documentElement;
    }
    search(root);
    return found;
};
/**
 * @internal
 */ var pierceQuerySelectorAll = function(element, selector) {
    var result = [];
    var collect = function(root) {
        var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            var currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                collect(currentNode.shadowRoot);
            }
            if (_instanceof(currentNode, ShadowRoot)) {
                continue;
            }
            if (currentNode !== root && currentNode.matches(selector)) {
                result.push(currentNode);
            }
        }while (iter.nextNode());
    };
    if (_instanceof(element, Document)) {
        element = element.documentElement;
    }
    collect(element);
    return result;
}; //# sourceMappingURL=PierceQuerySelector.js.map


}),

}]);