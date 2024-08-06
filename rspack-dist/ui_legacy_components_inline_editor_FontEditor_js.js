"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_FontEditor_js"], {
"./ui/legacy/components/inline_editor/FontEditor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FontEditor: function() { return FontEditor; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _fontEditor_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fontEditor.css.js */ "./ui/legacy/components/inline_editor/fontEditor.css.js");
/* harmony import */var _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FontEditorUnitConverter.js */ "./ui/legacy/components/inline_editor/FontEditorUnitConverter.js");
/* harmony import */var _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FontEditorUtils.js */ "./ui/legacy/components/inline_editor/FontEditorUtils.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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










var UIStrings = {
    /**
     *@description Font editor label for font family selector
     */ fontFamily: 'Font Family',
    /**
     *@description Section header for CSS property inputs
     */ cssProperties: 'CSS Properties',
    /**
     *@description Font size slider label for Font Editor
     */ fontSize: 'Font Size',
    /**
     *@description Line height slider label for Font Editor
     */ lineHeight: 'Line Height',
    /**
     *@description Font weight slider label for Font Editor
     */ fontWeight: 'Font Weight',
    /**
     *@description Label for letter-spacing labels
     */ spacing: 'Spacing',
    /**
     *@description Label for numbered fallback selectors
     *@example {2} PH1
     */ fallbackS: 'Fallback {PH1}',
    /**
     *@description Announcement for deleting an empty font family selector in the Font Editor
     *@example {2} PH1
     */ thereIsNoValueToDeleteAtIndexS: 'There is no value to delete at index: {PH1}',
    /**
     *@description Announcement when deleting a font selector in the Font Editor
     *@example {2} PH1
     */ fontSelectorDeletedAtIndexS: 'Font Selector deleted at index: {PH1}',
    /**
     *@description Label for Font Editor button to delete font family/fallback selectors
     *@example {Fallback 1} PH1
     */ deleteS: 'Delete {PH1}',
    /**
     * @description Warning message for Font Editor invalid text input. The placeholder is the name of
     * the CSS attribute that is incorrect.
     * @example {font-size} PH1
     */ PleaseEnterAValidValueForSText: '* Please enter a valid value for {PH1} text input',
    /**
     *@description Error text in Font Editor
     *@example {font-size} PH1
     */ thisPropertyIsSetToContainUnits: 'This property is set to contain units but does not have a defined corresponding unitsArray: {PH1}',
    /**
     *@description Label for slider input in the Font Editor.
     *@example {font-size} PH1
     */ sSliderInput: '{PH1} Slider Input',
    /**
     *@description Accessible label for a text input for a property in the Font Editor.
     *@example {font-size} PH1
     */ sTextInput: '{PH1} Text Input',
    /**
     *@description Font Editor units text box label
     */ units: 'Units',
    /**
     * @description Accessible name for Font Editor unit input. The placeholder is the name of the font
     * property that this UI input controls. e.g. font-size, line-height, line-weight.
     * @example {font-size} PH1
     */ sUnitInput: '{PH1} Unit Input',
    /**
     *@description Text used in the Font Editor for the key values selector
     *@example {font-size} PH1
     */ sKeyValueSelector: '{PH1} Key Value Selector',
    /**
     * @description Label for Font Editor toggle input type button. The placeholder is the name of the
     * font property that this UI input controls. e.g. font-size, line-height, line-weight. Tooltip for
     * a button next to the text input which allows the user to change the input type. When they click
     * this button, the UI changes to allow the user to choose from a list of pre-selected font
     * categories.
     * @example {font-size} PH1
     */ sToggleInputType: '{PH1} toggle input type',
    /**
     *@description Label for Font Editor alert in CSS Properties section when toggling inputs
     */ selectorInputMode: 'Selector Input Mode',
    /**
     *@description Label for Font Editor alert in CSS Properties section when toggling inputs
     */ sliderInputMode: 'Slider Input Mode'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/FontEditor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var FontEditor = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(FontEditor, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(FontEditor);
    function FontEditor(propertyMap) {
        _class_call_check(this, FontEditor);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "selectedNode", void 0);
        _define_property(_assert_this_initialized(_this), "propertyMap", void 0);
        _define_property(_assert_this_initialized(_this), "fontSelectorSection", void 0);
        _define_property(_assert_this_initialized(_this), "fontSelectors", void 0);
        _define_property(_assert_this_initialized(_this), "fontsList", void 0);
        _this.selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        _this.propertyMap = propertyMap;
        _this.contentElement.tabIndex = 0;
        _this.contentElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dialog('font-editor').parent('mapped').track({
            keydown: 'Enter|Escape'
        })));
        _this.setDefaultFocusedElement(_this.contentElement);
        // Font Selector Section
        _this.fontSelectorSection = _this.contentElement.createChild('div', 'font-selector-section');
        _this.fontSelectorSection.createChild('h2', 'font-section-header').textContent = i18nString(UIStrings.fontFamily);
        _this.fontSelectors = [];
        _this.fontsList = null;
        var propertyValue = _this.propertyMap.get('font-family');
        void _this.createFontSelectorSection(propertyValue);
        //  CSS Font Property Section
        var cssPropertySection = _this.contentElement.createChild('div', 'font-section');
        cssPropertySection.createChild('h2', 'font-section-header').textContent = i18nString(UIStrings.cssProperties);
        // The regexes only handle valid property values as invalid values are not passed into the property map.
        var fontSizePropertyInfo = _this.getPropertyInfo('font-size', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontSizeStaticParams.regex);
        var lineHeightPropertyInfo = _this.getPropertyInfo('line-height', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LineHeightStaticParams.regex);
        var fontWeightPropertyInfo = _this.getPropertyInfo('font-weight', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontWeightStaticParams.regex);
        var letterSpacingPropertyInfo = _this.getPropertyInfo('letter-spacing', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LetterSpacingStaticParams.regex);
        new FontPropertyInputs('font-size', i18nString(UIStrings.fontSize), cssPropertySection, fontSizePropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontSizeStaticParams, _this.updatePropertyValue.bind(_assert_this_initialized(_this)), _this.resizePopout.bind(_assert_this_initialized(_this)), /** hasUnits= */ true);
        new FontPropertyInputs('line-height', i18nString(UIStrings.lineHeight), cssPropertySection, lineHeightPropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LineHeightStaticParams, _this.updatePropertyValue.bind(_assert_this_initialized(_this)), _this.resizePopout.bind(_assert_this_initialized(_this)), /** hasUnits= */ true);
        new FontPropertyInputs('font-weight', i18nString(UIStrings.fontWeight), cssPropertySection, fontWeightPropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.FontWeightStaticParams, _this.updatePropertyValue.bind(_assert_this_initialized(_this)), _this.resizePopout.bind(_assert_this_initialized(_this)), /** hasUnits= */ false);
        new FontPropertyInputs('letter-spacing', i18nString(UIStrings.spacing), cssPropertySection, letterSpacingPropertyInfo, _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.LetterSpacingStaticParams, _this.updatePropertyValue.bind(_assert_this_initialized(_this)), _this.resizePopout.bind(_assert_this_initialized(_this)), /** hasUnits= */ true);
        return _this;
    }
    _create_class(FontEditor, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _fontEditor_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        },
        {
            key: "createFontSelectorSection",
            value: function createFontSelectorSection(propertyValue) {
                var _this = this;
                return _async_to_generator(function() {
                    var splitValue, i;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!propertyValue) return [
                                    3,
                                    2
                                ];
                                // FIXME(crbug.com/1148434): propertyValue will not be split correctly for font family names that contain commas.
                                // e.g. font-family: "Name,with,commas"
                                splitValue = propertyValue.split(',');
                                return [
                                    4,
                                    _this.createFontSelector(splitValue[0], /* isPrimary= */ true)
                                ];
                            case 1:
                                _state.sent();
                                if (!_FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GlobalValues.includes(splitValue[0])) {
                                    // We add one to the splitValue length so that we have an additional empty fallback selector
                                    for(i = 1; i < splitValue.length + 1; i++){
                                        void _this.createFontSelector(splitValue[i]);
                                    }
                                }
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                void _this.createFontSelector('', true);
                                _state.label = 3;
                            case 3:
                                _this.resizePopout();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createFontsList",
            value: function createFontsList() {
                var _this = this;
                return _async_to_generator(function() {
                    var computedFontArray, computedMap, splicedArray, systemMap, fontList;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.generateComputedFontArray()
                                ];
                            case 1:
                                computedFontArray = _state.sent();
                                computedMap = new Map();
                                splicedArray = _this.splitComputedFontArray(computedFontArray);
                                computedMap.set('Computed Fonts', splicedArray);
                                systemMap = new Map();
                                systemMap.set('System Fonts', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.SystemFonts);
                                systemMap.set('Generic Families', _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GenericFonts);
                                fontList = [];
                                fontList.push(computedMap);
                                fontList.push(systemMap);
                                return [
                                    2,
                                    fontList
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "splitComputedFontArray",
            value: function splitComputedFontArray(computedFontArray) {
                var array = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var fontFamilyValue = _step.value;
                        if (fontFamilyValue.includes(',')) {
                            var fonts = fontFamilyValue.split(',');
                            fonts.forEach(function(element) {
                                if (array.findIndex(function(item) {
                                    return item.toLowerCase() === element.trim().toLowerCase().replace(/"/g, '\'');
                                }) === -1) {
                                    array.push(element.trim().replace(/"/g, ''));
                                }
                            });
                        } else if (array.findIndex(function(item) {
                            return item.toLowerCase() === fontFamilyValue.toLowerCase().replace('"', '\'');
                        }) === -1) {
                            array.push(fontFamilyValue.replace(/"/g, ''));
                        }
                    };
                    for(var _iterator = computedFontArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                return array;
            }
        },
        {
            key: "createFontSelector",
            value: function createFontSelector(value, isPrimary) {
                var _this = this;
                return _async_to_generator(function() {
                    var firstChar, selectorField, label, globalValuesMap, primaryFontList;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // FIXME(crbug.com/1148434): Custom font family names that use single/double quotes in the font family name will not be handled correctly.
                                // e.g. font-family: "FontWith\"DoubleQuotes"
                                value = value ? value.trim() : '';
                                if (value) {
                                    firstChar = value.charAt(0);
                                    if (firstChar === '\'') {
                                        value = value.replace(/'/g, '');
                                    } else if (firstChar === '"') {
                                        value = value.replace(/"/g, '');
                                    }
                                }
                                selectorField = _this.fontSelectorSection.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
                                if (!!_this.fontsList) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.createFontsList()
                                ];
                            case 1:
                                _this.fontsList = _state.sent();
                                _state.label = 2;
                            case 2:
                                if (isPrimary) {
                                    label = i18nString(UIStrings.fontFamily);
                                    globalValuesMap = new Map([
                                        [
                                            'Global Values',
                                            _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GlobalValues
                                        ]
                                    ]);
                                    primaryFontList = _to_consumable_array(_this.fontsList);
                                    primaryFontList.push(globalValuesMap);
                                    _this.createSelector(selectorField, label, primaryFontList, value.trim(), 'primary-font-family');
                                } else {
                                    label = i18nString(UIStrings.fallbackS, {
                                        PH1: _this.fontSelectors.length
                                    });
                                    _this.createSelector(selectorField, label, _this.fontsList, value.trim(), 'fallback-font-family');
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteFontSelector",
            value: function deleteFontSelector(index, isGlobalValue) {
                var fontSelectorObject = this.fontSelectors[index];
                var isPrimary = index === 0;
                if (fontSelectorObject.input.value === '' && !isGlobalValue) {
                    _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.thereIsNoValueToDeleteAtIndexS, {
                        PH1: index
                    }));
                    return;
                }
                if (isPrimary) {
                    // When deleting the primary font selector, we overwrite the value of the primary selector
                    // with the value of the secondary selector and delete the secondary selector.
                    var secondarySelector = this.fontSelectors[1];
                    var newPrimarySelectorValue = '';
                    if (secondarySelector) {
                        newPrimarySelectorValue = secondarySelector.input.value;
                        fontSelectorObject = secondarySelector;
                    }
                    var primarySelector = this.fontSelectors[0].input;
                    primarySelector.value = newPrimarySelectorValue;
                    index = 1;
                }
                if (fontSelectorObject.input.parentNode) {
                    var hasSecondarySelector = this.fontSelectors.length > 1;
                    if (!isPrimary || hasSecondarySelector) {
                        var selectorElement = fontSelectorObject.input.parentElement;
                        if (selectorElement) {
                            selectorElement.remove();
                            this.fontSelectors.splice(index, 1);
                            this.updateFontSelectorList();
                        }
                    }
                    _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.fontSelectorDeletedAtIndexS, {
                        PH1: index
                    }));
                }
                this.onFontSelectorChanged();
                this.resizePopout();
                var focusIndex = isPrimary ? 0 : index - 1;
                this.fontSelectors[focusIndex].input.focus();
            }
        },
        {
            key: "updateFontSelectorList",
            value: function updateFontSelectorList() {
                for(var i = 0; i < this.fontSelectors.length; i++){
                    var fontSelectorObject = this.fontSelectors[i];
                    var label = void 0;
                    if (i === 0) {
                        label = i18nString(UIStrings.fontFamily);
                    } else {
                        label = i18nString(UIStrings.fallbackS, {
                            PH1: i
                        });
                    }
                    fontSelectorObject.label.textContent = label;
                    _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(fontSelectorObject.input, label);
                    fontSelectorObject.deleteButton.setTitle(i18nString(UIStrings.deleteS, {
                        PH1: label
                    }));
                    fontSelectorObject.index = i;
                }
            }
        },
        {
            key: "getPropertyInfo",
            value: function getPropertyInfo(name, regex) {
                var value = this.propertyMap.get(name);
                if (value) {
                    var valueString = value;
                    var match = valueString.match(regex);
                    if (match) {
                        var retValue = match[1].charAt(0) === '+' ? match[1].substr(1) : match[1];
                        var retUnits = match[2] ? match[2] : '';
                        return {
                            value: retValue,
                            units: retUnits
                        };
                    }
                    return {
                        value: valueString,
                        units: null
                    };
                }
                return {
                    value: null,
                    units: null
                };
            }
        },
        {
            key: "createSelector",
            value: function createSelector(field, label, options, currentValue, jslogContext) {
                var _this = this;
                var index = this.fontSelectors.length;
                var selectInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(label, options);
                selectInput.value = currentValue;
                selectInput.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown(jslogContext).track({
                    click: true,
                    change: true
                })));
                var selectLabel = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(label, 'shadow-editor-label', selectInput);
                selectInput.addEventListener('input', this.onFontSelectorChanged.bind(this), false);
                // We want to prevent the Enter key from propagating to the SwatchPopoverHelper which will close the editor.
                selectInput.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.consume();
                    }
                }, false);
                field.appendChild(selectLabel);
                field.appendChild(selectInput);
                var deleteToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', field);
                var deleteButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.deleteS, {
                    PH1: label
                }), 'bin', undefined, 'delete');
                deleteToolbar.appendToolbarItem(deleteButton);
                var fontSelectorObject = {
                    label: selectLabel,
                    input: selectInput,
                    deleteButton: deleteButton,
                    index: index
                };
                deleteButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                    _this.deleteFontSelector(fontSelectorObject.index);
                });
                deleteButton.element.addEventListener('keydown', function(event) {
                    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                        _this.deleteFontSelector(fontSelectorObject.index);
                        event.consume();
                    }
                }, false);
                this.fontSelectors.push(fontSelectorObject);
            }
        },
        {
            key: "onFontSelectorChanged",
            value: function onFontSelectorChanged() {
                var value = '';
                var isGlobalValue = _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.GlobalValues.includes(this.fontSelectors[0].input.value);
                if (isGlobalValue) {
                    for(var i = 1; i < this.fontSelectors.length; i++){
                        this.deleteFontSelector(i, /** isGlobalValue= */ true);
                    }
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.fontSelectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var fontSelector = _step.value;
                        var fontSelectorInput = fontSelector.input;
                        if (fontSelectorInput.value !== '') {
                            if (value === '') {
                                value = this.fontSelectors[0].input.value;
                            } else {
                                value += ', ' + fontSelectorInput.value;
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
                // Add an extra blank selector as long as the last selector doesn't have an empty value, the primary
                // selector's value is not a global value and if the list of selectors has not exceeded 10.
                if (this.fontSelectors[this.fontSelectors.length - 1].input.value !== '' && !isGlobalValue && this.fontSelectors.length < 10) {
                    void this.createFontSelector(/** value= */ '');
                    this.resizePopout();
                }
                this.updatePropertyValue('font-family', value);
            }
        },
        {
            key: "updatePropertyValue",
            value: function updatePropertyValue(propertyName, value) {
                this.dispatchEventToListeners("FontChanged" /* Events.FontChanged */ , {
                    propertyName: propertyName,
                    value: value
                });
            }
        },
        {
            key: "resizePopout",
            value: function resizePopout() {
                this.dispatchEventToListeners("FontEditorResized" /* Events.FontEditorResized */ );
            }
        }
    ]);
    return FontEditor;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox));
var FontPropertyInputs = /*#__PURE__*/ function() {
    "use strict";
    function FontPropertyInputs(propertyName, label, field, propertyInfo, staticParams, updateCallback, resizeCallback, hasUnits) {
        _class_call_check(this, FontPropertyInputs);
        _define_property(this, "showSliderMode", void 0);
        _define_property(this, "errorText", void 0);
        _define_property(this, "propertyInfo", void 0);
        _define_property(this, "propertyName", void 0);
        _define_property(this, "staticParams", void 0);
        _define_property(this, "hasUnits", void 0);
        _define_property(this, "units", void 0);
        _define_property(this, "addedUnit", void 0);
        _define_property(this, "initialRange", void 0);
        _define_property(this, "boundUpdateCallback", void 0);
        _define_property(this, "boundResizeCallback", void 0);
        _define_property(this, "selectedNode", void 0);
        _define_property(this, "sliderInput", void 0);
        _define_property(this, "textBoxInput", void 0);
        _define_property(this, "unitInput", void 0);
        _define_property(this, "selectorInput", void 0);
        _define_property(this, "applyNextInput", void 0);
        this.showSliderMode = true;
        var propertyField = field.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        this.errorText = field.createChild('div', 'error-text');
        this.errorText.textContent = i18nString(UIStrings.PleaseEnterAValidValueForSText, {
            PH1: propertyName
        });
        this.errorText.hidden = true;
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsAlert(this.errorText);
        this.propertyInfo = propertyInfo;
        this.propertyName = propertyName;
        this.staticParams = staticParams;
        // Unit handling
        this.hasUnits = hasUnits;
        if (this.hasUnits && this.staticParams.units && this.staticParams.defaultUnit !== null) {
            var defaultUnits = this.staticParams.defaultUnit;
            this.units = propertyInfo.units !== null ? propertyInfo.units : defaultUnits;
            this.addedUnit = !this.staticParams.units.has(this.units);
        } else if (this.hasUnits) {
            throw new Error(i18nString(UIStrings.thisPropertyIsSetToContainUnits, {
                PH1: propertyName
            }));
        } else {
            this.units = '';
        }
        this.initialRange = this.getUnitRange();
        this.boundUpdateCallback = updateCallback;
        this.boundResizeCallback = resizeCallback;
        this.selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        var propertyLabel = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(label, 'shadow-editor-label');
        propertyField.append(propertyLabel);
        this.sliderInput = this.createSliderInput(propertyField, propertyName);
        this.textBoxInput = this.createTextBoxInput(propertyField, propertyName);
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.bindLabelToControl(propertyLabel, this.textBoxInput);
        this.unitInput = this.createUnitInput(propertyField, "".concat(propertyName, "-unit"));
        this.selectorInput = this.createSelectorInput(propertyField, propertyName);
        this.createTypeToggle(propertyField, "".concat(propertyName, "-value-type"));
        this.checkSelectorValueAndToggle();
        this.applyNextInput = false;
    }
    _create_class(FontPropertyInputs, [
        {
            key: "setInvalidTextBoxInput",
            value: function setInvalidTextBoxInput(invalid) {
                if (invalid) {
                    if (this.errorText.hidden) {
                        this.errorText.hidden = false;
                        this.textBoxInput.classList.add('error-input');
                        this.boundResizeCallback();
                    }
                } else {
                    if (!this.errorText.hidden) {
                        this.errorText.hidden = true;
                        this.textBoxInput.classList.remove('error-input');
                        this.boundResizeCallback();
                    }
                }
            }
        },
        {
            key: "checkSelectorValueAndToggle",
            value: function checkSelectorValueAndToggle() {
                if (this.staticParams.keyValues && this.propertyInfo.value !== null && this.staticParams.keyValues.has(this.propertyInfo.value)) {
                    this.toggleInputType();
                    return true;
                }
                return false;
            }
        },
        {
            key: "getUnitRange",
            value: function getUnitRange() {
                var min = 0;
                var max = 100;
                var step = 1;
                if (this.propertyInfo.value !== null && /\d/.test(this.propertyInfo.value)) {
                    if (this.staticParams.rangeMap.get(this.units)) {
                        var unitRangeMap = this.staticParams.rangeMap.get(this.units);
                        if (unitRangeMap) {
                            min = Math.min(unitRangeMap.min, parseFloat(this.propertyInfo.value));
                            max = Math.max(unitRangeMap.max, parseFloat(this.propertyInfo.value));
                            step = unitRangeMap.step;
                        }
                    } else {
                        var unitRangeMap1 = this.staticParams.rangeMap.get('px');
                        if (unitRangeMap1) {
                            min = Math.min(unitRangeMap1.min, parseFloat(this.propertyInfo.value));
                            max = Math.max(unitRangeMap1.max, parseFloat(this.propertyInfo.value));
                            step = unitRangeMap1.step;
                        }
                    }
                } else {
                    var unitRangeMap2 = this.staticParams.rangeMap.get(this.units);
                    if (unitRangeMap2) {
                        min = unitRangeMap2.min;
                        max = unitRangeMap2.max;
                        step = unitRangeMap2.step;
                    }
                }
                return {
                    min: min,
                    max: max,
                    step: step
                };
            }
        },
        {
            key: "createSliderInput",
            value: function createSliderInput(field, jslogContext) {
                var _this = this;
                var min = this.initialRange.min;
                var max = this.initialRange.max;
                var step = this.initialRange.step;
                var slider = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSlider(min, max, -1);
                slider.sliderElement.step = step.toString();
                slider.sliderElement.tabIndex = 0;
                if (this.propertyInfo.value) {
                    slider.value = parseFloat(this.propertyInfo.value);
                } else {
                    var newValue = (min + max) / 2;
                    slider.value = newValue;
                }
                slider.addEventListener('input', function(event) {
                    _this.onSliderInput(event, /** apply= */ false);
                });
                slider.addEventListener('mouseup', function(event) {
                    _this.onSliderInput(event, /** apply= */ true);
                });
                slider.addEventListener('keydown', function(event) {
                    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                        // Pressing an arrow key will trigger two events for the slider: A keyboard event and an input event
                        // The keyboard event will come before the slider value has changed and the subsequent input event will cause
                        // the value to change.  We use the applyNextInput boolean to tell onSliderInput that the next input event
                        // is coming because of the keyboard event and that it should be applied to the section.
                        _this.applyNextInput = true;
                    }
                });
                field.appendChild(slider);
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(slider.sliderElement, i18nString(UIStrings.sSliderInput, {
                    PH1: this.propertyName
                }));
                slider.sliderElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.slider(jslogContext).track({
                    change: true
                })));
                return slider;
            }
        },
        {
            key: "createTextBoxInput",
            value: function createTextBoxInput(field, jslogContext) {
                var textBoxInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInput('shadow-editor-text-input', 'number', jslogContext);
                textBoxInput.step = this.initialRange.step.toString();
                textBoxInput.classList.add('font-editor-text-input');
                if (this.propertyInfo.value !== null) {
                    if (this.propertyInfo.value.charAt(0) === '+') {
                        this.propertyInfo.value = this.propertyInfo.value.substr(1);
                    }
                    textBoxInput.value = this.propertyInfo.value;
                }
                textBoxInput.step = 'any';
                textBoxInput.addEventListener('input', this.onTextBoxInput.bind(this), false);
                field.appendChild(textBoxInput);
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(textBoxInput, i18nString(UIStrings.sTextInput, {
                    PH1: this.propertyName
                }));
                return textBoxInput;
            }
        },
        {
            key: "createUnitInput",
            value: function createUnitInput(field, jslogContext) {
                var unitInput;
                if (this.hasUnits && this.staticParams.units) {
                    var currentValue = this.propertyInfo.units;
                    var options = this.staticParams.units;
                    unitInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(i18nString(UIStrings.units), options);
                    unitInput.classList.add('font-editor-select');
                    if (this.addedUnit && currentValue) {
                        unitInput.add(new Option(currentValue, currentValue));
                    }
                    if (currentValue) {
                        unitInput.value = currentValue;
                    }
                    unitInput.addEventListener('change', this.onUnitInput.bind(this), false);
                } else {
                    unitInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(i18nString(UIStrings.units), []);
                    unitInput.classList.add('font-editor-select');
                    unitInput.disabled = true;
                }
                unitInput.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown(jslogContext).track({
                    click: true,
                    change: true
                })));
                // We want to prevent the Enter key from propagating to the SwatchPopoverHelper which will close the editor.
                unitInput.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.consume();
                    }
                }, false);
                field.appendChild(unitInput);
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(unitInput, i18nString(UIStrings.sUnitInput, {
                    PH1: this.propertyName
                }));
                return unitInput;
            }
        },
        {
            key: "createSelectorInput",
            value: function createSelectorInput(field, jslogContext) {
                var selectInput = _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSelect(i18nString(UIStrings.sKeyValueSelector, {
                    PH1: this.propertyName
                }), this.staticParams.keyValues);
                selectInput.classList.add('font-selector-input');
                if (this.propertyInfo.value) {
                    selectInput.value = this.propertyInfo.value;
                }
                selectInput.addEventListener('input', this.onSelectorInput.bind(this), false);
                // We want to prevent the Enter key from propagating to the SwatchPopoverHelper which will close the editor.
                selectInput.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        event.consume();
                    }
                }, false);
                field.appendChild(selectInput);
                selectInput.hidden = true;
                selectInput.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown(jslogContext).track({
                    click: true,
                    change: true
                })));
                return selectInput;
            }
        },
        {
            key: "onSelectorInput",
            value: function onSelectorInput(event) {
                if (event.currentTarget) {
                    var value = event.currentTarget.value;
                    this.textBoxInput.value = '';
                    var newValue = (parseFloat(this.sliderInput.sliderElement.min) + parseFloat(this.sliderInput.sliderElement.max)) / 2;
                    this.sliderInput.value = newValue;
                    this.setInvalidTextBoxInput(false);
                    this.boundUpdateCallback(this.propertyName, value);
                }
            }
        },
        {
            key: "onSliderInput",
            value: function onSliderInput(event, apply) {
                var target = event.currentTarget;
                if (target) {
                    var value = target.value;
                    this.textBoxInput.value = value;
                    this.selectorInput.value = '';
                    var valueString = this.hasUnits ? value + this.unitInput.value : value.toString();
                    this.setInvalidTextBoxInput(false);
                    if (apply || this.applyNextInput) {
                        this.boundUpdateCallback(this.propertyName, valueString);
                        this.applyNextInput = false;
                    }
                }
            }
        },
        {
            key: "onTextBoxInput",
            value: function onTextBoxInput(event) {
                var target = event.currentTarget;
                if (target) {
                    var value = target.value;
                    var units = value === '' ? '' : this.unitInput.value;
                    var valueString = value + units;
                    if (this.staticParams.regex.test(valueString) || value === '' && !target.validationMessage.length) {
                        if (parseFloat(value) > parseFloat(this.sliderInput.sliderElement.max)) {
                            this.sliderInput.sliderElement.max = value;
                        } else if (parseFloat(value) < parseFloat(this.sliderInput.sliderElement.min)) {
                            this.sliderInput.sliderElement.min = value;
                        }
                        this.sliderInput.value = parseFloat(value);
                        this.selectorInput.value = '';
                        this.setInvalidTextBoxInput(false);
                        this.boundUpdateCallback(this.propertyName, valueString);
                    } else {
                        this.setInvalidTextBoxInput(true);
                    }
                }
            }
        },
        {
            key: "onUnitInput",
            value: function onUnitInput(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var unitInput, hasFocus, newUnit, prevUnit, conversionMultiplier;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                unitInput = event.currentTarget;
                                hasFocus = unitInput.hasFocus();
                                newUnit = unitInput.value;
                                unitInput.disabled = true;
                                prevUnit = _this.units;
                                return [
                                    4,
                                    _FontEditorUnitConverter_js__WEBPACK_IMPORTED_MODULE_8__.getUnitConversionMultiplier(prevUnit, newUnit, _this.propertyName === 'font-size')
                                ];
                            case 1:
                                conversionMultiplier = _state.sent();
                                _this.setInputUnits(conversionMultiplier, newUnit);
                                if (_this.textBoxInput.value) {
                                    _this.boundUpdateCallback(_this.propertyName, _this.textBoxInput.value + newUnit);
                                }
                                _this.units = newUnit;
                                unitInput.disabled = false;
                                if (hasFocus) {
                                    unitInput.focus();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createTypeToggle",
            value: function createTypeToggle(field, jslogContext) {
                var displaySwitcher = field.createChild('div', 'spectrum-switcher');
                var icon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
                icon.data = {
                    iconName: 'fold-more',
                    color: 'var(--icon-default)',
                    width: '16px',
                    height: '16px'
                };
                displaySwitcher.appendChild(icon);
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.setTitle(displaySwitcher, i18nString(UIStrings.sToggleInputType, {
                    PH1: this.propertyName
                }));
                displaySwitcher.tabIndex = 0;
                self.onInvokeElement(displaySwitcher, this.toggleInputType.bind(this));
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsButton(displaySwitcher);
                displaySwitcher.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toggle(jslogContext).track({
                    click: true
                })));
            }
        },
        {
            key: "toggleInputType",
            value: function toggleInputType(event) {
                if (event && event.key === 'Enter') {
                    event.consume();
                }
                if (this.showSliderMode) {
                    // Show selector input type
                    this.sliderInput.hidden = true;
                    this.textBoxInput.hidden = true;
                    this.unitInput.hidden = true;
                    this.selectorInput.hidden = false;
                    this.showSliderMode = false;
                    _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.selectorInputMode));
                } else {
                    // Show sliderinput type
                    this.sliderInput.hidden = false;
                    this.textBoxInput.hidden = false;
                    this.unitInput.hidden = false;
                    this.selectorInput.hidden = true;
                    this.showSliderMode = true;
                    _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.sliderInputMode));
                }
            }
        },
        {
            key: "setInputUnits",
            value: function setInputUnits(multiplier, newUnit) {
                var newRangeMap = this.staticParams.rangeMap.get(newUnit);
                var newMin, newMax, newStep;
                if (newRangeMap) {
                    newMin = newRangeMap.min;
                    newMax = newRangeMap.max;
                    newStep = newRangeMap.step;
                } else {
                    newMin = 0;
                    newMax = 100;
                    newStep = 1;
                }
                var hasValue = false;
                var roundingPrecision = _FontEditorUtils_js__WEBPACK_IMPORTED_MODULE_9__.getRoundingPrecision(newStep);
                var newValue = (newMin + newMax) / 2;
                if (this.textBoxInput.value) {
                    hasValue = true;
                    newValue = parseFloat((parseFloat(this.textBoxInput.value) * multiplier).toFixed(roundingPrecision));
                }
                this.sliderInput.sliderElement.min = Math.min(newValue, newMin).toString();
                this.sliderInput.sliderElement.max = Math.max(newValue, newMax).toString();
                this.sliderInput.sliderElement.step = newStep.toString();
                this.textBoxInput.step = newStep.toString();
                if (hasValue) {
                    this.textBoxInput.value = newValue.toString();
                }
                this.sliderInput.value = newValue;
            }
        }
    ]);
    return FontPropertyInputs;
} //# sourceMappingURL=FontEditor.js.map
();


}),
"./ui/legacy/components/inline_editor/fontEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  user-select: none;\n  padding: 4px 12px 12px;\n}\n\n.error-input {\n  box-shadow: 0 0 0 1px var(--sys-color-error);\n}\n\n.error-text {\n  color: var(--sys-color-error);\n  padding: 6px 0;\n}\n\n.warning-input {\n  --override-warning-input-color: #ffdd9e;\n\n  box-shadow: 0 0 0 1px var(--override-warning-input-color);\n}\n\n.theme-with-dark-background .warning-input,\n:host-context(.theme-with-dark-background) .warning-input {\n  --override-warning-input-color: rgb(97 63 0);\n}\n\n.hide-warning {\n  display: none;\n}\n\n.font-section-header {\n  font-weight: normal;\n  font-size: 17px;\n  text-align: left;\n}\n\n.font-section-subheader {\n  font-size: 12px;\n  text-align: left;\n  font-weight: bold;\n}\n\n.font-selector-section {\n  overflow-y: auto;\n  padding-bottom: 10px;\n}\n\n.font-selector-input {\n  width: 204px;\n  text-align-last: center;\n}\n\n.font-reset-button {\n  width: 100%;\n  margin-top: 10px;\n}\n\n.font-section {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.chrome-select.font-editor-select {\n  min-width: 50px;\n  min-height: 27px;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  display: none;\n  margin: 0;\n}\n\n.preview-text {\n  max-width: 300px;\n  word-break: break-word;\n  display: block;\n}\n\n.rendered-font-list-label {\n  font-weight: bold;\n  font-size: 12px;\n}\n\n.rendered-font-list {\n  padding: 5px 0;\n}\n\n.shadow-editor-field {\n  height: 24px;\n  margin-top: 8px;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n\n.shadow-editor-field:last-of-type {\n  margin-bottom: 8px;\n}\n\n.shadow-editor-flex-field {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.shadow-editor-field.shadow-editor-blur-field {\n  margin-top: 40px;\n}\n\n.shadow-editor-2D-slider {\n  position: absolute;\n  height: 88px;\n  width: 88px;\n  border: 1px solid var(--divider-line);\n  border-radius: 2px;\n}\n\n.shadow-editor-label {\n  display: inline-block;\n  width: 70px;\n  height: 24px;\n  line-height: 24px;\n  margin-right: 8px;\n  text-align: left;\n}\n\n.shadow-editor-button-left,\n.shadow-editor-button-right {\n  width: 74px;\n  height: 24px;\n  padding: 3px 7px;\n  line-height: 16px;\n  border: 1px solid var(--divider-line);\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n  text-align: center;\n  font-weight: 500;\n}\n\n.shadow-editor-button-left {\n  border-radius: 2px 0 0 2px;\n}\n\n.shadow-editor-button-right {\n  border-radius: 0 2px 2px 0;\n  border-left-width: 0;\n}\n\n.shadow-editor-button-left:hover,\n.shadow-editor-button-right:hover {\n  box-shadow: 0 1px 1px var(--divider-line);\n}\n\n.shadow-editor-button-left:focus,\n.shadow-editor-button-right:focus {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.shadow-editor-text-input {\n  width: 50px;\n  margin: 8px;\n  text-align: center;\n  box-shadow: var(--legacy-focus-ring-inactive-shadow);\n}\n\n.spectrum-switcher {\n  border-radius: 2px;\n  height: 20px;\n  width: 20px;\n  padding: 2px;\n  margin-left: 5px;\n}\n\n.spectrum-switcher:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.spectrum-switcher:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n/*# sourceURL=fontEditor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);