"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_emulation_DevicesSettingsTab_js"], {
"./panels/settings/emulation/DevicesSettingsTab.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DevicesSettingsTab: function() { return DevicesSettingsTab; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/settings/emulation/components/components.js");
/* harmony import */var _devicesSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devicesSettingsTab.css.js */ "./panels/settings/emulation/devicesSettingsTab.css.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
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
     *@description Title for a section of the UI that shows all of the devices the user can emulate, in the Device Toolbar.
     */ emulatedDevices: 'Emulated Devices',
    /**
     *@description Button to add a custom device (e.g. phone, tablet) the Device Toolbar.
     */ addCustomDevice: 'Add custom device...',
    /**
     *@description Label/title for UI to add a new custom device type. Device means mobile/tablet etc.
     */ device: 'Device',
    /**
     *@description Placeholder for text input for the name of a custom device.
     */ deviceName: 'Device Name',
    /**
     *@description Placeholder text for text input for the width of a custom device in pixels.
     */ width: 'Width',
    /**
     *@description Placeholder text for text input for the height of a custom device in pixels.
     */ height: 'Height',
    /**
     *@description Placeholder text for text input for the height/width ratio of a custom device in pixels.
     */ devicePixelRatio: 'Device pixel ratio',
    /**
     *@description Label in the Devices settings pane for the user agent string input of a custom device
     */ userAgentString: 'User agent string',
    /**
     *@description Tooltip text for a drop-down in the Devices settings pane, for the 'user agent type' input of a custom device.
     * 'Type' refers to different options e.g. mobile or desktop.
     */ userAgentType: 'User agent type',
    /**
     *@description Error message in the Devices settings pane that declares the maximum length of the device name input
     *@example {50} PH1
     */ deviceNameMustBeLessThanS: 'Device name must be less than {PH1} characters.',
    /**
     *@description Error message in the Devices settings pane that declares that the device name input must not be empty
     */ deviceNameCannotBeEmpty: 'Device name cannot be empty.',
    /**
     *@description Success message for screen readers when device is added.
     *@example {TestDevice} PH1
     */ deviceAddedOrUpdated: 'Device {PH1} successfully added/updated.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/settings/emulation/DevicesSettingsTab.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var DevicesSettingsTab = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(DevicesSettingsTab, _UI_Widget_VBox);
    var _super = _create_super(DevicesSettingsTab);
    function DevicesSettingsTab() {
        _class_call_check(this, DevicesSettingsTab);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "containerElement", void 0);
        _define_property(_assert_this_initialized(_this), "addCustomButton", void 0);
        _define_property(_assert_this_initialized(_this), "ariaSuccessMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "muteUpdate", void 0);
        _define_property(_assert_this_initialized(_this), "emulatedDevicesList", void 0);
        _define_property(_assert_this_initialized(_this), "editor", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('devices')));
        _this.element.classList.add('settings-tab-container');
        _this.element.classList.add('devices-settings-tab');
        var header = _this.element.createChild('header');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(header.createChild('h1'), i18nString(UIStrings.emulatedDevices));
        _this.containerElement = _this.element.createChild('div', 'settings-container-wrapper').createChild('div', 'settings-tab settings-content settings-container');
        var buttonsRow = _this.containerElement.createChild('div', 'devices-button-row');
        _this.addCustomButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.addCustomDevice), _this.addCustomDevice.bind(_assert_this_initialized(_this)), {
            jslogContext: 'add-custom-device'
        });
        _this.addCustomButton.id = 'custom-device-add-button';
        buttonsRow.appendChild(_this.addCustomButton);
        _this.ariaSuccessMessageElement = _this.containerElement.createChild('div', 'device-success-message');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsPoliteLiveRegion(_this.ariaSuccessMessageElement, false);
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.ListWidget(_assert_this_initialized(_this), false);
        _this.list.element.classList.add('devices-list');
        _this.list.show(_this.containerElement);
        _this.muteUpdate = false;
        _this.emulatedDevicesList = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.EmulatedDevicesList.instance();
        _this.emulatedDevicesList.addEventListener("CustomDevicesUpdated" /* EmulationModel.EmulatedDevices.Events.CustomDevicesUpdated */ , _this.devicesUpdated, _assert_this_initialized(_this));
        _this.emulatedDevicesList.addEventListener("StandardDevicesUpdated" /* EmulationModel.EmulatedDevices.Events.StandardDevicesUpdated */ , _this.devicesUpdated, _assert_this_initialized(_this));
        _this.setDefaultFocusedElement(_this.addCustomButton);
        return _this;
    }
    _create_class(DevicesSettingsTab, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(DevicesSettingsTab.prototype), "wasShown", this).call(this);
                this.devicesUpdated();
                this.registerCSSFiles([
                    _devicesSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.list.registerCSSFiles([
                    _devicesSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        },
        {
            key: "devicesUpdated",
            value: function devicesUpdated() {
                if (this.muteUpdate) {
                    return;
                }
                this.list.clear();
                var devices = this.emulatedDevicesList.custom().slice();
                for(var i = 0; i < devices.length; ++i){
                    this.list.appendItem(devices[i], true);
                }
                this.list.appendSeparator();
                devices = this.emulatedDevicesList.standard().slice();
                devices.sort(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.EmulatedDevice.deviceComparator);
                for(var i1 = 0; i1 < devices.length; ++i1){
                    this.list.appendItem(devices[i1], false);
                }
            }
        },
        {
            key: "muteAndSaveDeviceList",
            value: function muteAndSaveDeviceList(custom) {
                this.muteUpdate = true;
                if (custom) {
                    this.emulatedDevicesList.saveCustomDevices();
                } else {
                    this.emulatedDevicesList.saveStandardDevices();
                }
                this.muteUpdate = false;
            }
        },
        {
            key: "addCustomDevice",
            value: function addCustomDevice() {
                var device = new _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.EmulatedDevice();
                device.deviceScaleFactor = 0;
                device.horizontal.width = 700;
                device.horizontal.height = 400;
                device.vertical.width = 400;
                device.vertical.height = 700;
                this.list.addNewItem(this.emulatedDevicesList.custom().length, device);
            }
        },
        {
            key: "toNumericInputValue",
            value: function toNumericInputValue(value) {
                return value ? String(value) : '';
            }
        },
        {
            key: "renderItem",
            value: function renderItem(device, editable) {
                var label = document.createElement('label');
                label.classList.add('devices-list-item');
                var checkbox = label.createChild('input', 'devices-list-checkbox');
                checkbox.type = 'checkbox';
                checkbox.checked = device.show();
                checkbox.addEventListener('click', onItemClicked.bind(this), false);
                checkbox.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toggle().track({
                    click: true
                })));
                var span = document.createElement('span');
                span.classList.add('device-name');
                span.appendChild(document.createTextNode(device.title));
                label.appendChild(span);
                return label;
                function onItemClicked(event) {
                    var show = checkbox.checked;
                    device.setShow(show);
                    this.muteAndSaveDeviceList(editable);
                    event.consume();
                }
            }
        },
        {
            key: "removeItemRequested",
            value: function removeItemRequested(item) {
                this.emulatedDevicesList.removeCustomDevice(item);
            }
        },
        {
            key: "commitEdit",
            value: function commitEdit(device, editor, isNew) {
                device.title = editor.control('title').value.trim();
                device.vertical.width = editor.control('width').value ? parseInt(editor.control('width').value, 10) : 0;
                device.vertical.height = editor.control('height').value ? parseInt(editor.control('height').value, 10) : 0;
                device.horizontal.width = device.vertical.height;
                device.horizontal.height = device.vertical.width;
                device.deviceScaleFactor = editor.control('scale').value ? parseFloat(editor.control('scale').value) : 0;
                device.userAgent = editor.control('user-agent').value;
                device.modes = [];
                device.modes.push({
                    title: '',
                    orientation: _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.Vertical,
                    insets: new _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.Insets(0, 0, 0, 0),
                    image: null
                });
                device.modes.push({
                    title: '',
                    orientation: _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.EmulatedDevices.Horizontal,
                    insets: new _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.Insets(0, 0, 0, 0),
                    image: null
                });
                device.capabilities = [];
                var uaType = editor.control('ua-type').value;
                if (uaType === "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */  || uaType === "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */ ) {
                    device.capabilities.push("mobile" /* EmulationModel.EmulatedDevices.Capability.Mobile */ );
                }
                if (uaType === "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */  || uaType === "Desktop (touch)" /* EmulationModel.DeviceModeModel.UA.DesktopTouch */ ) {
                    device.capabilities.push("touch" /* EmulationModel.EmulatedDevices.Capability.Touch */ );
                }
                var userAgentControlValue = editor.control('ua-metadata').value.metaData;
                if (userAgentControlValue) {
                    device.userAgentMetadata = _object_spread_props(_object_spread({}, userAgentControlValue), {
                        mobile: uaType === "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */  || uaType === "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */ 
                    });
                }
                if (isNew) {
                    this.emulatedDevicesList.addCustomDevice(device);
                } else {
                    this.emulatedDevicesList.saveCustomDevices();
                }
                this.addCustomButton.scrollIntoViewIfNeeded();
                this.addCustomButton.focus();
                this.ariaSuccessMessageElement.setAttribute('aria-label', i18nString(UIStrings.deviceAddedOrUpdated, {
                    PH1: device.title
                }));
            }
        },
        {
            key: "beginEdit",
            value: function beginEdit(device) {
                var editor = this.createEditor();
                editor.control('title').value = device.title;
                editor.control('width').value = this.toNumericInputValue(device.vertical.width);
                editor.control('height').value = this.toNumericInputValue(device.vertical.height);
                editor.control('scale').value = this.toNumericInputValue(device.deviceScaleFactor);
                editor.control('user-agent').value = device.userAgent;
                var uaType;
                if (device.mobile()) {
                    uaType = device.touch() ? "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */  : "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */ ;
                } else {
                    uaType = device.touch() ? "Desktop (touch)" /* EmulationModel.DeviceModeModel.UA.DesktopTouch */  : "Desktop" /* EmulationModel.DeviceModeModel.UA.Desktop */ ;
                }
                editor.control('ua-type').value = uaType;
                editor.control('ua-metadata').value = {
                    metaData: device.userAgentMetadata || undefined
                };
                return editor;
            }
        },
        {
            key: "createEditor",
            value: function createEditor() {
                if (this.editor) {
                    return this.editor;
                }
                var editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.Editor();
                this.editor = editor;
                var content = editor.contentElement();
                var deviceFields = content.createChild('div', 'devices-edit-fields');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(deviceFields.createChild('b'), i18nString(UIStrings.device));
                var deviceNameField = editor.createInput('title', 'text', i18nString(UIStrings.deviceName), titleValidator);
                deviceFields.createChild('div', 'hbox').appendChild(deviceNameField);
                deviceNameField.id = 'custom-device-name-field';
                var screen = deviceFields.createChild('div', 'hbox');
                screen.appendChild(editor.createInput('width', 'text', i18nString(UIStrings.width), widthValidator));
                screen.appendChild(editor.createInput('height', 'text', i18nString(UIStrings.height), heightValidator));
                var dpr = editor.createInput('scale', 'text', i18nString(UIStrings.devicePixelRatio), scaleValidator);
                dpr.classList.add('device-edit-fixed');
                screen.appendChild(dpr);
                var uaStringFields = content.createChild('div', 'devices-edit-fields');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(uaStringFields.createChild('b'), i18nString(UIStrings.userAgentString));
                var ua = uaStringFields.createChild('div', 'hbox');
                ua.appendChild(editor.createInput('user-agent', 'text', i18nString(UIStrings.userAgentString), function() {
                    return {
                        valid: true,
                        errorMessage: undefined
                    };
                }));
                var uaTypeOptions = [
                    "Mobile" /* EmulationModel.DeviceModeModel.UA.Mobile */ ,
                    "Mobile (no touch)" /* EmulationModel.DeviceModeModel.UA.MobileNoTouch */ ,
                    "Desktop" /* EmulationModel.DeviceModeModel.UA.Desktop */ ,
                    "Desktop (touch)" /* EmulationModel.DeviceModeModel.UA.DesktopTouch */ 
                ];
                var uaType = editor.createSelect('ua-type', uaTypeOptions, function() {
                    return {
                        valid: true,
                        errorMessage: undefined
                    };
                }, i18nString(UIStrings.userAgentType));
                uaType.classList.add('device-edit-fixed');
                ua.appendChild(uaType);
                var uaMetadata = editor.createCustomControl('ua-metadata', _components_components_js__WEBPACK_IMPORTED_MODULE_4__.UserAgentClientHintsForm.UserAgentClientHintsForm, userAgentMetadataValidator);
                uaMetadata.value = {};
                uaMetadata.addEventListener('clienthintschange', function() {
                    return editor.requestValidation();
                }, false);
                content.appendChild(uaMetadata);
                return editor;
                function userAgentMetadataValidator() {
                    return uaMetadata.validate();
                }
                function titleValidator(item, index, input) {
                    var valid = false;
                    var errorMessage;
                    var value = input.value.trim();
                    if (value.length >= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.MaxDeviceNameLength) {
                        errorMessage = i18nString(UIStrings.deviceNameMustBeLessThanS, {
                            PH1: _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.MaxDeviceNameLength
                        });
                    } else if (value.length === 0) {
                        errorMessage = i18nString(UIStrings.deviceNameCannotBeEmpty);
                    } else {
                        valid = true;
                    }
                    return {
                        valid: valid,
                        errorMessage: errorMessage
                    };
                }
                function widthValidator(item, index, input) {
                    return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.DeviceModeModel.widthValidator(input.value);
                }
                function heightValidator(item, index, input) {
                    return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.DeviceModeModel.heightValidator(input.value);
                }
                function scaleValidator(item, index, input) {
                    return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_1__.DeviceModeModel.DeviceModeModel.scaleValidator(input.value);
                }
            }
        }
    ]);
    return DevicesSettingsTab;
} //# sourceMappingURL=DevicesSettingsTab.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox);


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
"./panels/settings/emulation/devicesSettingsTab.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.devices-settings-tab .settings-container-wrapper {\n  padding-top: 5px;\n}\n\n.devices-settings-tab .settings-tab.settings-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 100%;\n  margin: 0;\n}\n\n.devices-settings-tab .devices-button-row {\n  flex: none;\n  display: flex;\n\n  devtools-button {\n    margin: 4px 0 0 5px;\n  }\n}\n\n.devices-settings-tab .devices-list {\n  width: min(350px, 100%);\n  margin-top: 10px;\n}\n\n.devices-list-item {\n  padding: 3px 5px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  flex: auto 1 1;\n  overflow: hidden;\n  color: var(--sys-color-on-surface);\n  user-select: none;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.devices-list-checkbox {\n  height: 12px;\n  width: 12px;\n  margin: 2px 5px 2px 2px;\n  flex: none;\n  pointer-events: none;\n}\n\n.devices-list-checkbox:focus {\n  outline: auto 5px -webkit-focus-ring-color;\n}\n\n.device-name {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.devices-edit-fields {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding-left: 4px;\n  margin-bottom: 5px;\n}\n\n.devices-edit-fields b {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n\n.devices-edit-client-hints-heading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 5px;\n}\n/* Don't want the bottom margin in the specific case of the folding one;\n * it messes with alignment with the arrow (which is a ::before) and  it's\n * spaced reasonably without it anyway\n */\nli .devices-edit-client-hints-heading {\n  margin-bottom: 0;\n}\n\n.devices-edit-client-hints-heading b {\n  margin-inline-end: 2px;\n}\n\n.devices-edit-client-hints-heading .help-icon {\n  margin-left: 2px;\n  margin-right: 2px;\n  vertical-align: middle;\n}\n\n.devices-edit-client-hints-heading a:focus {\n  box-shadow: var(--sys-color-state-focus-ring);\n}\n\n.devices-edit-fields input {\n  flex: auto;\n  margin: 8px 5px 0;\n}\n\nli.devices-edit-client-hints-field {\n  /* Cancel out padding from treeview's .tree-outline ol */\n  left: -12px;\n}\n\n.devices-edit-client-hints-field input {\n  flex: auto;\n  margin: 8px 5px 0;\n}\n\n.devices-edit-fields .device-edit-fixed {\n  flex: 0 0 140px;\n}\n\n.devices-edit-fields select {\n  margin: 8px 5px 0;\n}\n\n/*# sourceURL=devicesSettingsTab.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);