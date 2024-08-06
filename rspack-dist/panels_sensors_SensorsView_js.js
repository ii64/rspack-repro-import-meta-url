"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sensors_SensorsView_js"], {
"./panels/sensors/SensorsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NonPresetOptions: function() { return NonPresetOptions; },
  SensorsView: function() { return SensorsView; },
  ShiftDragOrientationSpeed: function() { return ShiftDragOrientationSpeed; },
  ShowActionDelegate: function() { return ShowActionDelegate; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _sensors_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sensors.css.js */ "./panels/sensors/sensors.css.js");
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
     *@description Title for a group of cities
     */ location: 'Location',
    /**
     *@description An option that appears in a drop-down to prevent the GPS location of the user from being overridden.
     */ noOverride: 'No override',
    /**
     *@description Title of a section that contains overrides for the user's GPS location.
     */ overrides: 'Overrides',
    /**
     *@description Text of button in Sensors View, takes the user to the custom location setting screen
     *where they can enter/edit custom locations.
     */ manage: 'Manage',
    /**
     *@description Aria-label for location manage button in Sensors View
     */ manageTheListOfLocations: 'Manage the list of locations',
    /**
     *@description Option in a drop-down input for selecting the GPS location of the user. As an
     *alternative to selecting a location from the list, the user can select this option and they are
     *prompted to enter the details for a new custom location.
     */ other: 'Other…',
    /**
     *@description Title of a section in a drop-down input that contains error locations, e.g. to select
     *a location override that says 'the location is not available'. A noun.
     */ error: 'Error',
    /**
     *@description A type of override where the geographic location of the user is not available.
     */ locationUnavailable: 'Location unavailable',
    /**
     *@description Tooltip text telling the user how to change the value of a latitude/longitude input
     *text box. several shortcuts are provided for convenience. The placeholder can be different
     *keyboard keys, depending on the user's settings.
     *@example {Ctrl} PH1
     */ adjustWithMousewheelOrUpdownKeys: 'Adjust with mousewheel or up/down keys. {PH1}: ±10, Shift: ±1, Alt: ±0.01',
    /**
     *@description Label for latitude of a GPS location.
     */ latitude: 'Latitude',
    /**
     *@description Label for Longitude of a GPS location.
     */ longitude: 'Longitude',
    /**
     *@description Label for the ID of a timezone for a particular location.
     */ timezoneId: 'Timezone ID',
    /**
     *@description Label for the locale relevant to a custom location.
     */ locale: 'Locale',
    /**
     *@description Label the orientation of a user's device e.g. tilt in 3D-space.
     */ orientation: 'Orientation',
    /**
     *@description Option that when chosen, turns off device orientation override.
     */ off: 'Off',
    /**
     *@description Option that when chosen, allows the user to enter a custom orientation for the device e.g. tilt in 3D-space.
     */ customOrientation: 'Custom orientation',
    /**
     *@description Warning to the user they should enable the device orientation override, in order to
     *enable this input which allows them to interactively select orientation by dragging a 3D phone
     *model.
     */ enableOrientationToRotate: 'Enable orientation to rotate',
    /**
     *@description Text telling the user how to use an input which allows them to interactively select
     *orientation by dragging a 3D phone model.
     */ shiftdragHorizontallyToRotate: 'Shift+drag horizontally to rotate around the y-axis',
    /**
     *@description Message in the Sensors tool that is alerted (for screen readers) when the device orientation setting is changed
     *@example {180} PH1
     *@example {-90} PH2
     *@example {0} PH3
     */ deviceOrientationSetToAlphaSBeta: 'Device orientation set to alpha: {PH1}, beta: {PH2}, gamma: {PH3}',
    /**
     *@description Text of orientation reset button in Sensors View of the Device Toolbar
     */ reset: 'Reset',
    /**
     *@description Aria-label for orientation reset button in Sensors View. Command.
     */ resetDeviceOrientation: 'Reset device orientation',
    /**
     *@description Description of the Touch select in Sensors tab
     */ forcesTouchInsteadOfClick: 'Forces touch instead of click',
    /**
     *@description Description of the Emulate Idle State select in Sensors tab
     */ forcesSelectedIdleStateEmulation: 'Forces selected idle state emulation',
    /**
     *@description Title for a group of configuration options in a drop-down input.
     */ presets: 'Presets',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */ portrait: 'Portrait',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */ portraitUpsideDown: 'Portrait upside down',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */ landscapeLeft: 'Landscape left',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space.
     */ landscapeRight: 'Landscape right',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space. Noun indicating
     *the display of the device is pointing up.
     */ displayUp: 'Display up',
    /**
     *@description Drop-down input option for the orientation of a device in 3D space. Noun indicating
     *the display of the device is pointing down.
     */ displayDown: 'Display down',
    /**
     *@description Label for one dimension of device orientation that the user can override.
     */ alpha: '\u03B1 (alpha)',
    /**
     *@description Label for one dimension of device orientation that the user can override.
     */ beta: '\u03B2 (beta)',
    /**
     *@description Label for one dimension of device orientation that the user can override.
     */ gamma: '\u03B3 (gamma)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sensors/SensorsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _locationSetting = /*#__PURE__*/ new WeakMap(), _location = /*#__PURE__*/ new WeakMap(), _locationOverrideEnabled = /*#__PURE__*/ new WeakMap(), _locationSelectChanged = /*#__PURE__*/ new WeakSet();
var SensorsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(SensorsView, _UI_Widget_VBox);
    var _super = _create_super(SensorsView);
    function SensorsView() {
        _class_call_check(this, SensorsView);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _locationSelectChanged);
        _class_private_field_init(_assert_this_initialized(_this), _locationSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _location, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _locationOverrideEnabled, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "fieldsetElement", void 0);
        _define_property(_assert_this_initialized(_this), "timezoneError", void 0);
        _define_property(_assert_this_initialized(_this), "locationSelectElement", void 0);
        _define_property(_assert_this_initialized(_this), "latitudeInput", void 0);
        _define_property(_assert_this_initialized(_this), "longitudeInput", void 0);
        _define_property(_assert_this_initialized(_this), "timezoneInput", void 0);
        _define_property(_assert_this_initialized(_this), "localeInput", void 0);
        _define_property(_assert_this_initialized(_this), "latitudeSetter", void 0);
        _define_property(_assert_this_initialized(_this), "longitudeSetter", void 0);
        _define_property(_assert_this_initialized(_this), "timezoneSetter", void 0);
        _define_property(_assert_this_initialized(_this), "localeSetter", void 0);
        _define_property(_assert_this_initialized(_this), "localeError", void 0);
        _define_property(_assert_this_initialized(_this), "customLocationsGroup", void 0);
        _define_property(_assert_this_initialized(_this), "deviceOrientationSetting", void 0);
        _define_property(_assert_this_initialized(_this), "deviceOrientation", void 0);
        _define_property(_assert_this_initialized(_this), "deviceOrientationOverrideEnabled", void 0);
        _define_property(_assert_this_initialized(_this), "deviceOrientationFieldset", void 0);
        _define_property(_assert_this_initialized(_this), "stageElement", void 0);
        _define_property(_assert_this_initialized(_this), "orientationSelectElement", void 0);
        _define_property(_assert_this_initialized(_this), "alphaElement", void 0);
        _define_property(_assert_this_initialized(_this), "betaElement", void 0);
        _define_property(_assert_this_initialized(_this), "gammaElement", void 0);
        _define_property(_assert_this_initialized(_this), "alphaSetter", void 0);
        _define_property(_assert_this_initialized(_this), "betaSetter", void 0);
        _define_property(_assert_this_initialized(_this), "gammaSetter", void 0);
        _define_property(_assert_this_initialized(_this), "orientationLayer", void 0);
        _define_property(_assert_this_initialized(_this), "boxElement", void 0);
        _define_property(_assert_this_initialized(_this), "boxMatrix", void 0);
        _define_property(_assert_this_initialized(_this), "mouseDownVector", void 0);
        _define_property(_assert_this_initialized(_this), "originalBoxMatrix", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.panel('sensors').track({
            resize: true
        })));
        _this.contentElement.classList.add('sensors-view');
        _class_private_field_set(_assert_this_initialized(_this), _locationSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.location-override', ''));
        _class_private_field_set(_assert_this_initialized(_this), _location, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.parseSetting(_class_private_field_get(_this, _locationSetting).get()));
        _class_private_field_set(_assert_this_initialized(_this), _locationOverrideEnabled, false);
        _this.createLocationSection(_class_private_field_get(_assert_this_initialized(_this), _location));
        _this.createPanelSeparator();
        _this.deviceOrientationSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('emulation.device-orientation-override', '');
        _this.deviceOrientation = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.parseSetting(_this.deviceOrientationSetting.get());
        _this.deviceOrientationOverrideEnabled = false;
        _this.createDeviceOrientationSection();
        _this.createPanelSeparator();
        _this.appendTouchControl();
        _this.createPanelSeparator();
        _this.appendIdleEmulator();
        _this.createPanelSeparator();
        return _this;
    }
    _create_class(SensorsView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SensorsView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _sensors_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        },
        {
            key: "createPanelSeparator",
            value: function createPanelSeparator() {
                this.contentElement.createChild('div').classList.add('panel-section-separator');
            }
        },
        {
            key: "createLocationSection",
            value: function createLocationSection(location) {
                var _this = this;
                var geogroup = this.contentElement.createChild('section', 'sensors-group');
                geogroup.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('location')));
                var geogroupTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.location), 'sensors-group-title');
                geogroup.appendChild(geogroupTitle);
                var fields = geogroup.createChild('div', 'geo-fields');
                var selectedIndex = 0;
                var noOverrideOption = {
                    title: i18nString(UIStrings.noOverride),
                    location: NonPresetOptions.NoOverride
                };
                this.locationSelectElement = fields.createChild('select', 'chrome-select');
                this.locationSelectElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown().track({
                    change: true
                })));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.bindLabelToControl(geogroupTitle, this.locationSelectElement);
                // No override
                this.locationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(noOverrideOption.title, noOverrideOption.location, 'no-override'));
                this.customLocationsGroup = this.locationSelectElement.createChild('optgroup');
                this.customLocationsGroup.label = i18nString(UIStrings.overrides);
                var customLocations = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.locations');
                var manageButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextButton(i18nString(UIStrings.manage), function() {
                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(customLocations);
                }, {
                    className: 'manage-locations',
                    jslogContext: 'sensors.manage-locations'
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(manageButton, i18nString(UIStrings.manageTheListOfLocations));
                fields.appendChild(manageButton);
                var fillCustomSettings = function() {
                    if (!_this.customLocationsGroup) {
                        return;
                    }
                    _this.customLocationsGroup.removeChildren();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = customLocations.get().entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), i = _step_value[0], customLocation = _step_value[1];
                            _this.customLocationsGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customLocation.title, JSON.stringify(customLocation), 'custom'));
                            if (location.latitude === customLocation.lat && location.longitude === customLocation.long) {
                                // If the location coming from settings matches the custom location, use its index to select the option
                                selectedIndex = i + 1;
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
                };
                customLocations.addChangeListener(fillCustomSettings);
                fillCustomSettings();
                // Other location
                var customLocationOption = {
                    title: i18nString(UIStrings.other),
                    location: NonPresetOptions.Custom
                };
                this.locationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customLocationOption.title, customLocationOption.location, 'other'));
                // Error location.
                var group = this.locationSelectElement.createChild('optgroup');
                group.label = i18nString(UIStrings.error);
                group.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(i18nString(UIStrings.locationUnavailable), NonPresetOptions.Unavailable, 'unavailable'));
                this.locationSelectElement.selectedIndex = selectedIndex;
                this.locationSelectElement.addEventListener('change', _class_private_method_get(this, _locationSelectChanged, locationSelectChanged).bind(this));
                this.fieldsetElement = fields.createChild('fieldset');
                this.fieldsetElement.disabled = !_class_private_field_get(this, _locationOverrideEnabled);
                this.fieldsetElement.id = 'location-override-section';
                var latitudeGroup = this.fieldsetElement.createChild('div', 'latlong-group');
                var longitudeGroup = this.fieldsetElement.createChild('div', 'latlong-group');
                var timezoneGroup = this.fieldsetElement.createChild('div', 'latlong-group');
                var localeGroup = this.fieldsetElement.createChild('div', 'latlong-group');
                var cmdOrCtrl = _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? '\u2318' : 'Ctrl';
                var modifierKeyMessage = i18nString(UIStrings.adjustWithMousewheelOrUpdownKeys, {
                    PH1: cmdOrCtrl
                });
                this.latitudeInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'latitude');
                latitudeGroup.appendChild(this.latitudeInput);
                this.latitudeInput.setAttribute('step', 'any');
                this.latitudeInput.value = '0';
                this.latitudeSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.latitudeInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.latitudeValidator, true, 0.1);
                this.latitudeSetter(String(location.latitude));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.latitudeInput, modifierKeyMessage);
                latitudeGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.latitude), 'latlong-title', this.latitudeInput));
                this.longitudeInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'longitude');
                longitudeGroup.appendChild(this.longitudeInput);
                this.longitudeInput.setAttribute('step', 'any');
                this.longitudeInput.value = '0';
                this.longitudeSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.longitudeInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.longitudeValidator, true, 0.1);
                this.longitudeSetter(String(location.longitude));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.longitudeInput, modifierKeyMessage);
                longitudeGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.longitude), 'latlong-title', this.longitudeInput));
                this.timezoneInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'text', 'timezone');
                timezoneGroup.appendChild(this.timezoneInput);
                this.timezoneInput.value = 'Europe/Berlin';
                this.timezoneSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.timezoneInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.timezoneIdValidator, false);
                this.timezoneSetter(location.timezoneId);
                timezoneGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.timezoneId), 'timezone-title', this.timezoneInput));
                this.timezoneError = timezoneGroup.createChild('div', 'timezone-error');
                this.localeInput = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'text', 'locale');
                localeGroup.appendChild(this.localeInput);
                this.localeInput.value = 'en-US';
                this.localeSetter = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(this.localeInput, this.applyLocationUserInput.bind(this), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.localeValidator, false);
                this.localeSetter(location.locale);
                localeGroup.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.locale), 'locale-title', this.localeInput));
                this.localeError = localeGroup.createChild('div', 'locale-error');
            }
        },
        {
            key: "applyLocationUserInput",
            value: function applyLocationUserInput() {
                var location = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.parseUserInput(this.latitudeInput.value.trim(), this.longitudeInput.value.trim(), this.timezoneInput.value.trim(), this.localeInput.value.trim());
                if (!location) {
                    return;
                }
                this.timezoneError.textContent = '';
                this.setSelectElementLabel(this.locationSelectElement, NonPresetOptions.Custom);
                _class_private_field_set(this, _location, location);
                this.applyLocation();
            }
        },
        {
            key: "applyLocation",
            value: function applyLocation() {
                var _this = this;
                if (_class_private_field_get(this, _locationOverrideEnabled)) {
                    _class_private_field_get(this, _locationSetting).set(_class_private_field_get(this, _location).toSetting());
                } else {
                    _class_private_field_get(this, _locationSetting).set('');
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var emulationModel = _step.value;
                        emulationModel.emulateLocation(_class_private_field_get(this, _locationOverrideEnabled) ? _class_private_field_get(this, _location) : null).catch(function(err) {
                            switch(err.type){
                                case 'emulation-set-timezone':
                                    {
                                        _this.timezoneError.textContent = err.message;
                                        break;
                                    }
                                case 'emulation-set-locale':
                                    {
                                        _this.localeError.textContent = err.message;
                                        break;
                                    }
                            }
                        });
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
            key: "clearFieldsetElementInputs",
            value: function clearFieldsetElementInputs() {
                this.latitudeSetter('0');
                this.longitudeSetter('0');
                this.timezoneSetter('');
                this.localeSetter('');
            }
        },
        {
            key: "createDeviceOrientationSection",
            value: function createDeviceOrientationSection() {
                var _this = this;
                var orientationGroup = this.contentElement.createChild('section', 'sensors-group');
                orientationGroup.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('device-orientation')));
                var orientationTitle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(i18nString(UIStrings.orientation), 'sensors-group-title');
                orientationGroup.appendChild(orientationTitle);
                var orientationContent = orientationGroup.createChild('div', 'orientation-content');
                var fields = orientationContent.createChild('div', 'orientation-fields');
                var orientationOffOption = {
                    title: i18nString(UIStrings.off),
                    orientation: NonPresetOptions.NoOverride,
                    jslogContext: 'off'
                };
                var customOrientationOption = {
                    title: i18nString(UIStrings.customOrientation),
                    orientation: NonPresetOptions.Custom
                };
                var orientationGroups = [
                    {
                        title: i18nString(UIStrings.presets),
                        value: [
                            {
                                title: i18nString(UIStrings.portrait),
                                orientation: '[0, 90, 0]',
                                jslogContext: 'portrait'
                            },
                            {
                                title: i18nString(UIStrings.portraitUpsideDown),
                                orientation: '[180, -90, 0]',
                                jslogContext: 'portrait-upside-down'
                            },
                            {
                                title: i18nString(UIStrings.landscapeLeft),
                                orientation: '[90, 0, -90]',
                                jslogContext: 'landscape-left'
                            },
                            {
                                title: i18nString(UIStrings.landscapeRight),
                                orientation: '[90, -180, -90]',
                                jslogContext: 'landscape-right'
                            },
                            {
                                title: i18nString(UIStrings.displayUp),
                                orientation: '[0, 0, 0]',
                                jslogContext: 'display-up'
                            },
                            {
                                title: i18nString(UIStrings.displayDown),
                                orientation: '[0, -180, 0]',
                                jslogContext: 'displayUp-down'
                            }
                        ]
                    }
                ];
                this.orientationSelectElement = this.contentElement.createChild('select', 'chrome-select');
                this.orientationSelectElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dropDown().track({
                    change: true
                })));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.bindLabelToControl(orientationTitle, this.orientationSelectElement);
                this.orientationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(orientationOffOption.title, orientationOffOption.orientation, orientationOffOption.jslogContext));
                this.orientationSelectElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(customOrientationOption.title, customOrientationOption.orientation, 'custom'));
                for(var i = 0; i < orientationGroups.length; ++i){
                    var groupElement = this.orientationSelectElement.createChild('optgroup');
                    groupElement.label = orientationGroups[i].title;
                    var group = orientationGroups[i].value;
                    for(var j = 0; j < group.length; ++j){
                        groupElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createOption(group[j].title, group[j].orientation, group[j].jslogContext));
                    }
                }
                this.orientationSelectElement.selectedIndex = 0;
                fields.appendChild(this.orientationSelectElement);
                this.orientationSelectElement.addEventListener('change', this.orientationSelectChanged.bind(this));
                this.deviceOrientationFieldset = this.createDeviceOrientationOverrideElement(this.deviceOrientation);
                this.stageElement = orientationContent.createChild('div', 'orientation-stage');
                this.stageElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.preview().track({
                    drag: true
                })));
                this.orientationLayer = this.stageElement.createChild('div', 'orientation-layer');
                this.boxElement = this.orientationLayer.createChild('section', 'orientation-box orientation-element');
                this.boxElement.createChild('section', 'orientation-front orientation-element');
                this.boxElement.createChild('section', 'orientation-top orientation-element');
                this.boxElement.createChild('section', 'orientation-back orientation-element');
                this.boxElement.createChild('section', 'orientation-left orientation-element');
                this.boxElement.createChild('section', 'orientation-right orientation-element');
                this.boxElement.createChild('section', 'orientation-bottom orientation-element');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.installDragHandle(this.stageElement, this.onBoxDragStart.bind(this), function(event) {
                    _this.onBoxDrag(event);
                }, null, '-webkit-grabbing', '-webkit-grab');
                fields.appendChild(this.deviceOrientationFieldset);
                this.enableOrientationFields(true);
                this.setBoxOrientation(this.deviceOrientation, false);
            }
        },
        {
            key: "enableOrientationFields",
            value: function enableOrientationFields(disable) {
                if (disable) {
                    this.deviceOrientationFieldset.disabled = true;
                    this.stageElement.classList.add('disabled');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.stageElement, i18nString(UIStrings.enableOrientationToRotate));
                } else {
                    this.deviceOrientationFieldset.disabled = false;
                    this.stageElement.classList.remove('disabled');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.stageElement, i18nString(UIStrings.shiftdragHorizontallyToRotate));
                }
            }
        },
        {
            key: "orientationSelectChanged",
            value: function orientationSelectChanged() {
                var value = this.orientationSelectElement.options[this.orientationSelectElement.selectedIndex].value;
                this.enableOrientationFields(false);
                if (value === NonPresetOptions.NoOverride) {
                    this.deviceOrientationOverrideEnabled = false;
                    this.enableOrientationFields(true);
                    this.applyDeviceOrientation();
                } else if (value === NonPresetOptions.Custom) {
                    this.deviceOrientationOverrideEnabled = true;
                    this.resetDeviceOrientation();
                    this.alphaElement.focus();
                } else {
                    var parsedValue = JSON.parse(value);
                    this.deviceOrientationOverrideEnabled = true;
                    this.deviceOrientation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation(parsedValue[0], parsedValue[1], parsedValue[2]);
                    this.setDeviceOrientation(this.deviceOrientation, "selectPreset" /* DeviceOrientationModificationSource.SelectPreset */ );
                }
            }
        },
        {
            key: "applyDeviceOrientation",
            value: function applyDeviceOrientation() {
                if (this.deviceOrientationOverrideEnabled) {
                    this.deviceOrientationSetting.set(this.deviceOrientation.toSetting());
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var emulationModel = _step.value;
                        void emulationModel.emulateDeviceOrientation(this.deviceOrientationOverrideEnabled ? this.deviceOrientation : null);
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
            key: "setSelectElementLabel",
            value: function setSelectElementLabel(selectElement, labelValue) {
                var optionValues = Array.prototype.map.call(selectElement.options, function(x) {
                    return x.value;
                });
                selectElement.selectedIndex = optionValues.indexOf(labelValue);
            }
        },
        {
            key: "applyDeviceOrientationUserInput",
            value: function applyDeviceOrientationUserInput() {
                this.setDeviceOrientation(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.parseUserInput(this.alphaElement.value.trim(), this.betaElement.value.trim(), this.gammaElement.value.trim()), "userInput" /* DeviceOrientationModificationSource.UserInput */ );
                this.setSelectElementLabel(this.orientationSelectElement, NonPresetOptions.Custom);
            }
        },
        {
            key: "resetDeviceOrientation",
            value: function resetDeviceOrientation() {
                this.setDeviceOrientation(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation(0, 90, 0), "resetButton" /* DeviceOrientationModificationSource.ResetButton */ );
                this.setSelectElementLabel(this.orientationSelectElement, '[0, 90, 0]');
            }
        },
        {
            key: "setDeviceOrientation",
            value: function setDeviceOrientation(deviceOrientation, modificationSource) {
                if (!deviceOrientation) {
                    return;
                }
                function roundAngle(angle) {
                    return Math.round(angle * 10000) / 10000;
                }
                if (modificationSource !== "userInput" /* DeviceOrientationModificationSource.UserInput */ ) {
                    // Even though the angles in |deviceOrientation| will not be rounded
                    // here, their precision will be rounded by CSS when we change
                    // |this.orientationLayer.style| in setBoxOrientation().
                    this.alphaSetter(String(roundAngle(deviceOrientation.alpha)));
                    this.betaSetter(String(roundAngle(deviceOrientation.beta)));
                    this.gammaSetter(String(roundAngle(deviceOrientation.gamma)));
                }
                var animate = modificationSource !== "userDrag" /* DeviceOrientationModificationSource.UserDrag */ ;
                this.setBoxOrientation(deviceOrientation, animate);
                this.deviceOrientation = deviceOrientation;
                this.applyDeviceOrientation();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(i18nString(UIStrings.deviceOrientationSetToAlphaSBeta, {
                    PH1: deviceOrientation.alpha,
                    PH2: deviceOrientation.beta,
                    PH3: deviceOrientation.gamma
                }));
            }
        },
        {
            key: "createAxisInput",
            value: function createAxisInput(parentElement, input, label, validator) {
                var div = parentElement.createChild('div', 'orientation-axis-input-container');
                div.appendChild(input);
                div.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createLabel(label, /* className */ '', input));
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.bindInput(input, this.applyDeviceOrientationUserInput.bind(this), validator, true);
            }
        },
        {
            key: "createDeviceOrientationOverrideElement",
            value: function createDeviceOrientationOverrideElement(deviceOrientation) {
                var fieldsetElement = document.createElement('fieldset');
                fieldsetElement.classList.add('device-orientation-override-section');
                var cellElement = fieldsetElement.createChild('td', 'orientation-inputs-cell');
                this.alphaElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'alpha');
                this.alphaElement.setAttribute('step', 'any');
                this.alphaSetter = this.createAxisInput(cellElement, this.alphaElement, i18nString(UIStrings.alpha), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.alphaAngleValidator);
                this.alphaSetter(String(deviceOrientation.alpha));
                this.betaElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'beta');
                this.betaElement.setAttribute('step', 'any');
                this.betaSetter = this.createAxisInput(cellElement, this.betaElement, i18nString(UIStrings.beta), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.betaAngleValidator);
                this.betaSetter(String(deviceOrientation.beta));
                this.gammaElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createInput('', 'number', 'gamma');
                this.gammaElement.setAttribute('step', 'any');
                this.gammaSetter = this.createAxisInput(cellElement, this.gammaElement, i18nString(UIStrings.gamma), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation.gammaAngleValidator);
                this.gammaSetter(String(deviceOrientation.gamma));
                var resetButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextButton(i18nString(UIStrings.reset), this.resetDeviceOrientation.bind(this), {
                    className: 'orientation-reset-button',
                    jslogContext: 'sensors.reset-device-orientiation'
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(resetButton, i18nString(UIStrings.resetDeviceOrientation));
                resetButton.setAttribute('type', 'reset');
                cellElement.appendChild(resetButton);
                return fieldsetElement;
            }
        },
        {
            key: "setBoxOrientation",
            value: function setBoxOrientation(deviceOrientation, animate) {
                if (animate) {
                    this.stageElement.classList.add('is-animating');
                } else {
                    this.stageElement.classList.remove('is-animating');
                }
                // It is important to explain the multiple conversions happening here. A
                // few notes on coordinate spaces first:
                // 1. The CSS coordinate space is left-handed. X and Y are parallel to the
                //    screen, and Z is perpendicular to the screen. X is positive to the
                //    right, Y is positive downwards and Z increases towards the viewer.
                //    See https://drafts.csswg.org/css-transforms-2/#transform-rendering
                //    for more information.
                // 2. The Device Orientation coordinate space is right-handed. X and Y are
                //    parallel to the screen, and Z is perpenticular to the screen. X is
                //    positive to the right, Y is positive upwards and Z increases towards
                //    the viewer. See
                //    https://w3c.github.io/deviceorientation/#deviceorientation for more
                //    information.
                // 3. Additionally, the phone model we display is rotated +90 degrees in
                //    the X axis in the CSS coordinate space (i.e. when all angles are 0 we
                //    cannot see its screen in DevTools).
                //
                // |this.boxMatrix| is set in the Device Orientation coordinate space
                // because it represents the phone model we show users and also because the
                // calculations in UI.Geometry.EulerAngles assume this coordinate space (so
                // we apply the rotations in the Z-X'-Y'' order).
                // The CSS transforms, on the other hand, are done in the CSS coordinate
                // space, so we need to convert 2) to 1) while keeping 3) in mind. We can
                // cover 3) by swapping the Y and Z axes, and 2) by inverting the X axis.
                var alpha = deviceOrientation.alpha, beta = deviceOrientation.beta, gamma = deviceOrientation.gamma;
                this.boxMatrix = new DOMMatrixReadOnly().rotate(0, 0, alpha).rotate(beta, 0, 0).rotate(0, gamma, 0);
                this.orientationLayer.style.transform = "rotateY(".concat(alpha, "deg) rotateX(").concat(-beta, "deg) rotateZ(").concat(gamma, "deg)");
            }
        },
        {
            key: "onBoxDrag",
            value: function onBoxDrag(event) {
                var mouseMoveVector = this.calculateRadiusVector(event.x, event.y);
                if (!mouseMoveVector) {
                    return true;
                }
                if (!this.mouseDownVector) {
                    return true;
                }
                event.consume(true);
                var axis, angle;
                if (event.shiftKey) {
                    axis = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Vector(0, 0, 1);
                    angle = (mouseMoveVector.x - this.mouseDownVector.x) * ShiftDragOrientationSpeed;
                } else {
                    axis = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.crossProduct(this.mouseDownVector, mouseMoveVector);
                    angle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.calculateAngle(this.mouseDownVector, mouseMoveVector);
                }
                // See the comment in setBoxOrientation() for a longer explanation about
                // the CSS coordinate space, the Device Orientation coordinate space and
                // the conversions we make. |axis| and |angle| are in the CSS coordinate
                // space, while |this.originalBoxMatrix| is rotated and in the Device
                // Orientation coordinate space, which is why we swap Y and Z and invert X.
                var currentMatrix = new DOMMatrixReadOnly().rotateAxisAngle(-axis.x, axis.z, axis.y, angle).multiply(this.originalBoxMatrix);
                var eulerAngles = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(currentMatrix);
                var newOrientation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.DeviceOrientation(eulerAngles.alpha, eulerAngles.beta, eulerAngles.gamma);
                this.setDeviceOrientation(newOrientation, "userDrag" /* DeviceOrientationModificationSource.UserDrag */ );
                this.setSelectElementLabel(this.orientationSelectElement, NonPresetOptions.Custom);
                return false;
            }
        },
        {
            key: "onBoxDragStart",
            value: function onBoxDragStart(event) {
                if (!this.deviceOrientationOverrideEnabled) {
                    return false;
                }
                this.mouseDownVector = this.calculateRadiusVector(event.x, event.y);
                this.originalBoxMatrix = this.boxMatrix;
                if (!this.mouseDownVector) {
                    return false;
                }
                event.consume(true);
                return true;
            }
        },
        {
            key: "calculateRadiusVector",
            value: function calculateRadiusVector(x, y) {
                var rect = this.stageElement.getBoundingClientRect();
                var radius = Math.max(rect.width, rect.height) / 2;
                var sphereX = (x - rect.left - rect.width / 2) / radius;
                var sphereY = (y - rect.top - rect.height / 2) / radius;
                var sqrSum = sphereX * sphereX + sphereY * sphereY;
                if (sqrSum > 0.5) {
                    return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Vector(sphereX, sphereY, 0.5 / Math.sqrt(sqrSum));
                }
                return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Geometry.Vector(sphereX, sphereY, Math.sqrt(1 - sqrSum));
            }
        },
        {
            key: "appendTouchControl",
            value: function appendTouchControl() {
                var container = this.contentElement.createChild('div', 'touch-section');
                var control = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SettingsUI.createControlForSetting(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.touch'), i18nString(UIStrings.forcesTouchInsteadOfClick));
                if (control) {
                    container.appendChild(control);
                }
            }
        },
        {
            key: "appendIdleEmulator",
            value: function appendIdleEmulator() {
                var container = this.contentElement.createChild('div', 'idle-section');
                var control = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SettingsUI.createControlForSetting(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.idle-detection'), i18nString(UIStrings.forcesSelectedIdleStateEmulation));
                if (control) {
                    container.appendChild(control);
                }
            }
        }
    ]);
    return SensorsView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);
function locationSelectChanged() {
    this.fieldsetElement.disabled = false;
    this.timezoneError.textContent = '';
    var value = this.locationSelectElement.options[this.locationSelectElement.selectedIndex].value;
    if (value === NonPresetOptions.NoOverride) {
        _class_private_field_set(this, _locationOverrideEnabled, false);
        this.clearFieldsetElementInputs();
        this.fieldsetElement.disabled = true;
    } else if (value === NonPresetOptions.Custom) {
        _class_private_field_set(this, _locationOverrideEnabled, true);
        var location = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location.parseUserInput(this.latitudeInput.value.trim(), this.longitudeInput.value.trim(), this.timezoneInput.value.trim(), this.localeInput.value.trim());
        if (!location) {
            return;
        }
        _class_private_field_set(this, _location, location);
    } else if (value === NonPresetOptions.Unavailable) {
        _class_private_field_set(this, _locationOverrideEnabled, true);
        _class_private_field_set(this, _location, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location(0, 0, '', '', true));
    } else {
        _class_private_field_set(this, _locationOverrideEnabled, true);
        var coordinates = JSON.parse(value);
        _class_private_field_set(this, _location, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.Location(coordinates.lat, coordinates.long, coordinates.timezoneId, coordinates.locale, false));
        this.latitudeSetter(coordinates.lat);
        this.longitudeSetter(coordinates.long);
        this.timezoneSetter(coordinates.timezoneId);
        this.localeSetter(coordinates.locale);
    }
    this.applyLocation();
    if (value === NonPresetOptions.Custom) {
        this.latitudeInput.focus();
    }
}
/** {string} */ var NonPresetOptions = {
    NoOverride: 'noOverride',
    Custom: 'custom',
    Unavailable: 'unavailable'
};
var ShowActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ShowActionDelegate() {
        _class_call_check(this, ShowActionDelegate);
    }
    _create_class(ShowActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, _actionId) {
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('sensors');
                return true;
            }
        }
    ]);
    return ShowActionDelegate;
}();
var ShiftDragOrientationSpeed = 16; //# sourceMappingURL=SensorsView.js.map


}),
"./panels/sensors/sensors.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.sensors-view {\n  padding: 12px;\n  display: block;\n}\n\n.sensors-view input {\n  width: 100%;\n  max-width: 120px;\n  margin: -5px 10px 0 0;\n  text-align: end;\n}\n\n.sensors-view input[readonly] {\n  background-color: var(--sys-color-neutral-container);\n}\n\n.sensors-view fieldset {\n  border: none;\n  padding: 10px 0;\n  flex: 0 0 auto;\n  margin: 0;\n}\n\n.sensors-view fieldset[disabled] {\n  opacity: 50%;\n}\n\n.orientation-axis-input-container input {\n  max-width: 120px;\n}\n\n.sensors-view input:focus::-webkit-input-placeholder {\n  color: transparent !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.sensors-view .chrome-select {\n  width: 200px;\n}\n\n.sensors-group-title {\n  width: 80px;\n  line-height: 24px;\n}\n\n.sensors-group {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n.manage-locations {\n  margin-left: var(--sys-size-4);\n}\n\n.geo-fields {\n  flex: 2 0 200px;\n}\n\n.latlong-group {\n  display: flex;\n  margin-bottom: 10px;\n}\n\n.latlong-title {\n  width: 70px;\n}\n\n.timezone-error,\n.locale-error {\n  margin-left: 10px;\n  color: var(--legacy-input-validation-error);\n}\n\n/* Device Orientation */\n\n.orientation-content {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.orientation-fields {\n  margin-right: 10px;\n}\n\n.orientation-stage {\n  --override-gradient-color-1: var(--ref-palette-cyan95);\n  --override-gradient-color-2: var(--ref-palette-cyan90);\n\n  perspective: 700px;\n  perspective-origin: 50% 50%;\n  width: 160px;\n  height: 150px;\n  background: linear-gradient(var(--override-gradient-color-1) 0%, var(--override-gradient-color-1) 64%, var(--override-gradient-color-2) 64%, var(--override-gradient-color-1) 100%);\n  transition: 0.2s ease opacity, 0.2s ease filter;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.theme-with-dark-background .orientation-stage,\n:host-context(.theme-with-dark-background) .orientation-stage {\n  --override-gradient-color-1: var(--ref-palette-cyan10);\n  --override-gradient-color-2: var(--ref-palette-cyan30);\n}\n\n.orientation-stage.disabled {\n  filter: grayscale();\n  opacity: 50%;\n}\n\n.orientation-element,\n.orientation-element::before,\n.orientation-element::after {\n  position: absolute;\n  box-sizing: border-box;\n  transform-style: preserve-3d;\n  background: no-repeat;\n  background-size: cover;\n  backface-visibility: hidden;\n}\n\n.orientation-box {\n  width: 62px;\n  height: 122px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transform: rotate3d(1, 0, 0, 90deg);\n}\n\n.orientation-layer {\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n}\n\n.orientation-box.is-animating,\n.is-animating .orientation-layer {\n  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.orientation-front,\n.orientation-back {\n  width: 62px;\n  height: 122px;\n  border-radius: 8px;\n}\n\n.orientation-front {\n  background-image: var(--image-file-accelerometer-front);\n}\n\n.orientation-back {\n  transform: rotateY(180deg) translateZ(8px);\n  background-image: var(--image-file-accelerometer-back);\n}\n\n.orientation-left,\n.orientation-right {\n  width: 8px;\n  height: 106px;\n  top: 8px;\n  background-position: center center;\n}\n\n.orientation-left {\n  left: -8px;\n  transform-origin: right center;\n  transform: rotateY(-90deg);\n  background-image: var(--image-file-accelerometer-left);\n}\n\n.orientation-right {\n  right: -8px;\n  transform-origin: left center;\n  transform: rotateY(90deg);\n  background-image: var(--image-file-accelerometer-right);\n}\n\n.orientation-left::before,\n.orientation-left::after,\n.orientation-right::before,\n.orientation-right::after {\n  content: "";\n  width: 8px;\n  height: 6px;\n}\n\n.orientation-left::before,\n.orientation-left::after {\n  background-image: var(--image-file-accelerometer-left);\n}\n\n.orientation-right::before,\n.orientation-right::after {\n  background-image: var(--image-file-accelerometer-right);\n}\n\n.orientation-left::before,\n.orientation-right::before {\n  top: -6px;\n  transform-origin: center bottom;\n  transform: rotateX(26deg);\n  background-position: center top;\n}\n\n.orientation-left::after,\n.orientation-right::after {\n  bottom: -6px;\n  transform-origin: center top;\n  transform: rotateX(-25deg);\n  background-position: center bottom;\n}\n\n.orientation-top,\n.orientation-bottom {\n  width: 50px;\n  height: 8px;\n  left: 8px;\n  background-position: center center;\n}\n\n.orientation-top {\n  top: -8px;\n  transform-origin: center bottom;\n  transform: rotateX(90deg);\n  background-image: var(--image-file-accelerometer-top);\n}\n\n.orientation-bottom {\n  bottom: -8px;\n  transform-origin: center top;\n  transform: rotateX(-90deg);\n  background-image: var(--image-file-accelerometer-bottom);\n}\n\n.orientation-top::before,\n.orientation-top::after,\n.orientation-bottom::before,\n.orientation-bottom::after {\n  content: "";\n  width: 8px;\n  height: 8px;\n}\n\n.orientation-top::before,\n.orientation-top::after {\n  background-image: var(--image-file-accelerometer-top);\n}\n\n.orientation-bottom::before,\n.orientation-bottom::after {\n  background-image: var(--image-file-accelerometer-bottom);\n}\n\n.orientation-top::before,\n.orientation-bottom::before {\n  left: -6px;\n  transform-origin: right center;\n  transform: rotateY(-26deg);\n  background-position: left center;\n}\n\n.orientation-top::after,\n.orientation-bottom::after {\n  right: -6px;\n  transform-origin: left center;\n  transform: rotateY(26deg);\n  background-position: right center;\n}\n\n.orientation-axis-input-container {\n  margin-bottom: 10px;\n}\n\n.orientation-reset-button {\n  min-width: 80px;\n}\n\nfieldset.device-orientation-override-section {\n  margin: 0;\n  display: flex;\n}\n\n.panel-section-separator {\n  height: 1px;\n  margin-bottom: 20px;\n  margin-left: -12px;\n  margin-right: -12px;\n  background: var(--sys-color-divider);\n}\n\nbutton.text-button {\n  margin: 4px 0 0 10px;\n}\n\n@media (forced-colors: active) {\n  .sensors-view fieldset[disabled] {\n    opacity: 100%;\n  }\n}\n\n.chrome-select-label {\n  margin-bottom: 16px;\n}\n\n/*# sourceURL=sensors.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);