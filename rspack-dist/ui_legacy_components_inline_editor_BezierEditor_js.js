"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_BezierEditor_js"], {
"./ui/legacy/components/inline_editor/AnimationTimingModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimingModel: function() { return AnimationTimingModel; },
  LINEAR_BEZIER: function() { return LINEAR_BEZIER; }
});
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
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


// Provides a unified interface for both linear easing and cubic bezier
// models and handles the parsing for animation-timing texts.
var AnimationTimingModel = /*#__PURE__*/ function() {
    "use strict";
    function AnimationTimingModel() {
        _class_call_check(this, AnimationTimingModel);
    }
    _create_class(AnimationTimingModel, null, [
        {
            key: "parse",
            value: function parse(text) {
                // Try to parse as a CSSLinearEasingModel first.
                // The reason is: `linear` keyword is valid in both
                // models, however we want to treat it as a `CSSLinearEasingModel`
                // for visualizing in animation timing tool.
                var cssLinearEasingModel = _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_1__.CSSLinearEasingModel.parse(text);
                if (cssLinearEasingModel) {
                    return cssLinearEasingModel;
                }
                return _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier.parse(text) || null;
            }
        }
    ]);
    return AnimationTimingModel;
}();
var LINEAR_BEZIER = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.LINEAR_BEZIER; //# sourceMappingURL=AnimationTimingModel.js.map


}),
"./ui/legacy/components/inline_editor/BezierEditor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierEditor: function() { return BezierEditor; },
  Presets: function() { return Presets; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationTimingModel.js */ "./ui/legacy/components/inline_editor/AnimationTimingModel.js");
/* harmony import */var _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimingUI.js */ "./ui/legacy/components/inline_editor/AnimationTimingUI.js");
/* harmony import */var _bezierEditor_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bezierEditor.css.js */ "./ui/legacy/components/inline_editor/bezierEditor.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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






var PREVIEW_ANIMATION_DEBOUNCE_DELAY = 300;
var BezierEditor = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(BezierEditor, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(BezierEditor);
    function BezierEditor(model) {
        _class_call_check(this, BezierEditor);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "previewElement", void 0);
        _define_property(_assert_this_initialized(_this), "previewOnion", void 0);
        _define_property(_assert_this_initialized(_this), "outerContainer", void 0);
        _define_property(_assert_this_initialized(_this), "selectedCategory", void 0);
        _define_property(_assert_this_initialized(_this), "presetsContainer", void 0);
        _define_property(_assert_this_initialized(_this), "presetUI", void 0);
        _define_property(_assert_this_initialized(_this), "presetCategories", void 0);
        _define_property(_assert_this_initialized(_this), "animationTimingUI", void 0);
        _define_property(_assert_this_initialized(_this), "header", void 0);
        _define_property(_assert_this_initialized(_this), "label", void 0);
        _define_property(_assert_this_initialized(_this), "previewAnimation", void 0);
        _define_property(_assert_this_initialized(_this), "debouncedStartPreviewAnimation", void 0);
        _this.model = model;
        _this.contentElement.tabIndex = 0;
        _this.contentElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.dialog('bezierEditor').parent('mapped').track({
            keydown: 'Enter|Escape'
        })));
        _this.setDefaultFocusedElement(_this.contentElement);
        _this.element.style.overflowY = 'auto';
        // Preview UI
        _this.previewElement = _this.contentElement.createChild('div', 'bezier-preview-container');
        _this.previewElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.preview().track({
            click: true
        })));
        _this.previewElement.createChild('div', 'bezier-preview-animation');
        _this.previewElement.addEventListener('click', _this.startPreviewAnimation.bind(_assert_this_initialized(_this)));
        _this.previewOnion = _this.contentElement.createChild('div', 'bezier-preview-onion');
        _this.previewOnion.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.preview().track({
            click: true
        })));
        _this.previewOnion.addEventListener('click', _this.startPreviewAnimation.bind(_assert_this_initialized(_this)));
        _this.outerContainer = _this.contentElement.createChild('div', 'bezier-container');
        // Presets UI
        _this.selectedCategory = null;
        _this.presetsContainer = _this.outerContainer.createChild('div', 'bezier-presets');
        _this.presetUI = new _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_4__.PresetUI();
        _this.presetCategories = [];
        for(var i = 0; i < Presets.length; i++){
            var category = _this.createCategory(Presets[i]);
            if (!category) {
                continue;
            }
            _this.presetCategories[i] = category;
            _this.presetsContainer.appendChild(_this.presetCategories[i].icon);
        }
        // Curve UI
        _this.debouncedStartPreviewAnimation = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Debouncer.debounce(_this.startPreviewAnimation.bind(_assert_this_initialized(_this)), PREVIEW_ANIMATION_DEBOUNCE_DELAY);
        _this.animationTimingUI = new _AnimationTimingUI_js__WEBPACK_IMPORTED_MODULE_4__.AnimationTimingUI({
            model: _this.model,
            onChange: function(model) {
                _this.setModel(model);
                _this.onchange();
                _this.unselectPresets();
                _this.debouncedStartPreviewAnimation();
            }
        });
        _this.animationTimingUI.element().setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.bezierCurveEditor().track({
            click: true,
            drag: true
        })));
        _this.outerContainer.appendChild(_this.animationTimingUI.element());
        _this.header = _this.contentElement.createChild('div', 'bezier-header');
        var minus = _this.createPresetModifyIcon(_this.header, 'bezier-preset-minus', 'M 12 6 L 8 10 L 12 14');
        minus.addEventListener('click', _this.presetModifyClicked.bind(_assert_this_initialized(_this), false));
        minus.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('bezier.prev-preset').track({
            click: true
        })));
        var plus = _this.createPresetModifyIcon(_this.header, 'bezier-preset-plus', 'M 8 6 L 12 10 L 8 14');
        plus.addEventListener('click', _this.presetModifyClicked.bind(_assert_this_initialized(_this), true));
        plus.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.action('bezier.next-preset').track({
            click: true
        })));
        _this.label = _this.header.createChild('span', 'source-code bezier-display-value');
        return _this;
    }
    _create_class(BezierEditor, [
        {
            key: "setModel",
            value: function setModel(model) {
                var _this_animationTimingUI;
                this.model = model;
                (_this_animationTimingUI = this.animationTimingUI) === null || _this_animationTimingUI === void 0 ? void 0 : _this_animationTimingUI.setModel(this.model);
                this.updateUI();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _bezierEditor_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.unselectPresets();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // Check if bezier matches a preset
                    for(var _iterator = this.presetCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var category = _step.value;
                        for(var i = 0; i < category.presets.length; i++){
                            if (this.model.asCSSText() === category.presets[i].value) {
                                category.presetIndex = i;
                                this.presetCategorySelected(category);
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
                this.updateUI();
                this.startPreviewAnimation();
            }
        },
        {
            key: "onchange",
            value: function onchange() {
                this.updateUI();
                this.dispatchEventToListeners("BezierChanged" /* Events.BezierChanged */ , this.model.asCSSText());
            }
        },
        {
            key: "updateUI",
            value: function updateUI() {
                var _this_animationTimingUI;
                var labelText = this.selectedCategory ? this.selectedCategory.presets[this.selectedCategory.presetIndex].name : this.model.asCSSText().replace(/\s(-\d\.\d)/g, '$1');
                this.label.textContent = labelText;
                (_this_animationTimingUI = this.animationTimingUI) === null || _this_animationTimingUI === void 0 ? void 0 : _this_animationTimingUI.draw();
            }
        },
        {
            key: "createCategory",
            value: function createCategory(presetGroup) {
                var pivot = _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimingModel.parse(presetGroup[0].value);
                if (!pivot) {
                    return null;
                }
                var presetElement = document.createElement('div');
                presetElement.classList.add('bezier-preset-category');
                presetElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.bezierPresetCategory().track({
                    click: true
                }).context(presetGroup[0].name)));
                var iconElement = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(presetElement, 'svg', 'bezier-preset monospace');
                var category = {
                    presets: presetGroup,
                    presetIndex: 0,
                    icon: presetElement
                };
                this.presetUI.draw(pivot, iconElement);
                iconElement.addEventListener('click', this.presetCategorySelected.bind(this, category));
                return category;
            }
        },
        {
            key: "createPresetModifyIcon",
            value: function createPresetModifyIcon(parentElement, className, drawPath) {
                var icon = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(parentElement, 'svg', 'bezier-preset-modify ' + className);
                icon.setAttribute('width', '20');
                icon.setAttribute('height', '20');
                var path = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(icon, 'path');
                path.setAttribute('d', drawPath);
                return icon;
            }
        },
        {
            key: "unselectPresets",
            value: function unselectPresets() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.presetCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var category = _step.value;
                        category.icon.classList.remove('bezier-preset-selected');
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
                this.selectedCategory = null;
                this.header.classList.remove('bezier-header-active');
            }
        },
        {
            key: "presetCategorySelected",
            value: function presetCategorySelected(category, event) {
                if (this.selectedCategory === category) {
                    return;
                }
                this.unselectPresets();
                this.header.classList.add('bezier-header-active');
                this.selectedCategory = category;
                this.selectedCategory.icon.classList.add('bezier-preset-selected');
                var newModel = _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimingModel.parse(category.presets[category.presetIndex].value);
                if (newModel) {
                    this.setModel(newModel);
                    this.onchange();
                    this.startPreviewAnimation();
                }
                if (event) {
                    event.consume(true);
                }
            }
        },
        {
            key: "presetModifyClicked",
            value: function presetModifyClicked(intensify, _event) {
                if (this.selectedCategory === null) {
                    return;
                }
                var length = this.selectedCategory.presets.length;
                this.selectedCategory.presetIndex = (this.selectedCategory.presetIndex + (intensify ? 1 : -1) + length) % length;
                var selectedPreset = this.selectedCategory.presets[this.selectedCategory.presetIndex].value;
                var newModel = _AnimationTimingModel_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimingModel.parse(selectedPreset);
                if (newModel) {
                    this.setModel(newModel);
                    this.onchange();
                    this.startPreviewAnimation();
                }
            }
        },
        {
            key: "startPreviewAnimation",
            value: function startPreviewAnimation() {
                this.previewOnion.removeChildren();
                if (this.previewAnimation) {
                    this.previewAnimation.cancel();
                }
                var animationDuration = 1600;
                var numberOnionSlices = 20;
                var keyframes = [
                    {
                        offset: 0,
                        transform: 'translateX(0px)',
                        opacity: 1
                    },
                    {
                        offset: 1,
                        transform: 'translateX(218px)',
                        opacity: 1
                    }
                ];
                this.previewAnimation = this.previewElement.animate(keyframes, {
                    easing: this.model.asCSSText(),
                    duration: animationDuration
                });
                this.previewOnion.removeChildren();
                for(var i = 0; i <= numberOnionSlices; i++){
                    var slice = this.previewOnion.createChild('div', 'bezier-preview-animation');
                    var player = slice.animate([
                        {
                            transform: 'translateX(0px)',
                            easing: this.model.asCSSText()
                        },
                        {
                            transform: 'translateX(218px)'
                        }
                    ], {
                        duration: animationDuration,
                        fill: 'forwards'
                    });
                    player.pause();
                    player.currentTime = animationDuration * i / numberOnionSlices;
                }
            }
        }
    ]);
    return BezierEditor;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox));
var Presets = [
    [
        {
            name: 'linear',
            value: 'linear'
        },
        {
            name: 'elastic',
            value: 'linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)'
        },
        {
            name: 'bounce',
            value: 'linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%)'
        },
        {
            name: 'emphasized',
            value: 'linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)'
        }
    ],
    [
        {
            name: 'ease-in-out',
            value: 'ease-in-out'
        },
        {
            name: 'In Out · Sine',
            value: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)'
        },
        {
            name: 'In Out · Quadratic',
            value: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)'
        },
        {
            name: 'In Out · Cubic',
            value: 'cubic-bezier(0.65, 0.05, 0.36, 1)'
        },
        {
            name: 'Fast Out, Slow In',
            value: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        {
            name: 'In Out · Back',
            value: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        }
    ],
    [
        {
            name: 'Fast Out, Linear In',
            value: 'cubic-bezier(0.4, 0, 1, 1)'
        },
        {
            name: 'ease-in',
            value: 'ease-in'
        },
        {
            name: 'In · Sine',
            value: 'cubic-bezier(0.47, 0, 0.75, 0.72)'
        },
        {
            name: 'In · Quadratic',
            value: 'cubic-bezier(0.55, 0.09, 0.68, 0.53)'
        },
        {
            name: 'In · Cubic',
            value: 'cubic-bezier(0.55, 0.06, 0.68, 0.19)'
        },
        {
            name: 'In · Back',
            value: 'cubic-bezier(0.6, -0.28, 0.74, 0.05)'
        }
    ],
    [
        {
            name: 'ease-out',
            value: 'ease-out'
        },
        {
            name: 'Out · Sine',
            value: 'cubic-bezier(0.39, 0.58, 0.57, 1)'
        },
        {
            name: 'Out · Quadratic',
            value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        },
        {
            name: 'Out · Cubic',
            value: 'cubic-bezier(0.22, 0.61, 0.36, 1)'
        },
        {
            name: 'Linear Out, Slow In',
            value: 'cubic-bezier(0, 0, 0.2, 1)'
        },
        {
            name: 'Out · Back',
            value: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'
        }
    ]
]; //# sourceMappingURL=BezierEditor.js.map


}),
"./ui/legacy/components/inline_editor/bezierEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  width: 270px;\n  height: 350px;\n  user-select: none;\n  padding: 16px;\n  overflow: hidden;\n}\n\n.bezier-preset-selected > svg {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.bezier-container {\n  --override-bezier-control-color: var(--sys-color-purple-bright);\n\n  display: flex;\n  margin-top: 38px;\n  flex-shrink: 0;\n  /* overflown bezier visualization must be on top of the source text */\n  z-index: 2;\n  background-image: radial-gradient(circle, var(--sys-color-surface-variant) 1px, var(--color-background-inverted-opacity-0) 1px);\n  background-size: 17px 17px;\n  background-position: -5px -10px;\n}\n\n.bezier-preset {\n  width: 50px;\n  height: 50px;\n  padding: 5px;\n  margin: auto;\n  background-color: var(--sys-color-surface1);\n  border-radius: 3px;\n}\n\n.bezier-preset line.bezier-control-line {\n  stroke: var(--sys-color-token-subtle);\n  stroke-width: 1;\n  stroke-linecap: round;\n  fill: none;\n}\n\n.bezier-preset circle.bezier-control-circle {\n  fill: var(--sys-color-token-subtle);\n}\n\n.bezier-preset path.bezier-path {\n  stroke: var(--sys-color-inverse-surface);\n  stroke-width: 2;\n  stroke-linecap: round;\n  fill: none;\n}\n\n.bezier-preset-selected path.bezier-path,\n.bezier-preset-selected line.bezier-control-line {\n  stroke: var(--sys-color-on-tonal-container);\n}\n\n.bezier-preset-selected circle.bezier-control-circle {\n  fill: var(--sys-color-on-tonal-container);\n}\n\n.bezier-curve line.linear-line {\n  stroke: var(--sys-color-neutral-outline);\n  stroke-width: 2;\n  stroke-linecap: round;\n  fill: none;\n}\n\n.bezier-curve line.bezier-control-line {\n  stroke: var(--override-bezier-control-color);\n  stroke-width: 2;\n  stroke-linecap: round;\n  fill: none;\n  opacity: 60%;\n}\n\n.bezier-curve circle.bezier-control-circle {\n  fill: var(--override-bezier-control-color);\n  cursor: pointer;\n}\n\n.bezier-curve path.bezier-path {\n  stroke: var(--sys-color-inverse-surface);\n  stroke-width: 3;\n  stroke-linecap: round;\n  fill: none;\n}\n\n.bezier-curve path.bezier-path.linear-path {\n  cursor: pointer;\n}\n\n.bezier-preview-container {\n  position: relative;\n  background-color: var(--sys-color-cdt-base-container);\n  overflow: hidden;\n  border-radius: 20px;\n  width: 200%;\n  height: 20px;\n  z-index: 2;\n  flex-shrink: 0;\n  opacity: 0%;\n}\n\n.bezier-preview-animation {\n  background-color: var(--sys-color-purple-bright);\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  position: absolute;\n}\n\n.bezier-preview-onion {\n  margin-top: -20px;\n  position: relative;\n  z-index: 1;\n}\n\n.bezier-preview-onion > .bezier-preview-animation {\n  opacity: 10%;\n}\n\nsvg.bezier-preset-modify {\n  background-color: var(--sys-color-cdt-base-container);\n  border-radius: 35px;\n  display: inline-block;\n  visibility: hidden;\n  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  position: absolute;\n}\n\nsvg.bezier-preset-modify:hover,\n.bezier-preset:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.bezier-preset-selected .bezier-preset:hover {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.bezier-preset-modify path {\n  stroke-width: 2;\n  stroke: var(--sys-color-on-surface-subtle);\n  fill: none;\n}\n\n.bezier-presets {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.bezier-preset-selected .bezier-preset-modify {\n  opacity: 100%;\n}\n\n.bezier-preset-category {\n  width: 50px;\n  cursor: pointer;\n  transition: transform 100ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nspan.bezier-display-value {\n  width: 100%;\n  user-select: text;\n  display: block;\n  text-align: center;\n  line-height: 20px;\n  min-height: 20px;\n  cursor: text;\n}\n\nsvg.bezier-curve {\n  margin-left: 32px;\n  margin-top: -8px;\n}\n\nsvg.bezier-curve.linear {\n  margin-top: 42px;\n  overflow: visible;\n}\n\nsvg.bezier-preset-modify.bezier-preset-plus {\n  right: 0;\n}\n\n.bezier-header {\n  margin-top: 16px;\n  z-index: 1;\n}\n\nsvg.bezier-preset-modify:active {\n  transform: scale(1.1);\n  background-color: var(--sys-color-state-ripple-neutral-on-subtle);\n}\n\n.bezier-preset-category:active {\n  transform: scale(1.05);\n}\n\n.bezier-header-active > svg.bezier-preset-modify {\n  visibility: visible;\n}\n\n.bezier-preset-modify:active path {\n  stroke: var(--sys-color-on-surface-subtle);\n}\n\n/*# sourceURL=bezierEditor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);