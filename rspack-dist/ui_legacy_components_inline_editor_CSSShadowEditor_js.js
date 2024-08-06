"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_CSSShadowEditor_js"], {
"./ui/legacy/components/inline_editor/CSSShadowEditor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSLength: function() { return CSSLength; },
  CSSShadowEditor: function() { return CSSShadowEditor; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _cssShadowEditor_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cssShadowEditor.css.js */ "./ui/legacy/components/inline_editor/cssShadowEditor.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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






var UIStrings = {
    /**
     *@description Text that refers to some types
     */ type: 'Type',
    /**
     *@description Text in CSSShadow Editor of the inline editor in the Styles tab
     */ xOffset: 'X offset',
    /**
     *@description Text in CSSShadow Editor of the inline editor in the Styles tab
     */ yOffset: 'Y offset',
    /**
     * @description Text in CSSShadow Editor of the inline editor in the Styles tab. Noun which is a
     * label for an input that allows the user to specify how blurred the box-shadow should be.
     */ blur: 'Blur',
    /**
     *@description Text in CSSShadow Editor of the inline editor in the Styles tab
     */ spread: 'Spread'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/inline_editor/CSSShadowEditor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var maxRange = 20;
var defaultUnit = 'px';
var sliderThumbRadius = 6;
var canvasSize = 88;
var CSS_LENGTH_REGEX = function() {
    var number = '([+-]?(?:[0-9]*[.])?[0-9]+(?:[eE][+-]?[0-9]+)?)';
    var unit = '(ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw)';
    var zero = '[+-]?(?:0*[.])?0+(?:[eE][+-]?[0-9]+)?';
    return new RegExp(number + unit + '|' + zero, 'gi').source;
}();
var CSSLength = /*#__PURE__*/ function() {
    "use strict";
    function CSSLength(amount, unit) {
        _class_call_check(this, CSSLength);
        _define_property(this, "amount", void 0);
        _define_property(this, "unit", void 0);
        this.amount = amount;
        this.unit = unit;
    }
    _create_class(CSSLength, [
        {
            key: "asCSSText",
            value: function asCSSText() {
                return this.amount + this.unit;
            }
        }
    ], [
        {
            key: "parse",
            value: function parse(text) {
                var lengthRegex = new RegExp('^(?:' + CSS_LENGTH_REGEX + ')$', 'i');
                var match = text.match(lengthRegex);
                if (!match) {
                    return null;
                }
                if (match.length > 2 && match[2]) {
                    return new CSSLength(parseFloat(match[1]), match[2]);
                }
                return CSSLength.zero();
            }
        },
        {
            key: "zero",
            value: function zero() {
                return new CSSLength(0, '');
            }
        }
    ]);
    return CSSLength;
}();
var CSSShadowEditor = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(CSSShadowEditor, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(CSSShadowEditor);
    function CSSShadowEditor() {
        _class_call_check(this, CSSShadowEditor);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "typeField", void 0);
        _define_property(_assert_this_initialized(_this), "outsetButton", void 0);
        _define_property(_assert_this_initialized(_this), "insetButton", void 0);
        _define_property(_assert_this_initialized(_this), "xInput", void 0);
        _define_property(_assert_this_initialized(_this), "yInput", void 0);
        _define_property(_assert_this_initialized(_this), "xySlider", void 0);
        _define_property(_assert_this_initialized(_this), "halfCanvasSize", void 0);
        _define_property(_assert_this_initialized(_this), "innerCanvasSize", void 0);
        _define_property(_assert_this_initialized(_this), "blurInput", void 0);
        _define_property(_assert_this_initialized(_this), "blurSlider", void 0);
        _define_property(_assert_this_initialized(_this), "spreadField", void 0);
        _define_property(_assert_this_initialized(_this), "spreadInput", void 0);
        _define_property(_assert_this_initialized(_this), "spreadSlider", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "canvasOrigin", void 0);
        _define_property(_assert_this_initialized(_this), "changedElement", void 0);
        _this.contentElement.tabIndex = 0;
        _this.contentElement.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.dialog('cssShadowEditor').parent('mapped').track({
            keydown: 'Enter|Escape'
        })));
        _this.setDefaultFocusedElement(_this.contentElement);
        _this.typeField = _this.contentElement.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        _this.typeField.createChild('label', 'shadow-editor-label').textContent = i18nString(UIStrings.type);
        _this.outsetButton = _this.typeField.createChild('button', 'shadow-editor-button-left');
        _this.outsetButton.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Outset');
        _this.outsetButton.addEventListener('click', _this.onButtonClick.bind(_assert_this_initialized(_this)), false);
        _this.insetButton = _this.typeField.createChild('button', 'shadow-editor-button-right');
        _this.insetButton.textContent = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Inset');
        _this.insetButton.addEventListener('click', _this.onButtonClick.bind(_assert_this_initialized(_this)), false);
        var xField = _this.contentElement.createChild('div', 'shadow-editor-field');
        _this.xInput = _this.createTextInput(xField, i18nString(UIStrings.xOffset), 'x-offset');
        var yField = _this.contentElement.createChild('div', 'shadow-editor-field');
        _this.yInput = _this.createTextInput(yField, i18nString(UIStrings.yOffset), 'y-offset');
        _this.xySlider = xField.createChild('canvas', 'shadow-editor-2D-slider');
        _this.xySlider.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.slider('xy').track({
            click: true,
            drag: true,
            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight'
        })));
        _this.xySlider.width = canvasSize;
        _this.xySlider.height = canvasSize;
        _this.xySlider.tabIndex = -1;
        _this.halfCanvasSize = canvasSize / 2;
        _this.innerCanvasSize = _this.halfCanvasSize - sliderThumbRadius;
        _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.installDragHandle(_this.xySlider, _this.dragStart.bind(_assert_this_initialized(_this)), _this.dragMove.bind(_assert_this_initialized(_this)), null, 'default');
        _this.xySlider.addEventListener('keydown', _this.onCanvasArrowKey.bind(_assert_this_initialized(_this)), false);
        _this.xySlider.addEventListener('blur', _this.onCanvasBlur.bind(_assert_this_initialized(_this)), false);
        var blurField = _this.contentElement.createChild('div', 'shadow-editor-field shadow-editor-flex-field shadow-editor-blur-field');
        _this.blurInput = _this.createTextInput(blurField, i18nString(UIStrings.blur), 'blur');
        _this.blurSlider = _this.createSlider(blurField, 'blur');
        _this.spreadField = _this.contentElement.createChild('div', 'shadow-editor-field shadow-editor-flex-field');
        _this.spreadInput = _this.createTextInput(_this.spreadField, i18nString(UIStrings.spread), 'spread');
        _this.spreadSlider = _this.createSlider(_this.spreadField, 'spread');
        return _this;
    }
    _create_class(CSSShadowEditor, [
        {
            key: "createTextInput",
            value: function createTextInput(field, propertyName, jslogContext) {
                var label = field.createChild('label', 'shadow-editor-label');
                label.textContent = propertyName;
                label.setAttribute('for', propertyName);
                var textInput = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('shadow-editor-text-input', 'text');
                field.appendChild(textInput);
                textInput.id = propertyName;
                textInput.addEventListener('keydown', this.handleValueModification.bind(this), false);
                textInput.addEventListener('wheel', this.handleValueModification.bind(this), false);
                textInput.addEventListener('input', this.onTextInput.bind(this), false);
                textInput.addEventListener('blur', this.onTextBlur.bind(this), false);
                textInput.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value().track({
                    change: true,
                    keydown: 'ArrowUp|ArrowDown'
                }).context(jslogContext)));
                return textInput;
            }
        },
        {
            key: "createSlider",
            value: function createSlider(field, jslogContext) {
                var slider = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createSlider(0, maxRange, -1);
                slider.addEventListener('input', this.onSliderInput.bind(this), false);
                slider.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.slider().track({
                    click: true,
                    drag: true
                }).context(jslogContext)));
                field.appendChild(slider);
                return slider;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _cssShadowEditor_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.updateUI();
            }
        },
        {
            key: "setModel",
            value: function setModel(model) {
                this.model = model;
                this.typeField.classList.toggle('hidden', !model.isBoxShadow());
                this.spreadField.classList.toggle('hidden', !model.isBoxShadow());
                this.updateUI();
            }
        },
        {
            key: "updateUI",
            value: function updateUI() {
                this.updateButtons();
                this.xInput.value = this.model.offsetX().asCSSText();
                this.yInput.value = this.model.offsetY().asCSSText();
                this.blurInput.value = this.model.blurRadius().asCSSText();
                this.spreadInput.value = this.model.spreadRadius().asCSSText();
                this.blurSlider.value = this.model.blurRadius().amount.toString();
                this.spreadSlider.value = this.model.spreadRadius().amount.toString();
                this.updateCanvas(false);
            }
        },
        {
            key: "updateButtons",
            value: function updateButtons() {
                this.insetButton.classList.toggle('enabled', this.model.inset());
                this.outsetButton.classList.toggle('enabled', !this.model.inset());
            }
        },
        {
            key: "updateCanvas",
            value: function updateCanvas(drawFocus) {
                var context = this.xySlider.getContext('2d');
                if (!context) {
                    throw new Error('Unable to obtain canvas context');
                }
                context.clearRect(0, 0, this.xySlider.width, this.xySlider.height);
                // Draw dashed axes.
                context.save();
                context.setLineDash([
                    1,
                    1
                ]);
                context.strokeStyle = 'rgba(210, 210, 210, 0.8)';
                context.beginPath();
                context.moveTo(this.halfCanvasSize, 0);
                context.lineTo(this.halfCanvasSize, canvasSize);
                context.moveTo(0, this.halfCanvasSize);
                context.lineTo(canvasSize, this.halfCanvasSize);
                context.stroke();
                context.restore();
                var thumbPoint = this.sliderThumbPosition();
                // Draw 2D slider line.
                context.save();
                context.translate(this.halfCanvasSize, this.halfCanvasSize);
                context.lineWidth = 2;
                context.strokeStyle = 'rgba(130, 130, 130, 0.75)';
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(thumbPoint.x, thumbPoint.y);
                context.stroke();
                // Draw 2D slider thumb.
                if (drawFocus) {
                    context.beginPath();
                    context.fillStyle = 'rgba(66, 133, 244, 0.4)';
                    context.arc(thumbPoint.x, thumbPoint.y, sliderThumbRadius + 2, 0, 2 * Math.PI);
                    context.fill();
                }
                context.beginPath();
                context.fillStyle = '#4285F4';
                context.arc(thumbPoint.x, thumbPoint.y, sliderThumbRadius, 0, 2 * Math.PI);
                context.fill();
                context.restore();
            }
        },
        {
            key: "onButtonClick",
            value: function onButtonClick(event) {
                var insetClicked = event.currentTarget === this.insetButton;
                if (insetClicked && this.model.inset() || !insetClicked && !this.model.inset()) {
                    return;
                }
                this.model.setInset(insetClicked);
                this.updateButtons();
                this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */ , this.model);
            }
        },
        {
            key: "handleValueModification",
            value: function handleValueModification(event) {
                var target = event.currentTarget;
                var modifiedValue = _legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createReplacementString(target.value, event, customNumberHandler);
                if (!modifiedValue) {
                    return;
                }
                var length = CSSLength.parse(modifiedValue);
                if (!length) {
                    return;
                }
                if (event.currentTarget === this.blurInput && length.amount < 0) {
                    length.amount = 0;
                }
                target.value = length.asCSSText();
                target.selectionStart = 0;
                target.selectionEnd = target.value.length;
                this.onTextInput(event);
                event.consume(true);
                function customNumberHandler(prefix, number, suffix) {
                    if (!suffix.length) {
                        suffix = defaultUnit;
                    }
                    return prefix + number + suffix;
                }
            }
        },
        {
            key: "onTextInput",
            value: function onTextInput(event) {
                var currentTarget = event.currentTarget;
                this.changedElement = currentTarget;
                this.changedElement.classList.remove('invalid');
                var length = CSSLength.parse(currentTarget.value);
                if (!length || currentTarget === this.blurInput && length.amount < 0) {
                    return;
                }
                if (currentTarget === this.xInput) {
                    this.model.setOffsetX(length);
                    this.updateCanvas(false);
                } else if (currentTarget === this.yInput) {
                    this.model.setOffsetY(length);
                    this.updateCanvas(false);
                } else if (currentTarget === this.blurInput) {
                    this.model.setBlurRadius(length);
                    this.blurSlider.value = length.amount.toString();
                } else if (currentTarget === this.spreadInput) {
                    this.model.setSpreadRadius(length);
                    this.spreadSlider.value = length.amount.toString();
                }
                this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */ , this.model);
            }
        },
        {
            key: "onTextBlur",
            value: function onTextBlur() {
                if (!this.changedElement) {
                    return;
                }
                var length = !this.changedElement.value.trim() ? CSSLength.zero() : CSSLength.parse(this.changedElement.value);
                if (!length) {
                    length = CSSLength.parse(this.changedElement.value + defaultUnit);
                }
                if (!length) {
                    this.changedElement.classList.add('invalid');
                    this.changedElement = null;
                    return;
                }
                if (this.changedElement === this.xInput) {
                    this.model.setOffsetX(length);
                    this.xInput.value = length.asCSSText();
                    this.updateCanvas(false);
                } else if (this.changedElement === this.yInput) {
                    this.model.setOffsetY(length);
                    this.yInput.value = length.asCSSText();
                    this.updateCanvas(false);
                } else if (this.changedElement === this.blurInput) {
                    if (length.amount < 0) {
                        length = CSSLength.zero();
                    }
                    this.model.setBlurRadius(length);
                    this.blurInput.value = length.asCSSText();
                    this.blurSlider.value = length.amount.toString();
                } else if (this.changedElement === this.spreadInput) {
                    this.model.setSpreadRadius(length);
                    this.spreadInput.value = length.asCSSText();
                    this.spreadSlider.value = length.amount.toString();
                }
                this.changedElement = null;
                this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */ , this.model);
            }
        },
        {
            key: "onSliderInput",
            value: function onSliderInput(event) {
                if (event.currentTarget === this.blurSlider) {
                    this.model.setBlurRadius(new CSSLength(Number(this.blurSlider.value), this.model.blurRadius().unit || defaultUnit));
                    this.blurInput.value = this.model.blurRadius().asCSSText();
                    this.blurInput.classList.remove('invalid');
                } else if (event.currentTarget === this.spreadSlider) {
                    this.model.setSpreadRadius(new CSSLength(Number(this.spreadSlider.value), this.model.spreadRadius().unit || defaultUnit));
                    this.spreadInput.value = this.model.spreadRadius().asCSSText();
                    this.spreadInput.classList.remove('invalid');
                }
                this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */ , this.model);
            }
        },
        {
            key: "dragStart",
            value: function dragStart(event) {
                this.xySlider.focus();
                this.updateCanvas(true);
                this.canvasOrigin = new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(this.xySlider.getBoundingClientRect().left + this.halfCanvasSize, this.xySlider.getBoundingClientRect().top + this.halfCanvasSize);
                var clickedPoint = new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(event.x - this.canvasOrigin.x, event.y - this.canvasOrigin.y);
                var thumbPoint = this.sliderThumbPosition();
                if (clickedPoint.distanceTo(thumbPoint) >= sliderThumbRadius) {
                    this.dragMove(event);
                }
                return true;
            }
        },
        {
            key: "dragMove",
            value: function dragMove(event) {
                var point = new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(event.x - this.canvasOrigin.x, event.y - this.canvasOrigin.y);
                if (event.shiftKey) {
                    point = this.snapToClosestDirection(point);
                }
                var constrainedPoint = this.constrainPoint(point, this.innerCanvasSize);
                var newX = Math.round(constrainedPoint.x / this.innerCanvasSize * maxRange);
                var newY = Math.round(constrainedPoint.y / this.innerCanvasSize * maxRange);
                if (event.shiftKey) {
                    this.model.setOffsetX(new CSSLength(newX, this.model.offsetX().unit || defaultUnit));
                    this.model.setOffsetY(new CSSLength(newY, this.model.offsetY().unit || defaultUnit));
                } else {
                    if (!event.altKey) {
                        this.model.setOffsetX(new CSSLength(newX, this.model.offsetX().unit || defaultUnit));
                    }
                    if (!_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                        this.model.setOffsetY(new CSSLength(newY, this.model.offsetY().unit || defaultUnit));
                    }
                }
                this.xInput.value = this.model.offsetX().asCSSText();
                this.yInput.value = this.model.offsetY().asCSSText();
                this.xInput.classList.remove('invalid');
                this.yInput.classList.remove('invalid');
                this.updateCanvas(true);
                this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */ , this.model);
            }
        },
        {
            key: "onCanvasBlur",
            value: function onCanvasBlur() {
                this.updateCanvas(false);
            }
        },
        {
            key: "onCanvasArrowKey",
            value: function onCanvasArrowKey(event) {
                var keyboardEvent = event;
                var shiftX = 0;
                var shiftY = 0;
                if (keyboardEvent.key === 'ArrowRight') {
                    shiftX = 1;
                } else if (keyboardEvent.key === 'ArrowLeft') {
                    shiftX = -1;
                } else if (keyboardEvent.key === 'ArrowUp') {
                    shiftY = -1;
                } else if (keyboardEvent.key === 'ArrowDown') {
                    shiftY = 1;
                }
                if (!shiftX && !shiftY) {
                    return;
                }
                event.consume(true);
                if (shiftX) {
                    var offsetX = this.model.offsetX();
                    var newAmount = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.clamp(offsetX.amount + shiftX, -maxRange, maxRange);
                    if (newAmount === offsetX.amount) {
                        return;
                    }
                    this.model.setOffsetX(new CSSLength(newAmount, offsetX.unit || defaultUnit));
                    this.xInput.value = this.model.offsetX().asCSSText();
                    this.xInput.classList.remove('invalid');
                }
                if (shiftY) {
                    var offsetY = this.model.offsetY();
                    var newAmount1 = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.clamp(offsetY.amount + shiftY, -maxRange, maxRange);
                    if (newAmount1 === offsetY.amount) {
                        return;
                    }
                    this.model.setOffsetY(new CSSLength(newAmount1, offsetY.unit || defaultUnit));
                    this.yInput.value = this.model.offsetY().asCSSText();
                    this.yInput.classList.remove('invalid');
                }
                this.updateCanvas(true);
                this.dispatchEventToListeners("ShadowChanged" /* Events.ShadowChanged */ , this.model);
            }
        },
        {
            key: "constrainPoint",
            value: function constrainPoint(point, max) {
                if (Math.abs(point.x) <= max && Math.abs(point.y) <= max) {
                    return new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(point.x, point.y);
                }
                return point.scale(max / Math.max(Math.abs(point.x), Math.abs(point.y)));
            }
        },
        {
            key: "snapToClosestDirection",
            value: function snapToClosestDirection(point) {
                var minDistance = Number.MAX_VALUE;
                var closestPoint = point;
                var directions = [
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(0, -1),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(1, -1),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(1, 0),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(1, 1)
                ];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = directions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var direction = _step.value;
                        var projection = point.projectOn(direction);
                        var distance = point.distanceTo(projection);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestPoint = projection;
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
                return closestPoint;
            }
        },
        {
            key: "sliderThumbPosition",
            value: function sliderThumbPosition() {
                var x = this.model.offsetX().amount / maxRange * this.innerCanvasSize;
                var y = this.model.offsetY().amount / maxRange * this.innerCanvasSize;
                return this.constrainPoint(new _legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Point(x, y), this.innerCanvasSize);
            }
        }
    ]);
    return CSSShadowEditor;
} //# sourceMappingURL=CSSShadowEditor.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox));


}),
"./ui/legacy/components/inline_editor/cssShadowEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  user-select: none;\n  padding: 4px 12px 12px;\n  border: 1px solid transparent;\n}\n\n.shadow-editor-field {\n  height: 24px;\n  margin-top: 8px;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n\n.shadow-editor-field:last-of-type {\n  margin-bottom: 8px;\n}\n\n.shadow-editor-flex-field {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.shadow-editor-field.shadow-editor-blur-field {\n  margin-top: 40px;\n}\n\n.shadow-editor-2D-slider {\n  position: absolute;\n  height: 88px;\n  width: 88px;\n  border: 1px solid var(--divider-line);\n  border-radius: 2px;\n}\n\n.shadow-editor-label {\n  display: inline-block;\n  width: 52px;\n  height: 24px;\n  line-height: 24px;\n  margin-right: 8px;\n  text-align: right;\n}\n\n.shadow-editor-button-left,\n.shadow-editor-button-right {\n  width: 74px;\n  height: 24px;\n  padding: 3px 7px;\n  line-height: 16px;\n  border: 1px solid var(--divider-line);\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n  text-align: center;\n  font-weight: 500;\n}\n\n.shadow-editor-button-left {\n  border-radius: 2px 0 0 2px;\n}\n\n.shadow-editor-button-right {\n  border-radius: 0 2px 2px 0;\n  border-left-width: 0;\n}\n\n.shadow-editor-button-left:hover,\n.shadow-editor-button-right:hover {\n  box-shadow: 0 1px 1px var(--color-background-elevation-1);\n}\n\n.shadow-editor-button-left:focus,\n.shadow-editor-button-right:focus {\n  background-color: var(--color-background-elevation-1);\n}\n\n.shadow-editor-button-left.enabled,\n.shadow-editor-button-right.enabled {\n  --override-button-text-color: #fff;\n\n  background-color: var(--color-primary-old);\n  color: var(--override-button-text-color);\n}\n\n.shadow-editor-button-left.enabled:focus,\n.shadow-editor-button-right.enabled:focus {\n  background-color: var(--color-primary-variant);\n}\n\n.shadow-editor-text-input {\n  width: 52px;\n  margin-right: 8px;\n  text-align: right;\n  box-shadow: var(--legacy-focus-ring-inactive-shadow);\n}\n\n@media (forced-colors: active) {\n  .shadow-editor-button-left:hover,\n  .shadow-editor-button-left.enabled:focus,\n  .shadow-editor-button-right:hover .shadow-editor-button-left.enabled,\n  .shadow-editor-button-right.enabled,\n  .shadow-editor-button-right.enabled:focus {\n    forced-color-adjust: none;\n    background-color: Highlight;\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=cssShadowEditor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);