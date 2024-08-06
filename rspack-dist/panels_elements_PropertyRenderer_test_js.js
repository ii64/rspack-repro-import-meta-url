"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_PropertyRenderer_test_js"], {
"./panels/elements/PropertyRenderer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/PropertyParser.js */ "./testing/PropertyParser.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('PropertyRenderer', function() {
    describe('Renderer', function() {
        var textFragments = function textFragments(nodes) {
            return nodes.map(function(n) {
                return n.textContent;
            });
        };
        it('parses text', function() {
            // Prevent normaliztaion to get an accurate representation of the parser result.
            sinon.stub(Element.prototype, 'normalize');
            assert.deepStrictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', 'var(--v)', []).childNodes)), [
                'var',
                '(',
                '--v',
                ')'
            ]);
            assert.deepStrictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', '/* comments are text */ 1px solid 4', []).childNodes)), [
                '/* comments are text */',
                ' ',
                '1px',
                ' ',
                'solid',
                ' ',
                '4'
            ]);
            assert.deepStrictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', '2px var(--double, var(--fallback, black)) #32a1ce rgb(124 125 21 0)', []).childNodes)), [
                '2px',
                ' ',
                'var',
                '(',
                '--double',
                ',',
                ' ',
                'var',
                '(',
                '--fallback',
                ',',
                ' ',
                'black',
                ')',
                ')',
                ' ',
                '#32a1ce',
                ' ',
                'rgb',
                '(',
                '124',
                ' ',
                '125',
                ' ',
                '21',
                ' ',
                '0',
                ')'
            ]);
        });
        var cssParser = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.css.cssLanguage.parser;
        it('reproduces the input if nothing matched', function() {
            var property = '2px var(--double, var(--fallback, black)) #32a1ce rgb(124 125 21 0)';
            var rule = "*{--property: ".concat(property, ";}");
            var tree = cssParser.parse(rule).topNode;
            var ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree(property, rule, tree);
            var matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, []);
            var context = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.RenderingContext(ast, new Map(), matchedResult);
            assert.deepStrictEqual(textFragments(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.render(tree, context).nodes).join(''), rule, _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_2__.Printer.walk(ast).get());
        });
        it('correctly renders subtrees', function() {
            var _cssParser_parse_topNode_firstChild_firstChild_nextSibling_firstChild, _cssParser_parse_topNode_firstChild_firstChild_nextSibling, _cssParser_parse_topNode_firstChild_firstChild, _cssParser_parse_topNode_firstChild;
            var property = '2px var(--double, var(--fallback, black)) #32a1ce rgb(124 125 21 0)';
            var rule = "*{--property: ".concat(property, ";}");
            var tree = (_cssParser_parse_topNode_firstChild = cssParser.parse(rule).topNode.firstChild) === null || _cssParser_parse_topNode_firstChild === void 0 ? void 0 : (_cssParser_parse_topNode_firstChild_firstChild = _cssParser_parse_topNode_firstChild.firstChild) === null || _cssParser_parse_topNode_firstChild_firstChild === void 0 ? void 0 : (_cssParser_parse_topNode_firstChild_firstChild_nextSibling = _cssParser_parse_topNode_firstChild_firstChild.nextSibling) === null || _cssParser_parse_topNode_firstChild_firstChild_nextSibling === void 0 ? void 0 : (_cssParser_parse_topNode_firstChild_firstChild_nextSibling_firstChild = _cssParser_parse_topNode_firstChild_firstChild_nextSibling.firstChild) === null || _cssParser_parse_topNode_firstChild_firstChild_nextSibling_firstChild === void 0 ? void 0 : _cssParser_parse_topNode_firstChild_firstChild_nextSibling_firstChild.nextSibling;
            assert.exists(tree);
            var ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree(property, rule, tree);
            var matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, []);
            var context = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.RenderingContext(ast, new Map(), matchedResult);
            assert.deepStrictEqual(textFragments(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.render(tree, context).nodes).join(''), property, _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_2__.Printer.walk(ast).get());
        });
        it('renders trailing comments', function() {
            var property = '/* color: red */ blue /* color: red */';
            assert.strictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', property, []).childNodes)).join(''), property);
        });
        it('renders malformed comments', function() {
            var property = 'red /* foo: bar';
            assert.strictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', property, []).childNodes)).join(''), property);
        });
    });
}); //# sourceMappingURL=PropertyRenderer.test.js.map


}),
"./panels/elements/elements.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeUtils: function() { return /* reexport module object */ _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__; },
  AccessibilityTreeView: function() { return /* reexport module object */ _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__; },
  CSSRuleValidator: function() { return /* reexport module object */ _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__; },
  ClassesPaneWidget: function() { return /* reexport module object */ _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__; },
  ColorSwatchPopoverIcon: function() { return /* reexport module object */ _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__; },
  ComputedStyleModel: function() { return /* reexport module object */ _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  ComputedStyleWidget: function() { return /* reexport module object */ _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__; },
  DOMLinkifier: function() { return /* reexport module object */ _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__; },
  DOMPath: function() { return /* reexport module object */ _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__; },
  ElementStatePaneWidget: function() { return /* reexport module object */ _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__; },
  ElementsPanel: function() { return /* reexport module object */ _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__; },
  ElementsSidebarPane: function() { return /* reexport module object */ _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsTreeElement: function() { return /* reexport module object */ _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__; },
  ElementsTreeElementHighlighter: function() { return /* reexport module object */ _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__; },
  ElementsTreeOutline: function() { return /* reexport module object */ _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__; },
  EventListenersWidget: function() { return /* reexport module object */ _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__; },
  InspectElementModeController: function() { return /* reexport module object */ _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayersWidget: function() { return /* reexport module object */ _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__; },
  MarkerDecorator: function() { return /* reexport module object */ _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__; },
  MetricsSidebarPane: function() { return /* reexport module object */ _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__; },
  NodeStackTraceWidget: function() { return /* reexport module object */ _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__; },
  PlatformFontsWidget: function() { return /* reexport module object */ _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__; },
  PropertiesWidget: function() { return /* reexport module object */ _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__; },
  PropertyMatchers: function() { return /* reexport module object */ _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__; },
  PropertyRenderer: function() { return /* reexport module object */ _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__; },
  StyleEditorWidget: function() { return /* reexport module object */ _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__; },
  StylePropertiesSection: function() { return /* reexport module object */ _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__; },
  StylePropertyHighlighter: function() { return /* reexport module object */ _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__; },
  StylePropertyTreeElement: function() { return /* reexport module object */ _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__; },
  StylePropertyUtils: function() { return /* reexport module object */ _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__; },
  StylesSidebarPane: function() { return /* reexport module object */ _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__; },
  TopLayerContainer: function() { return /* reexport module object */ _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__; },
  WebCustomData: function() { return /* reexport module object */ _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__; }
});
/* harmony import */var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./panels/elements/InspectElementModeController.js");
/* harmony import */var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./panels/elements/ColorSwatchPopoverIcon.js");
/* harmony import */var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
/* harmony import */var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./panels/elements/DOMLinkifier.js");
/* harmony import */var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./panels/elements/DOMPath.js");
/* harmony import */var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./panels/elements/ElementsTreeElement.js");
/* harmony import */var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./panels/elements/TopLayerContainer.js");
/* harmony import */var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./panels/elements/ElementsTreeOutline.js");
/* harmony import */var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./panels/elements/EventListenersWidget.js");
/* harmony import */var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./panels/elements/MarkerDecorator.js");
/* harmony import */var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./panels/elements/MetricsSidebarPane.js");
/* harmony import */var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./panels/elements/PlatformFontsWidget.js");
/* harmony import */var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./panels/elements/PropertiesWidget.js");
/* harmony import */var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./panels/elements/NodeStackTraceWidget.js");
/* harmony import */var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./panels/elements/StylePropertiesSection.js");
/* harmony import */var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./panels/elements/StylePropertyHighlighter.js");
/* harmony import */var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./panels/elements/StylesSidebarPane.js");
/* harmony import */var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./panels/elements/StylePropertyTreeElement.js");
/* harmony import */var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./panels/elements/ComputedStyleWidget.js");
/* harmony import */var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./panels/elements/CSSRuleValidator.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./panels/elements/ClassesPaneWidget.js");
/* harmony import */var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./panels/elements/ElementStatePaneWidget.js");
/* harmony import */var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./panels/elements/ElementsTreeElementHighlighter.js");
/* harmony import */var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./panels/elements/AccessibilityTreeUtils.js");
/* harmony import */var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./panels/elements/AccessibilityTreeView.js");
/* harmony import */var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./panels/elements/LayersWidget.js");
/* harmony import */var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./panels/elements/PropertyMatchers.js");
/* harmony import */var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./panels/elements/PropertyRenderer.js");
/* harmony import */var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./panels/elements/StyleEditorWidget.js");
/* harmony import */var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./panels/elements/StylePropertyUtils.js");
/* harmony import */var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./panels/elements/WebCustomData.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




























































 //# sourceMappingURL=elements.js.map


}),
"./testing/PropertyParser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Printer: function() { return Printer; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}


var _printedText = /*#__PURE__*/ new WeakMap(), _indent = /*#__PURE__*/ new WeakMap();
var Printer = /*#__PURE__*/ function(_SDK_CSSPropertyParser_TreeWalker) {
    "use strict";
    _inherits(Printer, _SDK_CSSPropertyParser_TreeWalker);
    var _super = _create_super(Printer);
    function Printer() {
        _class_call_check(this, Printer);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _printedText, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _indent, {
            writable: true,
            value: 0
        });
        return _this;
    }
    _create_class(Printer, [
        {
            key: "enter",
            value: function enter(param) {
                var node = param.node;
                var text = this.ast.text(node);
                _class_private_field_get(this, _printedText).push("".concat('|'.repeat(_class_private_field_get(this, _indent)), " ").concat(node.name).concat(text !== node.name ? ": ".concat(text) : ''));
                _class_private_field_update(this, _indent).value++;
                return true;
            }
        },
        {
            key: "leave",
            value: function leave() {
                _class_private_field_update(this, _indent).value--;
            }
        },
        {
            key: "get",
            value: function get() {
                return _class_private_field_get(this, _printedText).join('\n');
            }
        }
    ], [
        {
            key: "log",
            value: function log(ast) {
                /* eslint-disable-next-line no-console */ console.log(Printer.walk(ast).get());
            }
        },
        {
            key: "rule",
            value: function rule(rule) {
                var ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree('', rule, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.css.cssLanguage.parser.parse(rule).topNode);
                return Printer.walk(ast).get();
            }
        }
    ]);
    return Printer;
} //# sourceMappingURL=PropertyParser.js.map
(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker);


}),

}]);