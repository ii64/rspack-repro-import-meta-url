"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_highlighting_HighlightManager_js"], {
"./ui/components/highlighting/HighlightManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HIGHLIGHT_REGISTRY: function() { return HIGHLIGHT_REGISTRY; },
  HighlightManager: function() { return HighlightManager; },
  RangeWalker: function() { return RangeWalker; }
});
/* harmony import */var _highlighting_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlighting.css.js */ "./ui/components/highlighting/highlighting.css.js");
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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

var _offset = /*#__PURE__*/ new WeakMap(), _treeWalker = /*#__PURE__*/ new WeakMap(), _eof = /*#__PURE__*/ new WeakMap(), _next = /*#__PURE__*/ new WeakSet(), _goToPosition = /*#__PURE__*/ new WeakSet();
var RangeWalker = /*#__PURE__*/ function() {
    "use strict";
    function RangeWalker(root) {
        _class_call_check(this, RangeWalker);
        _class_private_method_init(this, _next);
        _class_private_method_init(this, _goToPosition);
        _define_property(this, "root", void 0);
        _class_private_field_init(this, _offset, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _treeWalker, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _eof, {
            writable: true,
            value: void 0
        });
        this.root = root;
        _class_private_field_set(this, _treeWalker, document.createTreeWalker(root, NodeFilter.SHOW_TEXT));
        _class_private_field_set(this, _eof, !_class_private_field_get(this, _treeWalker).firstChild());
    }
    _create_class(RangeWalker, [
        {
            key: "nextRange",
            value: function nextRange(start, length) {
                if (length <= 0 || _class_private_field_get(this, _eof)) {
                    return null;
                }
                var startNode = _class_private_method_get(this, _goToPosition, goToPosition).call(this, start);
                if (!startNode) {
                    return null;
                }
                var offsetInStartNode = start - _class_private_field_get(this, _offset);
                var endNode = _class_private_method_get(this, _goToPosition, goToPosition).call(this, start + length);
                if (!endNode) {
                    return null;
                }
                var offsetInEndNode = start + length - _class_private_field_get(this, _offset);
                var range = new Range();
                range.setStart(startNode, offsetInStartNode);
                range.setEnd(endNode, offsetInEndNode);
                return range;
            }
        }
    ]);
    return RangeWalker;
}();
function next() {
    var _class_private_field_get_currentNode_textContent;
    var _class_private_field_get_currentNode_textContent_length;
    _class_private_field_set(this, _offset, _class_private_field_get(this, _offset) + ((_class_private_field_get_currentNode_textContent_length = (_class_private_field_get_currentNode_textContent = _class_private_field_get(this, _treeWalker).currentNode.textContent) === null || _class_private_field_get_currentNode_textContent === void 0 ? void 0 : _class_private_field_get_currentNode_textContent.length) !== null && _class_private_field_get_currentNode_textContent_length !== void 0 ? _class_private_field_get_currentNode_textContent_length : 0));
    _class_private_field_set(this, _eof, !_class_private_field_get(this, _treeWalker).nextNode());
    return !_class_private_field_get(this, _eof);
}
function goToPosition(offset) {
    var _class_private_field_get_currentNode_textContent;
    if (offset < _class_private_field_get(this, _offset) || _class_private_field_get(this, _eof)) {
        return null;
    }
    var _class_private_field_get_currentNode_textContent_length;
    // `>` here implies that, except for the first range, start offsets are left-leaning, i.e., when the offset falls
    // between two text nodes, the preceding one is returned. This doesn't matter for Range semantics, but isn't
    // intuitive wrt. the usual understanding of intervals. Making start offsets right-leaning but end offsets
    // left-leaning would incur an unwarranted amount of complexity.
    while(offset > _class_private_field_get(this, _offset) + ((_class_private_field_get_currentNode_textContent_length = (_class_private_field_get_currentNode_textContent = _class_private_field_get(this, _treeWalker).currentNode.textContent) === null || _class_private_field_get_currentNode_textContent === void 0 ? void 0 : _class_private_field_get_currentNode_textContent.length) !== null && _class_private_field_get_currentNode_textContent_length !== void 0 ? _class_private_field_get_currentNode_textContent_length : 0)){
        if (!_class_private_method_get(this, _next, next).call(this)) {
            return null;
        }
    }
    return _class_private_field_get(this, _treeWalker).currentNode;
}
var HIGHLIGHT_REGISTRY = 'search-highlight';
var highlightManagerInstance;
var _highlights = /*#__PURE__*/ new WeakMap();
var HighlightManager = /*#__PURE__*/ function() {
    "use strict";
    function HighlightManager() {
        _class_call_check(this, HighlightManager);
        _class_private_field_init(this, _highlights, {
            writable: true,
            value: new Highlight()
        });
        document.adoptedStyleSheets.push(_highlighting_css_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        CSS.highlights.set(HIGHLIGHT_REGISTRY, _class_private_field_get(this, _highlights));
    }
    _create_class(HighlightManager, [
        {
            key: "addHighlights",
            value: function addHighlights(ranges) {
                ranges.forEach(this.addHighlight.bind(this));
            }
        },
        {
            key: "removeHighlights",
            value: function removeHighlights(ranges) {
                ranges.forEach(this.removeHighlight.bind(this));
            }
        },
        {
            key: "addHighlight",
            value: function addHighlight(range) {
                _class_private_field_get(this, _highlights).add(range);
            }
        },
        {
            key: "removeHighlight",
            value: function removeHighlight(range) {
                _class_private_field_get(this, _highlights).delete(range);
            }
        },
        {
            key: "highlightOrderedTextRanges",
            value: function highlightOrderedTextRanges(root, sourceRanges) {
                var rangeWalker = new RangeWalker(root);
                var ranges = sourceRanges.map(function(range) {
                    return rangeWalker.nextRange(range.offset, range.length);
                }).filter(function(r) {
                    return r !== null && !r.collapsed;
                });
                this.addHighlights(ranges);
                return ranges;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!highlightManagerInstance || forceNew) {
                    highlightManagerInstance = new HighlightManager();
                }
                return highlightManagerInstance;
            }
        }
    ]);
    return HighlightManager;
} //# sourceMappingURL=HighlightManager.js.map
();


}),
"./ui/components/highlighting/highlighting.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n/* stylelint-disable-next-line selector-pseudo-element-no-unknown,selector-type-no-unknown */\n:root::highlight(search-highlight) {\n  background-color: var(--sys-color-yellow-outline);\n}\n\n/*# sourceURL=highlighting.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);