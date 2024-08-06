"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ColorSwatchPopoverIcon_js"], {
"./panels/elements/ColorSwatchPopoverIcon.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierPopoverIcon: function() { return BezierPopoverIcon; },
  ColorSwatchPopoverIcon: function() { return ColorSwatchPopoverIcon; },
  FontEditorSectionManager: function() { return FontEditorSectionManager; },
  ShadowSwatchPopoverHelper: function() { return ShadowSwatchPopoverHelper; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
     * @description Tooltip text for an icon that opens the cubic bezier editor, which is a tool that
     * allows the user to edit cubic-bezier CSS properties directly.
     */ openCubicBezierEditor: 'Open cubic bezier editor',
    /**
     * @description Tooltip text for an icon that opens shadow editor. The shadow editor is a tool
     * which allows the user to edit CSS shadow properties.
     */ openShadowEditor: 'Open shadow editor'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ColorSwatchPopoverIcon.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var BezierPopoverIcon = /*#__PURE__*/ function() {
    "use strict";
    function BezierPopoverIcon(param) {
        var treeElement = param.treeElement, swatchPopoverHelper = param.swatchPopoverHelper, swatch = param.swatch;
        _class_call_check(this, BezierPopoverIcon);
        _define_property(this, "treeElement", void 0);
        _define_property(this, "swatchPopoverHelper", void 0);
        _define_property(this, "swatch", void 0);
        _define_property(this, "boundBezierChanged", void 0);
        _define_property(this, "boundOnScroll", void 0);
        _define_property(this, "bezierEditor", void 0);
        _define_property(this, "scrollerElement", void 0);
        _define_property(this, "originalPropertyText", void 0);
        this.treeElement = treeElement;
        this.swatchPopoverHelper = swatchPopoverHelper;
        this.swatch = swatch;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(this.swatch.iconElement(), i18nString(UIStrings.openCubicBezierEditor));
        this.swatch.iconElement().addEventListener('click', this.iconClick.bind(this), false);
        this.swatch.iconElement().addEventListener('mousedown', function(event) {
            return event.consume();
        }, false);
        this.boundBezierChanged = this.bezierChanged.bind(this);
        this.boundOnScroll = this.onScroll.bind(this);
    }
    _create_class(BezierPopoverIcon, [
        {
            key: "iconClick",
            value: function iconClick(event) {
                event.consume(true);
                if (this.swatchPopoverHelper.isShowing()) {
                    this.swatchPopoverHelper.hide(true);
                    return;
                }
                var model = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.AnimationTimingModel.AnimationTimingModel.parse(this.swatch.bezierText()) || _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.AnimationTimingModel.LINEAR_BEZIER;
                this.bezierEditor = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.BezierEditor.BezierEditor(model);
                this.bezierEditor.addEventListener("BezierChanged" /* InlineEditor.BezierEditor.Events.BezierChanged */ , this.boundBezierChanged);
                this.swatchPopoverHelper.show(this.bezierEditor, this.swatch.iconElement(), this.onPopoverHidden.bind(this));
                this.scrollerElement = this.swatch.enclosingNodeOrSelfWithClass('style-panes-wrapper');
                if (this.scrollerElement) {
                    this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
                }
                this.originalPropertyText = this.treeElement.property.propertyText;
                this.treeElement.parentPane().setEditingStyle(true);
                var uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.treeElement.property, false);
                if (uiLocation) {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, true);
                }
            }
        },
        {
            key: "bezierChanged",
            value: function bezierChanged(event) {
                this.swatch.setBezierText(event.data);
                void this.treeElement.applyStyleText(this.treeElement.renderedPropertyText(), false);
            }
        },
        {
            key: "onScroll",
            value: function onScroll(_event) {
                this.swatchPopoverHelper.hide(true);
            }
        },
        {
            key: "onPopoverHidden",
            value: function onPopoverHidden(commitEdit) {
                if (this.scrollerElement) {
                    this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
                }
                if (this.bezierEditor) {
                    this.bezierEditor.removeEventListener("BezierChanged" /* InlineEditor.BezierEditor.Events.BezierChanged */ , this.boundBezierChanged);
                }
                this.bezierEditor = undefined;
                var propertyText = commitEdit ? this.treeElement.renderedPropertyText() : this.originalPropertyText || '';
                void this.treeElement.applyStyleText(propertyText, true);
                this.treeElement.parentPane().setEditingStyle(false);
                delete this.originalPropertyText;
            }
        }
    ]);
    return BezierPopoverIcon;
}();
var ColorSwatchPopoverIcon = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ColorSwatchPopoverIcon, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ColorSwatchPopoverIcon);
    function ColorSwatchPopoverIcon(treeElement, swatchPopoverHelper, swatch) {
        _class_call_check(this, ColorSwatchPopoverIcon);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "treeElement", void 0);
        _define_property(_assert_this_initialized(_this), "swatchPopoverHelper", void 0);
        _define_property(_assert_this_initialized(_this), "swatch", void 0);
        _define_property(_assert_this_initialized(_this), "contrastInfo", void 0);
        _define_property(_assert_this_initialized(_this), "boundSpectrumChanged", void 0);
        _define_property(_assert_this_initialized(_this), "boundOnScroll", void 0);
        _define_property(_assert_this_initialized(_this), "spectrum", void 0);
        _define_property(_assert_this_initialized(_this), "scrollerElement", void 0);
        _define_property(_assert_this_initialized(_this), "originalPropertyText", void 0);
        _this.treeElement = treeElement;
        _this.swatchPopoverHelper = swatchPopoverHelper;
        _this.swatch = swatch;
        _this.swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.ColorSwatch.ClickEvent.eventName, _this.iconClick.bind(_assert_this_initialized(_this)));
        _this.contrastInfo = null;
        _this.boundSpectrumChanged = _this.spectrumChanged.bind(_assert_this_initialized(_this));
        _this.boundOnScroll = _this.onScroll.bind(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(ColorSwatchPopoverIcon, [
        {
            key: "generateCSSVariablesPalette",
            value: function generateCSSVariablesPalette() {
                var matchedStyles = this.treeElement.matchedStyles();
                var style = this.treeElement.property.ownerStyle;
                var cssVariables = matchedStyles.availableCSSVariables(style);
                var colors = [];
                var colorNames = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = cssVariables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cssVariable = _step.value;
                        if (cssVariable === this.treeElement.property.name) {
                            continue;
                        }
                        var value = matchedStyles.computeCSSVariable(style, cssVariable);
                        if (!value) {
                            continue;
                        }
                        var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(value.value);
                        if (!color) {
                            continue;
                        }
                        colors.push(value.value);
                        colorNames.push(cssVariable);
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
                return {
                    title: 'CSS Variables',
                    mutable: false,
                    matchUserFormat: true,
                    colors: colors,
                    colorNames: colorNames
                };
            }
        },
        {
            key: "setContrastInfo",
            value: function setContrastInfo(contrastInfo) {
                this.contrastInfo = contrastInfo;
            }
        },
        {
            key: "iconClick",
            value: function iconClick(event) {
                event.consume(true);
                this.showPopover();
            }
        },
        {
            key: "toggleEyeDropper",
            value: function toggleEyeDropper() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_spectrum;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_this_spectrum = _this.spectrum) === null || _this_spectrum === void 0 ? void 0 : _this_spectrum.toggleColorPicker()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "showPopover",
            value: function showPopover() {
                if (this.swatchPopoverHelper.isShowing()) {
                    this.swatchPopoverHelper.hide(true);
                    return;
                }
                var color = this.swatch.getColor();
                if (!color) {
                    return;
                }
                this.spectrum = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_4__.Spectrum.Spectrum(this.contrastInfo);
                this.spectrum.setColor(color);
                this.spectrum.addPalette(this.generateCSSVariablesPalette());
                this.spectrum.addEventListener("SizeChanged" /* ColorPicker.Spectrum.Events.SizeChanged */ , this.spectrumResized, this);
                this.spectrum.addEventListener("ColorChanged" /* ColorPicker.Spectrum.Events.ColorChanged */ , this.boundSpectrumChanged);
                this.swatchPopoverHelper.show(this.spectrum, this.swatch, this.onPopoverHidden.bind(this));
                this.scrollerElement = this.swatch.enclosingNodeOrSelfWithClass('style-panes-wrapper');
                if (this.scrollerElement) {
                    this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
                }
                this.originalPropertyText = this.treeElement.property.propertyText;
                this.treeElement.parentPane().setEditingStyle(true);
                var uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.treeElement.property, false);
                if (uiLocation) {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, true);
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ColorSwatchPopoverIcon, this);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.colorPickerOpenedFrom(1 /* Host.UserMetrics.ColorPickerOpenedFrom.StylesPane */ );
            }
        },
        {
            key: "spectrumResized",
            value: function spectrumResized() {
                this.swatchPopoverHelper.reposition();
            }
        },
        {
            key: "spectrumChanged",
            value: function spectrumChanged(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var color, colorName, _color_getAuthoredText, text, value;
                    return _ts_generator(this, function(_state) {
                        color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(event.data);
                        if (!color) {
                            return [
                                2
                            ];
                        }
                        colorName = _this.spectrum ? _this.spectrum.colorName() : undefined;
                        text = colorName && colorName.startsWith('--') ? "var(".concat(colorName, ")") : (_color_getAuthoredText = color.getAuthoredText()) !== null && _color_getAuthoredText !== void 0 ? _color_getAuthoredText : color.asString();
                        _this.swatch.renderColor(color);
                        value = _this.swatch.firstElementChild;
                        if (value) {
                            value.remove();
                            _this.swatch.createChild('span').textContent = text;
                        }
                        // `asString` somehow can return null.
                        if (text) {
                            _this.dispatchEventToListeners("colorchanged" /* ColorSwatchPopoverIconEvents.ColorChanged */ , text);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "onScroll",
            value: function onScroll(_event) {
                this.swatchPopoverHelper.hide(true);
            }
        },
        {
            key: "onPopoverHidden",
            value: function onPopoverHidden(commitEdit) {
                if (this.scrollerElement) {
                    this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
                }
                if (this.spectrum) {
                    this.spectrum.removeEventListener("ColorChanged" /* ColorPicker.Spectrum.Events.ColorChanged */ , this.boundSpectrumChanged);
                }
                this.spectrum = undefined;
                var propertyText = commitEdit ? this.treeElement.renderedPropertyText() : this.originalPropertyText || '';
                void this.treeElement.applyStyleText(propertyText, true);
                this.treeElement.parentPane().setEditingStyle(false);
                delete this.originalPropertyText;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ColorSwatchPopoverIcon, null);
            }
        }
    ]);
    return ColorSwatchPopoverIcon;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var ShadowSwatchPopoverHelper = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ShadowSwatchPopoverHelper, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ShadowSwatchPopoverHelper);
    function ShadowSwatchPopoverHelper(treeElement, swatchPopoverHelper, shadowSwatch) {
        _class_call_check(this, ShadowSwatchPopoverHelper);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "treeElement", void 0);
        _define_property(_assert_this_initialized(_this), "swatchPopoverHelper", void 0);
        _define_property(_assert_this_initialized(_this), "shadowSwatch", void 0);
        _define_property(_assert_this_initialized(_this), "iconElement", void 0);
        _define_property(_assert_this_initialized(_this), "boundShadowChanged", void 0);
        _define_property(_assert_this_initialized(_this), "boundOnScroll", void 0);
        _define_property(_assert_this_initialized(_this), "cssShadowEditor", void 0);
        _define_property(_assert_this_initialized(_this), "scrollerElement", void 0);
        _define_property(_assert_this_initialized(_this), "originalPropertyText", void 0);
        _this.treeElement = treeElement;
        _this.swatchPopoverHelper = swatchPopoverHelper;
        _this.shadowSwatch = shadowSwatch;
        _this.iconElement = shadowSwatch.iconElement();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(_this.iconElement, i18nString(UIStrings.openShadowEditor));
        _this.iconElement.addEventListener('click', _this.iconClick.bind(_assert_this_initialized(_this)), false);
        _this.iconElement.addEventListener('mousedown', function(event) {
            return event.consume();
        }, false);
        _this.boundShadowChanged = _this.shadowChanged.bind(_assert_this_initialized(_this));
        _this.boundOnScroll = _this.onScroll.bind(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(ShadowSwatchPopoverHelper, [
        {
            key: "iconClick",
            value: function iconClick(event) {
                event.consume(true);
                this.showPopover();
            }
        },
        {
            key: "showPopover",
            value: function showPopover() {
                if (this.swatchPopoverHelper.isShowing()) {
                    this.swatchPopoverHelper.hide(true);
                    return;
                }
                this.cssShadowEditor = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.CSSShadowEditor.CSSShadowEditor();
                this.cssShadowEditor.setModel(this.shadowSwatch.model());
                this.cssShadowEditor.addEventListener("ShadowChanged" /* InlineEditor.CSSShadowEditor.Events.ShadowChanged */ , this.boundShadowChanged);
                this.swatchPopoverHelper.show(this.cssShadowEditor, this.iconElement, this.onPopoverHidden.bind(this));
                this.scrollerElement = this.iconElement.enclosingNodeOrSelfWithClass('style-panes-wrapper');
                if (this.scrollerElement) {
                    this.scrollerElement.addEventListener('scroll', this.boundOnScroll, false);
                }
                this.originalPropertyText = this.treeElement.property.propertyText;
                this.treeElement.parentPane().setEditingStyle(true);
                var uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().propertyUILocation(this.treeElement.property, false);
                if (uiLocation) {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation, true);
                }
            }
        },
        {
            key: "shadowChanged",
            value: function shadowChanged(event) {
                this.dispatchEventToListeners("shadowChanged" /* ShadowEvents.ShadowChanged */ , event.data);
            }
        },
        {
            key: "onScroll",
            value: function onScroll(_event) {
                this.swatchPopoverHelper.hide(true);
            }
        },
        {
            key: "onPopoverHidden",
            value: function onPopoverHidden(commitEdit) {
                if (this.scrollerElement) {
                    this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
                }
                if (this.cssShadowEditor) {
                    this.cssShadowEditor.removeEventListener("ShadowChanged" /* InlineEditor.CSSShadowEditor.Events.ShadowChanged */ , this.boundShadowChanged);
                }
                this.cssShadowEditor = undefined;
                var propertyText = commitEdit ? this.treeElement.renderedPropertyText() : this.originalPropertyText || '';
                void this.treeElement.applyStyleText(propertyText, true);
                this.treeElement.parentPane().setEditingStyle(false);
                delete this.originalPropertyText;
            }
        }
    ]);
    return ShadowSwatchPopoverHelper;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var FontEditorSectionManager = /*#__PURE__*/ function() {
    "use strict";
    function FontEditorSectionManager(swatchPopoverHelper, section) {
        _class_call_check(this, FontEditorSectionManager);
        _define_property(this, "treeElementMap", void 0);
        _define_property(this, "swatchPopoverHelper", void 0);
        _define_property(this, "section", void 0);
        _define_property(this, "parentPane", void 0);
        _define_property(this, "fontEditor", void 0);
        _define_property(this, "scrollerElement", void 0);
        _define_property(this, "boundFontChanged", void 0);
        _define_property(this, "boundOnScroll", void 0);
        _define_property(this, "boundResized", void 0);
        this.treeElementMap = new Map();
        this.swatchPopoverHelper = swatchPopoverHelper;
        this.section = section;
        this.parentPane = null;
        this.fontEditor = null;
        this.scrollerElement = null;
        this.boundFontChanged = this.fontChanged.bind(this);
        this.boundOnScroll = this.onScroll.bind(this);
        this.boundResized = this.fontEditorResized.bind(this);
    }
    _create_class(FontEditorSectionManager, [
        {
            key: "fontChanged",
            value: function fontChanged(event) {
                var _event_data = event.data, propertyName = _event_data.propertyName, value = _event_data.value;
                var treeElement = this.treeElementMap.get(propertyName);
                void this.updateFontProperty(propertyName, value, treeElement);
            }
        },
        {
            key: "updateFontProperty",
            value: function updateFontProperty(propertyName, value, treeElement) {
                var _this = this;
                return _async_to_generator(function() {
                    var elementRemoved, styleText, _$propertyName, newProperty;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(treeElement && treeElement.treeOutline && treeElement.valueElement && treeElement.property.parsedOk && treeElement.property.range)) return [
                                    3,
                                    2
                                ];
                                elementRemoved = false;
                                treeElement.valueElement.textContent = value;
                                treeElement.property.value = value;
                                _$propertyName = treeElement.property.name;
                                if (value.length) {
                                    styleText = treeElement.renderedPropertyText();
                                } else {
                                    styleText = '';
                                    elementRemoved = true;
                                    _this.fixIndex(treeElement.property.index);
                                }
                                _this.treeElementMap.set(_$propertyName, treeElement);
                                return [
                                    4,
                                    treeElement.applyStyleText(styleText, true)
                                ];
                            case 1:
                                _state.sent();
                                if (elementRemoved) {
                                    _this.treeElementMap.delete(_$propertyName);
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                if (!value.length) return [
                                    3,
                                    4
                                ];
                                newProperty = _this.section.addNewBlankProperty();
                                if (!newProperty) return [
                                    3,
                                    4
                                ];
                                newProperty.property.name = propertyName;
                                newProperty.property.value = value;
                                newProperty.updateTitle();
                                return [
                                    4,
                                    newProperty.applyStyleText(newProperty.renderedPropertyText(), true)
                                ];
                            case 3:
                                _state.sent();
                                _this.treeElementMap.set(newProperty.property.name, newProperty);
                                _state.label = 4;
                            case 4:
                                _this.section.onpopulate();
                                _this.swatchPopoverHelper.reposition();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "fontEditorResized",
            value: function fontEditorResized() {
                this.swatchPopoverHelper.reposition();
            }
        },
        {
            key: "fixIndex",
            value: function fixIndex(removedIndex) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.treeElementMap.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var treeElement = _step.value;
                        if (treeElement.property.index > removedIndex) {
                            treeElement.property.index -= 1;
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
        },
        {
            key: "createPropertyValueMap",
            value: function createPropertyValueMap() {
                var propertyMap = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.treeElementMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var fontProperty = _step.value;
                        var propertyName = fontProperty[0];
                        var treeElement = fontProperty[1];
                        if (treeElement.property.value.length) {
                            propertyMap.set(propertyName, treeElement.property.value);
                        } else {
                            this.treeElementMap.delete(propertyName);
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
                return propertyMap;
            }
        },
        {
            key: "registerFontProperty",
            value: function registerFontProperty(treeElement) {
                var propertyName = treeElement.property.name;
                if (this.treeElementMap.has(propertyName)) {
                    var treeElementFromMap = this.treeElementMap.get(propertyName);
                    if (!treeElement.overloaded() || treeElementFromMap && treeElementFromMap.overloaded()) {
                        this.treeElementMap.set(propertyName, treeElement);
                    }
                } else {
                    this.treeElementMap.set(propertyName, treeElement);
                }
            }
        },
        {
            key: "showPopover",
            value: function showPopover(iconElement, parentPane) {
                var _this = this;
                return _async_to_generator(function() {
                    var propertyValueMap;
                    return _ts_generator(this, function(_state) {
                        if (_this.swatchPopoverHelper.isShowing()) {
                            _this.swatchPopoverHelper.hide(true);
                            return [
                                2
                            ];
                        }
                        _this.parentPane = parentPane;
                        propertyValueMap = _this.createPropertyValueMap();
                        _this.fontEditor = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.FontEditor.FontEditor(propertyValueMap);
                        _this.fontEditor.addEventListener("FontChanged" /* InlineEditor.FontEditor.Events.FontChanged */ , _this.boundFontChanged);
                        _this.fontEditor.addEventListener("FontEditorResized" /* InlineEditor.FontEditor.Events.FontEditorResized */ , _this.boundResized);
                        _this.swatchPopoverHelper.show(_this.fontEditor, iconElement, _this.onPopoverHidden.bind(_this));
                        _this.scrollerElement = iconElement.enclosingNodeOrSelfWithClass('style-panes-wrapper');
                        if (_this.scrollerElement) {
                            _this.scrollerElement.addEventListener('scroll', _this.boundOnScroll, false);
                        }
                        _this.parentPane.setEditingStyle(true);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "onScroll",
            value: function onScroll() {
                this.swatchPopoverHelper.hide(true);
            }
        },
        {
            key: "onPopoverHidden",
            value: function onPopoverHidden() {
                if (this.scrollerElement) {
                    this.scrollerElement.removeEventListener('scroll', this.boundOnScroll, false);
                }
                this.section.onpopulate();
                if (this.fontEditor) {
                    this.fontEditor.removeEventListener("FontChanged" /* InlineEditor.FontEditor.Events.FontChanged */ , this.boundFontChanged);
                }
                this.fontEditor = null;
                if (this.parentPane) {
                    this.parentPane.setEditingStyle(false);
                }
                this.section.resetToolbars();
                this.section.onpopulate();
            }
        }
    ]);
    return FontEditorSectionManager;
} //# sourceMappingURL=ColorSwatchPopoverIcon.js.map
();


}),

}]);