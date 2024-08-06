"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfileLauncherView_js"], {
"./panels/profiler/ProfileLauncherView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProfileLauncherView: function() { return ProfileLauncherView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IsolateSelector.js */ "./panels/profiler/IsolateSelector.js");
/* harmony import */var _profileLauncherView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileLauncherView.css.js */ "./panels/profiler/profileLauncherView.css.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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






var UIStrings = {
    /**
     *@description Text in Profile Launcher View of a profiler tool
     */ selectJavascriptVmInstance: 'Select JavaScript VM instance',
    /**
     *@description Text to load something
     */ load: 'Load profile',
    /**
     *@description Control button text content in Profile Launcher View of a profiler tool
     */ takeSnapshot: 'Take snapshot',
    /**
     *@description Text of an item that stops the running task
     */ stop: 'Stop',
    /**
     *@description Control button text content in Profile Launcher View of a profiler tool
     */ start: 'Start',
    /**
     *@description Profile type header element text content in Profile Launcher View of a profiler tool
     */ selectProfilingType: 'Select profiling type'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/ProfileLauncherView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ProfileLauncherView = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(ProfileLauncherView, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(ProfileLauncherView);
    function ProfileLauncherView(profilesPanel) {
        _class_call_check(this, ProfileLauncherView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _define_property(_assert_this_initialized(_this), "contentElementInternal", void 0);
        _define_property(_assert_this_initialized(_this), "selectedProfileTypeSetting", void 0);
        _define_property(_assert_this_initialized(_this), "profileTypeHeaderElement", void 0);
        _define_property(_assert_this_initialized(_this), "profileTypeSelectorForm", void 0);
        _define_property(_assert_this_initialized(_this), "controlButton", void 0);
        _define_property(_assert_this_initialized(_this), "loadButton", void 0);
        _define_property(_assert_this_initialized(_this), "recordButtonEnabled", void 0);
        _define_property(_assert_this_initialized(_this), "typeIdToOptionElementAndProfileType", void 0);
        _define_property(_assert_this_initialized(_this), "isProfiling", void 0);
        _define_property(_assert_this_initialized(_this), "isInstantProfile", void 0);
        _define_property(_assert_this_initialized(_this), "isEnabled", void 0);
        _this.panel = profilesPanel;
        _this.element.classList.add('profile-launcher-view');
        _this.contentElementInternal = _this.element.createChild('div', 'profile-launcher-view-content vbox');
        var profileTypeSelectorElement = _this.contentElementInternal.createChild('div', 'vbox');
        _this.selectedProfileTypeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('selected-profile-type', 'CPU');
        _this.profileTypeHeaderElement = profileTypeSelectorElement.createChild('h1');
        _this.profileTypeSelectorForm = profileTypeSelectorElement.createChild('form');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsRadioGroup(_this.profileTypeSelectorForm);
        var isolateSelectorElement = _this.contentElementInternal.createChild('div', 'vbox profile-isolate-selector-block');
        isolateSelectorElement.createChild('h1').textContent = i18nString(UIStrings.selectJavascriptVmInstance);
        var isolateSelector = new _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_4__.IsolateSelector();
        var isolateSelectorElementChild = isolateSelectorElement.createChild('div', 'vbox profile-launcher-target-list');
        isolateSelectorElementChild.classList.add('profile-launcher-target-list-container');
        isolateSelector.show(isolateSelectorElementChild);
        isolateSelectorElement.appendChild(isolateSelector.totalMemoryElement());
        var buttonsDiv = _this.contentElementInternal.createChild('div', 'hbox profile-launcher-buttons');
        _this.controlButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton('', _this.controlButtonClicked.bind(_assert_this_initialized(_this)), {
            jslogContext: 'profiler.heap-toggle-recording',
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
        });
        _this.loadButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
        _this.loadButton.data = {
            iconName: 'import',
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
            jslogContext: 'profiler.load-from-file'
        };
        _this.loadButton.textContent = i18nString(UIStrings.load);
        _this.loadButton.addEventListener('click', _this.loadButtonClicked.bind(_assert_this_initialized(_this)));
        buttonsDiv.appendChild(_this.loadButton);
        buttonsDiv.appendChild(_this.controlButton);
        _this.recordButtonEnabled = true;
        _this.typeIdToOptionElementAndProfileType = new Map();
        return _this;
    }
    _create_class(ProfileLauncherView, [
        {
            key: "loadButtonClicked",
            value: function loadButtonClicked() {
                var loadFromFileAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('profiler.load-from-file');
                void loadFromFileAction.execute();
            }
        },
        {
            key: "updateControls",
            value: function updateControls() {
                if (this.isEnabled && this.recordButtonEnabled) {
                    this.controlButton.removeAttribute('disabled');
                } else {
                    this.controlButton.setAttribute('disabled', '');
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(this.controlButton, this.recordButtonEnabled ? '' : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.anotherProfilerActiveLabel());
                if (this.isInstantProfile) {
                    this.controlButton.classList.remove('running');
                    this.controlButton.textContent = i18nString(UIStrings.takeSnapshot);
                } else if (this.isProfiling) {
                    this.controlButton.classList.add('running');
                    this.controlButton.textContent = i18nString(UIStrings.stop);
                } else {
                    this.controlButton.classList.remove('running');
                    this.controlButton.textContent = i18nString(UIStrings.start);
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.typeIdToOptionElementAndProfileType.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var optionElement = _step.value.optionElement;
                        optionElement.disabled = Boolean(this.isProfiling);
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
            key: "profileStarted",
            value: function profileStarted() {
                this.isProfiling = true;
                this.updateControls();
            }
        },
        {
            key: "profileFinished",
            value: function profileFinished() {
                this.isProfiling = false;
                this.updateControls();
            }
        },
        {
            key: "updateProfileType",
            value: function updateProfileType(profileType, recordButtonEnabled) {
                this.isInstantProfile = profileType.isInstantProfile();
                this.recordButtonEnabled = recordButtonEnabled;
                this.isEnabled = profileType.isEnabled();
                this.updateControls();
            }
        },
        {
            key: "addProfileType",
            value: function addProfileType(profileType) {
                var labelElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createRadioLabel('profile-type', profileType.name, undefined, 'profiler.profile-type');
                this.profileTypeSelectorForm.appendChild(labelElement);
                var optionElement = labelElement.radioElement;
                this.typeIdToOptionElementAndProfileType.set(profileType.id, {
                    optionElement: optionElement,
                    profileType: profileType
                });
                optionElement.addEventListener('change', this.profileTypeChanged.bind(this, profileType), false);
                var descriptionElement = this.profileTypeSelectorForm.createChild('p');
                descriptionElement.textContent = profileType.description;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(optionElement, profileType.description);
                var customContent = profileType.customContent();
                if (customContent) {
                    customContent.setAttribute('role', 'group');
                    customContent.setAttribute('aria-labelledby', "".concat(optionElement.id));
                    this.profileTypeSelectorForm.createChild('p').appendChild(customContent);
                    profileType.setCustomContentEnabled(false);
                }
                var headerText = this.typeIdToOptionElementAndProfileType.size > 1 ? i18nString(UIStrings.selectProfilingType) : profileType.name;
                this.profileTypeHeaderElement.textContent = headerText;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(this.profileTypeSelectorForm, headerText);
            }
        },
        {
            key: "restoreSelectedProfileType",
            value: function restoreSelectedProfileType() {
                var typeId = this.selectedProfileTypeSetting.get();
                if (!this.typeIdToOptionElementAndProfileType.has(typeId)) {
                    typeId = this.typeIdToOptionElementAndProfileType.keys().next().value;
                    this.selectedProfileTypeSetting.set(typeId);
                }
                var optionElementAndProfileType = this.typeIdToOptionElementAndProfileType.get(typeId);
                optionElementAndProfileType.optionElement.checked = true;
                var type = optionElementAndProfileType.profileType;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.typeIdToOptionElementAndProfileType[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), id = _step_value[0], profileType = _step_value[1].profileType;
                        var enabled = id === typeId;
                        profileType.setCustomContentEnabled(enabled);
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
                this.dispatchEventToListeners("ProfileTypeSelected" /* Events.ProfileTypeSelected */ , type);
            }
        },
        {
            key: "controlButtonClicked",
            value: function controlButtonClicked() {
                this.panel.toggleRecord();
            }
        },
        {
            key: "profileTypeChanged",
            value: function profileTypeChanged(profileType) {
                var typeId = this.selectedProfileTypeSetting.get();
                var type = this.typeIdToOptionElementAndProfileType.get(typeId).profileType;
                type.setCustomContentEnabled(false);
                profileType.setCustomContentEnabled(true);
                this.dispatchEventToListeners("ProfileTypeSelected" /* Events.ProfileTypeSelected */ , profileType);
                this.isInstantProfile = profileType.isInstantProfile();
                this.isEnabled = profileType.isEnabled();
                this.updateControls();
                this.selectedProfileTypeSetting.set(profileType.id);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ProfileLauncherView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _profileLauncherView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return ProfileLauncherView;
} //# sourceMappingURL=ProfileLauncherView.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox));


}),
"./panels/profiler/profileLauncherView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.profile-launcher-view {\n  overflow: auto;\n}\n\n.profile-launcher-view-content {\n  margin: 10px 16px;\n  flex: auto 1 0;\n}\n\n.profile-launcher-view-content h1 {\n  font-size: 15px;\n  font-weight: normal;\n  margin: 6px 0 10px;\n}\n\n.profile-launcher-view-content [is="dt-radio"] {\n  font-size: 13px;\n}\n\n.profile-launcher-view-content p {\n  color: var(--sys-color-token-subtle);\n  margin-top: 1px;\n  margin-left: 22px;\n}\n\n.profile-launcher-view-content p [is="dt-checkbox"] {\n  display: flex;\n}\n\n.profile-launcher-view-content button.text-button.running,\n.profile-launcher-view-content button.text-button.running:focus {\n  color: var(--sys-color-error);\n}\n\n.profile-launcher-view-content > div {\n  flex: auto 0 0;\n}\n\n.profile-launcher-view-content > .profile-isolate-selector-block {\n  flex: auto 1 0;\n  overflow: hidden;\n}\n\n.profile-isolate-selector-block button {\n  min-width: 110px;\n}\n\n.profile-launcher-target-list {\n  margin-bottom: 6px;\n  border: 1px solid var(--sys-color-divider);\n  flex: 150px 1 0;\n}\n\n.profile-launcher-target-list-container {\n  overflow: auto;\n}\n\n.profile-memory-usage-item {\n  min-width: 100%;\n  width: max-content;\n  padding: 4px;\n  line-height: 16px;\n}\n\n.profile-isolate-selector-block > .profile-memory-usage-item {\n  margin-left: 1px;\n  margin-bottom: 4px;\n  font-weight: bolder;\n}\n\n.profile-memory-usage-item.selected {\n  background-color: var(--sys-color-neutral-container);\n}\n\n.profile-memory-usage-item:focus {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.profile-launcher-target-list .profile-memory-usage-item:hover:not(.selected) {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.javascript-vm-instances-list {\n  width: max-content;\n  min-width: 100%;\n}\n\n.javascript-vm-instances-list:focus .profile-memory-usage-item.selected {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.profile-memory-usage-item > div {\n  flex-shrink: 0;\n  margin-right: 12px;\n}\n\n.profile-memory-usage-item-size {\n  width: 60px;\n  text-align: right;\n}\n\n.profile-memory-usage-item-trend {\n  min-width: 5em;\n  color: var(--sys-color-tertiary);\n}\n\n.profile-memory-usage-item-trend.increasing {\n  color: var(--sys-color-error);\n}\n\n.profile-launcher-buttons {\n  flex-wrap: wrap;\n  column-gap: 8px;\n}\n\n@media (forced-colors: active) {\n  .profile-memory-usage-item {\n    forced-color-adjust: none;\n    border-left-color: transparent;\n  }\n\n  .profile-memory-usage-item-trend,\n  .profile-memory-usage-item-trend.increasing,\n  .profile-launcher-view-content button.running,\n  body.inactive .profile-launcher-view-content button.running:not(.toolbar-item) {\n    color: ButtonText;\n  }\n\n  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) {\n    background-color: Highlight;\n    color: HighlightText;\n  }\n\n  .javascript-vm-instances-list .profile-memory-usage-item.selected .profile-memory-usage-item-trend,\n  .javascript-vm-instances-list .profile-memory-usage-item.selected .profile-memory-usage-item-trend.increasing {\n    color: ButtonFace;\n  }\n\n  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) .profile-memory-usage-item-trend,\n  .javascript-vm-instances-list .profile-memory-usage-item:hover:not(.selected) .profile-memory-usage-item-trend.increasing {\n    background-color: Highlight;\n    color: HighlightText;\n  }\n\n  .javascript-vm-instances-list .profile-memory-usage-item.selected {\n    background-color: ButtonText;\n    border-color: Highlight;\n    color: ButtonFace;\n  }\n\n  .javascript-vm-instances-list:focus .profile-memory-usage-item.selected,\n  .javascript-vm-instances-list:focus-visible .profile-memory-usage-item.selected {\n    background-color: Highlight;\n    border-color: ButtonText;\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=profileLauncherView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);