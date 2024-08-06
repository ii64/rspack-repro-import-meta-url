"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_StorageView_js"], {
"./panels/application/StorageView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  AllStorageTypes: function() { return AllStorageTypes; },
  StorageView: function() { return StorageView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _storageView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storageView.css.js */ "./panels/application/storageView.css.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "<b>",
        "</b>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}











var UIStrings = {
    /**
     * @description Text in the Storage View that expresses the amout of used and available storage quota
     * @example {1.5 MB} PH1
     * @example {123.1 MB} PH2
     */ storageQuotaUsed: '{PH1} used out of {PH2} storage quota',
    /**
     * @description Tooltip in the Storage View that expresses the precise amout of used and available storage quota
     * @example {200} PH1
     * @example {400} PH2
     */ storageQuotaUsedWithBytes: '{PH1} bytes used out of {PH2} bytes storage quota',
    /**
     * @description Fragment indicating that a certain data size has been custom configured
     * @example {1.5 MB} PH1
     */ storageWithCustomMarker: '{PH1} (custom)',
    /**
     * @description Text in Application Panel Sidebar and title text of the Storage View of the Application panel
     */ storageTitle: 'Storage',
    /**
     * @description Title text in Storage View of the Application panel
     */ usage: 'Usage',
    /**
     * @description Unit for data size in DevTools
     */ mb: 'MB',
    /**
     * @description Link to learn more about Progressive Web Apps
     */ learnMore: 'Learn more',
    /**
     * @description Button text for the button in the Storage View of the Application panel for clearing site-specific storage
     */ clearSiteData: 'Clear site data',
    /**
     * @description Annouce message when the "clear site data" task is complete
     */ SiteDataCleared: 'Site data cleared',
    /**
     * @description Category description in the Clear Storage section of the Storage View of the Application panel
     */ application: 'Application',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ unregisterServiceWorker: 'Unregister service workers',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ localAndSessionStorage: 'Local and session storage',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ indexDB: 'IndexedDB',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ webSql: 'Web SQL',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ cookies: 'Cookies',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ cacheStorage: 'Cache storage',
    /**
     * @description Checkbox label in the Clear Storage section of the Storage View of the Application panel
     */ includingThirdPartyCookies: 'including third-party cookies',
    /**
     * @description Text for error message in Application Quota Override
     * @example {Image} PH1
     */ sFailedToLoad: '{PH1} (failed to load)',
    /**
     * @description Text for error message in Application Quota Override
     */ internalError: 'Internal error',
    /**
     * @description Text for error message in Application Quota Override
     */ pleaseEnterANumber: 'Please enter a number',
    /**
     * @description Text for error message in Application Quota Override
     */ numberMustBeNonNegative: 'Number must be non-negative',
    /**
     * @description Text for error message in Application Quota Override
     * @example {9000000000000} PH1
     */ numberMustBeSmaller: 'Number must be smaller than {PH1}',
    /**
     * @description Button text for the "Clear site data" button in the Storage View of the Application panel while the clearing action is pending
     */ clearing: 'Clearing...',
    /**
     * @description Quota row title in Clear Storage View of the Application panel
     */ storageQuotaIsLimitedIn: 'Storage quota is limited in Incognito mode',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */ fileSystem: 'File System',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */ other: 'Other',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */ storageUsage: 'Storage usage',
    /**
     * @description Text in Application Panel Sidebar of the Application panel
     */ serviceWorkers: 'Service workers',
    /**
     * @description Checkbox label in Application Panel Sidebar of the Application panel.
     * Storage quota refers to the amount of disk available for the website or app.
     */ simulateCustomStorage: 'Simulate custom storage quota'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/StorageView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
/**
 * @implements {SDK.TargetManager.Observer}
 */ var StorageView = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(StorageView, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(StorageView);
    function StorageView() {
        _class_call_check(this, StorageView);
        var _this;
        _this = _super.call(this, true, 1000);
        _define_property(_assert_this_initialized(_this), "pieColors", void 0);
        _define_property(_assert_this_initialized(_this), "reportView", void 0);
        _define_property(_assert_this_initialized(_this), "target", void 0);
        _define_property(_assert_this_initialized(_this), "securityOrigin", void 0);
        _define_property(_assert_this_initialized(_this), "storageKey", void 0);
        _define_property(_assert_this_initialized(_this), "settings", void 0);
        _define_property(_assert_this_initialized(_this), "includeThirdPartyCookiesSetting", void 0);
        _define_property(_assert_this_initialized(_this), "quotaRow", void 0);
        _define_property(_assert_this_initialized(_this), "quotaUsage", void 0);
        _define_property(_assert_this_initialized(_this), "pieChart", void 0);
        _define_property(_assert_this_initialized(_this), "previousOverrideFieldValue", void 0);
        _define_property(_assert_this_initialized(_this), "quotaOverrideCheckbox", void 0);
        _define_property(_assert_this_initialized(_this), "quotaOverrideControlRow", void 0);
        _define_property(_assert_this_initialized(_this), "quotaOverrideEditor", void 0);
        _define_property(_assert_this_initialized(_this), "quotaOverrideErrorMessage", void 0);
        _define_property(_assert_this_initialized(_this), "clearButton", void 0);
        _this.contentElement.classList.add('clear-storage-container');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('clear-storage')));
        _this.pieColors = new Map([
            [
                "appcache" /* Protocol.Storage.StorageType.Appcache */ ,
                'rgb(110, 161, 226)'
            ],
            [
                "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */ ,
                'rgb(229, 113, 113)'
            ],
            [
                "cookies" /* Protocol.Storage.StorageType.Cookies */ ,
                'rgb(239, 196, 87)'
            ],
            [
                "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */ ,
                'rgb(155, 127, 230)'
            ],
            [
                "local_storage" /* Protocol.Storage.StorageType.Local_storage */ ,
                'rgb(116, 178, 102)'
            ],
            [
                "service_workers" /* Protocol.Storage.StorageType.Service_workers */ ,
                'rgb(255, 167, 36)'
            ],
            [
                "websql" /* Protocol.Storage.StorageType.Websql */ ,
                'rgb(203, 220, 56)'
            ]
        ]);
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        _this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportView(i18nString(UIStrings.storageTitle));
        _this.reportView.element.classList.add('clear-storage-header');
        _this.reportView.show(_this.contentElement);
        _this.target = null;
        _this.securityOrigin = null;
        _this.storageKey = null;
        _this.settings = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = AllStorageTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var type = _step.value;
                _this.settings.set(type, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('clear-storage-' + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(type), true));
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
        _this.includeThirdPartyCookiesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('clear-storage-include-third-party-cookies', false);
        var quota = _this.reportView.appendSection(i18nString(UIStrings.usage));
        quota.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('usage')));
        _this.quotaRow = quota.appendSelectableRow();
        _this.quotaRow.classList.add('quota-usage-row');
        var learnMoreRow = quota.appendRow();
        var learnMore = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/progressive-web-apps#opaque-responses', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
        learnMoreRow.appendChild(learnMore);
        _this.quotaUsage = null;
        _this.pieChart = new _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_5__.PieChart.PieChart();
        _this.populatePieChart(0, []);
        var usageBreakdownRow = quota.appendRow();
        usageBreakdownRow.classList.add('usage-breakdown-row');
        usageBreakdownRow.appendChild(_this.pieChart);
        _this.previousOverrideFieldValue = '';
        var quotaOverrideCheckboxRow = quota.appendRow();
        quotaOverrideCheckboxRow.classList.add('quota-override-row');
        _this.quotaOverrideCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.simulateCustomStorage), false, '');
        _this.quotaOverrideCheckbox.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toggle('simulate-custom-quota').track({
            change: true
        })));
        quotaOverrideCheckboxRow.appendChild(_this.quotaOverrideCheckbox);
        _this.quotaOverrideCheckbox.checkboxElement.addEventListener('click', _this.onClickCheckbox.bind(_assert_this_initialized(_this)), false);
        _this.quotaOverrideControlRow = quota.appendRow();
        _this.quotaOverrideEditor = _this.quotaOverrideControlRow.createChild('input', 'quota-override-notification-editor');
        _this.quotaOverrideEditor.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.textField('quota-override').track({
            change: true
        })));
        _this.quotaOverrideControlRow.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createLabel(i18nString(UIStrings.mb)));
        _this.quotaOverrideControlRow.classList.add('hidden');
        _this.quotaOverrideEditor.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                void _this.applyQuotaOverrideFromInputField();
                event.consume(true);
            }
        });
        _this.quotaOverrideEditor.addEventListener('focusout', function(event) {
            void _this.applyQuotaOverrideFromInputField();
            event.consume(true);
        });
        var errorMessageRow = quota.appendRow();
        _this.quotaOverrideErrorMessage = errorMessageRow.createChild('div', 'quota-override-error');
        var clearButtonSection = _this.reportView.appendSection('', 'clear-storage-button').appendRow();
        _this.clearButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextButton(i18nString(UIStrings.clearSiteData), _this.clear.bind(_assert_this_initialized(_this)), {
            jslogContext: 'storage.clear-site-data'
        });
        _this.clearButton.id = 'storage-view-clear-button';
        clearButtonSection.appendChild(_this.clearButton);
        var includeThirdPartyCookiesCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.includingThirdPartyCookies), _this.includeThirdPartyCookiesSetting, true);
        includeThirdPartyCookiesCheckbox.classList.add('include-third-party-cookies');
        clearButtonSection.appendChild(includeThirdPartyCookiesCheckbox);
        var application = _this.reportView.appendSection(i18nString(UIStrings.application));
        application.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('application')));
        _this.appendItem(application, i18nString(UIStrings.unregisterServiceWorker), "service_workers" /* Protocol.Storage.StorageType.Service_workers */ );
        application.markFieldListAsGroup();
        var storage = _this.reportView.appendSection(i18nString(UIStrings.storageTitle));
        storage.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('storage')));
        _this.appendItem(storage, i18nString(UIStrings.localAndSessionStorage), "local_storage" /* Protocol.Storage.StorageType.Local_storage */ );
        _this.appendItem(storage, i18nString(UIStrings.indexDB), "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */ );
        _this.appendItem(storage, i18nString(UIStrings.webSql), "websql" /* Protocol.Storage.StorageType.Websql */ );
        _this.appendItem(storage, i18nString(UIStrings.cookies), "cookies" /* Protocol.Storage.StorageType.Cookies */ );
        _this.appendItem(storage, i18nString(UIStrings.cacheStorage), "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */ );
        storage.markFieldListAsGroup();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(StorageView, [
        {
            key: "appendItem",
            value: function appendItem(section, title, settingName) {
                var row = section.appendRow();
                var setting = this.settings.get(settingName);
                if (setting) {
                    row.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SettingsUI.createSettingCheckbox(title, setting, true));
                }
            }
        },
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.target = target;
                var securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
                this.updateOrigin(securityOriginManager.mainSecurityOrigin(), securityOriginManager.unreachableMainSecurityOrigin());
                securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.MainSecurityOriginChanged, this.originChanged, this);
                var storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
                this.updateStorageKey(storageKeyManager.mainStorageKey());
                storageKeyManager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */ , this.storageKeyChanged, this);
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                if (this.target !== target) {
                    return;
                }
                var securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
                securityOriginManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.MainSecurityOriginChanged, this.originChanged, this);
                var storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.StorageKeyManager.StorageKeyManager);
                storageKeyManager.removeEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */ , this.storageKeyChanged, this);
            }
        },
        {
            key: "originChanged",
            value: function originChanged(event) {
                var _event_data = event.data, mainSecurityOrigin = _event_data.mainSecurityOrigin, unreachableMainSecurityOrigin = _event_data.unreachableMainSecurityOrigin;
                this.updateOrigin(mainSecurityOrigin, unreachableMainSecurityOrigin);
            }
        },
        {
            key: "storageKeyChanged",
            value: function storageKeyChanged(event) {
                var mainStorageKey = event.data.mainStorageKey;
                this.updateStorageKey(mainStorageKey);
            }
        },
        {
            key: "updateOrigin",
            value: function updateOrigin(mainOrigin, unreachableMainOrigin) {
                var oldOrigin = this.securityOrigin;
                if (unreachableMainOrigin) {
                    this.securityOrigin = unreachableMainOrigin;
                    this.reportView.setSubtitle(i18nString(UIStrings.sFailedToLoad, {
                        PH1: unreachableMainOrigin
                    }));
                } else {
                    this.securityOrigin = mainOrigin;
                    this.reportView.setSubtitle(mainOrigin);
                }
                if (oldOrigin !== this.securityOrigin) {
                    this.quotaOverrideControlRow.classList.add('hidden');
                    this.quotaOverrideCheckbox.checkboxElement.checked = false;
                    this.quotaOverrideErrorMessage.textContent = '';
                }
                void this.doUpdate();
            }
        },
        {
            key: "updateStorageKey",
            value: function updateStorageKey(mainStorageKey) {
                var oldStorageKey = this.storageKey;
                this.storageKey = mainStorageKey;
                this.reportView.setSubtitle(mainStorageKey);
                if (oldStorageKey !== this.storageKey) {
                    this.quotaOverrideControlRow.classList.add('hidden');
                    this.quotaOverrideCheckbox.checkboxElement.checked = false;
                    this.quotaOverrideErrorMessage.textContent = '';
                }
                void this.doUpdate();
            }
        },
        {
            key: "applyQuotaOverrideFromInputField",
            value: function applyQuotaOverrideFromInputField() {
                var _this = this;
                return _async_to_generator(function() {
                    var editorString, quota, cutoff, bytesPerMB, quotaInBytes, quotaFieldValue;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.target || !_this.securityOrigin) {
                                    _this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.internalError);
                                    return [
                                        2
                                    ];
                                }
                                _this.quotaOverrideErrorMessage.textContent = '';
                                editorString = _this.quotaOverrideEditor.value;
                                if (!(editorString === '')) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.clearQuotaForOrigin(_this.target, _this.securityOrigin)
                                ];
                            case 1:
                                _state.sent();
                                _this.previousOverrideFieldValue = '';
                                return [
                                    2
                                ];
                            case 2:
                                quota = parseFloat(editorString);
                                if (!Number.isFinite(quota)) {
                                    _this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.pleaseEnterANumber);
                                    return [
                                        2
                                    ];
                                }
                                if (quota < 0) {
                                    _this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.numberMustBeNonNegative);
                                    return [
                                        2
                                    ];
                                }
                                cutoff = 9000000000000;
                                if (quota >= cutoff) {
                                    _this.quotaOverrideErrorMessage.textContent = i18nString(UIStrings.numberMustBeSmaller, {
                                        PH1: cutoff.toLocaleString()
                                    });
                                    return [
                                        2
                                    ];
                                }
                                bytesPerMB = 1000 * 1000;
                                quotaInBytes = Math.round(quota * bytesPerMB);
                                quotaFieldValue = "".concat(quotaInBytes / bytesPerMB);
                                _this.quotaOverrideEditor.value = quotaFieldValue;
                                _this.previousOverrideFieldValue = quotaFieldValue;
                                return [
                                    4,
                                    _this.target.storageAgent().invoke_overrideQuotaForOrigin({
                                        origin: _this.securityOrigin,
                                        quotaSize: quotaInBytes
                                    })
                                ];
                            case 3:
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
            key: "clearQuotaForOrigin",
            value: function clearQuotaForOrigin(target, origin) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    target.storageAgent().invoke_overrideQuotaForOrigin({
                                        origin: origin
                                    })
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
            key: "onClickCheckbox",
            value: function onClickCheckbox() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.quotaOverrideControlRow.classList.contains('hidden')) return [
                                    3,
                                    1
                                ];
                                _this.quotaOverrideControlRow.classList.remove('hidden');
                                _this.quotaOverrideCheckbox.checkboxElement.checked = true;
                                _this.quotaOverrideEditor.value = _this.previousOverrideFieldValue;
                                _this.quotaOverrideEditor.focus();
                                return [
                                    3,
                                    3
                                ];
                            case 1:
                                if (!(_this.target && _this.securityOrigin)) return [
                                    3,
                                    3
                                ];
                                _this.quotaOverrideControlRow.classList.add('hidden');
                                _this.quotaOverrideCheckbox.checkboxElement.checked = false;
                                return [
                                    4,
                                    _this.clearQuotaForOrigin(_this.target, _this.securityOrigin)
                                ];
                            case 2:
                                _state.sent();
                                _this.quotaOverrideErrorMessage.textContent = '';
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _this = this;
                if (!this.securityOrigin) {
                    return;
                }
                var selectedStorageTypes = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.settings.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var type = _step.value;
                        var setting = this.settings.get(type);
                        if (setting && setting.get()) {
                            selectedStorageTypes.push(type);
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
                if (this.target) {
                    var includeThirdPartyCookies = this.includeThirdPartyCookiesSetting.get();
                    StorageView.clear(this.target, this.storageKey, this.securityOrigin, selectedStorageTypes, includeThirdPartyCookies);
                }
                this.clearButton.disabled = true;
                var label = this.clearButton.textContent;
                this.clearButton.textContent = i18nString(UIStrings.clearing);
                window.setTimeout(function() {
                    _this.clearButton.disabled = false;
                    _this.clearButton.textContent = label;
                    _this.clearButton.focus();
                }, 500);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.alert(i18nString(UIStrings.SiteDataCleared));
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    var securityOrigin, response, quotaOverridden, quotaAsString, usageAsString, formattedQuotaAsString, quota, element, icon, slices, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, usageForType, value, title, color;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.securityOrigin || !_this.target) {
                                    _this.quotaRow.textContent = '';
                                    _this.populatePieChart(0, []);
                                    return [
                                        2
                                    ];
                                }
                                securityOrigin = _this.securityOrigin;
                                return [
                                    4,
                                    _this.target.storageAgent().invoke_getUsageAndQuota({
                                        origin: securityOrigin
                                    })
                                ];
                            case 1:
                                response = _state.sent();
                                _this.quotaRow.textContent = '';
                                if (response.getError()) {
                                    _this.populatePieChart(0, []);
                                    return [
                                        2
                                    ];
                                }
                                quotaOverridden = response.overrideActive;
                                quotaAsString = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(response.quota);
                                usageAsString = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(response.usage);
                                formattedQuotaAsString = i18nString(UIStrings.storageWithCustomMarker, {
                                    PH1: quotaAsString
                                });
                                quota = quotaOverridden ? _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Fragment.Fragment.build(_templateObject(), formattedQuotaAsString).element() : quotaAsString;
                                element = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.storageQuotaUsed, {
                                    PH1: usageAsString,
                                    PH2: quota
                                });
                                _this.quotaRow.appendChild(element);
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(_this.quotaRow, i18nString(UIStrings.storageQuotaUsedWithBytes, {
                                    PH1: response.usage.toLocaleString(),
                                    PH2: response.quota.toLocaleString()
                                }));
                                if (!response.overrideActive && response.quota < 125829120) {
                                    icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
                                    icon.data = {
                                        iconName: 'info',
                                        color: 'var(--icon-info)',
                                        width: '14px',
                                        height: '14px'
                                    };
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(_this.quotaRow, i18nString(UIStrings.storageQuotaIsLimitedIn));
                                    _this.quotaRow.appendChild(icon);
                                }
                                if (_this.quotaUsage === null || _this.quotaUsage !== response.usage) {
                                    _this.quotaUsage = response.usage;
                                    slices = [];
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = response.usageBreakdown.sort(function(a, b) {
                                            return b.usage - a.usage;
                                        })[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            usageForType = _step.value;
                                            value = usageForType.usage;
                                            if (!value) {
                                                continue;
                                            }
                                            title = _this.getStorageTypeName(usageForType.storageType);
                                            color = _this.pieColors.get(usageForType.storageType) || '#ccc';
                                            slices.push({
                                                value: value,
                                                color: color,
                                                title: title
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
                                    _this.populatePieChart(response.usage, slices);
                                }
                                _this.update();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "populatePieChart",
            value: function populatePieChart(total, slices) {
                this.pieChart.data = {
                    chartName: i18nString(UIStrings.storageUsage),
                    size: 110,
                    formatter: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString,
                    showLegend: true,
                    total: total,
                    slices: slices
                };
            }
        },
        {
            key: "getStorageTypeName",
            value: function getStorageTypeName(type) {
                switch(type){
                    case "file_systems" /* Protocol.Storage.StorageType.File_systems */ :
                        return i18nString(UIStrings.fileSystem);
                    case "websql" /* Protocol.Storage.StorageType.Websql */ :
                        return i18nString(UIStrings.webSql);
                    case "appcache" /* Protocol.Storage.StorageType.Appcache */ :
                        return i18nString(UIStrings.application);
                    case "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */ :
                        return i18nString(UIStrings.indexDB);
                    case "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */ :
                        return i18nString(UIStrings.cacheStorage);
                    case "service_workers" /* Protocol.Storage.StorageType.Service_workers */ :
                        return i18nString(UIStrings.serviceWorkers);
                    default:
                        return i18nString(UIStrings.other);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(StorageView.prototype), "wasShown", this).call(this);
                this.reportView.registerCSSFiles([
                    _storageView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.registerCSSFiles([
                    _storageView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
            }
        }
    ], [
        {
            key: "clear",
            value: function clear(target, storageKey, originForCookies, selectedStorageTypes, includeThirdPartyCookies) {
                console.assert(Boolean(storageKey));
                if (!storageKey) {
                    return;
                }
                void target.storageAgent().invoke_clearDataForStorageKey({
                    storageKey: storageKey,
                    storageTypes: selectedStorageTypes.join(',')
                });
                var set = new Set(selectedStorageTypes);
                var hasAll = set.has("all" /* Protocol.Storage.StorageType.All */ );
                if (set.has("local_storage" /* Protocol.Storage.StorageType.Local_storage */ ) || hasAll) {
                    var storageModel = target.model(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageModel);
                    if (storageModel) {
                        storageModel.clearForStorageKey(storageKey);
                    }
                }
                if (set.has("indexeddb" /* Protocol.Storage.StorageType.Indexeddb */ ) || hasAll) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _$target = _step.value;
                            var indexedDBModel = _$target.model(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_9__.IndexedDBModel);
                            if (indexedDBModel) {
                                indexedDBModel.clearForStorageKey(storageKey);
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
                if (originForCookies && (set.has("cookies" /* Protocol.Storage.StorageType.Cookies */ ) || hasAll)) {
                    void target.storageAgent().invoke_clearDataForOrigin({
                        origin: originForCookies,
                        storageTypes: "cookies" /* Protocol.Storage.StorageType.Cookies */ 
                    });
                    var cookieModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CookieModel.CookieModel);
                    if (cookieModel) {
                        void cookieModel.clear(undefined, includeThirdPartyCookies ? undefined : originForCookies);
                    }
                }
                if (set.has("cache_storage" /* Protocol.Storage.StorageType.Cache_storage */ ) || hasAll) {
                    var _$target1 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                    var model = _$target1 && _$target1.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerCacheModel.ServiceWorkerCacheModel);
                    if (model) {
                        model.clearForStorageKey(storageKey);
                    }
                }
            }
        }
    ]);
    return StorageView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ThrottledWidget.ThrottledWidget);
var AllStorageTypes = [
    "appcache" /* Protocol.Storage.StorageType.Appcache */ ,
    "cache_storage" /* Protocol.Storage.StorageType.Cache_storage */ ,
    "cookies" /* Protocol.Storage.StorageType.Cookies */ ,
    "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */ ,
    "local_storage" /* Protocol.Storage.StorageType.Local_storage */ ,
    "service_workers" /* Protocol.Storage.StorageType.Service_workers */ ,
    "websql" /* Protocol.Storage.StorageType.Websql */ 
];
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                switch(actionId){
                    case 'resources.clear':
                        return this.handleClear(false);
                    case 'resources.clear-incl-third-party-cookies':
                        return this.handleClear(true);
                }
                return false;
            }
        },
        {
            key: "handleClear",
            value: function handleClear(includeThirdPartyCookies) {
                var target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                if (!target) {
                    return false;
                }
                var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                if (!resourceTreeModel) {
                    return false;
                }
                var securityOrigin = resourceTreeModel.getMainSecurityOrigin();
                resourceTreeModel.getMainStorageKey().then(function(storageKey) {
                    StorageView.clear(target, storageKey, securityOrigin, AllStorageTypes, includeThirdPartyCookies);
                }, function(_) {});
                return true;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=StorageView.js.map
();


}),
"./panels/application/storageView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.report-row {\n  display: flex;\n  align-items: center;\n  white-space: normal;\n}\n\n.clear-storage-button .report-row {\n  margin: 0 0 0 17px;\n  display: flex;\n}\n\n.link {\n  margin-left: 10px;\n  display: none;\n}\n\n.report-row:hover .link {\n  display: inline;\n}\n\n.quota-override-editor-with-button {\n  align-items: baseline;\n  display: flex;\n}\n\n.quota-override-notification-editor {\n  border: solid 1px var(--sys-color-neutral-outline);\n  border-radius: 4px;\n  display: flex;\n  flex: auto;\n  margin-right: 4px;\n  max-width: 200px;\n  min-width: 50px;\n  min-height: 19px;\n  padding-left: 4px;\n\n  &:focus {\n    border-color: var(--sys-color-state-focus-ring);\n  }\n\n  &:hover:not(:focus) {\n    background-color: var(--sys-color-state-hover-on-subtle);\n  }\n}\n\n.quota-override-error {\n  padding-top: 10px;\n  color: var(--sys-color-error);\n}\n\n.usage-breakdown-row {\n  min-width: fit-content;\n}\n\n.clear-storage-container {\n  overflow: auto;\n}\n\n.clear-storage-header {\n  min-width: 400px;\n}\n\n.report-content-box {\n  overflow: initial;\n}\n\n.include-third-party-cookies {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-left: 10px;\n}\n\n/*# sourceURL=storageView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);