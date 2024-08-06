"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkConfigView_js"], {
"./panels/network/NetworkConfigView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkConfigView: function() { return NetworkConfigView; },
  userAgentGroups: function() { return userAgentGroups; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */var _settings_emulation_components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/emulation/components/components.js */ "./panels/settings/emulation/components/components.js");
/* harmony import */var _networkConfigView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkConfigView.css.js */ "./panels/network/networkConfigView.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
     *@description Text in Network Config View of the Network panel
     */ custom: 'Custom...',
    /**
     *@description Other user agent element placeholder in Network Config View of the Network panel
     */ enterACustomUserAgent: 'Enter a custom user agent',
    /**
     *@description Error message for empty custom user agent input
     */ customUserAgentFieldIsRequired: 'Custom user agent field is required',
    /**
     *@description Text in Network Config View of the Network panel
     */ caching: 'Caching',
    /**
     *@description Text in Network Config View of the Network panel
     */ disableCache: 'Disable cache',
    /**
     *@description Text in Network Config View of the Network panel
     */ networkThrottling: 'Network throttling',
    /**
     *@description Text in Network Config View of the Network panel
     */ userAgent: 'User agent',
    /**
     *@description Text in Network Config View of the Network panel
     */ selectAutomatically: 'Use browser default',
    /**
     * @description Title of a section in the Network conditions view that includes
     * a set of checkboxes to override the content encodings supported by the browser.
     */ acceptedEncoding: 'Accepted `Content-Encoding`s',
    /**
     * @description Status text for successful update of client hints.
     */ clientHintsStatusText: 'User agent updated.',
    /**
     * @description The aria alert message when the Network conditions panel is shown.
     */ networkConditionsPanelShown: 'Network conditions shown'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/NetworkConfigView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var networkConfigViewInstance;
var NetworkConfigView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(NetworkConfigView, _UI_Widget_VBox);
    var _super = _create_super(NetworkConfigView);
    function NetworkConfigView() {
        _class_call_check(this, NetworkConfigView);
        var _this;
        _this = _super.call(this, true);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.panel('network-conditions').track({
            resize: true
        })));
        _this.contentElement.classList.add('network-config');
        _this.createCacheSection();
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        _this.createNetworkThrottlingSection();
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        _this.createUserAgentSection();
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        _this.createAcceptedEncodingSection();
        return _this;
    }
    _create_class(NetworkConfigView, [
        {
            key: "createSection",
            value: function createSection(title, className) {
                var section = this.contentElement.createChild('section', 'network-config-group');
                if (className) {
                    section.classList.add(className);
                }
                section.createChild('div', 'network-config-title').textContent = title;
                return section.createChild('div', 'network-config-fields');
            }
        },
        {
            key: "createCacheSection",
            value: function createCacheSection() {
                var section = this.createSection(i18nString(UIStrings.caching), 'network-config-disable-cache');
                section.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.disableCache), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('cache-disabled'), true));
            }
        },
        {
            key: "createNetworkThrottlingSection",
            value: function createNetworkThrottlingSection() {
                var title = i18nString(UIStrings.networkThrottling);
                var section = this.createSection(title, 'network-config-throttling');
                var networkThrottlingSelect = section.createChild('select', 'chrome-select');
                _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_6__.ThrottlingManager.throttlingManager().decorateSelectWithNetworkThrottling(networkThrottlingSelect);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(networkThrottlingSelect, title);
            }
        },
        {
            key: "createUserAgentSection",
            value: function createUserAgentSection() {
                var userAgentMetadataSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-user-agent-metadata', null);
                var customUserAgentSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-user-agent', '');
                var title = i18nString(UIStrings.userAgent);
                var section = this.createSection(title, 'network-config-ua');
                var checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.selectAutomatically), true, undefined, customUserAgentSetting.name);
                section.appendChild(checkboxLabel);
                var autoCheckbox = checkboxLabel.checkboxElement;
                customUserAgentSetting.addChangeListener(function() {
                    if (autoCheckbox.checked) {
                        return;
                    }
                    var customUA = customUserAgentSetting.get();
                    var userAgentMetadata = getUserAgentMetadata(customUA);
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setCustomUserAgentOverride(customUA, userAgentMetadata);
                });
                var customUserAgentSelectBox = section.createChild('div', 'network-config-ua-custom');
                autoCheckbox.addEventListener('change', userAgentSelectBoxChanged);
                var customSelectAndInput = NetworkConfigView.createUserAgentSelectAndInput(title);
                customSelectAndInput.select.classList.add('chrome-select');
                customUserAgentSelectBox.appendChild(customSelectAndInput.select);
                customUserAgentSelectBox.appendChild(customSelectAndInput.input);
                customUserAgentSelectBox.appendChild(customSelectAndInput.error);
                var clientHintsContainer = customUserAgentSelectBox.createChild('div', 'client-hints-form');
                var clientHints = new _settings_emulation_components_components_js__WEBPACK_IMPORTED_MODULE_7__.UserAgentClientHintsForm.UserAgentClientHintsForm();
                var userAgentMetaDataSetting = userAgentMetadataSetting.get();
                var initialUserAgentMetaData = getUserAgentMetadata(customSelectAndInput.select.value);
                clientHints.value = {
                    showMobileCheckbox: true,
                    showSubmitButton: true,
                    metaData: userAgentMetaDataSetting || initialUserAgentMetaData || undefined
                };
                clientHintsContainer.appendChild(clientHints);
                customSelectAndInput.select.addEventListener('user-agent-change', function(event) {
                    var userStringValue = event.detail.value;
                    var userAgentMetadata = userStringValue ? getUserAgentMetadata(userStringValue) : null;
                    clientHints.value = {
                        metaData: userAgentMetadata || undefined,
                        showMobileCheckbox: true,
                        showSubmitButton: true
                    };
                    userAgentUpdateButtonStatusText.textContent = '';
                });
                clientHints.addEventListener('clienthintschange', function() {
                    customSelectAndInput.select.value = 'custom';
                    userAgentUpdateButtonStatusText.textContent = '';
                });
                clientHints.addEventListener('clienthintssubmit', function(event) {
                    var metaData = event.detail.value;
                    var customUA = customUserAgentSetting.get();
                    userAgentMetadataSetting.set(metaData);
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setCustomUserAgentOverride(customUA, metaData);
                    userAgentUpdateButtonStatusText.textContent = i18nString(UIStrings.clientHintsStatusText);
                });
                var userAgentUpdateButtonStatusText = section.createChild('span', 'status-text');
                userAgentUpdateButtonStatusText.textContent = '';
                userAgentSelectBoxChanged();
                function userAgentSelectBoxChanged() {
                    var useCustomUA = !autoCheckbox.checked;
                    customUserAgentSelectBox.classList.toggle('checked', useCustomUA);
                    customSelectAndInput.select.disabled = !useCustomUA;
                    customSelectAndInput.input.disabled = !useCustomUA;
                    customSelectAndInput.error.hidden = !useCustomUA;
                    clientHints.disabled = !useCustomUA;
                    var customUA = useCustomUA ? customUserAgentSetting.get() : '';
                    var userAgentMetadata = useCustomUA ? getUserAgentMetadata(customUA) : null;
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setCustomUserAgentOverride(customUA, userAgentMetadata);
                }
            }
        },
        {
            key: "createAcceptedEncodingSection",
            value: function createAcceptedEncodingSection() {
                var useCustomAcceptedEncodingSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('use-custom-accepted-encodings', false);
                var customAcceptedEncodingSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-accepted-encodings', "gzip,br,deflate" /* Protocol.Network.ContentEncoding.Deflate */ );
                var title = i18nString(UIStrings.acceptedEncoding);
                var section = this.createSection(title, 'network-config-accepted-encoding');
                var checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.selectAutomatically), true, undefined, useCustomAcceptedEncodingSetting.name);
                section.appendChild(checkboxLabel);
                var autoCheckbox = checkboxLabel.checkboxElement;
                function onSettingChange() {
                    if (!useCustomAcceptedEncodingSetting.get()) {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().clearCustomAcceptedEncodingsOverride();
                    } else {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setCustomAcceptedEncodingsOverride(customAcceptedEncodingSetting.get() === '' ? [] : customAcceptedEncodingSetting.get().split(','));
                    }
                }
                customAcceptedEncodingSetting.addChangeListener(onSettingChange);
                useCustomAcceptedEncodingSetting.addChangeListener(onSettingChange);
                var encodingsSection = section.createChild('div', 'network-config-accepted-encoding-custom');
                encodingsSection.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section().context(customAcceptedEncodingSetting.name)));
                autoCheckbox.checked = !useCustomAcceptedEncodingSetting.get();
                autoCheckbox.addEventListener('change', acceptedEncodingsChanged);
                var checkboxes = new Map();
                var contentEncodings = {
                    Deflate: "deflate" /* Protocol.Network.ContentEncoding.Deflate */ ,
                    Gzip: "gzip" /* Protocol.Network.ContentEncoding.Gzip */ ,
                    Br: "br" /* Protocol.Network.ContentEncoding.Br */ ,
                    Zstd: "zstd" /* Protocol.Network.ContentEncoding.Zstd */ 
                };
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(contentEncodings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var encoding = _step.value;
                        var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(encoding, true, undefined, encoding);
                        encodingsSection.appendChild(label);
                        checkboxes.set(encoding, label.checkboxElement);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = checkboxes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value = _sliced_to_array(_step1.value, 2), encoding1 = _step_value[0], checkbox = _step_value[1];
                        checkbox.checked = customAcceptedEncodingSetting.get().includes(encoding1);
                        checkbox.addEventListener('change', acceptedEncodingsChanged);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                acceptedEncodingsChanged();
                function acceptedEncodingsChanged() {
                    useCustomAcceptedEncodingSetting.set(!autoCheckbox.checked);
                    var encodings = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = checkboxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), encoding = _step_value[0], checkbox = _step_value[1];
                            checkbox.disabled = autoCheckbox.checked;
                            if (checkbox.checked) {
                                encodings.push(encoding);
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
                    customAcceptedEncodingSetting.set(encodings.join(','));
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(NetworkConfigView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _networkConfigView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(i18nString(UIStrings.networkConditionsPanelShown));
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!networkConfigViewInstance || forceNew) {
                    networkConfigViewInstance = new NetworkConfigView();
                }
                return networkConfigViewInstance;
            }
        },
        {
            key: "createUserAgentSelectAndInput",
            value: function createUserAgentSelectAndInput(title) {
                var userAgentSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-user-agent', '');
                var userAgentMetadataSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-user-agent-metadata', null);
                var userAgentSelectElement = document.createElement('select');
                userAgentSelectElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown().track({
                    change: true
                }).context(userAgentSetting.name)));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(userAgentSelectElement, title);
                var customOverride = {
                    title: i18nString(UIStrings.custom),
                    value: 'custom'
                };
                userAgentSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customOverride.title, customOverride.value, 'custom'));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = userAgentGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var userAgentDescriptor = _step.value;
                        var groupElement = userAgentSelectElement.createChild('optgroup');
                        groupElement.label = userAgentDescriptor.title;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = userAgentDescriptor.values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var userAgentVersion = _step1.value;
                                var userAgentValue = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.patchUserAgentWithChromeVersion(userAgentVersion.value);
                                groupElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(userAgentVersion.title, userAgentValue, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(userAgentVersion.title)));
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
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
                userAgentSelectElement.selectedIndex = 0;
                var otherUserAgentElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'text');
                otherUserAgentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.textField().track({
                    change: true
                }).context(userAgentSetting.name)));
                otherUserAgentElement.value = userAgentSetting.get();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(otherUserAgentElement, userAgentSetting.get());
                otherUserAgentElement.placeholder = i18nString(UIStrings.enterACustomUserAgent);
                otherUserAgentElement.required = true;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(otherUserAgentElement, otherUserAgentElement.placeholder);
                var errorElement = document.createElement('div');
                errorElement.classList.add('network-config-input-validation-error');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsAlert(errorElement);
                if (!otherUserAgentElement.value) {
                    errorElement.textContent = i18nString(UIStrings.customUserAgentFieldIsRequired);
                }
                settingChanged();
                userAgentSelectElement.addEventListener('change', userAgentSelected, false);
                otherUserAgentElement.addEventListener('input', applyOtherUserAgent, false);
                function userAgentSelected() {
                    var value = userAgentSelectElement.options[userAgentSelectElement.selectedIndex].value;
                    if (value !== customOverride.value) {
                        userAgentSetting.set(value);
                        otherUserAgentElement.value = value;
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(otherUserAgentElement, value);
                        var userAgentMetadata = getUserAgentMetadata(value);
                        userAgentMetadataSetting.set(userAgentMetadata);
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setCustomUserAgentOverride(value, userAgentMetadata);
                    } else {
                        userAgentMetadataSetting.set(null);
                        otherUserAgentElement.select();
                    }
                    errorElement.textContent = '';
                    var userAgentChangeEvent = new CustomEvent('user-agent-change', {
                        detail: {
                            value: value
                        }
                    });
                    userAgentSelectElement.dispatchEvent(userAgentChangeEvent);
                }
                function settingChanged() {
                    var value = userAgentSetting.get();
                    var options = userAgentSelectElement.options;
                    var selectionRestored = false;
                    for(var i = 0; i < options.length; ++i){
                        if (options[i].value === value) {
                            userAgentSelectElement.selectedIndex = i;
                            selectionRestored = true;
                            break;
                        }
                    }
                    if (!selectionRestored) {
                        userAgentSelectElement.selectedIndex = 0;
                    }
                }
                function applyOtherUserAgent() {
                    if (userAgentSetting.get() !== otherUserAgentElement.value) {
                        if (!otherUserAgentElement.value) {
                            errorElement.textContent = i18nString(UIStrings.customUserAgentFieldIsRequired);
                        } else {
                            errorElement.textContent = '';
                        }
                        userAgentSetting.set(otherUserAgentElement.value);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(otherUserAgentElement, otherUserAgentElement.value);
                        settingChanged();
                    }
                }
                return {
                    select: userAgentSelectElement,
                    input: otherUserAgentElement,
                    error: errorElement
                };
            }
        }
    ]);
    return NetworkConfigView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);
function getUserAgentMetadata(userAgent) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = userAgentGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var userAgentDescriptor = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = userAgentDescriptor.values[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var userAgentVersion = _step1.value;
                    if (userAgent === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.patchUserAgentWithChromeVersion(userAgentVersion.value)) {
                        if (!userAgentVersion.metadata) {
                            return null;
                        }
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.patchUserAgentMetadataWithChromeVersion(userAgentVersion.metadata);
                        return userAgentVersion.metadata;
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
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
    return null;
}
var userAgentGroups = [
    {
        title: 'Android',
        values: [
            {
                title: 'Android (4.0.2) Browser \u2014 Galaxy Nexus',
                value: 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '4.0.2',
                    architecture: '',
                    model: 'Galaxy Nexus',
                    mobile: true
                }
            },
            {
                title: 'Android (2.3) Browser \u2014 Nexus S',
                value: 'Mozilla/5.0 (Linux; U; Android 2.3.6; en-us; Nexus S Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '2.3.6',
                    architecture: '',
                    model: 'Nexus S',
                    mobile: true
                }
            }
        ]
    },
    {
        title: 'BlackBerry',
        values: [
            {
                title: 'BlackBerry \u2014 BB10',
                value: 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',
                metadata: null
            },
            {
                title: 'BlackBerry \u2014 PlayBook 2.1',
                value: 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML, like Gecko) Version/7.2.1.0 Safari/536.2+',
                metadata: null
            },
            {
                title: 'BlackBerry \u2014 9900',
                value: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.187 Mobile Safari/534.11+',
                metadata: null
            }
        ]
    },
    {
        title: 'Chrome',
        values: [
            {
                title: 'Chrome \u2014 Android Mobile',
                value: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '6.0',
                    architecture: '',
                    model: 'Nexus 5',
                    mobile: true
                }
            },
            {
                title: 'Chrome \u2014 Android Mobile (high-end)',
                value: 'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '10',
                    architecture: '',
                    model: 'Pixel 4',
                    mobile: true
                }
            },
            {
                title: 'Chrome \u2014 Android Tablet',
                value: 'Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '4.3',
                    architecture: '',
                    model: 'Nexus 7',
                    mobile: true
                }
            },
            {
                title: 'Chrome \u2014 iPhone',
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/%s Mobile/15E148 Safari/604.1',
                metadata: null
            },
            {
                title: 'Chrome \u2014 iPad',
                value: 'Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/%s Mobile/15E148 Safari/604.1',
                metadata: null
            },
            {
                title: 'Chrome \u2014 Chrome OS',
                value: 'Mozilla/5.0 (X11; CrOS x86_64 10066.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Chrome OS',
                    platformVersion: '10066.0.0',
                    architecture: 'x86',
                    model: '',
                    mobile: false
                }
            },
            {
                title: 'Chrome \u2014 Mac',
                value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'macOS',
                    platformVersion: '10_14_6',
                    architecture: 'x86',
                    model: '',
                    mobile: false
                }
            },
            {
                title: 'Chrome \u2014 Windows',
                value: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Google Chrome',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Windows',
                    platformVersion: '10.0',
                    architecture: 'x86',
                    model: '',
                    mobile: false
                }
            }
        ]
    },
    {
        title: 'Firefox',
        values: [
            {
                title: 'Firefox \u2014 Android Mobile',
                value: 'Mozilla/5.0 (Android 4.4; Mobile; rv:70.0) Gecko/70.0 Firefox/70.0',
                metadata: null
            },
            {
                title: 'Firefox \u2014 Android Tablet',
                value: 'Mozilla/5.0 (Android 4.4; Tablet; rv:70.0) Gecko/70.0 Firefox/70.0',
                metadata: null
            },
            {
                title: 'Firefox \u2014 iPhone',
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4',
                metadata: null
            },
            {
                title: 'Firefox \u2014 iPad',
                value: 'Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4',
                metadata: null
            },
            {
                title: 'Firefox \u2014 Mac',
                value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:70.0) Gecko/20100101 Firefox/70.0',
                metadata: null
            },
            {
                title: 'Firefox \u2014 Windows',
                value: 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:70.0) Gecko/20100101 Firefox/70.0',
                metadata: null
            }
        ]
    },
    {
        title: 'Googlebot',
        values: [
            {
                title: 'Googlebot',
                value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                metadata: null
            },
            {
                title: 'Googlebot Desktop',
                value: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/%s Safari/537.36',
                metadata: null
            },
            {
                title: 'Googlebot Smartphone',
                value: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                metadata: null
            }
        ]
    },
    {
        title: 'Internet Explorer',
        values: [
            {
                title: 'Internet Explorer 11',
                value: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
                metadata: null
            },
            {
                title: 'Internet Explorer 10',
                value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
                metadata: null
            },
            {
                title: 'Internet Explorer 9',
                value: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
                metadata: null
            },
            {
                title: 'Internet Explorer 8',
                value: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)',
                metadata: null
            },
            {
                title: 'Internet Explorer 7',
                value: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
                metadata: null
            }
        ]
    },
    {
        title: 'Microsoft Edge',
        values: [
            {
                title: 'Microsoft Edge (Chromium) \u2014 Windows',
                value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Safari/537.36 Edg/%s',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Microsoft Edge',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Windows',
                    platformVersion: '10.0',
                    architecture: 'x86',
                    model: '',
                    mobile: false
                }
            },
            {
                title: 'Microsoft Edge (Chromium) \u2014 Mac',
                value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/%s Safari/604.1 Edg/%s',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Microsoft Edge',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'macOS',
                    platformVersion: '10_14_6',
                    architecture: 'x86',
                    model: '',
                    mobile: false
                }
            },
            {
                title: 'Microsoft Edge \u2014 iPhone',
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 EdgiOS/44.5.0.10 Mobile/15E148 Safari/604.1',
                metadata: null
            },
            {
                title: 'Microsoft Edge \u2014 iPad',
                value: 'Mozilla/5.0 (iPad; CPU OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 EdgiOS/44.5.2 Mobile/15E148 Safari/605.1.15',
                metadata: null
            },
            {
                title: 'Microsoft Edge \u2014 Android Mobile',
                value: 'Mozilla/5.0 (Linux; Android 8.1.0; Pixel Build/OPM4.171019.021.D1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Mobile Safari/537.36 EdgA/42.0.0.2057',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Microsoft Edge',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '8.1.0',
                    architecture: '',
                    model: 'Pixel',
                    mobile: true
                }
            },
            {
                title: 'Microsoft Edge \u2014 Android Tablet',
                value: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.109 Safari/537.36 EdgA/42.0.0.2057',
                metadata: {
                    brands: [
                        {
                            brand: 'Not A;Brand',
                            version: '99'
                        },
                        {
                            brand: 'Chromium',
                            version: '%s'
                        },
                        {
                            brand: 'Microsoft Edge',
                            version: '%s'
                        }
                    ],
                    fullVersion: '%s',
                    platform: 'Android',
                    platformVersion: '6.0.1',
                    architecture: '',
                    model: 'Nexus 7',
                    mobile: true
                }
            },
            {
                title: 'Microsoft Edge (EdgeHTML) \u2014 Windows',
                value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19042',
                metadata: null
            },
            {
                title: 'Microsoft Edge (EdgeHTML) \u2014 XBox',
                value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19041',
                metadata: null
            }
        ]
    },
    {
        title: 'Opera',
        values: [
            {
                title: 'Opera \u2014 Mac',
                value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48',
                metadata: null
            },
            {
                title: 'Opera \u2014 Windows',
                value: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36 OPR/65.0.3467.48',
                metadata: null
            },
            {
                title: 'Opera (Presto) \u2014 Mac',
                value: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.9.1) Presto/2.12.388 Version/12.16',
                metadata: null
            },
            {
                title: 'Opera (Presto) \u2014 Windows',
                value: 'Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.16',
                metadata: null
            },
            {
                title: 'Opera Mobile \u2014 Android Mobile',
                value: 'Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02',
                metadata: null
            },
            {
                title: 'Opera Mini \u2014 iOS',
                value: 'Opera/9.80 (iPhone; Opera Mini/8.0.0/34.2336; U; en) Presto/2.8.119 Version/11.10',
                metadata: null
            }
        ]
    },
    {
        title: 'Safari',
        values: [
            {
                title: 'Safari \u2014 iPad iOS 13.2',
                value: 'Mozilla/5.0 (iPad; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
                metadata: null
            },
            {
                title: 'Safari \u2014 iPhone iOS 13.2',
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
                metadata: null
            },
            {
                title: 'Safari \u2014 Mac',
                value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Safari/605.1.15',
                metadata: null
            }
        ]
    },
    {
        title: 'UC Browser',
        values: [
            {
                title: 'UC Browser \u2014 Android Mobile',
                value: 'Mozilla/5.0 (Linux; U; Android 8.1.0; en-US; Nexus 6P Build/OPM7.181205.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.11.1.1197 Mobile Safari/537.36',
                metadata: null
            },
            {
                title: 'UC Browser \u2014 iOS',
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16B92 UCBrowser/12.1.7.1109 Mobile AliApp(TUnionSDK/0.1.20.3)',
                metadata: null
            },
            {
                title: 'UC Browser \u2014 Windows Phone',
                value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920) UCBrowser/10.1.0.563 Mobile',
                metadata: null
            }
        ]
    }
]; //# sourceMappingURL=NetworkConfigView.js.map


}),
"./panels/network/networkConfigView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.network-config {\n  padding: 12px;\n  display: block;\n}\n\n.network-config-group {\n  display: flex;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n  flex: 0 0 auto;\n  min-height: 30px;\n}\n\n.network-config-title {\n  margin-right: 16px;\n  width: 130px;\n}\n\n.network-config-fields {\n  flex: 2 0 200px;\n}\n\n.network-config-fields span:first-of-type,\n.network-config-fields .network-config-accepted-encoding-custom {\n  padding: 3px 0;\n}\n\n.panel-section-separator {\n  height: 1px;\n  margin-bottom: 10px;\n  background: var(--sys-color-divider);\n}\n/* Disable cache */\n\n.network-config-disable-cache {\n  line-height: 28px;\n  border-top: none;\n  padding-top: 0;\n}\n\n.network-config-input-validation-error {\n  color: var(--sys-color-error);\n  margin: 5px 0;\n}\n\n.network-config-input-validation-error:empty {\n  display: none;\n}\n/* Network throttling */\n\n.network-config-throttling .chrome-select {\n  width: 100%;\n  max-width: 250px;\n}\n\n.network-config-throttling > .network-config-title {\n  line-height: 24px;\n}\n/* User agent */\n\n.network-config-ua > .network-config-title {\n  line-height: 20px;\n}\n\n.network-config-ua span[is="dt-radio"].checked > * {\n  display: none;\n}\n\n.network-config-ua input {\n  display: block;\n  width: calc(100% - 20px);\n}\n\n.network-config-ua input[type="text"],\n.network-config-ua .chrome-select {\n  margin-top: 8px;\n}\n\n.network-config-ua .chrome-select {\n  width: calc(100% - 20px);\n  max-width: 250px;\n}\n\n.network-config-ua span[is="dt-radio"] {\n  display: block;\n}\n\n.network-config-ua-custom {\n  opacity: 50%;\n  padding-bottom: 8px;\n}\n\n.network-config-ua-custom.checked {\n  opacity: 100%;\n}\n\n.client-hints-form {\n  margin-top: 14px;\n  width: min(100%, 400px);\n}\n\n.status-text {\n  padding: 10px;\n  color: var(--sys-color-tertiary);\n}\n\n/*# sourceURL=networkConfigView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/settings/emulation/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UserAgentClientHintsForm: function() { return /* reexport module object */ _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _UserAgentClientHintsForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAgentClientHintsForm.js */ "./panels/settings/emulation/components/UserAgentClientHintsForm.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=components.js.map


}),

}]);