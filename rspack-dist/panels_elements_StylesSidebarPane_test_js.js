"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_StylesSidebarPane_test_js"], {
"./panels/elements/StylesSidebarPane.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        void 0
    ], [
        '"I\\F1 t\\EB rn\\E2 ti\\F4 n\\E0 liz\\E6 ti\\F8 n\\2603 \\1F308  can be \\t\\r\\ic\\k\\y"'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '"_DBFF_\\DBFF_\\DBFF_\\\\DBFF_\\\\DBFF_"'
    ], [
        '"_\\DBFF_\\\\DBFF_\\\\\\DBFF_\\\\\\\\DBFF_\\\\\\\\\\DBFF_"'
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        void 0
    ], [
        '"\\0_\\DBFF_\\DFFF_\\110000"'
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '"_D83CDF08_"'
    ], [
        '"_\\D83C\\DF08_"'
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}






describe('StylesSidebarPane', function() {
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('StylesSidebarPane', function() {
        it('unescapes CSS strings', function() {
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.unescapeCssString(String.raw(_templateObject())), '"I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\u{1F308} can be tricky"');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.unescapeCssString(String.raw(_templateObject1())), '"_\uFFFD_\\DBFF_\\\\DBFF_\\\\\\DBFF_\\\\\\\\DBFF_"');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.unescapeCssString(String.raw(_templateObject2())), '"\uFFFD_\uFFFD_\uFFFD_\uFFFD"', 'U+0000, lone surrogates, and values above U+10FFFF should become U+FFFD');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.unescapeCssString(String.raw(_templateObject3())), '"_\uFFFD\uFFFD_"', 'surrogates should not be combined');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.unescapeCssString('"_\\41\n_\\41\t_\\41\x20_"'), '"_A_A_A_"', 'certain trailing whitespace characters should be consumed as part of the escape sequence');
        });
        it('escapes URL as CSS comments', function() {
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/'), 'https://abc.com/');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/'), 'https://abc.com/*/');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/?q=*'), 'https://abc.com/*/?q=*');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/?q=*/'), 'https://abc.com/*/?q=*%2F');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/?q=*/#hash'), 'https://abc.com/*/?q=*%2F#hash');
        });
        describe('rebuildSectionsForMatchedStyleRulesForTest', function() {
            it('should add @position-try section', /*#__PURE__*/ _async_to_generator(function() {
                var _sectionBlocks__titleElement, stylesSidebarPane, matchedStyles, sectionBlocks;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                                forceNew: true
                            });
                            return [
                                4,
                                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMatchedStyles.CSSMatchedStyles.create({
                                    cssModel: stylesSidebarPane.cssModel(),
                                    node: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                                    inlinePayload: null,
                                    attributesPayload: null,
                                    matchedPayload: [],
                                    pseudoPayload: [],
                                    inheritedPayload: [],
                                    inheritedPseudoPayload: [],
                                    animationsPayload: [],
                                    parentLayoutNodeId: undefined,
                                    positionTryRules: [
                                        {
                                            name: {
                                                text: '--try-one'
                                            },
                                            origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
                                            style: {
                                                cssProperties: [
                                                    {
                                                        name: 'bottom',
                                                        value: 'anchor(--anchor-name bottom)'
                                                    }
                                                ],
                                                shorthandEntries: []
                                            },
                                            active: false
                                        }
                                    ],
                                    propertyRules: [],
                                    cssPropertyRegistrations: [],
                                    fontPaletteValuesRule: undefined
                                })
                            ];
                        case 1:
                            matchedStyles = _state.sent();
                            return [
                                4,
                                stylesSidebarPane.rebuildSectionsForMatchedStyleRulesForTest(matchedStyles, new Map(), new Map())
                            ];
                        case 2:
                            sectionBlocks = _state.sent();
                            assert.strictEqual(sectionBlocks.length, 2);
                            assert.strictEqual((_sectionBlocks__titleElement = sectionBlocks[1].titleElement()) === null || _sectionBlocks__titleElement === void 0 ? void 0 : _sectionBlocks__titleElement.textContent, '@position-try --try-one');
                            assert.strictEqual(sectionBlocks[1].sections.length, 1);
                            assert.instanceOf(sectionBlocks[1].sections[0], _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.PositionTryRuleSection);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        it('should add @font-palette-values section to the end', /*#__PURE__*/ _async_to_generator(function() {
            var _sectionBlocks__titleElement, stylesSidebarPane, matchedStyles, sectionBlocks;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({
                            forceNew: true
                        });
                        return [
                            4,
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMatchedStyles.CSSMatchedStyles.create({
                                cssModel: stylesSidebarPane.cssModel(),
                                node: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
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
                                fontPaletteValuesRule: {
                                    fontPaletteName: {
                                        text: '--palette'
                                    },
                                    origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
                                    style: {
                                        cssProperties: [
                                            {
                                                name: 'font-family',
                                                value: 'Bixa'
                                            },
                                            {
                                                'name': 'override-colors',
                                                value: '0 red'
                                            }
                                        ],
                                        shorthandEntries: []
                                    }
                                }
                            })
                        ];
                    case 1:
                        matchedStyles = _state.sent();
                        return [
                            4,
                            stylesSidebarPane.rebuildSectionsForMatchedStyleRulesForTest(matchedStyles, new Map(), new Map())
                        ];
                    case 2:
                        sectionBlocks = _state.sent();
                        assert.strictEqual(sectionBlocks.length, 2);
                        assert.strictEqual((_sectionBlocks__titleElement = sectionBlocks[1].titleElement()) === null || _sectionBlocks__titleElement === void 0 ? void 0 : _sectionBlocks__titleElement.textContent, '@font-palette-values --palette');
                        assert.strictEqual(sectionBlocks[1].sections.length, 1);
                        assert.instanceOf(sectionBlocks[1].sections[0], _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.FontPaletteValuesRuleSection);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('IdleCallbackManager', function() {
        // IdleCallbackManager delegates work using requestIdleCallback, which does not generally execute requested callbacks
        // in order. This test verifies that callbacks do happen in order even if timeouts are run out.
        it('schedules callbacks in order', /*#__PURE__*/ _async_to_generator(function() {
            var QuickIdleCallbackManager, timeout, elements, callbacks;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Override the default timeout with a very short one
                        QuickIdleCallbackManager = /*#__PURE__*/ function(_Elements_StylesSidebarPane_IdleCallbackManager) {
                            "use strict";
                            _inherits(QuickIdleCallbackManager, _Elements_StylesSidebarPane_IdleCallbackManager);
                            var _super = _create_super(QuickIdleCallbackManager);
                            function QuickIdleCallbackManager() {
                                _class_call_check(this, QuickIdleCallbackManager);
                                return _super.apply(this, arguments);
                            }
                            _create_class(QuickIdleCallbackManager, [
                                {
                                    key: "scheduleIdleCallback",
                                    value: function scheduleIdleCallback(_) {
                                        _get(_get_prototype_of(QuickIdleCallbackManager.prototype), "scheduleIdleCallback", this).call(this, 1);
                                    }
                                }
                            ]);
                            return QuickIdleCallbackManager;
                        }(_elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.IdleCallbackManager);
                        timeout = function(time) {
                            return new Promise(function(resolve) {
                                return setTimeout(resolve, time);
                            });
                        };
                        elements = [];
                        callbacks = new QuickIdleCallbackManager();
                        callbacks.schedule(function() {
                            return elements.push(0);
                        });
                        callbacks.schedule(function() {
                            return elements.push(1);
                        });
                        callbacks.schedule(function() {
                            return elements.push(2);
                        });
                        callbacks.schedule(function() {
                            return elements.push(3);
                        });
                        return [
                            4,
                            timeout(10)
                        ];
                    case 1:
                        _state.sent();
                        callbacks.schedule(function() {
                            return elements.push(4);
                        });
                        callbacks.schedule(function() {
                            return elements.push(5);
                        });
                        callbacks.schedule(function() {
                            return elements.push(6);
                        });
                        callbacks.schedule(function() {
                            return elements.push(7);
                        });
                        return [
                            4,
                            timeout(10)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            callbacks.awaitDone()
                        ];
                    case 3:
                        _state.sent();
                        assert.deepEqual(elements, [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('CSSPropertyPrompt', function() {
        var CSSPropertyPrompt = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.CSSPropertyPrompt;
        var CSS_VARIABLES_FOR_TEST = {
            '--rgb-color': 'rgb(0 0 0)',
            '--wide-gamut-color': 'lch(0 0 0)'
        };
        var mockTreeItem = {
            property: {
                name: 'color'
            },
            node: function node() {
                return {
                    isSVGNode: function isSVGNode() {
                        return false;
                    },
                    domModel: function domModel() {
                        return {
                            cssModel: function cssModel() {
                                return {
                                    getComputedStyle: function getComputedStyle() {
                                        return new Map();
                                    }
                                };
                            }
                        };
                    }
                };
            },
            matchedStyles: function matchedStyles() {
                return {
                    availableCSSVariables: function availableCSSVariables() {
                        return [
                            '--rgb-color',
                            '--wide-gamut-color'
                        ];
                    },
                    computeCSSVariable: function computeCSSVariable(_, completion) {
                        return {
                            value: CSS_VARIABLES_FOR_TEST[completion],
                            declaration: null
                        };
                    }
                };
            }
        };
        var noop = function() {};
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('value autocompletion', function() {
            it('shows autocomplete item with color swatch for CSS variables with RGB color', /*#__PURE__*/ _async_to_generator(function() {
                var _colorCompletions__subtitleRenderer, _colorCompletions_, attachedElement, cssPropertyPrompt, spyObj, colorCompletions, renderedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            attachedElement = document.createElement('div');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(attachedElement);
                            cssPropertyPrompt = new CSSPropertyPrompt(mockTreeItem, false);
                            cssPropertyPrompt.attachAndStartEditing(attachedElement, noop);
                            spyObj = sinon.spy(cssPropertyPrompt.suggestBoxForTest());
                            cssPropertyPrompt.setText('var(--rgb');
                            return [
                                4,
                                cssPropertyPrompt.complete(true)
                            ];
                        case 1:
                            _state.sent();
                            colorCompletions = spyObj === null || spyObj === void 0 ? void 0 : spyObj.updateSuggestions.firstCall.args[1];
                            renderedElement = colorCompletions === null || colorCompletions === void 0 ? void 0 : (_colorCompletions__subtitleRenderer = (_colorCompletions_ = colorCompletions[0]).subtitleRenderer) === null || _colorCompletions__subtitleRenderer === void 0 ? void 0 : _colorCompletions__subtitleRenderer.call(_colorCompletions_);
                            assert.instanceOf(renderedElement, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorSwatch);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('shows autocomplete item with color swatch for CSS variables with wide gamut color', /*#__PURE__*/ _async_to_generator(function() {
                var _colorCompletions__subtitleRenderer, _colorCompletions_, attachedElement, cssPropertyPrompt, spyObj, colorCompletions, renderedElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            attachedElement = document.createElement('div');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(attachedElement);
                            cssPropertyPrompt = new CSSPropertyPrompt(mockTreeItem, false);
                            cssPropertyPrompt.attachAndStartEditing(attachedElement, noop);
                            spyObj = sinon.spy(cssPropertyPrompt.suggestBoxForTest());
                            cssPropertyPrompt.setText('var(--wide');
                            return [
                                4,
                                cssPropertyPrompt.complete(true)
                            ];
                        case 1:
                            _state.sent();
                            colorCompletions = spyObj === null || spyObj === void 0 ? void 0 : spyObj.updateSuggestions.firstCall.args[1];
                            renderedElement = colorCompletions === null || colorCompletions === void 0 ? void 0 : (_colorCompletions__subtitleRenderer = (_colorCompletions_ = colorCompletions[0]).subtitleRenderer) === null || _colorCompletions__subtitleRenderer === void 0 ? void 0 : _colorCompletions__subtitleRenderer.call(_colorCompletions_);
                            assert.instanceOf(renderedElement, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.ColorSwatch.ColorSwatch);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('shows autocomplete property names for CSS aliases', /*#__PURE__*/ _async_to_generator(function() {
                var attachedElement, cssPropertyPrompt, spyObj, completions;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            attachedElement = document.createElement('div');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(attachedElement);
                            cssPropertyPrompt = new CSSPropertyPrompt(mockTreeItem, true);
                            cssPropertyPrompt.attachAndStartEditing(attachedElement, noop);
                            spyObj = sinon.spy(cssPropertyPrompt.suggestBoxForTest());
                            cssPropertyPrompt.setText('word-wra');
                            return [
                                4,
                                cssPropertyPrompt.complete(true)
                            ];
                        case 1:
                            _state.sent();
                            completions = spyObj === null || spyObj === void 0 ? void 0 : spyObj.updateSuggestions.firstCall.args[1];
                            assert.strictEqual(completions === null || completions === void 0 ? void 0 : completions[0].text, 'word-wrap');
                            assert.strictEqual(completions === null || completions === void 0 ? void 0 : completions[1].text, 'overflow-wrap');
                            assert.strictEqual(completions === null || completions === void 0 ? void 0 : completions[1].subtitle, '= word-wrap');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=StylesSidebarPane.test.js.map


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