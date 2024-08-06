"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_DOMPath_js"], {
"./panels/elements/DOMPath.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Step: function() { return Step; },
  canGetJSPath: function() { return canGetJSPath; },
  cssPath: function() { return cssPath; },
  fullQualifiedSelector: function() { return fullQualifiedSelector; },
  jsPath: function() { return jsPath; },
  xPath: function() { return xPath; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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

var fullQualifiedSelector = function fullQualifiedSelector(node, justSelector) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return node.localName() || node.nodeName().toLowerCase();
    }
    return cssPath(node, justSelector);
};
var cssPath = function cssPath(node, optimized) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return '';
    }
    var steps = [];
    var contextNode = node;
    while(contextNode){
        var step = cssPathStep(contextNode, Boolean(optimized), contextNode === node);
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
var canGetJSPath = function canGetJSPath(node) {
    var wp = node;
    while(wp){
        var shadowRoot = wp.ancestorShadowRoot();
        if (shadowRoot && shadowRoot.shadowRootType() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode.ShadowRootTypes.Open) {
            return false;
        }
        wp = wp.ancestorShadowHost();
    }
    return true;
};
var jsPath = function jsPath(node, optimized) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return '';
    }
    var path = [];
    var wp = node;
    while(wp){
        path.push(cssPath(wp, optimized));
        wp = wp.ancestorShadowHost();
    }
    path.reverse();
    var result = '';
    for(var i = 0; i < path.length; ++i){
        var string = JSON.stringify(path[i]);
        if (i) {
            result += ".shadowRoot.querySelector(".concat(string, ")");
        } else {
            result += "document.querySelector(".concat(string, ")");
        }
    }
    return result;
};
var cssPathStep = function cssPathStep(node, optimized, isTargetNode) {
    if (node.nodeType() !== Node.ELEMENT_NODE) {
        return null;
    }
    var id = node.getAttribute('id');
    if (optimized) {
        if (id) {
            return new Step(idSelector(id), true);
        }
        var nodeNameLower = node.nodeName().toLowerCase();
        if (nodeNameLower === 'body' || nodeNameLower === 'head' || nodeNameLower === 'html') {
            return new Step(node.nodeNameInCorrectCase(), true);
        }
    }
    var nodeName = node.nodeNameInCorrectCase();
    if (id) {
        return new Step(nodeName + idSelector(id), true);
    }
    var parent = node.parentNode;
    if (!parent || parent.nodeType() === Node.DOCUMENT_NODE) {
        return new Step(nodeName, true);
    }
    function prefixedElementClassNames(node) {
        var classAttribute = node.getAttribute('class');
        if (!classAttribute) {
            return [];
        }
        return classAttribute.split(/\s+/g).filter(Boolean).map(function(name) {
            // The prefix is required to store "__proto__" in a object-based map.
            return '$' + name;
        });
    }
    function idSelector(id) {
        return '#' + CSS.escape(id);
    }
    var prefixedOwnClassNamesArray = prefixedElementClassNames(node);
    var needsClassNames = false;
    var needsNthChild = false;
    var ownIndex = -1;
    var elementIndex = -1;
    var siblings = parent.children();
    for(var i = 0; siblings && (ownIndex === -1 || !needsNthChild) && i < siblings.length; ++i){
        var sibling = siblings[i];
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
        var ownClassNames = new Set(prefixedOwnClassNamesArray);
        if (!ownClassNames.size) {
            needsNthChild = true;
            continue;
        }
        var siblingClassNamesArray = prefixedElementClassNames(sibling);
        for(var j = 0; j < siblingClassNamesArray.length; ++j){
            var siblingClass = siblingClassNamesArray[j];
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
    var result = nodeName;
    if (isTargetNode && nodeName.toLowerCase() === 'input' && node.getAttribute('type') && !node.getAttribute('id') && !node.getAttribute('class')) {
        result += '[type=' + CSS.escape(node.getAttribute('type') || '') + ']';
    }
    if (needsNthChild) {
        result += ':nth-child(' + (ownIndex + 1) + ')';
    } else if (needsClassNames) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = prefixedOwnClassNamesArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var prefixedName = _step.value;
                result += '.' + CSS.escape(prefixedName.slice(1));
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
    return new Step(result, false);
};
var xPath = function xPath(node, optimized) {
    if (node.nodeType() === Node.DOCUMENT_NODE) {
        return '/';
    }
    var steps = [];
    var contextNode = node;
    while(contextNode){
        var step = xPathValue(contextNode, optimized);
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
var xPathValue = function xPathValue(node, optimized) {
    var ownValue;
    var ownIndex = xPathIndex(node);
    if (ownIndex === -1) {
        return null;
    } // Error.
    switch(node.nodeType()){
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
var xPathIndex = function xPathIndex(node) {
    /**
     * Returns -1 in case of error, 0 if no siblings matching the same expression,
     * <XPath index among the same expression-matching sibling nodes> otherwise.
     */ function areNodesSimilar(left, right) {
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
        var leftType = left.nodeType() === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : left.nodeType();
        var rightType = right.nodeType() === Node.CDATA_SECTION_NODE ? Node.TEXT_NODE : right.nodeType();
        return leftType === rightType;
    }
    var siblings = node.parentNode ? node.parentNode.children() : null;
    if (!siblings) {
        return 0;
    } // Root node - no siblings.
    var hasSameNamedElements;
    for(var i = 0; i < siblings.length; ++i){
        if (areNodesSimilar(node, siblings[i]) && siblings[i] !== node) {
            hasSameNamedElements = true;
            break;
        }
    }
    if (!hasSameNamedElements) {
        return 0;
    }
    var ownIndex = 1; // XPath indices start with 1.
    for(var i1 = 0; i1 < siblings.length; ++i1){
        if (areNodesSimilar(node, siblings[i1])) {
            if (siblings[i1] === node) {
                return ownIndex;
            }
            ++ownIndex;
        }
    }
    return -1; // An error occurred: |node| not found in parent's children.
};
var Step = /*#__PURE__*/ function() {
    "use strict";
    function Step(value, optimized) {
        _class_call_check(this, Step);
        _define_property(this, "value", void 0);
        _define_property(this, "optimized", void 0);
        this.value = value;
        this.optimized = optimized || false;
    }
    _create_class(Step, [
        {
            key: "toString",
            value: function toString() {
                return this.value;
            }
        }
    ]);
    return Step;
} //# sourceMappingURL=DOMPath.js.map
();


}),

}]);