"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_SelectorComputer_js"], {
"./panels/recorder/injected/MonotonicArray.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MonotonicArray: function() { return MonotonicArray; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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
var _values = /*#__PURE__*/ new WeakMap(), _nextId = /*#__PURE__*/ new WeakMap();
var MonotonicArray = function MonotonicArray() {
    "use strict";
    var _this = this;
    _class_call_check(this, MonotonicArray);
    _class_private_field_init(this, _values, {
        writable: true,
        value: new WeakMap()
    });
    _class_private_field_init(this, _nextId, {
        writable: true,
        value: 1
    });
    _define_property(this, "getOrInsert", function(node) {
        var value = _class_private_field_get(_this, _values).get(node);
        if (value !== undefined) {
            return value;
        }
        _class_private_field_get(_this, _values).set(node, _class_private_field_get(_this, _nextId));
        _class_private_field_update(_this, _nextId).value++;
        return _class_private_field_get(_this, _nextId) - 1;
    });
} //# sourceMappingURL=MonotonicArray.js.map
;


}),
"./panels/recorder/injected/SelectorComputer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectorComputer: function() { return SelectorComputer; }
});
/* harmony import */var _MonotonicArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonotonicArray.js */ "./panels/recorder/injected/MonotonicArray.js");
/* harmony import */var _selectors_ARIASelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors/ARIASelector.js */ "./panels/recorder/injected/selectors/ARIASelector.js");
/* harmony import */var _selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors/CSSSelector.js */ "./panels/recorder/injected/selectors/CSSSelector.js");
/* harmony import */var _selectors_PierceSelector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors/PierceSelector.js */ "./panels/recorder/injected/selectors/PierceSelector.js");
/* harmony import */var _selectors_TextSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors/TextSelector.js */ "./panels/recorder/injected/selectors/TextSelector.js");
/* harmony import */var _selectors_XPath_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors/XPath.js */ "./panels/recorder/injected/selectors/XPath.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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






var prefixSelector = function(selector, prefix) {
    if (selector === undefined) {
        return;
    }
    if (typeof selector === 'string') {
        return "".concat(prefix, "/").concat(selector);
    }
    return selector.map(function(selector) {
        return "".concat(prefix, "/").concat(selector);
    });
};
var _customAttributes = /*#__PURE__*/ new WeakMap(), _bindings = /*#__PURE__*/ new WeakMap(), _logger = /*#__PURE__*/ new WeakMap(), _nodes = /*#__PURE__*/ new WeakMap(), _selectorFunctionsInOrder = /*#__PURE__*/ new WeakMap();
var SelectorComputer = /*#__PURE__*/ function() {
    "use strict";
    function SelectorComputer(bindings, logger) {
        var _this = this;
        var customAttribute = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', selectorTypesToRecord = arguments.length > 3 ? arguments[3] : void 0;
        _class_call_check(this, SelectorComputer);
        _class_private_field_init(this, _customAttributes, {
            writable: true,
            value: [
                // Most common attributes first.
                'data-testid',
                'data-test',
                'data-qa',
                'data-cy',
                'data-test-id',
                'data-qa-id',
                'data-testing'
            ]
        });
        _class_private_field_init(this, _bindings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _logger, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _nodes, {
            writable: true,
            value: new _MonotonicArray_js__WEBPACK_IMPORTED_MODULE_0__.MonotonicArray()
        });
        _class_private_field_init(this, _selectorFunctionsInOrder, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _bindings, bindings);
        _class_private_field_set(this, _logger, logger);
        var selectorOrder = [
            'aria',
            'css',
            'xpath',
            'pierce',
            'text'
        ];
        if (customAttribute) {
            // Custom DOM attributes indicate a preference for CSS/XPath selectors.
            _class_private_field_get(this, _customAttributes).unshift(customAttribute);
            selectorOrder = [
                'css',
                'xpath',
                'pierce',
                'aria',
                'text'
            ];
        }
        _class_private_field_set(this, _selectorFunctionsInOrder, selectorOrder.filter(function(type) {
            if (selectorTypesToRecord) {
                return selectorTypesToRecord.includes(type);
            }
            return true;
        }).map(function(selectorType) {
            switch(selectorType){
                case 'css':
                    return _this.getCSSSelector.bind(_this);
                case 'xpath':
                    return _this.getXPathSelector.bind(_this);
                case 'pierce':
                    return _this.getPierceSelector.bind(_this);
                case 'aria':
                    return _this.getARIASelector.bind(_this);
                case 'text':
                    return _this.getTextSelector.bind(_this);
                default:
                    throw new Error('Unknown selector type: ' + selectorType);
            }
        }));
    }
    _create_class(SelectorComputer, [
        {
            key: "getSelectors",
            value: function getSelectors(node) {
                var selectors = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _selectorFunctionsInOrder)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var getSelector = _step.value;
                        var selector = getSelector(node);
                        if (selector) {
                            selectors.push(selector);
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
                return selectors;
            }
        },
        {
            key: "getCSSSelector",
            value: function getCSSSelector(node) {
                var _this = this;
                return _class_private_field_get(this, _logger).timed("getCSSSelector: ".concat(_class_private_field_get(this, _nodes).getOrInsert(node), " ").concat(node.nodeName), function() {
                    return (0,_selectors_CSSSelector_js__WEBPACK_IMPORTED_MODULE_2__.computeCSSSelector)(node, _class_private_field_get(_this, _customAttributes));
                });
            }
        },
        {
            key: "getTextSelector",
            value: function getTextSelector(node) {
                return _class_private_field_get(this, _logger).timed("getTextSelector: ".concat(_class_private_field_get(this, _nodes).getOrInsert(node), " ").concat(node.nodeName), function() {
                    return prefixSelector((0,_selectors_TextSelector_js__WEBPACK_IMPORTED_MODULE_4__.computeTextSelector)(node), 'text');
                });
            }
        },
        {
            key: "getXPathSelector",
            value: function getXPathSelector(node) {
                var _this = this;
                return _class_private_field_get(this, _logger).timed("getXPathSelector: ".concat(_class_private_field_get(this, _nodes).getOrInsert(node), " ").concat(node.nodeName), function() {
                    return prefixSelector((0,_selectors_XPath_js__WEBPACK_IMPORTED_MODULE_5__.computeXPath)(node, true, _class_private_field_get(_this, _customAttributes)), 'xpath');
                });
            }
        },
        {
            key: "getPierceSelector",
            value: function getPierceSelector(node) {
                var _this = this;
                return _class_private_field_get(this, _logger).timed("getPierceSelector: ".concat(_class_private_field_get(this, _nodes).getOrInsert(node), " ").concat(node.nodeName), function() {
                    return prefixSelector((0,_selectors_PierceSelector_js__WEBPACK_IMPORTED_MODULE_3__.computePierceSelector)(node, _class_private_field_get(_this, _customAttributes)), 'pierce');
                });
            }
        },
        {
            key: "getARIASelector",
            value: function getARIASelector(node) {
                var _this = this;
                return _class_private_field_get(this, _logger).timed("getARIASelector: ".concat(_class_private_field_get(this, _nodes).getOrInsert(node), " ").concat(node.nodeName), function() {
                    return prefixSelector((0,_selectors_ARIASelector_js__WEBPACK_IMPORTED_MODULE_1__.computeARIASelector)(node, _class_private_field_get(_this, _bindings)), 'aria');
                });
            }
        }
    ]);
    return SelectorComputer;
} //# sourceMappingURL=SelectorComputer.js.map
();


}),
"./panels/recorder/injected/selectors/TextSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computeTextSelector: function() { return computeTextSelector; }
});
/* harmony import */var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextContent.js");
/* harmony import */var _third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/injected/TextQuerySelector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var MINIMUM_TEXT_LENGTH = 12;
var MAXIMUM_TEXT_LENGTH = 64;
var collect = function(iter) {
    var max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
    var results = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = iter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            if (max <= 0) {
                break;
            }
            results.push(value);
            --max;
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
    return results;
};
/**
 * Computes the text selector for a node.
 *
 * @param node - The node to compute.
 * @returns The computed text selector.
 *
 * @internal
 */ var computeTextSelector = function(node) {
    var content = (0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextContent_js__WEBPACK_IMPORTED_MODULE_0__.createTextContent)(node).full.trim();
    if (!content) {
        return;
    }
    // If it's short, just return it.
    if (content.length <= MINIMUM_TEXT_LENGTH) {
        var elements = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content), 2);
        if (elements.length !== 1 || elements[0] !== node) {
            return;
        }
        return [
            content
        ];
    }
    // If it's too long, it's probably irrelevant.
    if (content.length > MAXIMUM_TEXT_LENGTH) {
        return;
    }
    // We do a binary search for the optimal length of a substring starting at 0.
    var left = MINIMUM_TEXT_LENGTH;
    var right = content.length;
    while(left <= right){
        var center = left + (right - left >> 2);
        var elements1 = collect((0,_third_party_puppeteer_package_lib_esm_puppeteer_injected_TextQuerySelector_js__WEBPACK_IMPORTED_MODULE_1__.textQuerySelectorAll)(document, content.slice(0, center)), 2);
        if (elements1.length !== 1 || elements1[0] !== node) {
            left = center + 1;
        } else {
            right = center - 1;
        }
    }
    // Never matched.
    if (right === content.length) {
        return;
    }
    // We attempt to round the word in the event we are in the middle of a word.
    var length = right + 1;
    var remainder = content.slice(length, length + MAXIMUM_TEXT_LENGTH);
    return [
        content.slice(0, length + remainder.search(/ |$/))
    ];
}; //# sourceMappingURL=TextSelector.js.map


}),
"./panels/recorder/injected/selectors/XPath.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computeXPath: function() { return computeXPath; }
});
/* harmony import */var _Selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector.js */ "./panels/recorder/injected/selectors/Selector.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

var attributeSelector = function(name, value) {
    return "//*[@".concat(name, "=").concat(JSON.stringify(value), "]");
};
var getSelectorPart = function(node, optimized) {
    var attributes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var value;
    switch(node.nodeType){
        case Node.ELEMENT_NODE:
            if (!_instanceof(node, Element)) {
                return;
            }
            if (optimized) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var attribute = _step.value;
                        var _node_getAttribute;
                        value = (_node_getAttribute = node.getAttribute(attribute)) !== null && _node_getAttribute !== void 0 ? _node_getAttribute : '';
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
    var index = getXPathIndexInParent(node);
    if (index > 0) {
        value += "[".concat(index, "]");
    }
    return new _Selector_js__WEBPACK_IMPORTED_MODULE_0__.SelectorPart(value, node.nodeType === Node.DOCUMENT_NODE);
};
var getXPathIndexInParent = function(node) {
    var areNodesSimilar = /**
     * @returns -1 in case of error, 0 if no siblings matching the same expression,
     * XPath index among the same expression-matching sibling nodes otherwise.
     */ function areNodesSimilar(left, right) {
        if (left === right) {
            return true;
        }
        if (_instanceof(left, Element) && _instanceof(right, Element)) {
            return left.localName === right.localName;
        }
        if (left.nodeType === right.nodeType) {
            return true;
        }
        // XPath treats CDATA as text nodes.
        var leftType = left.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : left.nodeType;
        var rightType = right.nodeType === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : right.nodeType;
        return leftType === rightType;
    };
    var children = node.parentNode ? node.parentNode.children : null;
    if (!children) {
        return 0;
    }
    var hasSameNamedElements;
    for(var i = 0; i < children.length; ++i){
        if (areNodesSimilar(node, children[i]) && children[i] !== node) {
            hasSameNamedElements = true;
            break;
        }
    }
    if (!hasSameNamedElements) {
        return 0;
    }
    var ownIndex = 1; // XPath indices start with 1.
    for(var i1 = 0; i1 < children.length; ++i1){
        if (areNodesSimilar(node, children[i1])) {
            if (children[i1] === node) {
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
 */ var computeXPath = function(node, optimized, attributes) {
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return '/';
    }
    var selectors = [];
    var buffer = [];
    var contextNode = node;
    while(contextNode !== document && contextNode){
        var part = getSelectorPart(contextNode, optimized, attributes);
        if (!part) {
            return;
        }
        buffer.unshift(part);
        if (part.optimized) {
            contextNode = contextNode.getRootNode();
        } else {
            contextNode = contextNode.parentNode;
        }
        if (_instanceof(contextNode, ShadowRoot)) {
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
}; //# sourceMappingURL=XPath.js.map


}),

}]);