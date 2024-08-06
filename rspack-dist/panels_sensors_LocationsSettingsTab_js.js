"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sensors_LocationsSettingsTab_js"], {
"./panels/sensors/LocationsSettingsTab.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LocationsSettingsTab: function() { return LocationsSettingsTab; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _locationsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationsSettingsTab.css.js */ "./panels/sensors/locationsSettingsTab.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
     *@description Title in the Locations Settings Tab, where custom geographic locations that the user
     *has entered are stored.
     */ customLocations: 'Custom locations',
    /**
     *@description Label for the name of a geographic location that the user has entered.
     */ locationName: 'Location name',
    /**
     *@description Abbreviation of latitude in Locations Settings Tab of the Device Toolbar
     */ lat: 'Lat',
    /**
     *@description Abbreviation of longitude in Locations Settings Tab of the Device Toolbar
     */ long: 'Long',
    /**
     *@description Text in Sensors View of the Device Toolbar
     */ timezoneId: 'Timezone ID',
    /**
     *@description Label for text input for the locale of a particular location.
     */ locale: 'Locale',
    /**
     *@description Label for text input for the latitude of a GPS position.
     */ latitude: 'Latitude',
    /**
     *@description Label for text input for the longitude of a GPS position.
     */ longitude: 'Longitude',
    /**
     *@description Error message in the Locations settings pane that declares the location name input must not be empty
     */ locationNameCannotBeEmpty: 'Location name cannot be empty',
    /**
     *@description Error message in the Locations settings pane that declares the maximum length of the location name
     *@example {50} PH1
     */ locationNameMustBeLessThanS: 'Location name must be less than {PH1} characters',
    /**
     *@description Error message in the Locations settings pane that declares that the value for the latitude input must be a number
     */ latitudeMustBeANumber: 'Latitude must be a number',
    /**
     *@description Error message in the Locations settings pane that declares the minimum value for the latitude input
     *@example {-90} PH1
     */ latitudeMustBeGreaterThanOrEqual: 'Latitude must be greater than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares the maximum value for the latitude input
     *@example {90} PH1
     */ latitudeMustBeLessThanOrEqualToS: 'Latitude must be less than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares that the value for the longitude input must be a number
     */ longitudeMustBeANumber: 'Longitude must be a number',
    /**
     *@description Error message in the Locations settings pane that declares the minimum value for the longitude input
     *@example {-180} PH1
     */ longitudeMustBeGreaterThanOr: 'Longitude must be greater than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares the maximum value for the longitude input
     *@example {180} PH1
     */ longitudeMustBeLessThanOrEqualTo: 'Longitude must be less than or equal to {PH1}',
    /**
     *@description Error message in the Locations settings pane that declares timezone ID input invalid
     */ timezoneIdMustContainAlphabetic: 'Timezone ID must contain alphabetic characters',
    /**
     *@description Error message in the Locations settings pane that declares locale input invalid
     */ localeMustContainAlphabetic: 'Locale must contain alphabetic characters',
    /**
     *@description Text of add locations button in Locations Settings Tab of the Device Toolbar
     */ addLocation: 'Add location...'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sensors/LocationsSettingsTab.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var LocationsSettingsTab = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(LocationsSettingsTab, _UI_Widget_VBox);
    var _super = _create_super(LocationsSettingsTab);
    function LocationsSettingsTab() {
        _class_call_check(this, LocationsSettingsTab);
        var _this;
        var replaceLocationTitles = function replaceLocationTitles(location, defaultValues) {
            // This check is done for locations that might had been cached wrongly due to crbug.com/1171670.
            // Each of the default values would have been stored without a title if the user had added a new location
            // while the bug was present in the application. This means that getting the setting's default value with the `get`
            // method would return the default locations without a title. To cope with this, the setting values are
            // preemptively checked and corrected so that any default value mistakenly stored without a title is replaced
            // with the corresponding declared value in the pre-registered setting.
            if (!location.title) {
                var replacement = defaultValues.find(function(defaultLocation) {
                    return defaultLocation.lat === location.lat && defaultLocation.long === location.long && defaultLocation.timezoneId === location.timezoneId && defaultLocation.locale === location.locale;
                });
                if (!replacement) {
                    console.error('Could not determine a location setting title');
                } else {
                    return replacement;
                }
            }
            return location;
        };
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "customSetting", void 0);
        _define_property(_assert_this_initialized(_this), "editor", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('emulation-locations')));
        _this.contentElement.createChild('div', 'header').textContent = i18nString(UIStrings.customLocations);
        var addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.addLocation), _this.addButtonClicked.bind(_assert_this_initialized(_this)), {
            className: 'add-locations-button',
            jslogContext: 'emulation.add-location'
        });
        _this.contentElement.appendChild(addButton);
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListWidget.ListWidget(_assert_this_initialized(_this), undefined, true);
        _this.list.element.classList.add('locations-list');
        _this.list.show(_this.contentElement);
        _this.customSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.locations');
        var list = _this.customSetting.get().map(function(location) {
            return replaceLocationTitles(location, _this.customSetting.defaultValue);
        });
        _this.customSetting.set(list);
        _this.customSetting.addChangeListener(_this.locationsUpdated, _assert_this_initialized(_this));
        _this.setDefaultFocusedElement(addButton);
        return _this;
    }
    _create_class(LocationsSettingsTab, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(LocationsSettingsTab.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _locationsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
                this.list.registerCSSFiles([
                    _locationsSettingsTab_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
                this.locationsUpdated();
            }
        },
        {
            key: "locationsUpdated",
            value: function locationsUpdated() {
                this.list.clear();
                var conditions = this.customSetting.get();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = conditions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var condition = _step.value;
                        this.list.appendItem(condition, true);
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
                this.list.appendSeparator();
            }
        },
        {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                this.list.addNewItem(this.customSetting.get().length, {
                    title: '',
                    lat: 0,
                    long: 0,
                    timezoneId: '',
                    locale: ''
                });
            }
        },
        {
            key: "renderItem",
            value: function renderItem(location, _editable) {
                var element = document.createElement('div');
                element.role = 'row';
                element.classList.add('locations-list-item');
                var title = element.createChild('div', 'locations-list-text locations-list-title');
                title.role = 'cell';
                var titleText = title.createChild('div', 'locations-list-title-text');
                titleText.textContent = location.title;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip.Tooltip.install(titleText, location.title);
                element.createChild('div', 'locations-list-separator');
                var lat = element.createChild('div', 'locations-list-text');
                lat.textContent = String(location.lat);
                lat.role = 'cell';
                element.createChild('div', 'locations-list-separator');
                var long = element.createChild('div', 'locations-list-text');
                long.textContent = String(location.long);
                long.role = 'cell';
                element.createChild('div', 'locations-list-separator');
                var timezoneId = element.createChild('div', 'locations-list-text');
                timezoneId.textContent = location.timezoneId;
                timezoneId.role = 'cell';
                element.createChild('div', 'locations-list-separator');
                var locale = element.createChild('div', 'locations-list-text');
                locale.textContent = location.locale;
                locale.role = 'cell';
                return element;
            }
        },
        {
            key: "removeItemRequested",
            value: function removeItemRequested(item, index) {
                var list = this.customSetting.get();
                list.splice(index, 1);
                this.customSetting.set(list);
            }
        },
        {
            key: "commitEdit",
            value: function commitEdit(location, editor, isNew) {
                location.title = editor.control('title').value.trim();
                var lat = editor.control('lat').value.trim();
                location.lat = lat ? parseFloat(lat) : 0;
                var long = editor.control('long').value.trim();
                location.long = long ? parseFloat(long) : 0;
                var timezoneId = editor.control('timezone-id').value.trim();
                location.timezoneId = timezoneId;
                var locale = editor.control('locale').value.trim();
                location.locale = locale;
                var list = this.customSetting.get();
                if (isNew) {
                    list.push(location);
                }
                this.customSetting.set(list);
            }
        },
        {
            key: "beginEdit",
            value: function beginEdit(location) {
                var editor = this.createEditor();
                editor.control('title').value = location.title;
                editor.control('lat').value = String(location.lat);
                editor.control('long').value = String(location.long);
                editor.control('timezone-id').value = location.timezoneId;
                editor.control('locale').value = location.locale;
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
                var titles = content.createChild('div', 'locations-edit-row');
                titles.createChild('div', 'locations-list-text locations-list-title').textContent = i18nString(UIStrings.locationName);
                titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.lat);
                titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.long);
                titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.timezoneId);
                titles.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                titles.createChild('div', 'locations-list-text').textContent = i18nString(UIStrings.locale);
                var fields = content.createChild('div', 'locations-edit-row');
                fields.createChild('div', 'locations-list-text locations-list-title locations-input-container').appendChild(editor.createInput('title', 'text', i18nString(UIStrings.locationName), titleValidator));
                fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                var cell = fields.createChild('div', 'locations-list-text locations-input-container');
                cell.appendChild(editor.createInput('lat', 'text', i18nString(UIStrings.latitude), latValidator));
                fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                cell = fields.createChild('div', 'locations-list-text locations-list-text-longitude locations-input-container');
                cell.appendChild(editor.createInput('long', 'text', i18nString(UIStrings.longitude), longValidator));
                fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                cell = fields.createChild('div', 'locations-list-text locations-input-container');
                cell.appendChild(editor.createInput('timezone-id', 'text', i18nString(UIStrings.timezoneId), timezoneIdValidator));
                fields.createChild('div', 'locations-list-separator locations-list-separator-invisible');
                cell = fields.createChild('div', 'locations-list-text locations-input-container');
                cell.appendChild(editor.createInput('locale', 'text', i18nString(UIStrings.locale), localeValidator));
                return editor;
                function titleValidator(item, index, input) {
                    var maxLength = 50;
                    var value = input.value.trim();
                    var errorMessage;
                    if (!value.length) {
                        errorMessage = i18nString(UIStrings.locationNameCannotBeEmpty);
                    } else if (value.length > maxLength) {
                        errorMessage = i18nString(UIStrings.locationNameMustBeLessThanS, {
                            PH1: maxLength
                        });
                    }
                    if (errorMessage) {
                        return {
                            valid: false,
                            errorMessage: errorMessage
                        };
                    }
                    return {
                        valid: true,
                        errorMessage: undefined
                    };
                }
                function latValidator(item, index, input) {
                    var minLat = -90;
                    var maxLat = 90;
                    var value = input.value.trim();
                    var parsedValue = Number(value);
                    if (!value) {
                        return {
                            valid: true,
                            errorMessage: undefined
                        };
                    }
                    var errorMessage;
                    if (Number.isNaN(parsedValue)) {
                        errorMessage = i18nString(UIStrings.latitudeMustBeANumber);
                    } else if (parseFloat(value) < minLat) {
                        errorMessage = i18nString(UIStrings.latitudeMustBeGreaterThanOrEqual, {
                            PH1: minLat
                        });
                    } else if (parseFloat(value) > maxLat) {
                        errorMessage = i18nString(UIStrings.latitudeMustBeLessThanOrEqualToS, {
                            PH1: maxLat
                        });
                    }
                    if (errorMessage) {
                        return {
                            valid: false,
                            errorMessage: errorMessage
                        };
                    }
                    return {
                        valid: true,
                        errorMessage: undefined
                    };
                }
                function longValidator(item, index, input) {
                    var minLong = -180;
                    var maxLong = 180;
                    var value = input.value.trim();
                    var parsedValue = Number(value);
                    if (!value) {
                        return {
                            valid: true,
                            errorMessage: undefined
                        };
                    }
                    var errorMessage;
                    if (Number.isNaN(parsedValue)) {
                        errorMessage = i18nString(UIStrings.longitudeMustBeANumber);
                    } else if (parseFloat(value) < minLong) {
                        errorMessage = i18nString(UIStrings.longitudeMustBeGreaterThanOr, {
                            PH1: minLong
                        });
                    } else if (parseFloat(value) > maxLong) {
                        errorMessage = i18nString(UIStrings.longitudeMustBeLessThanOrEqualTo, {
                            PH1: maxLong
                        });
                    }
                    if (errorMessage) {
                        return {
                            valid: false,
                            errorMessage: errorMessage
                        };
                    }
                    return {
                        valid: true,
                        errorMessage: undefined
                    };
                }
                function timezoneIdValidator(item, index, input) {
                    var value = input.value.trim();
                    // Chromium uses ICU's timezone implementation, which is very
                    // liberal in what it accepts. ICU does not simply use an allowlist
                    // but instead tries to make sense of the input, even for
                    // weird-looking timezone IDs. There's not much point in validating
                    // the input other than checking if it contains at least one
                    // alphabetic character. The empty string resets the override,
                    // and is accepted as well.
                    if (value === '' || /[a-zA-Z]/.test(value)) {
                        return {
                            valid: true,
                            errorMessage: undefined
                        };
                    }
                    var errorMessage = i18nString(UIStrings.timezoneIdMustContainAlphabetic);
                    return {
                        valid: false,
                        errorMessage: errorMessage
                    };
                }
                function localeValidator(item, index, input) {
                    var value = input.value.trim();
                    // Similarly to timezone IDs, there's not much point in validating
                    // input locales other than checking if it contains at least two
                    // alphabetic characters.
                    // https://unicode.org/reports/tr35/#Unicode_language_identifier
                    // The empty string resets the override, and is accepted as
                    // well.
                    if (value === '' || /[a-zA-Z]{2}/.test(value)) {
                        return {
                            valid: true,
                            errorMessage: undefined
                        };
                    }
                    var errorMessage = i18nString(UIStrings.localeMustContainAlphabetic);
                    return {
                        valid: false,
                        errorMessage: errorMessage
                    };
                }
            }
        }
    ]);
    return LocationsSettingsTab;
} //# sourceMappingURL=LocationsSettingsTab.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox);


}),
"./panels/sensors/locationsSettingsTab.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n}\n\n.header {\n  padding: 0 0 6px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  font-size: 18px;\n  font-weight: normal;\n  flex: none;\n}\n\n.add-locations-button {\n  flex: none;\n  margin: 10px 5px;\n  min-width: 140px;\n  align-self: flex-start;\n}\n\n.locations-list {\n  max-width: 600px;\n  min-width: 340px;\n  flex: auto;\n}\n\n.locations-list-item {\n  padding: 3px 6px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: auto 1 1;\n}\n\n.locations-list-text {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  flex-basis: 170px;\n  user-select: none;\n  color: var(--sys-color-on-surface);\n  position: relative;\n  overflow: hidden;\n}\n\n.locations-list-title {\n  text-align: start;\n}\n\n.locations-list-title-text {\n  overflow: hidden;\n  flex: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.locations-list-separator {\n  flex: 0 0 1px;\n  background-color: var(--sys-color-divider);\n  height: 30px;\n  margin: 0 4px;\n}\n\n.locations-list-separator-invisible {\n  visibility: hidden;\n  height: 100% !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.locations-edit-row {\n  display: flex;\n  flex-direction: row;\n  margin: 6px 5px;\n}\n\n.locations-edit-row input {\n  width: 100%;\n  text-align: inherit;\n}\n\n.locations-input-container {\n  padding: 1px;\n}\n\n/*# sourceURL=locationsSettingsTab.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);