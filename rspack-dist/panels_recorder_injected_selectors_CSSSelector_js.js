"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_selectors_CSSSelector_js"], {
"./panels/recorder/injected/selectors/CSSSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectorRangeOps: function() { return SelectorRangeOps; },
  computeCSSSelector: function() { return computeCSSSelector; },
  findMinMax: function() { return findMinMax; },
  getSelectorPart: function() { return getSelectorPart; },
  queryCSSSelectorAll: function() { return queryCSSSelectorAll; }
});
/* harmony import */var _Selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector.js */ "./panels/recorder/injected/selectors/Selector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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

var idSelector = function(id) {
    return "#".concat(CSS.escape(id));
};
var attributeSelector = function(name, value) {
    return "[".concat(name, "='").concat(CSS.escape(value), "']");
};
var classSelector = function(selector, className) {
    return "".concat(selector, ".").concat(CSS.escape(className));
};
var nthTypeSelector = function(selector, index) {
    return "".concat(selector, ":nth-of-type(").concat(index + 1, ")");
};
var typeSelector = function(selector, type) {
    return "".concat(selector).concat(attributeSelector('type', type));
};
var hasUniqueId = function(node) {
    return Boolean(node.id) && node.getRootNode().querySelectorAll(idSelector(node.id)).length === 1;
};
var isUniqueAmongTagNames = function(node, children) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            if (child !== node && child.tagName === node.tagName) {
                return false;
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
    return true;
};
var isUniqueAmongInputTypes = function(node, children) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            if (child !== node && _instanceof(child, HTMLInputElement) && child.type === node.type) {
                return false;
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
    return true;
};
var getUniqueClassName = function(node, children) {
    var classNames = new Set(node.classList);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            if (child !== node) {
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = child.classList[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var className = _step1.value;
                        classNames.delete(className);
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
                if (classNames.size === 0) {
                    break;
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
    if (classNames.size > 0) {
        return classNames.values().next().value;
    }
    return undefined;
};
var getTypeIndex = function(node, children) {
    var nthTypeIndex = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            if (child === node) {
                return nthTypeIndex;
            }
            if (child.tagName === node.tagName) {
                ++nthTypeIndex;
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
    throw new Error('Node not found in children');
};
var getSelectorPart = function(node) {
    var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (!_instanceof(node, Element)) {
        return;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Declared attibutes have the greatest priority.
        for(var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var attribute = _step.value;
            var value = node.getAttribute(attribute);
            if (value) {
                return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(attributeSelector(attribute, value), true);
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
    // IDs are supposed to be globally unique, so this has second priority.
    if (hasUniqueId(node)) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(idSelector(node.id), true);
    }
    // All selectors will be prefixed with the tag name starting here.
    var selector = node.tagName.toLowerCase();
    // These can only appear once in the entire document, so handle this fast.
    switch(node.tagName){
        case 'BODY':
        case 'HEAD':
        case 'HTML':
            return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(selector, true);
    }
    var parent = node.parentNode;
    // If the node has no parent, then the node must be detached. We handle this
    // gracefully.
    if (!parent) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(selector, true);
    }
    var children = parent.children;
    // Determine if the child has a unique node name among all children.
    if (isUniqueAmongTagNames(node, children)) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(selector, true);
    }
    // If it's an input, check uniqueness among types.
    if (_instanceof(node, HTMLInputElement) && isUniqueAmongInputTypes(node, children)) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(typeSelector(selector, node.type), true);
    }
    // Determine if the child has a unique class name.
    var className = getUniqueClassName(node, children);
    if (className !== undefined) {
        return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(classSelector(selector, className), true);
    }
    // Last resort. Just use the nth-type index. A priori, this will always exists.
    return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(nthTypeSelector(selector, getTypeIndex(node, children)), false);
};
/**
 * The goal of this function is to find the smallest index `i` that makes
 * `gte(valueOf(i), j)` true for all `j` in `[min, max)`. We do not use binary
 * search because
 *
 *  1. We expect the min-max to be concentrated towards the minimum (< 10
 *     iterations).
 *  2. We expect `valueOf` to be `O(n)`, so together with (1), the average will
 *     be around `O(n)` which is significantly faster than binary search in this
 *     case.
 */ var findMinMax = function(param, fns) {
    var _param = _sliced_to_array(param, 2), min = _param[0], max = _param[1];
    var _fns;
    var _self;
    (_self = (_fns = fns).self) !== null && _self !== void 0 ? _self : _fns.self = function(i) {
        return i;
    };
    var index = fns.inc(min);
    var value;
    var isMax;
    do {
        value = fns.valueOf(min);
        isMax = true;
        while(index !== max){
            min = fns.self(index);
            index = fns.inc(min);
            if (!fns.gte(value, index)) {
                isMax = false;
                break;
            }
        }
    }while (!isMax);
    return value;
};
var // Close chains (using `>`) are stored in inner arrays.
_buffer = /*#__PURE__*/ new WeakMap(), _attributes = /*#__PURE__*/ new WeakMap(), _depth = /*#__PURE__*/ new WeakMap();
var SelectorRangeOps = /*#__PURE__*/ function() {
    "use strict";
    function SelectorRangeOps() {
        var attributes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _class_call_check(this, SelectorRangeOps);
        _class_private_field_init(this, _buffer, {
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
    _create_class(SelectorRangeOps, [
        {
            key: "inc",
            value: function inc(node) {
                var _node_parentNode;
                return (_node_parentNode = node.parentNode) !== null && _node_parentNode !== void 0 ? _node_parentNode : node.getRootNode();
            }
        },
        {
            key: "valueOf",
            value: function valueOf(node) {
                var part = getSelectorPart(node, _class_private_field_get(this, _attributes));
                if (!part) {
                    throw new Error('Node is not an element');
                }
                if (_class_private_field_get(this, _depth) > 1) {
                    // Implies this selector is for a distant ancestor.
                    _class_private_field_get(this, _buffer).unshift([
                        part
                    ]);
                } else {
                    // Implies this selector is for a parent.
                    _class_private_field_get(this, _buffer)[0].unshift(part);
                }
                _class_private_field_set(this, _depth, 0);
                return _class_private_field_get(this, _buffer).map(function(parts) {
                    return parts.join(' > ');
                }).join(' ');
            }
        },
        {
            key: "gte",
            value: function gte(selector, node) {
                ++_class_private_field_update(this, _depth).value;
                return node.querySelectorAll(selector).length === 1;
            }
        }
    ]);
    return SelectorRangeOps;
}();
/**
 * Computes the CSS selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed CSS selector.
 *
 * @internal
 */ var computeCSSSelector = function(node, attributes) {
    var selectors = [];
    // We want to find the minimal selector that is unique within a document. We
    // are slightly restricted since selectors cannot cross ShadowRoot borders, so
    // the actual goal is to find the minimal selector that is unique within a
    // root node. We then need to repeat this for each shadow root.
    try {
        var root;
        while(_instanceof(node, Element)){
            root = node.getRootNode();
            selectors.unshift(findMinMax([
                node,
                root
            ], new SelectorRangeOps(attributes)));
            node = _instanceof(root, ShadowRoot) ? root.host : root;
        }
    } catch (e) {
        return undefined;
    }
    return selectors;
};
var queryCSSSelectorAll = function(selectors) {
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
                        var list = ((_node_shadowRoot = node.shadowRoot) !== null && _node_shadowRoot !== void 0 ? _node_shadowRoot : node).querySelectorAll(selector);
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
}; //# sourceMappingURL=CSSSelector.js.map


}),
"./panels/recorder/injected/selectors/Selector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectorPart: function() { return SelectorPart; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var SelectorPart = /*#__PURE__*/ function() {
    "use strict";
    function SelectorPart(value, optimized) {
        _class_call_check(this, SelectorPart);
        _define_property(this, "value", void 0);
        _define_property(this, "optimized", void 0);
        this.value = value;
        this.optimized = optimized || false;
    }
    _create_class(SelectorPart, [
        {
            key: "toString",
            value: function toString() {
                return this.value;
            }
        }
    ]);
    return SelectorPart;
} //# sourceMappingURL=Selector.js.map
();


}),

}]);