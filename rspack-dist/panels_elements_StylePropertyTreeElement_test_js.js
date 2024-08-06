"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_StylePropertyTreeElement_test_js"], {
"./panels/elements/StylePropertyTreeElement.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/elements/components/components.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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













(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('StylePropertyTreeElement', function() {
    var getTreeElement = function getTreeElement(name, value) {
        var longhandProperties = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        var property = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, name, value, true, false, true, false, '', undefined, longhandProperties);
        return new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.StylePropertyTreeElement({
            stylesPane: stylesSidebarPane,
            section: mockStylePropertiesSection,
            matchedStyles: mockMatchedStyles,
            property: property,
            isShorthand: longhandProperties.length > 0,
            inherited: false,
            overloaded: false,
            newProperty: true
        });
    };
    var setUpStyles = function setUpStyles(cssModel, cssProperties) {
        var styleSheetId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0', origin = arguments.length > 3 && arguments[3] !== void 0 /* Protocol.CSS.StyleSheetOrigin.Regular */  ? arguments[3] : "regular", selector = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 'div';
        var matchedPayload = [
            {
                rule: {
                    selectorList: {
                        selectors: [
                            {
                                text: selector
                            }
                        ],
                        text: selector
                    },
                    origin: origin,
                    style: {
                        cssProperties: cssProperties,
                        shorthandEntries: []
                    }
                },
                matchingSelectors: [
                    0
                ]
            }
        ];
        if (cssModel.styleSheetHeaderForId(styleSheetId)) {
            cssModel.styleSheetRemoved(styleSheetId);
        }
        cssModel.styleSheetAdded({
            styleSheetId: styleSheetId,
            frameId: '',
            sourceURL: '',
            origin: origin,
            title: '',
            disabled: false,
            isInline: false,
            isMutable: false,
            isConstructed: false,
            startLine: 0,
            startColumn: 0,
            length: 0,
            endLine: 0,
            endColumn: 0
        });
        var node = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        node.id = 0;
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSMatchedStyles.create({
            cssModel: cssModel,
            node: node,
            inlinePayload: null,
            attributesPayload: null,
            matchedPayload: matchedPayload,
            pseudoPayload: [],
            inheritedPayload: [],
            inheritedPseudoPayload: [],
            animationsPayload: [],
            parentLayoutNodeId: undefined,
            positionTryRules: [],
            propertyRules: [],
            cssPropertyRegistrations: [],
            fontPaletteValuesRule: undefined
        });
    };
    var stylesSidebarPane;
    var mockStylePropertiesSection;
    var mockCssStyleDeclaration;
    var mockMatchedStyles;
    var mockVariableMap;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var workspace, resourceMapping;
        return _ts_generator(this, function(_state) {
            stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylesSidebarPane.StylesSidebarPane.instance({
                forceNew: true
            });
            mockVariableMap = {
                '--a': 'red',
                '--b': 'blue',
                '--blue': 'blue',
                '--space': 'shorter hue',
                '--garbage-space': 'this-is-garbage-text',
                '--prop': 'customproperty',
                '--zero': '0'
            };
            mockStylePropertiesSection = sinon.createStubInstance(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertiesSection.StylePropertiesSection);
            mockCssStyleDeclaration = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleDeclaration.CSSStyleDeclaration);
            mockMatchedStyles = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSMatchedStyles);
            mockMatchedStyles.keyframes.returns([]);
            mockMatchedStyles.computeCSSVariable.callsFake(function(style, name) {
                return {
                    value: mockVariableMap[name],
                    declaration: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty)
                };
            });
            mockCssStyleDeclaration.leadingProperties.returns([]);
            mockCssStyleDeclaration.styleSheetId = 'stylesheet-id';
            mockCssStyleDeclaration.range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextRange.TextRange(0, 0, 10, 10);
            workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance({
                forceNew: true
            });
            resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance(), workspace);
            _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
                forceNew: true,
                resourceMapping: resourceMapping,
                targetManager: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance()
            });
            return [
                2
            ];
        });
    }));
    describe('updateTitle', function() {
        it('timing swatch, shadow swatch and length swatch are not shown for longhands expanded inside shorthands', /*#__PURE__*/ _async_to_generator(function() {
            var stylePropertyTreeElement, assertNullSwatchOnChildAt;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        stylePropertyTreeElement = getTreeElement('', '', [
                            {
                                name: 'animation-timing-function',
                                value: 'linear'
                            },
                            {
                                name: 'text-shadow',
                                value: '2px 2px #ff0000'
                            },
                            {
                                name: 'box-shadow',
                                value: '2px 2px #ff0000'
                            },
                            {
                                name: 'margin-top',
                                value: '10px'
                            }
                        ]);
                        return [
                            4,
                            stylePropertyTreeElement.onpopulate()
                        ];
                    case 1:
                        _state.sent();
                        stylePropertyTreeElement.updateTitle();
                        stylePropertyTreeElement.expand();
                        assertNullSwatchOnChildAt = function(n, swatchSelector) {
                            var childValueElement = stylePropertyTreeElement.childAt(n).valueElement;
                            assert.exists(childValueElement);
                            assert.notExists(childValueElement.querySelector(swatchSelector));
                        };
                        assertNullSwatchOnChildAt(0, '[is="bezier-swatch"]');
                        assertNullSwatchOnChildAt(1, '[is="css-shadow-swatch"]');
                        assertNullSwatchOnChildAt(2, '[is="css-shadow-swatch"]');
                        assertNullSwatchOnChildAt(3, 'devtools-css-length');
                        return [
                            2
                        ];
                }
            });
        }));
        describe('color-mix swatch', function() {
            it('should show color mix swatch when color-mix is used with a color', function() {
                var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1;
                var stylePropertyTreeElement = getTreeElement('color', 'color-mix(in srgb, red, blue)');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                var colorSwatches = Array.from(((_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelectorAll('devtools-color-swatch')) || []);
                assert.exists(colorMixSwatch);
                assert.exists(colorSwatches.find(function(colorSwatch) {
                    return colorSwatch.textContent === 'red';
                }));
                assert.exists(colorSwatches.find(function(colorSwatch) {
                    return colorSwatch.textContent === 'blue';
                }));
            });
            it('should show color mix swatch when color-mix is used with a known variable as color', function() {
                var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1;
                var stylePropertyTreeElement = getTreeElement('color', 'color-mix(in srgb, var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                var cssVarSwatches = Array.from(((_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelectorAll('devtools-css-var-swatch')) || []);
                assert.exists(colorMixSwatch);
                assert.exists(cssVarSwatches.find(function(cssVarSwatch) {
                    return cssVarSwatch.textContent === 'var(--a)';
                }));
                assert.exists(cssVarSwatches.find(function(cssVarSwatch) {
                    return cssVarSwatch.textContent === 'var(--b)';
                }));
            });
            it('should not show color mix swatch when color-mix is used with an unknown variable as color', function() {
                var _stylePropertyTreeElement_valueElement;
                var stylePropertyTreeElement = getTreeElement('color', 'color-mix(in srgb, var(--unknown-a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.isNull(colorMixSwatch);
            });
            it('should show color mix swatch when color-mix is used with a known variable in interpolation method', function() {
                var _stylePropertyTreeElement_valueElement, _colorMixSwatch_textContent;
                var stylePropertyTreeElement = getTreeElement('color', 'color-mix(in lch var(--space), var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                assert.isTrue((_colorMixSwatch_textContent = colorMixSwatch.textContent) === null || _colorMixSwatch_textContent === void 0 ? void 0 : _colorMixSwatch_textContent.includes('var(--space)'));
            });
            it('should show color mix swatch when color-mix is used with an known variable in interpolation method even if it is not a valid method', function() {
                var _stylePropertyTreeElement_valueElement, _colorMixSwatch_textContent;
                var stylePropertyTreeElement = getTreeElement('color', 'color-mix(in lch var(--garbage-space), var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                assert.isTrue((_colorMixSwatch_textContent = colorMixSwatch.textContent) === null || _colorMixSwatch_textContent === void 0 ? void 0 : _colorMixSwatch_textContent.includes('var(--garbage-space)'));
            });
            it('should not show color mix swatch when color-mix is used with an unknown variable in interpolation method', function() {
                var _stylePropertyTreeElement_valueElement;
                var stylePropertyTreeElement = getTreeElement('color', 'color-mix(in lch var(--not-existing-space), var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.isNull(colorMixSwatch);
            });
            it('shows a popover with it\'s computed color as RGB if possible', function() {
                var _stylePropertyTreeElement_valueElement, _addPopoverSpy_args___contents;
                var cssPropertyWithColorMix = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, 'color', 'color-mix(in srgb, red 50%, yellow)', true, false, true, false, '', undefined);
                var stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles: mockMatchedStyles,
                    property: cssPropertyWithColorMix,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true
                });
                var addPopoverSpy = sinon.spy(stylesSidebarPane, 'addPopover');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(colorMixSwatch);
                assert.isTrue(addPopoverSpy.calledOnce);
                assert.strictEqual(addPopoverSpy.args[0][0], colorMixSwatch.icon);
                assert.strictEqual((_addPopoverSpy_args___contents = addPopoverSpy.args[0][1].contents()) === null || _addPopoverSpy_args___contents === void 0 ? void 0 : _addPopoverSpy_args___contents.textContent, '#ff8000');
            });
            it('shows a popover with it\'s computed color as wide gamut if necessary', function() {
                var _stylePropertyTreeElement_valueElement, _addPopoverSpy_args___contents;
                var cssPropertyWithColorMix = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, 'color', 'color-mix(in srgb, oklch(.5 .5 .5) 50%, yellow)', true, false, true, false, '', undefined);
                var stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles: mockMatchedStyles,
                    property: cssPropertyWithColorMix,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true
                });
                var addPopoverSpy = sinon.spy(stylesSidebarPane, 'addPopover');
                stylePropertyTreeElement.updateTitle();
                var colorMixSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(colorMixSwatch);
                assert.isTrue(addPopoverSpy.calledOnce);
                assert.strictEqual(addPopoverSpy.args[0][0], colorMixSwatch.icon);
                assert.strictEqual((_addPopoverSpy_args___contents = addPopoverSpy.args[0][1].contents()) === null || _addPopoverSpy_args___contents === void 0 ? void 0 : _addPopoverSpy_args___contents.textContent, 'color(srgb 1 0.24 0.17)');
            });
            it('propagates updates to outer color-mixes', function() {
                var _stylePropertyTreeElement_valueElement, _colorSwatch_getColor;
                var cssPropertyWithColorMix = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, 'color', 'color-mix(in srgb, color-mix(in oklch, red, green), blue)', true, false, true, false, '', undefined);
                var stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles: mockMatchedStyles,
                    property: cssPropertyWithColorMix,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true
                });
                stylePropertyTreeElement.updateTitle();
                var outerColorMix = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-mix-swatch');
                assert.exists(outerColorMix);
                var handler = sinon.fake();
                outerColorMix.addEventListener("colorChanged" /* InlineEditor.ColorMixSwatch.Events.ColorChanged */ , handler);
                var innerColorMix = outerColorMix.querySelector('devtools-color-mix-swatch');
                assert.exists(innerColorMix);
                assert.strictEqual(outerColorMix.getText(), 'color-mix(in srgb, color-mix(in oklch, red, green), blue)');
                assert.strictEqual(innerColorMix.getText(), 'color-mix(in oklch, red, green)');
                innerColorMix.setFirstColor('blue');
                assert.deepStrictEqual(handler.args[0][0].data, {
                    text: 'color-mix(in srgb, color-mix(in oklch, blue, green), blue)'
                });
                assert.strictEqual(outerColorMix.getText(), 'color-mix(in srgb, color-mix(in oklch, blue, green), blue)');
                // setFirstColor does not actually update the rendered color swatches or the textContent, which is why the first
                // color is still red here.
                var colorSwatch = innerColorMix.querySelector('devtools-color-swatch');
                assert.isOk(colorSwatch);
                var newColor = (_colorSwatch_getColor = colorSwatch.getColor()) === null || _colorSwatch_getColor === void 0 ? void 0 : _colorSwatch_getColor.as("hex" /* Common.Color.Format.HEX */ );
                assert.isOk(newColor);
                colorSwatch.setColor(newColor);
                assert.strictEqual(outerColorMix.getText(), 'color-mix(in srgb, color-mix(in oklch, #ff0000, green), blue)');
                assert.deepStrictEqual(handler.args[1][0].data, {
                    text: 'color-mix(in srgb, color-mix(in oklch, #ff0000, green), blue)'
                });
            });
        });
        describe('animation-name', function() {
            it('should link-swatch be rendered for animation-name declaration', function() {
                var _stylePropertyTreeElement_valueElement;
                var stylePropertyTreeElement = getTreeElement('animation-name', 'first-keyframe');
                stylePropertyTreeElement.updateTitle();
                var animationNameSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-link-swatch');
                assert.isNotNull(animationNameSwatch);
            });
            it('should two link-swatches be rendered for animation-name declaration that contains two keyframe references', function() {
                var _stylePropertyTreeElement_valueElement;
                var stylePropertyTreeElement = getTreeElement('animation-name', 'first-keyframe, second-keyframe');
                stylePropertyTreeElement.updateTitle();
                var animationNameSwatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('devtools-link-swatch');
                assert.strictEqual(animationNameSwatches === null || animationNameSwatches === void 0 ? void 0 : animationNameSwatches.length, 2);
            });
        });
    });
    it('applies the new style when the color format is changed', /*#__PURE__*/ _async_to_generator(function() {
        var _swatch_getColor, _swatch_getColor1, stylePropertyTreeElement, applyStyleTextStub, returnValue, valueElement, swatch, expectedColorString, newColor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stylePropertyTreeElement = getTreeElement('color', 'color(srgb .5 .5 1)');
                    applyStyleTextStub = sinon.stub(stylePropertyTreeElement, 'applyStyleText');
                    // Make sure we don't leave a dangling promise behind:
                    returnValue = _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2
                            ];
                        });
                    })();
                    return [
                        4,
                        returnValue
                    ];
                case 1:
                    _state.sent();
                    applyStyleTextStub.returns(returnValue);
                    stylePropertyTreeElement.updateTitle();
                    valueElement = stylePropertyTreeElement.valueElement;
                    assert.exists(valueElement);
                    swatch = valueElement.querySelector("".concat(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorSwatch.litTagName.value));
                    assert.exists(swatch);
                    expectedColorString = (_swatch_getColor = swatch.getColor()) === null || _swatch_getColor === void 0 ? void 0 : _swatch_getColor.asString("lab" /* Common.Color.Format.LAB */ );
                    assert.exists(expectedColorString);
                    assert.match(expectedColorString, /lab\([-.0-9]* [-.0-9]* [-.0-9]*\)/);
                    newColor = (_swatch_getColor1 = swatch.getColor()) === null || _swatch_getColor1 === void 0 ? void 0 : _swatch_getColor1.as("lab" /* Common.Color.Format.LAB */ );
                    assert.isOk(newColor);
                    swatch.setColorText(newColor);
                    assert.deepEqual(stylePropertyTreeElement.renderedPropertyText(), "color: ".concat(expectedColorString));
                    assert.isTrue(applyStyleTextStub.alwaysCalledWith("color: ".concat(expectedColorString), false));
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Context menu', function() {
        var expectedHeaderSectionItemsLabels = [
            'Copy declaration',
            'Copy property',
            'Copy value',
            'Copy rule',
            'Copy declaration as JS'
        ];
        var expectedClipboardSectionItemsLabels = [
            'Copy all declarations',
            'Copy all declarations as JS'
        ];
        var expectedDefaultSectionItemsLabels = [
            'Copy all CSS changes'
        ];
        var expectedFooterSectionItemsLabels = [
            'View computed value'
        ];
        it('should create a context menu', function() {
            var verifySection = function(expectedSectionItemLabels, sectionItems) {
                var sectionItemLabels = sectionItems.map(function(item) {
                    return item.buildDescriptor().label;
                });
                assert.deepEqual(sectionItemLabels, expectedSectionItemLabels);
            };
            var stylePropertyTreeElement = getTreeElement('', '');
            var event = new CustomEvent('contextmenu');
            var contextMenu = stylePropertyTreeElement.createCopyContextMenu(event);
            var headerSection = contextMenu.headerSection();
            var clipboardSection = contextMenu.clipboardSection();
            var defaultSection = contextMenu.defaultSection();
            var footerSection = contextMenu.footerSection();
            verifySection(expectedHeaderSectionItemsLabels, headerSection.items);
            verifySection(expectedClipboardSectionItemsLabels, clipboardSection.items);
            verifySection(expectedDefaultSectionItemsLabels, defaultSection.items);
            verifySection(expectedFooterSectionItemsLabels, footerSection.items);
        });
    });
    describe('CSS hints', function() {
        it('should create a hint for inline elements', function() {
            sinon.stub(stylesSidebarPane, 'node').returns({
                localName: function localName() {
                    return 'span';
                },
                isSVGNode: function isSVGNode() {
                    return false;
                }
            });
            var stylePropertyTreeElement = getTreeElement('width', '100px');
            stylePropertyTreeElement.setComputedStyles(new Map([
                [
                    'width',
                    '100px'
                ],
                [
                    'display',
                    'inline'
                ]
            ]));
            stylePropertyTreeElement.updateAuthoringHint();
            assert(stylePropertyTreeElement.listItemElement.classList.contains('inactive-property'), 'CSS hint was not rendered.');
        });
        it('should not create a hint for SVG elements', function() {
            sinon.stub(stylesSidebarPane, 'node').returns({
                localName: function localName() {
                    return 'rect';
                },
                isSVGNode: function isSVGNode() {
                    return true;
                }
            });
            var stylePropertyTreeElement = getTreeElement('width', '100px');
            stylePropertyTreeElement.setComputedStyles(new Map([
                [
                    'width',
                    '100px'
                ],
                [
                    'display',
                    'inline'
                ]
            ]));
            stylePropertyTreeElement.updateAuthoringHint();
            assert(!stylePropertyTreeElement.listItemElement.classList.contains('inactive-property'), 'CSS hint was rendered unexpectedly.');
        });
    });
    describe('custom-properties', function() {
        it('linkifies var functions to declarations', /*#__PURE__*/ _async_to_generator(function() {
            var _renderValueSpy_returnValues_find, _varSwatch_link_linkElement, _varSwatch_link, cssCustomPropertyDef, renderValueSpy, stylePropertyTreeElement, varSwatch, revealPropertySpy;
            return _ts_generator(this, function(_state) {
                cssCustomPropertyDef = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, '--prop', 'value', true, false, true, false, '', undefined);
                mockMatchedStyles.computeCSSVariable.callsFake(function(_, name) {
                    return name === '--prop' ? {
                        value: 'computedvalue',
                        declaration: cssCustomPropertyDef,
                        fromFallback: false
                    } : null;
                });
                renderValueSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.PropertyRenderer.Renderer, 'renderValueElement');
                stylePropertyTreeElement = getTreeElement('prop', 'var(--prop)');
                stylePropertyTreeElement.updateTitle();
                varSwatch = (_renderValueSpy_returnValues_find = renderValueSpy.returnValues.find(function(value) {
                    return _instanceof(value.firstChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.LinkSwatch.CSSVarSwatch);
                })) === null || _renderValueSpy_returnValues_find === void 0 ? void 0 : _renderValueSpy_returnValues_find.firstChild;
                assert.exists(varSwatch);
                revealPropertySpy = sinon.spy(stylesSidebarPane, 'revealProperty');
                (_varSwatch_link = varSwatch.link) === null || _varSwatch_link === void 0 ? void 0 : (_varSwatch_link_linkElement = _varSwatch_link.linkElement) === null || _varSwatch_link_linkElement === void 0 ? void 0 : _varSwatch_link_linkElement.click();
                assert.isTrue(revealPropertySpy.calledWith(cssCustomPropertyDef));
                return [
                    2
                ];
            });
        }));
        it('linkifies property definition to registrations', /*#__PURE__*/ _async_to_generator(function() {
            var addElementPopoverHook, stylePropertyTreeElement, registration, popoverContents, details, jumpToSectionSpy;
            return _ts_generator(this, function(_state) {
                addElementPopoverHook = sinon.stub(stylesSidebarPane, 'addPopover');
                stylePropertyTreeElement = getTreeElement('--prop', 'value');
                stylePropertyTreeElement.updateTitle();
                assert.isTrue(addElementPopoverHook.calledOnce);
                registration = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSRegisteredProperty);
                mockMatchedStyles.getRegisteredProperty.callsFake(function(name) {
                    return name === '--prop' ? registration : undefined;
                });
                mockMatchedStyles.computeCSSVariable.returns({
                    value: 'computedvalue',
                    declaration: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty)
                });
                popoverContents = addElementPopoverHook.args[0][1].contents();
                assert.isTrue(_instanceof(popoverContents, _components_components_js__WEBPACK_IMPORTED_MODULE_11__.CSSVariableValueView.CSSVariableValueView));
                details = popoverContents.details;
                assert.exists(details);
                jumpToSectionSpy = sinon.spy(stylesSidebarPane, 'jumpToSection');
                details.goToDefinition();
                assert.isTrue(jumpToSectionSpy.calledOnceWithExactly('--prop', _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylesSidebarPane.REGISTERED_PROPERTY_SECTION_NAME));
                return [
                    2
                ];
            });
        }));
        it('linkifies var functions to initial-value registrations', /*#__PURE__*/ _async_to_generator(function() {
            var _renderValueSpy_returnValues_find, _varSwatch_link_linkElement, _varSwatch_link, renderValueSpy, stylePropertyTreeElement, varSwatch, jumpToPropertySpy;
            return _ts_generator(this, function(_state) {
                mockMatchedStyles.computeCSSVariable.returns({
                    value: 'computedvalue',
                    declaration: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSRegisteredProperty, {
                        propertyName: '--prop'
                    })
                });
                renderValueSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.PropertyRenderer.Renderer, 'renderValueElement');
                stylePropertyTreeElement = getTreeElement('prop', 'var(--prop)');
                stylePropertyTreeElement.updateTitle();
                varSwatch = (_renderValueSpy_returnValues_find = renderValueSpy.returnValues.find(function(value) {
                    return _instanceof(value.firstChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.LinkSwatch.CSSVarSwatch);
                })) === null || _renderValueSpy_returnValues_find === void 0 ? void 0 : _renderValueSpy_returnValues_find.firstChild;
                assert.exists(varSwatch);
                jumpToPropertySpy = sinon.spy(stylesSidebarPane, 'jumpToProperty');
                (_varSwatch_link = varSwatch.link) === null || _varSwatch_link === void 0 ? void 0 : (_varSwatch_link_linkElement = _varSwatch_link.linkElement) === null || _varSwatch_link_linkElement === void 0 ? void 0 : _varSwatch_link_linkElement.click();
                assert.isTrue(jumpToPropertySpy.calledWith('initial-value', '--prop', _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylesSidebarPane.REGISTERED_PROPERTY_SECTION_NAME));
                return [
                    2
                ];
            });
        }));
    });
    describe('CSSVarSwatch', function() {
        it('should render a CSSVarSwatch for variable usage without fallback', function() {
            var _stylePropertyTreeElement_valueElement, _cssVarSwatch_shadowRoot, _linkSwatch_shadowRoot;
            var stylePropertyTreeElement = getTreeElement('color', 'var(--a)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var linkSwatch = (_cssVarSwatch_shadowRoot = cssVarSwatch.shadowRoot) === null || _cssVarSwatch_shadowRoot === void 0 ? void 0 : _cssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
            assert.exists(linkSwatch);
            assert.strictEqual(cssVarSwatch.textContent, 'var(--a)');
            assert.strictEqual((_linkSwatch_shadowRoot = linkSwatch.shadowRoot) === null || _linkSwatch_shadowRoot === void 0 ? void 0 : _linkSwatch_shadowRoot.textContent, '--a');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--a)');
        });
        it('should render a CSSVarSwatch for variable usage with fallback', function() {
            var _stylePropertyTreeElement_valueElement, _cssVarSwatch_shadowRoot, _linkSwatch_shadowRoot;
            var stylePropertyTreeElement = getTreeElement('color', 'var(--not-existing, red)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var linkSwatch = (_cssVarSwatch_shadowRoot = cssVarSwatch.shadowRoot) === null || _cssVarSwatch_shadowRoot === void 0 ? void 0 : _cssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
            assert.exists(linkSwatch);
            assert.strictEqual((_linkSwatch_shadowRoot = linkSwatch.shadowRoot) === null || _linkSwatch_shadowRoot === void 0 ? void 0 : _linkSwatch_shadowRoot.textContent, '--not-existing');
            assert.strictEqual(cssVarSwatch.deepTextContent(), 'var(--not-existing, red)');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--not-existing, red)');
        });
        it('should render a CSSVarSwatch inside CSSVarSwatch for variable usage with another variable fallback', function() {
            var _stylePropertyTreeElement_valueElement, _cssVarSwatch_shadowRoot, _insideCssVarSwatch_shadowRoot, _firstLinkSwatch_shadowRoot, _secondLinkSwatch_shadowRoot;
            var stylePropertyTreeElement = getTreeElement('color', 'var(--not-existing, var(--a))');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var firstLinkSwatch = (_cssVarSwatch_shadowRoot = cssVarSwatch.shadowRoot) === null || _cssVarSwatch_shadowRoot === void 0 ? void 0 : _cssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
            var insideCssVarSwatch = cssVarSwatch.querySelector('devtools-css-var-swatch');
            var secondLinkSwatch = insideCssVarSwatch === null || insideCssVarSwatch === void 0 ? void 0 : (_insideCssVarSwatch_shadowRoot = insideCssVarSwatch.shadowRoot) === null || _insideCssVarSwatch_shadowRoot === void 0 ? void 0 : _insideCssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--not-existing, var(--a))');
            assert.strictEqual(firstLinkSwatch === null || firstLinkSwatch === void 0 ? void 0 : (_firstLinkSwatch_shadowRoot = firstLinkSwatch.shadowRoot) === null || _firstLinkSwatch_shadowRoot === void 0 ? void 0 : _firstLinkSwatch_shadowRoot.textContent, '--not-existing');
            assert.strictEqual(cssVarSwatch.textContent, 'var(--not-existing, var(--a))');
            assert.strictEqual(secondLinkSwatch === null || secondLinkSwatch === void 0 ? void 0 : (_secondLinkSwatch_shadowRoot = secondLinkSwatch.shadowRoot) === null || _secondLinkSwatch_shadowRoot === void 0 ? void 0 : _secondLinkSwatch_shadowRoot.textContent, '--a');
            assert.strictEqual(insideCssVarSwatch === null || insideCssVarSwatch === void 0 ? void 0 : insideCssVarSwatch.textContent, 'var(--a)');
        });
        it('should render a CSSVarSwatch inside CSSVarSwatch for variable usage with calc expression as fallback', function() {
            var _stylePropertyTreeElement_valueElement, _cssVarSwatch_shadowRoot, _firstLinkSwatch_shadowRoot;
            var stylePropertyTreeElement = getTreeElement('color', 'var(--not-existing, calc(15px + 20px))');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var firstLinkSwatch = (_cssVarSwatch_shadowRoot = cssVarSwatch.shadowRoot) === null || _cssVarSwatch_shadowRoot === void 0 ? void 0 : _cssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--not-existing, calc(15px + 20px))');
            assert.strictEqual(firstLinkSwatch === null || firstLinkSwatch === void 0 ? void 0 : (_firstLinkSwatch_shadowRoot = firstLinkSwatch.shadowRoot) === null || _firstLinkSwatch_shadowRoot === void 0 ? void 0 : _firstLinkSwatch_shadowRoot.textContent, '--not-existing');
            assert.strictEqual(cssVarSwatch.textContent, 'var(--not-existing, calc(15px + 20px))');
        });
        it('should render a CSSVarSwatch inside CSSVarSwatch for variable usage with color and also a color swatch', function() {
            for(var _i = 0, _iter = [
                '--a',
                '--not-existing'
            ]; _i < _iter.length; _i++){
                var varName = _iter[_i];
                var _stylePropertyTreeElement_valueElement, _cssVarSwatch_shadowRoot, _firstLinkSwatch_shadowRoot;
                var stylePropertyTreeElement = getTreeElement('color', "var(".concat(varName, ", var(--blue))"));
                stylePropertyTreeElement.updateTitle();
                assert.exists(stylePropertyTreeElement.valueElement);
                var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
                assert.exists(cssVarSwatch);
                var colorSwatch = cssVarSwatch.querySelector('devtools-color-swatch');
                assert.exists(colorSwatch);
                assert.isTrue(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorSwatch.isColorSwatch(colorSwatch));
                var firstLinkSwatch = (_cssVarSwatch_shadowRoot = cssVarSwatch.shadowRoot) === null || _cssVarSwatch_shadowRoot === void 0 ? void 0 : _cssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
                assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, "var(".concat(varName, ", var(--blue))"));
                assert.strictEqual(firstLinkSwatch === null || firstLinkSwatch === void 0 ? void 0 : (_firstLinkSwatch_shadowRoot = firstLinkSwatch.shadowRoot) === null || _firstLinkSwatch_shadowRoot === void 0 ? void 0 : _firstLinkSwatch_shadowRoot.textContent, varName);
                assert.strictEqual(cssVarSwatch.textContent, "var(".concat(varName, ", var(--blue))"));
            }
        });
        it('should render CSSVarSwatches for multiple var() usages in the same property declaration', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('--shadow', 'var(--a) var(--b)');
            stylePropertyTreeElement.updateTitle();
            var cssVarSwatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('devtools-css-var-swatch');
            assert.strictEqual(cssVarSwatches === null || cssVarSwatches === void 0 ? void 0 : cssVarSwatches.length, 2);
        });
        it('should render a CSSVarSwatch for var() with spaces', function() {
            var _stylePropertyTreeElement_valueElement, _cssVarSwatch_shadowRoot, _linkSwatch_shadowRoot;
            var stylePropertyTreeElement = getTreeElement('color', 'var( --test    )');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var linkSwatch = (_cssVarSwatch_shadowRoot = cssVarSwatch.shadowRoot) === null || _cssVarSwatch_shadowRoot === void 0 ? void 0 : _cssVarSwatch_shadowRoot.querySelector('devtools-base-link-swatch');
            assert.strictEqual(linkSwatch === null || linkSwatch === void 0 ? void 0 : (_linkSwatch_shadowRoot = linkSwatch.shadowRoot) === null || _linkSwatch_shadowRoot === void 0 ? void 0 : _linkSwatch_shadowRoot.textContent, '--test');
            assert.strictEqual(cssVarSwatch.textContent, 'var( --test    )');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var( --test    )');
        });
        it('connects nested color swatches', function() {
            var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1;
            var stylePropertyTreeElement = getTreeElement('color', 'var(--void, red)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var outerColorSwatch = (_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelector('devtools-color-swatch');
            assert.exists(outerColorSwatch);
            var innerColorSwatch = cssVarSwatch.querySelector('devtools-color-swatch');
            assert.exists(innerColorSwatch);
            assert.notStrictEqual(outerColorSwatch, innerColorSwatch);
            var color = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Lab(1, 0, 0, null, undefined);
            innerColorSwatch.setColor(color);
            assert.strictEqual(outerColorSwatch.getColor(), color);
        });
        it('only connects nested color swatches if the fallback is actually taken', function() {
            var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1, _outerColorSwatch_getColor;
            var stylePropertyTreeElement = getTreeElement('color', 'var(--blue, red)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            var cssVarSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            var outerColorSwatch = (_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelector('devtools-color-swatch');
            assert.exists(outerColorSwatch);
            var innerColorSwatch = cssVarSwatch.querySelector('devtools-color-swatch');
            assert.exists(innerColorSwatch);
            assert.notStrictEqual(outerColorSwatch, innerColorSwatch);
            var color = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Lab(1, 0, 0, null, undefined);
            innerColorSwatch.setColor(color);
            assert.strictEqual((_outerColorSwatch_getColor = outerColorSwatch.getColor()) === null || _outerColorSwatch_getColor === void 0 ? void 0 : _outerColorSwatch_getColor.asString(), 'blue');
        });
    });
    describe('VariableRenderer', function() {
        it('computes the text for var()s correctly', /*#__PURE__*/ _async_to_generator(function() {
            var cssModel, _, _1, _2, _3;
            function matchProperty(value) {
                return _matchProperty.apply(this, arguments);
            }
            function _matchProperty() {
                _matchProperty = _async_to_generator(function(value) {
                    var name, matchedStyles, property, stylePropertyTreeElement, ast, matching, res;
                    var _arguments = arguments;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                name = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : 'color';
                                return [
                                    4,
                                    setUpStyles(cssModel, [
                                        {
                                            name: '--blue',
                                            value: 'blue'
                                        },
                                        {
                                            name: name,
                                            value: value
                                        }
                                    ])
                                ];
                            case 1:
                                matchedStyles = _state.sent();
                                property = matchedStyles.nodeStyles()[0].leadingProperties()[1];
                                stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.StylePropertyTreeElement({
                                    stylesPane: stylesSidebarPane,
                                    section: mockStylePropertiesSection,
                                    matchedStyles: matchedStyles,
                                    property: property,
                                    isShorthand: false,
                                    inherited: false,
                                    overloaded: false,
                                    newProperty: true
                                });
                                ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration(stylePropertyTreeElement.name, stylePropertyTreeElement.value);
                                assert.exists(ast);
                                matching = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
                                    new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.VariableRenderer(stylePropertyTreeElement, stylePropertyTreeElement.property.ownerStyle).matcher()
                                ]);
                                res = {
                                    hasUnresolvedVars: matching.hasUnresolvedVars(ast.tree),
                                    computedText: matching.getComputedText(ast.tree)
                                };
                                return [
                                    2,
                                    res
                                ];
                        }
                    });
                });
                return _matchProperty.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cssModel = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)());
                        _ = assert.deepStrictEqual;
                        return [
                            4,
                            matchProperty('var( --blue    )')
                        ];
                    case 1:
                        _.apply(assert, [
                            _state.sent(),
                            {
                                hasUnresolvedVars: false,
                                computedText: 'color: blue'
                            }
                        ]);
                        _1 = assert.deepStrictEqual;
                        return [
                            4,
                            matchProperty('var(--no, var(--blue))')
                        ];
                    case 2:
                        _1.apply(assert, [
                            _state.sent(),
                            {
                                hasUnresolvedVars: false,
                                computedText: 'color: blue'
                            }
                        ]);
                        _2 = assert.deepStrictEqual;
                        return [
                            4,
                            matchProperty('pre var(--no) post')
                        ];
                    case 3:
                        _2.apply(assert, [
                            _state.sent(),
                            {
                                hasUnresolvedVars: true,
                                computedText: 'color: pre var(--no) post'
                            }
                        ]);
                        _3 = assert.deepStrictEqual;
                        return [
                            4,
                            matchProperty('var(--no, var(--no2))')
                        ];
                    case 4:
                        _3.apply(assert, [
                            _state.sent(),
                            {
                                hasUnresolvedVars: true,
                                computedText: 'color: var(--no, var(--no2))'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('layers correctly with the font renderer', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('font-size', 'calc(1 + var(--no))');
            stylePropertyTreeElement.updateTitle();
            assert.exists((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-var-swatch'));
        });
    });
    describe('ColorRenderer', function() {
        it('correctly renders children of the color swatch', function() {
            var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1, _colorSwatch_getColor, _stylePropertyTreeElement_valueElement2;
            var value = 'rgb(255, var(--zero), var(--zero))';
            var stylePropertyTreeElement = getTreeElement('color', value);
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.textContent, value);
            var colorSwatch = (_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelector('devtools-color-swatch');
            assert.exists(colorSwatch);
            assert.strictEqual((_colorSwatch_getColor = colorSwatch.getColor()) === null || _colorSwatch_getColor === void 0 ? void 0 : _colorSwatch_getColor.asString("hex" /* Common.Color.Format.HEX */ ), '#ff0000');
            var varSwatches = (_stylePropertyTreeElement_valueElement2 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement2 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement2.querySelectorAll('devtools-css-var-swatch');
            assert.exists(varSwatches);
            assert.lengthOf(varSwatches, 2);
        });
        it('connects correctly with an inner angle swatch', function() {
            var _stylePropertyTreeElement_valueElement, _colorSwatch_getColor, _stylePropertyTreeElement_valueElement1, _colorSwatch_getColor1;
            var stylePropertyTreeElement = getTreeElement('color', 'hsl(120deg, 50%, 25%)');
            stylePropertyTreeElement.updateTitle();
            var colorSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-swatch');
            assert.exists(colorSwatch);
            assert.strictEqual((_colorSwatch_getColor = colorSwatch.getColor()) === null || _colorSwatch_getColor === void 0 ? void 0 : _colorSwatch_getColor.asString("hsl" /* Common.Color.Format.HSL */ ), 'hsl(120deg 50% 25%)');
            var eventHandler = sinon.stub();
            colorSwatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.ColorSwatch.ColorChangedEvent.eventName, eventHandler);
            var angleSwatch = (_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelector('devtools-css-angle');
            assert.exists(angleSwatch);
            angleSwatch.updateAngle({
                value: 130,
                unit: "deg" /* InlineEditor.CSSAngleUtils.AngleUnit.Deg */ 
            });
            assert.strictEqual((_colorSwatch_getColor1 = colorSwatch.getColor()) === null || _colorSwatch_getColor1 === void 0 ? void 0 : _colorSwatch_getColor1.asString("hsl" /* Common.Color.Format.HSL */ ), 'hsl(130deg 50% 25%)');
            assert.isTrue(eventHandler.calledOnce);
            assert.strictEqual(eventHandler.args[0][0].data.color, colorSwatch.getColor());
        });
        it('renders relative colors', function() {
            var _stylePropertyTreeElement_valueElement, _colorSwatch_getColor;
            var stylePropertyTreeElement = getTreeElement('color', 'hsl(    from var(--blue) h calc(s/2) l / alpha)');
            stylePropertyTreeElement.updateTitle();
            var colorSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-swatch');
            assert.isOk(colorSwatch);
            assert.isOk(colorSwatch.getColor());
            assert.strictEqual(colorSwatch === null || colorSwatch === void 0 ? void 0 : (_colorSwatch_getColor = colorSwatch.getColor()) === null || _colorSwatch_getColor === void 0 ? void 0 : _colorSwatch_getColor.asString("hsl" /* Common.Color.Format.HSL */ ), 'hsl(240deg 50% 50%)');
        });
        it('does not render relative colors if property text is invalid', function() {
            var _stylePropertyTreeElement_valueElement;
            var invalidColor = 'hsl(    from var(--zero) h calc(s/2) l / alpha)';
            var stylePropertyTreeElement = getTreeElement('color', invalidColor);
            stylePropertyTreeElement.updateTitle();
            var colorSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-swatch');
            assert.isNull(colorSwatch);
        });
    });
    describe('BezierRenderer', function() {
        it('renders the easing function swatch', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('animation-timing-function', 'ease-out');
            stylePropertyTreeElement.updateTitle();
            assert.instanceOf((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.firstChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.Swatches.BezierSwatch);
        });
    });
    describe('UrlRenderer', function() {
        it('linkifies and unescapes urls', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('--url', 'url(devtools:\\/\\/abc)');
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.textContent, 'url(devtools://abc)');
        });
    });
    describe('StringRenderer', function() {
        it('unescapes strings', function() {
            var _stylePropertyTreeElement_valueElement_firstElementChild, _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('content', '"\\2716"');
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : (_stylePropertyTreeElement_valueElement_firstElementChild = _stylePropertyTreeElement_valueElement.firstElementChild) === null || _stylePropertyTreeElement_valueElement_firstElementChild === void 0 ? void 0 : _stylePropertyTreeElement_valueElement_firstElementChild.title, '"\u2716"');
        });
    });
    describe('ShadowRenderer', function() {
        it('parses shadows correctly', function() {
            var parseShadow = function(property, value, success) {
                var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1;
                var stylePropertyTreeElement = getTreeElement(property, value);
                stylePropertyTreeElement.updateTitle();
                assert.strictEqual(_instanceof((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.firstElementChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.Swatches.CSSShadowSwatch), success);
                assert.strictEqual((_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.textContent, value);
            };
            var parseTextShadowSuccess = function(value) {
                return parseShadow('text-shadow', value, true);
            };
            var parseTextShadowFailure = function(value) {
                return parseShadow('text-shadow', value, false);
            };
            var parseBoxShadowSuccess = function(value) {
                return parseShadow('box-shadow', value, true);
            };
            var parseBoxShadowFailure = function(value) {
                return parseShadow('box-shadow', value, false);
            };
            parseTextShadowSuccess('0 0');
            parseTextShadowSuccess('1px 2px');
            parseTextShadowSuccess('1px 2px black');
            parseTextShadowSuccess('1px 2px 2px');
            parseTextShadowSuccess('rgb(0, 0, 0) 1px 2px 2px');
            parseTextShadowSuccess('1px 2px 2px rgb(0, 0, 0)');
            parseTextShadowSuccess('1px 2px black, 0 0 #ffffff');
            parseTextShadowSuccess('1px -2px black, 0 0 rgb(0, 0, 0), 3px 3.5px 3px');
            parseTextShadowSuccess('1px -2px black, 0 0 rgb(0, 0, 0), 3px 3.5px 3px !important');
            parseTextShadowSuccess('1px 2px black, , 0 0 #ffffff');
            parseTextShadowFailure('');
            parseTextShadowFailure('0');
            parseTextShadowFailure('1 2 black !important');
            parseTextShadowFailure('1px black 2px');
            parseTextShadowFailure('1px 2px 2px 3px');
            parseTextShadowFailure('inset 1px 2px 2px');
            parseTextShadowFailure('red 1px 2px 2px red');
            parseTextShadowFailure('1px 2px rgb(0, 0, 0) 2px');
            parseTextShadowFailure('hello 1px 2px');
            parseTextShadowFailure('1px 2px black 0 0 #ffffff');
            // TODO(crbug.com/40945390) Add coverage after rolling codemirror: parseTextShadowFailure('1px2px');
            parseTextShadowFailure('1px 2pxrgb(0, 0, 0)');
            parseBoxShadowSuccess('0 0');
            parseBoxShadowSuccess('1px 2px');
            parseBoxShadowSuccess('1px 2px black');
            parseBoxShadowSuccess('1px 2px 2px');
            parseBoxShadowSuccess('1px 2px 2px 3px');
            parseBoxShadowSuccess('inset 1px 2px');
            parseBoxShadowSuccess('1px 2px inset');
            parseBoxShadowSuccess('INSET 1px 2px 2px 3px');
            parseBoxShadowSuccess('rgb(0, 0, 0) 1px 2px 2px');
            parseBoxShadowSuccess('inset rgb(0, 0, 0) 1px 2px 2px');
            parseBoxShadowSuccess('inset 1px 2px 2px 3px rgb(0, 0, 0)');
            parseBoxShadowSuccess('1px 2px 2px 3px rgb(0, 0, 0) inset');
            parseBoxShadowSuccess('1px 2px black, inset 0 0 #ffffff');
            parseBoxShadowSuccess('1px -2px black, inset 0 0 rgb(0, 0, 0), 3px 3.5px 3px 4px');
            parseBoxShadowSuccess('1px 2px black, , 0 0 #ffffff');
            parseBoxShadowFailure('');
            parseBoxShadowFailure('0');
            parseBoxShadowFailure('1 2 black');
            parseBoxShadowFailure('1px black 2px');
            parseBoxShadowFailure('1px 2px 2px 3px 4px');
            parseBoxShadowFailure('1px 2px 2px inset 3px');
            parseBoxShadowFailure('inset 1px 2px 2px inset');
            parseBoxShadowFailure('1px 2px rgb(0, 0, 0) 2px');
            parseBoxShadowFailure('hello 1px 2px');
            parseBoxShadowFailure('1px 2px black 0 0 #ffffff');
            // TODO(crbug.com/40945390) Add coverage after rolling codemirror: parseBoxShadowFailure('1px2px');
            parseBoxShadowFailure('1px 2pxrgb(0, 0, 0)');
        });
        it('renders the shadow swatch and color swatch', function() {
            var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement_firstElementChild, _stylePropertyTreeElement_valueElement1, _colorSwatch_getColor;
            var stylePropertyTreeElement = getTreeElement('box-shadow', 'inset 10px 10px blue');
            stylePropertyTreeElement.updateTitle();
            assert.instanceOf((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.firstElementChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.Swatches.CSSShadowSwatch);
            var colorSwatch = (_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : (_stylePropertyTreeElement_valueElement_firstElementChild = _stylePropertyTreeElement_valueElement1.firstElementChild) === null || _stylePropertyTreeElement_valueElement_firstElementChild === void 0 ? void 0 : _stylePropertyTreeElement_valueElement_firstElementChild.querySelector('devtools-color-swatch');
            assert.exists(colorSwatch);
            assert.strictEqual((_colorSwatch_getColor = colorSwatch.getColor()) === null || _colorSwatch_getColor === void 0 ? void 0 : _colorSwatch_getColor.asString(), 'blue');
        });
        it('renders multiple icons for multiple shadows', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('box-shadow', 'inset 10px 11px blue, notashadow, 6px 5px red');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 2);
            assert.strictEqual(swatches[0].textContent, 'inset 10px 11px blue');
            assert.strictEqual(swatches[1].textContent, '6px 5px red');
        });
        it('correctly parses text-shadow', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('text-shadow', 'inset 10px 11px blue, 6px 5px red, 5px 5px 0 0 yellow');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 1);
            assert.strictEqual(swatches[0].textContent, '6px 5px red');
        });
        it('renders a color-mix child', function() {
            var _stylePropertyTreeElement_valueElement, _stylePropertyTreeElement_valueElement1;
            var stylePropertyTreeElement = getTreeElement('box-shadow', '10px 11px color-mix(in srgb, red, blue)');
            stylePropertyTreeElement.updateTitle();
            assert.instanceOf((_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.firstElementChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.Swatches.CSSShadowSwatch);
            var swatches = (_stylePropertyTreeElement_valueElement1 = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement1 === void 0 ? void 0 : _stylePropertyTreeElement_valueElement1.querySelectorAll('devtools-color-mix-swatch');
            assert.exists(swatches);
        });
        it('renders shadow icon in the presence of a var()', function() {
            var _stylePropertyTreeElement_valueElement;
            mockVariableMap['--offset'] = '10px 10px';
            mockVariableMap['--shadow'] = '10px 10px blue';
            var stylePropertyTreeElement = getTreeElement('box-shadow', 'var(--offset) red, var(--shadow)');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 2);
            assert.strictEqual(swatches[0].textContent, 'var(--offset) red');
            assert.strictEqual(swatches[1].textContent, 'var(--shadow)');
        });
        it('opens a shadow editor with the correct values', function() {
            var _stylePropertyTreeElement_valueElement;
            mockVariableMap['--offset'] = '10px 10px';
            var stylePropertyTreeElement = getTreeElement('box-shadow', 'var(--offset) red, inset 8px 9px 10px 11px yellow');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 2);
            var showPopoverStub = sinon.stub(stylePropertyTreeElement.parentPane().swatchPopoverHelper(), 'show');
            var editorProperties = function(editor) {
                return Array.from(editor.contentElement.querySelectorAll('.shadow-editor-field')).map(function(field) {
                    var _field_querySelector;
                    var _field_querySelector_value;
                    return (_field_querySelector_value = (_field_querySelector = field.querySelector('input')) === null || _field_querySelector === void 0 ? void 0 : _field_querySelector.value) !== null && _field_querySelector_value !== void 0 ? _field_querySelector_value : Array.from(field.querySelectorAll('button')).map(function(button) {
                        return button.classList.contains('enabled') ? button.textContent : undefined;
                    }).filter(function(b) {
                        return Boolean(b);
                    });
                }).flat();
            };
            {
                swatches[0].iconElement().click();
                assert.isTrue(showPopoverStub.calledOnce);
                assert.instanceOf(showPopoverStub.args[0][0], _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSShadowEditor);
                var editor = showPopoverStub.args[0][0];
                var text = editorProperties(editor);
                assert.deepStrictEqual(text, [
                    'Outset',
                    '10px',
                    '10px',
                    '0',
                    '0'
                ]);
            }
            {
                swatches[1].iconElement().click();
                assert.isTrue(showPopoverStub.calledTwice);
                assert.instanceOf(showPopoverStub.args[1][0], _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSShadowEditor);
                var editor1 = showPopoverStub.args[1][0];
                var text1 = editorProperties(editor1);
                assert.deepStrictEqual(text1, [
                    'Inset',
                    '8px',
                    '9px',
                    '10px',
                    '11px'
                ]);
            }
        });
        it('updates the style for shadow editor changes', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('box-shadow', '10px 11px red');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 1);
            var showPopoverStub = sinon.stub(stylePropertyTreeElement.parentPane().swatchPopoverHelper(), 'show');
            swatches[0].iconElement().click();
            assert.isTrue(showPopoverStub.calledOnce);
            var applyStyleTextStub = sinon.stub(stylePropertyTreeElement, 'applyStyleText');
            var button = showPopoverStub.args[0][0].contentElement.querySelector('.shadow-editor-button-right');
            button === null || button === void 0 ? void 0 : button.click();
            assert.isTrue(applyStyleTextStub.calledOnceWithExactly('box-shadow: inset 10px 11px red', false));
        });
        it('updates the style for shadow editor changes and respects ordering', function() {
            var _stylePropertyTreeElement_valueElement;
            mockVariableMap['--y-color'] = '11px red';
            var stylePropertyTreeElement = getTreeElement('box-shadow', '10px var(--y-color)');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 1);
            var showPopoverStub = sinon.stub(stylePropertyTreeElement.parentPane().swatchPopoverHelper(), 'show');
            swatches[0].iconElement().click();
            assert.isTrue(showPopoverStub.calledOnce);
            var applyStyleTextStub = sinon.stub(stylePropertyTreeElement, 'applyStyleText');
            var inputs = Array.from(showPopoverStub.args[0][0].contentElement.querySelectorAll('.shadow-editor-field')).map(function(field) {
                return field.querySelector('input');
            });
            assert.exists(inputs[3]);
            inputs[3].value = '13px';
            inputs[3].dispatchEvent(new InputEvent('input', {
                data: '13px'
            }));
            assert.isTrue(applyStyleTextStub.calledOnceWithExactly('box-shadow: 10px 11px 13px red', false));
        });
        it('correctly builds and updates the shadow model', function() {
            var _stylePropertyTreeElement_valueElement;
            mockVariableMap['--props'] = '12px 13px red';
            var stylePropertyTreeElement = getTreeElement('box-shadow', '10px 11px red, var(--props)');
            stylePropertyTreeElement.updateTitle();
            var swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.lengthOf(swatches, 2);
            assert.isTrue(swatches[0].model().isBoxShadow());
            assert.isFalse(swatches[0].model().inset());
            assert.strictEqual(swatches[0].model().offsetX().asCSSText(), '10px');
            assert.strictEqual(swatches[0].model().offsetY().asCSSText(), '11px');
            assert.strictEqual(swatches[0].model().blurRadius().asCSSText(), '0');
            assert.strictEqual(swatches[0].model().spreadRadius().asCSSText(), '0');
            swatches[0].model().setSpreadRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength(8, 'px'));
            swatches[0].model().setBlurRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength(5, 'px'));
            assert.strictEqual(swatches[0].model().blurRadius().asCSSText(), '5px');
            assert.strictEqual(swatches[0].model().spreadRadius().asCSSText(), '8px');
            assert.isTrue(swatches[1].model().isBoxShadow());
            assert.isFalse(swatches[1].model().inset());
            assert.strictEqual(swatches[1].model().offsetX().asCSSText(), '12px');
            assert.strictEqual(swatches[1].model().offsetY().asCSSText(), '13px');
            assert.strictEqual(swatches[1].model().blurRadius().asCSSText(), '0');
            assert.strictEqual(swatches[1].model().spreadRadius().asCSSText(), '0');
            swatches[1].model().setBlurRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength(5, 'px'));
            swatches[1].model().setSpreadRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength(8, 'px'));
            assert.strictEqual(swatches[1].model().blurRadius().asCSSText(), '5px');
            assert.strictEqual(swatches[1].model().spreadRadius().asCSSText(), '8px');
        });
        var StubSyntaxnode = /*#__PURE__*/ function() {
            "use strict";
            function StubSyntaxnode() {
                _class_call_check(this, StubSyntaxnode);
                _define_property(this, "parent", null);
                _define_property(this, "firstChild", null);
                _define_property(this, "lastChild", null);
                _define_property(this, "nextSibling", null);
                _define_property(this, "prevSibling", null);
                _define_property(this, "from", 0);
                _define_property(this, "to", 0);
                _define_property(this, "type", new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_9__.NodeType());
                _define_property(this, "name", '');
                _define_property(this, "tree", null);
                _define_property(this, "node", this);
            }
            _create_class(StubSyntaxnode, [
                {
                    key: "childAfter",
                    value: function childAfter() {
                        return null;
                    }
                },
                {
                    key: "childBefore",
                    value: function childBefore() {
                        return null;
                    }
                },
                {
                    key: "enter",
                    value: function enter() {
                        return null;
                    }
                },
                {
                    key: "cursor",
                    value: function cursor() {
                        throw new Error('Method not implemented.');
                    }
                },
                {
                    key: "resolve",
                    value: function resolve() {
                        return this;
                    }
                },
                {
                    key: "resolveInner",
                    value: function resolveInner() {
                        return this;
                    }
                },
                {
                    key: "enterUnfinishedNodesBefore",
                    value: function enterUnfinishedNodesBefore() {
                        return this;
                    }
                },
                {
                    key: "toTree",
                    value: function toTree() {
                        throw new Error('Method not implemented.');
                    }
                },
                {
                    key: "getChild",
                    value: function getChild() {
                        throw new Error('Method not implemented.');
                    }
                },
                {
                    key: "getChildren",
                    value: function getChildren() {
                        throw new Error('Method not implemented.');
                    }
                },
                {
                    key: "matchContext",
                    value: function matchContext() {
                        return false;
                    }
                }
            ]);
            return StubSyntaxnode;
        }();
        it('shadow model renders text properties, authored properties, and computed text properties correctly', function() {
            var renderingContext = sinon.createStubInstance(_elements_js__WEBPACK_IMPORTED_MODULE_12__.PropertyRenderer.RenderingContext);
            var expansionContext = sinon.createStubInstance(_elements_js__WEBPACK_IMPORTED_MODULE_12__.PropertyRenderer.RenderingContext);
            var y = new StubSyntaxnode();
            var spread = new StubSyntaxnode();
            var blur = new StubSyntaxnode();
            var variable = new StubSyntaxnode();
            var properties = [
                {
                    value: '10px',
                    source: null,
                    expansionContext: null,
                    propertyType: "x" /* Elements.StylePropertyTreeElement.ShadowPropertyType.X */ 
                },
                {
                    value: y,
                    source: null,
                    expansionContext: null,
                    propertyType: "y" /* Elements.StylePropertyTreeElement.ShadowPropertyType.Y */ 
                },
                {
                    value: blur,
                    source: variable,
                    expansionContext: expansionContext,
                    propertyType: "blur" /* Elements.StylePropertyTreeElement.ShadowPropertyType.Blur */ 
                },
                {
                    value: spread,
                    source: variable,
                    expansionContext: expansionContext,
                    propertyType: "spread" /* Elements.StylePropertyTreeElement.ShadowPropertyType.Spread */ 
                }
            ];
            sinon.stub(_elements_js__WEBPACK_IMPORTED_MODULE_12__.PropertyRenderer.Renderer, 'render').callsFake(function(nodeOrNodes, context) {
                if (!Array.isArray(nodeOrNodes)) {
                    nodeOrNodes = [
                        nodeOrNodes
                    ];
                }
                var nodes = nodeOrNodes.map(function(node) {
                    switch(node){
                        case y:
                            return context === renderingContext && document.createTextNode('y');
                        case blur:
                            return context === expansionContext && document.createTextNode('blur');
                        case spread:
                            return context === expansionContext && document.createTextNode('spread');
                        case variable:
                            return context === renderingContext && document.createTextNode('var()');
                        default:
                            return undefined;
                    }
                }).filter(function(b) {
                    return Boolean(b);
                });
                return {
                    nodes: nodes,
                    nodeGroups: [
                        nodes
                    ],
                    cssControls: new Map()
                };
            });
            var model = new _elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.ShadowModel("boxShadow" /* Elements.PropertyMatchers.ShadowType.BoxShadow */ , properties, renderingContext);
            var container = document.createElement('div');
            model.renderContents(container);
            assert.strictEqual(container.textContent, '10px y var()');
            model.setBlurRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_10__.CSSShadowEditor.CSSLength(12, 'px'));
            model.renderContents(container);
            assert.strictEqual(container.textContent, '10px y 12px spread');
            assert.deepStrictEqual(properties.map(function(p) {
                return p.source;
            }), [
                null,
                null,
                null,
                null
            ]);
        });
    });
    describe('AnchorFunctionRenderer', function() {
        var anchorDecoratedForTestStub;
        var getAnchorBySpecifierStub;
        var revealStub;
        var hideDOMNodeHighlightStub;
        var highlightMock;
        var fakeParentNode;
        var fakeDOMNode;
        beforeEach(function() {
            fakeParentNode = {
                localName: function localName() {
                    return 'span';
                },
                isSVGNode: function isSVGNode() {
                    return false;
                },
                getAnchorBySpecifier: function getAnchorBySpecifier() {
                    return Promise.resolve(fakeDOMNode);
                }
            };
            fakeDOMNode = {
                localName: function localName() {
                    return 'span';
                },
                isSVGNode: function isSVGNode() {
                    return false;
                },
                highlight: function highlight() {
                    highlightMock();
                }
            };
            highlightMock = sinon.mock();
            anchorDecoratedForTestStub = sinon.stub(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.AnchorFunctionRenderer.prototype, 'anchorDecoratedForTest');
            getAnchorBySpecifierStub = sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.prototype, 'getAnchorBySpecifier').resolves(fakeDOMNode);
            revealStub = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal');
            hideDOMNodeHighlightStub = sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, 'hideDOMNodeHighlight');
        });
        afterEach(function() {
            anchorDecoratedForTestStub.restore();
            getAnchorBySpecifierStub.restore();
            revealStub.restore();
            hideDOMNodeHighlightStub.restore();
        });
        it('renders anchor() function correctly', /*#__PURE__*/ _async_to_generator(function() {
            var stylePropertyTreeElement;
            return _ts_generator(this, function(_state) {
                stylePropertyTreeElement = getTreeElement('left', 'anchor(top)');
                stylePropertyTreeElement.updateTitle();
                assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'anchor(top)');
                return [
                    2
                ];
            });
        }));
        it('renders `AnchorFunctionLinkSwatch` after decorating the element', /*#__PURE__*/ _async_to_generator(function() {
            var waitForDecorationPromise, stylePropertyTreeElement, anchorFunctionLinkSwatch;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(anchorDecoratedForTestStub);
                        stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
                        sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            waitForDecorationPromise
                        ];
                    case 1:
                        _state.sent();
                        anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
                        assert.strictEqual(anchorFunctionLinkSwatch.dataForTest().identifier, '--identifier');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should highlight node when `onMouseEnter` triggered from `AnchorFunctionLinkSwatch`', /*#__PURE__*/ _async_to_generator(function() {
            var waitForDecorationPromise, stylePropertyTreeElement, anchorFunctionLinkSwatch;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(anchorDecoratedForTestStub);
                        stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
                        sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            waitForDecorationPromise
                        ];
                    case 1:
                        _state.sent();
                        anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
                        anchorFunctionLinkSwatch.dataForTest().onMouseEnter();
                        assert.isTrue(highlightMock.calledOnce);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should clear DOM highlight when `onMouseLeave` triggered from `AnchorFunctionLinkSwatch`', /*#__PURE__*/ _async_to_generator(function() {
            var waitForDecorationPromise, stylePropertyTreeElement, anchorFunctionLinkSwatch;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(anchorDecoratedForTestStub);
                        stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
                        sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            waitForDecorationPromise
                        ];
                    case 1:
                        _state.sent();
                        anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
                        anchorFunctionLinkSwatch.dataForTest().onMouseLeave();
                        assert.isTrue(hideDOMNodeHighlightStub.calledOnce);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should reveal anchor node when `onLinkActivate` triggered from `AnchorFunctionLinkSwatch`', /*#__PURE__*/ _async_to_generator(function() {
            var waitForDecorationPromise, stylePropertyTreeElement, anchorFunctionLinkSwatch;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(anchorDecoratedForTestStub);
                        stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
                        sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            waitForDecorationPromise
                        ];
                    case 1:
                        _state.sent();
                        anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
                        anchorFunctionLinkSwatch.dataForTest().onLinkActivate();
                        assert.isTrue(revealStub.calledOnce);
                        assert.isTrue(revealStub.calledWith(fakeDOMNode));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('AnchorFunctionRenderer', function() {
        var anchorDecoratedForTestStub;
        var getAnchorBySpecifierStub;
        var highlightMock;
        var fakeDOMNode;
        beforeEach(function() {
            fakeDOMNode = {
                localName: function localName() {
                    return 'span';
                },
                isSVGNode: function isSVGNode() {
                    return false;
                },
                highlight: function highlight() {
                    highlightMock();
                }
            };
            highlightMock = sinon.mock();
            anchorDecoratedForTestStub = sinon.stub(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.PositionAnchorRenderer.prototype, 'anchorDecoratedForTest');
            getAnchorBySpecifierStub = sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.prototype, 'getAnchorBySpecifier').resolves(fakeDOMNode);
        });
        afterEach(function() {
            anchorDecoratedForTestStub.restore();
            getAnchorBySpecifierStub.restore();
        });
        it('renders `position-anchor` property correctly before anchor is decorated', /*#__PURE__*/ _async_to_generator(function() {
            var stylePropertyTreeElement;
            return _ts_generator(this, function(_state) {
                stylePropertyTreeElement = getTreeElement('position-anchor', '--anchor');
                stylePropertyTreeElement.updateTitle();
                assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, '--anchor');
                return [
                    2
                ];
            });
        }));
        it('renders `position-anchor` property correctly after anchor is decorated', /*#__PURE__*/ _async_to_generator(function() {
            var waitForDecorationPromise, stylePropertyTreeElement, anchorFunctionLinkSwatch;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_7__.expectCall)(anchorDecoratedForTestStub);
                        stylePropertyTreeElement = getTreeElement('position-anchor', '--anchor');
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            waitForDecorationPromise
                        ];
                    case 1:
                        _state.sent();
                        anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
                        assert.exists(anchorFunctionLinkSwatch);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('LightDarkColorRenderer', function() {
        it('renders light-dark correctly', /*#__PURE__*/ _async_to_generator(function() {
            var colorSchemeSpy;
            function check(colorScheme, lightText, darkText) {
                return _check.apply(this, arguments);
            }
            function _check() {
                _check = _async_to_generator(function(colorScheme, lightText, darkText) {
                    var _stylePropertyTreeElement_valueElement, _swatch_getColor, _inactive_parentElement, _active_parentElement, variableName, lightDark, stylePropertyTreeElement, swatch, activeColor, _mockVariableMap_variableName, _swatch_querySelectorAll, light, dark, active, inactive;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                variableName = function(text) {
                                    return text.substring('var('.length, text.length - 1);
                                };
                                lightDark = "light-dark(".concat(lightText, ", ").concat(darkText, ")");
                                stylePropertyTreeElement = getTreeElement('color', lightDark);
                                stylePropertyTreeElement.setComputedStyles(new Map([
                                    [
                                        'color-scheme',
                                        colorScheme
                                    ]
                                ]));
                                stylePropertyTreeElement.updateTitle();
                                return [
                                    4,
                                    Promise.all(colorSchemeSpy.returnValues)
                                ];
                            case 1:
                                _state.sent();
                                swatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-swatch');
                                assert.exists(swatch);
                                assert.strictEqual(swatch === null || swatch === void 0 ? void 0 : swatch.textContent, lightDark);
                                activeColor = colorScheme === "light" /* SDK.CSSModel.ColorScheme.Light */  ? lightText : darkText;
                                assert.strictEqual((_swatch_getColor = swatch.getColor()) === null || _swatch_getColor === void 0 ? void 0 : _swatch_getColor.getAuthoredText(), (_mockVariableMap_variableName = mockVariableMap[variableName(activeColor)]) !== null && _mockVariableMap_variableName !== void 0 ? _mockVariableMap_variableName : activeColor);
                                _swatch_querySelectorAll = _sliced_to_array(swatch.querySelectorAll('devtools-color-swatch'), 2), light = _swatch_querySelectorAll[0], dark = _swatch_querySelectorAll[1];
                                assert.exists(light);
                                assert.exists(dark);
                                active = colorScheme === "light" /* SDK.CSSModel.ColorScheme.Light */  ? light : dark;
                                inactive = colorScheme === "light" /* SDK.CSSModel.ColorScheme.Light */  ? dark : light;
                                assert.strictEqual((_inactive_parentElement = inactive.parentElement) === null || _inactive_parentElement === void 0 ? void 0 : _inactive_parentElement.style.textDecoration, 'line-through');
                                assert.strictEqual((_active_parentElement = active.parentElement) === null || _active_parentElement === void 0 ? void 0 : _active_parentElement.style.textDecoration, '');
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _check.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
                        return [
                            4,
                            check("light" /* SDK.CSSModel.ColorScheme.Light */ , 'red', 'blue')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            check("dark" /* SDK.CSSModel.ColorScheme.Dark */ , 'red', 'blue')
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            check("light" /* SDK.CSSModel.ColorScheme.Light */ , 'red', 'var(--blue)')
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            check("dark" /* SDK.CSSModel.ColorScheme.Dark */ , 'red', 'var(--blue)')
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            check("light" /* SDK.CSSModel.ColorScheme.Light */ , 'var(--blue)', 'red')
                        ];
                    case 5:
                        _state.sent();
                        return [
                            4,
                            check("dark" /* SDK.CSSModel.ColorScheme.Dark */ , 'var(--blue)', 'red')
                        ];
                    case 6:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders light-dark correctly if the color scheme cannot be resolved', /*#__PURE__*/ _async_to_generator(function() {
            var _stylePropertyTreeElement_valueElement, lightDark, cssModel, stylePropertyTreeElement, colorSchemeSpy, swatches;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        lightDark = 'light-dark(red, blue)';
                        cssModel = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                        sinon.stub(stylesSidebarPane, 'cssModel').returns(cssModel);
                        cssModel.colorScheme.resolves(undefined);
                        stylePropertyTreeElement = getTreeElement('color', lightDark);
                        stylePropertyTreeElement.setComputedStyles(new Map([
                            [
                                'color-scheme',
                                'light dark'
                            ]
                        ]));
                        colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            Promise.all(colorSchemeSpy.returnValues)
                        ];
                    case 1:
                        _state.sent();
                        swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('devtools-color-swatch');
                        assert.exists(swatches);
                        assert.lengthOf(swatches, 3);
                        assert.isNull(swatches[0].getColor());
                        assert.strictEqual(swatches[0].textContent, 'light-dark(red, blue)');
                        assert.strictEqual(swatches[1].textContent, 'red');
                        assert.strictEqual(swatches[2].textContent, 'blue');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders light-dark without color-scheme correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _stylePropertyTreeElement_valueElement, lightDark, stylePropertyTreeElement, colorSchemeSpy, swatches;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        lightDark = 'light-dark(red, blue)';
                        stylePropertyTreeElement = getTreeElement('color', lightDark);
                        // leave color-scheme unset
                        colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            Promise.all(colorSchemeSpy.returnValues)
                        ];
                    case 1:
                        _state.sent();
                        swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('devtools-color-swatch');
                        assert.exists(swatches);
                        assert.lengthOf(swatches, 3);
                        assert.strictEqual(swatches[0].getText(), 'red');
                        assert.strictEqual(swatches[0].textContent, 'light-dark(red, blue)');
                        assert.strictEqual(swatches[1].textContent, 'red');
                        assert.strictEqual(swatches[2].textContent, 'blue');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders light-dark with undefined vars correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _stylePropertyTreeElement_valueElement, _swatches__parentElement, lightDark, stylePropertyTreeElement, colorSchemeSpy, swatches;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        lightDark = 'light-dark(red, var(--undefined))';
                        stylePropertyTreeElement = getTreeElement('color', lightDark);
                        stylePropertyTreeElement.setComputedStyles(new Map([
                            [
                                'color-scheme',
                                'light dark'
                            ]
                        ]));
                        colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            Promise.all(colorSchemeSpy.returnValues)
                        ];
                    case 1:
                        _state.sent();
                        swatches = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelectorAll('devtools-color-swatch');
                        assert.exists(swatches);
                        assert.lengthOf(swatches, 1);
                        assert.strictEqual(swatches[0].textContent, 'red');
                        assert.strictEqual((_swatches__parentElement = swatches[0].parentElement) === null || _swatches__parentElement === void 0 ? void 0 : _swatches__parentElement.style.textDecoration, '');
                        return [
                            2
                        ];
                }
            });
        }));
        it('connects inner and outer swatches', /*#__PURE__*/ _async_to_generator(function() {
            var colorSchemeSpy, _i, _iter, colorScheme, _stylePropertyTreeElement_valueElement, lightDark, stylePropertyTreeElement, outerSwatch, innerSwatches, _innerSwatches, lightSwatch, darkSwatch, newLightColor, newDarkColor;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_12__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
                        _i = 0, _iter = [
                            "light" /* SDK.CSSModel.ColorScheme.Light */ ,
                            "dark" /* SDK.CSSModel.ColorScheme.Dark */ 
                        ];
                        _state.label = 1;
                    case 1:
                        if (!(_i < _iter.length)) return [
                            3,
                            4
                        ];
                        colorScheme = _iter[_i];
                        lightDark = 'light-dark(red, blue)';
                        stylePropertyTreeElement = getTreeElement('color', lightDark);
                        stylePropertyTreeElement.setComputedStyles(new Map([
                            [
                                'color-scheme',
                                colorScheme
                            ]
                        ]));
                        stylePropertyTreeElement.updateTitle();
                        return [
                            4,
                            Promise.all(colorSchemeSpy.returnValues)
                        ];
                    case 2:
                        _state.sent();
                        outerSwatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-color-swatch');
                        assert.exists(outerSwatch);
                        innerSwatches = outerSwatch.querySelectorAll('devtools-color-swatch');
                        assert.lengthOf(innerSwatches, 2);
                        _innerSwatches = _sliced_to_array(innerSwatches, 2), lightSwatch = _innerSwatches[0], darkSwatch = _innerSwatches[1];
                        newLightColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('white');
                        newDarkColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('black');
                        lightSwatch.setColor(newLightColor);
                        darkSwatch.setColor(newDarkColor);
                        if (colorScheme === "dark" /* SDK.CSSModel.ColorScheme.Dark */ ) {
                            assert.strictEqual(outerSwatch.getColor(), newDarkColor);
                        } else {
                            assert.strictEqual(outerSwatch.getColor(), newLightColor);
                        }
                        _state.label = 3;
                    case 3:
                        _i++;
                        return [
                            3,
                            1
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('LinearGradientRenderer', function() {
        it('correctly connects to an angle match', function() {
            var _stylePropertyTreeElement_valueElement, _swatch_shadowRoot, _popover_shadowRoot;
            var stylePropertyTreeElement = getTreeElement('background', 'linear-gradient(45deg, red, var(--blue))');
            stylePropertyTreeElement.updateTitle();
            var swatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-angle');
            assert.exists(swatch);
            var _swatch_textContent;
            swatch.data = {
                angleText: (_swatch_textContent = swatch.textContent) !== null && _swatch_textContent !== void 0 ? _swatch_textContent : '',
                containingPane: document.createElement('div')
            };
            sinon.stub(swatch, 'dispatchEvent');
            swatch.popOver();
            var popover = (_swatch_shadowRoot = swatch.shadowRoot) === null || _swatch_shadowRoot === void 0 ? void 0 : _swatch_shadowRoot.querySelector('devtools-css-angle-editor');
            assert.exists(popover);
            var clock = (_popover_shadowRoot = popover.shadowRoot) === null || _popover_shadowRoot === void 0 ? void 0 : _popover_shadowRoot.querySelector('.clock');
            assert.exists(clock);
            assert.strictEqual(clock.style.background, 'linear-gradient(45deg, red, blue)');
        });
    });
    describe('LengthRenderer', function() {
        it('renders the length too', function() {
            var _stylePropertyTreeElement_valueElement;
            var stylePropertyTreeElement = getTreeElement('width', '100px');
            stylePropertyTreeElement.updateTitle();
            var swatch = (_stylePropertyTreeElement_valueElement = stylePropertyTreeElement.valueElement) === null || _stylePropertyTreeElement_valueElement === void 0 ? void 0 : _stylePropertyTreeElement_valueElement.querySelector('devtools-css-length');
            assert.exists(swatch);
        });
    });
}); //# sourceMappingURL=StylePropertyTreeElement.test.js.map


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
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);