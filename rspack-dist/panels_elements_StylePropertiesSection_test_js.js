"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_StylePropertiesSection_test_js"], {
"./panels/elements/StylePropertiesSection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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






describe('StylePropertiesSection', function() {
    it('contains specificity information', /*#__PURE__*/ _async_to_generator(function() {
        var specificity, selectorElement;
        return _ts_generator(this, function(_state) {
            specificity = {
                a: 0,
                b: 1,
                c: 0
            };
            selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.renderSelectors([
                {
                    text: '.child',
                    specificity: specificity
                }
            ], [
                true
            ], new WeakMap());
            assert.deepEqual(selectorElement.textContent, '.child');
            assert.deepEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.getSpecificityStoredForNodeElement(selectorElement.firstChild), specificity);
            return [
                2
            ];
        });
    }));
    it('renders selectors correctly', /*#__PURE__*/ _async_to_generator(function() {
        var selectorElement;
        return _ts_generator(this, function(_state) {
            selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.renderSelectors([
                {
                    text: '.child',
                    specificity: {
                        a: 0,
                        b: 2,
                        c: 0
                    }
                },
                {
                    text: '.item',
                    specificity: {
                        a: 0,
                        b: 2,
                        c: 0
                    }
                }
            ], [
                true
            ], new WeakMap());
            assert.deepEqual(selectorElement.textContent, '.child, .item');
            selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.renderSelectors([
                {
                    text: '.child',
                    specificity: {
                        a: 0,
                        b: 2,
                        c: 0
                    }
                },
                {
                    text: '& .item',
                    specificity: {
                        a: 0,
                        b: 2,
                        c: 0
                    }
                }
            ], [
                true
            ], new WeakMap());
            assert.deepEqual(selectorElement.textContent, '.child, & .item');
            selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.renderSelectors([
                {
                    text: '&.child',
                    specificity: {
                        a: 0,
                        b: 2,
                        c: 0
                    }
                },
                {
                    text: '& .item',
                    specificity: {
                        a: 0,
                        b: 2,
                        c: 0
                    }
                }
            ], [
                true
            ], new WeakMap());
            assert.deepEqual(selectorElement.textContent, '&.child, & .item');
            return [
                2
            ];
        });
    }));
});
function setUpStyles(cssModel, origin, styleSheetId, header, payload) {
    cssModel.styleSheetAdded(_object_spread({
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
    }, header));
    return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSMatchedStyles.create(_object_spread({
        cssModel: cssModel,
        node: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode),
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
    }, payload));
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('StylesPropertySection', function() {
    it('displays the proper sourceURL origin for constructed stylesheets', /*#__PURE__*/ _async_to_generator(function() {
        var cssModel, origin, styleSheetId, range, header, matchedPayload, matchedStyles, rule, linkifier, originNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                    assert.exists(cssModel);
                    origin = "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ;
                    styleSheetId = '0';
                    range = {
                        startLine: 0,
                        endLine: 1,
                        startColumn: 0,
                        endColumn: 0
                    };
                    header = _object_spread({
                        sourceURL: 'constructed.css',
                        isMutable: true,
                        isConstructed: true,
                        hasSourceURL: true,
                        length: 1
                    }, range);
                    matchedPayload = [
                        {
                            rule: {
                                selectorList: {
                                    selectors: [
                                        {
                                            text: 'div'
                                        }
                                    ],
                                    text: 'div'
                                },
                                origin: origin,
                                styleSheetId: styleSheetId,
                                style: {
                                    cssProperties: [
                                        {
                                            name: 'color',
                                            value: 'red'
                                        }
                                    ],
                                    shorthandEntries: [],
                                    range: range
                                }
                            },
                            matchingSelectors: [
                                0
                            ]
                        }
                    ];
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, header, {
                            matchedPayload: matchedPayload
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    rule = matchedStyles.nodeStyles()[0].parentRule;
                    linkifier = sinon.createStubInstance(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier);
                    originNode = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.createRuleOriginNode(matchedStyles, linkifier, rule);
                    assert.strictEqual(originNode.textContent, '<style>');
                    assert.isTrue(linkifier.linkifyCSSLocation.calledOnce);
                    assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].styleSheetId, styleSheetId);
                    assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].url, 'constructed.css');
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays the proper sourceMappingURL origin for constructed stylesheets', /*#__PURE__*/ _async_to_generator(function() {
        var cssModel, origin, styleSheetId, range, header, matchedPayload, matchedStyles, styleSheetHeader, sourceMap, rule, linkifier, originNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                    assert.exists(cssModel);
                    origin = "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ;
                    styleSheetId = '0';
                    range = {
                        startLine: 0,
                        endLine: 1,
                        startColumn: 0,
                        endColumn: 0
                    };
                    header = _object_spread({
                        sourceMapURL: 'http://example.com/constructed.css.map',
                        isMutable: true,
                        isConstructed: true,
                        length: 1
                    }, range);
                    matchedPayload = [
                        {
                            rule: {
                                selectorList: {
                                    selectors: [
                                        {
                                            text: 'div'
                                        }
                                    ],
                                    text: 'div'
                                },
                                origin: origin,
                                styleSheetId: styleSheetId,
                                style: {
                                    cssProperties: [
                                        {
                                            name: 'color',
                                            value: 'red'
                                        }
                                    ],
                                    shorthandEntries: [],
                                    range: range
                                }
                            },
                            matchingSelectors: [
                                0
                            ]
                        }
                    ];
                    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').callsFake(function(url) {
                        return Promise.resolve({
                            content: url === header.sourceMapURL ? '{"sources": []}' : ''
                        });
                    });
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, header, {
                            matchedPayload: matchedPayload
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    styleSheetHeader = cssModel.styleSheetHeaderForId(styleSheetId);
                    assert.exists(styleSheetHeader);
                    return [
                        4,
                        cssModel.sourceMapManager().sourceMapForClientPromise(styleSheetHeader)
                    ];
                case 2:
                    sourceMap = _state.sent();
                    assert.exists(sourceMap);
                    rule = matchedStyles.nodeStyles()[0].parentRule;
                    linkifier = sinon.createStubInstance(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier);
                    originNode = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection.createRuleOriginNode(matchedStyles, linkifier, rule);
                    assert.strictEqual(originNode.textContent, 'constructed stylesheet');
                    assert.isTrue(linkifier.linkifyCSSLocation.calledOnce);
                    // Since we already asserted that a sourcemap exists for our header, it's sufficient to check that
                    // linkifyCSSLocation has been called. Verifying that linkifyCSSLocation applies source mapping is out of scope
                    // for this unit under test.
                    assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].styleSheetId, styleSheetId);
                    assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].url, '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('properly renders ancestor rules', /*#__PURE__*/ _async_to_generator(function() {
        var cssModel, stylesSidebarPane, origin, styleSheetId, range, matchedPayload, matchedStyles, declaration, section, matchedPayload1, matchedStyles1, declaration1, section1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('  ');
                    cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                    assert.exists(cssModel);
                    stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                        forceNew: true
                    });
                    origin = "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ;
                    styleSheetId = '0';
                    range = {
                        startLine: 0,
                        startColumn: 0,
                        endLine: 0,
                        endColumn: 6
                    };
                    matchedPayload = [
                        {
                            rule: {
                                nestingSelectors: [
                                    'body',
                                    '& ul',
                                    'div'
                                ],
                                ruleTypes: [
                                    "StyleRule" /* Protocol.CSS.CSSRuleType.StyleRule */ ,
                                    "StyleRule" /* Protocol.CSS.CSSRuleType.StyleRule */ ,
                                    "StyleRule" /* Protocol.CSS.CSSRuleType.StyleRule */ 
                                ],
                                selectorList: {
                                    selectors: [
                                        {
                                            text: 'div'
                                        }
                                    ],
                                    text: 'div'
                                },
                                origin: origin,
                                style: {
                                    cssProperties: [
                                        {
                                            name: 'color',
                                            value: 'red'
                                        }
                                    ],
                                    shorthandEntries: []
                                }
                            },
                            matchingSelectors: [
                                0
                            ]
                        }
                    ];
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, _object_spread({}, range), {
                            matchedPayload: matchedPayload
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    declaration = matchedStyles.nodeStyles()[0];
                    assert.exists(declaration);
                    section = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection(stylesSidebarPane, matchedStyles, declaration, 0, null, null);
                    assert.strictEqual(section.element.textContent, 'div {  & ul {    body {      div {      }    }  }}');
                    matchedPayload1 = [
                        {
                            rule: {
                                nestingSelectors: [
                                    'body',
                                    'div'
                                ],
                                ruleTypes: [
                                    "StyleRule" /* Protocol.CSS.CSSRuleType.StyleRule */ ,
                                    "StyleRule" /* Protocol.CSS.CSSRuleType.StyleRule */ 
                                ],
                                selectorList: {
                                    selectors: [],
                                    text: ''
                                },
                                origin: origin,
                                style: {
                                    cssProperties: [
                                        {
                                            name: 'color',
                                            value: 'red'
                                        }
                                    ],
                                    shorthandEntries: []
                                }
                            },
                            matchingSelectors: [
                                0
                            ]
                        }
                    ];
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, _object_spread({}, range), {
                            matchedPayload: matchedPayload1
                        })
                    ];
                case 2:
                    matchedStyles1 = _state.sent();
                    declaration1 = matchedStyles1.nodeStyles()[0];
                    assert.exists(declaration1);
                    section1 = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection(stylesSidebarPane, matchedStyles1, declaration1, 0, null, null);
                    assert.strictEqual(section1.element.textContent, 'div {  body {    }}');
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates property rule property names', /*#__PURE__*/ _async_to_generator(function() {
        var _matchedStyles_getRegisteredProperty, cssModel, stylesSidebarPane, origin, styleSheetId, range, propertyName, propertyRuleStyle, propertyRules, matchedPayload, matchedStyles, declaration, rule, section, forceUpdateSpy, setNameSpy;
        function assertIsPropertyRule(rule) {
            assert.instanceOf(rule, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSRule.CSSPropertyRule);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                    assert.exists(cssModel);
                    stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                        forceNew: true
                    });
                    origin = "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ;
                    styleSheetId = '0';
                    range = {
                        startLine: 0,
                        startColumn: 0,
                        endLine: 0,
                        endColumn: 6
                    };
                    propertyName = {
                        text: '--prop',
                        range: range
                    };
                    propertyRuleStyle = {
                        cssProperties: [
                            {
                                name: 'inherits',
                                value: 'false'
                            },
                            {
                                name: 'initial-value',
                                value: 'red'
                            },
                            {
                                name: 'syntax',
                                value: '"<color>"'
                            }
                        ],
                        shorthandEntries: []
                    };
                    propertyRules = [
                        {
                            propertyName: propertyName,
                            origin: origin,
                            style: propertyRuleStyle,
                            styleSheetId: styleSheetId
                        }
                    ];
                    matchedPayload = [
                        {
                            rule: {
                                selectorList: {
                                    selectors: [
                                        {
                                            text: 'div'
                                        }
                                    ],
                                    text: 'div'
                                },
                                origin: origin,
                                style: {
                                    cssProperties: [
                                        {
                                            name: propertyName.text,
                                            value: 'red'
                                        }
                                    ],
                                    shorthandEntries: []
                                }
                            },
                            matchingSelectors: [
                                0
                            ]
                        }
                    ];
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, _object_spread({}, range), {
                            propertyRules: propertyRules,
                            matchedPayload: matchedPayload
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    declaration = (_matchedStyles_getRegisteredProperty = matchedStyles.getRegisteredProperty(propertyName.text)) === null || _matchedStyles_getRegisteredProperty === void 0 ? void 0 : _matchedStyles_getRegisteredProperty.style();
                    assert.exists(declaration);
                    rule = declaration.parentRule;
                    assertIsPropertyRule(rule);
                    section = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.RegisteredPropertiesSection(stylesSidebarPane, matchedStyles, declaration, 0, propertyName.text, /* expandedByDefault=*/ true);
                    forceUpdateSpy = sinon.spy(stylesSidebarPane, 'forceUpdate');
                    setNameSpy = sinon.stub(cssModel, 'setPropertyRulePropertyName');
                    setNameSpy.returns(Promise.resolve(true));
                    return [
                        4,
                        section.setHeaderText(rule, propertyName.text)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(forceUpdateSpy.calledAfter(setNameSpy));
                    assert.isTrue(setNameSpy.calledOnceWithExactly(styleSheetId, sinon.match(function(r) {
                        return r.startLine === range.startLine && r.startColumn === range.startColumn && r.endLine === range.endLine && r.endColumn === range.endColumn;
                    }), propertyName.text));
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders braces correctly with a non-style-rule section', /*#__PURE__*/ _async_to_generator(function() {
        var _matchedStyles_fontPaletteValuesRule, cssModel, stylesSidebarPane, origin, styleSheetId, range, fontPaletteValuesRule, matchedStyles, declaration, section;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('  ');
                    cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                    assert.exists(cssModel);
                    stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                        forceNew: true
                    });
                    origin = "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ;
                    styleSheetId = '0';
                    range = {
                        startLine: 0,
                        startColumn: 0,
                        endLine: 0,
                        endColumn: 6
                    };
                    fontPaletteValuesRule = {
                        styleSheetId: styleSheetId,
                        origin: origin,
                        style: {
                            range: range,
                            cssProperties: [],
                            shorthandEntries: []
                        },
                        fontPaletteName: {
                            range: range,
                            text: '--palette-name'
                        }
                    };
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, _object_spread({}, range), {
                            fontPaletteValuesRule: fontPaletteValuesRule
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    declaration = (_matchedStyles_fontPaletteValuesRule = matchedStyles.fontPaletteValuesRule()) === null || _matchedStyles_fontPaletteValuesRule === void 0 ? void 0 : _matchedStyles_fontPaletteValuesRule.style;
                    assert.exists(declaration);
                    section = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.FontPaletteValuesRuleSection(stylesSidebarPane, matchedStyles, declaration, 0);
                    assert.strictEqual(section.element.textContent, '{}');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders active and inactive position-try rule sections correctly', /*#__PURE__*/ _async_to_generator(function() {
        var cssModel, stylesSidebarPane, origin, styleSheetId, range, positionTryRules, matchedStyles, declaration1, declaration2, section1, section2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
                    assert.exists(cssModel);
                    stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                        forceNew: true
                    });
                    origin = "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ;
                    styleSheetId = '0';
                    range = {
                        startLine: 0,
                        startColumn: 0,
                        endLine: 0,
                        endColumn: 6
                    };
                    positionTryRules = [
                        {
                            styleSheetId: styleSheetId,
                            origin: origin,
                            name: {
                                text: '--try-1'
                            },
                            style: {
                                range: range,
                                cssProperties: [],
                                shorthandEntries: []
                            },
                            active: true
                        },
                        {
                            styleSheetId: styleSheetId,
                            origin: origin,
                            name: {
                                text: '--try-2'
                            },
                            style: {
                                range: range,
                                cssProperties: [],
                                shorthandEntries: []
                            },
                            active: false
                        }
                    ];
                    return [
                        4,
                        setUpStyles(cssModel, origin, styleSheetId, _object_spread({}, range), {
                            positionTryRules: positionTryRules
                        })
                    ];
                case 1:
                    matchedStyles = _state.sent();
                    declaration1 = matchedStyles.positionTryRules()[0].style;
                    declaration2 = matchedStyles.positionTryRules()[1].style;
                    assert.exists(declaration1);
                    assert.exists(declaration2);
                    section1 = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.PositionTryRuleSection(stylesSidebarPane, matchedStyles, declaration1, 0, positionTryRules[0].active);
                    section2 = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.PositionTryRuleSection(stylesSidebarPane, matchedStyles, declaration1, 1, positionTryRules[1].active);
                    assert.isFalse(section1.propertiesTreeOutline.element.classList.contains('no-affect'));
                    assert.isTrue(section2.propertiesTreeOutline.element.classList.contains('no-affect'));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=StylePropertiesSection.test.js.map


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