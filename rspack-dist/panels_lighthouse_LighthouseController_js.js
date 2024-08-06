"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseController_js"], {
"./panels/emulation/emulation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdvancedApp: function() { return /* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__; },
  DeviceModeToolbar: function() { return /* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__; },
  DeviceModeView: function() { return /* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__; },
  DeviceModeWrapper: function() { return /* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__; },
  InspectedPagePlaceholder: function() { return /* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__; },
  MediaQueryInspector: function() { return /* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./panels/emulation/AdvancedApp.js");
/* harmony import */var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
/* harmony import */var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
/* harmony import */var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
/* harmony import */var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












 //# sourceMappingURL=emulation.js.map


}),
"./panels/lighthouse/LighthouseController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Events: function() { return Events; },
  LighthouseController: function() { return LighthouseController; },
  Presets: function() { return Presets; },
  RuntimeSettings: function() { return RuntimeSettings; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */var _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emulation/emulation.js */ "./panels/emulation/emulation.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
     *@description Explanation for user that Ligthhouse can only audit HTTP/HTTPS pages
     */ canOnlyAuditHttphttpsPages: 'Can only audit pages on HTTP or HTTPS. Navigate to a different page.',
    /**
     *@description Text when stored data in one location may affect Lighthouse run
     *@example {IndexedDB} PH1
     */ thereMayBeStoredDataAffectingSingular: 'There may be stored data affecting loading performance in this location: {PH1}. Audit this page in an incognito window to prevent those resources from affecting your scores.',
    /**
     *@description Text when stored data in multiple locations may affect Lighthouse run
     *@example {IndexedDB, WebSQL} PH1
     */ thereMayBeStoredDataAffectingLoadingPlural: 'There may be stored data affecting loading performance in these locations: {PH1}. Audit this page in an incognito window to prevent those resources from affecting your scores.',
    /**
     *@description Help text in Lighthouse Controller
     */ multipleTabsAreBeingControlledBy: 'Multiple tabs are being controlled by the same `service worker`. Close your other tabs on the same origin to audit this page.',
    /**
     *@description Help text in Lighthouse Controller
     */ atLeastOneCategoryMustBeSelected: 'At least one category must be selected.',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ localStorage: 'Local storage',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ indexeddb: 'IndexedDB',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ webSql: 'Web SQL',
    /**
     *@description Text of checkbox to include running the performance audits in Lighthouse
     */ performance: 'Performance',
    /**
     *@description Tooltip text of checkbox to include running the performance audits in Lighthouse
     */ howLongDoesThisAppTakeToShow: 'How long does this app take to show content and become usable',
    /**
     *@description Text of checkbox to include running the Best Practices audits in Lighthouse
     */ bestPractices: 'Best practices',
    /**
     *@description Tooltip text of checkbox to include running the Best Practices audits in Lighthouse
     */ doesThisPageFollowBestPractices: 'Does this page follow best practices for modern web development',
    /**
     *@description Text of checkbox to include running the Accessibility audits in Lighthouse
     */ accessibility: 'Accessibility',
    /**
     *@description Tooltip text of checkbox to include running the Accessibility audits in Lighthouse
     */ isThisPageUsableByPeopleWith: 'Is this page usable by people with disabilities or impairments',
    /**
     *@description Text of checkbox to include running the Search Engine Optimization audits in Lighthouse
     */ seo: 'SEO',
    /**
     *@description Tooltip text of checkbox to include running the Search Engine Optimization audits in Lighthouse
     */ isThisPageOptimizedForSearch: 'Is this page optimized for search engine results ranking',
    /**
     *@description ARIA label for a radio button input to emulate mobile device behavior when running audits in Lighthouse.
     */ applyMobileEmulation: 'Apply mobile emulation',
    /**
     *@description Tooltip text of checkbox to emulate mobile device behavior when running audits in Lighthouse
     */ applyMobileEmulationDuring: 'Apply mobile emulation during auditing',
    /**
     * @description ARIA label for a radio button input to select the Lighthouse mode.
     */ lighthouseMode: 'Lighthouse mode',
    /**
     * @description Tooltip text of a radio button to select the Lighthouse mode. "Navigation" is a Lighthouse mode that audits a page navigation. "Timespan" is a Lighthouse mode that audits user interactions over a period of time. "Snapshot" is a Lighthouse mode that audits the current page state.
     */ runLighthouseInMode: 'Run Lighthouse in navigation, timespan, or snapshot mode',
    /**
     * @description Label of a radio option for a Lighthouse mode that audits a page navigation. This should be marked as the default radio option.
     */ navigation: 'Navigation (Default)',
    /**
     * @description Tooltip description of a radio option for a Lighthouse mode that audits a page navigation.
     */ navigationTooltip: 'Navigation mode analyzes a page load, exactly like the original Lighthouse reports.',
    /**
     * @description Label of a radio option for a Lighthouse mode that audits user interactions over a period of time.
     */ timespan: 'Timespan',
    /**
     * @description Tooltip description of a radio option for a Lighthouse mode that audits user interactions over a period of time.
     */ timespanTooltip: 'Timespan mode analyzes an arbitrary period of time, typically containing user interactions.',
    /**
     * @description Label of a radio option for a Lighthouse mode that audits the current page state.
     */ snapshot: 'Snapshot',
    /**
     * @description Tooltip description of a radio option for a Lighthouse mode that audits the current page state.
     */ snapshotTooltip: 'Snapshot mode analyzes the page in a particular state, typically after user interactions.',
    /**
     *@description Text for the mobile platform, as opposed to desktop
     */ mobile: 'Mobile',
    /**
     *@description Text for the desktop platform, as opposed to mobile
     */ desktop: 'Desktop',
    /**
     * @description Text for an option to select a throttling method.
     */ throttlingMethod: 'Throttling method',
    /**
     * @description Text for an option in a dropdown to use simulated throttling. This is the default setting.
     */ simulatedThrottling: 'Simulated throttling (default)',
    /**
     * @description Text for an option in a dropdown to use DevTools throttling. This option should only be used by advanced users.
     */ devtoolsThrottling: 'DevTools throttling (advanced)',
    /**
     * @description Tooltip text that appears when hovering over the 'Simulated Throttling' checkbox in the settings pane opened by clicking the setting cog in the start view of the audits panel
     */ simulateASlowerPageLoadBasedOn: 'Simulated throttling simulates a slower page load based on data from an initial unthrottled load. DevTools throttling actually slows down the page.',
    /**
     *@description Text of checkbox to reset storage features prior to running audits in Lighthouse
     */ clearStorage: 'Clear storage',
    /**
     * @description Tooltip text of checkbox to reset storage features prior to running audits in
     * Lighthouse. Resetting the storage clears/empties it to a neutral state.
     */ resetStorageLocalstorage: 'Reset storage (`cache`, `service workers`, etc) before auditing. (Good for performance & `PWA` testing)',
    /**
     * @description Text of checkbox to enable JavaScript sampling while running audits in Lighthouse
     */ enableSampling: 'Enable JS sampling',
    /**
     * @description Tooltip text of checkbox to enable JavaScript sampling while running audits in
     * Lighthouse. Resetting the storage clears/empties it to a neutral state.
     */ enableJavaScriptSampling: 'Enable JavaScript sampling during the Lighthouse run. This will provide more execution details in the performance panel when you view the trace, but has higher CPU overhead and may impact the performance of the page.',
    /**
     *@description Explanation for user that Lighthouse can only audit when JavaScript is enabled
     */ javaScriptDisabled: 'JavaScript is disabled. You need to enable JavaScript to audit this page. Open the Command Menu and run the Enable JavaScript command to enable JavaScript.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/lighthouse/LighthouseController.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var LighthouseController = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(LighthouseController, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(LighthouseController);
    function LighthouseController(protocolService) {
        _class_call_check(this, LighthouseController);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "protocolService", void 0);
        _define_property(_assert_this_initialized(_this), "manager", void 0);
        _define_property(_assert_this_initialized(_this), "serviceWorkerListeners", void 0);
        _define_property(_assert_this_initialized(_this), "inspectedURL", void 0);
        _define_property(_assert_this_initialized(_this), "currentLighthouseRun", void 0);
        _define_property(_assert_this_initialized(_this), "emulationStateBefore", void 0);
        _this.protocolService = protocolService;
        protocolService.registerStatusCallback(function(message) {
            return _this.dispatchEventToListeners(Events.AuditProgressChanged, {
                message: message
            });
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Presets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var preset = _step.value;
                preset.setting.addChangeListener(_this.recomputePageAuditability.bind(_assert_this_initialized(_this)));
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
            for(var _iterator1 = RuntimeSettings[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var runtimeSetting = _step1.value;
                runtimeSetting.setting.addChangeListener(_this.recomputePageAuditability.bind(_assert_this_initialized(_this)));
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
        var javaScriptDisabledSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled');
        javaScriptDisabledSetting.addChangeListener(_this.recomputePageAuditability.bind(_assert_this_initialized(_this)));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerManager, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */ , _this.recomputePageAuditability, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(LighthouseController, [
        {
            key: "modelAdded",
            value: function modelAdded(serviceWorkerManager) {
                if (serviceWorkerManager.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.manager = serviceWorkerManager;
                this.serviceWorkerListeners = [
                    this.manager.addEventListener("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */ , this.recomputePageAuditability, this),
                    this.manager.addEventListener("RegistrationDeleted" /* SDK.ServiceWorkerManager.Events.RegistrationDeleted */ , this.recomputePageAuditability, this)
                ];
                this.recomputePageAuditability();
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(serviceWorkerManager) {
                if (this.manager !== serviceWorkerManager) {
                    return;
                }
                if (this.serviceWorkerListeners) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.serviceWorkerListeners);
                }
                this.manager = null;
                this.recomputePageAuditability();
            }
        },
        {
            key: "hasActiveServiceWorker",
            value: function hasActiveServiceWorker() {
                if (!this.manager) {
                    return false;
                }
                var mainTarget = this.manager.target();
                if (!mainTarget) {
                    return false;
                }
                var inspectedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(mainTarget.inspectedURL());
                var inspectedOrigin = inspectedURL && inspectedURL.securityOrigin();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.manager.registrations().values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var registration = _step.value;
                        if (registration.securityOrigin !== inspectedOrigin) {
                            continue;
                        }
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = registration.versions.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var version = _step1.value;
                                if (version.controlledClients.length > 1) {
                                    return true;
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
                return false;
            }
        },
        {
            key: "hasAtLeastOneCategory",
            value: function hasAtLeastOneCategory() {
                return Presets.some(function(preset) {
                    return preset.setting.get();
                });
            }
        },
        {
            key: "unauditablePageMessage",
            value: function unauditablePageMessage() {
                if (!this.manager) {
                    return null;
                }
                var mainTarget = this.manager.target();
                var inspectedURL = mainTarget && mainTarget.inspectedURL();
                /*
         * The full history of Lighthouse panel + extensions et al:
         *
         * Running Lighthouse against extensions caused crashes (crbug.com/734532), so we disabled it in Aug 2017
         * Unfortunately, the CAN_DOCK heuristic used also disabled auditing any page while remote-debugging.
         * FYI: The CAN_DOCK signal is what determines if the device-mode functionality (viewport emulation) should be shown in the UI.
         *
         * In Sept 2017 we allow-listed http* and chrome-extension URLs formally: crrev.com/c/639032
         * This added support for chrome-extension:// pages (not overlays/popups) as they satisfy CAN_DOCK.
         *
         * We wanted remote-debugging support restored, and the crashes were fixed,
         * so we renabled auditing in all CAN_DOCK cases in Feb 2019 (crbug.com/931849). This included all chrome extensions views.
         *
         * Auditing overlay windows/popups cause problems with viewport emulation (eg crbug.com/1116347)
         * And even full-page extension tabs (like OneTab) have NO_NAVSTART problems and others (crbug.com/1065323)
         * So in in April 2023 we blocked all chrome-extension cases.
         */ // Only http*, thus disallow: chrome-extension://*, about:*, chrome://dino, file://*, devtools://*, etc.
                if (!(inspectedURL === null || inspectedURL === void 0 ? void 0 : inspectedURL.startsWith('http'))) {
                    return i18nString(UIStrings.canOnlyAuditHttphttpsPages);
                }
                // Catch .pdf. TODO: handle other MimeHandler extensions. crbug.com/1168245
                try {
                    var isPdf = new URL(inspectedURL).pathname.endsWith('.pdf');
                    if (isPdf) {
                        return i18nString(UIStrings.canOnlyAuditHttphttpsPages);
                    }
                } catch (e) {
                    return i18nString(UIStrings.canOnlyAuditHttphttpsPages);
                }
                return null;
            }
        },
        {
            key: "javaScriptDisabled",
            value: function javaScriptDisabled() {
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('java-script-disabled').get();
            }
        },
        {
            key: "hasImportantResourcesNotCleared",
            value: function hasImportantResourcesNotCleared() {
                var _this = this;
                return _async_to_generator(function() {
                    var clearStorageSetting, mainTarget, origin, usageData, locations;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                clearStorageSetting = RuntimeSettings.find(function(runtimeSetting) {
                                    return runtimeSetting.setting.name === 'lighthouse.clear-storage';
                                });
                                if (clearStorageSetting && !clearStorageSetting.setting.get()) {
                                    return [
                                        2,
                                        ''
                                    ];
                                }
                                if (!_this.manager) {
                                    return [
                                        2,
                                        ''
                                    ];
                                }
                                mainTarget = _this.manager.target();
                                origin = mainTarget.inspectedURL();
                                if (!origin) {
                                    return [
                                        2,
                                        ''
                                    ];
                                }
                                return [
                                    4,
                                    mainTarget.storageAgent().invoke_getUsageAndQuota({
                                        origin: origin
                                    })
                                ];
                            case 1:
                                usageData = _state.sent();
                                if (usageData.getError()) {
                                    return [
                                        2,
                                        ''
                                    ];
                                }
                                locations = usageData.usageBreakdown.filter(function(usage) {
                                    return usage.usage;
                                }).map(function(usage) {
                                    return STORAGE_TYPE_NAMES.get(usage.storageType);
                                }).map(function(i18nStringFn) {
                                    return i18nStringFn ? i18nStringFn() : undefined;
                                }).filter(Boolean);
                                if (locations.length === 1) {
                                    return [
                                        2,
                                        i18nString(UIStrings.thereMayBeStoredDataAffectingSingular, {
                                            PH1: String(locations[0])
                                        })
                                    ];
                                }
                                if (locations.length > 1) {
                                    return [
                                        2,
                                        i18nString(UIStrings.thereMayBeStoredDataAffectingLoadingPlural, {
                                            PH1: locations.join(', ')
                                        })
                                    ];
                                }
                                return [
                                    2,
                                    ''
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "evaluateInspectedURL",
            value: function evaluateInspectedURL() {
                return _async_to_generator(function() {
                    var mainTarget, inspectedURL, resourceTreeModel, navHistory, _tmp, currentIndex, entries, navigationEntry;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    throw new Error('Unable to find main target required for Lighthouse');
                                }
                                // target.inspectedURL is reliably populated, however it lacks any url #hash
                                inspectedURL = mainTarget.inspectedURL();
                                // We'll use the navigationHistory to acquire the current URL including hash
                                resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                                _tmp = resourceTreeModel;
                                if (!_tmp) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    resourceTreeModel.navigationHistory()
                                ];
                            case 1:
                                _tmp = _state.sent();
                                _state.label = 2;
                            case 2:
                                navHistory = _tmp;
                                if (!resourceTreeModel || !navHistory) {
                                    return [
                                        2,
                                        inspectedURL
                                    ];
                                }
                                currentIndex = navHistory.currentIndex, entries = navHistory.entries;
                                navigationEntry = entries[currentIndex];
                                return [
                                    2,
                                    navigationEntry.url
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getCurrentRun",
            value: function getCurrentRun() {
                return this.currentLighthouseRun;
            }
        },
        {
            key: "getFlags",
            value: function getFlags() {
                var flags = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = RuntimeSettings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var runtimeSetting = _step.value;
                        runtimeSetting.setFlags(flags, runtimeSetting.setting.get());
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
                return flags;
            }
        },
        {
            key: "getCategoryIDs",
            value: function getCategoryIDs() {
                var categoryIDs = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Presets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var preset = _step.value;
                        if (preset.setting.get()) {
                            categoryIDs.push(preset.configID);
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
                return categoryIDs;
            }
        },
        {
            key: "getInspectedURL",
            value: function getInspectedURL(options) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(options && options.force || !_this.inspectedURL)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.evaluateInspectedURL()
                                ];
                            case 1:
                                _this.inspectedURL = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _this.inspectedURL
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "recomputePageAuditability",
            value: function recomputePageAuditability() {
                var _this = this;
                var hasActiveServiceWorker = this.hasActiveServiceWorker();
                var hasAtLeastOneCategory = this.hasAtLeastOneCategory();
                var unauditablePageMessage = this.unauditablePageMessage();
                var javaScriptDisabled = this.javaScriptDisabled();
                var helpText = '';
                if (hasActiveServiceWorker) {
                    helpText = i18nString(UIStrings.multipleTabsAreBeingControlledBy);
                } else if (!hasAtLeastOneCategory) {
                    helpText = i18nString(UIStrings.atLeastOneCategoryMustBeSelected);
                } else if (unauditablePageMessage) {
                    helpText = unauditablePageMessage;
                } else if (javaScriptDisabled) {
                    helpText = i18nString(UIStrings.javaScriptDisabled);
                }
                this.dispatchEventToListeners(Events.PageAuditabilityChanged, {
                    helpText: helpText
                });
                void this.hasImportantResourcesNotCleared().then(function(warning) {
                    if (_this.getFlags().mode !== 'navigation') {
                        warning = '';
                    }
                    _this.dispatchEventToListeners(Events.PageWarningsChanged, {
                        warning: warning
                    });
                });
            }
        },
        {
            key: "recordMetrics",
            value: function recordMetrics(flags, categoryIds) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseStarted);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Presets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var preset = _step.value;
                        if (!categoryIds.includes(preset.configID)) {
                            continue;
                        }
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseCategoryUsed(preset.userMetric);
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
                switch(flags.mode){
                    case 'navigation':
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseModeRun(0 /* Host.UserMetrics.LighthouseModeRun.Navigation */ );
                        break;
                    case 'timespan':
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseModeRun(1 /* Host.UserMetrics.LighthouseModeRun.Timespan */ );
                        break;
                    case 'snapshot':
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.lighthouseModeRun(2 /* Host.UserMetrics.LighthouseModeRun.Snapshot */ );
                        break;
                }
            }
        },
        {
            key: "startLighthouse",
            value: function startLighthouse() {
                var _this = this;
                return _async_to_generator(function() {
                    var inspectedURL, categoryIDs, flags, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    5,
                                    ,
                                    7
                                ]);
                                return [
                                    4,
                                    _this.getInspectedURL({
                                        force: true
                                    })
                                ];
                            case 1:
                                inspectedURL = _state.sent();
                                categoryIDs = _this.getCategoryIDs();
                                flags = _this.getFlags();
                                _this.recordMetrics(flags, categoryIDs);
                                _this.currentLighthouseRun = {
                                    inspectedURL: inspectedURL,
                                    categoryIDs: categoryIDs,
                                    flags: flags
                                };
                                return [
                                    4,
                                    _this.setupEmulationAndProtocolConnection()
                                ];
                            case 2:
                                _state.sent();
                                if (!(flags.mode === 'timespan')) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.protocolService.startTimespan(_this.currentLighthouseRun)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    3,
                                    7
                                ];
                            case 5:
                                err = _state.sent();
                                return [
                                    4,
                                    _this.restoreEmulationAndProtocolConnection()
                                ];
                            case 6:
                                _state.sent();
                                throw err;
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "collectLighthouseResults",
            value: function collectLighthouseResults() {
                var _this = this;
                return _async_to_generator(function() {
                    var lighthouseResponse, error, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    5,
                                    6
                                ]);
                                if (!_this.currentLighthouseRun) {
                                    throw new Error('Lighthouse is not started');
                                }
                                return [
                                    4,
                                    _this.protocolService.collectLighthouseResults(_this.currentLighthouseRun)
                                ];
                            case 1:
                                lighthouseResponse = _state.sent();
                                if (!lighthouseResponse) {
                                    throw new Error('Auditing failed to produce a result');
                                }
                                if (lighthouseResponse.fatal) {
                                    error = new Error(lighthouseResponse.message);
                                    error.stack = lighthouseResponse.stack;
                                    throw error;
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseFinished);
                                return [
                                    4,
                                    _this.restoreEmulationAndProtocolConnection()
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    lighthouseResponse
                                ];
                            case 3:
                                err = _state.sent();
                                return [
                                    4,
                                    _this.restoreEmulationAndProtocolConnection()
                                ];
                            case 4:
                                _state.sent();
                                throw err;
                            case 5:
                                _this.currentLighthouseRun = undefined;
                                return [
                                    7
                                ];
                            case 6:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "cancelLighthouse",
            value: function cancelLighthouse() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.restoreEmulationAndProtocolConnection()
                                ];
                            case 1:
                                _state.sent();
                                _this.currentLighthouseRun = undefined;
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setupEmulationAndProtocolConnection",
            value: /**
     * We set the device emulation on the DevTools-side for two reasons:
     * 1. To workaround some odd device metrics emulation bugs like occuluding viewports
     * 2. To get the attractive device outline
     */ function setupEmulationAndProtocolConnection() {
                var _this = this;
                return _async_to_generator(function() {
                    var flags, emulationModel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, device;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                flags = _this.getFlags();
                                emulationModel = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance();
                                _this.emulationStateBefore = {
                                    emulation: {
                                        type: emulationModel.type(),
                                        enabled: emulationModel.enabledSetting().get(),
                                        outlineEnabled: emulationModel.deviceOutlineSetting().get(),
                                        toolbarControlsEnabled: emulationModel.toolbarControlsEnabledSetting().get(),
                                        scale: emulationModel.scaleSetting().get(),
                                        device: emulationModel.device(),
                                        mode: emulationModel.mode()
                                    },
                                    network: {
                                        conditions: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().networkConditions()
                                    }
                                };
                                emulationModel.toolbarControlsEnabledSetting().set(false);
                                if ('formFactor' in flags && flags.formFactor === 'desktop') {
                                    emulationModel.enabledSetting().set(false);
                                    emulationModel.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None, null, null);
                                } else if (flags.formFactor === 'mobile') {
                                    emulationModel.enabledSetting().set(true);
                                    emulationModel.deviceOutlineSetting().set(true);
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.EmulatedDevices.EmulatedDevicesList.instance().standard()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            device = _step.value;
                                            if (device.title === 'Moto G Power') {
                                                emulationModel.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device, device, device.modes[0], 1);
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
                                return [
                                    4,
                                    _this.protocolService.attach()
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
            key: "restoreEmulationAndProtocolConnection",
            value: function restoreEmulationAndProtocolConnection() {
                var _this = this;
                return _async_to_generator(function() {
                    var emulationModel, _this_emulationStateBefore_emulation, type, enabled, outlineEnabled, toolbarControlsEnabled, scale, device, mode, mainTarget, resourceTreeModel, mode1, inspectedURL;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.currentLighthouseRun) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.protocolService.detach()
                                ];
                            case 1:
                                _state.sent();
                                if (_this.emulationStateBefore) {
                                    emulationModel = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance();
                                    // Detaching a session after overriding device metrics will prevent other sessions from overriding device metrics in the future.
                                    // A workaround is to call "Emulation.clearDeviceMetricOverride" which is the result of the next line.
                                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1337089
                                    emulationModel.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None, null, null);
                                    _this_emulationStateBefore_emulation = _this.emulationStateBefore.emulation, type = _this_emulationStateBefore_emulation.type, enabled = _this_emulationStateBefore_emulation.enabled, outlineEnabled = _this_emulationStateBefore_emulation.outlineEnabled, toolbarControlsEnabled = _this_emulationStateBefore_emulation.toolbarControlsEnabled, scale = _this_emulationStateBefore_emulation.scale, device = _this_emulationStateBefore_emulation.device, mode = _this_emulationStateBefore_emulation.mode;
                                    emulationModel.enabledSetting().set(enabled);
                                    emulationModel.deviceOutlineSetting().set(outlineEnabled);
                                    emulationModel.toolbarControlsEnabledSetting().set(toolbarControlsEnabled);
                                    // `emulate` will ignore the `scale` parameter for responsive emulation.
                                    // In this case we can just set it here.
                                    if (type === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive) {
                                        emulationModel.scaleSetting().set(scale);
                                    }
                                    emulationModel.emulate(type, device, mode, scale);
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.MultitargetNetworkManager.instance().setNetworkConditions(_this.emulationStateBefore.network.conditions);
                                    delete _this.emulationStateBefore;
                                }
                                _emulation_emulation_js__WEBPACK_IMPORTED_MODULE_5__.InspectedPagePlaceholder.InspectedPagePlaceholder.instance().update(true);
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    return [
                                        2
                                    ];
                                }
                                resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                                if (!resourceTreeModel) {
                                    return [
                                        2
                                    ];
                                }
                                // Reload to reset page state after a navigation.
                                // We want to retain page state for timespan and snapshot modes.
                                mode1 = _this.currentLighthouseRun.flags.mode;
                                if (!(mode1 === 'navigation')) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.getInspectedURL()
                                ];
                            case 2:
                                inspectedURL = _state.sent();
                                return [
                                    4,
                                    resourceTreeModel.navigate(inspectedURL)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return LighthouseController;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var STORAGE_TYPE_NAMES = new Map([
    [
        "local_storage" /* Protocol.Storage.StorageType.Local_storage */ ,
        i18nLazyString(UIStrings.localStorage)
    ],
    [
        "indexeddb" /* Protocol.Storage.StorageType.Indexeddb */ ,
        i18nLazyString(UIStrings.indexeddb)
    ],
    [
        "websql" /* Protocol.Storage.StorageType.Websql */ ,
        i18nLazyString(UIStrings.webSql)
    ]
]);
var Presets = [
    // configID maps to Lighthouse's Object.keys(config.categories)[0] value
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-perf', true, "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        configID: 'performance',
        title: i18nLazyString(UIStrings.performance),
        description: i18nLazyString(UIStrings.howLongDoesThisAppTakeToShow),
        supportedModes: [
            'navigation',
            'timespan',
            'snapshot'
        ],
        userMetric: 0 /* Host.UserMetrics.LighthouseCategoryUsed.Performance */ 
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-a11y', true, "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        configID: 'accessibility',
        title: i18nLazyString(UIStrings.accessibility),
        description: i18nLazyString(UIStrings.isThisPageUsableByPeopleWith),
        supportedModes: [
            'navigation',
            'snapshot'
        ],
        userMetric: 1 /* Host.UserMetrics.LighthouseCategoryUsed.Accessibility */ 
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-best-practices', true, "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        configID: 'best-practices',
        title: i18nLazyString(UIStrings.bestPractices),
        description: i18nLazyString(UIStrings.doesThisPageFollowBestPractices),
        supportedModes: [
            'navigation',
            'timespan',
            'snapshot'
        ],
        userMetric: 2 /* Host.UserMetrics.LighthouseCategoryUsed.BestPractices */ 
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.cat-seo', true, "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        configID: 'seo',
        title: i18nLazyString(UIStrings.seo),
        description: i18nLazyString(UIStrings.isThisPageOptimizedForSearch),
        supportedModes: [
            'navigation',
            'snapshot'
        ],
        userMetric: 3 /* Host.UserMetrics.LighthouseCategoryUsed.SEO */ 
    }
];
var RuntimeSettings = [
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.device-type', 'mobile', "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        title: i18nLazyString(UIStrings.applyMobileEmulation),
        description: i18nLazyString(UIStrings.applyMobileEmulationDuring),
        setFlags: function(flags, value) {
            // See Audits.AuditsPanel._setupEmulationAndProtocolConnection()
            flags.formFactor = value;
        },
        options: [
            {
                label: i18nLazyString(UIStrings.mobile),
                value: 'mobile'
            },
            {
                label: i18nLazyString(UIStrings.desktop),
                value: 'desktop'
            }
        ],
        learnMore: undefined
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.mode', 'navigation', "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        title: i18nLazyString(UIStrings.lighthouseMode),
        description: i18nLazyString(UIStrings.runLighthouseInMode),
        setFlags: function(flags, value) {
            flags.mode = value;
        },
        options: [
            {
                label: i18nLazyString(UIStrings.navigation),
                tooltip: i18nLazyString(UIStrings.navigationTooltip),
                value: 'navigation'
            },
            {
                label: i18nLazyString(UIStrings.timespan),
                tooltip: i18nLazyString(UIStrings.timespanTooltip),
                value: 'timespan'
            },
            {
                label: i18nLazyString(UIStrings.snapshot),
                tooltip: i18nLazyString(UIStrings.snapshotTooltip),
                value: 'snapshot'
            }
        ],
        learnMore: 'https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md'
    },
    {
        // This setting is disabled, but we keep it around to show in the UI.
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.throttling', 'simulate', "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        title: i18nLazyString(UIStrings.throttlingMethod),
        // We will disable this when we have a Lantern trace viewer within DevTools.
        learnMore: 'https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md#devtools-lighthouse-panel-throttling',
        description: i18nLazyString(UIStrings.simulateASlowerPageLoadBasedOn),
        setFlags: function(flags, value) {
            if (typeof value === 'string') {
                flags.throttlingMethod = value;
            } else {
                flags.throttlingMethod = value ? 'simulate' : 'devtools';
            }
        },
        options: [
            {
                label: i18nLazyString(UIStrings.simulatedThrottling),
                value: 'simulate'
            },
            {
                label: i18nLazyString(UIStrings.devtoolsThrottling),
                value: 'devtools'
            }
        ]
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.clear-storage', true, "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        title: i18nLazyString(UIStrings.clearStorage),
        description: i18nLazyString(UIStrings.resetStorageLocalstorage),
        setFlags: function(flags, value) {
            flags.disableStorageReset = !value;
        },
        options: undefined,
        learnMore: undefined
    },
    {
        setting: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lighthouse.enable-sampling', false, "Synced" /* Common.Settings.SettingStorageType.Synced */ ),
        title: i18nLazyString(UIStrings.enableSampling),
        description: i18nLazyString(UIStrings.enableJavaScriptSampling),
        setFlags: function(flags, value) {
            if (value) {
                flags.additionalTraceCategories = 'disabled-by-default-v8.cpu_profiler';
            } else {
                flags.additionalTraceCategories = '';
            }
        },
        options: undefined,
        learnMore: undefined
    }
];
var Events;
(function(Events) {
    Events["PageAuditabilityChanged"] = "PageAuditabilityChanged";
    Events["PageWarningsChanged"] = "PageWarningsChanged";
    Events["AuditProgressChanged"] = "AuditProgressChanged";
})(Events || (Events = {})); //# sourceMappingURL=LighthouseController.js.map


}),

}]);