"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_color_picker_ContrastDetails_js"], {
"./ui/legacy/components/color_picker/ContrastDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContrastDetails: function() { return ContrastDetails; },
  Swatch: function() { return Swatch; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
     *@description Label for when no contrast information is available in the color picker
     */ noContrastInformationAvailable: 'No contrast information available',
    /**
     *@description Text of a DOM element in Contrast Details of the Color Picker
     */ contrastRatio: 'Contrast ratio',
    /**
     *@description Text to show more content
     */ showMore: 'Show more',
    /**
     *@description Choose bg color text content in Contrast Details of the Color Picker
     */ pickBackgroundColor: 'Pick background color',
    /**
     *@description Tooltip text that appears when hovering over largeicon eyedropper button in Contrast Details of the Color Picker
     */ toggleBackgroundColorPicker: 'Toggle background color picker',
    /**
     *@description Text of a button in Contrast Details of the Color Picker
     *@example {rgba(0 0 0 / 100%) } PH1
     */ useSuggestedColorStoFixLow: 'Use suggested color {PH1}to fix low contrast',
    /**
     *@description Label for the APCA contrast in Color Picker
     */ apca: 'APCA',
    /**
     *@description Label aa text content in Contrast Details of the Color Picker
     */ aa: 'AA',
    /**
     *@description Text that starts with a colon and includes a placeholder
     *@example {3.0} PH1
     */ placeholderWithColon: ': {PH1}',
    /**
     *@description Label aaa text content in Contrast Details of the Color Picker
     */ aaa: 'AAA',
    /**
     *@description Text to show less content
     */ showLess: 'Show less'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('ui/legacy/components/color_picker/ContrastDetails.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var ContrastDetails = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ContrastDetails, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ContrastDetails);
    function ContrastDetails(contrastInfo, contentElement, toggleMainColorPickerCallback, expandedChangedCallback, colorSelectedCallback) {
        _class_call_check(this, ContrastDetails);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "contrastInfo", void 0);
        _define_property(_assert_this_initialized(_this), "elementInternal", void 0);
        _define_property(_assert_this_initialized(_this), "toggleMainColorPicker", void 0);
        _define_property(_assert_this_initialized(_this), "expandedChangedCallback", void 0);
        _define_property(_assert_this_initialized(_this), "colorSelectedCallback", void 0);
        _define_property(_assert_this_initialized(_this), "expandedInternal", void 0);
        _define_property(_assert_this_initialized(_this), "passesAA", void 0);
        _define_property(_assert_this_initialized(_this), "contrastUnknown", void 0);
        _define_property(_assert_this_initialized(_this), "visibleInternal", void 0);
        _define_property(_assert_this_initialized(_this), "noContrastInfoAvailable", void 0);
        _define_property(_assert_this_initialized(_this), "contrastValueBubble", void 0);
        _define_property(_assert_this_initialized(_this), "contrastValue", void 0);
        _define_property(_assert_this_initialized(_this), "contrastValueBubbleIcons", void 0);
        _define_property(_assert_this_initialized(_this), "expandButton", void 0);
        _define_property(_assert_this_initialized(_this), "expandedDetails", void 0);
        _define_property(_assert_this_initialized(_this), "contrastThresholds", void 0);
        _define_property(_assert_this_initialized(_this), "contrastAA", void 0);
        _define_property(_assert_this_initialized(_this), "contrastPassFailAA", void 0);
        _define_property(_assert_this_initialized(_this), "contrastAAA", void 0);
        _define_property(_assert_this_initialized(_this), "contrastPassFailAAA", void 0);
        _define_property(_assert_this_initialized(_this), "contrastAPCA", void 0);
        _define_property(_assert_this_initialized(_this), "contrastPassFailAPCA", void 0);
        _define_property(_assert_this_initialized(_this), "chooseBgColor", void 0);
        _define_property(_assert_this_initialized(_this), "bgColorPickerButton", void 0);
        _define_property(_assert_this_initialized(_this), "bgColorPickedBound", void 0);
        _define_property(_assert_this_initialized(_this), "bgColorSwatch", void 0);
        _this.contrastInfo = contrastInfo;
        _this.elementInternal = contentElement.createChild('div', 'spectrum-contrast-details collapsed');
        _this.toggleMainColorPicker = toggleMainColorPickerCallback;
        _this.expandedChangedCallback = expandedChangedCallback;
        _this.colorSelectedCallback = colorSelectedCallback;
        _this.expandedInternal = false;
        _this.passesAA = true;
        _this.contrastUnknown = false;
        // This will not be visible if we don't get ContrastInfo,
        // e.g. for a non-font color property such as border-color.
        _this.visibleInternal = false;
        // No contrast info message is created to show if it's not possible to provide the extended details.
        _this.noContrastInfoAvailable = contentElement.createChild('div', 'no-contrast-info-available');
        _this.noContrastInfoAvailable.textContent = i18nString(UIStrings.noContrastInformationAvailable);
        _this.noContrastInfoAvailable.classList.add('hidden');
        var contrastValueRow = _this.elementInternal.createChild('div');
        contrastValueRow.addEventListener('click', _this.topRowClicked.bind(_assert_this_initialized(_this)));
        var contrastValueRowContents = contrastValueRow.createChild('div', 'container');
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(contrastValueRowContents, i18nString(UIStrings.contrastRatio));
        _this.contrastValueBubble = contrastValueRowContents.createChild('span', 'contrast-details-value');
        _this.contrastValue = _this.contrastValueBubble.createChild('span');
        _this.contrastValueBubbleIcons = [];
        _this.contrastValueBubbleIcons.push(_this.contrastValueBubble.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('checkmark')));
        _this.contrastValueBubbleIcons.push(_this.contrastValueBubble.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('check-double')));
        _this.contrastValueBubbleIcons.push(_this.contrastValueBubble.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('clear')));
        _this.contrastValueBubbleIcons.forEach(function(button) {
            return button.addEventListener('click', function(event) {
                ContrastDetails.showHelp();
                event.consume(false);
            });
        });
        var expandToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('expand', contrastValueRowContents);
        _this.expandButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.showMore), 'chevron-down');
        _this.expandButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.expandButtonClicked.bind(_assert_this_initialized(_this)));
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(_this.expandButton.element, false);
        expandToolbar.appendToolbarItem(_this.expandButton);
        _this.expandedDetails = _this.elementInternal.createChild('div', 'expanded-details');
        _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setControls(_this.expandButton.element, _this.expandedDetails);
        _this.contrastThresholds = _this.expandedDetails.createChild('div', 'contrast-thresholds');
        _this.contrastAA = _this.contrastThresholds.createChild('div', 'contrast-threshold');
        _this.contrastPassFailAA = _this.contrastAA.createChild('div', 'contrast-pass-fail');
        _this.contrastAAA = _this.contrastThresholds.createChild('div', 'contrast-threshold');
        _this.contrastPassFailAAA = _this.contrastAAA.createChild('div', 'contrast-pass-fail');
        _this.contrastAPCA = _this.contrastThresholds.createChild('div', 'contrast-threshold');
        _this.contrastPassFailAPCA = _this.contrastAPCA.createChild('div', 'contrast-pass-fail');
        _this.chooseBgColor = _this.expandedDetails.createChild('div', 'contrast-choose-bg-color');
        _this.chooseBgColor.textContent = i18nString(UIStrings.pickBackgroundColor);
        var bgColorContainer = _this.expandedDetails.createChild('div', 'background-color');
        var pickerToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('spectrum-eye-dropper', bgColorContainer);
        _this.bgColorPickerButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleBackgroundColorPicker), 'color-picker', 'color-picker-filled');
        _this.bgColorPickerButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.toggleBackgroundColorPickerInternal.bind(_assert_this_initialized(_this), undefined, true));
        pickerToolbar.appendToolbarItem(_this.bgColorPickerButton);
        _this.bgColorPickedBound = _this.bgColorPicked.bind(_assert_this_initialized(_this));
        _this.bgColorSwatch = new Swatch(bgColorContainer);
        _this.contrastInfo.addEventListener("ContrastInfoUpdated" /* ContrastInfoEvents.ContrastInfoUpdated */ , _this.update.bind(_assert_this_initialized(_this)));
        return _this;
    }
    _create_class(ContrastDetails, [
        {
            key: "showNoContrastInfoAvailableMessage",
            value: function showNoContrastInfoAvailableMessage() {
                this.noContrastInfoAvailable.classList.remove('hidden');
            }
        },
        {
            key: "hideNoContrastInfoAvailableMessage",
            value: function hideNoContrastInfoAvailableMessage() {
                this.noContrastInfoAvailable.classList.add('hidden');
            }
        },
        {
            key: "computeSuggestedColor",
            value: function computeSuggestedColor(threshold) {
                var fgColor = this.contrastInfo.color();
                var bgColor = this.contrastInfo.bgColor();
                if (!fgColor || !bgColor) {
                    return;
                }
                if (threshold === 'APCA') {
                    var requiredContrast = this.contrastInfo.contrastRatioAPCAThreshold();
                    if (requiredContrast === null) {
                        return;
                    }
                    // We add 1% to the min required contrast to make sure we are over the limit.
                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.findFgColorForContrastAPCA(fgColor, bgColor, requiredContrast + 1);
                }
                var requiredContrast1 = this.contrastInfo.contrastRatioThreshold(threshold);
                if (!requiredContrast1) {
                    return;
                }
                // We add a bit to the required contrast to make sure we are over the limit.
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.findFgColorForContrast(fgColor, bgColor, requiredContrast1 + 0.1);
            }
        },
        {
            key: "onSuggestColor",
            value: function onSuggestColor(threshold) {
                var color = this.computeSuggestedColor(threshold);
                if (color) {
                    this.colorSelectedCallback(color);
                }
            }
        },
        {
            key: "createFixColorButton",
            value: function createFixColorButton(parent, suggestedColor) {
                var button = parent.createChild('button', 'contrast-fix-button');
                var formattedColor = suggestedColor.asString(this.contrastInfo.colorFormat());
                var suggestedColorString = formattedColor ? formattedColor + ' ' : '';
                var label = i18nString(UIStrings.useSuggestedColorStoFixLow, {
                    PH1: suggestedColorString
                });
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(button, label);
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(button, label);
                button.tabIndex = 0;
                button.style.backgroundColor = suggestedColorString;
                return button;
            }
        },
        {
            key: "update",
            value: function update() {
                var _this = this;
                if (this.contrastInfo.isNull()) {
                    this.showNoContrastInfoAvailableMessage();
                    this.setVisible(false);
                    return;
                }
                this.setVisible(true);
                this.hideNoContrastInfoAvailableMessage();
                var isAPCAEnabled = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled('apca');
                var fgColor = this.contrastInfo.color();
                var bgColor = this.contrastInfo.bgColor();
                if (isAPCAEnabled) {
                    var apcaContrastRatio = this.contrastInfo.contrastRatioAPCA();
                    if (apcaContrastRatio === null || !bgColor || !fgColor) {
                        this.contrastUnknown = true;
                        this.contrastValue.textContent = '';
                        this.contrastValueBubble.classList.add('contrast-unknown');
                        this.chooseBgColor.classList.remove('hidden');
                        this.contrastThresholds.classList.add('hidden');
                        this.showNoContrastInfoAvailableMessage();
                        return;
                    }
                    this.contrastUnknown = false;
                    this.chooseBgColor.classList.add('hidden');
                    this.contrastThresholds.classList.remove('hidden');
                    this.contrastValueBubble.classList.remove('contrast-unknown');
                    this.contrastValue.textContent = "".concat(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.floor(apcaContrastRatio, 2), "%");
                    var apcaThreshold = this.contrastInfo.contrastRatioAPCAThreshold();
                    var passesAPCA = apcaContrastRatio && apcaThreshold ? Math.abs(apcaContrastRatio) >= apcaThreshold : false;
                    this.contrastPassFailAPCA.removeChildren();
                    var labelAPCA = this.contrastPassFailAPCA.createChild('span', 'contrast-link-label');
                    labelAPCA.textContent = i18nString(UIStrings.apca);
                    if (apcaThreshold !== null) {
                        this.contrastPassFailAPCA.createChild('span').textContent = ": ".concat(apcaThreshold.toFixed(2), "%");
                    }
                    if (passesAPCA) {
                        var iconCheckmark = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                        iconCheckmark.data = {
                            iconName: 'checkmark',
                            color: 'var(--icon-checkmark-green)',
                            width: '20px',
                            height: '14px'
                        };
                        this.contrastPassFailAPCA.appendChild(iconCheckmark);
                    } else {
                        var iconNo = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                        iconNo.data = {
                            iconName: 'clear',
                            color: 'var(--icon-error)',
                            width: '14px',
                            height: '14px'
                        };
                        this.contrastPassFailAPCA.appendChild(iconNo);
                        var suggestedColor = this.computeSuggestedColor('APCA');
                        if (suggestedColor) {
                            var fixAPCA = this.createFixColorButton(this.contrastPassFailAPCA, suggestedColor);
                            fixAPCA.addEventListener('click', function() {
                                return _this.onSuggestColor('APCA');
                            });
                        }
                    }
                    labelAPCA.addEventListener('click', function(_event) {
                        return ContrastDetails.showHelp();
                    });
                    this.elementInternal.classList.toggle('contrast-fail', !passesAPCA);
                    this.contrastValueBubble.classList.toggle('contrast-aa', passesAPCA);
                    this.bgColorSwatch.setColors(fgColor, bgColor);
                    return;
                }
                var contrastRatio = this.contrastInfo.contrastRatio();
                if (!contrastRatio || !bgColor || !fgColor) {
                    this.contrastUnknown = true;
                    this.contrastValue.textContent = '';
                    this.contrastValueBubble.classList.add('contrast-unknown');
                    this.chooseBgColor.classList.remove('hidden');
                    this.contrastThresholds.classList.add('hidden');
                    this.showNoContrastInfoAvailableMessage();
                    return;
                }
                this.contrastUnknown = false;
                this.chooseBgColor.classList.add('hidden');
                this.contrastThresholds.classList.remove('hidden');
                this.contrastValueBubble.classList.remove('contrast-unknown');
                this.contrastValue.textContent = String(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.floor(contrastRatio, 2));
                this.bgColorSwatch.setColors(fgColor, bgColor);
                // In greater then comparisons we can substite null with 0.
                var aa = this.contrastInfo.contrastRatioThreshold('aa') || 0;
                this.passesAA = (this.contrastInfo.contrastRatio() || 0) >= aa;
                this.contrastPassFailAA.removeChildren();
                var labelAA = this.contrastPassFailAA.createChild('span', 'contrast-link-label');
                labelAA.textContent = i18nString(UIStrings.aa);
                this.contrastPassFailAA.createChild('span').textContent = i18nString(UIStrings.placeholderWithColon, {
                    PH1: aa.toFixed(1)
                });
                if (this.passesAA) {
                    var iconCheckmark1 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    iconCheckmark1.data = {
                        iconName: 'checkmark',
                        color: 'var(--icon-checkmark-green)',
                        width: '20px',
                        height: '14px'
                    };
                    this.contrastPassFailAA.appendChild(iconCheckmark1);
                } else {
                    var iconNo1 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    iconNo1.data = {
                        iconName: 'clear',
                        color: 'var(--icon-error)',
                        width: '14px',
                        height: '14px'
                    };
                    this.contrastPassFailAA.appendChild(iconNo1);
                    var suggestedColor1 = this.computeSuggestedColor('aa');
                    if (suggestedColor1) {
                        var fixAA = this.createFixColorButton(this.contrastPassFailAA, suggestedColor1);
                        fixAA.addEventListener('click', function() {
                            return _this.onSuggestColor('aa');
                        });
                    }
                }
                // In greater then comparisons we can substite null with 0.
                var aaa = this.contrastInfo.contrastRatioThreshold('aaa') || 0;
                var passesAAA = (this.contrastInfo.contrastRatio() || 0) >= aaa;
                this.contrastPassFailAAA.removeChildren();
                var labelAAA = this.contrastPassFailAAA.createChild('span', 'contrast-link-label');
                labelAAA.textContent = i18nString(UIStrings.aaa);
                this.contrastPassFailAAA.createChild('span').textContent = i18nString(UIStrings.placeholderWithColon, {
                    PH1: aaa.toFixed(1)
                });
                if (passesAAA) {
                    var iconCheckmark2 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    iconCheckmark2.data = {
                        iconName: 'checkmark',
                        color: 'var(--icon-checkmark-green)',
                        width: '20px',
                        height: '14px'
                    };
                    this.contrastPassFailAAA.appendChild(iconCheckmark2);
                } else {
                    var iconNo2 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    iconNo2.data = {
                        iconName: 'clear',
                        color: 'var(--icon-error)',
                        width: '14px',
                        height: '14px'
                    };
                    this.contrastPassFailAAA.appendChild(iconNo2);
                    var suggestedColor2 = this.computeSuggestedColor('aaa');
                    if (suggestedColor2) {
                        var fixAAA = this.createFixColorButton(this.contrastPassFailAAA, suggestedColor2);
                        fixAAA.addEventListener('click', function() {
                            return _this.onSuggestColor('aaa');
                        });
                    }
                }
                [
                    labelAA,
                    labelAAA
                ].forEach(function(e) {
                    return e.addEventListener('click', function() {
                        return ContrastDetails.showHelp();
                    });
                });
                this.elementInternal.classList.toggle('contrast-fail', !this.passesAA);
                // show checkmark icon when passes AA, but not AAA
                this.contrastValueBubble.classList.toggle('contrast-aa', this.passesAA && !passesAAA);
                this.contrastValueBubble.classList.toggle('contrast-aaa', passesAAA);
            }
        },
        {
            key: "setVisible",
            value: function setVisible(visible) {
                this.visibleInternal = visible;
                this.elementInternal.classList.toggle('hidden', !visible);
            }
        },
        {
            key: "visible",
            value: function visible() {
                return this.visibleInternal;
            }
        },
        {
            key: "element",
            value: function element() {
                return this.elementInternal;
            }
        },
        {
            key: "expandButtonClicked",
            value: function expandButtonClicked() {
                var selection = this.contrastValueBubble.getComponentSelection();
                if (selection) {
                    selection.empty();
                }
                this.toggleExpanded();
            }
        },
        {
            key: "topRowClicked",
            value: function topRowClicked(event) {
                var selection = this.contrastValueBubble.getComponentSelection();
                if (selection) {
                    selection.empty();
                }
                this.toggleExpanded();
                event.consume(true);
            }
        },
        {
            key: "toggleExpanded",
            value: function toggleExpanded() {
                this.expandedInternal = !this.expandedInternal;
                _legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.expandButton.element, this.expandedInternal);
                this.elementInternal.classList.toggle('collapsed', !this.expandedInternal);
                if (this.expandedInternal) {
                    this.toggleMainColorPicker(false);
                    this.expandButton.setGlyph('chevron-up');
                    this.expandButton.setTitle(i18nString(UIStrings.showLess));
                    if (this.contrastUnknown) {
                        this.toggleBackgroundColorPickerInternal(true);
                    }
                } else {
                    this.toggleBackgroundColorPickerInternal(false);
                    this.expandButton.setGlyph('chevron-down');
                    this.expandButton.setTitle(i18nString(UIStrings.showMore));
                }
                this.expandedChangedCallback();
            }
        },
        {
            key: "collapse",
            value: function collapse() {
                this.elementInternal.classList.remove('expanded');
                this.toggleBackgroundColorPickerInternal(false);
                this.toggleMainColorPicker(false);
            }
        },
        {
            key: "expanded",
            value: function expanded() {
                return this.expandedInternal;
            }
        },
        {
            key: "backgroundColorPickerEnabled",
            value: function backgroundColorPickerEnabled() {
                return this.bgColorPickerButton.isToggled();
            }
        },
        {
            key: "toggleBackgroundColorPicker",
            value: function toggleBackgroundColorPicker(enabled) {
                this.toggleBackgroundColorPickerInternal(enabled, false);
            }
        },
        {
            key: "toggleBackgroundColorPickerInternal",
            value: function toggleBackgroundColorPickerInternal(enabled) {
                var shouldTriggerEvent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (enabled === undefined) {
                    enabled = !this.bgColorPickerButton.isToggled();
                }
                this.bgColorPickerButton.setToggled(enabled);
                if (shouldTriggerEvent) {
                    this.dispatchEventToListeners("BackgroundColorPickerWillBeToggled" /* Events.BackgroundColorPickerWillBeToggled */ , enabled);
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setEyeDropperActive(enabled);
                if (enabled) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, this.bgColorPickedBound);
                } else {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, this.bgColorPickedBound);
                }
            }
        },
        {
            key: "bgColorPicked",
            value: function bgColorPicked(param) {
                var rgbColor = param.data;
                var rgba = [
                    rgbColor.r,
                    rgbColor.g,
                    rgbColor.b,
                    (rgbColor.a / 2.55 | 0) / 100
                ];
                var color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA(rgba);
                this.contrastInfo.setBgColor(color);
                this.toggleBackgroundColorPickerInternal(false);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
            }
        }
    ], [
        {
            key: "showHelp",
            value: function showHelp() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.addReferrerToURL('https://web.dev/color-and-contrast-accessibility/'));
            }
        }
    ]);
    return ContrastDetails;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var Swatch = /*#__PURE__*/ function() {
    "use strict";
    function Swatch(parentElement) {
        _class_call_check(this, Swatch);
        _define_property(this, "parentElement", void 0);
        _define_property(this, "swatchElement", void 0);
        _define_property(this, "swatchInnerElement", void 0);
        _define_property(this, "textPreview", void 0);
        this.parentElement = parentElement;
        this.swatchElement = parentElement.createChild('span', 'swatch contrast swatch-inner-white');
        this.swatchInnerElement = this.swatchElement.createChild('span', 'swatch-inner');
        this.textPreview = this.swatchElement.createChild('div', 'text-preview');
        this.textPreview.textContent = 'Aa';
    }
    _create_class(Swatch, [
        {
            key: "setColors",
            value: function setColors(fgColor, bgColor) {
                this.textPreview.style.color = fgColor.asString("rgba" /* Common.Color.Format.RGBA */ );
                this.swatchInnerElement.style.backgroundColor = bgColor.asString("rgba" /* Common.Color.Format.RGBA */ );
                // Show border if the swatch is white.
                this.swatchElement.classList.toggle('swatch-inner-white', bgColor.as("hsl" /* Common.Color.Format.HSL */ ).l > 0.9);
            }
        }
    ]);
    return Swatch;
} //# sourceMappingURL=ContrastDetails.js.map
();


}),

}]);