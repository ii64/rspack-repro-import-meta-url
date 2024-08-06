"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_selectors_XPath_js"], {
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