"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_StylePropertyHighlighter_test_js"], {
"./panels/elements/StylePropertyHighlighter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('StylePropertyHighlighter', function() {
    var setupStylesPane = function setupStylesPane() {
        return _setupStylesPane.apply(this, arguments);
    };
    var createSection = function createSection(stylesSidebarPane, matchedStyles, sectionName, propertyName) {
        var style = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSStyleDeclaration.CSSStyleDeclaration);
        if (propertyName) {
            var property = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSProperty.CSSProperty(style, 0, propertyName, 'value', true, false, true, false, '', undefined);
            style.leadingProperties.returns([
                property
            ]);
            style.hasActiveProperty.callsFake(function(name) {
                return name === propertyName;
            });
        } else {
            style.leadingProperties.returns([]);
        }
        return new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection(stylesSidebarPane, matchedStyles, style, /* sectionIdx */ 0, /* computedStyles */ null, /* parentsComputedStyles */ null, sectionName);
    };
    var createBlockAndSection = function createBlockAndSection(stylesSidebarPane, matchedStyles, sectionName, propertyName) {
        var titleElement = sinon.createStubInstance(Element);
        var block = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.SectionBlock(titleElement, true);
        block.sections = [
            createSection(stylesSidebarPane, matchedStyles, sectionName, propertyName)
        ];
        return block;
    };
    function _setupStylesPane() {
        _setupStylesPane = _async_to_generator(function() {
            var target, stylesSidebarPane, matchedStyles;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode, sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode));
                        stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                            forceNew: true
                        });
                        return [
                            4,
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMatchedStyles.CSSMatchedStyles.create({
                                cssModel: target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel),
                                node: stylesSidebarPane.node(),
                                inlinePayload: null,
                                attributesPayload: null,
                                matchedPayload: [],
                                pseudoPayload: [],
                                inheritedPayload: [],
                                inheritedPseudoPayload: [],
                                animationsPayload: [],
                                parentLayoutNodeId: undefined,
                                positionTryRules: [],
                                propertyRules: [],
                                cssPropertyRegistrations: [],
                                fontPaletteValuesRule: undefined
                            })
                        ];
                    case 1:
                        matchedStyles = _state.sent();
                        return [
                            2,
                            {
                                stylesSidebarPane: stylesSidebarPane,
                                matchedStyles: matchedStyles
                            }
                        ];
                }
            });
        });
        return _setupStylesPane.apply(this, arguments);
    }
    it('highlights layers', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, stylesSidebarPane, matchedStyles, getSectionBlockByName, block, _block_sections, section, style, property, highlighter, highlightSpy, firstChild;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setupStylesPane()
                    ];
                case 1:
                    _ref = _state.sent(), stylesSidebarPane = _ref.stylesSidebarPane, matchedStyles = _ref.matchedStyles;
                    getSectionBlockByName = sinon.stub(stylesSidebarPane, 'getSectionBlockByName');
                    block = createBlockAndSection(stylesSidebarPane, matchedStyles);
                    getSectionBlockByName.returns(block);
                    _block_sections = _sliced_to_array(block.sections, 1), section = _block_sections[0];
                    style = section.style();
                    // Attach a property late, in order to verify that highlighting the layer repopulates the tree view.
                    property = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSProperty.CSSProperty(style, 0, '', '', true, false, true, false, '', undefined);
                    style.leadingProperties.returns([
                        property
                    ]);
                    assert.isUndefined(section.propertiesTreeOutline.firstChild());
                    highlighter = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertyHighlighter.StylePropertyHighlighter(stylesSidebarPane);
                    highlightSpy = sinon.spy(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils, 'highlightElement');
                    highlighter.findAndHighlightSectionBlock('dontcare');
                    firstChild = section.propertiesTreeOutline.firstChild();
                    assert.exists(firstChild);
                    assert.deepEqual(firstChild.property, property);
                    assert.isTrue(highlightSpy.calledOnceWithExactly(block.titleElement()));
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights sections', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, stylesSidebarPane, matchedStyles, getSectionBlockByName, block, blockExpandSpy, highlighter, highlightSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setupStylesPane()
                    ];
                case 1:
                    _ref = _state.sent(), stylesSidebarPane = _ref.stylesSidebarPane, matchedStyles = _ref.matchedStyles;
                    getSectionBlockByName = sinon.stub(stylesSidebarPane, 'getSectionBlockByName');
                    block = createBlockAndSection(stylesSidebarPane, matchedStyles, 'sectionname');
                    blockExpandSpy = sinon.spy(block, 'expand');
                    getSectionBlockByName.callsFake(function(name) {
                        return name === 'blockname' ? block : undefined;
                    });
                    highlighter = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertyHighlighter.StylePropertyHighlighter(stylesSidebarPane);
                    highlightSpy = sinon.stub(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils, 'highlightElement');
                    highlighter.findAndHighlightSection('sectionname', 'blockname');
                    assert.isTrue(blockExpandSpy.called);
                    assert.isTrue(highlightSpy.calledOnceWithExactly(block.sections[0].element));
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights properties in sections in blocks', /*#__PURE__*/ _async_to_generator(function() {
        var _block2_sections__propertiesTreeOutline_firstChild, _ref, stylesSidebarPane, matchedStyles, getSectionBlockByName, block1, block1ExpandSpy, block2, block2ExpandSpy, highlighter, highlightSpy, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        setupStylesPane()
                    ];
                case 1:
                    _ref = _state.sent(), stylesSidebarPane = _ref.stylesSidebarPane, matchedStyles = _ref.matchedStyles;
                    getSectionBlockByName = sinon.stub(stylesSidebarPane, 'getSectionBlockByName');
                    block1 = createBlockAndSection(stylesSidebarPane, matchedStyles, 'section1', 'property');
                    block1ExpandSpy = sinon.spy(block1, 'expand');
                    block2 = createBlockAndSection(stylesSidebarPane, matchedStyles, 'section2', 'property');
                    block2.sections.unshift(createSection(stylesSidebarPane, matchedStyles, 'extrasection'));
                    block2ExpandSpy = sinon.spy(block2, 'expand');
                    getSectionBlockByName.callsFake(function(name) {
                        if (name === 'block1') {
                            return block1;
                        }
                        if (name === 'block2') {
                            return block2;
                        }
                        return undefined;
                    });
                    highlighter = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertyHighlighter.StylePropertyHighlighter(stylesSidebarPane);
                    highlightSpy = sinon.stub(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils, 'highlightElement');
                    highlighter.findAndHighlightPropertyName('property', 'section2', 'block2');
                    assert.isFalse(block1ExpandSpy.called);
                    assert.isTrue(block2ExpandSpy.called);
                    element = (_block2_sections__propertiesTreeOutline_firstChild = block2.sections[1].propertiesTreeOutline.firstChild()) === null || _block2_sections__propertiesTreeOutline_firstChild === void 0 ? void 0 : _block2_sections__propertiesTreeOutline_firstChild.listItemElement;
                    assert.exists(element);
                    assert.isTrue(highlightSpy.calledOnceWithExactly(element));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=StylePropertyHighlighter.test.js.map


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

}]);